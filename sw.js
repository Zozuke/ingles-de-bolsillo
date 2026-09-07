// Service worker de "Mi Inglés de Bolsillo".
// Cachea toda la app en la instalación para que funcione 100% sin internet.
// Sube la versión del CACHE_NAME cada vez que cambies algún archivo del sitio,
// así el service worker sabe que debe descargar y activar la versión nueva.
const CACHE_NAME = "mi-ingles-de-bolsillo-v1";

// Rutas relativas a la ubicación de este archivo (raíz del sitio).
// Así funciona igual en localhost/ que en usuario.github.io/repo/.
const ASSETS = [
  "./",
  "index.html",
  "articulos.html",
  "sustantivos.html",
  "pronombres.html",
  "verbos.html",
  "adjetivos.html",
  "adverbios.html",
  "preposiciones.html",
  "conectores.html",
  "auxiliares.html",
  "determinantes.html",
  "interrogativas.html",
  "negacion.html",
  "buscador.html",
  "constructor.html",
  "css/style.css",
  "js/data.js",
  "js/render.js",
  "js/search.js",
  "js/speech.js",
  "js/builder.js",
  "js/conjugator.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png"
];

// --- Instalación: descarga y guarda todo en caché ---
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// --- Activación: borra cachés viejas de versiones anteriores ---
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// --- Fetch: cache-first con actualización en segundo plano ---
self.addEventListener("fetch", (event) => {
  // Solo manejamos peticiones GET del mismo origen (nuestros propios archivos).
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          // Guarda una copia fresca en caché para la próxima vez.
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached); // sin internet: si falla el fetch, usa lo cacheado

      // Si ya está en caché, responde al instante y actualiza detrás.
      // Si no está en caché, espera la red (y si no hay red, no hay nada que mostrar).
      return cached || fetchPromise;
    })
  );
});
