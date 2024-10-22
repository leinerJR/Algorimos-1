let num = parseInt(prompt("ingrese el valor del producto"))
let num2 = parseInt(prompt("ingrese el descuento del producto"))

let valor = num2 / 100
let mult = num * valor
let resul = num - mult

//mostrar resultados
document.write(num, "</br>")
document.write(valor,"</br>")
document.write(mult, "</br>")
document.write(resul, "</br>")