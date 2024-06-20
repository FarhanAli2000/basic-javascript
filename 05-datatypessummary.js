//Primitive datatypes  (Call by value)

//7 types:String,Number,Bool,Null,Symbol,Undefined,BigInt

const score=100;
const scoreValue=100.6;
const isLoggedIn=false;
const outsideTemp=null; //null
let userEmail;//undefined

const id=Symbol('123');
const anotherId=Symbol('123');
// console.log(id==anotherId);

// const bignumber=55266272428n;




//Non-Primitive datatypes (Reference)
//Array,Objects,Functions  

const heros=["Spiderman","Batman","Sooperman"]

const myObj={
    name:'Saad',
    age:23,
}

function name(){
    console.log("My name is Farhan");
}