'use strict'
//определяем ОС в которой открыт браузер
const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera mini/i)
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function(){
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
}

if(isMobile.any()){
    document.body.classList.add('_touch')
}else{
    document.body.classList.add('_pc')
}

//burger
const iconMenu = document.querySelector('.burger')
const menuBody = document.querySelector('.navigation__menu')

if(iconMenu){
    iconMenu.addEventListener('click', function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    })
}

//прокрутка при клике на нужный раздел
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuClick)
    })

    function onMenuClick(e){
        const menuLink = e.target

        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

            if(iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active')
                menuBody.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}

//футер активные вкладки
const footerColumns = document.querySelectorAll('.navigation-column')

if(footerColumns.length > 0){
    footerColumns.forEach( (footerColumn, index) =>{
        footerColumn.addEventListener('click', function(e){
            footerColumn.classList.toggle('_active-foot')
            footerColumns.forEach((columnTest, indexTest) =>{
                if(index !=indexTest){
                    columnTest.classList.remove('_active-foot')
                }
            })
            e.preventDefault()
        })
    })

    
}