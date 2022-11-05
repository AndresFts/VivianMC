const projects = document.querySelectorAll(".g_images");
const nextbtn = document.getElementById("nextbtn")
let i = 0;

nextbtn.onclick = next;

function next()
{
    projects[i].classList.remove("active");
    if (i == projects.length - 1)
    {
        i = 0;
    }
    else
    {
        ++i;
    }
    projects[i].classList.add("active");
}