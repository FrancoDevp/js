class PlanesMobiles {
 constructor (pack3, pack5, pack8, pack15) {
    this.pack3 = pack3;
    this.pack5 = pack5;
    this.pack8 = pack8;
    this.pack15 = pack15;
  }
    mensajePrecio(){
      console.log(planElegido)
    switch (planElegido) {
      case "pack3": {
        alert("Este plan tiene el costo de $" + this.pack3)
      } break;
      case "pack5": {
        alert("Este plan tiene el costo de $" + this.pack5)
      } break;
      case "pack8": {
        alert("Este plan tiene el costo de $" + this.pack8)
      } break;
      case "pack15": {
        alert("Este plan tiene el costo de $" + this.pack15)
      } break;
    }
    alert("Nuestra pagina esta en desarollo. Gracias por elegir MoviSpace!")
 }
}
let planesMobiles1 = new PlanesMobiles (350, 650, 1150,1850);
console.log(planesMobiles1);
alert("Bienvenido a ¡MoviSpace!")
let planElegido = prompt("Tenemos todos tipos de planes, elige el que mas te guste: \n3Gb - 5Gb - 8Gb - 15Gb.\nEj: pack3.")
planesMobiles1.mensajePrecio();