let sections = document.querySelectorAll("section");

let i = 0;
let canMove = true;

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
        }S
    }
});

window.addEventListener("touchmove", (e) => 
{
    console.log(e.changedTouches[0].screenY);
});
