import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

Swiper.use([Navigation]);

export function initSwiper({
    desktopSlidesPerView,
    tabletSlidesPerView,
    mobileSlidesPerView,
    spaceBetween,
    id,
}) {
    new Swiper(`.swiper.${id}`, {
        loop: true,
        navigation: {
            nextEl: `.arrow.arrow-right.${id}`,
            prevEl: `.arrow.arrow-left.${id}`,
        },
        grabCursor: true,
        slidesPerView: mobileSlidesPerView,
        spaceBetween: spaceBetween,
        breakpoints: {
            // when window width is >=
            941: {
                slidesPerView: tabletSlidesPerView,
            },
            1190: {
                slidesPerView: desktopSlidesPerView,
            },
        },
    });
}
