// type referrence
let nama = "Luthfi Ahmad";
nama = "Sigma";
// type annotation
let age = 17;
console.log(nama);
console.log(age);
// ====================//=======================//
// TIPE DATA
// ___:boolean = true
// ___:number = 16
// ___:string = "Wikrama"
// UNION
// :id = string | number;
// LITERAL
// ___: "success" | "failure";
// ARRAY
// tipe data array
let numbers = [1, 2, 3, 4, 5];
let hobbies = ['sedekah', 'mengaji'];
// tipe data array tuple
let person = ["Ahmad", 17];
let userId = "ABD123";
let postId = 12345;
let user1 = {
    id: 1,
    name: "Ahmad",
    isLegal: true
};
// ====================//=======================//
// UNKNOWN TYPE
// unknown lebih aman daripada any
// karena unknown tidak bisa diakses langsung, harus dicek dulu tipe datanya
let someValue = "Hellooo Typescript!";
// console.log(someValue.length); error
if (typeof someValue === 'string') {
    console.log(someValue.length);
}
// console.log((<string>someValue).length);
// console.log((someValue as string).length);
// ====================//=======================//
// FUNCTION
// ? : parameter opsional
function greet(name, age) {
    if (age) {
        return `Hello ${name}, you are ${age} years old`;
    }
    return `Hello ${name}`;
}
console.log(greet("Andi"));
// function with parameter default
function greet2(name = "Budi") {
    return "Hello, " + name;
}
console.log(greet2());
//=====================//=====================//
// VOID dan NEVER
// void : dipakai saat fungsi tidak mengembalikan nilai
function logMessage(message) {
    console.log(message);
}
// NEVER
// fungsi kita tidak pernah berakhir
function throwError(message) {
    throw new Error(message);
}
// FUNCTION CALLBACK
function processData(data, callback) {
    data.forEach(callback);
}
function logItem(item, index) {
    console.log(`Data No.${index + 1}, dengan nama ${item}`);
}
processData(["abdul", "siti", "dewi", "agus"], logItem);
//=====================//=====================//
// OOP : Object Oriented Programming
class Mobil {
    merk;
    price;
    constructor(merk, price) {
        this.merk = merk;
        this.price = price;
    }
    sewaMobil() {
        console.log(`Mobil dengan merk: ${this.merk}, telah disewa dengan harga: Rp.${this.price.toLocaleString("id-ID")}`);
    }
}
const mobil1 = new Mobil("Avanza", 200000);
mobil1.sewaMobil();
// inheritance
// class yang mewarisi disebut subclass, sedangkan class yang diwarisi disebut superclass
class MobilEv extends Mobil {
    warranty;
    constructor(merk, price, warranty) {
        super(merk, price);
        this.warranty = warranty;
    }
    sewaMobilEv() {
        super.sewaMobil();
        console.log(`Plus warranty: ${this.warranty}`);
    }
}
const mobil2 = new MobilEv("BYD", 230000, "1 Bulan");
mobil2.sewaMobilEv();
// PUBLIC, PRIVATE, PROTECTED, READONLY :
// public : bisa diakses dari mana saja
// private : hanya bisa diakses dari class itu sendiri
// protected : hanya bisa diakses dari class itu sendiri dan subclassnya
// readonly : hanya bisa diakses dari class itu sendiri dan subclassnya, tapi tidak bisa diubah nilainya
// shorthand initialization : mempersingkat penulisan property, jadi si property ditulis di constructor
class Product {
    name;
    price;
    // ini shorthand, |modifiers|property|tipeData 
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product : ${this.name}, Price : ${this.price}`);
    }
}
const produk1 = new Product("Handphone", 20000);
produk1.displayProduct();
//=====================//=====================//
// Setters dan Getters
// Setters : digunakan untuk mengubah nilai property
// Getters : digunakan untuk mengambil nilai property
class Person {
    _age;
    constructor(_age) {
        this._age = _age;
    }
    get age() {
        return `User Age : ${this._age} Years Old`;
    }
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
        else {
            console.log("Age invalid");
        }
    }
}
const person1 = new Person(17);
console.log(person1.age);
person1.age = -1;
const unitSatu = {
    brand: "Samsung",
    sistemOperasi: "Android",
    price: 100000
};
const smartSatu = {
    brand: "Xiaomi",
    sistemOperasi: "Android",
    price: 20000,
    ram: 16
};
const insigUser = {
    "Budi": 90,
    "Mboed": 90,
    "Agus": 90,
};
const add = (a, b) => a + b;
console.log(add(10, 9));
// GENERIC pada FUNCTION
// generic ditandai dengan : <T>, T : placeholder, bebas diisi huruf apa aja
function GenericFunction(value) {
    return value;
}
console.log(GenericFunction("Hello Generic"));
console.log(GenericFunction(1945));
// atau otomatis di deteksi oleh typescript
console.log(GenericFunction("Automatic"));
export {};
//# sourceMappingURL=main.js.map