import { useEffect, useMemo, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productos } from "../../data/productos";
import { getCategoria, getOpcion } from "../../data/menuCategorias";
import { buscarProductos } from "../../lib/busquedaProductos";
import CatalogHero from "../../components/catalog/CatalogHero/CatalogHero";
import CatalogSearch from "../../components/catalog/CatalogSearch/CatalogSearch";
import MenuOptionGrid from "../../components/catalog/MenuOptionGrid/MenuOptionGrid";
import CatalogResults from "../../components/catalog/CatalogResults/CatalogResults";
import DulceTortasSections from "../../components/catalog/DulceTortasSections/DulceTortasSections";

export default function MenuPage({ categoria, titulo, subtitulo }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriaData = getCategoria(categoria);
  const resultsRef = useRef(null);

  const searchQuery = searchParams.get("buscar") || "";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [categoria]);

  const opcionId =
    searchParams.get("tipo") || categoriaData?.opciones[0]?.id;
  const opcion = getOpcion(categoria, opcionId);
  const isSearching = Boolean(searchQuery.trim());
  const isDulceTortas = categoria === "dulce" && opcionId === "tortas";

  // La búsqueda es global: no aplica categoria, subcategoria ni el menú actual.
  const searchResults = useMemo(
    () => buscarProductos(productos, searchQuery),
    [searchQuery],
  );

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

  const setSearch = (value) => {
    const next = new URLSearchParams(searchParams);

    if (value.trim()) {
      next.set("buscar", value);
      // Mientras se busca, la categoría deja de ser relevante.
      next.delete("tipo");
    } else {
      next.delete("buscar");
    }

    setSearchParams(next, { replace: true });
  };

  const setTipo = (id) => {
    const next = new URLSearchParams(searchParams);
    next.set("tipo", id);
    next.delete("buscar");
    setSearchParams(next);

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
          <CatalogSearch
            value={searchQuery}
            onChange={setSearch}
            resultCount={searchResults.length}
          />

          {isSearching ? (
            <div ref={resultsRef} id="menu-resultados">
              <CatalogResults
                categoriaData={categoriaData}
                opcion={opcion}
                productos={searchResults}
                globalSearch
                searchQuery={searchQuery}
              />
            </div>
          ) : (
            <>
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
            </>
          )}

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
