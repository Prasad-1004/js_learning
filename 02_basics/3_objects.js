// Singleton


//object literals


//Object.create          //Singleton      // 1st method of create object(Constructor method)

const mySim = Symbol("key1")

const JsUser = {                // Another method of create object
    name :  "Prasad",
    [mySim] : "Mykey1",          //symbol
    age : 18,
    location : "Kolkata",
    email: "prasad@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}      

// How to access objects 

console.log(JsUser.age)            // 1st method
console.log(JsUser["location"])   //2nd method
console.log(JsUser[mySim])


JsUser.email = "prasad.adhikary@gmail.com"
//Object.freeze(JsUser)                      //doesnot allow any change after this 

JsUser.email = "prasad.adhikary@hotmail.com"

console.log(JsUser)


JsUser.greeting = function() {
    console.log("Hello")
}

console.log(JsUser.greeting)
console.log(JsUser.greeting())