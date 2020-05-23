const delay = ms => {
    return new Promise(resolve => resolve(ms));
};

const loggerr = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(loggerr); // Resolved after 2000ms
delay(1000).then(loggerr); // Resolved after 1000ms
delay(1500).then(loggerr); // Resolved after 1500ms
