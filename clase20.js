var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 80
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Martinez',
    altura: 1.80,
    cantidadDeLibros: 90
}

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    altura: 1.85,
    cantidadDeLibros: 100
}

var personas = [vicky, pedro, juan]

const pasarAlturaACms =  persona  => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

//var acum = 0

//for (var i = 0; i < personas.length; i++) {
//    acum = acum + personas[i].cantidadDeLibros
//}

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reducer,0)

console.log(`En total todos tienes ${totalDeLibros} libros`)