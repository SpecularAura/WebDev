function delayCallback(cb) {
    const time = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
        cb(time)
    }, time)
}

function callback1(time) {
    console.log("Callback 1 called after: " + (time / 1000).toString() + "s")
}

function callback2(time) {
    console.log("Callback 2 called after: " + (time / 1000).toString() + "s")
}

function callback3(time) {
    console.log("Callback 3 called after: " + (time / 1000).toString() + "s")
}

delayCallback(callback1);
delayCallback(callback2);
delayCallback(callback3);