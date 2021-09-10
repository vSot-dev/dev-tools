import deleteFiles, { FileList } from '../utils/deleteFiles';
import Chalk from 'chalk';

const ToDelete: FileList = {

    cwd: process.cwd(),

    files: [
        "Sapper/__sapper__",
        "Sapper/src/node_modules"
    ]

}



export default function WebAppCleanup () {

    deleteFiles(ToDelete)
        .catch(() => {
            console.error("%s Clean up failed!\nProcess was unable to delete some files!", Chalk.red.bold("ERROR:"));
        });

}
