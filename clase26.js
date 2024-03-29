class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre,apellido,altura)
    }

    saludar(fn){
        //var nombre = this.nombre
        //var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log('Ah mirá, no sabía que eres desarrollador/a')
    }
}

var walter = new Desarrollador('Walter', 'Santiago', 1.90)
var miguel = new Persona('Miguel', 'Jimenez', 1.50)
var karen = new Persona('Karen', 'Perez', 1.30)

walter.saludar(responderSaludo)
miguel.saludar(responderSaludo)
karen.saludar()