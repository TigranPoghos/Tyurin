document.addEventListener("DOMContentLoaded", function(){

    const body = document.querySelector('body')

    //каталог
    const header__catalogJs = document.querySelector('.header__catalogJs')
    const header__catalog = document.querySelector('.header__catalog') 
    const header = document.querySelector('.header')
    const header__opacity = document.querySelector('.header__opacity')

    header__catalogJs.addEventListener('click', function(){
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

    basket__button.addEventListener('click', function(){
        basket.classList.toggle('active')
        body.classList.toggle('activeBasket')
        header.classList.toggle('activeBasket')
        basket__opacity.classList.toggle('active')
    })

    const basket__close = document.querySelector('.basket__close')

    basket__close.addEventListener('click', function(){
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




        // Убавляем кол-во по клику
    $('.quantity_inner .bt_minus').click(function() {
        let $input = $(this).parent().find('.quantity')
        let count = parseInt($input.val()) - 1
        count = count < 1 ? 1 : count
        $input.val(count)
    });
    // Прибавляем кол-во по клику
    $('.quantity_inner .bt_plus').click(function() {
        let $input = $(this).parent().find('.quantity')
        let count = parseInt($input.val()) + 1
        count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count
        $input.val(parseInt(count))
    }); 
    // Убираем все лишнее и невозможное при изменении поля
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




})