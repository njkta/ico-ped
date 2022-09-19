"use strict";

window.onload = function(){
    document.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            document.body.classList.toggle('maket')
        }
    })

    let menuOpen = document.querySelector('.menu > svg')
    let menuClose = document.querySelector('.menu__close')

    let menuContainer = document.querySelector('.menu__container')
    let open = false

    let openMenu = () => {
        if (!open){
            open = true
            menuContainer.classList.add('menu__show')
            document.body.classList.add('show')
        }
    }
    let closeMenu = () => {
        if (open){
            open = false
            menuContainer.classList.remove('menu__show')
            document.body.classList.remove('show')
        }
    }
    menuOpen.addEventListener('click', openMenu)
    menuClose.addEventListener('click', closeMenu)



    let swiper = new Swiper(".actual-program-slider", {
        slidesPerView: 2,
        spaceBetween: 24,
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 4,
                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",
                },
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

    let courses = document.querySelector('.courses > .btn')

    courses.addEventListener('click', e => {
        courses.parentElement.classList.toggle('courses_show')
        document.body.classList.toggle('show')
    })
}

