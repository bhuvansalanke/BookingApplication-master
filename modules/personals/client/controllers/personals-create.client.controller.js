'use strict';

// Personals create controller

var personalsApp = angular.module('personals');

personalsApp.controller('PersonalsCreateController', ['$scope', 'Personals', 'Notify', 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f57e6ae079db3192a5701f6dcbe3223465f12be8
  function ($scope, Personals, Notify) {
    
    // Create new Personal
    this.CreatePrsnl = function () {

      // Create new Personal object
      var personal = new Personals({
        fName: this.fName,
        lName: this.lName,
        emailId: this.emailId,
        contact: this.contact,
        isConsultant: this.isConsultant,
        speciality: this.speciality,
        qualification: this.qualification,
        experience: this.experience,
        rating: this.rating,
        treatments: this.selectedTreatments,
        slots: this.slots,
        adminemailId: this.adminemailId,
        image: this.contact + '.png'
       // imageLocation: this.imageLocation
      });

      // Redirect after save
      personal.$save(function (response) {

        // Clear form fields
        $scope.fName = '';
        $scope.lName = '';
        $scope.emailId = '';
        $scope.contact = '';
        $scope.isConsultant = '';
        $scope.speciality = '';
        $scope.qualification = '';
        $scope.experience = '';
        $scope.rating = null;
        $scope.selectedTreatments = null;
        $scope.slots = null;
        $scope.adminemailId = '';
        $scope.image = null;
        Notify.sendMsg('NewPersonal', {'id': response._id});
        
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);

// Choose image
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(125)
                    .height(110);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imgInp").change(function(){
    readURL(this);
<<<<<<< HEAD
});
=======
});
=======
    function($scope, Personals, Notify) {
    
        // Create new Personal
        this.CreatePrsnl = function() {

            // Create new Personal object
            var personal = new Personals({
                fName: this.fName,
                lName: this.lName,
                emailId: this.emailId,
                contact: this.contact,
                isConsultant: this.isConsultant,
                speciality: this.speciality,
                qualification: this.qualification,
                experience: this.experience,
                rating: this.rating,
                treatments: this.selectedTreatments,
                slots: this.slots
            });

            // Redirect after save
            personal.$save(function(response) {

                // Clear form fields
                $scope.fName = '';
                $scope.lName = '';
                $scope.emailId = '';
                $scope.contact = '';
                $scope.isConsultant = '';
                $scope.speciality = '';
                $scope.qualification = '';
                $scope.selectedTreatments = null;
                $scope.slots = null;
                $scope.experience = null;
                $scope.rating = null;

                Notify.sendMsg('NewPersonal', { 'id': response._id });

            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
    }
]);

>>>>>>> 3f230c6b331f02a2ca632f31379b0e1aa3612386
>>>>>>> f57e6ae079db3192a5701f6dcbe3223465f12be8
