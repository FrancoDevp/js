let compra = Number(prompt("Ingrese el valor de su compra para calcular en 3, 6, 9, 12 cuotas."))
let cuota = 3;
while (cuota <= 12){
    console.log("en " + cuota + " cuotas de " + compra/cuota);
    alert("en " + cuota + " cuotas de " + "$" + compra/cuota + " sin interes.");
    cuota += 3;
}
