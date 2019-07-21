var walter = {
    nombre: 'Walter',
    apellido: 'Santiago',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(walter)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'pepito'})