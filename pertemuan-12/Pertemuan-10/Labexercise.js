// No 1
let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//No 2
people.forEach(function (person) {
  console.log(person);
});

//No 3
people = people.slice(1);
console.log(people);

//No 4
people = people.filter(function (person) {
  return person !== "James";
});
console.log(people);

//No 5
people.splice(0, 0, "Matt");
console.log(people);

//No 6
people.splice(3, 0, "Moty");
console.log(people);

//No 7
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//No 8
let People = people.slice();
People = People.filter((person) => person !== "Mary" && person !== "Matt");

console.log(People);

//No 9
const index = people.indexOf("Devon");
if (index !== -1) {
  people.splice(index, 1);
}
people.splice(2, 0, "Elizabeth", "Artie");
console.log(people);

//No 10
let withBob = people.concat("Bob");
console.log(withBob);

// Object
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// No 1
programming.languages.push("Go");
console.log(programming.languages);

// No 2
programming["difficulty"] = 7;
console.log(programming.difficulty);

// No 3
delete programming.jokes;
console.log(programming);

// No 4
programming.isFun = true;
console.log(programming.isFun);

// No 5
const updatedLanguages = programming.languages.map((language, index) => {
  return `${index} - ${language}`;
});
console.log(updatedLanguages);
