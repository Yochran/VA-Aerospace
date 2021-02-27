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
    document.getElementById("background").style.top = Math.floor(-15 - 0.175 * window.scrollY) + "px";

    document.getElementById("backsheet").style.top = Math.floor(100 + 0.001 * window.scrollY) + "%";
    document.getElementById("separator").style.top = Math.floor(97.5 + 0.0001 * window.scrollY) + "%";
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
