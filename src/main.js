// arrow fn
(() => {
  console.log('hello world');
})();

// Object assign
console.log(Object.assign({}, {
  a: 'a',
  b: 'b'
}));

// generator
function* gen(){
  let num = 0;
  while(true) {
    yield num;
    num++
  }
}

const genFn = gen();
console.log(genFn.next());
console.log(genFn.next());
console.log(genFn.next());
console.log(genFn.next());