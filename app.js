const {
    argv
} = require('./config/yargs')
const colors = require('colors')

// logica de la app
const porHacer = require('./to-do/to-do')


let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);

        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log("**********POR HACER**********".green);
            console.log(tarea.descripcion);
            console.log("Estado : ", tarea.completado);
            console.log("*********************".green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizar);
        break;

    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion)
        console.log(borrar);
        break;

    default:
        break;
}