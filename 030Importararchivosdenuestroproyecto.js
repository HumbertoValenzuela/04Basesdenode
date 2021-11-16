// 030 Importar archivos de nuestro proyecto
// En el archivo app.js o los archivos bases de nuestras aplicaciones
// deben ser simples, es decir, no tiene que tener exceso de lógica

// Crear un archivo aparte que se encargue de trabajar la lógica
// module es un objeto global que esta disponible a lo largo de toda la aplicación
// console.log( module);
// Module {
//   id: '.',
//   path: 'C:\\htmlCSSJavaScript\\NodeJS\\04Basesdenode',
//   exports: {}, Lugar donde se coloca objetos para que sean trabajados de forma global
//   filename: 'C:\\htmlCSSJavaScript\\NodeJS\\04Basesdenode\\030Importararchivosdenuestroproyecto.js',
//   loaded: false,
//   children: [],
//   paths: [
//     'C:\\htmlCSSJavaScript\\NodeJS\\04Basesdenode\\node_modules',
//     'C:\\htmlCSSJavaScript\\NodeJS\\node_modules',
//     'C:\\htmlCSSJavaScript\\node_modules',
//     'C:\\node_modules'
//   ]
// }

// const multiplicar = require('./030multiplicar/multiplicar');
// El objeto multiplicar tiene una propiedad llamada crearArchivo
// console.log( multiplicar ); // { crearArchivo: [Function: crearArchivo] }

const argv = require('./config/yargs').argv; 
const  colors = require('colors');

// desestructurar
const { crearArchivo, listarTabla } = require('./030multiplicar/multiplicar');

let comando = argv._[0];

switch ( comando ) {
  case 'listar':
    // console.log('listar');
    listarTabla( argv.base, argv.limite, 'listar')
      // .then( listado => console.log(`Lista creada: ${listado}`))
      // .catch( error => console.log( error));
    break;
  case 'crear':
    // console.log('crear');
    //crearArchivo( base ) //base is not defined, ya no esta en una variable
    crearArchivo( argv.base, argv.limite, 'crear' )
      .then( archivo => console.log('Archivo creado:', ` ${archivo}`.green))
      .catch( error => console.log(error));
    break;

  default:
    console.log('Comando no reconocido');
    break;
}
// console.log(argv)
// console.log( process.argv );
// let argv2 = process.argv;
// console.log('Limite', argv.limite);
// console.log(argv2);

// let parametro = argv[2];
//let base = parametro.split('=');// [ '--base', '9' ]
// let base = parametro.split('=')[1]; // 9

// console.log(base);
// crearArchivo( base )
//   .then( archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch( error => console.log(error));


  // 031 Recibir informacion desde linea de comando
  // console.log( process.argv );
  // process contiene datos relacionados al sistema operativo, el usuario que lo esta corriendo.
  // process tiene argv o argumentos. Muestra el path de este archivo
  // [
  //   'C:\\Program Files\\nodejs\\node.exe',
  //   'C:\\htmlCSSJavaScript\\NodeJS\\04Basesdenode\\030Importararchivosdenuestroproyecto.js'
  // ]
  // Cuando se ejecuta en Terminal npm install express, Cuando se realiza esta acción realmente se estan pasando parametros a la función npm (paquete) que ejecuta una instalación(parametro) con express (parametro)
  // ¿Como Enviar como parametro la base (multiplicadora) como parametro?
  // node  030Importararchivosdenuestroproyecto --base=5 a b c d e
  // cada uno de los argumentos adicionales lo recibe en el argv
  // [
  //   'C:\\Program Files\\nodejs\\node.exe',
  //   'C:\\htmlCSSJavaScript\\NodeJS\\04Basesdenode\\030Importararchivosdenuestroproyecto',
  //   '--base=5',
  //   'a',
  //   'b',
  //   'c',
  //   'd',
  //   'e'
  // ]
  // Notar que base se encuentra en el array tercera posicion de argv.
  // node  030Importararchivosdenuestroproyecto --base=9
  // Con esto se a creado el archivo tabla-9.txt
  // Estamos ejecutando la aplicación de node recibiendo parametros que son enviados desde la terminal
  // process es util cuando se despliegue la aplicación al servidor heroku
  // Es facil equivocarse al enviar parametros, pero existen paquetes que nos ayudan de una manera óptima, ademas nos ayuda a crear la documentación (llamada Yargs)
  // node --help nos muestra todas las líneas de comandos de node
  // cuando es un - significa que es un shorcut
  // node -v    o    node --version

  // 032 npm init - install - uninstall - package.json
  //El comando npm init: Guía para la creación de un archivo llamado package.json 
  // https://www.npmjs.com/package/yargs
  // npm i yargs --save
  // --save significa que es una librería necesaria para que la aplicación funcione
  // Si borramos node_modules. para reconstruir npm install siempre y cuando tenga package.json
  // instalar otra dependencia pero de desarrollo
  // npm install --save-dev nodemon
  // Para eliminar npm uninstall nodemon

  // 033 Yargs
  // Crear - con base 10 y un limite 10
  // node 030Importararchivosdenuestroproyecto crear --base 10 --limite=30
  // importar yargs
//   { _: [], '$0': '030Importararchivosdenuestroproyecto' }
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\htmlCSSJavaScript\\NodeJS\\04Basesdenode\\030Importararchivosdenuestroproyecto'
// ]

// const argv = require('yargs')
//                 .command('listar', 'Imprime en consola la tabla de multiplicar', {
//                   // recibe la configuracion de parametros
//                   base: {
//                     demand: true
//                   }
//                 })  
//                 .argv;
// 
// node  030Importararchivosdenuestroproyecto listar
// 030Importararchivosdenuestroproyecto listar

// Imprime en consola la tabla de multiplicar

// Opciones:
//   --help Muestra ayuda [booleano] 
//  --version  Muestra número de versión  [booleano]  --base 
// --base            [requerido]
// Falta argumento requerido: base
// Notar que obliga la base y el programa no corre
// node  030Importararchivosdenuestroproyecto listar --limite=20 --base 50
//  respuesta Limite 20

// node  030Importararchivosdenuestroproyecto listar --help
// Imprime en consola la tabla de multiplicar

// Opciones:
// --version  Muestra número de versión  [booleano] 
//  --help     Muestra ayuda                [booleano]  
//  --base   -b,                                  [requerido]   
//  --limite      -l,                          [defecto: 10]

// 034 Ejecutar el comando listar
// configurar el comando node 030Importararchivosdenuestroproyecto listar --base 10
// y configurar node 030Importararchivosdenuestroproyecto crear --base 10
// Donde estan los comandos? para verlo impresion de consola a argv 
//  _: [ 'listar' ] aquí estan todos los comandos que no tienen pares de valores, donde se puede agregar el listar crear borrar comer. Para acceder al array argv._[0] si existen más entonces argv._[el numero]
// Añadir switch con los comandos listar y crear
// Mover la función crearArchivo dentro del case crear y cambiar el parametro a argv.base
// multiplicar.js crear funcion listar
// crearArchivo añadir parametro listar
// Añadir en argv el .command crear

// 036 Colores de la consola
// npm install colors --save
// --save para que queda como dependencia
// Es posible cambiar el color del texto, color de fondo, estilos
// si es un string console.log('hello'.green); texto salida verde