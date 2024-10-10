let menu_box = document.getElementById('menu_box');
let menu_bar =document.getElementById('menu_bar');
let stylesheet = document.styleSheets[0];
let bol=true;
menu_box.addEventListener('click',()=>{
    if(bol){
    menu_bar.style.backgroundColor = 'transparent';
   /*  menu_bar.style.transitionDuration ='0.2s'; */
    stylesheet.insertRule(`
        .menu_bar::after{
        transform:rotate(-45deg);
        }`
        , stylesheet.cssRules.length);
    stylesheet.insertRule(`
        .menu_bar::before{
        transform:rotate(45deg);
        }`
        , stylesheet.cssRules.length);
        stylesheet.insertRule(`
            aside{
            transform:translateX(0);
            }`
            , stylesheet.cssRules.length);
       
        bol=false;
    }else{
        menu_bar.style.backgroundColor = 'white';
    /* menu_bar.style.transitionDuration ='0.3s'; */
    stylesheet.insertRule(`
        .menu_bar::after{
        transform: translateY(0.6vw);
        }`
        , stylesheet.cssRules.length);
    stylesheet.insertRule(`
        .menu_bar::before{
        transform: translateY(-0.6vw);
        }`
        , stylesheet.cssRules.length);
        stylesheet.insertRule(`
            aside{
            transform:translateX(-999em);
            }`
            , stylesheet.cssRules.length);
        
        bol=true;
    }
})