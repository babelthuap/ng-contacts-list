'use strict';

var app = angular.module('contactsApp', [])

app.controller('listCtrl', function($scope) {
  // seeded for testing purposes
  $scope.contacts = [{name: 'Nicholas', email: 'nicholas@gmail.com', phone: '111-111-1111', twitter: '@Babelthuap'},
                     {name: 'Ben', email: 'dragon@gmail.com', phone: '555-555-5555', twitter: '@dragon'},
                     {name: 'Joan', email: 'neuman@gmail.com', phone: '777-777-7777', twitter: '@neuman'},
                     {name: 'Kaspar', email: 'chun@gmail.com', phone: '123-456-7890', twitter: '@chun'}];

  $scope.add = function() {
    var newContact = $scope.contact;
    $scope.contacts.push({
      name: newContact.name,
      email: newContact.email,
      phone: newContact.phone,
      twitter: newContact.twitter
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
