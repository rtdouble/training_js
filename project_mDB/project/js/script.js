/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Карась",
        "Лига справедливости",
        "Яндекс гавно",
        "Алкоголички",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = document.querySelector('.promo__genre'),
      promoInter = document.querySelector('.promo__interactive-list');

movieDB.movies.sort();

promoInter.innerHTML = "";

movieDB.movies.forEach((film, i) => {
    promoInter.innerHTML += `
        <li class="promo__interactive-item">${i + 1}) ${film}
            <div class="delete"></div>
        </li>
    `;
});

promoAdv.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'ДРАМА';

promoBg.style.backgroundImage = "url('img/bg.jpg')";



