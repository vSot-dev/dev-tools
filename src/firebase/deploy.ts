import Chalk from 'chalk';
import Execa from 'execa';


export default async function ServerDeploy () {

    console.info(`%s Deploying Project To Firebase`, Chalk.green.bold("PROCESS:"));

    await Execa("npx", ["firebase", "deploy"], {
        cwd: `${process.cwd()}/Server`,
        detached: true,
        shell: true,
        stdio: 'inherit'
    })
    .catch(() => {
        console.info("%s Process was terminated!", Chalk.red.bold("PROCESS:"));
    });

}
