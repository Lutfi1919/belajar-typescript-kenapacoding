// type referrence
let nama = "Luthfi Ahmad";
nama = "Sigma"

// type annotation : menentukan tipe data dari sebuah variable pake titik dua (:)
let age: number = 17

console.log(nama);
console.log(age);


// ====================//=======================//


// TIPE DATA
// ___:boolean = true
// ___:number = 16
// ___:string = "Wikrama"

// UNION : bisa memilih lebih dari satu tipe data
// :id = string | number;

// LITERAL : value nya fix
// ___: "success" | "failure";  -> ini sebenernya gabungan antara union dam literal karena pake "|"

// ARRAY
// tipe data array
let numbers: number[] = [1,2,3,4,5]
let hobbies: string[] = ['sedekah', 'mengaji']

// tipe data array tuple
let person: [string, number] = ["Ahmad", 17]


// ====================//=======================//


// TYPE ALIASSES
type ID = string | number;

let userId: ID = "ABD123"
let postId: ID = 12345

type dataUser = {
    id: number,
    name: string,
    isLegal: boolean
}

let user1: dataUser = {
    id: 1,
    name: "Ahmad",
    isLegal: true
}


// ====================//=======================//


// UNKNOWN TYPE
// unknown lebih aman daripada any
// karena unknown tidak bisa diakses langsung, harus dicek dulu tipe datanya
let someValue: unknown = "Hellooo Typescript!"

// console.log(someValue.length); error

if (typeof someValue === 'string') {
    console.log(someValue.length);
}

// console.log((<string>someValue).length);
// console.log((someValue as string).length);


// ====================//=======================//


// ENUM
enum statusCode {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

let responseCode: statusCode = statusCode.Success
console.log(responseCode);


// ====================//=======================//


// FUNCTION
                             // ? : parameter opsional
function greet(name: string, age?: number): string {
    if (age) {
        return  `Hello ${name}, you are ${age} years old`
    }
    return `Hello ${name}`
}
console.log(greet("Andi"));


// function with parameter default
function greet2(name: string = "Budi"): string {
    return "Hello, " + name;
}
console.log(greet2());


//=====================//=====================//


// VOID dan NEVER
// void : dipakai saat fungsi tidak mengembalikan nilai
function logMessage(message: string): void {
    console.log(message);
}

// NEVER
// fungsi kita tidak pernah berakhir
function throwError(message: string): never {
    throw new Error(message)
}


// FUNCTION CALLBACK
function processData(data: string[], callback: (item: string, index: number) => void): void {
    data.forEach(callback)
}

function logItem(item: string, index: number): void {
    console.log(`Data No.${index + 1}, dengan nama ${item}`);
}

processData(["abdul", "siti", "dewi", "agus"], logItem)


//=====================//=====================//


// OOP : Object Oriented Programming
class Mobil {
    merk: string;
    price: number;
    

    constructor(merk: string, price: number) {
        this.merk = merk;
        this.price = price;
    }

    sewaMobil(): void {
        console.log(`Mobil dengan merk: ${this.merk}, telah disewa dengan harga: Rp.${this.price.toLocaleString("id-ID")}`);
    }
}

const mobil1 = new Mobil("Avanza", 200000)
mobil1.sewaMobil()

// inheritance
// class yang mewarisi disebut subclass, sedangkan class yang diwarisi disebut superclass
class MobilEv extends Mobil {
    warranty: string;

    constructor(merk: string, price: number, warranty: string) {
        super(merk, price)
        this.warranty = warranty
    }

    sewaMobilEv(): void {
        super.sewaMobil();
        console.log(`Plus warranty: ${this.warranty}`);
    }
}
const mobil2 = new MobilEv("BYD", 230000, "1 Bulan");
mobil2.sewaMobilEv()

// PUBLIC, PRIVATE, PROTECTED, READONLY :
// public : bisa diakses dari mana saja
// private : hanya bisa diakses dari class itu sendiri
// protected : hanya bisa diakses dari class itu sendiri dan subclassnya
// readonly : hanya bisa diakses dari class itu sendiri dan subclassnya, tapi tidak bisa diubah nilainya


// shorthand initialization : mempersingkat penulisan property, jadi si property ditulis di constructor
class Product {

                // ini shorthand, |modifiers|property|tipeData 
    constructor(public name: string, public price: number) {
        this.name = name
        this.price = price
    }

    public displayProduct(): void {
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
    private _age: number

    constructor(_age: number) {
        this._age = _age
    }

    get age(): string {
        return `User Age : ${this._age} Years Old`
    }

    set age(newAge: number) {
        if (newAge > 0) {
            this._age = newAge
        } else {
            console.log("Age invalid");
        }
    }
}

const person1 = new Person(17);
console.log(person1.age);

person1.age = -1


//=====================//=====================//


// INTERFACE
interface Phone {
    brand: string
    sistemOperasi: "Android" | "iOS"
    price: number
}

const unitSatu: Phone = {
    brand: "Samsung",
    sistemOperasi: "Android",
    price: 100000
}

// INTERFACE INHERITENCE
interface Smartphone extends Phone {
    ram: number
}

const smartSatu: Smartphone = {
    brand: "Xiaomi",
    sistemOperasi: "Android",
    price: 20000,
    ram: 16
}

// INDEX SIGNATURE
// index signature : digunakan untuk membuat objek dengan property yang dinamis
interface StudentScoreByName {
    // ini dinamis
    [name: string]: number
}

const insigUser: StudentScoreByName = {
    "Budi": 90,
    "Mboed": 90,
    "Agus": 90,
}

// INTERFACE FUNCTION
// ini biasa di pake di arrow function
interface MathFunction {
    (a: number, b: number): number
}

const add: MathFunction = (a, b) => a + b
console.log(add(10, 9));


// GENERIC pada FUNCTION
// generic ditandai dengan : <T>, T : placeholder, bebas diisi huruf apa aja
function GenericFunction<T>(value: T): T {
    return value;
}

console.log(GenericFunction<string>("Hello Generic"));
console.log(GenericFunction<number>(1945));
// atau otomatis di deteksi oleh typescript
console.log(GenericFunction("Automatic"));

// GENERIC pada CLASS
class GenericClass<T> {

    constructor(public content: T) {
        this.content = content
    }

    getContent(): T {
        return this.content;
    }
}

let numberContent = new GenericClass<number>(123);
console.log(numberContent.getContent());

let stringContent = new GenericClass<string>("Hello String");
console.log(stringContent.getContent());

// GENERIC pada INTERFACE
interface GenericInterface<T, U> {
    name: T,
    age: U
}

const Orang: GenericInterface<string, number> = {
    name: "Budi",
    age: 19
}
