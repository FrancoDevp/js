let envioGratis = 1500;
alert("Si su compra es de $1500 o mas, ¡el envio es gratis!");
let valor = prompt("Ingrese el valor de su compra total aqui: ");
if (valor >= 1500) {
    console.log("¡Usted ha recibido envio gratis en su compra!");
    alert("¡Usted ha recibido envio gratis en su compra!");
} else {
    (valor < 1500);
    alert("su compra no ha superado los $1500.");
}
let usuario = prompt("Ingrese su usuario: ");
let contraseña = prompt("Ingrese su contraseña: ");
if ((usuario == "") && (contraseña == "")) {
    alert("no has ingresado nada.");
}
if ((usuario == "franco") && (contraseña == "****")) {
    alert("Tu usuario es: " + usuario + "\nTu contraseña es: " + contraseña)
} else {
    alert("tu usuario o contraseña son incorrectas.");
}
