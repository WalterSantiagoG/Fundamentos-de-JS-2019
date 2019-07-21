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

for (let i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}