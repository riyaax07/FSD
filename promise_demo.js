function register(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register here");
      resolve();
    }, 10000);
  });
}
function login(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login here");
      resolve();
    }, 5000);
  });
}
function getdata(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch data from db");
      resolve();
    }, 4000);
  });
}
function displaydata(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("view user data");
      resolve();
    }, 6000);
  });
}

register()
  .then(() => login())
  .then(() => getdata())
  .then(() => displaydata())
  .catch((error) => {
    console.error("An error occurred:", error);
  });

console.log("call another application");