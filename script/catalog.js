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




        //фильтры каталога
    const filters = document.querySelector('.filters')
    const card__filters = document.querySelector('.card__filters-block') 
    const filters__opacity = document.querySelector('.filters__opacity')
    
    card__filters.addEventListener('click', function(){
        filters.classList.toggle('active')
        body.classList.toggle('active')
        filters__opacity.classList.toggle('active')
    })

    const filters__close = document.querySelector('.filters__close')

    filters__close.addEventListener('click', function(){
        filters.classList.toggle('active')
        body.classList.toggle('active')
        filters__opacity.classList.toggle('active')
    })

    //клик вне фильтров
    document.addEventListener('click', (e) => {
        const click__filters = e.composedPath().includes(filters)
        const click__filtersButton = e.composedPath().includes(card__filters)
    
        if (( !click__filters ) && ( !click__filtersButton )) {
            filters.classList.remove('active')
            filters__opacity.classList.remove('active')
            body.classList.remove('active')
        }
    })
    

    
    //секции фильтров
    const filters__sortOpen = document.querySelector('.filters__sort-open')
    const filters__sortMenu = document.querySelector('.filters__sort-menu')
    const filters__sortSvg = document.querySelector('.filters__sort-svg')
    filters__sortOpen.addEventListener('click', function(){
        filters__sortMenu.classList.toggle('active')
        filters__sortSvg.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const click__filtersSort = e.composedPath().includes(filters__sortMenu)
        const click__filtersSortOpen = e.composedPath().includes(filters__sortOpen)
        if (( !click__filtersSort ) && ( !click__filtersSortOpen )) {
            filters__sortMenu.classList.remove('active')
            filters__sortSvg.classList.remove('active')
        }
    })

    const filters__categoryOpen = document.querySelector('.filters__category-open')
    const filters__categoryMenu = document.querySelector('.filters__category-menu')
    const filters__categorySvg = document.querySelector('.filters__category-svg')
    filters__categoryOpen.addEventListener('click', function(){
        filters__categoryMenu.classList.toggle('active')
        filters__categorySvg.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const click__filterscategory = e.composedPath().includes(filters__categoryMenu)
        const click__filterscategoryOpen = e.composedPath().includes(filters__categoryOpen)
        if (( !click__filterscategory ) && ( !click__filterscategoryOpen )) {
            filters__categoryMenu.classList.remove('active')
            filters__categorySvg.classList.remove('active')
        }
    })


    const filters__collectionOpen = document.querySelector('.filters__collection-open')
    const filters__collectionMenu = document.querySelector('.filters__collection-menu')
    const filters__collectionSvg = document.querySelector('.filters__collection-svg')
    filters__collectionOpen.addEventListener('click', function(){
        filters__collectionMenu.classList.toggle('active')
        filters__collectionSvg.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const click__filterscollection = e.composedPath().includes(filters__collectionMenu)
        const click__filterscollectionOpen = e.composedPath().includes(filters__collectionOpen)
        if (( !click__filterscollection ) && ( !click__filterscollectionOpen )) {
            filters__collectionMenu.classList.remove('active')
            filters__collectionSvg.classList.remove('active')
        }
    })


    const filters__sizeOpen = document.querySelector('.filters__size-open')
    const filters__sizeMenu = document.querySelector('.filters__size-menu')
    const filters__sizeSvg = document.querySelector('.filters__size-svg')
    filters__sizeOpen.addEventListener('click', function(){
        filters__sizeMenu.classList.toggle('active')
        filters__sizeSvg.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const click__filterssize = e.composedPath().includes(filters__sizeMenu)
        const click__filterssizeOpen = e.composedPath().includes(filters__sizeOpen)
        if (( !click__filterssize ) && ( !click__filterssizeOpen )) {
            filters__sizeMenu.classList.remove('active')
            filters__sizeSvg.classList.remove('active')
        }
    })


    const filters__colorOpen = document.querySelector('.filters__color-open')
    const filters__colorMenu = document.querySelector('.filters__color-menu')
    const filters__colorSvg = document.querySelector('.filters__color-svg')
    filters__colorOpen.addEventListener('click', function(){
        filters__colorMenu.classList.toggle('active')
        filters__colorSvg.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const click__filterscolor = e.composedPath().includes(filters__colorMenu)
        const click__filterscolorOpen = e.composedPath().includes(filters__colorOpen)
        if (( !click__filterscolor ) && ( !click__filterscolorOpen )) {
            filters__colorMenu.classList.remove('active')
            filters__colorSvg.classList.remove('active')
        }
    })


    const filters__availabilityOpen = document.querySelector('.filters__availability-open')
    const filters__availabilityMenu = document.querySelector('.filters__availability-menu')
    const filters__availabilitySvg = document.querySelector('.filters__availability-svg')
    filters__availabilityOpen.addEventListener('click', function(){
        filters__availabilityMenu.classList.toggle('active')
        filters__availabilitySvg.classList.toggle('active')
    })
    document.addEventListener('click', (e) => {
        const click__filtersavailability = e.composedPath().includes(filters__availabilityMenu)
        const click__filtersavailabilityOpen = e.composedPath().includes(filters__availabilityOpen)
        if (( !click__filtersavailability ) && ( !click__filtersavailabilityOpen )) {
            filters__availabilityMenu.classList.remove('active')
            filters__availabilitySvg.classList.remove('active')
        }
    })


})