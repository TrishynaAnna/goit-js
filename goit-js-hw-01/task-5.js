'use strict'
//Task_5
let deliveryCost;
let country;
const China = 'Китай';
const deliveryToCountry = prompt("Введите страну, куда нужно доставить товар");
const deliveryCountry = deliveryToCountry.toLowerCase();
switch (deliveryCountry) {
case 'китай':
country = 'Китай';
deliveryCost = 100;
break;

case 'Чили':
country = 'Чили';
deliveryCost = 250;
break;

case 'Австралия':
country = 'Австралию';
deliveryCost = 170;
break;

case 'Индия':
country = 'Индию';
deliveryCost = 80;
break;

case 'Ямайка':
country = 'Ямайку';
deliveryCost = 120;
break;

default:
alert('В вашей стране доставка недоступна!');
}

console.log(`Доставка в ${deliveryCountry} будет стоить ${deliveryCost} кредитов.`);
