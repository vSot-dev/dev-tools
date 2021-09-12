import deleteFiles, { FileList } from '../utils/deleteFiles';
import Chalk from 'chalk';

const ToDelete: FileList = {

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

}



export default function ServerCleanUp () {

    deleteFiles(ToDelete)
        .catch(() => {
            console.error("%s Clean up failed!\nProcess was unable to delete some files!", Chalk.red.bold("ERROR:"));
        });

}
