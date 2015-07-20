//
// alert("test");

var totalNumberStudents = prompt("How many students learning JavaScript?");
var students = createArray(totalNumberStudents);
var totalNumberMentors = prompt("How many mentors teaching JavaScript?");
var mentors = createArray(totalNumberMentors);

alert("Total number of students: " + totalNumberStudents);
alert("Total number of mentors: " + totalNumberMentors);

infoAlert(students);
infoAlert(mentors);

//get info for one person, build into an object to be put into array
function getInfo() {
  var person = {};
  // get all the information to build object
  person.name =prompt("Name?");
  person.phone =prompt("phone?");
  person.city = prompt("City?");
  return person;
}

//take person object, add person to array of students

function createArray(totalNumberStudents) {
  var students = [];
  for (var i = 0; i < totalNumberStudents; i++) {
    students.push(getInfo());
  }
  return students;
}

//create info alert function
function infoAlert (array) {
  var totalString = "";
  for (var i = 0; i < array.length; i++) {
    string = ("Name: "+ array[i].name+"\n"+
              "Phone Number: "+array[i].phone+"\n"+
              "City: "+array[i].city);
      totalString += alert(string);
  } return totalString;
}


array = [
  {name: "Bill", phone: 33, city: "Boulder"},
  {name: "Sally", phone: 4444, city: "Denver"},
]
