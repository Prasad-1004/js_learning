 const score = 400
 console.log(score)

 const balance = new Number(100)
 console.log(balance)


 console.log(balance.toString())

 console.log(balance.toFixed(2))

 const otherNumber = 23.478956
 console.log(otherNumber.toPrecision(3))
 console.log(otherNumber.toPrecision(4))

 const hundreds = 10000000
 console.log(hundreds.toLocaleString('en-In'))





 //+++++++++++++++++++++++++++++  Maths   ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4))

console.log(Math.round(5.5))

console.log(Math.floor(5.2))

console.log(Math.ceil(5.2))

console.log(Math.max(4,3,5,6,7,10))

console.log(Math.min(4,3,5,6,7,10))

console.log(Math.random())

console.log(Math.floor(Math.random()*10) + 1)


const min = 10
const max = 50

console.log(Math.floor(Math.random()*(max - min + 1)) + min)