"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buildProject_1 = __importDefault(require("../utils/buildProject"));
const copyFiles_1 = __importDefault(require("../utils/copyFiles"));
const chalk_1 = __importDefault(require("chalk"));
const Project = {
    cwd: process.cwd(),
    dir: "Sapper"
};
const Files = {
    cwd: process.cwd(),
    files: [
        ["Sapper/static", "Firebase/static"],
        ["Sapper/__sapper__", "Firebase/functions/__sapper__"],
    ]
};
async function WebAppBuild() {
    await (0, buildProject_1.default)(Project);
    await (0, copyFiles_1.default)(Files)
        .catch(() => {
        console.error("%s Failed to copy files!\nProcess was unable to move sapper files!", chalk_1.default.red.bold("ERROR:"));
    });
}
exports.default = WebAppBuild;
