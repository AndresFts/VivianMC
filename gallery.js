const sections = document.querySelectorAll(".g_images");
const nextbtn = document.getElementById("nextbtn")
let i = 0;

nextbtn.onclick = next;

function next()
{
    sections[i].classList.remove("active");
    if (i == sections.length - 1)
    {
        i = 0;
    }
    else
    {
        ++i;
    }
    sections[i].classList.add("active");
}