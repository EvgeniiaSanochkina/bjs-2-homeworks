// Задание 1
function getArrayParams(arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let avg = 0;

    for (i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        min = Math.min(min, arr[i]);

        sum += arr[i];
        avg = Number((sum / arr.length).toFixed(2));
    }
    return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
    let sum = 0;
    for (let k = 0; k < arr.length; k++) {
        sum += arr[k]
    }
    return sum;
}

function makeWork(arrOfArr, worker) {
    // console.log(arrOfArr);
    let max = -Infinity;
    for (k = 0; k < arrOfArr.length; k++) {
        max = Math.max(max, worker(arrOfArr[k]));

    }
    return max;
}
makeWork(arrOfArr, worker);

// Задание 3

function worker2(arr) {
    let maxOfArr = -Infinity;
    let minOfArr = Infinity;
    for (let k = 0; k < arr.length; k++) {
        maxOfArr = Math.max(maxOfArr, arr[k]);
        minOfArr = Math.min(minOfArr, arr[k]);
    }
    let dif = Math.abs(maxOfArr - minOfArr);
    return dif;
}

function makeWork(arrOfArr) {
    max = -Infinity;
    for (k = 0; k < arrOfArr.length; k++) {
        max = Math.max(max, worker2(arrOfArr[k]));
    }
    return max;
}
makeWork(arrOfArr, worker2);