// call back version.

function nextJob() {
    console.log('this is the next job.');
}

function anotherJob() {
    console.log('this is executed 2 seconds after the next job');
}

// console.job('this is the first job');
// setTimeout(function() {
//     nextJob();
//     setTimeout(anotherJob, 2000);
// }, 2000);

/**
 * This function returns a promise, that setup a timeout, of m ms time, to call function at resolve.
 */
function setTimer(m) {
    let promise = new Promise( (resolve, reject) => {
        setTimeout(resolve, m);
    });
    return promise;
}

console.log('this is the first job');

// execute a job after 2 seconds.
new Promise( (resolve, reject) => {
    reject();
})
.then(() => {
    return setTimer(2000)
            .then( () => {
                nextJob();
            });
})
.then(() => {
    return setTimer(2000)
            .then( () => {
                anotherJob()
            });
});
// .catch( (error) => {
//     console.error('An Error Occurred.');
// });


// const promise = new Promise((resolve, reject) => {
//     console.log('this is the first job');
//     // results here.
//     setTimeout( () => {
//         resolve('hello');
//     }, 2000 );
//     resolve('hello');  // is called only after two seconds.
// });

// promise
// .then( () => {
//     nextJob();
//     return 'hello'
// } )
// .then( (val) => { // val will get 'hello'
//     anotherJob();
// });


