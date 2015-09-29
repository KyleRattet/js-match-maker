app.controller("MainController", function($scope) {

  $scope.students = [
        {'name': "Bob",
         'phoneNumber': '303-555-5555',
         'location': "Boulder, CO"
        },
         {'name': "Bill",
         'phoneNumber': '303-666-6666',
         'location': "Denver, CO"
        },
                  ];
  $scope.student = {};

  $scope.mentors = [
        {'name': "Sally",
         'phoneNumber': '303-777-7777',
         'location': "Boulder, CO"
        },
         {'name': "Sam",
         'phoneNumber': '303-888-8888',
         'location': "Denver, CO"
        },

                    ];
  $scope.mentor = {};



  $scope.addStudent = function () {
    $scope.students.push($scope.student);
     $scope.student = {};
  };

  $scope.addMentor = function () {
    $scope.mentors.push($scope.mentor);
     $scope.mentor = {};
  };

  $scope.match = function () {


  };


});
