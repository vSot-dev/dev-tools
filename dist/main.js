"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.deploy = exports.run = exports.create = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const build_1 = __importDefault(require("./webapp/build"));
const run_1 = __importDefault(require("./webapp/run"));
const cleanup_1 = __importDefault(require("./webapp/cleanup"));
const build_2 = __importDefault(require("./firebase/build"));
const deploy_1 = __importDefault(require("./firebase/deploy"));
const run_2 = __importDefault(require("./firebase/run"));
const cleanup_2 = __importDefault(require("./firebase/cleanup"));
async function create(args) {
}
exports.create = create;
async function run(args) {
    const Questions = [
        {
            name: "emulators",
            type: "confirm",
            default: false,
            message: "Do you want to run server emulators?",
        }
    ];
    const answers = await inquirer_1.default.prompt(Questions);
    if (answers.emulators) {
        await (0, build_1.default)();
        await (0, build_2.default)();
        await (0, run_2.default)();
        await (0, cleanup_2.default)();
    }
    else {
        await (0, run_1.default)();
    }
    await (0, cleanup_1.default)();
}
exports.run = run;
async function deploy(args) {
    const Questions = [
        {
            name: "website",
            type: "confirm",
            default: false,
            message: "Do you want to rebuild website?",
        }
    ];
    const answers = await inquirer_1.default.prompt(Questions);
    if (answers.website) {
        await (0, build_1.default)();
    }
    await (0, build_2.default)();
    await (0, deploy_1.default)();
    await (0, cleanup_2.default)();
    await (0, cleanup_1.default)();
}
exports.deploy = deploy;
async function build(args) {
    const Questions = [
        {
            name: "toBuild",
            type: "checkbox",
            message: "Please choose what projects you want to build:",
            choices: [
                {
                    name: "Firebase",
                    checked: true
                },
                {
                    name: "Sapper",
                    checked: true
                }
            ],
            validate: (answer) => {
                return answer.length > 0 ? true : "You must select at least one project!";
            }
        }
    ];
    const answers = await inquirer_1.default.prompt(Questions);
    if (answers.toBuild.includes("Server")) {
        await (0, build_2.default)();
    }
    if (answers.toBuild.includes("Website")) {
        await (0, build_1.default)();
    }
}
exports.build = build;
