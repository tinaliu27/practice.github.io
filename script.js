const circle = document.querySelector('.header .nav-bar .nav-list .circle');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
circle.addEventListener('click', () => {
    circle.classList.toggle('active');
    mobile_menu.classList.toggle('active');

})
document.addEventListerner('scroll', ()=> {
    var croll_position= window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    } else{
        header.style.backgroundColor = "transparent";
    }
})