'use strict'
//Task 3
const ADMIN_PASSWORD = 'jqueryismyjam';
let message=prompt('Введите пожалуйста пароль',);
console.log(message);
if (message === ADMIN_PASSWORD){
    console.log(message = 'Добро пожаловать!');
    alert(message);
}
else if (message === null) {
    console.log(message = 'Отменено пользователем!');
}
else {
   alert(message = 'Доступ запрещен, неверный пароль!');
}


