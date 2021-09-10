import Chalk from 'chalk';
import Execa from 'execa';

export interface ProjectDir {
    cwd: string,
    dir: string
}


export default async function buildProject(directory: ProjectDir) {

    console.info(`%s Building Project: ${directory.dir}`, Chalk.green.bold("PROCESS:"));

    await Execa("npm", ["run", "build"], {
        cwd: `${directory.cwd}/${directory.dir}`
    })
    .catch(() => {
        console.info("%s Process was terminated!", Chalk.red.bold("PROCESS:"));
    });

}
