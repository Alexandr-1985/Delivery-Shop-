//принимаем данные из статического JSON файла, его можно менять
const restourant = "tanuki";

//передаем данные в ф-ю (можно в переменную)
const renderItems = (data) => {
    console.log(data);
};

//Работа с методом Fetch для серверных запросов (получает и отправляет) из статичных JSON файлов
//использую обратные кавычки для выражений
fetch(`./db/${restourant}.json`)
    .then((response) => response.json()) //чтобы получить данные в нужном виде нам надо вернуть response.json
    .then((data) => {
        renderItems(data);
    })
    //ловим ошибки с колбэком
    .catch((error) => {
        console.log(error);
    });