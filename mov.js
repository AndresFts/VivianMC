const count = document.querySelectorAll("section").length;
body.style.transform = "translateY(0)";

//Mouse Scroll




//Touch Scroll
let startY = 0;
let scroll = 0;
let space = 0;
let current = 0;

document.ontouchstart = (e)=> 
{
    startY = e.touches[0].clientY;
    body.style.transitionDuration = `0s`;
}
document.ontouchmove = (e)=>
{
    space = e.touches[0].clientY - startY;
    body.style.transform = `translateY(calc(${scroll}% + (${space}px)))`;
}
document.ontouchend = (e)=>
{
    if (space > 50 && current > 0 || space < -50 && current < count-1)
    {
        scroll = scroll + Math.sign(space) * 100;
        current = current + Math.sign(space)*-1;
    }
    space = 0;
    body.style.transitionDuration = `500ms`;
    body.style.transform = `translateY(${scroll}%)`;
}