const searchIcon = document.querySelector('.search-icon')
const searchForm = document.querySelector('.search-form')

searchIcon.addEventListener("click", ()=>{
    searchForm.classList.add('active');
    cartIconContainer.classList.remove('active');
})

const cartIcon = document.querySelector('.cart-icon')
const cartIconContainer = document.querySelector('.cart-items-container')

cartIcon.addEventListener("click", ()=>{
    cartIconContainer.classList.add('active');
    searchForm.classList.remove('active');
})

