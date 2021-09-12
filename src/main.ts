import Inquirer, { QuestionCollection, Answers } from "inquirer";
import WebAppBuild from './webapp/build';
import WebAppStart from './webapp/run';
import WebAppCleanup from './webapp/cleanup'
import ServerBuild from './firebase/build';
import ServerDeploy from './firebase/deploy';
import ServerEmulatorsStart from './firebase/run';
import ServerCleanup from './firebase/cleanup';
import { init } from './cli';

export async function create (args: any) {

}

export async function run (args: any) {

    const Questions: QuestionCollection =
    [
        {
            name: "emulators",
            type: "confirm",
            default: false,
            message: "Do you want to run server emulators?",
        }
    ];

    const answers = await Inquirer.prompt(Questions);

    if (answers.emulators) {
        await WebAppBuild();
        await ServerBuild();
        await ServerEmulatorsStart();
        await ServerCleanup();
    }
    else {
        await WebAppStart()

    }

    await WebAppCleanup();

}

export async function deploy (args: any) {

    const Questions: QuestionCollection =
    [
        {
            name: "website",
            type: "confirm",
            default: false,
            message: "Do you want to rebuild website?",
        }
    ];

    const answers = await Inquirer.prompt(Questions);

    if (answers.website) {
        await WebAppBuild();
    }

    await ServerBuild();
    await ServerDeploy();
    await ServerCleanup();
    await WebAppCleanup();

}

export async function build (args: any) {

    const Questions: QuestionCollection =
    [
        {
            name: "toBuild",
            type: "checkbox",
            message: "Please choose what projects you want to build:",
            choices: [
                {
                    name: "Firebase",
                    checked: true
                },
                {
                    name: "Sapper",
                    checked: true
                }
            ],
            validate: (answer: Array<Object>) => {
                return answer.length > 0 ? true : "You must select at least one project!"
            }
        }
        
    ];

    const answers = await Inquirer.prompt(Questions);

    if (answers.toBuild.includes("Server")) {
        await ServerBuild();
    }

    if (answers.toBuild.includes("Website")) {
        await WebAppBuild();
    }

}
