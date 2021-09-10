import deleteFiles, { FileList } from '../utils/deleteFiles';
import Chalk from 'chalk';

const ToDelete: FileList = {

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

}



export default function FirebaseCleanUp () {

    deleteFiles(ToDelete)
        .catch(() => {
            console.error("%s Clean up failed!\nProcess was unable to delete some files!", Chalk.red.bold("ERROR:"));
        });

}
