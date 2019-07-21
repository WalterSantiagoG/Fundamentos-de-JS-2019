var walter = {
    nombre: 'Walter',
    apellido: 'Santiago',
    edad: 28,
    peso:75
}

console.log(`Al inicio del año ${walter.nombre} pesa ${walter.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        //Aumenta de peso
        aumentarDePeso(walter)
    }else if (random < 0.5) {
        //Adeldazar
        adelgazar(walter)
    }
}

console.log(`Al final del año ${walter.nombre} pesa ${walter.peso.toFixed(1)} kg`)