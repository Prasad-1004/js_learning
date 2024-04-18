const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman","batman","flash"]

marvel.push(dc)

console.log(marvel)  // There are 4 elements

console.log(marvel[3])        // 4th element it is
console.log(marvel[3][1])      // 1st element of 4th element

const heros = marvel.concat(dc)
console.log(heros)


const new_hero = [...marvel, ...dc]
console.log(new_hero)



const another_array = [1,2,3,[4,5,6],7,[8,9,[0,1]]]

const other_array = another_array.flat(Infinity)

console.log(other_array)


console.log(Array.from("Prasad"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))