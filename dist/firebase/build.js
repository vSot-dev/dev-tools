"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buildProject_1 = __importDefault(require("../utils/buildProject"));
const Project = {
    cwd: process.cwd(),
    dir: "Server/functions"
};
async function ServerBuild() {
    await (0, buildProject_1.default)(Project);
}
exports.default = ServerBuild;
