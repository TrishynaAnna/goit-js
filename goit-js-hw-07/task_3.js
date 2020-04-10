//Используй массив объектов images для создания тегов img вложенных в li. Для создания
// разметки используй шаблонные строки и insertAdjacentHTML().

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const list = document.querySelector("ul#gallery");

const element = images.map(image => {
    return `<li><img alt="${image.alt}" src = "${image.url}"></li>`;
}).join('\n');

list.insertAdjacentHTML("beforeend", `${element}`);
