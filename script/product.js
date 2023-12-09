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




        //карточка товара
        const product__infoOpen = document.querySelector('.product__info-open')
        const product__infoMenu = document.querySelector('.product__info-menu')
        const product__infoSvg = document.querySelector('.product__info-svg')
        product__infoOpen.addEventListener('click', function(){
            product__infoMenu.classList.toggle('active')
            product__infoSvg.classList.toggle('active')
        })
        document.addEventListener('click', (e) => {
            const click__productInfoMenu = e.composedPath().includes(product__infoMenu)
            const click__productInfoOpen = e.composedPath().includes(product__infoOpen)
            if (( !click__productInfoOpen ) && ( !click__productInfoMenu )) {
                product__infoMenu.classList.remove('active')
                product__infoSvg.classList.remove('active')
            }
        })
       
        
        const product__materialOpen = document.querySelector('.product__material-open')
        const product__materialMenu = document.querySelector('.product__material-menu')
        const product__materialSvg = document.querySelector('.product__material-svg')
        product__materialOpen.addEventListener('click', function(){
            product__materialMenu.classList.toggle('active')
            product__materialSvg.classList.toggle('active')
        })
        document.addEventListener('click', (e) => {
            const click__productMaterial = e.composedPath().includes(product__materialMenu)
            const click__productMaterialOpen = e.composedPath().includes(product__materialOpen)
            if (( !click__productMaterial ) && ( !click__productMaterialOpen )) {
                product__materialMenu.classList.remove('active')
                product__materialSvg.classList.remove('active')
            }
        })
    
    
        const product__payOpen = document.querySelector('.product__pay-open')
        const product__payMenu = document.querySelector('.product__pay-menu')
        const product__paySvg = document.querySelector('.product__pay-svg')
        product__payOpen.addEventListener('click', function(){
            product__payMenu.classList.toggle('active')
            product__paySvg.classList.toggle('active')
        })
        document.addEventListener('click', (e) => {
            const click__productpay = e.composedPath().includes(product__payMenu)
            const click__productpayOpen = e.composedPath().includes(product__payOpen)
            if (( !click__productpay ) && ( !click__productpayOpen )) {
                product__payMenu.classList.remove('active')
                product__paySvg.classList.remove('active')
            }
        })
    
    
        const product__backOpen = document.querySelector('.product__back-open')
        const product__backMenu = document.querySelector('.product__back-menu')
        const product__backSvg = document.querySelector('.product__back-svg')
        product__backOpen.addEventListener('click', function(){
            product__backMenu.classList.toggle('active')
            product__backSvg.classList.toggle('active')
        })
        document.addEventListener('click', (e) => {
            const click__productback = e.composedPath().includes(product__backMenu)
            const click__productbackOpen = e.composedPath().includes(product__backOpen)
            if (( !click__productback ) && ( !click__productbackOpen )) {
                product__backMenu.classList.remove('active')
                product__backSvg.classList.remove('active')
            }
        })
})