import Inquirer, { QuestionCollection, Answers } from "inquirer";
import WebAppBuild from './webapp/build';
import WebAppStart from './webapp/run';
import WebAppCleanup from './webapp/cleanup'
import FirebaseBuild from './firebase/build';
import FirebaseDeploy from './firebase/deploy';
import FirebaseEmulatorsStart from './firebase/run';
import FirebaseCleanup from './firebase/cleanup';
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
            message: "Do you want to run firebase emulators?",
        }
    ];

    const answers = await Inquirer.prompt(Questions);

    if (answers.emulators) {
        await WebAppBuild();
        await FirebaseBuild();
        await FirebaseEmulatorsStart();
        await FirebaseCleanup();
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
            name: "sapper",
            type: "confirm",
            default: false,
            message: "Do you want to rebuild sapper?",
        }
    ];

    const answers = await Inquirer.prompt(Questions);

    if (answers.sapper) {
        await WebAppBuild();
    }

    await FirebaseBuild();
    await FirebaseDeploy();
    await FirebaseCleanup();
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

    if (answers.toBuild.includes("Firebase")) {
        await FirebaseBuild();
    }

    if (answers.toBuild.includes("Sapper")) {
        await WebAppBuild();
    }

}
