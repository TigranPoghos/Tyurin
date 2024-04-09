document.addEventListener("DOMContentLoaded", function(){

    const body = document.querySelector('body')

    //каталог
    const header__catalogJs = document.querySelector('.header__catalogJs')
    const header__catalog = document.querySelector('.header__catalog') 
    const header = document.querySelector('.header')
    const header__opacity = document.querySelector('.header__opacity')

    header__catalogJs?.addEventListener('click', function(){
	    header__catalog.classList.toggle('active')
        header.classList.toggle('active')
        body.classList.toggle('active')
        header__opacity.classList.toggle('active')
    })


    //клик вне каталога
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(header__catalog)
        const clickJs = e.composedPath().includes(header__catalogJs)
    
        if (( !click ) && (!clickJs)) {
            header__catalog.classList.remove('active')
            header.classList.remove('active')
            header__opacity.classList.remove('active')
            body.classList.remove('active')
        }
    })



    //корзина
    const basket__button = document.querySelector('.basket__button')
    const basket = document.querySelector('.basket')
    const basket__opacity = document.querySelector('.basket__opacity')

    basket__button?.addEventListener('click', function(){
        basket.classList.toggle('active')
        body.classList.toggle('activeBasket')
        header.classList.toggle('activeBasket')
        basket__opacity.classList.toggle('active')
    })

    const basket__close = document.querySelector('.basket__close')

    basket__close?.addEventListener('click', function(){
        basket.classList.toggle('active')
        body.classList.toggle('activeBasket')
        header.classList.toggle('activeBasket')
        basket__opacity.classList.toggle('active')
    })

    //клик вне корзины
    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(basket)
        const clickBasket = e.composedPath().includes(basket__button)
    
        if (( !click ) && (!clickBasket)) {
            basket.classList.remove('active')
            body.classList.remove('activeBasket')
            header.classList.remove('activeBasket')
            basket__opacity.classList.remove('active')
        }
    })




    // прибавить и убавить кол-во
    $('.quantity_inner .bt_minus').click(function() {
        let $input = $(this).parent().find('.quantity')
        let count = parseInt($input.val()) - 1
        count = count < 1 ? 1 : count
        $input.val(count)
    });
    $('.quantity_inner .bt_plus').click(function() {
        let $input = $(this).parent().find('.quantity')
        let count = parseInt($input.val()) + 1
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count
        $input.val(parseInt(count))
    }); 
    $('.quantity_inner .quantity').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '')
        }
        if (this.value == "") {
            this.value = 1
        }
        if (this.value > parseInt($(this).data('max-count'))) {
            this.value = parseInt($(this).data('max-count'))
        }    
    }); 






    //секции карточки
    document.addEventListener('click', function(event) {
        const clickedSectionProduct = event.target.closest('.product__section')
        if (!clickedSectionProduct) {
            document.querySelectorAll('.product__section')?.forEach(section => {
                const sectionMenu = section.querySelector('.product__section-menu')
                const sectionSvg = section.querySelector('.product__section-svg')
                if (sectionMenu) {
                    sectionMenu?.classList.remove('active')
                }
                if (sectionSvg) {
                    sectionSvg?.classList.remove('active')
                }
            })
        }
    })
    document.querySelectorAll('.product__section')?.forEach(section => {
        section?.addEventListener('click', function() { 
            const product__sectionMenu = section.querySelector('.product__section-menu')
            const product__sectionSvg = section.querySelector('.product__section-svg')  
            document.querySelectorAll('.product__section')?.forEach(siblingSection => {
                if (siblingSection !== section) {
                    const siblingMenu = siblingSection.querySelector('.product__section-menu')
                    const siblingSvg = siblingSection.querySelector('.product__section-svg')
                    if (siblingMenu) {
                        siblingMenu?.classList.remove('active')
                    }
                    if(siblingSvg) {
                        siblingSvg?.classList.remove('active')
                    }
                }
            })
            if (product__sectionMenu) {
                product__sectionMenu?.classList.toggle('active')
                product__sectionMenu?.addEventListener('click', function(event) {
                    event.stopPropagation()
                })
            }
            if (product__sectionSvg) {
                product__sectionSvg?.classList.toggle('active')
            }
        })
    })






    //фильтры каталога
    const filters = document.querySelector('.filters')
    const card__filters = document.querySelector('.card__filters-block') 
    const filters__opacity = document.querySelector('.filters__opacity') 
    card__filters?.addEventListener('click', function(){
        filters.classList.toggle('active')
        body.classList.toggle('activeFilters')
        filters__opacity.classList.toggle('active')
    })
    const filters__close = document.querySelector('.filters__close')
    filters__close?.addEventListener('click', function(){
        filters.classList.toggle('active')
        body.classList.toggle('activeFilters')
        filters__opacity.classList.toggle('active')
    })

    //клик вне фильтров
    document.addEventListener('click', (e) => {
        const click__filters = e.composedPath().includes(filters)
        const click__filtersButton = e.composedPath().includes(card__filters)
        if (( !click__filters ) && ( !click__filtersButton )) {
            filters?.classList.remove('active')
            filters__opacity?.classList.remove('active')
            body.classList.remove('activeFilters')
        }
    })
    





    //секции фильтров
    document.addEventListener('click', function(event) {
        const clickedSection = event.target.closest('.filters__section')
        if (!clickedSection) {
            document.querySelectorAll('.filters__section')?.forEach(section => {
                const sectionMenu = section.querySelector('.filters__section-menu')
                const sectionSvg = section.querySelector('.filters__section-svg')
                if (sectionMenu) {
                    sectionMenu?.classList.remove('active')
                }
                if (sectionSvg) {
                    sectionSvg?.classList.remove('active')
                }
            })
        }
    })
    document.querySelectorAll('.filters__section')?.forEach(section => {
        section?.addEventListener('click', function() { 
            const filters__sectionMenu = section.querySelector('.filters__section-menu')
            const filters__sectionSvg = section.querySelector('.filters__section-svg')  
            document.querySelectorAll('.filters__section')?.forEach(siblingSection => {
                if (siblingSection !== section) {
                    const siblingMenu = siblingSection.querySelector('.filters__section-menu')
                    const siblingSvg = siblingSection.querySelector('.filters__section-svg')
                    if (siblingMenu) {
                        siblingMenu?.classList.remove('active')
                    }
                    if(siblingSvg) {
                        siblingSvg?.classList.remove('active')
                    }
                }
            })
            if (filters__sectionMenu) {
                filters__sectionMenu?.classList.toggle('active')
                filters__sectionMenu?.addEventListener('click', function(event) {
                    event.stopPropagation()
                })
            }
            if (filters__sectionSvg) {
                filters__sectionSvg?.classList.toggle('active')
            }
        })
    })





    //заполнение данных для оплаты
    const contactJsButton = document.querySelector('.contactJsButton')
    const checkout__delivery = document.querySelector('.checkout__delivery')
    const checkout__pay = document.querySelector('.checkout__pay')
    const checkout__contact = document.querySelector('.checkout__contact')
    const deliveryJsButton = document.querySelector('.deliveryJsButton')
    const payJsButton = document.querySelector('.payJsButton')
    contactJsButton?.addEventListener('click', function (){
        checkout__contact?.classList.add('active')
        checkout__delivery?.classList.add('active')
    })
    deliveryJsButton?.addEventListener('click', function (){
        checkout__delivery?.classList.add('activeReady')
        checkout__delivery?.classList.remove('active')
        checkout__pay?.classList.add('active')
    })
    payJsButton?.addEventListener('click', function (){
        checkout__pay?.classList.add('activeReady')
        checkout__pay?.classList.remove('active')
    })





    //метод оплаты
    function activateRadio(radioId, index) {
        const radioButtons = document.querySelectorAll('[name="pay"]')
        radioButtons?.forEach((radioButton, i) => {
            const label = radioButton?.nextElementSibling
            if (i === index) {
                radioButton?.checked === true
                label?.classList.add('active')
            } else {
                radioButton?.checked === false
                label?.classList.remove('active')
            }
        })
    }





    //профиль
    const profileButtons = document.querySelectorAll('.profileButton')
    const profileRight = document.querySelector('.profile__right')
    profileRight?.classList.add('active')
    profileButtons?.forEach((profileButton, index) => {
        profileButton?.addEventListener('click', function() {
            profileButtons?.forEach(otherButton => {
                otherButton?.classList.remove('active')
            })
            profileButton?.classList.add('active')
            if (index === 0) {
                profileRight?.classList.add('active')
            } else {
                profileRight?.classList.remove('active')
            }
        })
    })






    //информация
    const infoButtons = document.querySelectorAll('.profileButton')
    const infoSize = document.querySelector('.info__size')
    const infoPay = document.querySelector('.info__pay')
    const infoContact = document.querySelector('.info__contact')
    infoPay?.classList.add('active')
    infoButtons?.forEach((infoButton, index) => {
        infoButton?.addEventListener('click', function() {
            infoButtons?.forEach(otherButton => {
                otherButton?.classList.remove('active')
            })
            infoButton?.classList.add('active')
            if (index === 3) {
                infoSize?.classList.add('active')
            } else {
                infoSize?.classList.remove('active')
            }
            if (index === 0) {
                infoPay?.classList.add('active')
            } else {
                infoPay?.classList.remove('active')
            }
            if (index === 5) {
                infoContact?.classList.add('active')
            } else {
                infoContact?.classList.remove('active')
            }
        })
    })




    //слайдер card/index
    var swiper = new Swiper(".card__swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
    });





    //бургер
    const burger = document.querySelector('.header__burger')
    const burgerBody = document.querySelector('.header__burger-body')
    const burger__opacity = document.querySelector('.header__burger-opacity')

    burger?.addEventListener('click', function(){
        burgerBody?.classList.toggle('active')
        body?.classList.toggle('activeBurger')
        burger__opacity?.classList.toggle('active')
    })

    const burger__close = document.querySelector('.burger__close')

    burger__close?.addEventListener('click', function(){
        burgerBody?.classList.toggle('active')
        body?.classList.toggle('activeBurger')
        burger__opacity?.classList.toggle('active')
    })

    //клик вне бургера
    document.addEventListener('click', (e) => {
        const clickBurger = e.composedPath().includes(burger)
        const clickBurgerBody = e.composedPath().includes(burgerBody)
    
        if (( !clickBurger ) && (!clickBurgerBody)) {
            burgerBody?.classList.remove('active')
            body?.classList.remove('activeBurger')
            burger__opacity?.classList.remove('active')
        }
    })

    //каталог бургера
    const burger__catalogBody = document.querySelector('.burger__catalogBody')
    const burger__catalog = document.querySelector('.burger__catalog')

    burger__catalog?this.addEventListener('click', function(){
        burger__catalogBody?.classList.toggle('active')
    })









})