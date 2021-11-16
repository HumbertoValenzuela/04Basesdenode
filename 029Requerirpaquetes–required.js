// 029 Requerir paquetes – required
// https://nodejs.org/es/docs/
// node --version 
// https://nodejs.org/dist/latest-v16.x/docs/api/
// Buscar en la página File System.
// Se quiere grabar en un archivo de texto mi tabla de multiplicar
// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#file-system
const fs = require('fs');

let base = 5;
let data = '';
for (let i = 1; i <= 10; i++) {
  const element = base * i ;
  // console.log(`${base} * ${i} = ${element}`);
  // data es el Contenido que se quiere grabar
  data += `${base} * ${i} = ${element}\n`;
}

// Guardarlos en una carpeta y con el nombre.txt.
// callback (err) es cuando no puede realizar la tarea
fs.writeFile(`tablamultiplicar/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base} ha sido creado`);
});

