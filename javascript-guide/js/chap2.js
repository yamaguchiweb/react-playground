"use strict";
console.log("chap2.jsが読み込まれました！"); // コンソールに出力

// 変数宣言
let userName;

console.log(userName);

// 代入
userName = "Taro";
console.log(userName);

// 宣言と代入

let userAge = 25;
console.log(userAge);

userAge = 26;
console.log(userAge);

// 定数
const BARTHDAY = "2000-01-01";
console.log(BARTHDAY);

// BARTHDAY = "2000-02-01";
// console.log(BARTHDAY);

// String型
const userName2 = "Taro";
console.log(userName2);
console.log(typeof userName2);

// テンプレートリテラル
const greeting = `こんにちは、${userName2}さん！`;
console.log(greeting);

// Number型 数値
const userAge2 = 30;
const rate = 0.1;
console.log(userAge2, rate);
console.log(typeof userAge2, typeof rate);

// Boolean型
const isAdult = true;
console.log(isAdult);
console.log(typeof isAdult);

// undefined型
let value;
console.log(value);
console.log(typeof value);

// null型
const stock = null;
console.log(stock);
console.log(typeof stock); // object型なのはJavascriptの初期からあるバグ。現状では仕様を変えられないため、そのまま残っている。

// 算術演算子
console.log("1 + 2 =", 1 + 2);
console.log("6 - 4 =", 6 - 4);
console.log("5 * 6 =", 5 * 6); // べき乗
console.log("24 / 3 =", 24 / 3);

console.log("10 % 3 =", 10 % 3);
console.log("2 ** 4 =", 2 ** 4);

let count1 = 10;
let count2 = 10;

console.log("count1", count1);
console.log("++count1", ++count1);
console.log("count2++", count2++);
console.log("count2", count2);

// 代入演算子
let tortalPrice = 1000;
tortalPrice += 500;
console.log("加算後の価格：", tortalPrice);

tortalPrice -= 200;
console.log("減算後の価格：", tortalPrice);

// 関係演算子
const age = 20;
console.log("age > 18：", age > 18);
console.log("age >= 20：", age >= 20);

console.log("age < 20：", age < 20);
console.log("age <= 20：", age <= 20);

// イコール2つは型を無視するためバグの原因になるので使わない。必ずイコール3つを使う。
const numValue = 1;
const stringValue = "1";
console.log("1 === '1'：", numValue === stringValue); // イコール3つはデータ型も正しいか見る
console.log("1 !== '1'：", numValue == stringValue);

// 参考演算子
const age2 = 25;
const userType = age2 >= 20 ? "成人" : "未成年";
console.log("ユーザー種別：", userType);

// 論理演算子
const hasLicense = true;
const isTierd = false;
console.log("運転できるか（AND）：", hasLicense && isTierd); // &&でどちらもTrueの場合にTrue、そうではないときはfalseを返す

const isHoliday = true;
const isSunny = false;
console.log("外出日和か（OR）：", isHoliday || isSunny); // ||でどちらかがTrueの場合にTrue、そうではないときはfalseを返す

console.log("isHolidayの反転（NOT）", !isHoliday);

// TrutuyとFalsyと論理演算子の応用
const receivedUserName = "";
const displayName = receivedUserName || "Guest";
console.log("表示名：", displayName);

displayName && console.log("ようこそ！", displayName);
receivedUserName || console.log("ようこそ！", receivedUserName);

let undeclaredVariable = "Taro";
console.log(undeclaredVariable);
