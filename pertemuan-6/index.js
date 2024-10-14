//IIFE & CALLBACK
// 1. IIFE (Immediately Invoked Function Expression)
// a. No params , args & return value
(function () {
    console.log("Hello World");
})();

// b. With params, args & return value 
let output = (function (fullName){
    return "Hello "+ fullName
})("Moty");
console.log(output);

//2. Callback function
//a. No params, args & return value
function sayHallo(callback) {
    callback();
}
sayHallo(function(){
    console.log("Hello World");//Callback function
});

//b. with params, args & return value

function sayHai(callback2) {
    let result = callback2("Moty");
    return (result);
}
let output2 = sayHai(function(fullName){
    return"Hello "+ fullName;//Callback function
});
console.log(output2);

