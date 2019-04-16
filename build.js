const { print, filesystem, prompt, system, colors } = require('gluegun');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    var package = JSON.parse(filesystem.read("./package.json"));
    var versao = package.version;
    versao = versao.split(".");

    var major = Number.parseInt(versao[0]);
    var minor = Number.parseInt(versao[1]);
    var build = Number.parseInt(versao[2]);

    var { newVersion } = await prompt.ask({
        type: "select",
        name: "newVersion",
        message: "Selecione o novo número de versão:",
        choices: [
            `${major + 1}.0.0`,
            `${major}.${minor + 1}.0`,
            `${major}.${minor}.${build + 1}`,
            `${major}.${minor}.${build}`
        ]
    });

    package.version = newVersion;

    await filesystem.writeAsync("./package.json", JSON.stringify(package, null, 4));

    console.log("Realizando build...");

    await sleep(300);

    await filesystem.removeAsync('./dist');
    await filesystem.removeAsync('./types');

    await filesystem.copy("./src/Report.css", "./dist/Report.css", { overwrite: true });

    if(!filesystem.exists("./public/bootstrap.min.css"))
        await filesystem.copy("./node_modules/bootstrap/dist/css/bootstrap.min.css", "./public");

    await filesystem.dirAsync("./types");

    // Alterando configurações do tsconfig.json para gerar build de produção
    var tsconfig = JSON.parse(filesystem.read("./tsconfig.json"));
    tsconfig.compilerOptions.jsx = "react";
    tsconfig.compilerOptions.allowJs = false;
    tsconfig.compilerOptions.isolatedModules = false;
    tsconfig.compilerOptions.noEmit = false;
    await filesystem.writeAsync("./tsconfig.json", JSON.stringify(tsconfig, null, 4));

    await sleep(300);

    system.run("tsc -d --declarationDir ./types").then(() => {
        console.log("Build realizado com sucesso!");
    })
    .catch((e) => {
        console.error(e);
    });
})();