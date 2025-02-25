import { students } from "./0-data.js";

// An array of JSON objects with students fullnames
const studentNames = students.map(function (student) {
  return {
     fullname: `${student.name} ${student.lastname}`,
  }
})
console.log(studentNames);

// An array of JSON objects with students fullnames using arrow function
const studentNames2 = students.map((student) => {
  return {
    fullname: `${student.name} ${student.lastname}`,
  };
});

// An array of JSON objects with students doubled age using arrow function
const doubleAges = students.map((student) => student.age).map((age) => age * 2);
console.log(doubleAges);

// An array of student JSON objects adding a course
const courseProgramming = students.map((student) => ({
    ...student,
    course: "Programming",
}));
console.log(courseProgramming);

