window.onload = ()=>{
    startAnimation();
}

function startAnimation()
{
    document.querySelector(".glass2").style.transform = "translateY(-100vh)"
    document.querySelector(".glass").style.transform = "translateY(100vh)"
}