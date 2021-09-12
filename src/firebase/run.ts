import Chalk from 'chalk';
import Execa from 'execa';

export default async function ServerEmulatorsStart () {

    console.info(`%s Starting Firebase Emulators`, Chalk.green.bold("PROCESS:"));

    await Execa("npx", ["firebase", "emulators:start"], {
        cwd: `${process.cwd()}/Server`,
        detached: true,
        shell: true,
        stdio: 'inherit'
    })
    .catch(() => {
        console.info("%s Process was terminated!", Chalk.red.bold("PROCESS:"));
    });

}
