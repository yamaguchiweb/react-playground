"use strict";

console.log("chap3.jsが読み込まれました");

// 配列の作成
const fruits = ["りんご", "バナナ", "オレンジ"];
console.log(fruits);

// 要素へのアクセス
console.log("最初の要素:", fruits[0]);
console.log("3番目の要素:", fruits[2]);

// 要素の更新
fruits[1] = "ぶどう";
console.log("更新後の要素", fruits[1]);

// 配列の長さを調べる
console.log("配列の長さ：", fruits.length);

// push:末尾に追加
const colors = ["赤", "緑", "青"];
colors.push("黄");
console.log("push後の配列", colors);

// pop:末尾を削除
colors.pop();
console.log("pop後の配列：", colors);

// for：配列のループ処理
console.log("---forループ---");
for (let i = 0; i < colors.length; i++) {
  console.log(`${i + 1}番目の色は${colors[i]}です`);
}

// forEach：各要素に対して処理を繰り返す
console.log("---forEachループ---");
colors.forEach((color, index) => {
  console.log(`${index + 1}番目の色は${color}です`);
});

// map：各要素を加工して新しい配列を作る
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log("元の配列", numbers);
console.log("map後の配列", squaredNumbers);

// filter：条件に合う要素だけを集めて新しい配列を作る
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("filter後の配列", evenNumbers);

// オブジェクトの作成
const user = {
  name: "Taro",
  age: 25,
  region: "東京都",
};
console.log(user);

// プロパティへのアクセス（ドット記法）
console.log("名前:", user.name);
console.log("年齢：", user.age);

// プロパティへのアクセス（ブラケット記法）
const keyName = "region";
console.log("変数を使ったアクセス：", user[keyName]);

// プロパティの追加と更新
// プロパティの追加
user.isAdmin = true;
console.log("追加後：", user);

// プロパティの更新
user.age = 26;
console.log("更新後：", user);

// プリミティブ型（値渡し）
let a = 100;
let b = a;
b = 200;
console.log("aの値：", a);

// オブジェクト型の挙動（共有渡し）
const objA = { name: "Taro" };
const objB = objA;
objB.name = "Jrio";
console.log("objAの名前も変わっている：", objA);

// constが禁止しているのはスタックメモリの値のみ。
// オブジェクト型では、スタックメモリにはアドレスが保存されている。
// アドレスの参照先の値は、ヒープメモリに保存されているため、オブジェクト型のプロパティは書き換えが可能となる。

// オブジェクトの配列
const users = [
  { id: 1, name: "Taro", region: "Tokyo" },
  { id: 2, name: "Jiro", region: "Osaka" },
  { id: 3, name: "Saburo", region: "Tokyo" },
];

//  オブジェクトの配列の操作
// mapを使用して名前だけの配列を作る
const userNames = users.map((user) => user.name);
console.log("名前の配列", userNames);

// filterを使用して東京在住のユーザーだけの配列を作る
const tokyoUsers = users.filter((user) => user.region === "Tokyo");
console.log("東京在住のユーザー：", tokyoUsers);
