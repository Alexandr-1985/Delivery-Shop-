//создаем массив
const array = [11, 34, 54, 65, 87, 89];

//передаем данные в ф-ю (можно в переменную)
const renderItems = (data) => {
    console.log(data);
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
  //образаюсь к элементу массива
  console.log(array[i]);
}
*/