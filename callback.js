function register(cb){
  setTimeout(() => {
    console.log("register here");
    cb();
  }, 10000);
}
function login(cb){
  setTimeout(() => {
    console.log("login here");
    cb();
  }, 5000);
}
function getdata(cb){
  setTimeout(() => {
    console.log("fetch data from db");
    cb();
  }, 4000);
}
function displaydata(){
  setTimeout(() => {
    console.log("view user data");
    

  }, 6000);
}

register(
  ()=>{
    login(
      ()=>{
        getdata(
          ()=>{
            displaydata();
          }
        )
      }
    )
  }
)



console.log("call another application");