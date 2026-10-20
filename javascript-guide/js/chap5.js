"use strict";
console.log("chap5.jsが読み込まれました");

// 同期処理と非同期処理
// console.log("1. 処理を開始しました");

// // 2000ミリ秒後に実行される非同期処理をセット
// setTimeout(() => {
//   console.log("3. 2秒経過しました（非同期処理）");
// }, 2000);

// console.log("2. 処理を修了しました");

// コールバック地獄の例
// console.log("コールバック地獄の開始");
// setTimeout(() => {
//   console.log("A:1秒経過");
//   setTimeout(() => {
//     console.log("B:さらに1秒経過");
//     setTimeout(() => {
//       console.log("C:さらに1秒経過");
//       console.log("。。。。。処理完了");
//     }, 1000);
//   }, 1000);
// }, 1000);

// 処理の成功か失敗かを知らせるPromiseオブジェクト
// Promiseオブジェクトには３つの状態がある：
// pending（開始後。引き換え券をもらった直後）、
// fulfillend（成功した状態。商品と交換できた）、
// rejected（失敗。商品は品切れで断られた）

// 1秒後に成功または失敗する非同期処理をシュミレートする関数を定義
// この関数はPromizeオブジェクトを返す
const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    // resolve:処理が成功したときに呼び出す関数
    // reject:処理が失敗したときに呼び出す関数

    const isSuccess = Math.random() > 0.3;

    setTimeout(() => {
      if (false) {
        // 成功した場合resolveを呼び出して、結果を返す
        // これよるPromisehaはfulfill状態になる
        resolve(`${seconds}秒経ちました！成功`);
      } else {
        // 失敗した場合ｈ、rejectを呼び出してエラー情報を渡す
        // これによりPromiseはrejected状態になる
        reject(new Error("エラーが発生しました。失敗"));
      }
    }, seconds * 1000);
  });
};

console.log("---Primiseの処理を開始---");

wait(5)
  .then((successMessage) => {
    // wait(5)のPromiseがfulfilledになったら、（resolveが呼ばれたら）処理実行
    console.log("thenが実行されました");
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    // wait(5)のPromiseがrejectedになったら、（rejectが呼ばれたら）処理実行
    console.log("catchが実行されました");
    console.error(errorMessage.message);
  })
  .finally(() => {
    // 成功・失敗に関わらず、最後に実行される
    console.log("finallyが実行されました");
  });

// // 実行したい処理をasync関数として定義
const execAsync = async () => {
  console.log("--- async関数の処理を開始---");
  try {
    const result = await wait(5);
    console.log(result);
  } catch (error) {
    console.log("catchブロックが実行されました");
    console.log(error.message);
  }
  console.log("execAsyncの処理が終了");
};

console.log("execAsync呼び出し前");
execAsync();
console.log("execAsync呼び出し後");

// fetch APTによるデータ取得
// resはjsonオブジェクトでかえってくるので、jsonメソッドでjavascriptで扱えるオブジェクトに変換する

// Promiseチェーンで書く場合
fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then(console.log);

// async/awaitで書く場合（こちらが主流）
const fetchUsers = async () => {
  console.log("---async/awaitでfetchを開始---");
  try {
    const response = await fetch("https://dummyjson.com/users");
    // jsonメソッドは非同期処理なので、awaitがいる
    const users = await response.json();
    console.log("async/awaitで取得したユーザー一覧：", users);
  } catch (error) {
    console.error("エラーが発生しました：", error);
  }
};

fetchUsers();
