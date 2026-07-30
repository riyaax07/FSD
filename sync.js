function register(){
  waitofdelay(10000);
  console.log("register here");
}
function login(){
  waitofdelay(5000);
  console.log("login here");
}
function getdata(){
  waitofdelay(4000);
  console.log("fetch data from db");
}
function displaydata(){
  waitofdelay(6000);
  console.log("view user data");
}
function waitofdelay(delay){
  const mt = Date.now()+delay;
  while(Date.now()<mt){
    
  }
}

register();
login();
getdata();
displaydata();
console.log("call another application");