import React from "react";
import { Link } from "react-router-dom";

const btnMenu = document.getElementById("btn_menu");
const backMenu = document.getElementById("back_menu");

const Navbar = () => {
  window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;

    let header = document.getElementById("header");

    if (scroll > 20) {
      header.classList.add("nav_mod");
    } else if (scroll < 20) {
      header.classList.remove("nav_mod");
    }
  };

  let nav = document.getElementById("nav");
  let background_menu = document.getElementById("back_menu");

  function mostrar_menu() {
    nav.style.right = "300px";
    background_menu.style.display = "block";
  }

  function ocultar_menu() {
    nav.style.right = "-350px";
    background_menu.style.display = "none";
  }

  return (
    <header id="header" data-aos="fade-down">
      <article className="container__header">
        <section className="logo">
          <a href="/#">
            <h1>Sólidoct</h1>
          </a>
        </section>
        <nav className="container__nav">
          <i className="fas fa-bars " id="btn_menu" onClick={mostrar_menu}></i>
          <div id="back_menu" onClick={ocultar_menu}></div>
          <nav id="nav">
            <ul>
              <li>
                <a href="/#" className="select">
                  HOME
                </a>
              </li>
              <li>
                <a href="/#about">SOBRE NOSOTROS</a>
              </li>
              <li>
                <a href="/questions">PREGUNTAS FRECUENTES</a>
              </li>
              <li>
                <a href="/#contact">CONTACTO</a>
              </li>
            </ul>
          </nav>
        </nav>
      </article>
    </header>
  );
};

export default Navbar;
