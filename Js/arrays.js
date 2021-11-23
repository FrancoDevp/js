const packs = [{id: 1, producto:"pack-3", precio:350},
                    {id: 2, producto:"pack-5", precio:650},
                    {id: 3, producto:"pack-6", precio:1150},
                    {id: 4, producto:"pack-15", precio:1850}];
const planes = packs.find(producto => producto.producto === "pack-3"); // buscamos el pack-3
const planes2 = packs.filter(producto => producto.precio < 1000); //Filtramos un plan por de bajo de $1000.
const planes3 = packs.map(producto => producto.precio * 1.21) //Agreamos IVA.
console.log(planes);
console.log(planes2);
console.log(planes3);


const samsung = [{ producto: "s10", precio: 58999 },
                 { producto: "s21", precio: 108000 },
                 { producto: "a70", precio: 72500 },
                 { producto: "a30s", precio: 38999 },
                 { producto: "note 8", precio: 101999 }];
const samsung2 = samsung.filter(item => item.precio < 100000);
samsung.sort(function (item1, item2) {
        return item1.precio - item2.precio
        });
console.log(samsung)

const personas = [{edad: "23", nombre: "franco" },
                 { edad: "15", nombre: "luciana" },
                 { edad: "38", nombre: "Ana" },
                 { edad: "52", nombre: "Camila" },
                 { edad: "31", nombre: "Vale" }];
personas.sort(function (pers1, pers2) {
return pers2.edad - pers1.edad
});
console.log(personas)

const fechas = [{ nombre: "franco", Birthday: "03/17/1990" },
                 { nombre: "Juampa", Birthday: "10/28/1997" },
                 { nombre: "Struky", Birthday: "10/28/1997" },
                 { nombre: "Camila", Birthday: "02/21/1993" },
                 { nombre: "Vale",   Birthday: "02/21/1995" }];
const dateBirthday = fechas.map(item => Date.parse(item.Birthday));
fechas.sort(function (f1, f2) {
    return Date.parse(f2.Birthday) - Date.parse(f1.Birthday)
    });
console.log(fechas)