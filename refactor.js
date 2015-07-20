//start by obtaining student info, add into an array

var studentArray = [];



function getInfo () {
  var student = {name: "", phone: "", city: ""};
  student.name = prompt("What is the name?");
  student.phone = prompt("What is the phone number?");
  student.city = prompt("What is the city?");
  studentArray.push(student);

  var response = prompt("Would you like to add another student?. Yes or No?");
   if(response === "Yes") {
     getInfo();
   }
  return student;
  }
