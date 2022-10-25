const { StaticPool } = require("node-worker-threads-pool");
const fibonacci = (n) => {
  var i;
  var fib = [];

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};

const staticPool = new StaticPool({
  size: 4,
  task: fibonacci,
});

staticPool.exec(999999).then(console.log);
