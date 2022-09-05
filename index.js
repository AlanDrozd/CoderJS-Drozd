alert ("Coderhourse 2022 - Entrega 1 - Alan Drozd");
alert ("Para visualizar este sitio por favor ingresa: \nUsuario: coder \nClave: house");
    
let usuario = prompt("Ingrese Usuario: ");

while (usuario != "coder"){
    alert("Ingresaste el usuario: " + usuario + ", ese usuario es incorrecto." + "\n Por favor intenta nuevamente!");
    usuario= prompt("Para avanzar ingresa el siguiente usuario: coder");
}
    
let password = prompt("Ingrese clave: ");

while (password != "house"){
    alert("Ingresaste la clave: " + password + ", esa clave es incorrecta." + "\n Por favor intenta nuevamente!");
    password= prompt("Para avanzar ingresa la siguiente clave: house");
}

alert ("Por ultimo quisieramos saber tu edad.");

let edad =prompt("Por favor ingresa tu edad:");

if (edad >17) {
    alert("Ingresaste: " + edad + " años. Bienvenido a nuestro sitio!");
    } else {
    alert("Por favor en caso de concretar una compra, consultalo antes con un adulto.")
}

// function Productos(nombre, importe) {
//     this.nombre = nombre;
//     this.importe = importe;
// }

// const polerinYaro = new Productos('Polerin Yaro Negro', 3790);
// const poleronDeanCrudo = new Productos('Poleron Dean Crudo', 8990);
// const jeanJacob = new Productos('Jean Jacob', 8990);
// const poleronDeanNegro = new Productos('Poleron Dean Negro', 8990);

alert ("Coderhourse 2022 - Entrega 3 - Alan Drozd")

const Stock = []

class Product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    showProduct(){
        return this.name;
    }
}

Stock.push (new Product('Polerin Yaro Negro', 3790));
Stock.push (new Product('Poleron Dean Crudo', 8990));
Stock.push (new Product('Jean Jacob', 7990));
Stock.push (new Product('Poleron Dean Negro', 6990));

let nombre = prompt("Hola! Antes de continuar, podrias decirnos tu nombre?");
let saludo = alert (nombre + ", bienvenido a nuestra tienda!");
let pedido = prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + Stock[0].name + " $" + Stock[0].price + "\n" + "2- " + Stock[1].name + " $" + Stock[1].price + "\n" + "3- " + Stock[2].name + " $" + Stock[2].price + "\n" + "4- " + Stock[3].name + " $" + Stock[3].price + "\n");
let cantidad = prompt("Cuantos queres comprar?");

switch (pedido) {
    case pedido:
        alert("Seleccionaste: " + Stock[pedido-1].name + ", el total de tu pedido es de $" + Stock[pedido-1].price * cantidad);
    break;
    // case "2":
    //     alert("Seleccionaste: " + Stock[pedido-1].name + ", el total de tu pedido es de $" + Stock[pedido-1].price * cantidad);
    // break;
    // case "3":
    //     alert("Seleccionaste: " + Stock[pedido-1].name + ", el total de tu pedido es de $" + Stock[pedido-1].price * cantidad);
    // break;
    // case "4":
    //     alert("Seleccionaste: " + Stock[3].name + ", el total de tu pedido es de $" + Stock[3].price * cantidad);
    // break;
    default:
        alert("No contamos con ese producto");
}

// if (pedido == 1) {
//     alert("Seleccionaste: " + polerinYaro.nombre + ", el total de tu pedido es de $" + polerinYaro.importe * cantidad);
//     } else if (pedido == 2) {
//     alert("Seleccionaste: " + poleronDeanCrudo.nombre + ", el total de tu pedido es de $" + poleronDeanCrudo.importe * cantidad);
//     } else if (pedido == 3) {
//     alert("Seleccionaste: " + jeanJacob.nombre + ", el total de tu pedido es de $" + jeanJacob.importe * cantidad);
//     } else if (pedido == 4) {    
//     alert("Seleccionaste: " + poleronDeanNegro.nombre + ", el total de tu pedido es de $" + poleronDeanNegro.importe * cantidad);
//     } else {
//     alert("No contamos con ese producto");
//     }       

alert("Gracias por elegirnos. Seguinos en redes sociales para encontrar descuentos!")