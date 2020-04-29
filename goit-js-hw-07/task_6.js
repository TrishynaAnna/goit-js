//Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
const input = document.querySelector("#validation-input");

input.addEventListener("blur", e => {
    const elem = e.currentTarget;
    if (elem.value.length === elem.dataset.length) {
        elem.classList.add("valid");
    } else {
        elem.classList.remove("invalid");
    }
});
