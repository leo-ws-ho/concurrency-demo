let count = 3;

console.log(count);

setTimeout(() => {
    count --;
    console.log(count);
    setTimeout(() => {
        count --;
        console.log(count);
        setTimeout(()=> {
            count --;
            console.log(count);
        }, 1000);
    }, 1000);
}, 1000);