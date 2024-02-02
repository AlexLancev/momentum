// Получаем элементы с классами 'greeting' и 'name'
const greeting = document.querySelector('.greeting');
const nameUser = document.querySelector('.name');

// Добавляем обработчик события 'input' на поле ввода имени
nameUser.addEventListener('input', function() {
    // Сохраняем значение имени в локальное хранилище при каждом изменении
    localStorage.setItem('name', nameUser.value);
})

// Функция, которая возвращает приветственное сообщение в зависимости от текущего времени
function getGreetingMessage(currentTime) {
    switch (true) {
        case currentTime > 6 && currentTime < 12:
            return 'Доброе утро';
        case currentTime >= 12 && currentTime < 18:
            return 'Добрый день';
        case currentTime >= 18 && currentTime < 24:
            return 'Добрый вечер';
        case currentTime >= 0 && currentTime < 6:
            return 'Доброй ночи';
        default:
            return 'Здравствуйте';
    }
}

// Функция для обновления времени и приветственного сообщения
function updateTimeAndGreeting() {

    // Получаем текущее время
    const currentTime = new Date().getHours();

    // Получаем приветственное сообщение для текущего времени
    const message = getGreetingMessage(currentTime);

    // Устанавливаем текст приветствия на странице
    greeting.textContent = message;
}

// Функция для получения времени и настройки приветствия
function getTime() {
    
    // Получаем имя пользователя из локального хранилища, если оно есть
    nameUser.value = localStorage.length ? localStorage.getItem('name') : '';

    // Вызываем функцию для обновления времени и приветственного сообщения
    updateTimeAndGreeting();

    // Устанавливаем таймер для повторного вызова функции каждую секунду
    setTimeout(getTime, 1000);
}

// Вызываем функцию для получения времени и настройки приветствия
getTime();
