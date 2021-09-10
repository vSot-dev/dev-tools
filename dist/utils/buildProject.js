"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const execa_1 = __importDefault(require("execa"));
async function buildProject(directory) {
    console.info(`%s Building Project: ${directory.dir}`, chalk_1.default.green.bold("PROCESS:"));
    await (0, execa_1.default)("npm", ["run", "build"], {
        cwd: `${directory.cwd}/${directory.dir}`
    })
        .catch(() => {
        console.info("%s Process was terminated!", chalk_1.default.red.bold("PROCESS:"));
    });
}
exports.default = buildProject;
