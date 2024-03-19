// Ожидаем события загрузки и готовности документа перед выполнением функции
document.addEventListener("DOMContentLoaded", function() {
  // Добавляем обработчик события keydown для поля ввода страны
  const countrySearchInput = document.getElementById('country-search');
  countrySearchInput.addEventListener('keydown', function(event) {
    // Проверяем, была ли нажата клавиша Enter (код 13)
    if (event.keyCode === 13) {
      // Вызываем функцию поиска страны
      searchCountry();
      // Останавливаем дальнейшее распространение события, чтобы не вызывать событие submit формы или другие действия по умолчанию
      event.preventDefault();
    }
  });
});
  
function searchCountry() {
  // Получаем значение из поля ввода поиска
  const searchValue = document.getElementById('country-search').value.toLowerCase();
  
  // Получаем список всех стран
  const allCountries = document.querySelectorAll('.country');
  
  // Флаг, указывающий, была ли найдена хотя бы одна страна
  let found = false;

  // Проходимся по каждой стране
  allCountries.forEach(country => {
    // Получаем название страны
    const countryName = country.querySelector('.country-name').textContent.toLowerCase();
    
    // Если название страны содержит введенное значение, отображаем ее, иначе скрываем
    if (countryName.includes(searchValue)) {
      country.style.display = 'block';
      found = true; // Устанавливаем флаг, что найдена хотя бы одна страна
    } else {
      country.style.display = 'none';
    }
  });

  // Показываем или скрываем сообщение об отсутствии результатов в зависимости от значения флага
  const noResultsMessage = document.getElementById('no-results-message');
  if (found) {
    noResultsMessage.style.display = 'none'; // Найдены результаты, скрываем сообщение
  } else {
    noResultsMessage.style.display = 'block'; // Результатов нет, показываем сообщение
  }

  // Очищаем содержимое поля ввода
  document.getElementById('country-search').value = '';
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
})

// Функция для Европы
function hideEurope() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.europe)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  });  
  
  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Азии
function hideAsia() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.asia)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Африки
function hideAfrica() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.africa)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Северной Америки
function hideNorthAmerica() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.north-america)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Южной Америки
function hideSouthAmerica() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.south-america)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Океании
function hideOceania() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.oceania)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Центральной Америки
function hideCentralAmerica() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.central-america)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Карибского бассейна
function hideCaribbeanBasin() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.caribbean-basin)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  });

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

// Функция для Других стран
function hideOther() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });

  const countriesEuropeToHide = document.querySelectorAll('.country:not(.other)');
  countriesEuropeToHide.forEach(country => {
    country.style.display = 'none';
  }); 

  // Скрываем блок с сообщением "По вашему запросу ничего не найдено"
  const noResultsMessage = document.getElementById('no-results-message');
  noResultsMessage.style.display = 'none';
}

/* ДО ЭТОГО КОДА ВСЕ РАБОТАЕТ */

function showAllCountries() {
  const allCountries = document.querySelectorAll('.country');
  allCountries.forEach(country => {
    country.style.display = 'block';
  });
}

// Получаем все пункты выпадающего списка
const dropdownItems = document.querySelectorAll('.dropdown-content a');

// Проходимся по каждому пункту и добавляем обработчик события клика
dropdownItems.forEach(item => {
  item.addEventListener('click', function(event) {
    // Предотвращаем переход по ссылке (по умолчанию)
    event.preventDefault();
    // Получаем текст выбранного элемента
    const selectedText = item.textContent;
    // Обновляем текст заголовка h1 с названием раздела
    updateHeaderTitle(selectedText);
  });
});

function updateHeaderTitle(selectedText) {
  const headerTitle = document.querySelector('.header-info');
  headerTitle.textContent = selectedText;
}

function showAllCountriesAndUpdateTitle(text) {
  showAllCountries();
  updateHeaderTitle(text);
}

function hideEuropeAndUpdateTitle(text) {
  hideEurope();
  updateHeaderTitle(text);
}

function hideAsiaAndUpdateTitle(text) {
  hideAsia();
  updateHeaderTitle(text);
}

function hideAfricaAndUpdateTitle(text) {
  hideAfrica();
  updateHeaderTitle(text);
}

function hideNorthAmericaAndUpdateTitle(text) {
  hideNorthAmerica();
  updateHeaderTitle(text);
}

function hideSouthAmericaAndUpdateTitle(text) {
  hideSouthAmerica();
  updateHeaderTitle(text);
}
function hideOceaniaAndUpdateTitle(text) {
  hideOceania();
  updateHeaderTitle(text);
}

function hideCentralAmericaAndUpdateTitle(text) {
  hideCentralAmerica();
  updateHeaderTitle(text);
}

function hideOtherAndUpdateTitle(text) {
  hideOther();
  updateHeaderTitle(text);
}