'use strict'
//Task_5
let deliveryCost;
const deliveryToCountry = prompt("Введите страну, куда нужно доставить товар");
const country = deliveryToCountry.toLowerCase();
switch (country) {
    case "Китай":
        deliveryCost = 100;
        alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
        break;
    case "Чили":
        deliveryCost = 250;
        alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
        break;
    case "Австралия":
        deliveryCost = 170;
        alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
        break;
    case "Индия":
        deliveryCost = 80;
        alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
        break;
    case "Ямайка":
        deliveryCost = 120;
        alert(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
        break;
    default:
        alert("В вашей стране доставка не доступна");
}


