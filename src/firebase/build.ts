import buildProject, { ProjectDir } from '../utils/buildProject';
import Chalk from 'chalk';

const Project: ProjectDir = {
    cwd: process.cwd(),
    dir: "Firebase/functions"
}



export default async function WebAppBuild () {

    await buildProject(Project);

}
