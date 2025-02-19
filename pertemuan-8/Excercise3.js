let person = {
  firstName: "Thimothy",
  weight: 80,
  height: 1.7,
  calculateBMI: function () {
    const bmi = this.weight / (this.height * this.height);
    this.BMI = bmi;
    if (bmi < 16.0) {
      this.category = "Severely Underweight";
    } else if (bmi >= 16.0 && bmi < 18.4) {
      this.category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      this.category = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      this.category = "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
      this.category = "Moderately Obese";
    } else if (bmi >= 35.0 && bmi < 39.9) {
      this.category = "Severely Obese";
    } else if (bmi >= 40.0) {
      this.category = "Morbidly Obese";
    } else {
      this.category = "Not Found";
    }
  },
};

person.calculateBMI();

console.log("Nama: " + person.firstName);
console.log("Berat: " + person.weight + " kg");
console.log("Tinggi: " + person.height + " m");
console.log("BMI: " + person.BMI);
console.log("Kategori BMI: " + person.category);
