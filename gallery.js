const projects = document.querySelectorAll(".g_images");
const texts = document.querySelectorAll(".g_text");
const iBtns = document.querySelectorAll(".inf-btn");
const infos = document.querySelectorAll(".info__container");
const nextbtn = document.getElementById("nextbtn");
let p = 0;

for (let i = 0; i < infos.length; i++) {
    iBtns[i].onclick = showInfo;
    infos[i].onclick = hideInfo;
}

nextbtn.onclick = next;

function next()
{
    texts[p].classList.remove("active");
    projects[p].classList.remove("active");

    if (p < projects.length-1)
    {
        ++p;
    }
    else
    {
        p=0;
    }
    texts[p].classList.add("active");
    projects[p].classList.add("active");
}

function showInfo()
{
    infos[this.classList[1]].classList.add("active");
}
function hideInfo()
{
    this.classList.remove("active");
}