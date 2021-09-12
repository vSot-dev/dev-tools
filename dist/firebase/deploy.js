"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const execa_1 = __importDefault(require("execa"));
async function ServerDeploy() {
    console.info(`%s Deploying Project To Firebase`, chalk_1.default.green.bold("PROCESS:"));
    await (0, execa_1.default)("npx", ["firebase", "deploy"], {
        cwd: `${process.cwd()}/Server`,
        detached: true,
        shell: true,
        stdio: 'inherit'
    })
        .catch(() => {
        console.info("%s Process was terminated!", chalk_1.default.red.bold("PROCESS:"));
    });
}
exports.default = ServerDeploy;
