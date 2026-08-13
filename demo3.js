const num=[1,2,3,4,5];


const [a,b,c,d,e]=num;

console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
console.log("d=",d);
console.log("e=",e);

const student={
  name:"John",
  age:20,
  gender:"male"
}

const {name,age,branch="IT"}=student;

console.log("name=",name);
console.log("age=",age);
console.log("branch=",branch);

