angular.module('myApp', [])

.controller('ctrl', ['$scope', function ($scope) {
    var mealcount = 0;
    var tiptotal = 0;
    var average = 0;
    $scope.cancelForm = function () {
        $scope.baseamount = '';
        $scope.taxrate = '';
        $scope.tippercent = '';
    };
    $scope.submit = function () {
        mealcount++;
        $scope.subtotal = $scope.baseamount + ($scope.taxrate / 100) * $scope.baseamount;
        $scope.tip = $scope.subtotal * ($scope.tippercent / 100);
        console.log($scope.subtotal);
    };

    $scope.tipcalculator = function () {

    };
    }])

;
