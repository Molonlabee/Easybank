function toggle(){
    let menu = document.getElementById("side-menu");
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.getElementById("ham-button").addEventListener("click");
