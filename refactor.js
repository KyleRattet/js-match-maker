//start by obtaining student info, add into an array





function getInfo (human) {
  var human = {};
  human.job = prompt("Student or mentor?")
  human.name = prompt("What is the name?");
  human.phone = prompt("What is the phone number?");
  human.city = prompt("What is the city?");
  return human;
}

//function to ask if any more students, add to array
function askForMore () {
  var students =[];
  var more = true;
  while(more) {
    students.push(getInfo());
    if((prompt("Any more to add? Yes or No?")) === "No"){
      more = false;
    }
  }
  return students;
}


function infoAlert (array) {
  var totalString = "";
  for (var i = 0; i < array.length; i++) {
     string = ("Job: " + array[i].job+"\n"+
               "Name: " + array[i].name+"\n"+
               "Phone Number: " + array[i].phone+"\n"+
               "City: "+array[i].city+"\n");
    totalString += alert(string);
  } return totalString;
}

infoAlert(askForMore());

