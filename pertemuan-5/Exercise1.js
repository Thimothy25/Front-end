//Buatlah Fungsi Untuk Menghitung BMI(Body Mass Index)
function HitungBMI(berat, tinggi) {
    return berat / (tinggi * tinggi);
}

let berat = 90; 
let tinggi = 1.70;
let hasil = HitungBMI(berat, tinggi);
console.log("BMI Anda adalah: " + hasil);
