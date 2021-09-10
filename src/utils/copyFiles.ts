import Chalk from 'chalk';
import NCP from 'ncp';

enum path {
    dir = 0,
    destination = 1
}

export interface FileToCopy {
    cwd: string,
    files: Array<[
        dir: string,
        destination: string
    ]>
}


export default async function buildProject(filesToCopy: FileToCopy) {

    await filesToCopy.files.forEach((file) => {

        console.info(`%s Copying File: ${file[path.dir]}`, Chalk.green.bold("PROCESS:"));

        NCP.ncp(

            `${filesToCopy.cwd}/${file[path.dir]}`,

            `${filesToCopy.cwd}/${file[path.destination]}`,

            (error) => {
                return error ? Promise.reject() : Promise.resolve();
            }

        );

    });

}
