const opciones = {
  // recibe la configuracion de parametros
  base: {
    demand: true,
    // --base -b
    alias: 'b'
  },
  // agregar el limite
  limite: {
    alias: 'l',
    // Si no tiene valor entonces default 
    default: 10
  }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opciones )
                .command('crear', 'Crea un archivo con la tabla de Multiplicar', opciones ) 
                .help() 
                .argv;

module.exports = {
  argv
}