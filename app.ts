import * as yargs from "yargs";
import chalk from "chalk";
import getNotes from "./notes";
const print = console.log;

// Create Add Command

yargs
    .command({
        command: "add",
        describe: "Add a new note",
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: "string",
            }
        },
        handler: (argv) => print(`Title: ${argv.title}\n`)
    })
    .command({
        command: "remove",
        describe: "Remove a note",
        handler: () => print("Removing a note\n")
    })
    .command({
        command: "list",
        describe: "List notes",
        handler: () => print("Notes: ...\n")
    })
    .command({
        command: "read",
        describe: "Read note",
        handler: () => print("Reading note\n")
    })
    .parse();

// print(yargs.argv);


// switch (command) {

//     case "add":
//         print("Adding note");
//         break;

//     case "remove":
//         print("Removing note");
//         break;
// }