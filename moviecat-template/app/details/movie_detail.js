/**
 * Created by steve-John on 2017/2/25.
 */
(function (angular) {
    var app = angular.module('moviecat.details', ['ngRoute', 'moviecat.myjsonp']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/details/:id', {
            templateUrl: 'details/view.html',
            controller: 'detailsController'
        })
    }])
    app.controller('detailsController', ['$scope', '$routeParams', 'MyJsonp', function ($scope, $routeParams, MyJsonp) {
        MyJsonp.jsonp('http://api.douban.com/v2/movie/subject/' + $routeParams.id, {}, function (data) {
            console.log(data);
            $scope.movie = data;
            $scope.$apply();
        })
    }])
})(angular)


