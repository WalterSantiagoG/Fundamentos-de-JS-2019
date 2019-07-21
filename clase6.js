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

//function imprimirNombreEnMayusculas(persona){
function imprimirNombreEnMayusculas({nombre}){ //Se obtiene el atributo nombre de persona
    //console.log(persona.nombre.toUpperCase())
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(walter)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'pepito'})