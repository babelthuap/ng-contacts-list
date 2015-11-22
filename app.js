'use strict';

var app = angular.module('contactsApp', [])

app.controller('listCtrl', function($scope, listCRUD) {
  $scope.contacts = listCRUD.contacts;
  $scope.add = listCRUD.add;
  $scope.delete = listCRUD.delete;
  $scope.edit = listCRUD.edit;
});

app.service('listCRUD', function() {
  // seeded for testing purposes
  this.contacts = [{name: 'Nicholas', email: 'nicholas@gmail.com', phone: '111-111-1111', twitter: '@Babelthuap'},
                     {name: 'Ben', email: 'dragon@gmail.com', phone: '555-555-5555', twitter: '@dragon'},
                     {name: 'Joan', email: 'neuman@gmail.com', phone: '777-777-7777', twitter: '@neuman'},
                     {name: 'Kaspar', email: 'chun@gmail.com', phone: '123-456-7890', twitter: '@chun'}];

  this.add = function(contact) {
    this.contacts.push({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      twitter: contact.twitter
    });
    return;
  }

  this.delete = function(index) {
    return this.contacts.splice(index, 1);
  }

  this.edit = function(index) {
    console.log('editing', index)
    return;
  }

});