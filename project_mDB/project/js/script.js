// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */


'use strict';   // строгий режим

document.addEventListener('DOMContentLoaded', () => {    // когда документ сформирует єлементы - выполнять скрипт


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
      promoInter = document.querySelector('.promo__interactive-list'),
      addInput = document.querySelector('.adding__input'),
      formAdd = document.querySelector('form.add'),
      checkBox = formAdd.querySelector('[type="checkbox"]');

const sort = (arr) => {
    arr.sort();
};

const addElemets = (arr, perent) => {
    promoInter.innerHTML = "";
    sort(movieDB.movies);
    arr.forEach((film, i) => {
        perent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}) ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);

            addElemets(arr, perent);
        });
    });
};

const deleteAdv = (adv) => {
    adv.forEach(item => {
        item.remove();
    });
};

const otherFunc = () => {
    promoGenre.textContent = 'ДРАМА';
    promoBg.style.backgroundImage = "url('img/bg.jpg')";
};

formAdd.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = addInput.value;
    const favorite = checkBox.checked;
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 20)}...`;
        }
        movieDB.movies.push(newFilm);
        sort(movieDB.movies);
        addElemets(movieDB.movies, promoInter);
    }
 
    formAdd.reset();    
    if (favorite) { console.log('Добавляем любимый фильм');}
});

deleteAdv(promoAdv);
otherFunc();
addElemets(movieDB.movies, promoInter);

















});