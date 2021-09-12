import buildProject, { ProjectDir } from '../utils/buildProject';

const Project: ProjectDir = {
    cwd: process.cwd(),
    dir: "Server/functions"
}

export default async function ServerBuild () {

    await buildProject(Project);

}
