//  A 

//  function recursion(n) {
//     if (n === 0) {
//         return;
//     }
//     console.log(n);
//     recursion(n - 1);
// }

// recursion(5);


// B

// let a = 1;
// let b = 5;

// function recursion(a, b) {
//  if (a > b) {
//     console.log(a);
//     a--;
//     recursion(a, b);
//  } else if (a < b) {
//     console.log(a);
//     a++;
//     recursion(a, b);
//  } else {
//     console.log(a);
//  }
// }

// recursion(a, b);


// E 

// function sumDigits(n) {
//     if (n < 10) {
//         return n;
//     } else {
//         return n % 10 + sumDigits(Math.floor(n / 10));
//     }
// }

// console.log(sumDigits(179));


// F 

// function printDigits(n) {
//     if (n < 10) {
//         console.log(n);
//     } else {
//         console.log(n % 10);
//         printDigits(Math.floor(n / 10));
//     }
// }

// printDigits(179);


// G 
// function printDigits(number) {
//     let currentDigit = number % 10;
    
//     if (number < 10) {
//         console.log(number);
//         return;
//     }
    
//     console.log(currentDigit);
    
//     let remainingDigits = Math.floor(number / 10);
    
//     printDigits(remainingDigits);
// }

// printDigits(179);