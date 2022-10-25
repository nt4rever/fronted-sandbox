console.time();
setTimeout(() => {
  console.log("Hello!!!");
}, 1000);

var startTime = Date.now();
while (Date.now() - startTime < 4000) {}
console.timeEnd();
