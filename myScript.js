// Переменные для отслеживания времени
var startTime;
var endTime;

// Функция для начала отсчета времени
function startTimer() {
  startTime = new Date();
}

// Функция для завершения отсчета времени и вывода результатов
function stopTimer() {
  endTime = new Date();
  var elapsedTime = (endTime - startTime) / 1000; // в секундах

  alert("Время прохождения: " + elapsedTime + " секунд");
}

// Обработчик события для кнопки "play-button"
document.getElementById("play-button").addEventListener("click", function() {
  console.log("Привет, это сообщение в консоль!");
  startTimer(); // начинаем отсчет времени при клике на кнопку
});

// Дополнительный обработчик для завершения таймера (пример)
document.getElementById("play-button").addEventListener("click", function() {
  stopTimer(); // завершаем отсчет времени при клике на другую кнопку (пример)
});
