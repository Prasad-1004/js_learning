const tinderUser = new Object()           // This is a singleton object

const tinder = {}                      // This is not a singleton object

tinder.id = "123abc"
tinder.name = "jit"
tinder.isLoggedIn = false

console.log(tinder)


const bumbleUser = {
    email : "jit@gmail.com",
    fullname : {
        user_full_name : {
            firstname : "Prasad",
            lastname : "Adhikary"
        }
    }

}

console.log(bumbleUser.fullname)
console.log(bumbleUser.fullname.user_full_name.firstname)


const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

const obj3 = Object.assign({} ,obj1, obj2)
console.log(obj3)                                // we use this method less

const obj4 = {...obj1,...obj2}
console.log(obj4)                             //// we use this method maximum time


const users = [                                // array of objects
    {
        id : 1,
        email : "j@gmail.com"
    },
    {
        id : 1,
        email : "j@gmail.com"
    },
    {
        id : 1,
        email : "j@gmail.com"
    },
]

users[1].email

console.log(Object.keys(tinderUser))



console.log(tinderUser.hasOwnProperty('isLoggedIn'))






// +++++++++++++++ Object Destructuring +++++++++++++++++++++

const course = {
    coursename : "JS in hindi",
    price : 1000,
    courseteacher : "Prasad"
}

const {coursename} = course
console.log(coursename)



//+++++++++++++++ JSon +++++++++++++++++++

//syntax of JSon(API calls)

/*
{
    "name": "Prasad",
    "coursename" : "JS in hindi",
    "price" : free
    
}

*/