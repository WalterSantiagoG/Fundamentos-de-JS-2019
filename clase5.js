var nombre = 'Walter' //Variable global

function imprimirNombreEnMayusculas(n){ //Si colocamos nombre como parametro, no podemos acceder a la varible nombre global a menos que coloquemos window.nombre, porque al llamar nombre dentro de la funcion nos estariamos refiriendo a la variable local y no a la global
  // Asignar una variable local
  n = n.toUpperCase()
  console.log(n)
}

imprimirNombreEnMayusculas(nombre)
console.log(nombre)
//console.log(n) n es una variable local de la funcion imprimirNombreEnMayusculas no se puede acceder fuera de esta funcion