const { print, filesystem, prompt, system, colors } = require('gluegun');

(async () => {
    await filesystem.removeAsync('./dist');
    await filesystem.removeAsync('./types');

    await filesystem.copy("./src/Report.css", "./dist/Report.css", { overwrite: true });

    if(!filesystem.exists("./public/bootstrap.min.css"))
        await filesystem.copy("./node_modules/bootstrap/dist/css/bootstrap.min.css", "./public");

    await filesystem.dirAsync("./types");

    await system.run("tsc -d --declarationDir ./types").then(() => {
        console.log("Sucesso!");
    })
    .catch((e) => {
        console.error(e);
    });
})()