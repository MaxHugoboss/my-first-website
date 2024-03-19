// Ожидаем события загрузки и готовности документа перед выполнением функции
document.addEventListener("DOMContentLoaded", function() {
  // Устанавливаем начальный индекс слайда
  let slideIndex = 0;
  // Вызываем функцию для отображения слайда с указанным индексом
  showSlide(slideIndex);

  // Функция для переключения на предыдущий слайд
  function prevSlide() {
    // Уменьшаем индекс слайда на 1 и отображаем предыдущий слайд
    showSlide(--slideIndex);
  }

  // Функция для переключения на следующий слайд
  function nextSlide() {
    // Увеличиваем индекс слайда на 1 и отображаем следующий слайд
    showSlide(++slideIndex);
  }

  // Функция для отображения слайда с указанным индексом
  function showSlide(n) {
    // Получаем все элементы изображений слайдов
    const slides = document.querySelectorAll('.slides img');
    // Получаем элемент, отображающий текущий номер слайда
    const slideCounter = document.querySelector('.slide-counter');
    // Если индекс слайда больше или равен общему количеству слайдов,
    // переходим к первому слайду
    if (n >= slides.length) { slideIndex = 0; }
    // Если индекс слайда меньше 0, переходим к последнему слайду
    if (n < 0) { slideIndex = slides.length - 1; }
    // Скрываем все слайды
    slides.forEach(slide => slide.style.display = "none");
    // Отображаем текущий слайд
    slides[slideIndex].style.display = "block";
    // Обновляем номер текущего слайда в счетчике
    slideCounter.textContent = `${slideIndex + 1} / ${slides.length}`;
  }

  // Получаем кнопки для переключения слайдов
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  // Назначаем обработчики событий для кнопок переключения слайдов
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
});

// Функция для изменения размера изображения (развертывание/свертывание)
function toggleSize(image) {
  // Получаем элемент оверлея
  const overlay = document.querySelector('.overlay');
  // Изменяем класс изображения для развертывания/свертывания
  image.classList.toggle("expanded");
  // Если изображение развернуто, показываем оверлей
  if (image.classList.contains("expanded")) {
    overlay.classList.add("show-overlay");
  } else {
    // Иначе скрываем оверлей
    overlay.classList.remove("show-overlay");
  }
}

// Функция для плавной прокрутки страницы вверх
function scrollToTop() {
  // Прокручиваем страницу вверх с плавным эффектом прокрутки
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Добавляем обработчик события прокрутки окна для отображения кнопки "Наверх"
window.addEventListener('scroll', function() {
  // Получаем кнопку "Наверх"
  const scrollTopButton = document.querySelector('.scroll-top-btn');
  // Если пользователь прокрутил страницу на расстояние больше 20 пикселей
  if (window.scrollY > 20) {
    // Показываем кнопку "Наверх"
    scrollTopButton.classList.add('show');
  } else {
    // Скрываем кнопку "Наверх"
    scrollTopButton.classList.remove('show');
  }
});

function goToHome() {
  // Замените "URL_другого_сайта" на адрес вашего другого локального сайта
  window.location.href = "file:///C:/Users/ADMIN/YandexDisk/Мой%20сайт/мой%20первый%20сайт/index.html";
}

function toggleSections(event) {
  var toc = document.getElementById("toc");
  toc.classList.toggle("show-sections");
  event.stopPropagation(); // Остановить дальнейшее всплытие события
}

document.addEventListener("click", function(event) {
  var toc = document.getElementById("toc");
  var sectionsButton = document.querySelector(".sections-button");

  // Если клик был вне области списка и не на кнопке "Разделы", скрываем список
  if (!toc.contains(event.target) && event.target !== sectionsButton) {
    toc.classList.remove("show-sections");
  }
});
