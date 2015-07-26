// alert("test");

//prompt asking for total number of students
var numberOfStudents = prompt("How many students?");
var students = addPersonToArray(numberOfStudents);

//promt total number of mentors
var numberOfMentors = prompt("How many mentors?");
var mentors = addPersonToArray(numberOfMentors);

alert("Total number of students: " + numberOfStudents);
alert("Total number of mentors: " + numberOfMentors);
//create an array of objects for each student
infoSummary(students);
infoSummary(mentors);

//function to get information input(information) >>> output(obect)
function getInfo () {
  var person = {};
  person.name = prompt("Name?");
  person.phone = prompt("Phone?");
  person.city = prompt("city?");
  return person;
}

//function to add getInfo to student array
function addPersonToArray (numberOfStudents) {
  var studentArray=[];
  for (var i = 0; i < numberOfStudents; i++) {
    studentArray.push(getInfo());
  }
  return studentArray;
}

//function to print out student info
function infoSummary (array) {
  var totalString = "";
  for (var i = 0; i < array.length; i++) {
    string = ("Name: " + array[i].name+"\n"+
             "Phone: " + array[i].phone+"\n"+
             "City: " + array[i].city);
    totalString += alert(string);
  } return totalString
}

