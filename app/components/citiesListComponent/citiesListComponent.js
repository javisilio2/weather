'use strict';

angular.module('myApp.citiesListComponent', [])

.component('citiesComponent', {
    templateUrl: 'components/citiesListComponent/citiesListComponent.html',
    controller: 'citiesListComponentController',
    controllerAs: '$ctrl',
    bindings: {
      cities: "=",
      citiesIndex: "="
    }
})

.controller('citiesListComponentController', function(utils) {
  var ctrl = this;
  ctrl.removeCity = removeCity;
  ctrl.reloadCity = reloadCity;

  function removeCity (city, index) {
    delete ctrl.cities[city];
    ctrl.citiesIndex.splice(index, 1);
  }

  function reloadCity (city) {
    utils.getFormattedWeatherInfo(city).then (function (weatherInfo) {
      let upperCity = weatherInfo.city.toUpperCase();
      ctrl.cities[upperCity] = weatherInfo;
    }).catch(function(error) {
      console.log(error);
    }); 
  }
});