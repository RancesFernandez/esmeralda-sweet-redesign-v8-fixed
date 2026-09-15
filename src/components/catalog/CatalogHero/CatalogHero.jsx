import './CatalogHero.css';

export default function CatalogHero({ categoria, titulo, subtitulo }) {
  return (
    <section className={`catalog-hero catalog-hero--${categoria}`}>
      <div className="catalog-hero__decor catalog-hero__decor--one" aria-hidden="true" />
      <div className="catalog-hero__decor catalog-hero__decor--two" aria-hidden="true" />

      <div className="section-container">
        <p className="section-kicker">Esmeralda Sweet · catálogo</p>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
    </section>
  );
}
