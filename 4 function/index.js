//! Function

//? 1. Function decloration
// function sayHi() {
//     alert("Hello world");
// } // Mana shu tarzda function e'lon qilinadi. Ammo brauzer oynasida ishlamaydi, Ishlashi uchun:
// sayHi(); // Mana shu  operator yoziladi, ishlashi uchun. Ya'ni function operatorini yonidan yozilgan class name yoziladi.

//? 2. Function local variable
// function sayHi() {
//     let son = 1;
// }
// sayHi();
// console.log(son);
// console.log(son); // console ni function dan tashqarida e'lon qila olmaymiz. Xato beradi, shuning uchun consoleni function ichida e'lon qilish kerak.

//? 3. Function outer variable
// let son = 1;
// function showNumber(){
//     console.log(son);
// }
// showNumber(); // Function ning tashqarisida e'lon qilingan o'zgaruvchini, "Function" ni ichida e'lon qila olamaiz.

//? 4. Pitfall => xususiy holat
// let son = 1;
// function showNumber(){
//     let son = 2;
//     console.log(son);
// }
// showNumber(); // Bu yerda qanday holat bo'ladi, ya'ni tashqaridagi o'zgaruvchi birinchi console ga chiqadi. Function ichida ham o'zgaruvchi e'lon qilingan bo'lsa unda function ni ichidagi o'zgaruvchi console ga chiqadi.

//? 5. Global variable - o'zgaruvchi tashqarida e'lon qilinsa, faqat gina tashqaridagi alert ga yoki console ga berilgan o'zgaruvchi ko'rinadi. Ichkarida e'lon qilingan faqat ichkaridagi o'zgaruvchini nomini e'lon qiladi. Funksiyadan tashqarida yoki pasida e'lon qilindimi global variable deyiladi.

// let userName = 'John';
// function showMessage(){
//     let userName = "Bob"
//     let message = 'Hello, ' + userName;
//     alert(message);
// }
// showMessage();
// alert(userName);

//? 6. Parameter - () ichida yoziladi.

// function isEven(a) { // Function dan keyin biror-bir nom beriladi () ichida o'zgaruvchi nomini e'lon qilinadi.
// console.log(a);
// }
// isEven(5); // Bu yerda function dan keyin yozilgan nom beriladi va uni ichida () - qiymat beiladi.

//? 7. Default value - o'zini ismi bilan chaqiradigan funksiya yaratsa bo'ladi.

// function sayHi(name){
//     console.log(`Hello ${name}`);
// }
// sayHi(); // Shu holatda ichiga hech qanday nom yoki so'z yozilmasa 'John' o'rnida 'indifined' type paydo bo'ladi.

// function sayHi(name = "user"){ // shunda name ni yonidan stringda qiymat berib ketiladi.
//     console.log(`Hello ${name}`);
// }
// sayHi();

//? 8. Argument - function yonidan yozilgan nomni pastda bersak ya'ni qiymat bersak mana shu argument deyiladi.

// function sayHi(name){
//     console.log(`Hello ${name}`);
// }
// sayHi('John'); // Mana shu holat argument deyiladi.

// 9. Return - funksiyadan qiymat qaytarish va return dan keyin yozilgan kod ishlamaydi.

// function sayHi(name){
//     console.log(`Hello ${name}`);
// }
// let result = sayHi("John");
// console.log("Natija:", result); // bu holatda hech qanday qiymat qaytmaydi.

// function sayHi(name){
//     console.log(`Hello ${name}`);
//     return "John"; // Return yozganimizda undefinied qaytamaydi, returnga nima yozilganda o'sha qiymat qaytadi.
// }
// let result = sayHi("John");
// console.log("Natija:", result);

//         HOMEWORK

// 1. Kvadratga oshiirsh
// function NumberPow(num){
// return Math.pow(num,2)
// }
// NumberPow();
// console.log(NumberPow(9));

// 2. Kubga oshirish
// function NumberPow(num){
//     return Math.pow(num,3)
//     }
//     NumberPow();
//     console.log(NumberPow(3));

// 3. 4 ga oshirish
// function NumberPow(num){
//     return Math.pow(num,4)
//     }
//     NumberPow();
//     console.log(NumberPow(3));

// 4.
// function makeNegative(number) {
//   if (number > 0) {
//     return -number;
//   }
//   return number;
// }
// console.log(makeNegative(82));
// console.log(makeNegative(-3));
// console.log(makeNegative(0));

// 5.
// function heroSurvives(bullets, dragons) {
//     return bullets >= dragons * 2;
//   }

//   console.log(heroSurvives(10, 5));
//   console.log(heroSurvives(5, 10));

// 6.
// function mango(quantity, pricePerMango) {
//   const totalCost = quantity * pricePerMango;
//   const eligibleMangoes = Math.floor(quantity / 3);
//   const discount = eligibleMangoes * pricePerMango;
//   const finalCost = totalCost - discount;
//   return finalCost;
// }
// console.log(mango(2, 3));
// console.log(mango(3, 3));
