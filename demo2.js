const a=[1,2,3,4,5];
const b=[6,7,8,9,10];
const c=[...a,...b];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
const student={
  name:"John",
  age:20,
  gender:"male"
}
const newStudent={
  ...student,branch:"IT"
}
console.log("student=",student);
console.log("newStudent=",newStudent);