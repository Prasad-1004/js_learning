// Primitive Data Types (Call by Value)

// 7 types : String, Number , Boolean , Null , undefined , Symbol , BigInt

const score = 100                         //numbers
const scoreValue = 100.3                  //numbers

const isLoggedIn = false                  //boolean
const temp = null                         //null
let userName                              //undefined

const id = Symbol('123')                  
const id2 = Symbol('123')                 //symbol  (The reult will be different)


// Non Primitive (Call by Reference)

// 3 types : Array , Objects , Fumctions

const heros = ["IronMan", "batman", "Flash"]            // Array

let myObj = {
    name: "Jit",
    age: 25 
}                                                       //Object

const myFunction = function(){
    console.log("Hello Jit");
}                                                       //function






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//There are two types of memory 

// Stack Memory  (It is used in Primitive datatypes) (Call by value)

// Heap Memory   (It is used in Non-Primitive datatypes) (Call by reference)

