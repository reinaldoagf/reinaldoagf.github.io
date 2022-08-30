var item = document.getElementById("photo-content");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{  // not needed since item is already global, 
   // I am assuming this is here just because it's sample code?
   // var item = document.getElementById("button"); 
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
}

function func1()
{  
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
}