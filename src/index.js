// import {Keyboard} from "./keyboard.js";
// import {Result} from "./result.js";
// import {BodyParts} from "../src/bodyparts";

import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { Result } from "./result.js";

const panel = new Panel();
// panel.pintarGuiones();
panel.addWord();

const app = new Keyboard();

const array = app.createKeyboard();


const apps = new Result();
// console.log(apps.showResult());