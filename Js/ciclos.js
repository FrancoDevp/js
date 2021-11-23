alert("Haz entrado a un concurso de adivinar un numero, si ganas, ganaras un ¡premio!");
let numero = prompt("Ingrese un numero del 1 al 10.")
let numerosIngresados = "";
while (numero != 7){
    alert("El numero (" + numero + ")  no es el numero ganador");
    numerosIngresados += numero + ",";
    numero = prompt("Ingrese otro numero")
}
alert("Haz ganado el numero sorteado, el numero que ingresaste es el: " + numero + "\nTus intentos han sido estos: " +  numerosIngresados.substring(0, numerosIngresados.length - 1) + ".");

