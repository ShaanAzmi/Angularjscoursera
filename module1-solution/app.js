(function () {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchInput = "";
      $scope.message = "";
      $scope.messageColor = "";
  
      $scope.checkLunch = function () {
        if (!$scope.lunchInput || $scope.lunchInput.trim() === "") {
          $scope.message = "Please enter data first";
          $scope.messageColor = "red";
          return;
        }
  
        // Split and filter empty items
        var items = $scope.lunchInput.split(',').filter(function (item) {
          return item.trim() !== "";
        });
  
        if (items.length === 0) {
          $scope.message = "Please enter data first";
          $scope.messageColor = "red";
        } else if (items.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageColor = "green";
        } else {
          $scope.message = "Too much!";
          $scope.messageColor = "green";
        }
      };
    }
  })();
  
