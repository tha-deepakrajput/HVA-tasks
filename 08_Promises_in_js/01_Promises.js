//  This is for understanding of the concept : 

// console.log('one');
// console.log('two');

// setTimeout(() => {
//     console.log('Hello');
// }, 3000);

// console.log('three');
// console.log('four');


// Promises started from here : 

// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data1');
//             resolve('Success');
//         }, 3000)
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data2');
//             resolve('Success');
//         }, 3000)
//     });
// }

// First way to fetch data..
// console.log('fetching data1 ...');
// let p1 = asyncFunc1();
// p1.then((res) => {
//     // console.log(res);
//     console.log('fetching data2 ...');
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         // console.log(res);
//     });
// });

// Second and easy way to fetch data..
// console.log('fetching data1 ...');
// asyncFunc1().then((res) => {
//     console.log('fetching data2 ...');
//     asyncFunc2().then((res) => {});
// });




// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('data', dataId);
//             resolve('success');
//         }, 3000);
//     })
// }

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });


// PROMISE CHAINING...
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });



// ASYNC AWAIT FUNCITON : 
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Weather Data');
//             resolve(200);
//         }, 3000);
//     });
// }

// async function weatherData() {
//     await api(); //1st call
//     await api(); //2nd call
// }

// ASYNC AWAIT...

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success');
        }, 3000);
    })
}

async function getAllData() {
    await getData(1); 
    await getData(2);
    await getData(3);
}

// IIFE  (IMMEDIATLY INVOKED FUNCTION EXPRESSION : )
(async () => {
    await getData(1); 
    await getData(2);
    await getData(3);
})();