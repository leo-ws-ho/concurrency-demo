// Step 1: wait for 3 second
// Step 2: log ('Done!');

let myPromise = new Promise(function (resolve, reject) {
    // place to work on Step 1;

    setTimeout(() =>{
        resolve('done');
    }, 3000);
});

// linking step 1 and step2:
myPromise
.then(function (val) {
    // step 2;
    console.log('Done!');
});