angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/newmeal', {
                templateUrl: 'newmeal.html',
                controller: 'NewMealCtrl',
            })
            .when('/myearnings', {
                templateUrl: 'myearnings.html',
                controller: 'MyEarningsCtrl'
            })
            .when('/error', {
                templateUrl: 'error.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/error'
            });
    }])
    //service keeping account of meal numbers and current average of meals
    //controller adds transactions and updates account in service
    .controller('HomeCtrl', ['$scope', function ($scope) {

    }])
    .controller('NewMealCtrl', ['$scope', function ($scope) {

    }])
    .controller('MyEarningsCtrl', ['$scope', function ($scope) {

    }])
    .controller('ctrl', ['$scope', function ($scope) {
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
