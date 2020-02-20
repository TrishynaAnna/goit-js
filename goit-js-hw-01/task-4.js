'use strict'
//Task_4
const credits=23580;
const pricePerDroid=3000;
let totalPrice;
const countDroid = prompt('Какое количество дроидов вы бы хотели приобрести??');
if (countDroid === null) {
    console.log('Отменено пользователем!');
} else {
    Number(countDroid);
    if (countDroid > 0) {
        totalPrice = countDroid * pricePerDroid;
    } else {
        console.log('Неверное значение');
    }
}
if (totalPrice === undefined) {
    console.log('Не коректное значение totalPrice', totalPrice);
} else if (credits < totalPrice) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(
        `Вы купили ${totalPrice} дроидов, на счету осталось ${credits - totalPrice} кредитов.`,
    );
}

