//Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
const range = document.querySelector("#font-size-slider");
const text = document.querySelector("#text");

range.addEventListener("input", e => {
    const countFontSize = e.currentTarget.value / 3.125;
    text.setAttribute("style", `font-size:${countFontSize}px`);
});
