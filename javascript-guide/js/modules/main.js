"use strict";

import MyCaluculator, { GREETING_MESSAGE as MESSAGE, double } from "./utils.js";

console.log("モジュールの動作確認");
console.log(MESSAGE);

console.log(double(5));

const calc = new MyCaluculator();
console.log(calc.add(3, 4));
