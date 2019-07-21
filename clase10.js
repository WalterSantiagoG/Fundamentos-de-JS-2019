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

imprimirProfesiones(walter)