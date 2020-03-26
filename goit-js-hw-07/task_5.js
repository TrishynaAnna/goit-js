//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
const input = document.querySelector("input#name-input");
const result = document.querySelector("span#name-output");

input.addEventListener("change", e => {
    result.textContent = e.currentTarget.value;
    if (e.currentTarget.value.length === 0) {
        result.textContent = " ";
    }
});
