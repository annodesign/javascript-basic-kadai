const sample = (num) => {
  return num *num;
}
console.log(sample(10));

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 13章：引数と戻り数
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// 関数の作り方
// const 定数名 = () => {}
//   一連の処理  


// // 関数の呼び出し方
// 練習1----------------------------------------------
const fee = (price) => {
  console.log(price + 300 + '円');
}
fee(500);

// 練習2---2024.09.15-------------------------------------------
const shoopingFee = (price1, fee, fee1) => {
  console.log(price1 + fee + fee1 + '円');
}
// この時、shoopingFee.logとかしない様に
shoopingFee(100, 200, 300);

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const math = (num) => {
  return num / 2;
}
// 関数の戻り値を出力する
console.log(math(16));
