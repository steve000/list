/**
 * Created by steve-John on 2017/2/25.
 */
(function(angular){
    var app=angular.module('moviecat.auto_active',[]);
    app.directive('autoActive',['$location',function ($location) {
        return {
            link: function (scope, element, attributes) {
                //监听锚点值的变化：
                scope.location = $location;
                scope.$watch('location.url()',function (now, old) {
                    var aLink = element.children().attr('href').substr(1);
                    console.log(aLink);
                    console.log(element);
                    //startsWith判断字符串是否包含另一个字符串
                    if (now.startsWith(aLink)){
                        element.parent().children().removeClass('active');
                        element.addClass('active');
                    }
                })
            }
        }
    }])
})(angular)