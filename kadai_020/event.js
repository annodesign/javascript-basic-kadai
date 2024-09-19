const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  // 「element.innerHTML = ‘文字列’」で中身を変える。
  text.innerHTML = "ボタンをクリックしました";
})