import fs from "fs";
import path from "path";

console.log("yt-enhancer iniciado 🚀");

const input = process.argv[2];

if (!input) {
  console.log("Uso: node cli/patcher.js <archivo>");
  process.exit(1);
}

if (!fs.existsSync(input)) {
  console.log("❌ Archivo no existe");
  process.exit(1);
}

console.log("📦 Archivo recibido:", input);

// Simulación más real
const output = "patched_" + path.basename(input);

// Solo parchear si es texto
if (path.extname(input) !== ".txt") {
  console.log("⚠️ Archivo no es texto, solo se copiará");
  fs.copyFileSync(input, output);
  process.exit(0);
}

// Leer contenido real (solo texto)
let content = fs.readFileSync(input, "utf-8");

// 🔥 Patch real
content = content.replace(/YouTube/g, "YT-Enhanced");

// Guardar archivo modificado
fs.writeFileSync(output, content);

console.log("🔧 Aplicando patch...");

// Simulación de modificación
setTimeout(() => {
  console.log("✔ Archivo generado:", output);
}, 1000);
