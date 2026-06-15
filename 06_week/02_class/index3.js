console.log("Hi");

setTimeout(() => console.log("Hello after 2s"), 2 * 1000);

Promise.resolve().then(() => console.log("Promise Resolve Ho Gya"));

console.log("Bye");

// ++++++++++++++++++++++++++++++++++++

console.log("Hi");

setTimeout(function timerFun() {
  console.log("Hello after 2s");
}, 0);

Promise.resolve().then(function p1() {
  console.log("1. Promise Resolve Ho Gya");

  Promise.resolve().then(function p2() {
    console.log("2. Promise Resolve Ho Gya");

    Promise.resolve().then(function p3() {
      console.log("3. Promise Resolve Ho Gya");
    });
  });
});

console.log("Bye");
 