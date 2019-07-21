function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var walter = new Persona('Walter', 'Santiago', 1.90)
var miguel = new Persona('Miguel', 'Jimenez', 1.50)
var karen = new Persona('Karen', 'Perez', 1.30)

walter.soyAlto()
miguel.soyAlto()
karen.soyAlto()