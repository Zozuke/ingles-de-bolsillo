/* =========================================================================
   RENDER.JS — Pinta listas de palabras (categorías) y la página de verbos
   ========================================================================= */

function filaHTML(item, claseExtra) {
  return `
    <li class="entry ${claseExtra||""}" data-en="${item.en.toLowerCase()}" data-es="${item.es.toLowerCase()}">
      <div class="entry-text">
        <span class="entry-en">${item.en}</span>
        <span class="entry-ph">/${item.ph}/</span>
      </div>
      <span class="entry-es">${item.es}</span>
      ${botonAudio(item.en)}
    </li>`;
}

/**
 * Pinta un objeto {grupo: [items]} dentro de un contenedor,
 * con un buscador local opcional que filtra en vivo.
 */
function renderCategoria(contId, dataObj, tituloPagina) {
  const cont = document.getElementById(contId);
  let html = "";
  let total = 0;
  Object.entries(dataObj).forEach(([grupo, items]) => {
    total += items.length;
    html += `<section class="grupo" data-grupo="${grupo.toLowerCase()}">
      <h2 class="grupo-titulo">${grupo}</h2>
      <ul class="lista-entradas">
        ${items.map(it => filaHTML(it)).join("")}
      </ul>
    </section>`;
  });
  cont.innerHTML = html;

  const contador = document.getElementById(contId + "-contador");
  if (contador) contador.textContent = `${total} palabras y frases en esta página`;

  const filtro = document.getElementById(contId + "-filtro");
  if (filtro) {
    filtro.addEventListener("input", () => {
      const q = filtro.value.trim().toLowerCase();
      let visibles = 0;
      cont.querySelectorAll(".entry").forEach(li => {
        const coincide = !q || li.dataset.en.includes(q) || li.dataset.es.includes(q);
        li.style.display = coincide ? "" : "none";
        if (coincide) visibles++;
      });
      cont.querySelectorAll(".grupo").forEach(sec => {
        const algunVisible = [...sec.querySelectorAll(".entry")].some(li => li.style.display !== "none");
        sec.style.display = algunVisible ? "" : "none";
      });
      if (contador) contador.textContent = q ? `${visibles} resultados para "${q}"` : `${total} palabras y frases en esta página`;
    });
  }
}

/* -------------------------------------------------------------------------
   PÁGINA DE VERBOS: tarjetas expandibles con las 4 tablas de conjugación
   ------------------------------------------------------------------------- */
function renderVerbos(contId) {
  const cont = document.getElementById(contId);
  let html = "";

  VERBOS.forEach(v => {
    const conj = conjugarVerboCompleto(v);
    const infinitivoEn = v.especial ? "to be" : `to ${v.en.base}`;
    const phInf = v.especial ? "tu bi" : `tu ${v.en.ph.base}`;

    html += `<article class="verbo-card" data-en="${infinitivoEn.toLowerCase()} ${v.es.toLowerCase()}" data-es="${v.es.toLowerCase()}">
      <button class="verbo-header" type="button" aria-expanded="false">
        <div>
          <span class="verbo-en">${infinitivoEn}</span>
          <span class="verbo-ph">/${phInf}/</span>
        </div>
        <div class="verbo-header-right">
          <span class="verbo-es">${v.es}</span>
          ${botonAudio(infinitivoEn)}
          <span class="chevron" aria-hidden="true">▾</span>
        </div>
      </button>
      <div class="verbo-body">
        ${TIEMPOS.filter(t => conj[t]).map(t => `
          <div class="tiempo-bloque">
            <h3 class="tiempo-titulo">${NOMBRE_TIEMPO[t]}</h3>
            <ul class="lista-entradas">
              ${conj[t].map(f => filaHTML({ en: f.en, ph: f.ph, es: f.es })).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </article>`;
  });

  cont.innerHTML = html;

  cont.querySelectorAll(".verbo-header").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".verbo-card");
      const abierto = card.classList.toggle("abierto");
      btn.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
  });

  const contador = document.getElementById(contId + "-contador");
  if (contador) contador.textContent = `${VERBOS.length} verbos × 4 tiempos × 6 personas = más de 500 formas conjugadas`;

  const filtro = document.getElementById(contId + "-filtro");
  if (filtro) {
    filtro.addEventListener("input", () => {
      const q = filtro.value.trim().toLowerCase();
      let visibles = 0;
      cont.querySelectorAll(".verbo-card").forEach(card => {
        const coincide = !q || card.dataset.en.includes(q) || card.dataset.es.includes(q);
        card.style.display = coincide ? "" : "none";
        if (coincide) { visibles++; if (q) card.classList.add("abierto"); }
      });
      if (contador) contador.textContent = q ? `${visibles} verbos encontrados para "${q}"` : `${VERBOS.length} verbos en total`;
    });
  }
}
