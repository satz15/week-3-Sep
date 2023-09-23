// 1. Declare an array called fruits containing the names of three different fruits. Then, write a function
// printFruits that takes the fruits array as an argument and prints each fruit to the console

const fruits = ['apple' , 'orange' , 'banana']

function printFruits(fruitArray) {
    for (let i = 0 ; i < fruitArray.length ; i++) {
        console.log(fruitArray[i]);
    }
}

printFruits(fruits);

// 2. Declare three variables: name (a string), age (a number), and isStudent (a boolean). Assign values
// to these variables and then print them to the console

// const name = 'satz';
// const age = 23;
// const isStudent = true;

// console.log(name);
// console.log(age);
// console.log(isStudent);

// 3. Write a function add that takes two numbers as arguments and returns their sum.

function add(a,b) {
    return a + b;
}

console.log(add(5,5));
console.log(add(-3,8));
console.log(add(0,0));

// 4. Write a function reverseString that takes a string as input and returns the string reversed

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('welcome'));
console.log(reverseString('devoleper'));
console.log(reverseString('reverse'));


// 5. Write a function findMax that takes an array of numbers as input and returns the largest number in
// the array
  
function findMax(numbers) {
    if (numbers.length === 0) {
    return undefined ;
}
    let max = numbers[0];
    for (i = 1 ; i < numbers.length ; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(findMax([5, 2, 9, 1, 5])); 
console.log(findMax([-3, -11, -2, -7])); 
console.log(findMax([42])); 

// 6. Create an object called person with properties name, age, and city.

const person = {
    name : 'sathish',
    age : 23,
    city : 'coimbatore' 
};

function printPerson(person) {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
}

printPerson(person);

// 7. Write a function isEven that takes a number as input and returns true if the number is even and
// false if it odd.
  
function isEven(number) {
    return number % 2 === 0 ;
}

console.log(isEven(8));
console.log(isEven(5));
console.log(isEven(0));     


// 8. Write a function sumArray that takes an array of numbers as input and returns the sum of all the
// numbers in the array

function sumArray(numbers) {
    let sum = 0 ;

    for (let i = 0 ; i < numbers.length; i++);{
    sum += numbers[i];
}
    return sum ;
}

console.log(sumArray([2,4,6,8,10]));
console.log(sumArray([-2,0,5]));
console.log(sumArray([]));

// 9. Write a function countVowels that takes a string as input and returns the count of vowels (a, e, i, o,
//     u) in the string, regardless of case.
  

function countVowels(str) {
    const vowels = "aeiouAEIOU"; // List of vowels, including both lowercase and uppercase
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels('stopwatch'));
  console.log(countVowels('javascript is difficult'));
  console.log(countVowels(''));


//   10. Write a function mergeObjects that takes two objects as input and returns a new object that is a
//   combination of both objects

function mergeObjects(obj1,obj2) {
    return{ ...obj1,...obj2 }
}

const obj1 = {name:'hari' , age:30};
const obj2 = {city:'erode' , job:'Depends on skill safari'};
const merged = mergeObjects(obj1,obj2);
console.log(merged);
  