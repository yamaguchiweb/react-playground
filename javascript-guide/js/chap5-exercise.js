"use strict";

const delayMessage = (milliseconds) => {
  return new Promise((resolve, reject) => {
    if (milliseconds < 0) {
      reject(new Error("負の時間は待機できません"));
      return;
    }

    setTimeout(() => {
      resolve(`${milliseconds}待機しました！`);
    }, milliseconds);
  });
};

delayMessage(1500)
  .then((message) => console.log("成功:", message))
  .catch((error) => console.error("失敗：", error.message));

delayMessage(-100)
  .then((message) => console.log("成功:", message))
  .catch((error) => console.error("失敗：", error.message));

const fetchTodo = async () => {
  const API_URL = "https://jsonplaceholder.typicode.com/todos/5";
  console.log("ToDoデータの取得を開始します...");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`サーバエラーが発生しました：${response.status}`);
    }

    const todo = await response.json();
    console.log("取得したToDoタイトル:", todo.title);
  } catch (error) {
    console.error("エラーが発生しました", error);
  }
};

fetchTodo();
