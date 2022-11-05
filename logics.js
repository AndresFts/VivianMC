const body = document.querySelector("body");
const sections = document.querySelectorAll("section");

//General
window.addEventListener("load", ()=>
{
    sections[0].classList.add("active");
});



//Mouse Scroll




//Touch Scroll
let startY = 0;
let scroll = 0;
let space = 0;
    document.ontouchstart = (e)=> 
    {
        startY = e.touches[0].clientY;
        body.style.transitionDuration = `0ms`;
    }
    document.ontouchmove = (e)=>
    {
        space = e.touches[0].clientY - startY;
        body.style.transform = `translateY(calc(${scroll}% + (${space}px)))`;
    }
    document.ontouchend = (e)=>
    {
        if (space > 200 || space < -200)
        {
            scroll = scroll + Math.sign(space) * 100;
            space = 0;
        }
        body.style.transitionDuration = `500ms`;
        body.style.transform = `translateY(${scroll}%)`;
    }