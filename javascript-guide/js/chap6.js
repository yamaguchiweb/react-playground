"use strict";
console.log("chap6.jsが読み込まれました");

// ブロックスコープ
// var の場合
if (true) {
  var test = "ブロック外でも有効";
  console.log(test);
}
console.log(test);

for (var count = 0; count < 3; count++) {
  console.log(count);
}
console.log(count);

// let constの場合
if (true) {
  const test2 = "ブロック内のみ有効";
  console.log(test2);
}

// console.log(test2);

for (let count2 = 0; count2 < 3; count2++) {
  console.log(count2);
}
// console.log(count2);

// アロー関数
// functionキーワードの場合
function functionTest1() {
  console.log("こんにちは！");
  console.log("functionキーワード関数が呼び出されました");
}
functionTest1();

// アロー関数の場合
const functionTest2 = () => {
  console.log("こんにちは！");
  console.log("アロー関数が呼び出されました");
};
functionTest2();

// オブジェクトが関数を持つ
const user = {
  name: "Taro",
  region: "tokyo",
  showSelfIntroduction() {
    console.log(`こんにちは、${this.name}です。${this.region}在住です。`);
  },
};

// テンプレートリテラル
const name = "Taro";
const age = 25;

// 従来の文字列連結
const message1 = "こんにちは" + name + "さん。\n" + "来年で" + (age + 1) + "歳です。";
console.log(message1);

// テンプレートリテラルの使用方法
const message2 = `こんにちは${name}さん。
来年で${age + 1}歳です。`;
console.log(message2);

// 分割代入
const team = ["Taro", "Jiro", "Saburo"];
// const captain = team[0];
// const menber1 = team[1];
// const menber2 = team[2];
// console.log(captain, menber1, menber2);

// const [captain, menber1, menber2] = team;
// console.log(captain, menber1, menber2);

const [captain, ...menbers] = team;
console.log(captain, menbers);

// オブジェクトの分割代入
const userProfile = {
  userName: "Taro",
  userAge: 25,
  isAdmin: false,
  region: "Tokyo",
  greet() {
    console.log(`こんにちは、${this.userName}です。`);
  },
};
// const userName = userProfile.userName;
// const userAge = userProfile.userAge;

const { userName: uName, userAge = 20, ...otherInfo } = userProfile;
console.log(uName, userAge, otherInfo);

const showUserInfo = ({ userName, userAge }) => {
  console.log(`ようこそ、${userName}さん${userAge}歳`);
};
showUserInfo(userProfile);

// スプレッド構文
// オブジェクトのコピーにはこちらを使う。参照先が壊されることを避ける
const arr1 = [1, 2, 3];
const coppyArry1 = [...arr1, 4];
console.log(coppyArry1);

const obj1 = { a: 1, b: 2 };
const coppyObj1 = { ...obj1, a: 10 };
console.log(coppyObj1);

// クラス
class User {
  #birthYear; // プライベートプロパティ
  constructor(name, birthYear) {
    this.name = name;
    this.#birthYear = birthYear;
  }

  greet() {
    console.log(`こんにちは${this.name}です。年齢は${this.#calculateAge()}歳です。`);
  }

  #calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#birthYear;
  }
}

const user1 = new User("Taro", 2000);
user1.greet();

const user2 = new User("Jiro", 1995);
user2.greet();

class StudentUser extends User {
  constructor(name, birthYear, favoriteSubject) {
    super(name, birthYear);
    this.favoriteSubject = favoriteSubject;
  }
  greet() {
    console.log(`得意科目は${this.favoriteSubject}です。`);
  }
}

const student = new StudentUser("Saburou", 2010, "数学");
student.greet();

console.log(student.birthYear);
// student.#birthYear = 2020;
console.log(student.birthYear);
