// Authentication Program

const userLogin = () => {
  console.log("Enter Username and Password");
  let username = prompt("Enter Username");
  let password = prompt("Enter Password");

  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      console.log("Performing User Authentication");

      if (username === "oscar" && password === "oscar") {
        resolve("User Authenticated!");
      } else {
        rejects("Authentication Failed");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to homepage as : ${userAuthStatus}`);
}

//Sync
// userLogin()
//   .then((response) => {
//     // first function
//     console.log("Validated User");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     // second function
//     console.log(userAuthStatus);
//   })

//   .catch((err) => {
//     console.log(err);
//   });

//Async

async function performTask() {
  const response = await userLogin();
  console.log("Validated User");
  const userAuthStatus = await goToHomePage(response);
  console.log(userAuthStatus);
}

performTask();
