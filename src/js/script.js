const btn = document.querySelectorAll('.main_btn');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-close');


//Modals
btn.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})

close.addEventListener('click',()=>{
    modal.style.display = 'none';
    document.body.style.overflow = '';
})

modal.addEventListener('click',(e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
})

function showModalByTime(selector,time){
    setTimeout(()=>{
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
    },time)
}


//Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

/* showModalByTime('.modal',5000); */