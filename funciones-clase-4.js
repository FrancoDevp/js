let compra = Number(prompt("Ingrese el valor de su compra para calcular en 3, 6, 9, 12 cuotas."))

let cuota = 3;
let envio = 200;
while (cuota <= 12){
    console.log("en " + cuota + " cuotas de " + compra/cuota);
    alert("en " + cuota + " cuotas de " + "$" + compra/cuota +" sin interes.");
    cuota += 3;
}
alert("Si usted desea el envio, tiene un costo de $200")
resultado = Number(prompt("ingrese el valor de la cuota que haya elegido."))
alert("El pago total de su compra en cuotas mas el envio: $" + (resultado + envio))