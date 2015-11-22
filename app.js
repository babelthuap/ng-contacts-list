'use strict';

var app = angular.module('contactsApp', [])

app.controller('listCtrl', function($scope) {
  // seeded for testing purposes
  $scope.contacts = [{name: 'Nicholas', email: 'nicholas@gmail.com'},
                     {name: 'Ben', email: 'dragon@gmail.com'},
                     {name: 'Joan', email: 'neumann@gmail.com'},
                     {name: 'Kaspar', email: 'chun@gmail.com'}];

  $scope.add = function() {
    var newContact = $scope.contact;
    $scope.contacts.push({
      name: newContact.name, 
      email: newContact.email
    });
    return;
  }

  $scope.delete = function(index) {
    return $scope.contacts.splice(index, 1);
  }

  $scope.edit = function(index) {
    console.log('editing', index)
    return;
  }
});
