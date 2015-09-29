app.controller("MainController", function($scope) {

  $scope.students = [];
  $scope.student = {};
  $scope.mentors = [];
  $scope.mentor = {};


  $scope.addStudent = function () {
    $scope.students.push($scope.student);
     $scope.student = {};
  };

  $scope.addMentor = function () {
    $scope.mentors.push($scope.mentor);
     $scope.mentor = {};
  };


});
