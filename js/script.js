function menu(){
    document.querySelector(".side-nav").style.visibility = "visible";
    document.querySelector('body').style.position = 'fixed';
}
function closemenu(){
    document.querySelector(".side-nav").style.visibility = "hidden";
    document.querySelector('body').style.position = 'relative';
}