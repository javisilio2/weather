'use strict';

angular.module('myApp.infoComponent', ['ngDialog'])

.component('infoComponent', {
    templateUrl: 'components/infoComponent/infoComponent.html',
    controller: 'infoComponentController',
    controllerAs: '$ctrl',
    bindings: {
      weather: "<",
      reloadAction: "<",
      removeAction: "<"
    }
})

.controller('infoComponentController', function($scope, ngDialog) {
  var ctrl = this;

  ctrl.openModal = openModal;

  function openModal() {
    ngDialog.open({
        template: 'components/infoComponent/modal.html',
        className: 'ngdialog-theme-default moreInfoBox',
        scope: $scope
    });
  };
});