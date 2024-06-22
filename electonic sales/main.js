
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active'); 
  cart.classList.remove('active');
  menu.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
  cart.classList.toggle('active');
  searchForm.classList.remove('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');   
}
window.onscroll = () =>{
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  menu.classList.remove('active');
}