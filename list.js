const elements = document.getElementsByClassName('menu-item');
for(i=0;i<elements.length;i++){
    elements[i].addEventListener('mousedown',showMenu);
    elements[i].addEventListener('mouseleave',hideMenu);
}

function showMenu(){
    if(this.children.length>1){
        this.children[1].style.display = 'block';
    }
}
function hideMenu(){
    if(this.children.length>1){
        this.children[1].style.display = 'none';
    }
}