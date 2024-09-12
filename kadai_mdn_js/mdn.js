// 基本情報-----------------------------------------------------------------------------

// const year = now.getFullYear();       // 年
// const month = now.getMonth() + 1;     // 月 (0-11なので+1する)
// const day = now.getDate();            // 日
// const hours = now.getHours();         // 時
// const minutes = now.getMinutes();     // 分
// const seconds = now.getSeconds();     // 秒

// const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
// console.log(formattedDateTime); // 例: 2024/9/7 15:30:45
// －－－－－－－－－－－－－－－-----------------------------------------------------------------------------


// 今日の日付を取得
let today = new Date();

// 年、月、日を取得
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月は0から始まるため、1を足す
let day = today.getDate();

// 日付を「2023年8月22日」の形式で表示
console.log(`${year}年${month}月${day}日`);




// アロー関数で記載してみる－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
const sayGoodMorning = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月は0から11で表されるため、+1する
  const day = date.getDate();
  
  // const hour = date.getHours();
  // const minutes = date.getMinutes();
  // const seconds = date.getSeconds();

  console.log(`${year}年${month}月${day}日`);
  // console.log('おはようございます！');
  // console.log('昨日はよく眠れましたか？');
  // console.log('今日も一日頑張りましょう！');
};

sayGoodMorning();
// －－－－－－－－－－－－－－－－－－－－－－－－－－上記の修正では、アロー関数内で日時を取得し、
// それを元に特定のメッセージを表示しています。最後に、sayGoodMorning()を呼び出すことで、結果が表示。