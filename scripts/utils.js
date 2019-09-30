const fs = require('fs');
const moment = require('moment');

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const tryExportJson = (file, obj, overwrite = false, format = false) => {
    try {
        if (!overwrite && fs.existsSync(file)) {
            console.error('File ' + file + ' already exists!');
            return;
        }
        fs.writeFileSync(file, JSON.stringify(obj, null, format ? 4 : null));
    } catch (error) {
        console.error(error);
    }
};

const tryMakeDir = (dir) => {
    try {
        fs.mkdirSync(dir);
    } catch (error) {}
};

const importJson = (file) => {
    return JSON.parse(fs.readFileSync(file));
};

const log = (msg) => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);

module.exports = {
    delay,
    importJson,
    log,
    tryExportJson,
    tryMakeDir
};
