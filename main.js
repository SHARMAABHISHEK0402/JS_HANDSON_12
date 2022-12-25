// Write one example explaining how you can write a callback function.

// const person =(friend, callback) => {
//   console.log(`Hello${friend}`);
//   callback();
// }
// const secondperson = () =>{
//   console.log(`bye`)
// }
// person("me",secondperson);

// "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.

// function callbackhell() {
//   setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//       console.log("2");
//       setTimeout(() => {
//         console.log("3");
//         setTimeout(() => {
//           console.log("4");
//           setTimeout(() => {
//             console.log("5");
//             setTimeout(() => {
//               console.log("6");
//               setTimeout(() => {
//                 console.log("7");
//               }, 7000);
//             }, 6000);
//           }, 5000);
//         }, 4000);
//       }, 3000);
//     }, 2000);
//   }, 1000);
// }
// callbackhell();

// Question 5 : Create examples to explain callback function

// function addNumbers(a, b, callback) {
//   const sum = a + b;
//   callback(sum);
// }

// function printResult(result) {
//   console.log(`The result is ${result}.`);
// }

// addNumbers(5, 7, printResult);

// Question 6 : Create examples to explain callback hell function

// function callbackex(){
//   setTimeout(() =>{
//       console.log('Front End Languages:');
//       setTimeout(() => {
//           console.log('HTML');
//           setTimeout(() => {
//               console.log('CSS');
//               setTimeout(() => {
//                   console.log('JAVA SCRIPT');
//               },4000)
//           },3000)
//       },2000)
//   },1000);
// }
// callbackex();

// Question 7 : Create examples to explain promises function

// const p = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     const data = {
//       name: 'John',
//       age: 30
//     };
//     resolve(data);
//   }, 1000);
// });

// p.then((data) => {
//   console.log(`My name is ${data.name} and I am ${data.age} years old.`);
// });

// Question 8 : Create examples to explain async await function

// async function getData(url) {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = {
//         name: 'ABhishek',
//         age: 30
//       };
//       resolve(data);
//     }, 1000);
//   });
// }

// async function main() {
//   const data1 = getData('/user/1');
//   const data2 = getData('/user/2');
//   const data3 = getData('/user/3');

//   const results = await Promise.all([data1, data2, data3]);
//   console.log(results);
// }

// main();
