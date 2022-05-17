let sections = document.querySelectorAll("section");

let i = 0;
let canMove = true;

let firstTouch;
let direction;

window.addEventListener("load", ()=>{
    setTimeout(()=>sections[0].classList.add("active"))
    
})


window.addEventListener("wheel", (e) => 
{
    if (canMove)
    {
        if (e.deltaY > 0 && i < 3)
        {
            canMove = false;
            sections[i].classList.remove("active");
            i ++;
            sections[i].classList.add("active");
            setTimeout(()=>canMove = true, 1000);
        }
        if (e.deltaY < 0 && i > 0)
        {
            canMove = false;
            sections[i].classList.remove("active");
            i --;
            sections[i].classList.add("active");
            setTimeout(()=>canMove = true, 1000);
        }
    }
});

window.addEventListener("touchstart", (e) =>
{
    console.log(e.touches);
    console.log(e.type);
    firstTouch = e.touches[0];
});
window.addEventListener("touchmove", (e) =>
{
    e.preventDefault();
    console.log(e.touches);
    console.log(e.type);
    direction = e.touches[0];
});
window.addEventListener("touchend", (e) =>
{
    console.log(e.type)
    if (firstTouch.screenY > direction.screenY  && i < 3)
    {
        canMove = false;
        sections[i].classList.remove("active");
        i ++;
        sections[i].classList.add("active");
        setTimeout(()=>canMove = true, 1000);
    }
    else if (direction.screenY > firstTouch.screenY && i > 0)
    {
        canMove = false;
        sections[i].classList.remove("active");
        i --;
        sections[i].classList.add("active");
        setTimeout(()=>canMove = true, 1000);
    }
});