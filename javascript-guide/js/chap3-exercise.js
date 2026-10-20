"use strict";

const scores = [88, 92, 77, 69, 95];
const adjustedScores = scores.map((score) => (score * 110) / 100);
console.log("スコアを1.1倍：", adjustedScores);

const highScores = scores.filter((score) => score >= 80);
console.log("８０点以上のスコア：", highScores);

const products = [
  { id: 1, name: "ノートPC", price: 120000, inStock: true },
  { id: 2, name: "マウス", price: 3000, inStock: false },
  { id: 3, name: "キーボード", price: 5000, inStock: true },
  { id: 4, name: "モニター", price: 25000, inStock: true },
];

const affordableProductNames = products.filter((product) => product.price <= 10000).map((product) => product.name);
console.log(affordableProductNames);
