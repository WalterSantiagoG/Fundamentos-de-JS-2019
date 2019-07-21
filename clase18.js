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

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log('Personas altas')
console.log(personasAltas)
console.log('Personas bajas')
console.log(personasBajas)