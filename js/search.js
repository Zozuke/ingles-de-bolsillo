/* =========================================================================
   SEARCH.JS — Buscador global de todo el sitio
   ========================================================================= */

const CATEGORIAS_BUSCABLES = [
  { nombre: "Artículos", data: () => ARTICULOS },
  { nombre: "Sustantivos", data: () => SUSTANTIVOS },
  { nombre: "Pronombres", data: () => PRONOMBRES },
  { nombre: "Adjetivos", data: () => ADJETIVOS },
  { nombre: "Adverbios", data: () => ADVERBIOS },
  { nombre: "Preposiciones", data: () => PREPOSICIONES },
  { nombre: "Conectores / Conjunciones", data: () => CONECTORES },
  { nombre: "Auxiliares", data: () => AUXILIARES },
  { nombre: "Determinantes / Posesivos", data: () => DETERMINANTES },
  { nombre: "Palabras interrogativas", data: () => INTERROGATIVAS },
  { nombre: "Negación", data: () => NEGACION }
];

function buscarGlobal(qOriginal) {
  const q = qOriginal.trim().toLowerCase();
  if (!q) return { verbos: [], palabras: [] };

  // 1) Familias de verbos: buscamos en TODAS las formas conjugadas
  const verbosEncontrados = [];
  VERBOS.forEach(v => {
    const conj = conjugarVerboCompleto(v);
    const infinitivoEn = v.especial ? "to be" : `to ${v.en.base}`;
    let matches = [];
    let infinitivoMatch = infinitivoEn.toLowerCase().includes(q) || v.es.toLowerCase().includes(q);
    Object.entries(conj).forEach(([tiempo, filas]) => {
      filas.forEach(f => {
        if (f.en.toLowerCase().includes(q) || f.es.toLowerCase().includes(q) || f.ph.toLowerCase().includes(q)) {
          matches.push({ tiempo, fila: f });
        }
      });
    });
    if (matches.length || infinitivoMatch) {
      verbosEncontrados.push({ verbo: v, infinitivoEn, conj, matches, infinitivoMatch });
    }
  });

  // 2) Palabras sueltas en el resto de categorías
  const palabrasEncontradas = [];
  CATEGORIAS_BUSCABLES.forEach(cat => {
    const dataObj = cat.data();
    Object.entries(dataObj).forEach(([grupo, items]) => {
      items.forEach(it => {
        if (it.en.toLowerCase().includes(q) || it.es.toLowerCase().includes(q)) {
          palabrasEncontradas.push({ categoria: cat.nombre, grupo, item: it });
        }
      });
    });
  });

  return { verbos: verbosEncontrados, palabras: palabrasEncontradas };
}

function pintarResultados(q) {
  const cont = document.getElementById("resultados-busqueda");
  const resumen = document.getElementById("resumen-busqueda");
  if (!q.trim()) {
    cont.innerHTML = `<p class="ayuda-busqueda">Escribe cualquier palabra en inglés o en español — un artículo, un sustantivo, un adjetivo o cualquier forma conjugada de un verbo (por ejemplo <strong>"comieron"</strong>, <strong>"wanted"</strong> o <strong>"trabajo"</strong>) — y aquí aparecerá agrupado todo lo relacionado.</p>`;
    resumen.textContent = "";
    return;
  }

  const { verbos, palabras } = buscarGlobal(q);

  if (!verbos.length && !palabras.length) {
    cont.innerHTML = `<p class="ayuda-busqueda">No encontré nada para <strong>"${q}"</strong>. Prueba con otra palabra, o revisa cómo se escribe.</p>`;
    resumen.textContent = "0 resultados";
    return;
  }

  resumen.textContent = `${verbos.length} familia(s) de verbo · ${palabras.length} palabra(s) suelta(s)`;

  let html = "";

  if (verbos.length) {
    html += `<section class="resultado-bloque">
      <h2 class="resultado-titulo">Familias de verbos encontradas</h2>
      ${verbos.map(v => renderFamiliaVerbo(v)).join("")}
    </section>`;
  }

  if (palabras.length) {
    // Agrupamos por categoría
    const porCategoria = {};
    palabras.forEach(p => {
      porCategoria[p.categoria] = porCategoria[p.categoria] || [];
      porCategoria[p.categoria].push(p);
    });
    html += `<section class="resultado-bloque">
      <h2 class="resultado-titulo">Palabras encontradas</h2>
      ${Object.entries(porCategoria).map(([categoria, arr]) => `
        <div class="resultado-categoria">
          <h3 class="resultado-categoria-titulo">${categoria}</h3>
          <ul class="lista-entradas">
            ${arr.map(p => filaHTML(p.item)).join("")}
          </ul>
        </div>
      `).join("")}
    </section>`;
  }

  cont.innerHTML = html;
}

function renderFamiliaVerbo({ verbo, infinitivoEn, conj, matches }) {
  const idsMatch = new Set(matches.map(m => `${m.tiempo}-${m.fila.persona.en}-${m.fila.en}`));
  return `<article class="verbo-card abierto familia-verbo">
    <div class="verbo-header sin-boton">
      <div>
        <span class="verbo-en">${infinitivoEn}</span>
      </div>
      <div class="verbo-header-right">
        <span class="verbo-es">${verbo.es}</span>
        ${botonAudio(infinitivoEn)}
      </div>
    </div>
    <div class="verbo-body mostrar">
      ${Object.entries(conj).map(([tiempo, filas]) => `
        <div class="tiempo-bloque">
          <h3 class="tiempo-titulo">${NOMBRE_TIEMPO[tiempo]}</h3>
          <ul class="lista-entradas">
            ${filas.map(f => {
              const esMatch = idsMatch.has(`${tiempo}-${f.persona.en}-${f.en}`);
              return filaHTML({ en: f.en, ph: f.ph, es: f.es }, esMatch ? "coincidencia" : "");
            }).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  </article>`;
}

function initBuscador() {
  const input = document.getElementById("input-busqueda");
  pintarResultados("");
  input.addEventListener("input", () => pintarResultados(input.value));
  input.focus();

  // Si llega ?q=... en la URL (por ejemplo desde otra página), precargamos
  const params = new URLSearchParams(location.search);
  if (params.get("q")) {
    input.value = params.get("q");
    pintarResultados(input.value);
  }
}
