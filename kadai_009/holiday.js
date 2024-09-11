const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
console.log(holidays);



// for (let i =0;) 決まった回数の演算式for ※０－数える
// i < holidays.length; 範囲の設定　配列で指定する為、lengthを使い範囲は０－数えるので
// i++ イコール　i += 1 代入演算式

for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i])
}

let i = 0;
while (i < holidays.length) {
  console.log(holidays[i]);
  i++
}

// let i = 0;            値は０から始まるから基本的には0を設定する。
// while (i < holidays.length) {           iを0に設定することでhoridaysの数

  // 正直、16で設定してそれ以上になったら終わり！かと思った。その場合は↓
// let i = 16;
// while (i > holidays.length) {
// console.log(holidays[i]);
// i++;
// }
// でも、i = 16;がありえない！基本順番で出す場合は0を指定する要だ。

