/* =========================================================================
   DATA.JS — Toda la base de datos léxica del sitio "Mi Inglés de Bolsillo"
   Cada palabra trae: en (inglés), es (español), ph (pronunciación guiada
   para hispanohablantes, NO es AFI estricto, es una guía fácil de leer).
   ========================================================================= */

/* -------------------------------------------------------------------------
   PRONOMBRES PERSONALES (sujeto/objeto/posesivos/reflexivos)
   ------------------------------------------------------------------------- */
const PRONOMBRES = {
  "Pronombres de sujeto": [
    { en: "I", es: "yo", ph: "ai" },
    { en: "you", es: "tú / usted", ph: "iu" },
    { en: "he", es: "él", ph: "ji" },
    { en: "she", es: "ella", ph: "shi" },
    { en: "it", es: "eso / ello", ph: "it" },
    { en: "we", es: "nosotros", ph: "uí" },
    { en: "you", es: "ustedes / vosotros", ph: "iu" },
    { en: "they", es: "ellos / ellas", ph: "déi" }
  ],
  "Pronombres de objeto": [
    { en: "me", es: "a mí / me", ph: "mi" },
    { en: "you", es: "a ti / te", ph: "iu" },
    { en: "him", es: "a él / lo", ph: "jim" },
    { en: "her", es: "a ella / la", ph: "jer" },
    { en: "it", es: "a eso / lo", ph: "it" },
    { en: "us", es: "a nosotros / nos", ph: "as" },
    { en: "you", es: "a ustedes", ph: "iu" },
    { en: "them", es: "a ellos / los", ph: "dem" }
  ],
  "Pronombres posesivos": [
    { en: "mine", es: "mío / mía", ph: "máin" },
    { en: "yours", es: "tuyo / tuya", ph: "iórs" },
    { en: "his", es: "suyo (de él)", ph: "jis" },
    { en: "hers", es: "suyo (de ella)", ph: "jers" },
    { en: "ours", es: "nuestro", ph: "áuers" },
    { en: "theirs", es: "suyo (de ellos)", ph: "déars" }
  ],
  "Pronombres reflexivos": [
    { en: "myself", es: "yo mismo", ph: "mai-sélf" },
    { en: "yourself", es: "tú mismo", ph: "iur-sélf" },
    { en: "himself", es: "él mismo", ph: "jim-sélf" },
    { en: "herself", es: "ella misma", ph: "jer-sélf" },
    { en: "itself", es: "eso mismo", ph: "it-sélf" },
    { en: "ourselves", es: "nosotros mismos", ph: "áuer-sélvs" },
    { en: "yourselves", es: "ustedes mismos", ph: "iur-sélvs" },
    { en: "themselves", es: "ellos mismos", ph: "dem-sélvs" }
  ],
  "Pronombres demostrativos": [
    { en: "this", es: "esto / este / esta", ph: "dis" },
    { en: "that", es: "eso / ese / esa", ph: "dat" },
    { en: "these", es: "estos / estas", ph: "diis" },
    { en: "those", es: "esos / esas", ph: "dóus" }
  ]
};

/* -------------------------------------------------------------------------
   DETERMINANTES / POSESIVOS
   ------------------------------------------------------------------------- */
const DETERMINANTES = {
  "Adjetivos posesivos": [
    { en: "my", es: "mi / mis", ph: "mai" },
    { en: "your", es: "tu / tus", ph: "iur" },
    { en: "his", es: "su (de él)", ph: "jis" },
    { en: "her", es: "su (de ella)", ph: "jer" },
    { en: "its", es: "su (de eso)", ph: "its" },
    { en: "our", es: "nuestro/a/os/as", ph: "áuer" },
    { en: "their", es: "su (de ellos)", ph: "déar" }
  ],
  "Cuantificadores": [
    { en: "some", es: "algo de / unos", ph: "sam" },
    { en: "any", es: "algún / ninguno", ph: "éni" },
    { en: "no", es: "ningún / nada de", ph: "nóu" },
    { en: "every", es: "cada / todo", ph: "évri" },
    { en: "each", es: "cada uno", ph: "iich" },
    { en: "all", es: "todo / todos", ph: "ol" },
    { en: "much", es: "mucho (incontable)", ph: "mach" },
    { en: "many", es: "muchos (contable)", ph: "méni" },
    { en: "a lot of", es: "mucho / muchos", ph: "e lat of" },
    { en: "few", es: "pocos", ph: "fiú" },
    { en: "little", es: "poco", ph: "lítel" },
    { en: "several", es: "varios", ph: "séveral" }
  ],
  "Definido / demostrativo": [
    { en: "the", es: "el / la / los / las", ph: "de" },
    { en: "this", es: "este / esta", ph: "dis" },
    { en: "that", es: "ese / esa", ph: "dat" },
    { en: "these", es: "estos / estas", ph: "diis" },
    { en: "those", es: "esos / esas", ph: "dóus" }
  ]
};

/* -------------------------------------------------------------------------
   PALABRAS INTERROGATIVAS
   ------------------------------------------------------------------------- */
