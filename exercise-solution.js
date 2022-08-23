const startButtonRef = document.getElementById('start');

startButtonRef.addEventListener('click', startCountDown);

// this function returns a promise, which will be fulfilled after m ms.
function setTimer(m) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();  // you may add input to resolve, to pass to next step;
        }, m);
    });
}

function startCountDown() {
    function getMagicNumber() {
        const magicNum = Math.floor(Math.random() * 10 + 1); // 1 to 10
        const magicNumRef = document.getElementById('magic');
        magicNumRef.innerText = magicNum;
        return magicNum;
    }

    function doMultiplication(magic) {
        const userInput = document.getElementById('input').value;
        const result = userInput * magic;
        const resultRef = document.getElementById('result');
        resultRef.innerText = result;
    }
    // set the countdown to five.

    const countDownRef = document.getElementById('countdown');
    let countDown = 5;
    countDownRef.innerText = countDown;

    let countDownProm = new Promise((resolve, reject) => {
        resolve();
    });

    for (let i = 0; i < 5; i++) {
        countDownProm = countDownProm
          .then(() => setTimer(1000))
          .then(() => {
            countDown --;
            countDownRef.innerText = countDown;
          })
    }

    countDownProm
    .then(() => setTimer(3000))
    .then(() => getMagicNumber())
    .then((magic) => {
        doMultiplication(magic);
    });
}