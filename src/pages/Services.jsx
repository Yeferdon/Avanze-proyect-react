import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import servicesJson from "../utils/services.json";

const Services = () => {
  const categorys = [
    { category: "carpinter", categoria: "Carpinteria" },
    { category: "smithy", categoria: "Herreria" },
    { category: "glass", categoria: "Vidrieria" },
    { category: "designer", categoria: "Diseño de Interiores" },
    { category: "clean", categoria: "Limpieza" },
    { category: "construc", categoria: "Construccion" },
    { category: "furniture", categoria: "Muebleria" },
    { category: "pain", categoria: "Pintura" },
  ];

  const [select, setSelect] = useState("carpinter");
  const [data, setData] = useState([]);

  useEffect(() => {
    servicesJson.filter(
      (service) => service.category === select && setData([service])
    );
  }, [select]);

  const sendEmail = () => {
    alert("Cotizacion de pedido enviada exitosamente ✔");
  };
  return (
    <>
      <main className="container-services">
        <img src="../../img/logo.jpg" alt="" width={130} />
        <h1>Solidoct Services</h1>

        <nav className="sidebar-services">
          <article className="container-services-btn ">
            {categorys.map((category, index) => {
              return (
                <section className="buton-container">
                  <main
                    className={` ${
                      select === category.category && "activate-full"
                    }`}
                  >
                    <button
                      key={index}
                      className="btn-services"
                      onClick={(event) => {
                        setSelect(category.category);
                      }}
                    >
                      {category.categoria}
                    </button>
                  </main>
                </section>
              );
            })}
          </article>
        </nav>

        <article className="container-card-services">
          {data.map((service) => {
            return service.services.map((detail, index) => {
              return (
                <article className="card-service" key={index + detail}>
                  <picture className="img-service">
                    <img
                      src={detail.img_service}
                      alt=""
                      className="img-service"
                    />
                  </picture>
                  <main className="contend-service">
                    <h3>{detail.serviceName}</h3>
                    <hr />
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Cotizar Ahora
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              {detail.serviceName}
                              <span className="badge rounded-pill bg-success">
                                <i className="bi bi-cart-check-fill"></i>
                              </span>
                            </h5>

                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label
                                  for="recipient-name"
                                  className="col-form-label"
                                >
                                  Correo Electronico:
                                </label>
                                <input
                                  required
                                  type="email"
                                  className="form-control"
                                  id="recipient-name"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="recipient-name"
                                  className="col-form-label"
                                >
                                  Numero de Telefono:
                                </label>
                                <input
                                  required
                                  type="email"
                                  className="form-control"
                                  id="recipient-name"
                                />
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              data-bs-dismiss="modal"
                              className="btn-modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn-modal"
                              onClick={sendEmail}
                            >
                              Send message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </main>
                </article>
              );
            });
          })}
        </article>
      </main>
    </>
  );
};

export default Services;
