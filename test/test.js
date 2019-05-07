function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = Math.random();
      resolve(n);
    }, 3000)
  })
}

const a = test().then(n => {
  console.log(n);
  return n
}).catch(e => {});
console.log(a);

