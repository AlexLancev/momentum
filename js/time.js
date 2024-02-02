// Выбираем элемент с классом 'time' из DOM
const time = document.querySelector('.time');
const date = document.querySelector('.date');

const options = {
    weekday : 'long',
    day : 'numeric',
    month: 'long'
}

date.textContent = new Date().toLocaleDateString('ru-Ru', options);

// Определяем функцию для отображения текущего времени
function showTime() {
  // Создаем новый объект Date для получения текущей даты и времени
  const date = new Date(); 

  // Обновляем innerHTML элемента 'time' текущим временем в локализованном формате
  time.innerHTML = date.toLocaleTimeString();

  // Вызываем функцию showTime снова через 1000 мс (1 секунду) с помощью setTimeout
  setTimeout(showTime, 1000);
}

// Вызываем функцию showTime для начала отображения времени
showTime();