// console.log("sanity check!");

// Ask (prompt) the user for the total number of students learning JavaScript
// For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array. BONUS: add validation.
// Repeat steps 1 and 2 for mentors. Create a new array of objects. You should now have two arrays - one for students, the other for mentors.
// Print (alert) the total number of students, the number of mentors, and each person nicely formatted like so:

//students

var totalNumberStudents = prompt("How many total students are learning JavaScript");
var students = createPeople(totalNumberStudents);
var totalNumberMentors = prompt("How many total mentors are teaching JavaScript");
var mentors = createPeople(totalNumberMentors);

function getInfo () {
  var person = {};
  person.name = prompt("What is the name?");
  person.phone = prompt("What is the phone number?");
  person.city = prompt("What is the city?");
  return person;
}

function createPeople (totalNumberStudents) {
  var students = [];

  for (var i = 0; i < totalNumberStudents; i++) {
    students.push(getInfo());
  }
  return students;
}

console.log(students);
console.log(mentors);
