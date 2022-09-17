"use strict";

window.onload = function(){
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            document.body.classList.toggle('maket')
        }
    })

    let menuIcon = document.querySelectorAll('.icon-menu');
    let menu = document.querySelector('.right-menu-container')

    menuIcon.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle('close')

            menu.classList.toggle('show')
        })
    })

    let swiper = new Swiper(".actual-program-slider", {
        slidesPerView: 2,
        spaceBetween: 24,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 4,
                centeredSlides: true,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 24,
                grid: {
                    rows: 2,
                    fill: "row",
                },
            },
        }
    });
}

