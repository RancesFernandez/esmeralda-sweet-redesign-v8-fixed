import { useEffect, useMemo, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productos } from "../../data/productos";
import { getCategoria, getOpcion } from "../../data/menuCategorias";
import CatalogHero from "../../components/catalog/CatalogHero/CatalogHero";
import MenuOptionGrid from "../../components/catalog/MenuOptionGrid/MenuOptionGrid";
import CatalogResults from "../../components/catalog/CatalogResults/CatalogResults";
import DulceTortasSections from "../../components/catalog/DulceTortasSections/DulceTortasSections";

export default function MenuPage({ categoria, titulo, subtitulo }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaData = getCategoria(categoria);
  const resultsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [categoria]);

  const opcionId = searchParams.get("tipo") || categoriaData?.opciones[0]?.id;
  const opcion = getOpcion(categoria, opcionId);
  const isDulceTortas = categoria === "dulce" && opcionId === "tortas";

  const filteredProducts = useMemo(
    () =>
      productos.filter((item) => {
        if (item.categoria !== categoria) return false;
        if (categoria === "desayunos") return true;
        if (!item.subcategoria) return true;
        return item.subcategoria === opcionId;
      }),
    [categoria, opcionId],
  );

  const setTipo = (id) => {
    setSearchParams({ tipo: id });

    window.setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const nextMenuPath =
    categoria === "dulce"
      ? "/menu-salado"
      : categoria === "salado"
        ? "/desayunos"
        : "/menu-dulce";

  const nextMenuLabel =
    categoria === "dulce"
      ? "menú salado"
      : categoria === "salado"
        ? "desayunos"
        : "menú dulce";

  return (
    <main className="catalog-page">
      <CatalogHero
        categoria={categoria}
        titulo={titulo}
        subtitulo={subtitulo}
      />

      <nav className="menu-switcher" aria-label="Navegación entre menús">
        <div className="section-container">
          

          <div className="menu-switcher__links">
            <Link
              to="/menu-dulce"
              className={`menu-switcher__link ${
                categoria === "dulce" ? "is-active" : ""
              }`}
            >
              Menú dulce
            </Link>

            <Link
              to="/menu-salado"
              className={`menu-switcher__link ${
                categoria === "salado" ? "is-active" : ""
              }`}
            >
              Menú salado
            </Link>

            <Link
              to="/desayunos"
              className={`menu-switcher__link ${
                categoria === "desayunos" ? "is-active" : ""
              }`}
            >
              Desayunos
            </Link>
          </div>
        </div>
      </nav>

      <section className="section catalog-navigation">
        <div className="section-container">
          {categoria !== "desayunos" && (
            <>
              <div className="catalog-intro">
                <div>
                  <p className="section-kicker">Elegí una categoría</p>
                  <h2 className="section-title">
                    Encontrá exactamente lo que buscás.
                  </h2>
                </div>
              </div>

              <MenuOptionGrid
                opciones={categoriaData?.opciones}
                selectedId={opcionId}
                onSelect={setTipo}
              />
            </>
          )}

          <div ref={resultsRef} id="menu-resultados">
            {isDulceTortas ? (
              <DulceTortasSections productos={filteredProducts} />
            ) : (
              <CatalogResults
                categoriaData={categoriaData}
                opcion={opcion}
                productos={filteredProducts}
              />
            )}
          </div>

          <div className="catalog-bottom-links">
            <Link to={nextMenuPath} className="text-link">
              Explorar {nextMenuLabel} →
            </Link>
            <Link to="/" className="text-link">
              Volver al inicio →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
