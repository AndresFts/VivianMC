window.onload = ()=>{
    startAnimation();
}

function startAnimation()
{
    let g2 = document.querySelector(".glass2")

    g2.style.transform = "translateY(-100vh)"
    document.querySelector(".glass").style.transform = "translateY(100vh)"

    setTimeout(function (){
        g2.parentNode.removeChild(g2)
    }, 1500)
}