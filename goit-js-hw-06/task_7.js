//Получить общую сумму баланса (поле balance) всех пользователей.
import users from './users.js';
const calculateTotalBalance = users =>  users.map(user => user.balance).reduce((prev, curr) => prev + curr, 0);

console.log(calculateTotalBalance(users)); // 20916
