"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deleteFiles_1 = __importDefault(require("../utils/deleteFiles"));
const chalk_1 = __importDefault(require("chalk"));
const ToDelete = {
    cwd: process.cwd(),
    files: [
        "Server/functions/__sapper__",
        "Server/functions/lib",
        "Server/static/*",
        "Server/database-debug.log",
        "Server/firestore-debug.log",
        "Server/pubsub-debug.log",
        "Server/ui-debug.log"
    ]
};
function ServerCleanUp() {
    (0, deleteFiles_1.default)(ToDelete)
        .catch(() => {
        console.error("%s Clean up failed!\nProcess was unable to delete some files!", chalk_1.default.red.bold("ERROR:"));
    });
}
exports.default = ServerCleanUp;
