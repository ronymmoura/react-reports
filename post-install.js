const fs = require('fs');

fs.copyFile('./dist/Report.css', '../../../public/Report.css', (err) => {
    if (err) throw err;
    console.log('Report.css was copied to ./public/Report.css');
});