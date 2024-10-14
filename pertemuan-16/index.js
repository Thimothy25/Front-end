// Asynchronous JS

//Synchronous -> single thread ->Blocking

// console.log("Proses 1")
// console.log("Proses 2")
// console.log("Proses 3")
// console.log("Proses 4")

//Asynchronous -> multi thread -> non-Blocking
//1. Parallel
// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2");
// }, 3000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 7000);
//2. Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

// Cara pakai Promise

//1. then - catch
// newPromise
//   .then((result) => console.log(result))
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));
//2. Async-Await
//Harus di buat dalam fungsi

// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

//Cara Pakai Promise yang sudah ada
//1. Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//B. Async-Await
// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json;
//   json.forEach(({ name }) => console.log(name));
// })();

//2. Axios
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((result) => console.log(result.data));
async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => console.log(name));
};
