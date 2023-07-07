/* const navClouse = document.querySelector(".clouse")
const navMenu = document.querySelector(".nav-menu")


navClouse.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
}); */



function openNav() {
    document.getElementById("nav-menu-id").style.width = "80%";
  }
  
function closeNav() {
    document.getElementById("nav-menu-id").style.width = "";/* se le aplicaba 0, pero entraba en conficto asi que deja basilloy funciona*/
}