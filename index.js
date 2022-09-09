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

stock.push (new Product(1, 'Polerin Yaro Negro', 3790, 'Ropa'));
stock.push (new Product(2, 'Poleron Dean Crudo', 8990, 'Ropa'));
stock.push (new Product(3, 'Jean Jacob', 5490, 'Ropa'));
stock.push (new Product(4, 'Poleron Dean Negro', 6990, 'Ropa'));
stock.push (new Product(5, 'Kit Male Grooming', 5890, 'MakeUp'))
stock.push (new Product(6, 'Mascara en gel', 1520, 'MakeUp'))
stock.push (new Product(7, 'Primer Filler', 1290, 'MakeUp'))
stock.push (new Product(8, 'Corrector Liquido', 1290, 'MakeUp'))

let nombre = prompt("Hola! Antes de continuar, podrias decirnos tu nombre?");
let saludo = alert (nombre + ", bienvenido a nuestra tienda!");
let sector = prompt("Por favor, selecciona una categoria:" + "\n" + "1- " + stock[0].category + "\n" + "2- " + stock[4].category) 

let ropa =0;

if (sector == 1){
    ropa = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + stock[0].name + " $" + stock[0].price + "\n" + "2- " + stock[1].name + " $" + stock[1].price + "\n" + "3- " + stock[2].name + " $" + stock[2].price + "\n" + "4- " + stock[3].name + " $" + stock[3].price + "\n"))+1
    }   else{
    ropa = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + stock[4].name + " $" + stock[4].price + "\n" + "2- " + stock[5].name + " $" + stock[5].price + "\n" + "3- " + stock[6].name + " $" + stock[6].price + "\n" + "4- " + stock[7].name + " $" + stock[7].price + "\n"))+3
}

let cantidad = Number(prompt("Elegiste " + stock[ropa].name + ". Cuantos queres comprar?"));

alert("Seleccionaste " + cantidad +" unidades del producto: " + stock[ropa].name + " por un total de: $" +(cantidad * stock[ropa].price ))

alert("Gracias por elegirnos. Seguinos en redes sociales para encontrar descuentos!")