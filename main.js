/*-----------------SHOW AND HIDE NAV MENU-------------------- */
const toggleBtn = document.querySelector(".toggle-btn"),
        nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("nav-open")
})
/*-----------------SHOW HEADER BOX SHADOW WHEN SCROLL-------------------- */
const header = document.querySelector(".header");

window.addEventListener("scroll", ()=> {
    if(this.scrollY > 80){
        header.classList.add("show-header-box-shadow");
    } else {
        header.classList.remove("show-header-box-shadow")
    }
});
/*-----------------NAV LINK-------------------- */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", ()=> {
        nav.classList.remove("nav-open");

        // remove active class first
        removeActive();
        // add active class later
        addActive(link);
    })
})
function removeActive () {
    navLinks.forEach(link => {
        link.classList.remove("active");
    })
}
function addActive (link) {
    link.classList.add("active")
}


