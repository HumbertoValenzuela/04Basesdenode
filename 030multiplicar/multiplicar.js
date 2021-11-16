const fs = require('fs');
var colors = require('colors');

// importar la tabla de multiplicar, en concreto crearArchivo en 030Importararchivosdenuestroproyecto

const helperMultiplicando = (base, limite, opciones) => {

  let ctm = '';

  for (let i = 1; i <= limite; i++) { 

    const element = base * i ;

    if (opciones === 'listar') {
      console.log( `${base} * ${i} = ${element}`); 
    } else if( opciones === 'crear') {
      ctm += `${base} * ${i} = ${element}\n`;
    }
        
  }    
   return ctm;
}

let listarTabla = ( base, limite = 10, opciones ) => {

  console.log('====================='.green);
  console.log(`====tabla del ${base}====`.green);
  console.log('====================='.green);
  return helperMultiplicando(base, limite, opciones); 
}

let crearArchivo = ( base, limite = 10, opciones ) => {

  return new Promise( ( resolve, reject ) => {

    if ( !Number( base ) ) {
      reject(`El valor ${base}, no es un número`);
      return;
    }
     
    const data = helperMultiplicando( base, limite, opciones );
  
    fs.writeFile(`tablamultiplicar/tabla-${base}-al-${limite}.txt`, data, (err) => {

      if (err) 
        reject(err) ;
      else 
        // El resolve esta esperando el nombre del archivo
        resolve(`tabla-${base}-al-${limite}`);      
      // console.log(`El archivo tabla-${base} ha sido creado`);
    });
  });
}

// existe un objeto que se llama module para exportar la función
module.exports = {
  // crearArchivo: crearArchivo
  crearArchivo,
  listarTabla
}