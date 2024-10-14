// Rest Parameter & Spread Operator
// 1. Rest Parameter

// tanpa rest parameter

const func1 = (param1,param2,param3,param4,param5)=>{
    console.log(param1,param2,param3,param4,param5);
};

func1("A","B","C","D","E")


// Dengan Rest Parameter
const func2 = (...params) => {
    console.log(params);
};

func2("A","B","C","D","E")

//Rest parameter harus berada di terakhir dalam paramaeter list terakhir
const func3 = (param1,param2, ...params) => {
    console.log(param1 , param2);
    console.log(params);
    console.log(params[1]);
};

func3("A","B","c","D","E")

// Mini Exercise 
//ubah menjadi menggunakan params 
const penjumlahan = (a,b,c,d,e) =>{
    let arr = [a,b,c,d,e];
    let hasil = 0;

    arr.forEach((item)=>(hasil += item))
}

console.log(penjumlahan (1,2,3,4,5));


const penjumlahan2 = (... params) => {
    let hasil = 0;
    params.forEach((item)=>(hasil += item)); 
}
console.log(penjumlahan2(1,2,3,4,5))

// 2. Spread Opertator

let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(...numbers);

//Array
// 1. Dupliksi Array

let number2 = [...numbers];
numbers.push(6);
console.log(number2);

// 2. Menggabungkan Array 
let arry1 = [1,2,3];
let arry2 = [4,5,6];
let arry3 = [7,8,9];

let numbers3 = arry1.concat(arry2, arry3); //ES5
let numbers4 = [...arry1,...arry2,...arry3]; //ES6


// Object
//1. Duplikasi Object

const moty = {
    fullName: "Thimothy",
    age:20,
};

const moty2 = {...moty,address:"Manado"}

//2. Menggabungkan Object

let obj1 = {a:1, b:2};
let obj2 = {c:3 ,d:4};


