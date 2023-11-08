const searchIcon = document.querySelector(".search-icon")
const searchForm = document.querySelector(".search-form")
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

searchIcon.addEventListener("click", ()=>{
    searchForm.classList.add("active");
    cartIconContainer.classList.remove("active");
    navbar.classList.remove("active");
});

menuIcon.addEventListener("click", ()=>{
    navbar.classList.add("active");
    searchForm.classList.remove("active");
    cartIconContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon")
const cartIconContainer = document.querySelector(".cart-items-container")

cartIcon.addEventListener("click", ()=>{
    cartIconContainer.classList.add("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
});

window.onscroll = ()=>{
    cartIconContainer.classList.remove("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}
