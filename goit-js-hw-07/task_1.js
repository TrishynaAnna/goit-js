//В HTML есть список категорий ul#categories.

const el = document.querySelectorAll('.item');
Array.from(el).forEach(li => {
    const h2 = li.querySelector('h2');
    const elementLi = li.querySelectorAll('li');
    console.log(
        `Категория ${h2.textContent}. Количество элементов: ${elementLi.length}`,
    );
});
