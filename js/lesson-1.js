// const a = prompt("Введіть число і зіграйте з нами");
// if (a === "10") {
//     alert('Вірно, ти виграв');
// } else {
//     alert('Невірно, ти не виграв');
// }






//TODO: № 2 на тернарник =============================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно' через тернарник

// let a = 7;
// console.log(a === 10 ? `Вірно` : `Невірно`);








//TODO: № 3 на if...else if ===============================================
// У змінній min лежить число від 0 до 59. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const a = 25;
// if (a <= 14) {
//     console.log("Перша чверть");
    
// } else if (a <= 29) {
//         console.log("Друга чверть");
// } else if (a <= 44) {
//     console.log("Третя чверть");
    
        
// } else if (a <= 59) {
//     console.log("Четверта чверть");
// } else {
//     console.log("Завелике число");
    
// }






    
//TODO: № 4 на switch ===========================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 2;
// let result = null;
// switch (num) {
//     case 1:
//         result = "winter";
//         break;
//     case 2:
//         result = "spring";
//         break;
//     case 3:
//         result = "summer";
//         break;
//     case 4:
//         result = "fall";
//         break;
//     default:
//         result = "not a season";
    
// }
// console.log(result);









//TODO: № 5 на while ===================================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 20

// let i = 0;
// while (i <= 20) {
//     console.log(i);
//     i += 1;
// }






//TODO: № 6 на for ===================================
//За допомогою циклу for додайте всі парні числа від min до max

// const min = 10;
// const max = 20;
// let total = 0;
// for (let i = min; i <= max; i += 2) {
//     total += i;
//     }
// console.log(total);
   

// let min = 0;
// let max = 50;
// let sum = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);






// TODO: № 7 на for =====================================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max


// const min = 1;
// const max = 7;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
// console.log(i);
//     if (i % 2 === 0) {
//         total += i;
    
// }
// }
// console.log(`Total ${total}`);



// for (let i = max; i >= min; i -= 1) {
//   // практика від поганого
//   if (i % 2 !== 0) {
//     // console.log("непарні i =", i);
//     continue;
//   }
//   console.log("парні i =", i);
//   total += i;
//   // інший вариіант
//   //      if (i % 2 === 0) {
//   //     console.log("парні i =", i);
//   //     total += i;
//   //     continue;
//   //   }
//   //   console.log("непарні i =", i);
// }








//TODO: № 8  =========================================================
// Напишіть if..else, що відповідає наступному switch:
// const browser = "Opera"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let browser = 'yui';
// if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     console.log("Okay we support these browsers too");
    
// } else if (browser === 'Edge') {
//     console.log("You've got the Edge!");
    

// } else {
//     console.log("We hope that this page looks ok!");
    
// }