const path = require("path");
const { Worker } = require("worker_threads");

const runService = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./workerReadFile.js", { workerData });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });
  });
};

const run = async () => {
  console.time();
  const folderPath = path.join(__dirname, "../folder");
  const result = await runService(folderPath);
  console.log(result);
  console.timeEnd();
};

run().catch(console.log);
console.log("Loop folder with for delay 1 second");
