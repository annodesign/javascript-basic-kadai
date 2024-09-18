// 20章　スクロールしてボタン表示
// windowオブジェクトを指定します。windowオブジェクト15章復習
window.addEventListener(scroll, () => {
    // back-btnというidを持つHTML要素を取得し、定数に代入する
  const backBtn = document.getElementById('back-btn');

  // 画面のスクロール量をpx（ピクセル）数で取得する
  // （document.scrollingElement.scrollTopプロパティを使用します。）
  const scrollValue = document.scrollingElement.scrollTop;

  // 画面のスクロール量が300px以上であれば、「TOPに戻る」ボタンを表示する
  if (scrollValue >= 300) {
    backBtn.style.display = 'inline';
  }
  // 画面のスクロール量がそれ以外（300px未満）であれば、「TOPに戻る」ボタンを非表示にする
  else {
    backBtn.style.display = 'none';
  }
})