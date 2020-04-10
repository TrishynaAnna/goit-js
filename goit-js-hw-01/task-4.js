'use strict'
//Task_4
const credits = 23580;
const pricePerDroid = 3000;

const numberOfDroids = prompt('Введите количество дроидов!');
const totalPrice = pricePerDroid * numberOfDroids;
const remainder = credits - totalPrice;

if (numberOfDroids === null) {
    console.log('Отменено пользователем!');
} else {
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        console.log(
            `Вы купили ${numberOfDroids} дроидов, на счету осталось ${remainder} кредитов.`,
        );}}


