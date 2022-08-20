let counter = 0;

function step1() {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log(`Do the job for the ${counter} times`);
            resolve();
        }, 1000);
    });
    return prom;
}

function step2() {
    let prom = new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('doing second job');
            resolve();
        }, 0);
    });
    return prom;
}

let promise = new Promise( (resolve, reject) => {
    resolve();
}); 

for (let i = 0; i < 3; i++) {
    promise = promise
                .then(() => {
                    return step1();
                });
}