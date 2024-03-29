import buildProject, { ProjectDir } from '../utils/buildProject';
import copyFiles, { FileToCopy } from '../utils/copyFiles';
import Chalk from 'chalk';

const Project: ProjectDir = {
    cwd: process.cwd(),
    dir: "Sapper"
}

const Files: FileToCopy = {
    cwd: process.cwd(),
    files: [
        ["Website/static", "Server/static"],
        ["Website/__sapper__", "Server/functions/__sapper__"],
    ]
}



export default async function WebAppBuild () {

    await buildProject(Project);

    await copyFiles(Files)
        .catch(() => {
            console.error("%s Failed to copy files!\nProcess was unable to move sapper files!", Chalk.red.bold("ERROR:"));
        });

}
