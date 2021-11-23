let ingresarNombre = prompt ("Ingrese su nombre");
let ingresarEdad = prompt ("Ingrese su edad");
if (ingresarNombre == "" && ingresarEdad == "") {
   console.log("Tu nombre es: " + ingresarNombre + "Tu edad es: " + ingresarEdad);
   alert("No has ingresado tu nombre y tampoco su edad.")
} else {
    alert("Tu nombre es: " + ingresarNombre + "\nTu edad es: " + ingresarEdad);
}
let n1 = Number( prompt ("Ingresa un numero para una suma"));
let n2 = Number( prompt ("Ingresa otro numero"));
let resultado = n1 + n2;
console.log("el resultado es: " + resultado);
alert("el resultado de " + n1 + " + " + n2 + " = " + resultado);