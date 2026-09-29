import { useId } from "react";
import "./CatalogSearch.css";

export default function CatalogSearch({ value, onChange, resultCount = 0 }) {
  const inputId = useId();

  return (
    <div
      className="catalog-search"
      role="search"
      aria-label="Buscar en el catálogo"
    >
      <div className="catalog-search__label-row">
        <label className="catalog-search__label" htmlFor={inputId}>
          Buscar en todo el catálogo
        </label>
        {value && (
          <span className="catalog-search__count" aria-live="polite">
            {resultCount} {resultCount === 1 ? "resultado" : "resultados"}
          </span>
        )}
      </div>

      <div className={`catalog-search__field ${value ? "has-value" : ""}`}>
        <span className="catalog-search__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>
        </span>

        <input
          id={inputId}
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscá por nombre…"
          autoComplete="off"
          spellCheck="false"
          enterKeyHint="search"
          aria-describedby={`${inputId}-hint`}
        />

        {value && (
          <button
            type="button"
            className="catalog-search__clear"
            onClick={() => onChange("")}
            aria-label="Limpiar búsqueda"
          >
            <span aria-hidden="true">×</span>
          </button>
        )}
      </div>
    </div>
  );
}
