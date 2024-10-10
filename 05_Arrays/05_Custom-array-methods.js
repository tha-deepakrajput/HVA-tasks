
// A. forEachArray Function:


function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7]

function callback(ele) {
    console.log(ele);
}

// forEachArray(array, callback);


// B. mapArray Function:

let result = []

function mapArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}

arr = [1, 2, 3, 4, 5, 6, 7]

function mapCallback(ele) {
    return ele;
}
// console.log(mapArray(arr, mapCallback));


// C. filterArray Function:

let result1 = []

function filterArray(arr1, callback) {
    for(let i = 0; i < arr1.length; i++) {
        result1.push(callback(arr1[i]));
    }
    return result1;
}

arr1 = [1, 2, 3, 4, 5, 6, 7, 8]

function filterEvenNum(ele) {
    let a = ele % 2;
    return a;
}

console.log(filterArray(arr1, filterEvenNum));