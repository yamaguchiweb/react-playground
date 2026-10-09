"use strict";

let price = 1500;
const TAX_RATE = 110;
const price1 = (price * 110) / 100;
console.log("税込み価格は", price1);

let age = 18;
if (age < 20) {
  console.log("未成年です");
} else if (age >= 20 && age < 65) {
  console.log("成人です");
} else {
  console.log("高齢者です");
}

for (let index = 1; index <= 30; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
}