const INTERROGATIVAS = {
  "Palabras interrogativas (Wh- questions)": [
    { en: "what", es: "qué", ph: "uát" },
    { en: "where", es: "dónde", ph: "uér" },
    { en: "when", es: "cuándo", ph: "uén" },
    { en: "who", es: "quién", ph: "ju" },
    { en: "whom", es: "a quién", ph: "jum" },
    { en: "whose", es: "de quién", ph: "jus" },
    { en: "why", es: "por qué", ph: "uái" },
    { en: "which", es: "cuál", ph: "uích" },
    { en: "how", es: "cómo", ph: "jáu" },
    { en: "how much", es: "cuánto (incontable)", ph: "jáu mach" },
    { en: "how many", es: "cuántos (contable)", ph: "jáu méni" },
    { en: "how often", es: "cada cuánto", ph: "jáu ófen" },
    { en: "how long", es: "cuánto tiempo", ph: "jáu long" }
  ]
};

/* -------------------------------------------------------------------------
   NEGACIÓN
   ------------------------------------------------------------------------- */
const NEGACION = {
  "Palabras de negación": [
    { en: "not", es: "no", ph: "nat" },
    { en: "no", es: "ningún / no hay", ph: "nóu" },
    { en: "never", es: "nunca", ph: "néver" },
    { en: "nobody", es: "nadie", ph: "nóu-badi" },
    { en: "no one", es: "nadie", ph: "nóu uán" },
    { en: "nothing", es: "nada", ph: "názing" },
    { en: "none", es: "ninguno", ph: "nan" },
    { en: "neither", es: "ninguno de los dos", ph: "níder" },
    { en: "nor", es: "ni", ph: "nor" },
    { en: "nowhere", es: "en ningún lugar", ph: "nóu-uér" }
  ],
  "Contracciones negativas": [
    { en: "don't", es: "no (presente)", ph: "dóunt" },
    { en: "doesn't", es: "no (presente, él/ella)", ph: "dásent" },
    { en: "didn't", es: "no (pasado)", ph: "dídent" },
    { en: "isn't", es: "no es / no está", ph: "ísent" },
    { en: "aren't", es: "no son / no están", ph: "árent" },
    { en: "wasn't", es: "no era / no estaba", ph: "uásent" },
    { en: "weren't", es: "no eran / no estaban", ph: "uérent" },
    { en: "can't", es: "no puede", ph: "kant" },
    { en: "won't", es: "no va a (futuro)", ph: "uóunt" },
    { en: "haven't", es: "no he / no hemos", ph: "jávent" },
    { en: "hasn't", es: "no ha", ph: "jásent" },
    { en: "shouldn't", es: "no debería", ph: "shúdent" }
  ]
};

/* -------------------------------------------------------------------------
   AUXILIARES
   ------------------------------------------------------------------------- */
const AUXILIARES = {
  "Verbo BE (ser/estar)": [
    { en: "am", es: "soy / estoy", ph: "am" },
    { en: "is", es: "es / está", ph: "is" },
    { en: "are", es: "son / están / eres", ph: "ar" },
    { en: "was", es: "era / estaba (yo, él)", ph: "uás" },
    { en: "were", es: "eran / estaban (tú, ellos)", ph: "uér" },
    { en: "been", es: "sido / estado", ph: "bin" },
    { en: "being", es: "siendo / estando", ph: "bíing" }
  ],
  "Verbo HAVE (tener - auxiliar)": [
    { en: "have", es: "he / han (auxiliar)", ph: "jav" },
    { en: "has", es: "ha (él/ella)", ph: "jas" },
    { en: "had", es: "había", ph: "jad" }
  ],
  "Verbo DO (auxiliar de preguntas/negación)": [
    { en: "do", es: "auxiliar de pregunta", ph: "du" },
    { en: "does", es: "auxiliar (él/ella)", ph: "das" },
    { en: "did", es: "auxiliar de pasado", ph: "did" }
  ],
  "Verbos modales": [
    { en: "can", es: "puedo / puede", ph: "kan" },
    { en: "could", es: "podía / podría", ph: "kud" },
    { en: "will", es: "voy a / va a (futuro)", ph: "uíl" },
    { en: "would", es: "haría / quisiera", ph: "wud" },
    { en: "shall", es: "deberé (formal)", ph: "shal" },
    { en: "should", es: "debería", ph: "shud" },
    { en: "may", es: "puede que / permiso", ph: "méi" },
    { en: "might", es: "podría (posibilidad)", ph: "máit" },
    { en: "must", es: "debo / tengo que", ph: "mast" }
  ]
};

/* -------------------------------------------------------------------------
   CONECTORES / CONJUNCIONES
   ------------------------------------------------------------------------- */
const CONECTORES = {
  "Conectores básicos": [
    { en: "and", es: "y", ph: "and" },
    { en: "but", es: "pero", ph: "bat" },
    { en: "or", es: "o", ph: "or" },
    { en: "because", es: "porque", ph: "bicós" },
    { en: "so", es: "así que / entonces", ph: "sóu" },
    { en: "if", es: "si", ph: "if" },
    { en: "unless", es: "a menos que", ph: "anlés" },
    { en: "although", es: "aunque", ph: "olzóu" },
    { en: "though", es: "aunque (informal)", ph: "dóu" },
    { en: "however", es: "sin embargo", ph: "jauéver" },
    { en: "therefore", es: "por lo tanto", ph: "dérfor" },
    { en: "while", es: "mientras", ph: "uáil" },
    { en: "since", es: "ya que / desde que", ph: "sins" },
    { en: "when", es: "cuando", ph: "uén" },
    { en: "before", es: "antes de", ph: "bifór" },
    { en: "after", es: "después de", ph: "áfter" },
    { en: "then", es: "entonces / luego", ph: "den" },
    { en: "also", es: "también", ph: "olsóu" },
    { en: "too", es: "también", ph: "tu" },
    { en: "either...or", es: "o...o", ph: "ízer or" },
    { en: "neither...nor", es: "ni...ni", ph: "níder nor" },
    { en: "that", es: "que", ph: "dat" },
    { en: "as", es: "como / mientras", ph: "as" },
    { en: "until", es: "hasta que", ph: "antíl" }
  ]
};

