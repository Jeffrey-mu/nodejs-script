const list = [function() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(1, 'in')
      resolve(1);
    }, 1000);
  })
}, function() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(2, 'in')
      resolve(2);
    }, 3000);
  })
}, function() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(3, 'in')
      resolve(3);
    }, 2000);
  })
}]

// for(let i of list) {
//   const data = await i()
//   console.log(data)
// }
for(let i = 0; i < list.length; i++) {
  const data = await list[i]()
  console.log(data)
}
