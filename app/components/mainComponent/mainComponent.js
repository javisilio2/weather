'use strict';

angular.module('myApp.mainComponent', [])

.component('mainComponent', {
    templateUrl: 'components/mainComponent/mainComponent.html',
    controller: 'mainComponentController',
    controllerAs: '$ctrl'
})

.controller('mainComponentController', function() {
  var ctrl = this;
  ctrl.cities = [];
  ctrl.citiesIndex = [];
});