/* -------------------------------------------------------------------------
   PREPOSICIONES
   ------------------------------------------------------------------------- */
const PREPOSICIONES = {
  "Lugar": [
    { en: "in", es: "en / dentro de", ph: "in" },
    { en: "on", es: "sobre / encima de", ph: "an" },
    { en: "at", es: "en (un punto)", ph: "at" },
    { en: "under", es: "debajo de", ph: "ánder" },
    { en: "over", es: "por encima de", ph: "óuver" },
    { en: "between", es: "entre (dos)", ph: "bituín" },
    { en: "among", es: "entre (varios)", ph: "amáng" },
    { en: "behind", es: "detrás de", ph: "bijáind" },
    { en: "in front of", es: "delante de", ph: "in front of" },
    { en: "next to", es: "al lado de", ph: "next tu" },
    { en: "near", es: "cerca de", ph: "níar" },
    { en: "far from", es: "lejos de", ph: "far from" },
    { en: "inside", es: "adentro", ph: "insáid" },
    { en: "outside", es: "afuera", ph: "autsáid" },
    { en: "above", es: "arriba de", ph: "abóv" },
    { en: "below", es: "abajo de", ph: "bilóu" }
  ],
  "Movimiento / dirección": [
    { en: "to", es: "hacia / a", ph: "tu" },
    { en: "from", es: "desde / de", ph: "from" },
    { en: "into", es: "hacia adentro de", ph: "íntu" },
    { en: "onto", es: "hacia encima de", ph: "óntu" },
    { en: "out of", es: "fuera de", ph: "áut of" },
    { en: "through", es: "a través de", ph: "zru" },
    { en: "across", es: "a través de / cruzando", ph: "acrós" },
    { en: "up", es: "hacia arriba", ph: "ap" },
    { en: "down", es: "hacia abajo", ph: "dáun" },
    { en: "along", es: "a lo largo de", ph: "alóng" },
    { en: "toward", es: "hacia", ph: "tuórd" }
  ],
  "Tiempo": [
    { en: "before", es: "antes de", ph: "bifór" },
    { en: "after", es: "después de", ph: "áfter" },
    { en: "during", es: "durante", ph: "diúring" },
    { en: "since", es: "desde", ph: "sins" },
    { en: "until", es: "hasta", ph: "antíl" },
    { en: "for", es: "por / durante", ph: "for" },
    { en: "by", es: "para (una fecha límite)", ph: "bai" }
  ],
  "Otras": [
    { en: "with", es: "con", ph: "uíz" },
    { en: "without", es: "sin", ph: "uizáut" },
    { en: "for", es: "para", ph: "for" },
    { en: "of", es: "de", ph: "of" },
    { en: "about", es: "acerca de / sobre", ph: "abáut" },
    { en: "against", es: "en contra de", ph: "aguénst" },
    { en: "like", es: "como (comparación)", ph: "láik" }
  ]
};

/* -------------------------------------------------------------------------
   ADJETIVOS
   ------------------------------------------------------------------------- */
const ADJETIVOS = {
  "Tamaño": [
    { en: "big", es: "grande", ph: "big" },
    { en: "small", es: "pequeño", ph: "smol" },
    { en: "tall", es: "alto", ph: "tol" },
    { en: "short", es: "bajo / corto", ph: "short" },
    { en: "long", es: "largo", ph: "long" },
    { en: "wide", es: "ancho", ph: "uáid" },
    { en: "narrow", es: "angosto", ph: "nárou" },
    { en: "heavy", es: "pesado", ph: "jévi" },
    { en: "light", es: "ligero", ph: "láit" }
  ],
  "Apariencia y estado": [
    { en: "beautiful", es: "hermoso/a", ph: "biútiful" },
    { en: "ugly", es: "feo/a", ph: "ágli" },
    { en: "new", es: "nuevo", ph: "niú" },
    { en: "old", es: "viejo", ph: "óuld" },
    { en: "young", es: "joven", ph: "iáng" },
    { en: "clean", es: "limpio", ph: "clin" },
    { en: "dirty", es: "sucio", ph: "dérti" },
    { en: "full", es: "lleno", ph: "ful" },
    { en: "empty", es: "vacío", ph: "émpti" },
    { en: "dark", es: "oscuro", ph: "dark" },
    { en: "bright", es: "brillante", ph: "bráit" }
  ],
  "Personalidad y emociones": [
    { en: "happy", es: "feliz", ph: "jápi" },
    { en: "sad", es: "triste", ph: "sad" },
    { en: "angry", es: "enojado", ph: "ángri" },
    { en: "kind", es: "amable", ph: "káind" },
    { en: "friendly", es: "amistoso", ph: "fréndli" },
    { en: "shy", es: "tímido", ph: "shái" },
    { en: "brave", es: "valiente", ph: "bréiv" },
    { en: "smart", es: "inteligente", ph: "smart" },
    { en: "funny", es: "gracioso", ph: "fáni" },
    { en: "boring", es: "aburrido", ph: "bóring" },
    { en: "tired", es: "cansado", ph: "táird" },
    { en: "worried", es: "preocupado", ph: "uárrid" }
  ],
  "Cualidades generales": [
    { en: "good", es: "bueno", ph: "gud" },
    { en: "bad", es: "malo", ph: "bad" },
    { en: "easy", es: "fácil", ph: "ísi" },
    { en: "difficult", es: "difícil", ph: "díficolt" },
    { en: "expensive", es: "caro", ph: "expénsiv" },
    { en: "cheap", es: "barato", ph: "chip" },
    { en: "fast", es: "rápido", ph: "fast" },
    { en: "slow", es: "lento", ph: "slóu" },
    { en: "strong", es: "fuerte", ph: "strong" },
    { en: "weak", es: "débil", ph: "uík" },
    { en: "hot", es: "caliente", ph: "jat" },
    { en: "cold", es: "frío", ph: "kóuld" },
    { en: "soft", es: "suave", ph: "soft" },
    { en: "hard", es: "duro / difícil", ph: "jard" },
    { en: "quiet", es: "callado", ph: "kuáiet" },
    { en: "loud", es: "ruidoso", ph: "láud" },
    { en: "rich", es: "rico", ph: "rich" },
    { en: "poor", es: "pobre", ph: "púer" }
  ]
};

