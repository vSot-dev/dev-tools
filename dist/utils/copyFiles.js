"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ncp_1 = __importDefault(require("ncp"));
var path;
(function (path) {
    path[path["dir"] = 0] = "dir";
    path[path["destination"] = 1] = "destination";
})(path || (path = {}));
async function buildProject(filesToCopy) {
    await filesToCopy.files.forEach((file) => {
        console.info(`%s Copying File: ${file[path.dir]}`, chalk_1.default.green.bold("PROCESS:"));
        ncp_1.default.ncp(`${filesToCopy.cwd}/${file[path.dir]}`, `${filesToCopy.cwd}/${file[path.destination]}`, (error) => {
            return error ? Promise.reject() : Promise.resolve();
        });
    });
}
exports.default = buildProject;
