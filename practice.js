var numberOfStudents = prompt("How many students?");

var students = createPerson(numberOfStudents);

infoSummary(students);

//get infomation function, create into an object
function getInfo () {
  var person= {};
  person.name = prompt("name?");
  person.phone = prompt("phone?");
  person.city = prompt("city?");
  return person;
}

//create object for each person
function createPerson (numberOfPersons) {
  var personsArray= [];
  for (var i = 0; i < numberOfPersons; i++) {
    personsArray.push(getInfo());
  }
  return personsArray;
}

// createPerson(numberOfStudents);
//function to print out personal info.

function infoSummary (array) {
  var total = "";
  for (var i = 0; i < array.length; i++) {
    string = "Name: "+array[i].name+"\n"+
             "Phone: "+array[i].phone+"\n"+
             "City: "+array[i].city
    total += alert(string);
  }
  return total;
}


