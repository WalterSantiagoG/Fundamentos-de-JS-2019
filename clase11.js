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

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad `)
    }
  }

imprimirSiEsMayorDeEdad(walter)