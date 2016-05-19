angular.module('myApp', [])

//service keeping account of meal numbers and current average of meals
//controller adds transactions and updates account in service
.controller('ctrl', ['$scope', function ($scope) {
    var data = {};
    var totalmeals = 0;
    var tiptotal = 0;
    var average = 0;
    $scope.cancelForm = function () {
        $scope.baseamount = '';
        $scope.taxrate = '';
        $scope.tippercent = '';
    };

    $scope.clearEarnings = function () {
        tiptotal = 0;
        average = 0;
        totalmeals = 0;
        $scope.currentSubtotal = 0;
        $scope.currentTip = 0;
        $scope.currentTotal = 0;
        $scope.cumulativeAverage = 0;
        $scope.cumulativeMeals = 0;
        $scope.cumulativeTips = 0;
    }

    $scope.addTransaction = function () {

        var base = parseFloat($scope.baseamount);
        var tip = parseFloat($scope.tippercent);
        var tax = parseFloat($scope.taxrate);

        $scope.currentSubtotal = base + (tax / 100) * base;
        $scope.currentTip = $scope.currentSubtotal * (tip / 100);
        $scope.currentTotal = $scope.currentSubtotal + $scope.currentTip;
        totalmeals++;
        tiptotal = tiptotal + $scope.currentTip;
        average = tiptotal / totalmeals;

        $scope.cumulativeTips = tiptotal;
        $scope.cumulativeAverage = average;
        $scope.cumulativeMeals = totalmeals;
    };
    $scope.reset = function () {
        this.cancelForm();
        this.clearEarnings();
    };
    }]);
