const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");
const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");

const TestLogin = (login) => {
    if(/^[a-zA-Z1-9]+$/.test(login)=== false){
        alert('В логине должны бытьтолько латинские буквы');
    }
    if(login.length < 4 || login.length > 20) {
        alert('В лошине должно быть от 4 до 20 символов');
    }
    if(parsentInt(login.substr(0, 1))) {
        alert('Логины должны начинаться с буквы'); return fasle;
    }
    return true;
}

//modalAuth.style.color = "red";

//ф-я для авторизации
const login = (user) => {
    // console.log(user);
    buttonAuth.style.display = "none";
    buttonOut.style.display = "flex";
    userName.style.display = "flex";

    //имя ползователя на входе
    userName.textContent = user.login;
    //закрытие модального окна
    modalAuth.style.display = "none";
};

//ф-я противоположная авторизации
const logout = () => {
    buttonAuth.style.display = "flex";
    buttonOut.style.display = "none";
    userName.style.display = "none";

    //имя ползователя на входе
    userName.textContent = "";

    //удаление значения из localStorage
    localStorage.removeItem("user");
};

//открытие модального окна
buttonAuth.addEventListener("click", () => {
    // console.dir(modalAuth);
    modalAuth.style.display = "flex";
});

//закрытие модального окна на крестик
closeAuth.addEventListener("click", () => {
    modalAuth.style.display = "none";
});

//клавиша выхода модального окна
buttonOut.addEventListener("click", () => {
    logout();
});

//добавляем форму с обработчиком события submit
logInForm.addEventListener("submit", (event) => {
    //console.dir(event);
    //отмена перезагрузки экрана, отмена стандартного поведения на стра
    event.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value,
    };
    //сохраняем данные в памяти браузера
    localStorage.setItem("user", JSON.stringify(user));
    login(user);
});

//выполняем проверку всего что мы сохранили
if (localStorage.getItem("user")) {
    login(JSON.parse(localStorage.getItem("user")));
}