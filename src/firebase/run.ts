import Chalk from 'chalk';
import Execa from 'execa';

export default async function FirebaseEmulatorsStart() {

    console.info(`%s Starting Sapper`, Chalk.green.bold("PROCESS:"));

    await Execa("npx", ["firebase", "emulators:start"], {
        cwd: `${process.cwd()}/Firebase`,
        detached: true,
        shell: true,
        stdio: 'inherit'
    })
    .catch(() => {
        console.info("%s Process was terminated!", Chalk.red.bold("PROCESS:"));
    });

}
