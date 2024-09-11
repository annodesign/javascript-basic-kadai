
let num = 15;
// console.log(num);

// 変数(num)が3と5の倍数の場合： “3と5の倍数です”
if (num % 15 === 0) {
  console.log('3と5の倍数です');
}

// 変数(num)が3の倍数の場合： “3の倍数です”
else if (num % 3 === 0) {
  console.log('3の倍数です');
}


// 変数(num)が5の倍数の場合： “5の倍数です”
else if (num % 5 === 0) {
  console.log('5の倍数です');
}


// それ以外の場合： 変数(num)を出力する
else {
  console.log(num);
}

// こちら条件が3つ以上なので、switchで書いた方が良いのかな？と思った。

