// Ternary Operator JavaScript ka ek short conditional operator hota hai jo if else ko ek hi line
//  mein likhne ke liye use hota hai.
// Iska use tab kiya jata hai jab humein condition check karke do  mein se ek result chahiye ho.

// ternary operator

// let a = 90
// let b = 80

// let result = a > b ? a + b : "Invalid value"
// console.log(result);

// PROMPT METHOD 

// let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter b number"))
// let result = a > b ? a + b :"Invalid Value"
// // console.log(result);
// document.write(result)

// NULISH VS Operator
let obj = {
    id : 1,
    name : "",
    age : 0,
    email : "gulzaman@gmail.com",
    address  : {
        city : "Karachi",
        country : "Pakistan"
    }
}

// console.log(obj.name, obj.age || 21);
// console.log(obj.name , obj.age ?? 21);

// let displayName = obj.name || "Hello"
// console.log(displayName , obj.age ?? 21);


// OR Operator (||) — One-line Definition

// OR (||) operator pehli truthy value return karta hai, aur agar left value falsy ho to next value check 
// karta hai.

// Nullish Coalescing Operator (??) 

// Nullish (??) operator sirf us waqt right value return karta hai jab left value null ya undefined ho.

// DIFFERENCE

// || falsy values ko reject karta hai, jab ke ?? sirf null aur undefined ko reject karta hai.




// OPTIONAL CHANGING

console.log(obj.phone ?.age);
console.log(obj.phone.age);

let firstName  ;
firstName = "";
console.log(firstName ?? "Hello");