"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let D;
    D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return arr;
    }
    if (D == 0) {
        arr.push(-b / (2 * a));
    }
    if (D > 0) {
        arr.push((-b + Math.sqrt(D)) / (2 * a));
        arr.push((-b - Math.sqrt(D)) / (2 * a));

    }

    // код для задачи №1 писать здесь
    return arr; // array
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    if (typeof percent != "string" || percent != "number") {
        console.log("Параметр percent содержит неправильное значение percent")
    };
    if (typeof contribution != "string" || contribution != "number") {
        console.log("Параметр contribution содержит неправильное значение contribution")
    };
    if (typeof amount != "string" || amount != "number") {
        console.log("Параметр amount содержит неправильное значение amount")
    };
    if (typeof date != "object") {
        console.log("Параметр date содержит неправильное значение date")
    };
    let loanBody = amount - contribution;
    //сюда срок кредита 
    let period;
    let monthlyPercent = (percent / 12) / 100;
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), n) - 1)));
    let totalAmount = monthlyPayment * period;
    totalAmount.toFixed(2);

    // код для задачи №2 писать здесь

    return totalAmount;
}