import getNotes from "./notes";
import { bgGreen } from "chalk";
const print = console.log;

const msg: string = getNotes();
print(msg);
print(bgGreen("Success!"));
