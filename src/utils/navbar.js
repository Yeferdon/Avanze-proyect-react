document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

let nav = document.getElementById("nav");
let background_menu = document.getElementById("back_menu");

function mostrar_menu() {
  nav.style.right = "0px";
  background_menu.style.display = "block";
}

function ocultar_menu() {
  nav.style.right = "-350px";
  background_menu.style.display = "none";
}
