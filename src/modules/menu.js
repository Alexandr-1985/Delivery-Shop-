const menu = () => {
    //принимаем данные из статического JSON файла, его можно менять
const cardsMenu = document.quarySelector('.cards-menu');

//смена данных в блоке Пицца Плюс со звездами вверху слева
const changeTitle = (restaurant) => {
    const restaurantTitle = document.quarySelector('.restaurant-title');
    //console.log(restaurantTitle);
    restaurantTitle.textContent = restaurant.name;
};

//передаем данные в ф-ю (можно в переменную)
const renderItems = (data) => {
    card.classList.add('card');
   
   //выполняем рендер наших карточек перебирая data и создавая новый div
    data.forEach(({ description, id, image, name, price }) => {
        const card = document.createElement('div');
        console.log(description);
        //все св-ва полуаем через деструктуризацию и вставляем вместо item записывая сражу в item

        card.classList.add('card');

        card.innerHTML = `
    <div class="card">
                        <img src="${image}" alt="${name}" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-title card-title-reg">${name}</h3>
                            </div>
                            <div class="card-info">
                                <div class="ingredients">
                                    ${description}
                                </div>
                            </div>
                            <div class="card-buttons">
                                <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                  </button>
                                <strong class="card-price-bold">${price} ₽</strong>
                            </div>
                        </div>
    `;

        //выводим карточки в нашем контейнере
        //после чего мы удалем все карточки товаров из restaurant.html
        cardMenu.append(card);

    });
};

//получаем данные из localStorage
//console.log(localStorage.getItem('restaurant'));

if (localStorage.getItem('restaurant')) {
//чтбы превратить в строчку используем "stringify", а обратный метод parse
    const restaurant = JSON.parse(localStorage.getItem('restaurant'));
    //console.log(restaurant);

changeTitle(restaurant);
    //Работа с методом Fetch для серверных запросов (получает и отправляет) из статичных JSON файлов
//использую обратные кавычки для выражений
    fetch(`./db/${restaurant.products}`)
        .then((response) => response.json()) //чтобы получить данные в нужном виде нам надо вернуть response.json
        .then((data) => {
            renderItems(data);
        })
        //ловим ошибки с колбэком
        .catch((error) => {
            console.log(error);
    }) 
    //если удалить данные из localStorage чтобы небыло пустой страницы
} else {
    window.location.href = '/';
}
}

export default menu;