/* -------------------------------------------------------------------------
   ADVERBIOS
   ------------------------------------------------------------------------- */
const ADVERBIOS = {
  "De modo": [
    { en: "quickly", es: "rápidamente", ph: "kuíkli" },
    { en: "slowly", es: "lentamente", ph: "slóuli" },
    { en: "well", es: "bien", ph: "uél" },
    { en: "badly", es: "mal", ph: "bádli" },
    { en: "carefully", es: "con cuidado", ph: "kérfuli" },
    { en: "easily", es: "fácilmente", ph: "ísili" },
    { en: "loudly", es: "en voz alta", ph: "láudli" },
    { en: "quietly", es: "en silencio", ph: "kuáietli" }
  ],
  "De frecuencia": [
    { en: "always", es: "siempre", ph: "ólueis" },
    { en: "usually", es: "usualmente", ph: "iúshuali" },
    { en: "often", es: "frecuentemente", ph: "ófen" },
    { en: "sometimes", es: "a veces", ph: "sámtaims" },
    { en: "rarely", es: "raramente", ph: "réarli" },
    { en: "never", es: "nunca", ph: "néver" }
  ],
  "De tiempo": [
    { en: "today", es: "hoy", ph: "tudéi" },
    { en: "tomorrow", es: "mañana", ph: "tumórrou" },
    { en: "yesterday", es: "ayer", ph: "iésterdei" },
    { en: "now", es: "ahora", ph: "náu" },
    { en: "later", es: "más tarde", ph: "léiter" },
    { en: "soon", es: "pronto", ph: "sun" },
    { en: "already", es: "ya", ph: "olrédi" },
    { en: "still", es: "todavía", ph: "stil" },
    { en: "yet", es: "todavía / aún (negativo)", ph: "iét" }
  ],
  "De lugar": [
    { en: "here", es: "aquí", ph: "jíar" },
    { en: "there", es: "ahí / allí", ph: "déar" },
    { en: "everywhere", es: "en todas partes", ph: "évriuer" },
    { en: "nowhere", es: "en ningún lugar", ph: "nóu-uer" }
  ],
  "De grado / intensidad": [
    { en: "very", es: "muy", ph: "véri" },
    { en: "too", es: "demasiado", ph: "tu" },
    { en: "also", es: "también", ph: "ólsou" },
    { en: "almost", es: "casi", ph: "ólmoust" },
    { en: "only", es: "solo / solamente", ph: "óunli" },
    { en: "just", es: "apenas / justo", ph: "yast" },
    { en: "really", es: "de verdad", ph: "ríali" },
    { en: "maybe", es: "quizás", ph: "méibi" },
    { en: "probably", es: "probablemente", ph: "prábabli" },
    { en: "again", es: "de nuevo", ph: "aguén" }
  ]
};

/* -------------------------------------------------------------------------
   SUSTANTIVOS (organizados por tema)
   Cada sustantivo trae singular + plural para poder usarse en Artículos
   y en el Constructor de frases. "v" = empieza con sonido de vocal (para a/an)
   ------------------------------------------------------------------------- */
