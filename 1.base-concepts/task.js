"use strict";

function solveEquation(a, b, c) {
    let arr = {};
    let D;
    D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return false;
    }
    if (D == 0) {
        arr = (-b / (2 * a));
    }
    if (D > 0) {
        let res = [];
        res.push((-b + Math.sqrt(D)) / (2 * a));
        res.push((-b - Math.sqrt(D)) / (2 * a));
        arr = res;
    }

    // код для задачи №1 писать здесь
    return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;

    // код для задачи №2 писать здесь

    return totalAmount;
}