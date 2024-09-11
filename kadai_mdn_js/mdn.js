// const now = new Date(); // 現在の日付と時間を取得

// const year = now.getFullYear();       // 年
// const month = now.getMonth() + 1;     // 月 (0-11なので+1する)
// const day = now.getDate();            // 日
// const hours = now.getHours();         // 時
// const minutes = now.getMinutes();     // 分
// const seconds = now.getSeconds();     // 秒

// const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
// console.log(formattedDateTime); // 例: 2024/9/7 15:30:45


// --------------------------------------------------自己作成------------------------------------------
// --------------------------------------------------アロー関数-----------------------------------------

const now = new Date(); // 現在の日付と時間を取得

const getYear = () => now.getFullYear();        // 年を取得
const getMonth = () => now.getMonth() + 1;      // 月を取得 (0-11なので+1)
const getDay = () => now.getDate();             // 日を取得

// オブジェクト-------------------------------------------------------------------------------
// 下記の入力はまちがいです。
// console today = { getYear(), getMonth(), getDay(), };
// console.log(today);
//-------------------------------------------------------------------------------

const year = getYear();
const month = getMonth();
const day = getDay();

const formattedDateTime = `${year}/${month}/${day}`;
console.log(formattedDateTime);





// －－－－－－－－－－－－－－－－－－－－－－－－－－正解データアロー関数
// const sayGoodMorning = () => {
//   const date = new Date();
//   const month = date.getMonth() + 1; // 月は0から11で表されるため、+1する
//   const day = date.getDate();
//   const year = date.getFullYear();
//   const hour = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();

//   console.log(`${year}年${month}月${day}日 ${hour}時${minutes}分${seconds}秒`);
//   console.log('おはようございます！');
//   console.log('昨日はよく眠れましたか？');
//   console.log('今日も一日頑張りましょう！');
// };

// sayGoodMorning();
// －－－－－－－－－－－－－－－－－－－－－－－－－－上記の修正では、アロー関数内で日時を取得し、
// それを元に特定のメッセージを表示しています。最後に、sayGoodMorning()を呼び出すことで、結果が表示されます。