const SUSTANTIVOS = {
  "Familia y personas": [
    { en: "man", pl: "men", es: "hombre", esPl: "hombres", ph: "man", phPl: "men", v: false, genero: "m" },
    { en: "woman", pl: "women", es: "mujer", esPl: "mujeres", ph: "wúman", phPl: "wímen", v: false, genero: "f" },
    { en: "child", pl: "children", es: "niño/a", esPl: "niños/as", ph: "cháild", phPl: "chíldren", v: false, genero: "m" },
    { en: "friend", pl: "friends", es: "amigo/a", esPl: "amigos/as", ph: "frend", phPl: "frends", v: false, genero: "m" },
    { en: "mother", pl: "mothers", es: "madre", esPl: "madres", ph: "máder", phPl: "máders", v: false, genero: "f" },
    { en: "father", pl: "fathers", es: "padre", esPl: "padres", ph: "fáder", phPl: "fáders", v: false, genero: "m" },
    { en: "brother", pl: "brothers", es: "hermano", esPl: "hermanos", ph: "bráder", phPl: "bráders", v: false, genero: "m" },
    { en: "sister", pl: "sisters", es: "hermana", esPl: "hermanas", ph: "síster", phPl: "físters", v: false, genero: "f" },
    { en: "baby", pl: "babies", es: "bebé", esPl: "bebés", ph: "béibi", phPl: "béibis", v: false, genero: "m" },
    { en: "teacher", pl: "teachers", es: "maestro/a", esPl: "maestros/as", ph: "tícher", phPl: "tíchers", v: false, genero: "m" },
    { en: "student", pl: "students", es: "estudiante", esPl: "estudiantes", ph: "stiúdent", phPl: "stiúdents", v: false, genero: "m" },
    { en: "neighbor", pl: "neighbors", es: "vecino/a", esPl: "vecinos/as", ph: "néibor", phPl: "néibors", v: false, genero: "m" }
  ],
  "Casa y hogar": [
    { en: "house", pl: "houses", es: "casa", esPl: "casas", ph: "jáus", phPl: "jáusis", v: false, genero: "f" },
    { en: "room", pl: "rooms", es: "cuarto", esPl: "cuartos", ph: "rum", phPl: "rums", v: false, genero: "m" },
    { en: "table", pl: "tables", es: "mesa", esPl: "mesas", ph: "téibol", phPl: "téibols", v: false, genero: "f" },
    { en: "chair", pl: "chairs", es: "silla", esPl: "sillas", ph: "chéar", phPl: "chéars", v: false, genero: "f" },
    { en: "bed", pl: "beds", es: "cama", esPl: "camas", ph: "bed", phPl: "beds", v: false, genero: "f" },
    { en: "door", pl: "doors", es: "puerta", esPl: "puertas", ph: "dor", phPl: "dors", v: false, genero: "f" },
    { en: "window", pl: "windows", es: "ventana", esPl: "ventanas", ph: "uíndou", phPl: "uíndous", v: false, genero: "f" },
    { en: "kitchen", pl: "kitchens", es: "cocina", esPl: "cocinas", ph: "kítchen", phPl: "kítchens", v: false, genero: "f" },
    { en: "key", pl: "keys", es: "llave", esPl: "llaves", ph: "ki", phPl: "kis", v: false, genero: "f" },
    { en: "lamp", pl: "lamps", es: "lámpara", esPl: "lámparas", ph: "lamp", phPl: "lamps", v: false, genero: "f" }
  ],
  "Comida y bebida": [
    { en: "apple", pl: "apples", es: "manzana", esPl: "manzanas", ph: "ápel", phPl: "ápels", v: true, genero: "f" },
    { en: "egg", pl: "eggs", es: "huevo", esPl: "huevos", ph: "eg", phPl: "egs", v: true, genero: "m" },
    { en: "bread", pl: "breads", es: "pan", esPl: "panes", ph: "bred", phPl: "breds", v: false, genero: "m" },
    { en: "sandwich", pl: "sandwiches", es: "sándwich", esPl: "sándwiches", ph: "sánduich", phPl: "sánduiches", v: false, genero: "m" },
    { en: "coffee", pl: "coffees", es: "café", esPl: "cafés", ph: "cófi", phPl: "cófis", v: false, genero: "m" },
    { en: "food", pl: null, es: "comida", esPl: null, ph: "fud", phPl: null, v: false, unc: true, genero: "f" },
    { en: "water", pl: null, es: "agua", esPl: null, ph: "uáter", phPl: null, v: false, unc: true, genero: "f" },
    { en: "rice", pl: null, es: "arroz", esPl: null, ph: "ráis", phPl: null, v: false, unc: true, genero: "m" },
    { en: "cheese", pl: null, es: "queso", esPl: null, ph: "chis", phPl: null, v: false, unc: true, genero: "m" },
    { en: "orange", pl: "oranges", es: "naranja", esPl: "naranjas", ph: "óranch", phPl: "óranches", v: true, genero: "f" }
  ],
  "Ciudad y transporte": [
    { en: "car", pl: "cars", es: "carro", esPl: "carros", ph: "kar", phPl: "kars", v: false, genero: "m" },
    { en: "bus", pl: "buses", es: "autobús", esPl: "autobuses", ph: "bas", phPl: "básis", v: false, genero: "m" },
    { en: "street", pl: "streets", es: "calle", esPl: "calles", ph: "strit", phPl: "strits", v: false, genero: "f" },
    { en: "city", pl: "cities", es: "ciudad", esPl: "ciudades", ph: "síti", phPl: "sítis", v: false, genero: "f" },
    { en: "school", pl: "schools", es: "escuela", esPl: "escuelas", ph: "skul", phPl: "skuls", v: false, genero: "f" },
    { en: "hospital", pl: "hospitals", es: "hospital", esPl: "hospitales", ph: "jóspital", phPl: "jóspitals", v: false, genero: "m" },
    { en: "store", pl: "stores", es: "tienda", esPl: "tiendas", ph: "stor", phPl: "stors", v: false, genero: "f" },
    { en: "park", pl: "parks", es: "parque", esPl: "parques", ph: "park", phPl: "parks", v: false, genero: "m" },
    { en: "airport", pl: "airports", es: "aeropuerto", esPl: "aeropuertos", ph: "érport", phPl: "érports", v: true, genero: "m" },
    { en: "bridge", pl: "bridges", es: "puente", esPl: "puentes", ph: "bridch", phPl: "brídches", v: false, genero: "m" }
  ],
  "Trabajo y tecnología": [
    { en: "job", pl: "jobs", es: "trabajo", esPl: "trabajos", ph: "yab", phPl: "yabs", v: false, genero: "m" },
    { en: "office", pl: "offices", es: "oficina", esPl: "oficinas", ph: "áfis", phPl: "áfisis", v: true, genero: "f" },
    { en: "computer", pl: "computers", es: "computadora", esPl: "computadoras", ph: "compiúter", phPl: "compiúters", v: false, genero: "f" },
    { en: "phone", pl: "phones", es: "teléfono", esPl: "teléfonos", ph: "fóun", phPl: "fóuns", v: false, genero: "m" },
    { en: "email", pl: "emails", es: "correo electrónico", esPl: "correos", ph: "ímeil", phPl: "ímeils", v: true, genero: "m" },
    { en: "meeting", pl: "meetings", es: "reunión", esPl: "reuniones", ph: "míting", phPl: "mítings", v: false, genero: "f" },
    { en: "money", pl: null, es: "dinero", esPl: null, ph: "máni", phPl: null, v: false, unc: true, genero: "m" },
    { en: "idea", pl: "ideas", es: "idea", esPl: "ideas", ph: "aidía", phPl: "aidías", v: true, genero: "f" },
    { en: "internet", pl: null, es: "internet", esPl: null, ph: "ínternet", phPl: null, v: true, unc: true, genero: "m" }
  ],
  "Naturaleza y clima": [
    { en: "sun", pl: null, es: "sol", esPl: null, ph: "san", phPl: null, v: false, unc: true, genero: "m" },
    { en: "moon", pl: null, es: "luna", esPl: null, ph: "mun", phPl: null, v: false, unc: true, genero: "f" },
    { en: "tree", pl: "trees", es: "árbol", esPl: "árboles", ph: "tri", phPl: "tris", v: false, genero: "m" },
    { en: "flower", pl: "flowers", es: "flor", esPl: "flores", ph: "fláuer", phPl: "fláuers", v: false, genero: "f" },
    { en: "river", pl: "rivers", es: "río", esPl: "ríos", ph: "ríver", phPl: "rívers", v: false, genero: "m" },
    { en: "mountain", pl: "mountains", es: "montaña", esPl: "montañas", ph: "máunten", phPl: "máuntens", v: false, genero: "f" },
    { en: "rain", pl: null, es: "lluvia", esPl: null, ph: "réin", phPl: null, v: false, unc: true, genero: "f" },
    { en: "animal", pl: "animals", es: "animal", esPl: "animales", ph: "ánimol", phPl: "ánimols", v: true, genero: "m" },
    { en: "dog", pl: "dogs", es: "perro", esPl: "perros", ph: "dog", phPl: "dogs", v: false, genero: "m" },
    { en: "cat", pl: "cats", es: "gato", esPl: "gatos", ph: "kat", phPl: "kats", v: false, genero: "m" }
  ],
  "Tiempo y abstracto": [
    { en: "day", pl: "days", es: "día", esPl: "días", ph: "déi", phPl: "déis", v: false, genero: "m" },
    { en: "week", pl: "weeks", es: "semana", esPl: "semanas", ph: "uík", phPl: "uíks", v: false, genero: "f" },
    { en: "month", pl: "months", es: "mes", esPl: "meses", ph: "manz", phPl: "manzs", v: false, genero: "m" },
    { en: "year", pl: "years", es: "año", esPl: "años", ph: "yíar", phPl: "yíars", v: false, genero: "m" },
    { en: "time", pl: null, es: "tiempo", esPl: null, ph: "táim", phPl: null, v: false, unc: true, genero: "m" },
    { en: "life", pl: "lives", es: "vida", esPl: "vidas", ph: "láif", phPl: "láivs", v: false, genero: "f" },
    { en: "problem", pl: "problems", es: "problema", esPl: "problemas", ph: "práblem", phPl: "práblems", v: false, genero: "m" },
    { en: "question", pl: "questions", es: "pregunta", esPl: "preguntas", ph: "cuéschon", phPl: "cuéschons", v: false, genero: "f" },
    { en: "book", pl: "books", es: "libro", esPl: "libros", ph: "buk", phPl: "buks", v: false, genero: "m" }
  ]
};

