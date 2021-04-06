let stickyDiv = document.getElementById("sticky-div")
let scrollyDiv = document.getElementById("scrolly-div");

function getOffset(el){
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
}

function getHeight(el){
    let height = el.offsetHeight;
    return height
}

function toggleSticky(){
    let scrollyDivTop = getOffset(scrollyDiv);
    let scrollyDivBottom = getHeight(scrollyDiv);
    let scroll = window.scrollY;
    if(scroll >= scrollyDivTop && scroll < scrollyDivBottom ){
        stickyDiv.classList.add("sticky-top");
    } else if(stickyDiv.classList.contains("sticky-top")){
        stickyDiv.classList.remove("sticky-top");
    }
}


document.addEventListener('scroll', toggleSticky());

// scroll  event listener