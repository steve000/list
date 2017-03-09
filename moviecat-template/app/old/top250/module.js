/**
 * Created by steve-John on 2017/2/23.
 */
(function (angular) {
    //创建即将上映模块
    var app = angular.module('moviecat.top250',['ngRoute', 'moviecat.myjsonp']);
    //配置路由：
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/top250/:page?',{
            templateUrl:'top250/view.html',
            controller:'top250Controller',
        });
    }]);
    //创建控制器：
    app.controller('top250Controller',[
        '$scope','$http','$routeParams','$route','MyJsonp',function ($scope,$http,$routeParams,$route,MyJsonp) {
            // console.log(MyJsonp);
            // console.log($routeParams);
            $scope.loading=true;// 控制加载动画的显示与否
            $scope.pageSize = 5; //每页数据
            $scope.nowPage=($routeParams.page||"1")-0;
            var start=($scope.nowPage-1)*$scope.pageSize;

            MyJsonp.jsonp('http://api.douban.com/v2/movie/top250',{start:start,count:$scope.pageSize},function (data) {
                //angular不能监视异步操作对数据模型的改变
                $scope.data = data;
                $scope.total = data.total;
                $scope.totalPage = Math.ceil(data.total/$scope.pageSize);
                $scope.$apply();
            });

            $scope.goPage=function(newPage){
                // 防止用户恶意点击
                if(newPage<1||newPage>$scope.totalPage){
                    return ;
                }
                $route.updateParams({page:newPage})
            }
        }
    ]);
})(angular)
