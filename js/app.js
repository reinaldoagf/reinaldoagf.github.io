const photoContent = document.getElementById("photo-content");
photoContent.addEventListener("mouseover", () =>{  
   const bigFigures = document.getElementsByClassName("big-figure");
   for (const iterator of bigFigures) {
        const style = getComputedStyle(iterator)
        const width=style["width"].match(/\d+/)[0];
        const height=style["height"].match(/\d+/)[0];
        iterator.style.width = '710px';
        iterator.style.height = '710px';
        iterator.style.transition = "ease-in .4s";
   }
   const smallFigures = document.getElementsByClassName("small-figure");
   for (const iterator of smallFigures) {
        const style = getComputedStyle(iterator)
        const width=style["width"].match(/\d+/)[0];
        const height=style["height"].match(/\d+/)[0];
        iterator.style.width = '30px';
        iterator.style.height = '30px';
        iterator.style.transition = "ease-in .4s";
   }
}, false);
photoContent.addEventListener("mouseout", () =>{  
    const bigFigures = document.getElementsByClassName("big-figure");
    for (const iterator of bigFigures) {
         const style = getComputedStyle(iterator)
         const width=style["width"].match(/\d+/)[0];
         const height=style["height"].match(/\d+/)[0];
         iterator.style.width = '700px';
         iterator.style.height = '700px';
         iterator.style.transition = "ease-in .4s";
    }
    const smallFigures = document.getElementsByClassName("small-figure");
    for (const iterator of smallFigures) {
         const style = getComputedStyle(iterator)
         const width=style["width"].match(/\d+/)[0];
         const height=style["height"].match(/\d+/)[0];
         iterator.style.width = '20px';
         iterator.style.height = '20px';
         iterator.style.transition = "ease-in .4s";
    }
}, false);