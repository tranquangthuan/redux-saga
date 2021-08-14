//console.log("generator function");
// function * hello(){
//   yield 2019;
//   return "abc";
// }

// var x = hello();
// console.log("call 1", x.next());
// console.log("call 2", x.next());
// console.log("call 3", x.next());

console.log("generator trong generator function");
function* print() {
  yield "step1";

  return "end print";
}

function* hello() {
  yield "hello 1";
  // const print1 = print();
  // yield print1.next();
  yield* print();
  return "hello 2";
}

const iterator1 = hello();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

