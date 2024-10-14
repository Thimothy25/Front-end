// // JavaScript Object
// // Deklarasi Object
// // Object Literal

// let moty = {
//   firstName: "Moty",
//   age: 20,
//   isMarried: false,
//   grade: [80, 90, 100],
//   syaGreetings: function () {
//     console.log("Hello my name is " + this.firstName);
//   },
//   address: {
//     streeet: "JL. Arnold Mononutu Airmadidi",
//     city: "Airmadidi",
//     Provins: "Sulawesi Utara",
//   },
// };
// console.log(moty);

// // Mengakses property dalam object
// // 1. Dot notation
// console.log(moty.firstName); // Moty
// console.log(moty.age); // 20
// moty.age = 21; //Ubah Nilai

// console.log(moty);
// moty.job = "Programmer"; // Menambah ke dalam Object
// console.log(moty);
// // Menggunakan Barcket notation
// console.log(moty["isMarried"]); //false
// moty["Nationality"] = "Indonesia"; //tambah
// console.log(moty);

// // Object method
// // moty.syaGreetings();

// // Object inside
// console.log(moty.address.city);

// // Delete Property
// delete moty.grade;
// console.log(moty);

// JavaScript Conditional
// 1. if  - Else
// Jika Suhu hari ini lebih atau sama dengan 37,
// Tampilkan suhu hari ini panas
// jika tidak maka tampilkan suhu hari ini dingin

let suhu = 38;
if (suhu >= 37) {
  console.log("Hari ini Suhu Panas");
} else {
  console.log("Hari ini Dingin");
}

// if - else if - else
// Jika nilai 100 - 80 tampilkan grade A
// Jika nilai 70 - 79 tampilkan grade B
// Jika nilai 50 - 69 tampilkan grade C
// Jika nilai dibawah 50 tampilkan grade D

let nilai = 100;

if (nilai >= 80 && nilai <= 100) {
  console.log("Nilai anda adalah = A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Nilai anda Adalah = B");
} else if (nilai >= 50 && nilai < 70) {
  console.log("Nilai anda Adalah = C");
} else {
  console.log("Nilai anda Adalah = D");
}

// 3. Switch - case
// Jika angka 1 tampilkan january
// Jika angka 2 tampilkan february
// jika angka 3 tampilkan maret sampai 12

let number = 1;
switch (number) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Not Found");
}
