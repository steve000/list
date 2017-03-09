## 流行框架第5天

###跨域

#### script标签跨域(这就是jsonp)
- 原理：就是动态的创建script标签，并设置src属性;

- window.name,iframe, postMessage
    + 在同一个标签页是共用一个name

#### angular jsonp
- $http

angular.callbacks

#### 封装自己的jsonp方法
- 注意：angular不能够监视异步操作中对数据模型的改
    所以需要在改变手动调用$scope.$apply()告诉angular数据模型已经改变.

###  功能:

#### 将封装的jsonp方法，使用到项目中，


#### 完善正在热映功能


#### 分页


#### 即将上映 coming_soon

#### top250 

#### 合并页面重复的部分
- 路由参数是可以使用多个了，也是能$routeParmas来获取

#### loading


#### 导航焦点切换


#### 搜索模块


#### 详细页

ng-src
ng-href