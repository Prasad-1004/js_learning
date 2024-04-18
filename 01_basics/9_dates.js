let myDate = new Date()
console.log(myDate)                                 //2024-04-18T06:28:34.485Z

console.log(myDate.toString())                      //Thu Apr 18 2024 06:28:34 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString())                  //Thu Apr 18 2024

console.log(myDate.toISOString())                   //2024-04-18T06:28:34.485Z

console.log(myDate.toJSON())                        //2024-04-18T06:28:34.485Z

console.log(myDate.toLocaleDateString())            //4/18/2024

console.log(myDate.toLocaleString())                //4/18/2024, 6:28:34 AM

console.log(myDate.toLocaleTimeString())            //6:28:34 AM

console.log(myDate.toString())                      //Thu Apr 18 2024 06:28:34 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toTimeString())                  //06:28:34 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString())                   //Thu, 18 Apr 2024 06:28:34 GMT


let mycreatedDate = new Date(2023 , 0, 24)
console.log(mycreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)


console.log(Math.floor(Date.now()/1000))     


let newDate = new Date()
console.log(newDate.getDay())