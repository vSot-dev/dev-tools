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
        "Firebase/functions/__sapper__",
        "Firebase/functions/lib",
        "Firebase/static/*",
        "Firebase/database-debug.log",
        "Firebase/firestore-debug.log",
        "Firebase/pubsub-debug.log",
        "Firebase/ui-debug.log"
    ]
};
function FirebaseCleanUp() {
    (0, deleteFiles_1.default)(ToDelete)
        .catch(() => {
        console.error("%s Clean up failed!\nProcess was unable to delete some files!", chalk_1.default.red.bold("ERROR:"));
    });
}
exports.default = FirebaseCleanUp;
