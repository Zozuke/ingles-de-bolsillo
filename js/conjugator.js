/* =========================================================================
   CONJUGATOR.JS — Motor de conjugación
   Genera, para cualquier verbo de VERBOS y cualquier tiempo/persona:
   { en, ph, es }
   ========================================================================= */

const TIEMPOS = ["presente", "continuo", "pasado", "futuro"];
const NOMBRE_TIEMPO = {
  presente: "Presente simple",
  continuo: "Presente continuo",
  pasado: "Pasado simple",
  futuro: "Futuro simple"
};

const AR_PRES = ["o", "as", "a", "amos", "áis", "an"];
const ER_PRES = ["o", "es", "e", "emos", "éis", "en"];
const IR_PRES = ["o", "es", "e", "imos", "ís", "en"];
const AR_PRET = ["é", "aste", "ó", "amos", "asteis", "aron"];
const ER_IR_PRET = ["í", "iste", "ió", "imos", "isteis", "ieron"];
const FUT_END = ["é", "ás", "á", "emos", "éis", "án"];
const ESTAR = ["estoy", "estás", "está", "estamos", "estáis", "están"];

function stemEs(inf, tipo) {
  return inf.slice(0, -2);
}

function conjugarPresenteEs(v) {
  if (v.esV.presente) return v.esV.presente;
  const stem = stemEs(v.esV.inf, v.esV.tipo);
  const endings = v.esV.tipo === "ar" ? AR_PRES : (v.esV.tipo === "er" ? ER_PRES : IR_PRES);
  return endings.map(e => stem + e);
}

function conjugarPreteritoEs(v) {
  if (v.esV.preterito) return v.esV.preterito;
  const stem = stemEs(v.esV.inf, v.esV.tipo);
  const endings = v.esV.tipo === "ar" ? AR_PRET : ER_IR_PRET;
  return endings.map(e => stem + e);
}

function conjugarFuturoEs(v) {
  const stem = v.esV.futuroStem || v.esV.inf;
  return FUT_END.map(e => stem + e);
}

/* Conjuga BE de forma completamente especial (irregular en ambos idiomas) */
const BE_ESPECIAL = {
  presente: [
    { en: "am", ph: "am", es: "soy / estoy" },
    { en: "are", ph: "ar", es: "eres / estás" },
    { en: "is", ph: "is", es: "es / está" },
    { en: "are", ph: "ar", es: "somos / estamos" },
    { en: "are", ph: "ar", es: "son / están" },
    { en: "are", ph: "ar", es: "son / están" }
  ],
  pasado: [
    { en: "was", ph: "uás", es: "era / estaba" },
    { en: "were", ph: "uér", es: "eras / estabas" },
    { en: "was", ph: "uás", es: "era / estaba" },
    { en: "were", ph: "uér", es: "éramos / estábamos" },
    { en: "were", ph: "uér", es: "eran / estaban" },
    { en: "were", ph: "uér", es: "eran / estaban" }
  ],
  futuro: [
    { en: "will be", ph: "uíl bi", es: "seré / estaré" },
    { en: "will be", ph: "uíl bi", es: "serás / estarás" },
    { en: "will be", ph: "uíl bi", es: "será / estará" },
    { en: "will be", ph: "uíl bi", es: "seremos / estaremos" },
    { en: "will be", ph: "uíl bi", es: "serán / estarán" },
    { en: "will be", ph: "uíl bi", es: "serán / estarán" }
  ]
};

/**
 * Devuelve una fila completa { persona, en, ph, es } para un verbo,
 * un tiempo (de TIEMPOS) y un índice de persona (0-5).
 */
function conjugar(verbo, tiempo, i) {
  const persona = PERSONAS[i];

  if (verbo.especial) {
    if (tiempo === "continuo") return null; // "estar siendo" no aplica de forma útil
    const f = BE_ESPECIAL[tiempo][i];
    return { persona, en: `${persona.en} ${f.en}`, ph: `${persona.ph} ${f.ph}`, es: `${persona.es} ${f.es}` };
  }

  const e = verbo.en;
  let enForm, phForm;

  if (tiempo === "presente") {
    enForm = (i === 2) ? e.third : e.base;
    phForm = (i === 2) ? e.ph.third : e.ph.base;
    const esForms = conjugarPresenteEs(verbo);
    return {
      persona,
      en: `${persona.en} ${enForm}${i===2? " (a/e)":""}`.replace(" (a/e)",""),
      ph: `${persona.ph} ${phForm}`,
      es: `${persona.es} ${esForms[i]}`
    };
  }

  if (tiempo === "continuo") {
    const beForms = ["am", "are", "is", "are", "are", "are"];
    const bePh = ["am", "ar", "is", "ar", "ar", "ar"];
    return {
      persona,
      en: `${persona.en} ${beForms[i]} ${e.ger}`,
      ph: `${persona.ph} ${bePh[i]} ${e.ph.ger}`,
      es: `${persona.es} ${ESTAR[i]} ${verbo.esV.gerundio}`
    };
  }

  if (tiempo === "pasado") {
    enForm = e.past.replace("*", "");
    phForm = e.ph.past;
    const esForms = conjugarPreteritoEs(verbo);
    return {
      persona,
      en: `${persona.en} ${enForm}`,
      ph: `${persona.ph} ${phForm}`,
      es: `${persona.es} ${esForms[i]}`
    };
  }

  if (tiempo === "futuro") {
    const esForms = conjugarFuturoEs(verbo);
    return {
      persona,
      en: `${persona.en} will ${e.base}`,
      ph: `${persona.ph} uíl ${e.ph.base}`,
      es: `${persona.es} ${esForms[i]}`
    };
  }
}

/** Devuelve TODAS las filas (todas las personas) de un verbo en un tiempo */
function conjugarTiempoCompleto(verbo, tiempo) {
  const filas = [];
  for (let i = 0; i < 6; i++) {
    const f = conjugar(verbo, tiempo, i);
    if (f) filas.push(f);
  }
  return filas;
}

/** Devuelve TODAS las formas de un verbo (todos los tiempos, todas las personas) */
function conjugarVerboCompleto(verbo) {
  const resultado = {};
  TIEMPOS.forEach(t => {
    const filas = conjugarTiempoCompleto(verbo, t);
    if (filas.length) resultado[t] = filas;
  });
  return resultado;
}
