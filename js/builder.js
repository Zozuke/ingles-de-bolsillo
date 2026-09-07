/* =========================================================================
   BUILDER.JS — El "Constructor de frases"
   Sujeto + (Auxiliar) + (Negación) + Verbo + Artículo + (Adjetivo) + Sustantivo
   Permite elegir: tiempo (presente/pasado/futuro) y tipo de oración
   (afirmativa/negativa/pregunta), además de un adjetivo opcional.
   ========================================================================= */

const BUILDER_SUJETOS = [
  { es: "Yo", en: "I", ph: "ai", personIdx: 0 },
  { es: "Tú", en: "you", ph: "iu", personIdx: 1 },
  { es: "Él", en: "he", ph: "ji", personIdx: 2 },
  { es: "Ella", en: "she", ph: "shi", personIdx: 2 },
  { es: "Nosotros", en: "we", ph: "uí", personIdx: 3 },
  { es: "Ellos", en: "they", ph: "déi", personIdx: 5 }
];

const BUILDER_VERBOS_IDS = ["want", "need", "have", "like", "love", "eat", "know", "see"];

const BUILDER_SUSTANTIVOS = [
  { en: "car", pl: "cars", es: "carro", esPl: "carros", ph: "kar", phPl: "kars", v: false, genero: "m" },
  { en: "house", pl: "houses", es: "casa", esPl: "casas", ph: "jáus", phPl: "jáusis", v: false, genero: "f" },
  { en: "job", pl: "jobs", es: "trabajo", esPl: "trabajos", ph: "yab", phPl: "yabs", v: false, genero: "m" },
  { en: "phone", pl: "phones", es: "teléfono", esPl: "teléfonos", ph: "fóun", phPl: "fóuns", v: false, genero: "m" },
  { en: "book", pl: "books", es: "libro", esPl: "libros", ph: "buk", phPl: "buks", v: false, genero: "m" },
  { en: "dog", pl: "dogs", es: "perro", esPl: "perros", ph: "dog", phPl: "dogs", v: false, genero: "m" },
  { en: "apple", pl: "apples", es: "manzana", esPl: "manzanas", ph: "ápel", phPl: "ápels", v: true, genero: "f" },
  { en: "friend", pl: "friends", es: "amigo/a", esPl: "amigos/as", ph: "frend", phPl: "frends", v: false, genero: "m" },
  { en: "computer", pl: "computers", es: "computadora", esPl: "computadoras", ph: "compiúter", phPl: "compiúters", v: false, genero: "f" },
  { en: "idea", pl: "ideas", es: "idea", esPl: "ideas", ph: "aidía", phPl: "aidías", v: true, genero: "f" },
  { en: "coffee", es: "café", ph: "cófi", v: false, genero: "m", unc: true },
  { en: "water", es: "agua", ph: "uáter", v: false, genero: "f", unc: true },
  { en: "food", es: "comida", ph: "fud", v: false, genero: "f", unc: true },
  { en: "money", es: "dinero", ph: "máni", v: false, genero: "m", unc: true }
];

/* Adjetivo opcional. Guardamos las 4 formas en español porque el
   adjetivo cambia según género y número del sustantivo. */
const BUILDER_ADJETIVOS = [
  { en: "new", ph: "niú", v: false, esM: "nuevo", esF: "nueva", esMPl: "nuevos", esFPl: "nuevas" },
  { en: "old", ph: "óuld", v: true, esM: "viejo", esF: "vieja", esMPl: "viejos", esFPl: "viejas" },
  { en: "big", ph: "big", v: false, esM: "grande", esF: "grande", esMPl: "grandes", esFPl: "grandes" },
  { en: "small", ph: "smol", v: false, esM: "pequeño", esF: "pequeña", esMPl: "pequeños", esFPl: "pequeñas" },
  { en: "good", ph: "gud", v: false, esM: "bueno", esF: "buena", esMPl: "buenos", esFPl: "buenas" },
  { en: "bad", ph: "bad", v: false, esM: "malo", esF: "mala", esMPl: "malos", esFPl: "malas" },
  { en: "beautiful", ph: "biútiful", v: false, esM: "hermoso", esF: "hermosa", esMPl: "hermosos", esFPl: "hermosas" },
  { en: "cheap", ph: "chip", v: false, esM: "barato", esF: "barata", esMPl: "baratos", esFPl: "baratas" },
  { en: "expensive", ph: "expénsiv", v: true, esM: "caro", esF: "cara", esMPl: "caros", esFPl: "caras" },
  { en: "favorite", ph: "féivorit", v: false, esM: "favorito", esF: "favorita", esMPl: "favoritos", esFPl: "favoritas" }
];

