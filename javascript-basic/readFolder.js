const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "folder");
const readFolder = (path, sum) => {
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
  return sum[0];
};

console.log("Loop folder with map: " + readFolder(folderPath));

const readFolderFor = (path, sum) => {
  sum = sum || [0];
  const listFile = fs.readdirSync(path);
  for (let i = 0; i < listFile.length; i++) {
    const file = listFile[i];
    if (fs.statSync(path + "/" + file).isDirectory()) {
      readFolderFor(path + "/" + file, sum);
    } else {
      const value = fs.readFileSync(path + "/" + file, {
        encoding: "utf8",
        flag: "r",
      });
      sum[0] += Number(value);
    }
  }
  return sum[0];
};

console.log("Loop folder with for: " + readFolder(folderPath));