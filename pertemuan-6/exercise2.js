// Ubah / modifikasi exercise 1
// menggunakan 
// 1. IIFE
// 2. Callback Function

//1. IIFE 
(function() {
    let berat = 90; 
    let tinggi = 1.70;
    let hasil = berat / (tinggi * tinggi);
    console.log("BMI Anda adalah: " + hasil);
})();
//2. callback 
function hitug(callback) {
    callback();
}
hitug(function (){
    let berat = 90; 
    let tinggi = 1.70;
    let hasil = berat / (tinggi * tinggi);
    console.log("BMI Anda adalah: " + hasil);
});
