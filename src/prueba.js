import { Pasarhg } from "./pasarhg.js";
import { Keyboard } from "./keyboard.js";

const pasarhg = new Pasarhg();
const keyboard = new Keyboard();

keyboard.createKeyboard();
pasarhg.pintarGuiones();
pasarhg.pintarPalabra ();