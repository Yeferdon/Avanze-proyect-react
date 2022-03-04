import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <main className="container__footer">
        <section className="box__footer">
          <article className="logo">
            <img src="/img/logo.jpg" alt="" data-aos="zoom-in-down" />
          </article>
        </section>

        <section className="box__footer">
          <h2 data-aos="fade-right">Servicios</h2>
          <a href="/services#" data-aos="fade-right">
            Carpinteria
          </a>
          <a href="/services#" data-aos="fade-right">
            Estructuras Metalicas
          </a>
          <a href="/services#" data-aos="fade-right">
            Vidreria en General
          </a>
          <a href="/services#" data-aos="fade-right">
            Diseño de Interiores
          </a>
          <a href="/services#" data-aos="fade-right">
            Limpieza en General
          </a>
          <a href="/services#" data-aos="fade-right">
            Diseño de Interiores
          </a>
        </section>

        <section className="box__footer">
          <h2 data-aos="fade-right">Solidoct</h2>
          <a href="/#about" data-aos="fade-right">
            Acerca de
          </a>
          <a href="/search_employer" data-aos="fade-right">
            Trabajos
          </a>
          <a href="/process" data-aos="fade-right">
            Procesos
          </a>
          <a href="/services#" data-aos="fade-right">
            Servicios
          </a>
        </section>

        <section className="box__footer">
          <h2 data-aos="fade-right">Redes Sociales</h2>
          <a
            data-aos="fade-right"
            href="https://www.facebook.com/Solidoct-100302629113445"
            className="selec1"
            target="_blank"
          >
            <i className="bi bi-facebook icon "></i> Facebook
          </a>
          <Link data-aos="fade-right" to="#" className="selec2">
            <i className="bi bi-twitter icon "></i>Twitter
          </Link>
          <Link data-aos="fade-right" to="#" className="selec3">
            <i className="bi bi-linkedin icon "></i>Linkedin
          </Link>
          <a
            data-aos="fade-right"
            href="https://www.instagram.com/solidoct/"
            className="selec4"
            target="_blank"
          >
            <i className="bi bi-instagram icon "></i>Instagram
          </a>
          <a
            data-aos="fade-right"
            href="https://wa.me/c/51998999883"
            className="selec5"
            target="_blank"
          >
            <i className="bi bi-instagram icon "></i>WhatsApp
          </a>
        </section>

        <section className="box__footer">
          <h2 data-aos="fade-left">Contact</h2>
          <section data-aos="fade-left">
            <i className="bi bi-telephone-fill icon-contact"></i>
            <span>Number: </span>
            +51 900 900 900
          </section>
          <section data-aos="fade-left" className="intermeder">
            <i className="bi bi-envelope-fill icon-contact"></i>
            <span>Email: </span>
            emsolidoct@gmail.com
          </section>
          <section data-aos="fade-left">
            <i className="bi bi-geo-alt icon-contact"></i>
            <span>Address: </span>
            Av 1ero de Mayo Villa El Salvador
          </section>
        </section>
      </main>
      <aside className="box__copyright">
        <hr />
        <p data-aos="fade-right">
          Todos los derechos reservados © 2022 <b>Solidoct ®</b>
        </p>

        <a href="/politics">Politicas De Privacidad</a>
      </aside>
      <a href="#" data-aos="fade-up-right">
        <i className="bi bi-arrow-up up-icon"></i>
      </a>
    </footer>
  );
};

export default Footer;
