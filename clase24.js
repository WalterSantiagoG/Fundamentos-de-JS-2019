function heredaDe(prototipoHijo, protoripoPadre) {
    var fn = function () {}
    fn.prototype = protoripoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

//var walter = new Persona('Walter', 'Santiago', 1.90)
//var miguel = new Persona('Miguel', 'Jimenez', 1.50)
//var karen = new Persona('Karen', 'Perez', 1.30)
