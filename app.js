angular.module('myApp', [])

//service keeping account of meal numbers and current average of meals
//controller adds transactions and updates account in service
.controller('ctrl', ['$scope', function ($scope) {
    var totalmeals = 0;
    var tiptotal = 0;
    var average = 0;
    $scope.cancelForm = function () {
        $scope.baseamount = '';
        $scope.taxrate = '';
        $scope.tippercent = '';
    };

    $scope.addTransaction = function () {

        $scope.currentSubtotal = $scope.baseamount + ($scope.taxrate / 100) * $scope.baseamount;
        $scope.currentTip = $scope.currentSubtotal * ($scope.tippercent / 100);
        $scope.currentTotal = $scope.currentSubtotal + $scope.currentTip;
        totalmeals++;
        tiptotal = tiptotal + $scope.currentTip;
        average = tiptotal / totalmeals;

        $scope.cumulativeTips = tiptotal;
        $scope.cumulativeAverage = average;
        $scope.cumulativeMeals = totalmeals;
    };

    }])

;
