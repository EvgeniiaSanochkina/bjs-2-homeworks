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
let today = new Date();

function monthDiff(today, date) {
    return date.getMonth() - today.getMonth() + (12 * (date.getFullYear() - today.getFullYear()))
};

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    if (isNaN(parseFloat(percent)) && typeof percent != "number") {
        return 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"'
    };
    if (isNaN(parseFloat(contribution)) && typeof contribution != "number") {
        return 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"'
    };
    if (isNaN(parseFloat(amount)) && typeof amount != "number") {
        return 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"'
    };
    if (typeof date != "object") {
        return 'Параметр "Дата" содержит неправильное значение "' + date + '"'
    };
    let loanBody = amount - contribution;

    let period = monthDiff();
    let monthlyPercent = (percent / 12) / 100;
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), period) - 1)));
    totalAmount = monthlyPayment * period;
    totalAmount = Number(totalAmount.toFixed(2));

    // код для задачи №2 писать здесьs

    return totalAmount;
}