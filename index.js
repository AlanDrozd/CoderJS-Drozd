let nombre = prompt("Hola! Antes de continuar, podrias decirnos tu nombre?");
let saludo = alert (nombre + ", bienvenido a nuestra tienda!");

const stock = []

class Product {
    constructor (id, name, price, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;        
    }
    showProduct(){
        return this.name;
    }
}

stock.push (new Product(1, 'Polerin Yaro', 3790, 'Ropa'));
stock.push (new Product(2, 'Poleron Dean', 8990, 'Ropa'));
stock.push (new Product(3, 'Jean Jacob', 5490, 'Ropa'));
stock.push (new Product(4, 'Poleron Kam', 6990, 'Ropa'));
stock.push (new Product(5, 'Kit Male Grooming', 5890, 'MakeUp'))
stock.push (new Product(6, 'Mascara en gel', 1520, 'MakeUp'))
stock.push (new Product(7, 'Primer Filler', 1290, 'MakeUp'))
stock.push (new Product(8, 'Corrector Liquido', 1290, 'MakeUp'))



let categoria = parseInt(prompt("Por favor elegi una categoria: \n 1- Ropa \n 2- Makeup"));

function validarEleccion(){
    while(categoria != "1" && categoria != "2"){
        categoria = parseInt(prompt("Por favor elegi una categoria entre las disponibles: \n 1- Ropa \n 2- Makeup"));
    } 
}

validarEleccion();

const ropa = stock.filter(categoria => categoria.category == 'Ropa');
const makeUp = stock.filter(categoria => categoria.category == 'MakeUp');

if (categoria == 1) {
    var items = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + ropa[0].name + " $" + ropa[0].price + "\n" + "2- " + ropa[1].name + " $" + ropa[1].price + "\n" + "3- " + ropa[2].name + " $" + ropa[2].price + "\n" + "4- " + ropa[3].name + " $" + ropa[3].price + "\n"));
    while(items < 1 || items > 4 || isNaN(items)){
        items = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + ropa[0].name + " $" + ropa[0].price + "\n" + "2- " + ropa[1].name + " $" + ropa[1].price + "\n" + "3- " + ropa[2].name + " $" + ropa[2].price + "\n" + "4- " + ropa[3].name + " $" + ropa[3].price + "\n"));
    }
} else {
    var items = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "5- " + makeUp[0].name + " $" + makeUp[0].price + "\n" + "6- " + makeUp[1].name + " $" + makeUp[1].price + "\n" + "7- " + makeUp[2].name + " $" + makeUp[2].price + "\n" + "8- " + makeUp[3].name + " $" + makeUp[3].price + "\n"));
    while(items < 5 || items > 8 || isNaN(items)){
        items = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "5- " + makeUp[0].name + " $" + makeUp[0].price + "\n" + "6- " + makeUp[1].name + " $" + makeUp[1].price + "\n" + "7- " + makeUp[2].name + " $" + makeUp[2].price + "\n" + "8- " + makeUp[3].name + " $" + makeUp[3].price + "\n"));
    }

}
let itemSelected = stock.find(item => item.id == items);

let cantidad = parseInt(prompt("Elegiste " + itemSelected.name + ". Cuantos queres comprar?"));

let masIVA = (itemSelected.price * cantidad) * 1.21;

alert("Seleccionaste " + cantidad +" unidades del producto: " + itemSelected.name + " por un total de: $" +(cantidad * itemSelected.price + ". Y un total de $" + masIVA.toFixed(2) + " con impuestos."));

alert("Gracias por tu compra " + nombre + ". Seguinos en redes sociales para encontrar descuentos!");