"use strict";
console.log("chap7.jsが読み込まれました");

// JSONはただの文字列
// Javascript用に変換が必要

const user = {
  name: "Taro",
  age: 25,
  isAdmin: false,
};

// 1. オブジェクト -> JSON文字列に変換 (JSON.stringify)

const jsonString = JSON.stringify(user);
console.log("JSON文字列：", jsonString);
console.log("型：", typeof jsonString);

// 2. JSON文字列 -> オブジェクトに変換 (JSON.parse)
const receivedJson = '{"name": "Jiro", "age": 30, "isAdmin": true}';
const userObject = JSON.parse(receivedJson);
console.log("パース後のオブジェクト：", userObject);
console.log("型：", typeof userObject);

// エラーハンドリング。プログラムの安全性を高める
const badReceivedJson = '{"name": "Jiro", "age": 30, "isAdmin: true}';

try {
  const badUserObject = JSON.parse(badReceivedJson);
  console.log("パース成功：", badReceivedJson);
} catch (error) {
  console.error("無効なデータです", error.message);
} finally {
  console.log("処理を修了します");
}

// 高階関数
const withLooging = (fn) => {
  console.log("---処理を開始します---");
  fn();
  console.log("---処理を修了します---");
};
const sayTaro = () => {
  console.log("Taroです。");
};
withLooging(sayTaro);

// reduceで合計値を計算
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, current) => {
  console.log(`total：${total}, current:${current}`);
  return total + current;
}, 0);

// クロージャー
const createCounter = () => {
  // 1. 外側の関数スコープで変数を定義
  let count = 0;

  // 2. 内側の関数を定義し、戻り値として返す
  // この内側の関数が、外側のcount変数を参照している
  const counter = () => {
    count++;
    console.log(count);
  };

  return counter;
};

const counter1 = createCounter();
counter1();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();
counter2();
counter2();

// 組み込みオブジェクト
// Math オブジェクト
console.log("円周率：", Math.PI);

const randomVlue = Math.random();
console.log("ランダムな少数：", randomVlue);

console.log("1.8の切り捨て（floor）：", Math.floor(1.8));
console.log("1.2の切り上げ（ceil）：", Math.ceil(1.2));
console.log("1.4の四捨五入（round）：", Math.round(1.5));

console.log("最大値（max）：", Math.max(10, 5, 30, 2));
console.log("最小値（min）：", Math.min(10, 5, 30, 2));

const randomInt = Math.floor(Math.random() * 6 + 1);
console.log("1から6の整数：", randomInt);

// Date オブジェクト
const now = new Date();
console.log("現在の日時：", now);

const year = now.getFullYear();
const month = now.getMonth() + 1; // 月だけはインデックス番号で返されるため
const date = now.getDate();
console.log(`${year}年${month}月${date}日`);

const todayString = now.toLocaleDateString("ja-JP");
console.log("今日のフォーマット済みにづけ：", todayString);

// Map オブジェクト
const userMap = new Map();

userMap.set("name", "Taro");
userMap.set("age", 25);
const addressKey = { city: "Tokyo" };

userMap.set(addressKey, "東京都");

console.log("userMap：", userMap);
console.log("名前：", userMap.get("name"));
console.log("住所：", userMap.get(addressKey));
console.log("要素数：", userMap.size);
console.log("ageキーは存在するか？：", userMap.has("age"));

// setオブジェクト
const numberSet = new Set();
numberSet.add(1);
numberSet.add(5);
numberSet.add(10);
numberSet.add(5); // 重複する値は無視される

console.log("numberSet：", numberSet);
console.log("要素数：", numberSet.size);
console.log("10は存在するか：", numberSet.has(10));

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 4, 5];
console.log("重複している配列：", duplicateNumbers);

const uniqueSet = new Set(duplicateNumbers);
const uniqueNumbers = [...uniqueSet];
console.log("重複削除後の配列：", uniqueNumbers);
