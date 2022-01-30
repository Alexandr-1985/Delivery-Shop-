//использую библиотеку swiper для слайдера
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Autoplay]);
Swiper.use([Navigation]);
Swiper.use([Pagination]);

const slider = () => {
    //слайдер заглавной рекламы
    const swiper = new Swiper(".swiper", {
        //слайдер по кругу
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
};

export default slider;