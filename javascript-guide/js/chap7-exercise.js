"use strict";

const getUserName = (jsonString) => {
  try {
    const userObj = JSON.parse(jsonString);
    if (!userObj.name) {
      throw new Error("nameプロパティがありません");
    }
    return userObj.name;
  } catch (error) {
    console.error(`エラー発生：${error.message}`);
    return "Unknown";
  }
};

const json1 = '{"name":"Taro", "age":30}';
const json2 = '{"age":25}';
const json3 = "不正なJSON";

console.log(getUserName(json1));
console.log(getUserName(json2));
console.log(getUserName(json3));

const cartItems = [
  { name: "ノートPC", price: 120000, quantity: 1 },
  { name: "マウス", price: 3000, quantity: 2 },
  { name: "キーボード", price: 5000, quantity: 1 },
];

const cartSummary = cartItems.reduce(
  (acc, item) => {
    acc.totalAmount += item.price * item.quantity;
    acc.totalQuantity += item.quantity;
    return acc;
  },
  { totalAmount: 0, totalQuantity: 0 },
);

console.log(cartSummary);

const createCounter = () => {
  let count = 100;

  return {
    up: () => {
      count++;
    },
    down: () => {
      count--;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = createCounter();
console.log("現在の値：", counter.getValue());

counter.up();
console.log("現在の値：", counter.getValue());

counter.down();
console.log("現在の値：", counter.getValue());

const userData = [
  { id: 1, name: "Taro", region: "Tokyo" },
  { id: 2, name: "Jiro", region: "Osaka" },
  { id: 3, name: "Saburo", region: "Tokyo" },
  { id: 1, name: "Taro", region: "Tokyo" }, // 重複データ
];

const regions = userData.map((user) => user.region);

const uniqueRegions = new Set(regions);
console.log(uniqueRegions.size);

const userMap = new Map();

userData.forEach((user) => {
  userMap.set(user.id, user);
});

console.log(userMap);
const userId2 = userMap.get(2);

console.log("IDが2のユーザー名:", userId2.name);
