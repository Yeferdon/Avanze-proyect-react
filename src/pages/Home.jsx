import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/layout.scss";

const Home = () => {
  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [phone, setPhone] = useState();

  const [subject, setSubject] = useState();

  const sendEmail = (event) => {
    event.preventDefault();
    const contend = {
      Client: name,
      Email_Client: email,
      Phone_Client: phone,
      subject: subject,
    };
    axios.post("https://mailto:koyaher21@gmail.com", contend);
  };
  return (
    <>
      <section className="welcome">
        <video className="video" autoPlay loop muted>
          <source src="../../solidoct.mp4" />
        </video>
        <div className="filter"></div>
        <article className="welcome-contend">
          <h1 data-aos="fade-right">Construyendo un Futuro de Concreto</h1>
          <h3 data-aos="fade-right">
            Servidores honestos y confiables desde 2015.
          </h3>
          <section>
            <a href="/services">
              <button className="btn" data-aos="zoom-in">
                Ver Servicios
              </button>
            </a>
            <a href="#contact">
              <button className="btn" data-aos="zoom-in">
                Contact
              </button>
            </a>
          </section>
        </article>
      </section>

      <section className="article-1">
        <section className="left">
          <h3 data-aos="fade-right">Mejorar es lo que hacemos</h3>
          <h1 data-aos="fade-right">
            Solidoct Services <br /> Liderando Proyectos de Calidad
          </h1>
        </section>
        <section className="right">
          <a href="/services">
            <button className="btn" data-aos="zoom-in">
              Leer Mas
            </button>
          </a>
        </section>
      </section>

      <article className="section-card ">
        <section className="left">
          <aside className="contend">
            <h1 data-aos="fade-up">
              <hr />
              Comercial
            </h1>
            <p data-aos="fade-up">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. ​
            </p>
            <p data-aos="fade-up">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors.
            </p>
          </aside>
        </section>
        <picture className="card-right">
          <img
            src="../../imagenes-solidoct/estructua-metalica.jpg"
            alt=""
            className="estruct"
            data-aos="fade-up"
          />
        </picture>
      </article>

      <article className="section-card article-2">
        <picture className="card-right">
          <img
            src="../../imagenes-solidoct/metro.jpg"
            alt=""
            data-aos="fade-up"
          />
        </picture>
        <section className="left">
          <aside className="contend">
            <h1 data-aos="fade-right">
              <hr />
              Insfrectuctura
            </h1>
            <p data-aos="fade-right">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. ​
            </p>
            <p data-aos="fade-right">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors.
            </p>
          </aside>
        </section>
      </article>

      <section className="about" id="about">
        <article className="container">
          <section className="contend-about">
            <h4 data-aos="fade-right">Quienes Somos</h4>
            <h2 data-aos="fade-right">Sobre nuestra compañía</h2>

            <p data-aos="fade-right">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know more about you.
            </p>
          </section>

          <section className="container-text">
            <section className="card-text" data-aos="zoom-in">
              <h1>2017</h1>
              <p>Año de establecimiento</p>
              <hr />
            </section>
            <section className="card-text" data-aos="zoom-in">
              <h1>50</h1>
              <p>Proyectos Completados</p>
              <hr />
            </section>
            <section className="card-text" data-aos="zoom-in">
              <h1>100</h1>
              <p>Empleados Profesionales</p>
              <hr />
            </section>
            <section className="card-text" data-aos="zoom-in">
              <h1>+15</h1>
              <p>Business Partners</p>
              <hr />
            </section>
          </section>

          <section>
            <strong>Lesfer Garcia</strong>
            <p>Director Manager</p>
          </section>
        </article>
      </section>

      <section className="services">
        <aside>
          <section className="top">
            <article className="container-top">
              <section className="left">
                <h5 data-aos="fade-right">Nuestros Servicios</h5>
                <h2 data-aos="fade-right">
                  Ofrecemos una gama de servicios para satisfacer sus
                  necesidades.
                </h2>
                <p data-aos="fade-left">
                  I'm a paragraph. Click here to add your own text and edit me.
                  Let your users get to know you.
                </p>
              </section>
              <section className="right">
                <a href="/services">
                  <button className="btn" data-aos="zoom-in">
                    Leer Mas
                  </button>
                </a>
              </section>
            </article>
          </section>
        </aside>
        <article className="bottom">
          <section className="part1">
            <section className="top">
              <section className="box" data-aos="flip-right">
                <i className="bi bi-hammer icon"></i>
                <h4>Carpinteria</h4>
              </section>
              <section className="box" data-aos="flip-right">
                <i className="bi bi-gear-fill icon"></i>
                <h4>Estruturas Metalicas</h4>
              </section>
              <section className="box" data-aos="flip-right">
                <i className="bi bi-textarea-resize icon"></i>
                <h4>Vidreria</h4>
              </section>
              <section className="box" data-aos="flip-right">
                <i className="bi bi-box2 icon"></i>
                <h4>Diseño de interiores</h4>
              </section>
            </section>
          </section>
          <section className="part2">
            <section className="down">
              <article className="box" data-aos="flip-right">
                <i className="bi bi-stars icon"></i>
                <h4>Limpieza en General</h4>
              </article>
              <article className="box" data-aos="flip-right">
                <i className="bi bi-cone-striped icon"></i>
                <h4>Construccion</h4>
              </article>
              <article className="box" data-aos="flip-right">
                <i className="bi bi-wallet-fill icon"></i>
                <h4>Muebleria</h4>
              </article>
              <article className="box" data-aos="flip-right">
                <i className="bi bi-paint-bucket icon"></i>
                <h4>Pintura</h4>
              </article>
            </section>
          </section>
        </article>
      </section>

      <section className="section-designer ">
        <article className="card">
          <picture className="card-left">
            <img
              src="/imagenes-solidoct/diseno-interiores.jpg"
              alt=""
              data-aos="fade-up"
            />
          </picture>
          <section className="card-right">
            <article className="contenido">
              <h3 data-aos="fade-left">Area De Diseño</h3>
              <p data-aos="fade-left">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.
              </p>
              <p data-aos="fade-left">
                ​ This is a great space to write a long text about your company
                and your services. You can use this space to go into a little
                more detail about your company. Talk about your team and what
                services you provide. Tell your visitors the story of how you
                came up with the idea for your business and what makes you
                different from your competitors.
              </p>
            </article>
          </section>
        </article>
      </section>

      <section className="clients">
        <h2 data-aos="fade-right">
          Creemos que cada cliente es una
          <br /> asociación a largo plazo...
        </h2>
        <h5 data-aos="fade-right">Nuestros Clientes</h5>
        <picture className="galery">
          <img
            data-aos="fade-up"
            src="../../partherns/3M.jpg"
            alt=""
            width={100}
          />
          <img
            data-aos="fade-up"
            src="../../partherns/municipalidad.jpg"
            alt=""
            width={100}
          />
          <img
            data-aos="fade-up"
            src="../../partherns/sodimac.png"
            alt=""
            width={200}
          />
        </picture>
      </section>

      <section className="contact" id="contact">
        <h1 data-aos="fade-right">Contactanos</h1>
        <article className="card-contact">
          <section className="col">
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                data-aos="fade-left"
                value={name}
                onChange={(event) => {
                  setName(event.currentTarget.value);
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                data-aos="fade-left"
                value={email}
                onChange={(event) => {
                  setEmail(event.currentTarget.value);
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Numero de Telefono"
                data-aos="fade-left"
                value={phone}
                onChange={(event) => {
                  setPhone(event.currentTarget.value);
                }}
              />

              <textarea
                name="subject"
                cols="20"
                rows="3"
                placeholder="Subject"
                data-aos="fade-left"
                value={subject}
                onChange={(event) => {
                  setSubject(event.currentTarget.value);
                }}
              ></textarea>
              <button
                type="submit"
                className="btn"
                data-aos="zoom-in"
                onClick={(event) => sendEmail(event)}
              >
                Submit
              </button>
            </form>
          </section>
          <section className="col">
            <div className="mapouter" data-aos="fade-up">
              <div className="gmap_canvas">
                <iframe
                  width="1100"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=av%201ero%20de%20mayo%20villa%20el%20salvador&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  scrolling="no"
                ></iframe>
                <a href="https://putlocker-is.org"></a>
                <br />
              </div>
            </div>
          </section>
        </article>
      </section>

      <section className="end">
        <picture className="svg-wave ">
          <svg
            className="svg2"
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
          >
            <path
              className="svg2-2"
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            ></path>
          </svg>
        </picture>
      </section>
    </>
  );
};

export default Home;
