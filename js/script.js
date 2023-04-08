'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Титаник',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
	]
};

document.querySelectorAll('.promo__adv img').forEach(item => item.remove());
document.querySelector('.promo__adv-title').remove();
document.querySelector('.promo__genre').textContent = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';

function newList() {
	const list = document.querySelector('.promo__interactive-list');
	const listItems = document.querySelectorAll('.promo__interactive-item');
	movieDB.movies.sort();
	listItems.forEach((item, i) => {
		item.remove();
	});
	movieDB.movies.forEach((item, i) => {
		list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i+1}) ${item} <div class="delete"></div></li>`);
	});
	const baskets = document.querySelectorAll('.delete');
	baskets.forEach((item, i) => {
		item.addEventListener('click', () => {
			item.parentElement.remove();
			movieDB.movies.splice(i, 1);
			newList();
		});
	});
}

newList();

const btn = document.querySelector('button');
const filmInput = document.querySelector('.add input');
const checkBox = document.querySelector('.check-favourite');
btn.addEventListener('click', () => {
	if (filmInput.value) {
		let s = filmInput.value.toUpperCase();
		if (s.length > 21) s = `${s.slice(0, 21)}...`;
		movieDB.movies.push(s);
		if (checkBox.checked) console.log('Добавляется любимый фильм');
		newList();
	}
});


