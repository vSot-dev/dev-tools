import Chalk from 'chalk';
import Execa from 'execa';


export default async function WebAppStart() {

    console.info(`%s Starting Sapper`, Chalk.green.bold("PROCESS:"));

    await Execa("npm", ["run", "dev"], {
        cwd: `${process.cwd()}/Sapper`,
        detached: true,
        shell: true,
        stdio: 'inherit'
    })
    .catch(() => {
        console.info("%s Process was terminated!", Chalk.red.bold("PROCESS:"));
    });

}
