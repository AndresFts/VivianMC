const projects = document.querySelectorAll(".g_images");
const texts = document.querySelectorAll(".g_text");
const nextbtn = document.getElementById("nextbtn")
let i = 0;

nextbtn.onclick = next;

function next()
{
    texts[i].classList.remove("active");
    projects[i].classList.remove("active");

    if (i < projects.length-1)
    {
        ++i;
    }
    else
    {
        i=0;
    }
    texts[i].classList.add("active");
    projects[i].classList.add("active");
}