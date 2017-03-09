/**
 * Created by steve-John on 2017/2/23.
 */
(function (angular) {
    var app = angular.module('moviecat.myjsonp',[]);

    app.service('MyJsonp',['$window',function ($window) {
        this.jsonp = function crossDomain(url, arg, fn) {
            var queryString = ''; //拼接地址：
            for (var key in arg) {
                queryString += key+'='+arg[key] +'&'
            }
            url += '?' + queryString;
            var callbackName = "jsonp_" +Math.random().toString().substr(2);
            $window[callbackName] = function (data) {
                fn(data);
            }
            url += 'callback=' +callbackName;
            //创建script
            var scriptElement = $window.document.createElement('script');
            scriptElement.src = url;
            $window.document.body.appendChild(scriptElement);
        }
    }])
})(angular)
