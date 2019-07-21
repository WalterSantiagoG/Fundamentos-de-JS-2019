//ejemplos con enteros
var edad
edad=23
edad += 1
var peso = 200
peso -= 1
var sandwich = 1
peso = peso + sandwich
//ejemplos con decimales
var precioDeVino = 200.3
//math nos permite redondear nuestro numero para tener un dato mas exacto
var total = Math.round (precioDeVino * 100*3)/100
//nos permite seleccionar la cantidad de decimales que queramos
var totalStr = total.toFixed(2)
// convierte de un string a un parseFloat
var total2 = parseFloat(totalStr)
//divisiones
var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona= pizza / 2