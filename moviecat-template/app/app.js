(function (angular) {
    // "use strict";

    // start your ride
    // 创建一个主模块
    var app = angular.module('moviecat',[
        'moviecat.details',
        'moviecat.home_page',
        // 'moviecat.in_theaters',
        // 'moviecat.coming_soon',
        // 'moviecat.top250',
        'moviecat.movie_list',
        'moviecat.auto_active'
    ]);
    app.controller('mainController',['$scope','$location',function($scope,$location){
        $scope.query = '';
        $scope.search = function(){
            // 改变的url中的锚点值即可，不需再去发请求.
            $location.url('/search/?q=' + $scope.query);
        }
    }]);

})(angular);