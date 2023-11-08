// Switch-case if va else davomi.

// Switch - bu biz kiritadigan ma'lumot aniq bo'lsa qo'llaniladi. Ifga o'rinbosar sifatida keladi. Ya'ni promptdan keladigan ma'lumot aniq bo'ladigan bo'lsa switch-case ishlatamiz.

// Hafta kunlari:

//If va Elseda qilingan holat:

// let number = 
// prompt("1-7 gacha son kiriting:")
// if(number === "1") alert("Dushanba");
// else if(number === "2") alert("Seshanba");
// else if(number === "3") alert("Chorshanba");
// else if(number === "4") alert("Payshanba");
// else if(number === "5") alert("Juma");
// else if(number === "6") alert("Shanba");
// else if(number === "7") alert("Yakshanba");
// else alert("Noto'g'ri ma'lumot kiritildi");

//Switch-case qilingan holat:

// let number = prompt("1-7 gacha son kiriting:")
// switch(number){
//     case "1" : alert("Dushanba");break;
//     case "2" : alert("Seshanba");break;
//     case "3" : alert("Chorshanba");break;
//     case "4" : alert("Payshanba");break;
//     case "5" : alert("Juma");break;
//     case "6" : alert("Shanba");break;
//     case "7" : alert("Yakshanba");break;
// }
// Break - bu elementdan keyin keladigan boshqa elementni ketma-ketlikda olib kelmaydi, "break" yozilmasa element ketma-ketlikda keladi, ya'ni o'zgaruvchini javobini yozmasak ham. 

// || , && , ?? , > , < , * , / - switchda ishlamaydi, shunki berayotgan qiymat aniq emas.

// Switch-case da "else" ni kiritish:

// let number = prompt("1-7 gacha son kiriting:")
// switch(number){
//     case "1" : alert("Dushanba");break;
//     case "2" : alert("Seshanba");break;
//     case "3" : alert("Chorshanba");break;
//     case "4" : alert("Payshanba");break;
//     case "5" : alert("Juma");break;
//     case "6" : alert("Shanba");break;
//     case "7" : alert("Yakshanba");break;
//     default: alert("Noto'g'ri ma'lumot kiritildi");
    // "default" qiymat ko'rinishi jihatidan "else" ga o'xshaydi.
//}

//  HOMEWORK - SWITCH-CASE :

// 1.
// let number = prompt("1-7 gacha son kiriting:")
// switch(number){
//     case "1" : alert("Dushanba");break;
//     case "2" : alert("Seshanba");break;
//     case "3" : alert("Chorshanba");break;
//     case "4" : alert("Payshanba");break;
//     case "5" : alert("Juma");break;
//     case "6" : alert("Shanba");break;
//     case "7" : alert("Yakshanba");break;
//     default: alert("Noto'g'ri ma'lumot kiritildi");
// }

// 2.
// let baho = prompt("1-5 gacha son kiriting!");
// switch(baho) {
//     case "1" : alert("O'ta qoniqarsiz");break;
//     case "2" : alert("Qoniqarsiz");break;
//     case "3" : alert("Qoniqarli");break;
//     case "4" : alert("Yaxshi");break;
//     case "5" : alert("A'lo");break;
//     default: alert("Ta'lim tizimida mavjud bo'lmagan baho kiritildi!")
//              alert("Qaytadan urunib ko'ring!");
// }

// 3.
// let faslOylari = prompt("Oy nomini yozing!");
// switch(faslOylari){
//     case "Yanvar": alert("Qish faslining 1-oyi");break;
//     case "Fevral": alert("Qish faslining 2-oyi");break;
//     case "Mart": alert("Bahor faslining 1-oyi");break;
//     case "Aprel": alert("Bahor faslining 2-oyi");break;
//     case "May": alert("Bahor faslining 3-oyi");break;
//     case "Iyun": alert("Yoz faslining 1-oyi");break;
//     case "Iyul": alert("Yoz faslining 2-oyi");break;
//     case "Avgust": alert("Yoz faslining 3-oyi");break;
//     case "Sentabr": alert("Kuz faslining 1-oyi");break;
//     case "Oktabr": alert("Kuz faslining 2-oyi");break;
//     case "Noyabr": alert("Kuz faslining 3-oyi");break;
//     case "Dekabr": alert("Qish faslining oxirgi oyi");break;
//     default: alert("Bunday oy mavjud emas")
//              alert("Iltimos boshidan kiriting");
    
