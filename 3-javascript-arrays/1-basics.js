// reference https://javascript.info/array-methods

// add elements
const stringsArray = ["I", "go"];
stringsArray.push("home")
console.log(stringsArray); // [ 'I', 'go', 'home' ]

// add elements to start
const numbersArray = [20, 30, 50, 60];
const numbersArray2 = [5, 7, ...numbersArray]
console.log(numbersArray2); // [ 5, 7, 20, 30, 50, 60 ]

// sclice
const numbersArray3 = [...numbersArray.slice(0, 2)]
console.log(numbersArray3); // [ 20, 30 ]

// add to the middle using slice
const index = numbersArray.indexOf(50);
const numbersArray4 = [...numbersArray.slice(0, index), 40, ...numbersArray.slice(index)]
console.log(numbersArray4); // [ 20, 30, 40, 50, 60 ]

// destructuring
const numbersArray5 = [1, 2, 3];
const [x, ...result] = numbersArray5;
console.log(x); // 1
console.log(result); // [ 2, 3 ]

