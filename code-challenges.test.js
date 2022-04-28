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


describe('codedmessage1', () => {
        it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", ()=> {const secretCodeWord1 = "Lackadaisical"
        expect(codedmessage1(secretCodeWord1)).toMatch('L4ck4d41s1c4l')
            
        })
    })   
 
describe('codedmessage2', () => {
        it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", ()=> {const secretCodeWord2 = "Gobbledygook"
            expect(codedmessage2(secretCodeWord2)).toMatch('G0bbl3dyg00k')
                
            })     

describe('codedmessage3', () => {
        it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", ()=> {const secretCodeWord3 = "Eccentric"
        expect(codedmessage3(secretCodeWord3)).toMatch('3cc3ntr1c')
                    
                })     
   
                
// FAIL  ./code-challenges.test.js
// codedmessage1
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

// ● codedmessage1 › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//   ReferenceError: codedmessage1 is not defined

                              

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


// describe('arrayofwords1', () => {
//     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", ()=> {// const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// const letterA = "a"
//         expect([arrayofwords1]).toContain(["Apple", "Banana", "Orange"])
        
//     })
// })   

// describe('arrayofwords2', () => {
//     it("takes in an array of words and a single letter and returns all the words that contain that particular letter", ()=> {
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]
//         expect([arrayofwords2]).toContain(["Cherry", "Blueberry", "Peach"])
        
//     })
// })   


// FAIL  ./code-challenges.test.js
// arrayofwords
//   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter (1 ms)

// ● arrayofwords › takes in an array of words and a single letter and returns all the words that contain that particular letter

//   ReferenceError: arrayofwords is not defined


// // b) Create the function that makes the test pass.

//Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
// const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// //crete a function ifIncludes
// //function will take in an array and a letter and return a new array containing just the words from the original array which contain the designated letter
// //utilize .filter to iterate through the array

const doesContain = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  console.log(doesContain(arrayOfWords1, 'a'))
  console.log(doesContain(arrayOfWords2, 'e'))

// // --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// // a) Create a test with expect statements using the variable provided.

// describe('hand1', () => {
//     it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", ()=> {
//         expect(hand1).toBeTruthy()       
//     })
// })   

// describe('hand2', () => {
//     it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", ()=> {
//         expect(hand2).toBeFalsy()       
//     })
// })   

// describe('hand3', () => {
//     it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", ()=> {
//         expect(hand3).toBeFalsy()       
//     })
// })   


// FAIL  ./code-challenges.test.js
// hand1
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind
// hand2
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind
// hand3
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind

// ● hand1 › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind

//   ReferenceError: hand1 is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

            
// b) Create the function that makes the test pass.

//create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//const fullHouse
//function will act on an array and return boolean value


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