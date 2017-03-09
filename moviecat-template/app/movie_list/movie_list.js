/**
 * Created by steve-John on 2017/2/25.
 */
(function (angular) {
    //创建模块
    var app = angular.module('moviecat.movie_list',['ngRoute', 'moviecat.myjsonp']);
    //配置路由：
    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/:movieType/:page?',{
            templateUrl:'movie_list/view.html',
            controller:'movie_listController'
        });
    }]);
    //创建控制器：
    app.controller('movie_listController',[
        '$scope','$http','$routeParams','$route','MyJsonp',function ($scope,$http,$routeParams,$route,MyJsonp) {
            // console.log(MyJsonp);
            // console.log($routeParams);
            $scope.loading=true;// 控制加载动画的显示与否
            $scope.pageSize = 5; //每页数据
            $scope.nowPage=($routeParams.page||"1")-0;
            var start=($scope.nowPage-1)*$scope.pageSize;

            MyJsonp.jsonp('http://api.douban.com/v2/movie/'+$routeParams.movieType+'?q='+$routeParams.q,{start:start,count:$scope.pageSize},function (data) {
                //angular不能监视异步操作对数据模型的改变
                console.log(data);
                $scope.data=data;  // 10/5, 9/5 ,11/5
                $scope.total=data.total;
                $scope.totalPage = Math.ceil(data.total/$scope.pageSize);
                $scope.loading = false;
                $scope.$apply();
            });

            $scope.goPage=function(newPage){
                // 防止用户恶意点击
                if(newPage<1||newPage>$scope.allPage){
                    return ;
                }
                $route.updateParams({page:newPage})
            }
        }
    ]);
})(angular)
