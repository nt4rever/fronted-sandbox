function* generatorFunc(index) {
  while (index < 2) {
    yield index++;
  }
}

const iterator = generatorFunc(0);

console.log(iterator.next());
// log output: {value : 0, done : false}

console.log(iterator.next());
// log output: {value : 1, done : false}

console.log(iterator.next());
// log output: {value : underfined, done : true}