// }

// 4.
// let oyKunlari = prompt("Tartib bo'yicha oyning ketma-ketlikdagi joylashuvi raqamini kiriting!");
// switch(oyKunlari){
//     case "1": alert(`"Yanvar" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     case "2": alert(`"Fevral" - oyi, bu oyda 28 kun mavjud, ammo har 4 yilda 29-kun mavjud bo'ladi`);
//     break;
//     case "3": alert(`"Mart" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     case "4": alert(`"Aprel" - oyi, bu oyda 30 kun mavjud`);
//     break;
//     case "5": alert(`"May" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     case "6": alert(`"Iyun" - oyi, bu oyda 30 kun mavjud`);
//     break;
//     case "7": alert(`"Iyul" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     case "8": alert(`"Avgust" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     case "9": alert(`"Sentabr" - oyi, bu oyda 30 kun mavjud`);
//     break;
//     case "10": alert(`"Oktabr" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     case "11": alert(`"Noyabr" - oyi, bu oyda 30 kun mavjud`);
//     break;
//     case "12": alert(`"Dekabr" - oyi, bu oyda 31 kun mavjud`);
//     break;
//     default: alert("Bunday raqamdagi oy mavjud emas")
//              alert("Iltimos boshidan kiriting");
// }

// 5.
// let a = +prompt("a sonini kiriting:");
// let b = +prompt("b sonini kiriting:");
// let amal = prompt("Amalni kiriting:");
// switch (amal) {
//   case "+":
//     alert(`${a} + ${b} = ${a + b}`);
//     break;
//   case "-":
//     alert(`${a} - ${b} = ${a - b}`);
//     break;
//   case "*":
//     alert(`${a} * ${b} = ${a * b}`);
//     break;
//   case "/":
//     alert(`${a} / ${b} = ${a / b}`);
//     break;
//   case "%":
//     alert(`${a} % ${b} = ${a % b}`);
//     break;
//   default:
//     alert("Noto'g'ri amal kiritildi!");
// }


//     "LOOPS"

// Loops - bu bir xil kodlarni qayta yozayotganda ishlatiladi. Bir xil kodlar qaytarilishi ko'p bo'lgan holatda, ularni qayta-qayta yozib chiqmasdan biror-bir loop yaratib uni ichiga joylab qo'ysa bo'ladi. Javascriptda looplar soni uchtani tashkil etadi.

// 1. While - ko'rinishi jihatidan "If" ga o'xshab ketadi va bu ham shart qabul qiladi. Faqatgina "while" ni ichi "true" holatda bo'lsa. While birinchi bo'lib elementlarni tekshiradi, berilgan qiymat "true" holatida bo'lsa ya'na aylanib kelib tekshiradi.
// while(){

//}
// 2. Do-while
// 3. For

// Misol uchun: 

// console.log(1);//
// console.log(2);//
// console.log(3);//
// console.log(4);//
// console.log(5);//
// console.log(6);//
// console.log(7);//
// console.log(8);//
// console.log(9);//
// console.log(10);//

// let i = 1;
// while(i <= 10){
//     alert(i);
//     i++;
// } // While ni ichidagi yozilgan kodni har bir ishlashi iteration deb nomlanadi va odatda kalit so'zga "i" deb yoziladi.

// Misol: juft sonlarni topish.

// let n = +prompt("Son kiriting:");
// let i = 0;
// while(i <= n){
// if(i % 2 === 0) console.log(i);
// i++;
// }

//  HOMEWORK - LOOPS :

// 1.
// let k = prompt('k ni kiriting:');
// let n = prompt('n ni kiirting:');
// let i = 1;
// while(i <= n){
//     console.log(k);
//     i++;
// }

// 15.
// let n = +prompt("Son kiriting:");
// let i = n;
// while(i >= 1){
//     console.log(i);
//     i-= 2;
// }