/* -------------------------------------------------------------------------
   ARTÍCULOS INDEFINIDOS (un / una / unos / unas → a / an / some)
   Se construyen automáticamente a partir de SUSTANTIVOS para poder
   mostrar decenas de ejemplos ordenados como pidió el usuario.
   ------------------------------------------------------------------------- */
function construirArticulos() {
  const un = [], una = [], unos = [], unas = [];
  const todas = Object.entries(SUSTANTIVOS).flatMap(([, arr]) => arr);
  todas.forEach((s) => {
    const genero = s.genero === "f" ? "f" : "m";
    const articleWord = s.v ? "an" : "a";

    // "un" / "una": solo para sustantivos contables (los incontables no
    // suelen llevar a/an: no decimos "a money", decimos "some money").
    if (!s.unc) {
      const singularEntry = {
        es: (genero === "m" ? "un " : "una ") + s.es,
        en: `${articleWord} ${s.en}`,
        ph: `${s.v ? "an" : "e"} ${s.ph}`
      };
      (genero === "m" ? un : una).push(singularEntry);
    }

    // "unos" / "unas": plural contable, o "algo de" para incontables
    if (s.pl) {
      const pluralEntry = {
        es: (genero === "m" ? "unos " : "unas ") + s.esPl,
        en: `some ${s.pl}`,
        ph: `sam ${s.phPl}`
      };
      (genero === "m" ? unos : unas).push(pluralEntry);
    } else if (s.unc) {
      const pluralEntry = {
        es: "algo de " + s.es,
        en: `some ${s.en}`,
        ph: `sam ${s.ph}`
      };
      (genero === "m" ? unos : unas).push(pluralEntry);
    }
  });
  return {
    "un (a / an)": un,
    "una (a / an)": una,
    "unos (some)": unos,
    "unas (some)": unas
  };
}
const ARTICULOS = construirArticulos();

