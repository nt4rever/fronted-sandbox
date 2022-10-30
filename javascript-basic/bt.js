const A = async (millisecond) =>
  await new Promise((resolve) =>
    setTimeout(() => {
      console.log("A done!");
      resolve();
    }, millisecond)
  );
const B = async (millisecond) => {
  const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < millisecond) {}
  console.log("B done!");
};

(async () => {
  await A(1000);
  B(1000);
})();

/*
Time: 5s
B sẽ kết thúc trước
Khi thực thi: A là 1 promise: setTimeOut => đưa vào queue chờ 5s sau để thực hiện
Tiếp tục thực thi B: vòng lặp while block 5s => B kết thúc sau đó A mới thực hiện

       Stack                           Event Queue
 --------------------              -------------------
| A(5000)            |----------> | setTimeOut(5000)  | 
 --------------------     |         -------------------
| B(5000)            |    |       |                   | 
 --------------------     |        -------------------
| A done             | <--        |                   |
 --------------------              -------------------
*/
