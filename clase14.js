var walter = {
    nombre: 'Walter',
    apellido: 'Santiago',
    edad: 28,
    peso:75
}

console.log(`Al inicio del año ${walter.nombre} pesa ${walter.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = walter.peso - 3
var dias = 0

while (walter.peso > META) {
    
    if (comeMucho()) {
        //aumentarDePeso
        aumentarDePeso(walter)
    }
    if (realizaDeporte()) {
        //adelgazar
        adelgazar(walter)
    }
    dias++
}

console.log(`Pasaron ${dias} hasta que ${walter.nombre} adelgazó 3kg`)