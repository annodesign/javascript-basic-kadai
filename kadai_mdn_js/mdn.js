// オブジェクト（インスタンス）とはキーと呼ばれるラベルを付ける！age name とか
const now = new Date(); // 現在の日付や時間のデータを出す
const now1 = new Date();
// 年
const year = now.getFullYear();
// const year = now1.getFullYear();

// 月 ※これは特殊！！0-11なので+1する  
const month = now.getMonth() + 1; 
// const month = now1.getMonth() + 1; 

// 日
const day = now.getDate();
// const day = now1.getDate();
// -----------------------------追加で時間もする場合----------------------------------------------
// 時        
const hours = now1.getHours();
// 分         
const minutes = now1.getMinutes();
// 秒
const seconds =now1.getSeconds();

// -----------------------------現在の日付や時間のデータ出力----------------------------------------------


const today = `${year}/${month}/${day}`;
// 例: 2024/9/7
console.log(today); 

// -----------------------------追加で時間もする場合の出力----------------------------------------------

const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
// 例: 2024/9/7 15:30:45
console.log(formattedDateTime);

