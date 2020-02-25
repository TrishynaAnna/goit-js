'use strict'
let input;
const numbers = [];
let total = 0;
do {
    input = prompt('Введите число: ');
    console.log(Number(input));
    if (input !== null) {
        numbers.unshift(Number(input));
    }
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}
console.log(numbers);
console.log(total);
