/* necesito crear una funcion generarVentas y que esta me devuelva un arrelo. */

function generarVentas(n) {
    /* crear un arreglo vacio donde se almacenen las venta*/
    let ventas = [];

    /* ciclo for donde se crea un ciclo que se repite 5 veces y que se almacene en el arreglo ventas */
    for (let i = 0; i < n; i++) {

        /* se crea un objeto donde se almacenan los datos de la venta */
        let venta = [
            {
                id: 1,
                nombreProducto: "pepino",
                ciudad: "medellin",
                cantidad: 0
            },

            {
                id: 2,
                nombreProducto: "tomate",
                ciudad: "bogota",
                cantidad: 2
            },

            {
                id: 3,
                nombreProducto: "lechuga",
                ciudad: "cali",
                cantidad: 3
            },

            {
                id: 4,
                nombreProducto: "queso",
                ciudad: "medellin",
                cantidad: 4
            },

            {
                id: 5,
                nombreProducto: "granola",
                ciudad: "Armenia",
                cantidad: 5
            }
        ]
 ventas.push(venta);
        return ventas;
    };
}

console.log(generarVentas()[2].precio);
