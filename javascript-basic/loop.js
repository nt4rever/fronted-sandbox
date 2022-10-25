let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((num) => console.log(num));
let doubled = arr.map((num) => num * 2).filter((num) => num > 5);
console.log(doubled);

const a = ["a", "b", "c"];
a.d = "hello";

for (let i in a) {
  console.log(a[i]);
}

for (let i of a) {
  console.log(i);
}

for (const [i, v] of a.entries()) {
  console.log(i, v);
}

let numbers = [6, 7, 8, 9];
console.log(numbers.every((number) => number > 5)); // true
console.log(numbers.every((number) => number < 5)); // false
numbers = [5, 4, 6, 7, 8, 9];
console.log(numbers.some((number) => number > 5)); // true
console.log(numbers.some((number) => number < 5)); // true
