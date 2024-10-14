// JavaScript Array
// Deklarasi Array
//Cara 1 Array Literal

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// Cara 2 Kata kunci new
// let numbers2 = new Array(6, 7, 8, 9, 10);
// console.log(numbers2);

//  Tipe data yang dapat di simpan dalam array
// let numbers3 = [1, 2, 3, 4, 5]; //numbers
// let students = ["Moty", "Reymar", "Pongantung"]; //string
// let moty = ["Moty", 30, true[(30, 40, 100)]]; //mixed
// console.log(moty);

// //Array Length
// console.log(numbers3.length); //5
// console.log(students.length); //4
// console.log(moty.length); //3

// Cara mengakses element/data tertentu dalam array
// melalui index array

// console.log(numbers2[2]); //3
// console.log(students[1]); //reymar
// console.log(moty[2]); //true
// console.log(moty[3][1]);

// Mengakses element terakhir dalam array
// let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers4[numbers4.length - 1]);

//Array method
let array = [1, 2, 3, "Hello", false, true];
console.log(array);

//1. toString()
console.log(array.toString());
//2. join ()
console.log(array.join(" "));
console.log(array.join("__"));

//3. pop()
array.pop();
console.log(array);
//4. push();
array.push("Selamat Pagi");
console.log(array);
//5. shift()
array.shift();
console.log(array);
//6. unshift()
array.unshift("Selamat pagi");
console.log(array);
//splice();
array.splice(2, 1); //hapus
console.log(array);
array.splice(1, 1, 1); //ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambahan
console.log(array);
