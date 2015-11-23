'use strict';

var app = angular.module('contactsApp', [])

app.controller('listCtrl', function($scope, listCRUD) {
  $scope.contact = {};
  $scope.fields = listCRUD.fields;
  $scope.Fields = listCRUD.fields.map(word => word[0].toUpperCase() + word.slice(1));
  $scope.contacts = listCRUD.contacts;
  $scope.edit = listCRUD.edit;
  $scope.getContacts = listCRUD.getContacts;
  $scope.delete = index => {
    var deleted = listCRUD.delete(index)[0];
    $scope.fields.forEach(field => $scope.contact[field] = deleted[field]);
    return;
  }
  $scope.add = contact => {
    listCRUD.add(contact);
    $scope.fields.forEach(field => $scope.contact[field] = '');
    return;
  }
  $scope.sortBy = listCRUD.sortBy;
  $scope.isSortColumn = listCRUD.isSortColumn;
});

app.service('listCRUD', function() {
  this.fields = ['name', 'email', 'phone', 'twitter'];
  var sortColumn = 'name';

  // seeded for testing purposes
  this.contacts = [{name: 'Nicholas', email: 'nicholas@gmail.com', phone: '123-456-7890', twitter: '@Babelthuap'},
                     {name: 'Ben', email: 'dragon@gmail.com', phone: '555-555-5555', twitter: '@dragon'},
                     {name: 'Joan', email: 'neuman@gmail.com', phone: '777-777-7777', twitter: '@neuman'},
                     {name: 'Kaspar', email: 'chun@gmail.com', phone: '111-111-1111', twitter: '@chun'}];

  this.add = function(contact) {
    var newContact = {};
    this.fields.forEach(field => newContact[field] = contact[field]);
    this.contacts.push(newContact);
    return;
  }

  this.delete = function(index) {
    return this.contacts.splice(index, 1);
  }

  // NOT IMPLEMENTED
  this.edit = function(index) {
    console.log('editing', index)
    return;
  }

  this.sortBy = function(field) {
    sortColumn = field.toLowerCase();
    return;
  }

  this.isSortColumn = function(field) {
    return field.toLowerCase() === sortColumn;
  }

  this.getContacts = function(query) {
    if (!query) {
      return this.contacts.sort((a, b) => a[sortColumn] > b[sortColumn]);
    } else {
      // HolyCrapThisIsConcise!
      var filtered = this.contacts.filter(contact => {
        return this.fields.some(field => contact[field].indexOf(query) !== -1);
      })
      return filtered.sort((a, b) => a[sortColumn] > b[sortColumn]);
    }
  }

});

































