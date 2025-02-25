import { students } from "./0-data.js";

const sortedStudents1 = students.sort(function (first, second) {
  if (first.age > second.age) {
    return 1;
  } else {
    return -1;
  }
});

const sortedStudents2 = students.sort((a, b) => a.age > b.age ? 1 : -1)

const sortedStudents3 = students.sort((a, b) => a.age - b.age);
