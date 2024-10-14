// String Literals, Arrow Function

// 1. String Literals
let fullName = "Moty";
let age = 23;
let address = "Manado";

let kalimat =
  "Hallo Nama saya " +
  fullName +
  ", umur saya " +
  age +
  ", saya tinggal di " +
  address;

console.log(kalimat);

let kalimat2 = `Hallo nama saya ${fullName}, umur saya ${age}, saya tinggal di ${address}`;
console.log(kalimat2);

function sayGreetings1(fullName) {
  return `Hallo nama saya ${fullName}`;
}

console.log(sayGreetings1("Moty"));

const sayGreetings2 = (fullName) => `Hallo nama saya ${fullName}`;
console.log(sayGreetings2("Moty"));

// Arrow Function pada IIFE
let output1 = (() => "hello")();
console.log(output1);

// Arrow Function pada callback
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

// Default parameter
const sayGreetings3 = (fullName) => {
  if (fullName === undefined) {
    fullName = "Moty";
  }
  console.log(
    `Hallo Nama saya ${fullName} umur saya ${age} saya tinggal di ${address}`
  );
};

sayGreetings3();
