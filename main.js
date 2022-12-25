const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const buttons = document.querySelectorAll(".about_btn");
const article = document.querySelector(".home");


buttons[0].onclick = activeButtons;
buttons[1].onclick = activeButtons;

window.addEventListener("load", ()=>
{
    sections[0].classList.add("active");
});

function activeButtons()
{
    if(!this.classList.contains("active"))
    {
        buttons.forEach(i => {
            i.classList.toggle("active");
        });
        article.classList.toggle("active")
    }
}