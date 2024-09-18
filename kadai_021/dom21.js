// 同期処理を実行する
console.log('処理1');
console.log('処理2');
console.log('処理3');

// 非同期処理の基本
// setTimeout(() => {
//   処理
// }, 待ち時間);


// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する

setTimeout(() => {
  console.log('処理4（非同期処理）');
}, 2000);

// 同期処理を実行する
console.log('処理5');
console.log('処理6');


// 22章エラーハンドリング
// --------------------------------------------------------------
// 　　　　発生する可能性のある例外（エラー）を捕捉し、適切な処理ができる
try {
   // 例外が発生する可能性のあるコード　notFunction
  notFunction()
} catch(error) {
  // 例外が発生した場合の処理
  console.log('--- output error ---')
  console.log(error.name)
  console.log(error.message)
}


// 例外の発生の有無にかかわらず必ず実行させたい処理がある場合
try {
   // 例外が発生する可能性のある処理
  console.log('hello!')
} catch(error) {
   // 例外が発生した場合の処理
  console.log(error.name)
  console.log(error.message)
} finally {
   //必ず実行される処理
  console.log('end!')
}

// 数値の入力忘れなどのミスを確認する時

let name = "Alice";
let age = "";

console.log("Name:", name); // 変数の値を表示
console.log("Age:", age);
