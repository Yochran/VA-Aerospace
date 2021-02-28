document.onscroll = () => {
    document.getElementById("background").style.top = Math.floor(-15 - 0.07 * window.scrollY) + "px";
    document.getElementById("backsheet").style.top = Math.floor(100 + 0.001 * window.scrollY) + "%";
    document.getElementById("separator").style.top = Math.floor(97.5 + 0.0001 * window.scrollY) + "%";

    var offset = document.getElementById("nav-bar").offsetTop;
    if (window.pageYOffset >= offset) {
        document.getElementById("nav-bar-2").style.opacity = 100 + "%";
        document.getElementById("nav-bar").style.opacity = 0 + "%";
    } else {
        document.getElementById("nav-bar-2").style.opacity = 0 + "%";
        document.getElementById("nav-bar").style.opacity = 100 + "%";
    }
};
document.onreadystatechange = () => {
    scrollTo(document.getElementById("home"));

    setTimeout(() => {
        document.getElementById("loading").style.opacity = 0 + "%";
        setTimeout(() => {
            document.getElementById("everything").style.opacity = 100 + "%";
        }, 500);
    }, 1500);
};

function comingSoon(id) {
    const currentText = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = "<b>Coming Soon...</b>";

    setTimeout(() => {
        document.getElementById(id).innerHTML = currentText;
    }, 2000);
}

document.getElementById("coming-soon").onclick = () => {comingSoon("coming-soon");}
document.getElementById("coming-soon-2").onclick = () => {comingSoon("coming-soon-2");}
document.getElementById("coming-soon-3").onclick = () => {comingSoon("coming-soon-3");}
document.getElementById("coming-soon-4").onclick = () => {comingSoon("coming-soon-4");}

document.getElementById("yochran").onclick = () => {
    const url = "https://github.com/Yochran";
    window.open(url, "_blank");
}