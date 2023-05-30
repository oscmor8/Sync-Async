// Sync Example
// console.log("starting the program");

// function sleep(milliseconds) {
//   // We are creating a function that will execute our time
//   let startTime = new Date().getTime();
//   console.log("Program is Running");

//   while (new Date().getTime() < startTime + milliseconds) {
//     console.log("the program is in progress");
//   }
//   console.log("program is done");
// }

// sleep(1); // calling our function to perform

// console.log("do something else");

// Async

console.log("starting program");

function sleep2(milliseconds) {
  console.log("program is running");
  setTimeout(() => {
    console.log("program is done");
  }, milliseconds);
}

sleep2(1000);
console.log("do somethiing else");