/* -------------------------------------------------------------------------
   VERBOS — datos crudos en inglés y español para el motor de conjugación
   (el motor real vive en conjugator.js)
   ------------------------------------------------------------------------- */
const VERBOS = [
  {
    id: "be", es: "ser / estar", especial: true,
    en: { base: "be", ph: "bi" }
  },
  {
    id: "have", es: "tener",
    en: { base: "have", third: "has", past: "had", pp: "had", ger: "having",
          ph: { base: "jav", third: "jas", past: "jad", ger: "jáving" } },
    esV: { inf: "tener", tipo: "er",
      presente: ["tengo","tienes","tiene","tenemos","tenéis","tienen"],
      preterito: ["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],
      futuroStem: "tendr", gerundio: "teniendo" }
  },
  {
    id: "do", es: "hacer",
    en: { base: "do", third: "does", past: "did", pp: "done", ger: "doing",
          ph: { base: "du", third: "das", past: "did", ger: "dúing" } },
    esV: { inf: "hacer", tipo: "er",
      presente: ["hago","haces","hace","hacemos","hacéis","hacen"],
      preterito: ["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],
      futuroStem: "har", gerundio: "haciendo" }
  },
  {
    id: "go", es: "ir",
    en: { base: "go", third: "goes", past: "went", pp: "gone", ger: "going",
          ph: { base: "góu", third: "góus", past: "uént", ger: "góuing" } },
    esV: { inf: "ir", tipo: "ir",
      presente: ["voy","vas","va","vamos","vais","van"],
      preterito: ["fui","fuiste","fue","fuimos","fuisteis","fueron"],
      futuroStem: null, gerundio: "yendo" }
  },
  {
    id: "want", es: "querer",
    en: { base: "want", third: "wants", past: "wanted", pp: "wanted", ger: "wanting",
          ph: { base: "uánt", third: "uánts", past: "uánted", ger: "uánting" } },
    esV: { inf: "querer", tipo: "er",
      presente: ["quiero","quieres","quiere","queremos","queréis","quieren"],
      preterito: ["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],
      futuroStem: "querr", gerundio: "queriendo" }
  },
  {
    id: "eat", es: "comer",
    en: { base: "eat", third: "eats", past: "ate", pp: "eaten", ger: "eating",
          ph: { base: "iit", third: "iits", past: "éit", ger: "íiting" } },
    esV: { inf: "comer", tipo: "er",
      presente: null, preterito: null, futuroStem: null, gerundio: "comiendo" }
  },
  {
    id: "make", es: "hacer / fabricar",
    en: { base: "make", third: "makes", past: "made", pp: "made", ger: "making",
          ph: { base: "méik", third: "méiks", past: "méid", ger: "méiking" } },
    esV: { inf: "hacer", tipo: "er",
      presente: ["hago","haces","hace","hacemos","hacéis","hacen"],
      preterito: ["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],
      futuroStem: "har", gerundio: "haciendo" }
  },
  {
    id: "get", es: "obtener / conseguir",
    en: { base: "get", third: "gets", past: "got", pp: "gotten", ger: "getting",
          ph: { base: "guét", third: "guéts", past: "gat", ger: "guéting" } },
    esV: { inf: "obtener", tipo: "er",
      presente: ["obtengo","obtienes","obtiene","obtenemos","obtenéis","obtienen"],
      preterito: ["obtuve","obtuviste","obtuvo","obtuvimos","obtuvisteis","obtuvieron"],
      futuroStem: "obtendr", gerundio: "obteniendo" }
  },
  {
    id: "see", es: "ver",
    en: { base: "see", third: "sees", past: "saw", pp: "seen", ger: "seeing",
          ph: { base: "sii", third: "siis", past: "so", ger: "síing" } },
    esV: { inf: "ver", tipo: "er",
      presente: ["veo","ves","ve","vemos","veis","ven"],
      preterito: ["vi","viste","vio","vimos","visteis","vieron"],
      futuroStem: null, gerundio: "viendo" }
  },
  {
    id: "come", es: "venir",
    en: { base: "come", third: "comes", past: "came", pp: "come", ger: "coming",
          ph: { base: "cam", third: "cams", past: "kéim", ger: "cáming" } },
    esV: { inf: "venir", tipo: "ir",
      presente: ["vengo","vienes","viene","venimos","venís","vienen"],
      preterito: ["vine","viniste","vino","vinimos","vinisteis","vinieron"],
      futuroStem: "vendr", gerundio: "viniendo" }
  },
  {
    id: "take", es: "tomar",
    en: { base: "take", third: "takes", past: "took", pp: "taken", ger: "taking",
          ph: { base: "téik", third: "téiks", past: "tuk", ger: "téiking" } },
    esV: { inf: "tomar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "tomando" }
  },
  {
    id: "give", es: "dar",
    en: { base: "give", third: "gives", past: "gave", pp: "given", ger: "giving",
          ph: { base: "guiv", third: "guivs", past: "guéiv", ger: "guíving" } },
    esV: { inf: "dar", tipo: "ar",
      presente: ["doy","das","da","damos","dais","dan"],
      preterito: ["di","diste","dio","dimos","disteis","dieron"],
      futuroStem: null, gerundio: "dando" }
  },
  {
    id: "know", es: "saber / conocer",
    en: { base: "know", third: "knows", past: "knew", pp: "known", ger: "knowing",
          ph: { base: "nóu", third: "nóus", past: "niú", ger: "nóuing" } },
    esV: { inf: "saber", tipo: "er",
      presente: ["sé","sabes","sabe","sabemos","sabéis","saben"],
      preterito: ["supe","supiste","supo","supimos","supisteis","supieron"],
      futuroStem: "sabr", gerundio: "sabiendo" }
  },
  {
    id: "think", es: "pensar",
    en: { base: "think", third: "thinks", past: "thought", pp: "thought", ger: "thinking",
          ph: { base: "zink", third: "zinks", past: "zot", ger: "zínking" } },
    esV: { inf: "pensar", tipo: "ar",
      presente: ["pienso","piensas","piensa","pensamos","pensáis","piensan"],
      preterito: null, futuroStem: null, gerundio: "pensando" }
  },
  {
    id: "say", es: "decir",
    en: { base: "say", third: "says", past: "said", pp: "said", ger: "saying",
          ph: { base: "séi", third: "ses", past: "sed", ger: "séiing" } },
    esV: { inf: "decir", tipo: "ir",
      presente: ["digo","dices","dice","decimos","decís","dicen"],
      preterito: ["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],
      futuroStem: "dir", gerundio: "diciendo" }
  },
  {
    id: "work", es: "trabajar",
    en: { base: "work", third: "works", past: "worked", pp: "worked", ger: "working",
          ph: { base: "uérk", third: "uérks", past: "uérkt", ger: "uérking" } },
    esV: { inf: "trabajar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "trabajando" }
  },
  {
    id: "play", es: "jugar",
    en: { base: "play", third: "plays", past: "played", pp: "played", ger: "playing",
          ph: { base: "pléi", third: "pléis", past: "pléid", ger: "pléiing" } },
    esV: { inf: "jugar", tipo: "ar",
      presente: ["juego","juegas","juega","jugamos","jugáis","juegan"],
      preterito: ["jugué","jugaste","jugó","jugamos","jugasteis","jugaron"],
      futuroStem: null, gerundio: "jugando" }
  },
  {
    id: "study", es: "estudiar",
    en: { base: "study", third: "studies", past: "studied", pp: "studied", ger: "studying",
          ph: { base: "stádi", third: "stádis", past: "stádid", ger: "stádiing" } },
    esV: { inf: "estudiar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "estudiando" }
  },
  {
    id: "live", es: "vivir",
    en: { base: "live", third: "lives", past: "lived", pp: "lived", ger: "living",
          ph: { base: "liv", third: "livs", past: "livd", ger: "líving" } },
    esV: { inf: "vivir", tipo: "ir",
      presente: null, preterito: null, futuroStem: null, gerundio: "viviendo" }
  },
  {
    id: "need", es: "necesitar",
    en: { base: "need", third: "needs", past: "needed", pp: "needed", ger: "needing",
          ph: { base: "niid", third: "niids", past: "níded", ger: "níding" } },
    esV: { inf: "necesitar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "necesitando" }
  },
  {
    id: "like", es: "gustar",
    en: { base: "like", third: "likes", past: "liked", pp: "liked", ger: "liking",
          ph: { base: "láik", third: "láiks", past: "láikt", ger: "láiking" } },
    esV: { inf: "gustar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "gustando" }
  },
  {
    id: "love", es: "amar",
    en: { base: "love", third: "loves", past: "loved", pp: "loved", ger: "loving",
          ph: { base: "lav", third: "lavs", past: "lavd", ger: "láving" } },
    esV: { inf: "amar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "amando" }
  },
  {
    id: "speak", es: "hablar",
    en: { base: "speak", third: "speaks", past: "spoke", pp: "spoken", ger: "speaking",
          ph: { base: "spíik", third: "spíiks", past: "spóuk", ger: "spíiking" } },
    esV: { inf: "hablar", tipo: "ar",
      presente: null, preterito: null, futuroStem: null, gerundio: "hablando" }
  },
  {
    id: "write", es: "escribir",
    en: { base: "write", third: "writes", past: "wrote", pp: "written", ger: "writing",
          ph: { base: "ráit", third: "ráits", past: "róut", ger: "ráiting" } },
    esV: { inf: "escribir", tipo: "ir",
      presente: null, preterito: null, futuroStem: null, gerundio: "escribiendo" }
  },
  {
    id: "read", es: "leer",
    en: { base: "read", third: "reads", past: "read*", pp: "read*", ger: "reading",
          ph: { base: "ríid", third: "ríids", past: "red", ger: "ríiding" } },
    esV: { inf: "leer", tipo: "er",
      presente: null, preterito: ["leí","leíste","leyó","leímos","leísteis","leyeron"],
      futuroStem: null, gerundio: "leyendo" }
  }
];

/* Traducción explicativa de "read" en pasado: se escribe igual pero se
   pronuncia distinto ("red" en vez de "ríid"). Se marca con * en el dato. */

/* -------------------------------------------------------------------------
   Etiquetas de persona compartidas por el motor de conjugación
   ------------------------------------------------------------------------- */
const PERSONAS = [
  { es: "yo", en: "I", ph: "ai" },
  { es: "tú", en: "you", ph: "iu" },
  { es: "él / ella", en: "he / she", ph: "ji / shi" },
  { es: "nosotros", en: "we", ph: "uí" },
  { es: "ustedes / vosotros", en: "you", ph: "iu" },
  { es: "ellos / ellas", en: "they", ph: "déi" }
];
