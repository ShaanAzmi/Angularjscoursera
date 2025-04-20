(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.messageColor = "";

    $scope.checkLunch = function () {
      if (!$scope.lunchItems || $scope.lunchItems.trim() === "") {
        $scope.message = "Please enter data first";
        $scope.messageColor = "red";
        return;
      }

      var items = $scope.lunchItems.split(',')
                                   .map(item => item.trim())
                                   .filter(item => item !== "");

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
