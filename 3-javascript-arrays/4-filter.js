import { students } from "./0-data.js";

const developers = []

// Non-Functional Approach
for (let i = 0; i < students.length; i++) {
  if (students[i].course === 'Web Development') {
    developers.push(students[i])
  }
}
console.log(developers)

// Functional Approach
const result1 = students.filter(function (student) {
  if (student.course === 'Web Development') {
    return true
  }
})
console.log(result1);

// Functional Approach with Arrow Function
const result2 = students.filter((student) => student.age > 21);
console.log(result2);
