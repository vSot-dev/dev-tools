import Inquirer, { Question, Answers } from 'inquirer';
import type { Config, Option, SubOption } from './config/Config';

import projectConfig from './config/project.config.json';

export async function init (args: any) {

    //let options = parseArguments(args);

    let questions = parseQuestions(projectConfig);

    const answers = await Inquirer.prompt(questions);


}

function parseArguments (configFile: Config) {

}

function parseQuestions (configFile: Config): Array<Question> {
    
    const questions: Array<Question> = [];

    configFile.options.forEach((option: Option) => {

        questions.push({

            name: option.name,
            ...option.question
            
        });

        option.subOptions?.forEach((subOption: SubOption) => {

            questions.push({

                name: subOption.name,
                ...subOption.question,

                when: (answers: Answers) => {
                    return answers[option.name] === subOption.when;
                }

            });

        });

    });

    return questions;

}