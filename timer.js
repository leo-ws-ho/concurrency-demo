const startTime = new Date();
const startSecond = startTime.getSeconds();
const targetSecond = (startSecond + 10) % 60;

console.log(startTime);

// while (true) {
//   const currSecond = new Date().getSeconds();
//   if (targetSecond === currSecond) break;
// }

// console.log(new Date());

setTimeout(function() {
    console.log(new Date().getSeconds());
}, 10000);