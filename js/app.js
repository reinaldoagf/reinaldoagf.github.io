const photoContent = document.getElementById("photo-content");
const photo = document.getElementById("photo");
const bigFigures = document.getElementsByClassName("big-figure");
const smallFigures = document.getElementsByClassName("small-figure");
const rightValues = [...smallFigures].map(e =>{
     const style = getComputedStyle(e)
     return style["right"]
});
photoContent.addEventListener("mouseover", () =>{
     photo.style.width = "450px";
     photo.style.height = "450px";
     photo.style.transition = "ease-in .25s";
   for (const iterator of bigFigures) {
        iterator.style.right = '-1000px';
        iterator.style.transition = "ease-in .25s";
   }
   const smallFigures = document.getElementsByClassName("small-figure");
   for (const iterator of smallFigures) {
        iterator.style.right = '-1000px';
        iterator.style.transition = "ease-in .25s";
   }
}, false);
photoContent.addEventListener("mouseout", () =>{  
     photo.style.width = "350px";
     photo.style.height = "350px";
     photo.style.transition = "ease-in .25s";
    for (const iterator of bigFigures) {        
         iterator.style.right = '-450px';
         iterator.style.transition = "ease-in .25s";
    }
    for (const iterator of smallFigures) {
         iterator.style.right = rightValues[ [...smallFigures].indexOf(iterator)]
         iterator.style.transition = "ease-in .25s";
    }
}, false);


let scrollerID;
let paused = true;
let interval = 10;

function startScroll(){
    let id = setInterval(function() {
     const horizontalChild = document.querySelector('#horizontal-child')
     horizontalChild.scrollBy(0, 1);
     const styleHorizontalChild = getComputedStyle(horizontalChild)
               if ((parseInt(styleHorizontalChild['height'])  + horizontalChild.scrollTop) >= (horizontalChild.scrollHeight+15)) {
                    // end of page?
                    stopScroll();
                }
    }, interval);
    return id;
}

function stopScroll() {
     console.log('stopScroll')
     const iconPlayBtn = document.querySelector("#icon-play-btn")
     paused = true;
     iconPlayBtn.className = "fa fa-play";
    clearInterval(scrollerID);
}
function toggleScroll() {
     const iconPlayBtn = document.querySelector("#icon-play-btn")
     if(paused == true) {
          scrollerID = startScroll();
          paused = false;
          iconPlayBtn.className = "fa fa-pause";
     } else {
          stopScroll();
          paused = true;
          iconPlayBtn.className = "fa fa-play";
     }
}

