var x = 4, y = '4'

var walter = {
    nombre: 'Walter'
}

//var otraPersona = {
//    nombre: 'Walter'
//}

//var otraPersona = walter //Apuntamos a la misma ref de variable que apunta walter, al mismo lugar de memoria de la computadora

var otraPersona = {
    ...walter
}