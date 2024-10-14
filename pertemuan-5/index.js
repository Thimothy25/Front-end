 // JavaScript Function
// Cara 1. Function Declaration
// function gretings1(){
//     console.log("Hello World");
// }

// gretings1();//Call / Execute Function

// Cara 2. Function Expression
// let gretings2 = function(){
//     console.log("Hello World");
// }
// gretings2();

// 3. Parameter & argument (input) & return (output)
// function gretings1(fullName){
//     return"Hello "+fullName;
// }
//                        (Argument)
// let output = gretings1 ("Moty Reymar");
// console.log(output);

// Cara 2
// let gretings2 = function (fullName){
//     return "Hello"+ fullName;
// }
//                         (Argument)
// let output2 = gretings2 ("Moty Reymar");
// console.log(output2);

// Global Scope & Local Scope

// let x = 10;//Global

// function foo (){
//     let y = 20;//Local
//     console.log(x);//10
//     console.log(y);//20
//     if (y > 20){
//         let z = 30
//         console.log(z)//30
//         console.log(y)//20
//         console.log(x)//10
//     }

// }
// console.log(x);//10
// console.log(y);//20(Error)
// console.log(z);//30(Error)
// foo();
