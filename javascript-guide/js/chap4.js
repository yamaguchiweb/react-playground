"use strict";
console.log("chap4.jsが読み込まれました");

// 関数の定義（関数宣言）
function sayHello() {
  console.log("こんにちは！");
  console.log("関数が呼び出されました");
}

// 関数の呼び出し
console.log("---１回目の呼び出し---");
sayHello();

console.log("---２回目の呼び出し---");
sayHello();

// 引数：仮引数と実引数
function showSelfIntroduction(name, region) {
  console.log(`こんにちは、${name}です。${region}在住です。`);
}

showSelfIntroduction("Taro", "東京");
showSelfIntroduction("Jiro", "大阪");

// デフォルト引数
function greetWithDefault(name, greetiong = "こんにちは") {
  console.log(`${greetiong}、${name}さん！`);
}

// 引数を２つ渡す場合
greetWithDefault("Saburo", "こんばんは");

// 第二引数を省略した場合
greetWithDefault("Taro");

//  戻り値
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

// 関数を呼び出して、戻り値を変数sumに代入
const sum = add(5, 10);
console.log("add関数の戻り値", sum);

console.log("---thisの違い---");
// オブジェクトが関数を持つ
const user = {
  name: "Taro",
  region: "tokyo",
  showSelfIntroduction() {
    console.log(`こんにちは、${this.name}です。${this.region}在住です。`);
  },
  // showSelfIntroduction: () => {
  //   console.log(`こんにちは、${this.name}です。${this.region}在住です。`);
  // },
};

// オブジェクトが持つ関数の呼び出し
user.showSelfIntroduction();
console.log("---thisの違い---");

// 文字列のオブジェクトのような振る舞い
const userName = "Taro";
console.log("userNameの文字数：", userName.length);
console.log("userNameをすべて大文字：", userName.toUpperCase());

// 関数式
const greet = function (name) {
  return `こんばんは、${name}さん！`;
};
console.log(greet("Taro"));

// アロー関数
const greetArrow = (name) => {
  return `こんばんは、${name}さん！`;
};
console.log(greetArrow("Jiro"));
window.console.log(greetArrow("Jiro"));

// コールバック関数の定義
const square = (num) => num * num;
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(square);
console.log("squaredNumbersの値：", squaredNumbers);

// スコープ
const glovalVariable = "私はグローバルです";
const checkScope = () => {
  console.log(glovalVariable);
  const localVariable = "僕はローカルです";
  if (true) {
    console.log(localVariable);
    const blockVariable = "ブロックの中にいます";
    console.log(blockVariable);
  }
  // console.log(blockVariable);
};

checkScope();
// console.log(localVariable);
