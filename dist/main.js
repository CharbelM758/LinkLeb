var menuBtn = document.getElementById('hamburgermenu');
var menuList = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('show');
})