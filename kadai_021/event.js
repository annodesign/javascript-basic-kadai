// 同期処理を実行する
console.log('処理1');
console.log('処理2');
console.log('処理3');

// 非同期処理の基本
// setTimeout(() => {
//   処理
// }, 待ち時間);
// btn.addEventListener('click', function(){
//   this.innerHTML = "ボタンをクリックしました"
// })

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
const btn = document.getElementsByClassName("btn")
setTimeout(() => {
  btn.addEventListener('click', function(){
    this.innerHTML = "ボタンをクリックしました"
  })
}, 2000);

// 同期処理を実行する
console.log('処理5');
console.log('処理6');

