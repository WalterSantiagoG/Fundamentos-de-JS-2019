var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var pedro = {
    nombre: 'Pedro',
    apellido: 'Martinez',
    altura: 1.80
}

var juan = {
    nombre: 'Juan',
    apellido: 'Perez',
    altura: 1.85
}

var personas = [vicky, pedro, juan]

const esAlta = ({ altura }) => altura >= 1.8
const esBaja = ({ altura }) => altura < 1.8

//persona.altura = persona.altura * 100
const pasarAlturaACms =  persona  => ({
    
    //Se agregan parentesis en las llaves para eliminar la palabra return
    ...persona,
    altura: persona.altura * 100

    //return {
    //    ...persona,
    //    altura: persona.altura * 100
    //}
})

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
