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


})