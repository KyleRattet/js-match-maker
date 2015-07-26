// console.log("sanity check!");

//variable to ask for number of students
var totalNumberStudents = prompt("How many total students are learning JavaScript");
//students array
var students = createPeople(totalNumberStudents);
//variable to ask for number of mentors
var totalNumberMentors = prompt("How many total mentors are teaching JavaScript");
//mentor array
var mentors = createPeople(totalNumberMentors);

//alerts to display number of students/mentors(using .length
//method on the arrays to get the number)
alert("Total number of students: " + students.length);
alert("Total number of mentors: " + mentors.length);
//fuctions to print 4
//info alerts outlining each person
infoAlert(students);
infoAlert(mentors);

//funtion to ask for personal information, universally applicable
//to students or ment
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

function infoAlert (array) {
  var totalString = "";
  for (var i = 0; i < array.length; i++) {
     string = ("Name: " + array[i].name+"\n"+
               "Phone Number: " + array[i].phone+"\n"+
               "City: "+array[i].city+"\n");
    totalString += alert(string);
  } return totalString;
}


