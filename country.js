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

  const countryName = document.querySelector('h1').textContent;
  // Получаем элемент с id="relationships"
  const generalInfoBlock = document.getElementById("general-info");
  const capitalBlock = document.getElementById("capital");
  const geographyBlock = document.getElementById("geography");
  const populationBlock = document.getElementById("population");
  const historyBlock = document.getElementById("history");
  const scienceBlock = document.getElementById("science");
  const tourismBlock = document.getElementById("tourism");
  const economyBlock = document.getElementById("economy");
  const ecologyBlock = document.getElementById("ecology");
  const kitchenBlock = document.getElementById("kitchen");
  const relationshipsBlock = document.getElementById("relationships");
  const organizationBlock = document.getElementById("organization");
  const mapBlock = document.getElementById("map");
  // Изменяем текст внутри элемента с id="relationships"
  generalInfoBlock.querySelector('h2').textContent = `${countryName}. Общие сведения`;
  capitalBlock.querySelector('h2').textContent = `${countryName}. Столица`;
  geographyBlock.querySelector('h2').textContent = `${countryName}. География`;
  populationBlock.querySelector('h2').textContent = `${countryName}. Население`;
  historyBlock.querySelector('h2').textContent = `${countryName}. История`;
  scienceBlock.querySelector('h2').textContent = `${countryName}. Наука и культура`;
  tourismBlock.querySelector('h2').textContent = `${countryName}. Туризм`;
  economyBlock.querySelector('h2').textContent = `${countryName}. Экономика`;
  ecologyBlock.querySelector('h2').textContent = `${countryName}. Экология`;
  kitchenBlock.querySelector('h2').textContent = `${countryName}. Кухня`;
  relationshipsBlock.querySelector('h2').textContent = `${countryName}. Отношения с Россией`;
  organizationBlock.querySelector('h2').textContent = `${countryName}. Международные организации`;
  mapBlock.querySelector('h2').textContent = `${countryName}. Расположение`;
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
  window.location.href = "https://maxhugoboss.github.io/my-first-website/index.html";
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

const backgrounds = [
  "Фотки/Разное/222.jpg",
  "Фотки/Разное/333.jpg",
  "Фотки/Разное/444.jpg",
  "Фотки/Разное/555.jpg",
  "Фотки/Разное/666.jpg",
  "Фотки/Разное/777.jpg",
  "Фотки/Разное/888.jpg",
  "Фотки/Разное/999.jpg",
  "Фотки/Разное/10.jpg",
  "Фотки/Разное/2024-03-20_22-15-24.jpg",
];

function changeHeaderBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const randomBackground = backgrounds[randomIndex];
  const header = document.querySelector(".header");
  header.style.backgroundImage = `url("${randomBackground}")`;
}

window.onload = changeHeaderBackground;


