

// ボタンとh2要素を取得
const button = document.getElementById("btn");
const text = document.getElementById("text");

// ボタンがクリックされた時の処理を追加
button.addEventListener("click", function() {
    // 2秒後にh2要素のテキストを変更
    setTimeout(() => {
        text.innerHTML = "ボタンをクリックしました";
    }, 2000); // 2000ミリ秒 = 2秒
});



// ------------------1回目の間違い-----------------
// // ボタンがクリックされたら、2秒後に文章を書き換える
// const btn = document.getElementById("btn"); // 1つ目のボタンを取得
// btn.addEventListener('click', function() {
//   setTimeout(() => {
//     this.innerHTML = "ボタンをクリックしました";
//   }, 2000); // 2秒後に文章を変更
// });

