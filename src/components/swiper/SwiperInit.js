import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

Swiper.use([Navigation]);

export function initSwiper() {
    new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.arrow.arrow-right',
            prevEl: '.arrow.arrow-left',
        },
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >=
            941: {
                slidesPerView: 2,
            },
            1190: {
                slidesPerView: 3,
            }
        },
    });
}
