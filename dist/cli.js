"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const project_config_json_1 = __importDefault(require("./config/project.config.json"));
async function init(args) {
    let questions = parseQuestions(project_config_json_1.default);
    const answers = await inquirer_1.default.prompt(questions);
}
exports.init = init;
function parseArguments(configFile) {
}
function parseQuestions(configFile) {
    const questions = [];
    configFile.options.forEach((option) => {
        var _a;
        questions.push(Object.assign({ name: option.name }, option.question));
        (_a = option.subOptions) === null || _a === void 0 ? void 0 : _a.forEach((subOption) => {
            questions.push(Object.assign(Object.assign({ name: subOption.name }, subOption.question), { when: (answers) => {
                    return answers[option.name] === subOption.when;
                } }));
        });
    });
    return questions;
}