const EJEMPLOS_INICIALES = [
  { en: "I want a car.", ph: "ai uánt e kar", es: "Yo quiero un carro." },
  { en: "I want a house.", ph: "ai uánt e jáus", es: "Yo quiero una casa." },
  { en: "I want a job.", ph: "ai uánt e yab", es: "Yo quiero un trabajo." },
  { en: "I want some food.", ph: "ai uánt sam fud", es: "Yo quiero algo de comida." }
];

const EJEMPLOS_AMPLIADOS = [
  { en: "I don't want a car.", ph: "ai dóunt uánt e kar", es: "Yo no quiero un carro. (negativa)" },
  { en: "Do you want a car?", ph: "du iu uánt e kar", es: "¿Tú quieres un carro? (pregunta)" },
  { en: "I want a new car.", ph: "ai uánt e niú kar", es: "Yo quiero un carro nuevo. (con adjetivo)" },
  { en: "I wanted a car.", ph: "ai uánted e kar", es: "Yo quería un carro. (pasado)" },
  { en: "I will want a car.", ph: "ai uíl uánt e kar", es: "Yo voy a querer un carro. (futuro)" }
];

/* -------------------------------------------------------------------------
   Utilidades
   ------------------------------------------------------------------------- */
function verboBuilderPorId(id) {
  return VERBOS.find(v => v.id === id);
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function esTerceraPersona(personIdx) {
  return personIdx === 2;
}
function formaAdjetivoEs(adj, genero, plural) {
  if (plural) return genero === "f" ? adj.esFPl : adj.esMPl;
  return genero === "f" ? adj.esF : adj.esM;
}

function articuloPara(sust, plural, adjetivo) {
  if (sust.unc) return { en: "some", es: "algo de", ph: "sam" };
  if (plural) return { en: "some", es: sust.genero === "m" ? "unos" : "unas", ph: "sam" };
  // El sonido que decide "a" vs "an" es el de la PRIMERA palabra que sigue:
  // el adjetivo si hay uno, si no, el sustantivo.
  const sonidoVocal = adjetivo ? adjetivo.v : sust.v;
  return { en: sonidoVocal ? "an" : "a", es: sust.genero === "m" ? "un" : "una", ph: sonidoVocal ? "an" : "e" };
}

function nucleoFrase(sust, plural, adjetivo) {
  const art = articuloPara(sust, plural, adjetivo);
  const nounEn = (plural && sust.pl) ? sust.pl : sust.en;
  const nounPh = (plural && sust.pl) ? sust.phPl : sust.ph;
  const nounEs = (plural && sust.esPl) ? sust.esPl : sust.es;
  const adjEnParte = adjetivo ? adjetivo.en : null;
  const adjPhParte = adjetivo ? adjetivo.ph : null;
  const adjEsParte = adjetivo ? formaAdjetivoEs(adjetivo, sust.genero, plural && !!sust.pl) : null;

  return {
    en: [art.en, adjEnParte, nounEn].filter(Boolean).join(" "),
    ph: [art.ph, adjPhParte, nounPh].filter(Boolean).join(" "),
    // en español el adjetivo va DESPUÉS del sustantivo: "un carro nuevo"
    es: [art.es, nounEs, adjEsParte].filter(Boolean).join(" "),
    art, nounEn, nounPh, nounEs, adjEnParte, adjPhParte, adjEsParte
  };
}

/* Guías fonéticas de piezas auxiliares reutilizables */
const PH_AUX = {
  do: "du", does: "das", "don't": "dóunt", "doesn't": "dásent",
  did: "did", "didn't": "dídent",
  will: "uíl", "won't": "uóunt", not: "nat"
};

/* -------------------------------------------------------------------------
   Motor principal: arma inglés + español + fonética + desglose por piezas
   ------------------------------------------------------------------------- */
function construirFrase(sujeto, verbo, sust, plural, adjetivo, tiempo, tipo) {
  const tercera = esTerceraPersona(sujeto.personIdx);
  const nucleo = nucleoFrase(sust, plural, adjetivo);

  const base = verbo.en.base, third = verbo.en.third, past = verbo.en.past.replace("*", "");
  const phBase = verbo.en.ph.base, phThird = verbo.en.ph.third, phPast = verbo.en.ph.past;

  const esPresente = conjugarPresenteEs(verbo)[sujeto.personIdx];
  const esPasado = conjugarPreteritoEs(verbo)[sujeto.personIdx];
  const esFuturo = conjugarFuturoEs(verbo)[sujeto.personIdx];

  let piezas = [];
  let cuerpoEn = "", cuerpoPh = "", cuerpoEs = "";
  const esPregunta = tipo === "pregunta";

  function pieza(labelEs, en, ph, es) { piezas.push({ labelEs, en, ph, es }); }

  if (tiempo === "presente") {
    if (tipo === "afirmativa") {
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Verbo", tercera ? third : base, tercera ? phThird : phBase, esPresente);
      cuerpoEn = `${sujeto.en} ${tercera ? third : base} ${nucleo.en}`;
      cuerpoPh = `${sujeto.ph} ${tercera ? phThird : phBase} ${nucleo.ph}`;
      cuerpoEs = `${sujeto.es} ${esPresente} ${nucleo.es}`;
    } else if (tipo === "negativa") {
      const auxEn = tercera ? "doesn't" : "don't";
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Auxiliar + no", auxEn, PH_AUX[auxEn], "no");
      pieza("Verbo", base, phBase, esPresente);
      cuerpoEn = `${sujeto.en} ${auxEn} ${base} ${nucleo.en}`;
      cuerpoPh = `${sujeto.ph} ${PH_AUX[auxEn]} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `${sujeto.es} no ${esPresente} ${nucleo.es}`;
    } else {
      const auxEn = tercera ? "Does" : "Do";
      pieza("Auxiliar (pregunta)", auxEn, PH_AUX[auxEn.toLowerCase()], "¿...?");
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Verbo", base, phBase, esPresente);
      cuerpoEn = `${auxEn} ${sujeto.en} ${base} ${nucleo.en}`;
      cuerpoPh = `${PH_AUX[auxEn.toLowerCase()]} ${sujeto.ph} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `¿${capitalize(sujeto.es)} ${esPresente} ${nucleo.es}`;
    }
  } else if (tiempo === "pasado") {
    if (tipo === "afirmativa") {
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Verbo (pasado)", past, phPast, esPasado);
      cuerpoEn = `${sujeto.en} ${past} ${nucleo.en}`;
      cuerpoPh = `${sujeto.ph} ${phPast} ${nucleo.ph}`;
      cuerpoEs = `${sujeto.es} ${esPasado} ${nucleo.es}`;
    } else if (tipo === "negativa") {
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Auxiliar + no", "didn't", PH_AUX["didn't"], "no");
      pieza("Verbo", base, phBase, esPasado);
      cuerpoEn = `${sujeto.en} didn't ${base} ${nucleo.en}`;
      cuerpoPh = `${sujeto.ph} ${PH_AUX["didn't"]} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `${sujeto.es} no ${esPasado} ${nucleo.es}`;
    } else {
      pieza("Auxiliar (pregunta)", "Did", PH_AUX.did, "¿...?");
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Verbo", base, phBase, esPasado);
      cuerpoEn = `Did ${sujeto.en} ${base} ${nucleo.en}`;
      cuerpoPh = `${PH_AUX.did} ${sujeto.ph} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `¿${capitalize(sujeto.es)} ${esPasado} ${nucleo.es}`;
    }
  } else { // futuro
    if (tipo === "afirmativa") {
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Auxiliar", "will", PH_AUX.will, "");
      pieza("Verbo", base, phBase, esFuturo);
      cuerpoEn = `${sujeto.en} will ${base} ${nucleo.en}`;
      cuerpoPh = `${sujeto.ph} ${PH_AUX.will} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `${sujeto.es} ${esFuturo} ${nucleo.es}`;
    } else if (tipo === "negativa") {
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Auxiliar + no", "won't", PH_AUX["won't"], "no");
      pieza("Verbo", base, phBase, esFuturo);
      cuerpoEn = `${sujeto.en} won't ${base} ${nucleo.en}`;
      cuerpoPh = `${sujeto.ph} ${PH_AUX["won't"]} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `${sujeto.es} no ${esFuturo} ${nucleo.es}`;
    } else {
      pieza("Auxiliar (pregunta)", "Will", PH_AUX.will, "¿...?");
      pieza("Sujeto", sujeto.en, sujeto.ph, sujeto.es);
      pieza("Verbo", base, phBase, esFuturo);
      cuerpoEn = `Will ${sujeto.en} ${base} ${nucleo.en}`;
      cuerpoPh = `${PH_AUX.will} ${sujeto.ph} ${phBase} ${nucleo.ph}`;
      cuerpoEs = `¿${capitalize(sujeto.es)} ${esFuturo} ${nucleo.es}`;
    }
  }

  pieza("Artículo", nucleo.art.en, nucleo.art.ph, nucleo.art.es);
  if (adjetivo) pieza("Adjetivo", nucleo.adjEnParte, nucleo.adjPhParte, nucleo.adjEsParte);
  pieza("Sustantivo", nucleo.nounEn, nucleo.nounPh, nucleo.nounEs);

  const fraseEn = capitalize(`${cuerpoEn} ${nucleo.en}`.trim());
  const fraseEnFinal = capitalize(cuerpoEn.trim()) + (esPregunta ? "?" : ".");
  const frasePhFinal = cuerpoPh.trim();
  const fraseEsFinal = capitalize(cuerpoEs.trim()) + (esPregunta ? "?" : ".");

  return { piezas, fraseEn: fraseEnFinal, frasePh: frasePhFinal, fraseEs: fraseEsFinal };
}

/* -------------------------------------------------------------------------
   Inicialización de la página
   ------------------------------------------------------------------------- */
function initConstructor() {
  const selSujeto = document.getElementById("sel-sujeto");
  const selVerbo = document.getElementById("sel-verbo");
  const selSust = document.getElementById("sel-sustantivo");
  const selCantidad = document.getElementById("sel-cantidad");
  const selAdjetivo = document.getElementById("sel-adjetivo");
  const selTiempo = document.getElementById("sel-tiempo");
  const selTipo = document.getElementById("sel-tipo");

  selSujeto.innerHTML = BUILDER_SUJETOS.map((s, i) => `<option value="${i}">${s.es} / ${s.en}</option>`).join("");
  selVerbo.innerHTML = BUILDER_VERBOS_IDS.map(id => {
    const v = verboBuilderPorId(id);
    return `<option value="${id}">${v.en.base} — ${v.es}</option>`;
  }).join("");
  selSust.innerHTML = BUILDER_SUSTANTIVOS.map((s, i) => `<option value="${i}">${s.en} — ${s.es}</option>`).join("");
  selAdjetivo.innerHTML = `<option value="-1">(ninguno)</option>` +
    BUILDER_ADJETIVOS.map((a, i) => `<option value="${i}">${a.en} — ${a.esM}</option>`).join("");

  function filaEjemplo(e) {
    return `<li class="entry">
      <div class="entry-text">
        <span class="entry-en">${e.en}</span>
        <span class="entry-ph">/${e.ph}/</span>
      </div>
      <span class="entry-es">${e.es}</span>
      ${botonAudio(e.en)}
    </li>`;
  }

  document.getElementById("ejemplos-iniciales").innerHTML = EJEMPLOS_INICIALES.map(filaEjemplo).join("");
  document.getElementById("ejemplos-ampliados").innerHTML = EJEMPLOS_AMPLIADOS.map(filaEjemplo).join("");

  function actualizar() {
    const sujeto = BUILDER_SUJETOS[selSujeto.value];
    const verbo = verboBuilderPorId(selVerbo.value);
    const sust = BUILDER_SUSTANTIVOS[selSust.value];
    const adjIdx = parseInt(selAdjetivo.value, 10);
    const adjetivo = adjIdx >= 0 ? BUILDER_ADJETIVOS[adjIdx] : null;
    const tiempo = selTiempo.value;
    const tipo = selTipo.value;

    if (sust.unc) {
      selCantidad.disabled = true;
      selCantidad.value = "singular";
    } else {
      selCantidad.disabled = false;
    }
    const plural = !sust.unc && selCantidad.value === "plural";

    const r = construirFrase(sujeto, verbo, sust, plural, adjetivo, tiempo, tipo);

    const piezasWrap = document.getElementById("desglose-piezas");
    piezasWrap.innerHTML = r.piezas.map(p => `
      <div class="pieza">
        <span class="pieza-etiqueta">${p.labelEs}</span>
        ${p.es ? `<span class="pieza-es">${p.es}</span>` : ""}
        <span class="pieza-flecha">→</span>
        <span class="pieza-en">${p.en}</span>
        <span class="pieza-ph">/${p.ph}/</span>
      </div>
    `).join(`<div class="pieza-mas">+</div>`);

    document.getElementById("frase-final-en").textContent = r.fraseEn;
    document.getElementById("frase-final-ph").textContent = "/" + r.frasePh + "/";
    document.getElementById("frase-final-es").textContent = r.fraseEs;
    document.getElementById("btn-audio-frase").setAttribute("onclick", `hablar('${r.fraseEn.replace(/'/g, "\\'")}', this)`);

    const combosWrap = document.getElementById("mas-combinaciones");
    combosWrap.innerHTML = BUILDER_SUSTANTIVOS.map(s2 => {
      const pluralS2 = !s2.unc && selCantidad.value === "plural";
      const r2 = construirFrase(sujeto, verbo, s2, pluralS2, adjetivo, tiempo, tipo);
      return `<li class="entry">
        <div class="entry-text">
          <span class="entry-en">${r2.fraseEn}</span>
          <span class="entry-ph">/${r2.frasePh}/</span>
        </div>
        <span class="entry-es">${r2.fraseEs}</span>
        ${botonAudio(r2.fraseEn)}
      </li>`;
    }).join("");
  }

  [selSujeto, selVerbo, selSust, selCantidad, selAdjetivo, selTiempo, selTipo].forEach(el =>
    el.addEventListener("change", actualizar)
  );
  actualizar();
}
