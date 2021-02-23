"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
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
        },
        body: {
            describe: "Body content",
            demandOption: true,
            type: "string",
        }
    },
    handler: (argv) => print(`Title: ${argv.title}\n` + `Body: ${argv.body}\n`)
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
