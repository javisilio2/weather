'use strict';

angular.module('myApp.searchComponent', [])

.component('searchComponent', {
    templateUrl: 'components/searchComponent/searchComponent.html',
    controller: 'searchComponentController',
    controllerAs: '$ctrl',
    bindings: {
      cities: "=",
      citiesIndex: "=",
    }
})

.controller('searchComponentController', function(utils) {
  var ctrl = this;
  ctrl.addCity = addCity;

  function addCity (city) {
    utils.getFormattedWeatherInfo(city).then (function (weatherInfo) {
        let upperCity = weatherInfo.city.toUpperCase();
        if(ctrl.citiesIndex.indexOf(upperCity) < 0) {
          ctrl.cities[upperCity] = weatherInfo;
          ctrl.citiesIndex.push(upperCity);
        }
      }).catch(function(error) {
        console.log(error);
      }); 
  }


});