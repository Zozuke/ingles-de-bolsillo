/* =========================================================================
   SPEECH.JS — Reproduce el audio con la voz nativa del teléfono/navegador
   ========================================================================= */

let vocesEN = [];

function cargarVoces() {
  if (!("speechSynthesis" in window)) return;
  vocesEN = window.speechSynthesis.getVoices().filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
}
if ("speechSynthesis" in window) {
  cargarVoces();
  window.speechSynthesis.onvoiceschanged = cargarVoces;
}

/**
 * Reproduce un texto en inglés con la voz del dispositivo.
 * @param {string} texto
 * @param {HTMLElement} [btn] botón que disparó el audio, para dar feedback visual
 */
function hablar(texto, btn) {
  if (!("speechSynthesis" in window)) {
    alert("Tu navegador no soporta audio por voz (Web Speech API).");
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(texto);
  utter.lang = "en-US";
  utter.rate = 0.92;
  if (vocesEN.length) {
    const preferida = vocesEN.find(v => v.lang === "en-US") || vocesEN[0];
    utter.voice = preferida;
  }
  if (btn) {
    btn.classList.add("hablando");
    utter.onend = () => btn.classList.remove("hablando");
    utter.onerror = () => btn.classList.remove("hablando");
  }
  window.speechSynthesis.speak(utter);
}

/** Crea el botón de bocina reutilizable en toda la web */
function botonAudio(texto, extraClass) {
  return `<button type="button" class="btn-audio ${extraClass||""}" title="Escuchar" onclick="hablar('${texto.replace(/'/g, "\\'")}', this)">
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 010 7" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M19 6a8.5 8.5 0 010 12" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".6"/></svg>
  </button>`;
}
