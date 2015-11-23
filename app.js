'use strict';

var app = angular.module('contactsApp', [])

app.controller('listCtrl', function($scope, listCRUD) {
  $scope.fields = listCRUD.fields;
  $scope.Fields = listCRUD.fields.map(word => word[0].toUpperCase() + word.slice(1));
  $scope.contacts = listCRUD.contacts;
  $scope.add = listCRUD.add;
  $scope.delete = listCRUD.delete;
  $scope.edit = listCRUD.edit;
  $scope.getContacts = listCRUD.getContacts;
});

app.service('listCRUD', function() {
  this.fields = ['name', 'email', 'phone', 'twitter'];

  // seeded for testing purposes
  this.contacts = [{name: 'Nicholas', email: 'nicholas@gmail.com', phone: '111-111-1111', twitter: '@Babelthuap'},
                     {name: 'Ben', email: 'dragon@gmail.com', phone: '555-555-5555', twitter: '@dragon'},
                     {name: 'Joan', email: 'neuman@gmail.com', phone: '777-777-7777', twitter: '@neuman'},
                     {name: 'Kaspar', email: 'chun@gmail.com', phone: '123-456-7890', twitter: '@chun'}];

  this.add = function(contact) {
    var newContact = {};
    this.fields.forEach(field => newContact[field] = contact[field]);
    this.contacts.push(newContact);
    return;
  }

  this.delete = function(index) {
    return this.contacts.splice(index, 1);
  }

  this.edit = function(index) {
    console.log('editing', index)
    return;
  }

  this.getContacts = function(filter) {
    if (!filter) return this.contacts;

    return this.contacts;
  }

});