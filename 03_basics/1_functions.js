

function say() {
    console.log("H")
    console.log("I")
    console.log("")
    console.log("J")
    console.log("I")
    console.log("T")
}

say       //---->  reference

say()    //------> Execution


function add(number1, number2){             //Parameters(When we define function)
    console.log(number1 + number2)         
}

add(3, 4)                                //Arguments(When we call function)

// we can store the function into a variable like

const result = add(3,4)

console.log("Result: ", result)      // Result will be undefined


function addition(num1, num2) {
    // +++++++++ Type 1 +============
  //  let marks = num1 + num2
  //  return marks
    return num1 + num2
    console.log("Jit")       //This line will not be print because after return keyword anything will be not printed

// function er vetor jodi return use kori tobei sei value ta onno ekta variable e store kora jay otherwise console use kore store kora jay naa

}

const  marks = addition(3,5)

console.log("Marks: ", marks)



function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Jit"))
// console.log(loginUserMessage())  ----> It will return undefined




 function calculateCartPrice(...num1){
    return num1
 }

 console.log(calculateCartPrice(200, 400 , 600))

 // Let take a object

 const user = {
    username : "Prasad",
    price : 199
 }

 // let see how to transfer this object in a function

 function handleObject(anyObject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
 }

 handleObject(user)


// another type

handleObject({
    username : "sam",
    price:299
})