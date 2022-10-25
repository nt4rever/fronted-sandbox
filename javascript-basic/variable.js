// tham tri va tham chieu
let num_1 = 5;
let num_2 = num_1;
console.log(num_1 + " | " + num_2);
num_1 = 10;
console.log(num_1 + " | " + num_2);

const user = { name: "Bob", posts: 5 };
const temp = user;
console.log(temp);
temp.posts = 2;
console.log(user);

// hoisting
console.log(text); //--> undefined
var text = "Welcome to JavaScript";

console.log(carName); //--> ReferenceError: carName is not defined
let carName = "lamborghini";

console.log(tree); //--> ReferenceError: carName is not defined
const tree = "Cactus";
