'use strict'
//Task_5
const countryChina='Китай';
const countryChile='Чили';
const countryAustralia='Австралия';
const countryIndia='Индия';
const countryJamaica='Ямайка';
const priceChina=100;
const priceChile=250;
const priceAustralia=170;
const priceIndia=80;
const priceJamaica=120;
let delivery=prompt('В какую страну вы хотите заказать доставку?');
switch (delivery.toLowerCase()) {
    case countryChina.toLowerCase():
        alert(`Доставка в "${countryChina}" будет стоить ${priceChina} кредитов`);
        break;
    case countryChile.toLowerCase():
        alert(`Доставка в "${countryChile}" будет стоить ${priceChile} кредитов`);
        break;
    case countryAustralia.toLowerCase():
        alert(`Доставка в "${countryAustralia}" будет стоить ${priceAustralia} кредитов`);
        break;
    case countryIndia.toLowerCase():
        alert(`Доставка в "${countryIndia}" будет стоить ${priceIndia} кредитов`);
        break;
    case countryJamaica.toLowerCase():
        alert(`Доставка в "${countryJamaica}" будет стоить ${priceJamaica} кредитов`);
        break;
    default:
        alert(`В вашей стране "${delivery}" доставка не доступна`);
}



