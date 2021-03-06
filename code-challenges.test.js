// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

  

     describe("codeWordGen", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        it("takes in a string and returns a coded message", () => {
        expect(codeWordGen(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codeWordGen(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codeWordGen(secretCodeWord3)).toEqual("3cc3ntr1c")
        })
      })
   
                

// // b) Create the function that makes the test pass.

//Create a function codeWordGen
//I want to pass my string to the function and return a new, modified string
//I will use a global string replace method to identify and replace the given values 'a', 'e', 'i', and 'o' with their assigned number.
//using i, I can make the global matcher case insensitive



const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// // // Expected output: "3cc3ntr1c"

let codeWordGen = (string) => {
return string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
}
console.log(codeWordGen(secretCodeWord1))
console.log(codeWordGen(secretCodeWord2))
console.log(codeWordGen(secretCodeWord3))




// // --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// // a) Create a test with expects statement using the variable provided.

// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
// // Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]



describe("doesContain", () => {
  const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
  const letterA = "a"
  const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
  const letterE = "e"
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
  expect(doesContain(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
  expect(doesContain(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
})



// // b) Create the function that makes the test pass.

//Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// //create a function doesContain
// //function will take in an array and a letter and return a new array containing just the words from the original array which contain the designated letter
// //utilize .filter to iterate through the array

const doesContain = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  console.log(doesContain(arrayOfWords1, 'a'))
  console.log(doesContain(arrayOfWords2, 'e'))


// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a ???full house???. A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  const hand1 = [5, 5, 5, 3, 3]
  const hand2 = [5, 5, 3, 3, 4]
  const hand3 = [5, 5, 5, 5, 4]
  it("takes in an array of 5 numbers and determines whether or not the array is a fullhouse", () => {
      expect(fullHouse(hand1)).toEqual(true)
      expect(fullHouse(hand2)).toEqual(false)
      expect(fullHouse(hand3)).toEqual(false)
  })
})

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

            
// b) Create the function that makes the test pass.

//create a function that takes in an array of 5 numbers and determines whether or not the array is a ???full house???. A full house is exactly one pair and one three of a kind.


// create a function named fullHouse
//function will act on an array and return boolean value
// create a variable holding an empty object
// for loop through the array and determine how many times a number is repeated in the array and determine if it is indeed a fullhouse.



const fullHouse = (arr) => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }

  console.log(fullHouse(hand3))