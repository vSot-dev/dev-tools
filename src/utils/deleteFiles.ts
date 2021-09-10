import Chalk from 'chalk';
import RIMRAF from 'rimraf';

export interface FileList {
    cwd: string,
    files: Array<String>
}

export default async function deleteFiles(fileList: FileList) {

    console.info(`%s Deleting unnecessary files at: ${fileList.cwd}`, Chalk.green.bold("PROCESS:"));

    await fileList.files.forEach((file) => {

        RIMRAF(`${fileList.cwd}/${file}`, (error) => {
        
            if (error) {
                console.info(`%s Failed to delete file: ${file}`, Chalk.cyan.bold("INFO:"));
                Promise.reject();
            }
    
            else {
                console.info(`%s Deleted file: ${file}`, Chalk.cyan.bold("SUCCESS:"));
                Promise.resolve();
            }
    
        });

    })

}
