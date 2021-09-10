"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const rimraf_1 = __importDefault(require("rimraf"));
async function deleteFiles(fileList) {
    console.info(`%s Deleting unnecessary files at: ${fileList.cwd}`, chalk_1.default.green.bold("PROCESS:"));
    await fileList.files.forEach((file) => {
        (0, rimraf_1.default)(`${fileList.cwd}/${file}`, (error) => {
            if (error) {
                console.info(`%s Failed to delete file: ${file}`, chalk_1.default.cyan.bold("INFO:"));
                Promise.reject();
            }
            else {
                console.info(`%s Deleted file: ${file}`, chalk_1.default.cyan.bold("SUCCESS:"));
                Promise.resolve();
            }
        });
    });
}
exports.default = deleteFiles;
