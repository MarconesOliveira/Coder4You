let menuState = false;

function menuActive(){
    menuState = !menuState;
    let menu = document.querySelector('#menu-responsivo');
    let itemMenu = document.querySelector('.ul-menu-responsivo');
    if(menuState){
        menu.style.height = "100%";
        menu.style.width = "100%";
        itemMenu.style.display = "block";
    } else {
        menu.style.height = "50px";
        menu.style.width = "50px";
        itemMenu.style.display = "none";
    }
}