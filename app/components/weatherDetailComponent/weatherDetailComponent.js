'use strict';

angular.module('myApp.weatherDetailComponent', [])

.component('weatherDetail', {
    templateUrl: 'components/weatherDetailComponent/weatherDetailComponent.html',
    controller: 'weatherDetailController',
    controllerAs: '$ctrl',
    bindings: {
      detail: "<",
      size:"@"
    }
})

.controller('weatherDetailController', function() {
  var ctrl = this;
});