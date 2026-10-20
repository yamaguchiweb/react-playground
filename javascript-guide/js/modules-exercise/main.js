"use strict";

import generateMessage, { isAdult } from "./userUtils.js";

const user1 = { name: "Taro", age: 25 };
const user2 = { name: "Jiro", age: 18 };

const message1 = generateMessage(user1);
console.log(message1);
const message2 = generateMessage(user2);
console.log(message2);
