const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}