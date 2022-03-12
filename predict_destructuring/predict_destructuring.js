
// // Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// // Prediction: 
// // console.log(randomCar) will output "Tesla"
// // console.log(otherRandomCar) will output "Mercedes"

// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Prediction:
// console.log(name) will return an error because there is no established variable name
// console.log(otherName) will output "Elon"


// // Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// Prediction:
// console.log(password) will output "12345"
// console.log(hashedPassword) will give an error since there is no password key defined in the person object





// // Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// // Prediction:
// // console.log(first == second) will output false since the numbers are not equal
// // console.log(first == third) will output true because the numbers are equal


// // Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Prediction:
// console.log(key) will output "value"
// console.log(secondKey) will output "[1,5,1,8,3,3]"
// console.log(secondKey[0]) will output "1"
// console.log(willThisWork) will output "5"