// 18章 イベント処理を理解しよう
// --------------------------------------------------------------

//1   output-btnというidを持つHTML要素(button)を取得し、定数に代入する
const btn = document.getElementById('output-btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  coBtn = document.getElementById('add-btn');
nsole.log('くりっくされたよ');
});


//2  add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入
const parentList =document.getElementById('parent-list');

addBtn.addEventListener('click',() => {
  // li要素を新しく作成する
  const childList = document.createElement('li');
  // 作成したli要素に「これはリスト要素です」というテキストを追加する
  childList.textContent = 'これはリスト要素です';
  // 作成したli要素をul要素の子要素として末尾に追加する
  parentList.appendChild(childList);
});

// 19章 イベント処理でフォームを操作しよう
// --------------------------------------------------------------
// (基本) 
// textFormというname属性を持つフォームを取得する
// document.forms.textForm;

// name属性の値を記述すれば、テキストボックス（input要素）も取得できます。
// document.forms.textForm.textBox;

// 入力された値を取得するには、続けてvalueプロパティを記述します。
// document.forms.textForm.textBox.value;
// --------------------------------------------------------------

//　　　　　　「フォームに入力された文字数をカウントしてみよう 」

// count-btnというidを持つHTML要素を取得し、定数に代入する
 const countBtn = document.getElementById('count-btn');
 
 // HTML要素がクリックされたときにイベント処理を実行する
 countBtn.addEventListener('click', () => {
   // テキストボックスに入力された文字列を取得する(基本より) 
   const text = document.forms.textForm.textBox.value;
 
   // 取得した文字列の文字数を出力する
   console.log(text.length + '文字');
 });

// 」　　　　　「 選択されたラジオボタンの値を取得してみよう」

// ----基本を定義してすっきり見やすくする方法----------------------------------------------------------
// 1. 変数や定数に代入しないパターン
// 引数が長いので見づらい
// console.log(document.forms.form要素のname属性の値.input要素のname属性の値.value);

// 2. 変数や定数に代入しておくパターン
// const 定数名 = document.forms.form要素のname属性の値.input要素のname属性の値.value;
// 引数が短くスッキリしていて見やすい
// console.log(定数名);
// --↑なるほど！でした。------------------------------------------------------------

// area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBtn = document.getElementById('area-btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
areaBtn.addEventListener('click', () => {
  // 選択されたラジオボタンの値を取得する
  const area = document.forms.areaForm.area.value;

  // 取得した値を出力する
  console.log(area);
  //const areaを定義しなければ⇒ console.log(document.forms.areaForm.area.value);
});

// 　　　　　「（複数）選択されたチェックボックスの値を取得してみよう」難しい！

// document.forms.form要素のname属性の値.input要素のname属性の値;（基本）


// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');
 
// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});

// 20章　スクロール量に合わせてボタンの表示・非表示を切り替えよう
// --------------------------------------------------------------

