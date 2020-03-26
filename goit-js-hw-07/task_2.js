//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов
// используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listOfIngredients = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
    const newElem = document.createElement("li");
    newElem.innerHTML = ingredients[i];
    listOfIngredients.appendChild(newElem);
}
