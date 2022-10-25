const { parentPort, workerData } = require("worker_threads");
const fs = require("fs");

function delay(time) {
  let startTime = Date.now();
  while (Date.now() - startTime < time) {}
}

const readFolder = (path, sum) => {
  delay(1000);
  sum = sum || [0];
  fs.readdirSync(path).map((file) => {
    if (fs.statSync(path + "/" + file).isDirectory()) {
      readFolder(path + "/" + file, sum);
    } else {
      const value = fs.readFileSync(path + "/" + file, {
        encoding: "utf8",
        flag: "r",
      });
      sum[0] += Number(value);
    }
  });
  return sum;
};

const res = readFolder(workerData);
parentPort.postMessage(res);
readFolder(workerData);
