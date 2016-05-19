angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/newmeal', {
                templateUrl: 'newmeal.html',
                controller: 'ctrl',
            })
            .when('/myearnings', {
                templateUrl: 'myearnings.html',
                controller: 'ctrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    //service keeping account of meal numbers and current average of meals
    //controller adds transactions and updates account in service
    .controller('HomeCtrl', ['$scope', function ($scope) {

    }])
    .controller('ctrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.totals = {
            totalmeals: 0,
            tiptotal: 0,
            average: 0
        };


        $scope.cancelForm = function () {
            $scope.baseamount = '';
            $scope.taxrate = '';
            $scope.tippercent = '';
        };

        $scope.clearEarnings = function () {
            $rootScope.totals.tiptotal = 0;
            $rootScope.totals.average = 0;
            $rootScope.totals.totalmeals = 0;
            $scope.currentSubtotal = 0;
            $scope.currentTip = 0;
            $scope.currentTotal = 0;
            $rootScope.cumulatives.cumulativeAverage = 0;
            $rootScope.cumulatives.cumulativeMeals = 0;
            $rootScope.cumulatives.cumulativeTips = 0;
        }

        $scope.addTransaction = function () {

            var base = parseFloat($scope.baseamount);
            var tip = parseFloat($scope.tippercent);
            var tax = parseFloat($scope.taxrate);

            $scope.currentSubtotal = base + (tax / 100) * base;
            $scope.currentTip = $scope.currentSubtotal * (tip / 100);
            $scope.currentTotal = $scope.currentSubtotal + $scope.currentTip;
            $rootScope.totals.totalmeals = $rootScope.totals.totalmeals + 1;
            console.log($rootScope.totals.totalmeals + " This is the current meal total");
            $rootScope.totals.tiptotal = $rootScope.totals.totalmeals + $scope.currentTip;
            console.log($rootScope.totals.tiptotal + " This is the current tip total");
            $rootScope.totals.average = $rootScope.totals.tiptotal / $rootScope.totals.totalmeals;
            console.log($rootScope.totals.average + " This is the current average");

            $rootScope.cumulatives = {
                cumulativeTips: $rootScope.totals.tiptotal,
                cumulativeAverage: $rootScope.totals.average,
                cumulativeMeals: $rootScope.totals.totalmeals
            };
        };
        $scope.reset = function () {
            this.cancelForm();
            this.clearEarnings();
        };
    }]);
