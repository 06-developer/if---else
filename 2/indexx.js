//! 1. alert() Faqat brauzer oynasi yangilanganda yozuv chiqadi. Faqat " ok " tugmasi chiqadi.
// alert("Hello world");

//! 2. confirm() Faqat brauzer oynasi yangilanganda yozuv chiqadi. Faqat " ok " va " cancel "tugmalari chiqadi.
// confirm("Are you a student");
// let answer = confirm("Are you a student");
// /alert(answer);// "Bu qiymatda brauzer oynasi yangilansa ok yoki cancel tugmalari bosilganda "true" yoki "false" qiymatlari chiqadi. "

//! 3. prompt() Brauzer oynasi yangilanganda input chiqadi va userdan ma'lumot oladi.
// let answer = prompt("How old are you?");
// alert(answer);// Inputni ichiga biror-bir narsani yozib ok tugmasini yozsa. O'sha yozuv chiqib keladi.
// let answer = prompt("How old are you?");
// alert(`Siz kiritgan yosh: ${answer}`);// Inputni ichiga ixtiyoriy son yoki yozuv yozsak alertga kiritgan yozuvimiz, biz ok tugmasini bosganda ishga tushadi.

//If va Else 
// Conditional Statements
// Ko'pincha kod yozganingizda, siz turli xil qarorlar uchun turli xil amallarni bajarishni xohlaysiz. Buni amalga oshirish uchun kodingizda shartli iboralardan foydalanishingiz mumkin. JavaScript-da bizda quyidagi shartli bayonotlar mavjud:

// if - Belgilangan shart rost bo'lsa, bajariladigan kod blokini belgilash uchun foydalaniladi.
//else - Agar bir xil shart noto'g'ri bo'lsa, bajarilishi kerak bo'lgan kod blokini belgilash uchun foydalaniladi.

// let answer = prompt("Alisher Navoiy nechanchi yil tug'ilgan?");
// console.log(answer)// Bundagi natija string holatida bo'ladi. Natija consoleda ko'rinadi.

// let answer = prompt("Alisher Navoiy nechanchi yil tug'ilgan?");
// if(+answer === 1441){
//     alert("Sizning javobingiz to'g'ri!")
// }
// Natija kiritilganda alertga yozilgan code ishga tushadi, noto'g'ri bo'lsa yo'q bo'lib qoladi.

// Else - ifni ichidagi shartimiz false bo'lsa ya'ni if ishlamasa else ishlaydi.

// let answer = prompt("Alisher Navoiy nechanchi yil tug'ilgan?");
// if(+answer === 1441){
//     alert("Sizning javobingiz to'g'ri!")
// }
// else {
//     alert("Sizning javobingiz noto'g'ri!")
//     alert("Qaytadan urunib ko'ring!")
// }
// Bu qachon ishlaydi. Noto'gri javob kiritilsa ogohlantiriladi. Elseda hech qanday shart qo'yilmaydi, ifda esa qo'yiladi.

// Juft va toq son topish ko'rish
//Ichma - ich if

// let answer = prompt("Son kiriting:");
// if (+answer % 2 === 0) {
//     alert("Siz juft son kiritdingiz!")
// }
// else{
//     alert("Siz toq son kiritdingiz!");
// }
// Bu yozilgan kod sonning toq yoki juft ekanligiga qarab javob qaytaradi.

//  console.log(isNaN(+answer));// isNaN - misol uchun raqam kiritiladigan bo'lsa NaN chiqmaydi. Harf yoki symbol kiritiladigan bo'lsa isNaN chiqadi va consoleda true qiymat bo'ladi.
// let answer = prompt("Son kiriting:");
//  if(!isNaN(+answer))// Raqam bo'ladigan bo'lsa false qiymat qaytadi, shuning uchun " ! " qo'yiladi va true qiymat paydo bo;ladi.
//  if (+answer % 2 === 0) {
//      alert("Siz juft son kiritdingiz!")
//  }
//  else{
//      alert("Siz toq son kiritdingiz!");
// }
// else {
//     alert("Raqam kiriting")
// }

// Misol: passport va prava olish;

// let age = +prompt("Yoshinigizni kiriting:")
// if(!isNaN(age)) {
//     if(age >= 18) {
//         alert("Passport va prava oladi!")
//     }
//     else{
//         if(age >= 16){
//             alert("Faqat passport oladi.")
//         }
//         else alert("2 lasini ham olmaydi!");
//     }
// }
// else alert("Yoshingizni kiriting!");



//  HOMEWORK  //

// 1.
// if("0") {
//     alert( 'Hello' )
// } // Brauzer oynasi yangilanganda Hello chiqadi.

// 2.
// let result;
// if (a + b < 4){
//     result = 'Below';
// }
// else{
//     result = 'Over';
// }
// Natija:
// let result;
// (a + b < 4) ? (result = 'Below') :(result = 'Over')

// 3.
// let message;
// if(login == 'Employe'){
//     message = 'Hello';
// }
// else if(login == 'Director'){
//     message = 'Greetings';
//     }
//     else if (login == ''){
//         message ='No login';
//     }
//     else {
//         message = '';
//     }
// Natija:
// let message;
// (login == 'Employe') ? (message = 'Hello') : (login == 'Director') ? (message = 'Greetings') : (login == '') ? message ='No login' : (message = '');

// 4.
// let answer = prompt("Alisher Navoiy nechanchi yil tug'ilgan?");
// if(answer === "ECMAScript"){
//     alert("Right")
// }
// else {
//     alert("you entered the wrong answer!")
//     alert("Try again!")
// }
