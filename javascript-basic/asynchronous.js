// callback, Promise, async, await
const getInfoF1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Jonh");
    }, 2000);
  });
};

getInfoF1().then((res) => {
  console.log(res);
});

const getInfoF2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Alice");
    }, 3000);
  });
};

const getInfoF3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bob");
    }, 1000);
  });
};

const layChuXe = async () => {
  let f1 = await getInfoF1();
  let f2 = await getInfoF2();
  let f3 = await getInfoF3();
  return f1 + "-" + f2 + "-" + f3;
}; // -> solve done after 6s

const layChuXe_1 = async () => {
  let results = await Promise.all([getInfoF1(), getInfoF2(), getInfoF3()]);
  return results.reduce((total, value) => total + "-" + value);
}; // -> solve done after 3s

(async () => {
  let res = await layChuXe_1();
  console.log(res);
})();
