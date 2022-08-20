// start the count down from 5 when pressing the start button.
// 1. get the event handler.

let startButtonRef = document.getElementById('start');
let stopButtonRef = document.getElementById('stop');
let counterActive = false;

// set the start countdown event handler.
startButtonRef.addEventListener('click', function() {
    // start the count-down by the promise chain.
    let counterRef = document.getElementById('count');
    let counter = 5;
    counterActive = true;

    function oneStep() {
        console.log(counter, new Date());
        counter--;
        counterRef.innerText = counter;  
    }

    function setTimer(ms) {  // to use it:  setTimer(1000).then(() => {<the action function>});
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    counter = 5;
    counterRef.innerText = counter;

    promise = new Promise((resolve) => resolve());
    for (let i = 0; i < 5; i++) {
        promise = promise
        .then(() => setTimer(1000))
        .then(() => { oneStep(); });
    }


    return;
});

// set the stop counter