var walter = {
    nombre: 'Walter',
    apellido: 'Santiago',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    dj: false,
    pianista: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if(persona.ingeniero){
        console.log('Ingeniero')
    }

    if(persona.cocinero){
        console.log('Cocinero')
    }else{
        console.log('No es cocinero')
    }

    if(persona.dj){
        console.log('Dj')
    }

    if(persona.pianista){
        console.log('Pianista')
    }
}

const MAYORIA_DE_EDAD = 18 // Una constante es un valor de tipo permanente, ya que no puede modificarse

//Asignar a una variable/constante una funcion anonima
//const esMayorDeEdad = function (persona){
//    return persona.edad >= MAYORIA_DE_EDAD
//}

//Otra forma de realizar lo que está arriba comentado, Array Functions
//const esMayorDeEdad = (persona) => {
//    return persona.edad >= MAYORIA_DE_EDAD
//}

//Podemos seguir quitando caracteres si solo tiene un parametro
//Si una funcion lo unico que hace es retornar algo JS nos permite escribilo de la siguiente manera
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//Si lo unico que nos importa es la edad de la persona, podemos desestructurar el parametro
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad `)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('¡Acceso denegado!')
    }
}

imprimirSiEsMayorDeEdad(walter)