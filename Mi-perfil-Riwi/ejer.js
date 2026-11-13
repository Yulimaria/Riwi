const etiquetaSucia =["javascript", "tailwind", "html", "css", "javascript", "html"]
const etiquetaLimpia = new Set(etiquetaSucia);

console.log(etiquetaLimpia);

const usuario1 ={ id: 1, nombre: "Yuliana"};
const usuario2 ={ id: 2, nombre: "Yuliana"};

const sesionesActivas = new Map();
sesionesActivas.set(usuario1, {sesion1: "sesion1", ultimoAcceso: "2024-06-01"});
console.log(sesionesActivas.get(usuario1));
