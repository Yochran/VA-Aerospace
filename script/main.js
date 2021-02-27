// Functions
let loadPage = function() {
    scrollTo(document.getElementById("home"));

    setTimeout(() => {
        document.getElementById("loading").style.opacity = 0 + "%";
        setTimeout(() => {
            document.getElementById("everything").style.opacity = 100 + "%";
        }, 500);
    }, 1500);
}

function parallax() {
    document.getElementById("background").style.top = Math.floor(-15 - 0.05 * window.scrollY) + "px";

    document.getElementById("backsheet").style.top = Math.floor(100 + 0.001 * window.scrollY) + "%";
    document.getElementById("separator").style.top = Math.floor(97.5 + 0.0001 * window.scrollY) + "%";
}

function displayComingSoon() {
    alert("Coming soon...");
}

// Events
document.onscroll = () => {
    parallax();
};
document.onreadystatechange = () => {
    loadPage().then(() => {
        delete loadPage();
        loadPage = "";
    })
};

document.getElementById("nav-button-2").onmousedown = () => {
    displayComingSoon();
}

document.getElementById("yochran").onclick = () => {
    const url = "https://github.com/Yochran";
    window.open(url, "_blank");
}