"use strict";

const user = {
  id: 1,
  name: "Taro",
  details: {
    age: 25,
    email: "taro@example.com",
  },
};

const {
  name,
  details: { age, email },
} = user;

console.log(`ユーザー名: ${user.name}, 年齢: ${user.details.age}, Email: ${user.details.email}`);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    console.log(`商品名: ${this.name}, 価格:${this.price}円`);
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

const book = new Book("羊たちの沈黙", 1500, "サスペンス");
const bookWithStock = { ...book, stock: 10 };
console.log("完成したプロフィール:", bookWithStock);
