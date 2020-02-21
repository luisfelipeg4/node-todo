const optionsListar = {
    
}
const optionsCrear = {
    descripcion: {
        demand:true,
        alias: 'd'
    }
}
const optionsActualizar = {
    descripcion: {
        alias: 'd'
    },
    completado:{
        alias :'c',
        default:true
    }
}
const optionsBorrar = {
    descripcion: {
        demand:true,
        alias: 'd'
    }
}
// Requireds 
const argv = require('yargs')
    .command('listar', 'Listar las tareas ', optionsListar)
    .command('crear', 'Crea una nueva tarea en pendiente', optionsCrear)
    .command('actualizar', 'actualizar el estado de una tarea ', optionsActualizar)
    .command('borrar', 'borrar una tarea ', optionsBorrar)
        .help().argv;

module.exports={argv}