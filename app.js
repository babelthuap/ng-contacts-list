'use strict';

var app = angular.module('contactsApp', [])

app.controller('listCtrl', function($scope) {
  $scope.contacts = [];

  $scope.add = function() {
    var newContact = $scope.contact;
    $scope.contacts.push({name: newContact.name, email: newContact.email});
  }
});
