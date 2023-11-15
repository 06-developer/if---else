// Function - davomi, turlari.

// Hoisting - javascript dasturlash tilini hususiyati o'zgaruvchi qayerda e'lon qilinishidan qat'iy nazar, o'zgaruvchidagi kodni boshiga chiqazib qo'yish xususiyatiga ega. Hoisting faqatgina o'zgaruvchi e'lon qilinganni yuqoriga ko'taradi.

// var son = 12;
// console.log(son);

// console.log(son);
// var son = 12; // Bunda aslida error chiqishi kerak edi. Ammo javascript buni oldini olgan va "undefined" qo'shimchasi chiqib keladi.

// Eslatma : Hoistingda "var" - o'zgaruvchini declair xususiyatini yuqoriga ko'taradi.

// Function decloration - Bunda ham o'zgaruvchini "var" ga o'xshab tepada e'lon qila olamiz. Expressionda esa buni iloji yo'q "error" beradi.

 // Bunda usulda esa error bermaydi.
// sayHi();
// function sayHi() {
//   console.log("Hello");
// }
// Function expression - Bunda ham "function" ishlatiladi. Faqat "funtion" ni oldidan kalit so'z yozilmaydi va shunchaki () belgi qo'yiladi.

// Misol uchun:
// let sayHi = function(){
//     console.log("Hello");
// }
// sayHi();

// sayHi();
// let sayHi = function (){
//     console.log("Hello");
// } // Bu holatda "error" beradi. Xuddi let va const ga o'xshab error beradi.

// Function arrow - 2015 => ES6 versiyada chiqqan. Bu function ni yozishda ">" va "=" belgidan foydalaniladi.

// let sayHi = () => {
//     console.log("Hello");
// }
// sayHi();
// sayHi();
// let sayHi = () => {
//     console.log("Hello");
// } 
// Bu holatda "expression" ga o'xshab "error" beradi. Xuddi let va const ga o'xshab.

// Arrow function ga return qo'llash

// let sayHi = () => {
//     return "hello"
// }
// let result = sayHi();
// console.log(result); // Return qo'llash.

// let sayHi = () => "Hello"
// let result = sayHi();
// console.log(result); // Arrow function da "return" ning qisqartmasi, farqi bitta qatorda yozib ketsa bo'ladi. "{}" qavsning keragi yo'q.

// "Objects" - non primitive turdagi ma'lumot hisoblanadi. "Key" va "value" tashkil topgan ma'lumot turi. Object da kodning qatori tugadimi "," belgisi qo'yib ketiladi.

// Misol uchun:
// let person = {
// name: "John",
// age: 30,
// job: "Developer",
// };
// console.log(person); // Shu tarzda yoziladi.

// Accesing - "murojaat qilish" yaratilgan objectni ichidan papkani olib olish. Bunda 2 xil usuldan foydalaniladi.
// 1.
// let person = {
//     name: "John",
//     age: 30,
//     job: "Developer",
//     };
//     console.log(person.job);

// 2.
// Objectda 1 tadan ko'proq bo'lgan holatda ishlatilinadigan kod.
// let person = {
//     name: "John",
//     age: 30,
//     job: "Developer",
//     "kuzining rangi": "ko'k", // Ikki va undan ortiq key yasalsa "" o'rash kerak
//     };
//     console.log(person["kuzining rangi"]); // Bu holatda "." qo'yilmaydi error beradi. "[]" qavs va uning ichida "" yoziladi.

// Deleting - console bilan o'chirilmaydigan kodlarni o'chiradi.

// let person = {
//         name: "John",
//         age: 30,
//         job: "Developer",
//         "kuzining rangi": "ko'k",
//         };
//         console.log(person);
//         delete person["kuzining rangi"];
//         console.log(person);

// In - yaratilgan objectni ichida biror-bir key yoki value ni qidirish uchun ishlatiladi.

// let person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
//   "kuzining rangi": "ko'k",
// };
// console.log("age" in person);

// Loop (for - in) ishlatish.

// let person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
//   "kuzining rangi": "ko'k",
// };

// 1. 
// for(let key  in person){
//     console.log(key);
// }

// 2.
// for(let key  in person){
//     console.log(person[key]);
// }

//   HOMEWORK

// 1.

// let person = {
//   name: "John",
//   age: 30,
//   job: "Developer",
//   "kuzining rangi": "ko'k",
// };
// person.name = "Pett";
// console.log(person);

// 2.

// let menu = {
//     window: 200,
//     height: 300,
//     title: "My menu"
// };
// for(item in menu ){
//     if(typeof menu[item] === "number") menu[item] = menu[item] * 2;
// }
// console.log(menu);