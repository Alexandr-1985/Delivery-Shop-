const partners = () => {
  //создаем контейнер из карточке в index.html
const cardsRestaurants = document.createElement("cards-restaurants");

/*
//ищем класс лист
console.dir(cardsRestaurants); 
cardsRestaurants.classList.add("123");
cardsRestaurants.classList.remove("123");
//переключатель классов
cardsRestaurants.classList.toggle("123");
cardsRestaurants.classList.toggle("123");
*/

//передаем данные в ф-ю (можно в переменную)
const renderItems = (data) => {
    //перебор дdata возвращаюющейся от сервера
    data.forEach(({item}) => {
      
      //создаем ТЭГ а
      const a = document.createElement("a");
  //можно написать деструктуризацию нашего  a.innerHTML = `
      //тогда можем работать с каждым св-ом без использования самого объекта
      const {image, kitchen, name, price, products, stars, time_of_delivery} = item;
console.log(item.name);
console.dir(a);
//a.products = products;
a.dataset.products = products;
//таки образом мы в дата атрибуте сохранили строчку и будем получать данные в javaJSON
console.log(a.dataset.products);

      //для работы с атрибутами нового атрибута с новым значением
      a.setAttribute("href", "/restaurant.html");
      //добавяем класы
      a.classList.add("card");
      a.classList.add("card-restaurant");
      //добавляем весь контент внутри тега a
      a.innerHTML = `
       <img src="${image}" alt="${name}" class="card-image" />
           <div class="card-text">
             <div class="card-heading">
               <h3 class="card-title">${name}</h3>
                 <span class="card-tag tag">${time_of_delivery} мин</span>
            </div>
             <div class="card-info">
             <div class="rating">${stars}</div>
             <div class="price">${price}</div>
             <div class="category">${kitchen}</div>
           </div>
       `;

       //вешаем обработчик события перехватывая клик по краточке
a.addEventListner('click', (event)=> {
event.preventDefault();
//const link = a.dataset.products;

//сохраняем в памяти браузера
localStorage.setItem('restaurant', JSON.stringify(item));

//переход на другую страницу сразу после сохранения информации в localStorage
window.location.href = '/restaurant.html';
})
      cardsRestaurants.append(a);
    });
};

//Работа с методом Fetch для серверных запросов (получает и отправляет из статичного файла)
//fetch("./db/partners.json")
fetch("https://go-test-shop-default-rtdb.firebaseio.com/db/partners.json")
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    //ловим ошибки с колбэком
    .catch((error) => {
        console.log(error);
    })
    //метод отработает и с ошибкой и без
    .finally(console.log("finally"));

/*
        array.forEach((elem, index) => {
            //console.log(elem);
        	if (index < 3) {
        		console.log(elem);
        	} else if (index === 3) {
        		console.log(elem);
        	}
        });
        */
/*
        array.forEach(function(elem, index, array) {
            console.log(elem);
            console.log(index);
            console.log(array);
        });*/

/*
        for (let i = 0; i < array.length; i++) {
          //образаюсь к каждому отдельному элементу массива
          console.log(array[i]);
        }
        */
}

export default partners;