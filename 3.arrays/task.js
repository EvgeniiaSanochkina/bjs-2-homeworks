function compareArrays(arr1, arr2) {
    let result;
    result = arr1.every((value, index) => value === arr2[index] && arr1.length === arr2.length);

    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr = arr.filter(isPosAndMultiple = (num) => num > 0 && num % 3 === 0).map((num) => num * 10);
    return resultArr; // array
}