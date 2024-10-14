// JavaScript Loop

//Array Object

let student = [
  {
    id: 1,
    firstName: "Moty",
    grade: 80,
  },
  {
    id: 2,
    firstName: "Jane",
    grade: 90,
  },
  {
    id: 3,
    firstName: "Bob",
    grade: 100,
  },
];
console.log(student);

// 1. for-loop
for (let i = 0; i < student.length; i++) {
  console.log(student[i].firstName);
}

// 2. While
let i = 0;
while (i < student.length) {
  console.log(student[i].firstName);
  i++;
}
// 3. do-while loop

let = 0;
do {
  console.log(student[i].firstName);
  i++;
} while (i < student.length);

// 4. Array build-in method
// 4a. forEach()

student.forEach(function (item) {
  console.log(item.firstName);
});

// 4b. map()
let output = student.map(function (item) {
  return item.firstName;
});
console.log(output);

// 4c. fillter
let outputFillter = student.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFillter);

// 4d. find
let outputFind = student.find(function (item) {
  return item.grade >= 90;
});
console.log(outputFind);

// 4e. findIndex
let outputFindIndex = student.findIndex(function (item) {
  return item.firstName === "jane";
});
console.log(outputFindIndex);
