//Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
});

increment.addEventListener("click", () => {
    counterValue += 1;
    value.innerHTML = counterValue;
});
