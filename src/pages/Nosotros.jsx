import React from 'react';
import { imagenes } from '../data/imagenes';

export default function Nosotros() {
  return (
    <main className="about-page">
      <section className="catalog-hero">
        <div className="section-container">
          <p className="section-kicker">Esmeralda Sweet</p>
          <h1>Nuestra historia</h1>
          <p>El arte de hacer que un momento cotidiano se sienta especial.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-container story-grid">
          <div className="story-image">
            <img src={imagenes.nosotros.historia} alt="Trabajo artesanal" />
          </div>
          <div className="story-copy">
            <p className="section-kicker">Detrás de cada receta</p>
            <h2 className="section-title">Hecho con intención.</h2>
            <p>
              Esmeralda Sweet nació del amor por la pastelería artesanal y de la
              idea de que una buena propuesta no tiene que elegir entre sabor y
              estética.
            </p>
            <p>
              Cuidamos cada etapa: la selección de ingredientes, la elaboración,
              la presentación y la atención. Queremos que cada pedido tenga algo
              de quien lo recibe y de quien lo comparte.
            </p>
            <p className="story-signature">— Esmeralda Sweet</p>
          </div>
        </div>
      </section>
    </main>
  );
}
