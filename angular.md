# 流行框架第一天：Angular简介和入门

## 开放性讨论

- 为什么这几年前端行业好像突然间多了那么多东西
    + 我们现在做的网站不再是简简单单的呈现静态页面，而是一个web应用程序。
    + 一大批后端程序员转型为前端，大大提高了前端的水准。


## Angular简介
 - jQuery ：库
  + 封装了一些常用的方法，我们主动的调用这些方法
    -- 提高了代码的利用，以及代码后期的维护

 - Angular: 前端框架
  + 框架提供了一些结构或者模式，
  + 我们是根据框架提供的结构或者模式去书写代码
  + 由框架帮助我们去执行相应的操作。

### 什么是 Angular

- 一款非常优秀的前端高级 JS 框架
- 最早由 Misko Hevery 等人创建
- 2009 年被 Google 公式收购，用于其多款产品
- 目前有一个全职的开发团队继续开发和维护这个库
- 有了这一类框架就可以轻松构建 SPA 应用程序
- 其核心就是通过指令扩展了 HTML，通过表达式绑定数据到 HTML。
- *Angular不推崇DOM操作，也就是说在NG中几乎找不到任何的DOM操作*

#### 什么是 SPA
- single page application
- 单页应用程序

### 为什么使用 Angular



### 安装 Angular

- 暴力安装: 直接从本地硬盘中复制一个angular.js文件到项目中

- 通过工具安装
  + npm 方式 `npm install angular`
  + bower 方式 'npm install angular'

- CDN - 扩展内容

*注意，每一种安装方式，本质都是为了拿到angular.js文件*





### 指令
- angular中以ng-开头的属性叫作指令
- ng-app 告诉angular来管理html代码，管理ng-app所在元素及其子元素。
- ng-click 用来注册点击事件

  >var add = document.getElementById('add');
   add.onclick=function(){
    val = (val-0)+1; // num.value = (num.value - 0) +1
   }

- ng-model：var num = document.getElementById('num').value

- ng-init :进行初始化操作:  ng-init="user.name='小明'"

### Angular 表达式
- 就是把ng-model对应的值显示到页面中。
- 语法：两个大括号的形式：{{}}
- {{user.name}}
- {{'hello'+ user.name}}
- {{1+2}}
- {{[1,2,3,4]}}

## Angular 基础概念

### Angular 的核心特性

- 指令

- MVC

- 模块化  angular.module()

- 双向数据绑定

### 模块(module)
- angular.module('myApp',[])
  > 第一个参数是模块的名字
  > 第二个参数是一个数组，数组的元素是该模块所依赖其他模块的名字
*注意,即使不依赖任何模块，也需要给第二个参数传递一个空数组*
*否则angular.module('myApp')就是去获取名为myApp的模块对象*

### 控制器(controller)
- angular.module('myApp',[]).controller('demoController',function($scope){})
> 第一个参数，是控制器的名字
> 第二个参数，是一个回调函数，在回调函数里写我们想要的js代码。

### 双向数据绑定
- 数据模型的值发生改变，就会导致页面值的改变.
  页面值的改变，就会导致数据模型值的改变，这各种相互影响的关系就是双向数据绑定。
- ng-model

### 单向数据绑定
- 使用表达式显示数据模型的值。

### MVC 思想

#### 什么是 MVC 思想
- M:Model 模型  :数据存储，一些业务逻辑
- V:View  视图 ：就是用来展示数据
- C:Controller 控制器: 调度业务逻辑


#### MVVM 
- M：
- V:
- VM: ViewModel-  $scope

### $watch
- 用于监视数据模型的变化（并且只能监视数据模型的变化）
- $scope.$watch('数据模型名的字符串形式',function(变化后的值,变化前的值){})
- $scope.$watch里的回调函数会默认执行一次。



## CDN - 扩展内容
content delivery network 
内容分发网络

- 速度快
- 减轻了服务器自身在带宽压力。

### 相关链接

- AngularJS 1.x 官方网站
  + https://angularjs.org/
- AngularJS 2.x 官方网站
  + https://angular.io/
- Google Material Design for Angular
  + https://material.angularjs.org
- Angular UI（Angular最大的第三方社区）
  + http://angular-ui.github.io/
- AngularJS中文社区
  + http://www.angularjs.cn/
- AngularJS中文社区提供的文档（不用翻墙）
  + http://docs.angularjs.cn/api
  + http://www.apjs.net/



## 流行框架第二天



### Angular VS jQuery

- jQuery:库
    + 封装了一些常用的方法，我们主动调用这些方法
- Angular:框架
    + 框架提供了一些结构或者模式，
    + 我们按照框架提供的规则去写代码
    + 然后由框架自己去执行相应的操作

 - 思想上:
    jQuery: 提高了dom操作的开发效率。
    Angular: 不提倡dom操作，几乎没有dom操作(底层还是操作的dom)
        + angular中操作dom `angular.element()` ,叫做jqLite
### angular.element
- 轻量级的jQuery,
*注意：在获取dom对象时传入的参数是一个原生dom对象*


### 复习并总结Angular开发流程

0.通过npm/bower/暴力的方式/cdn 拿到想到angular.js文件。
1.在HTML代码中引入angular.js这个文件
2.在HTML代码上加上ng-app指令，告诉angular来管理我们的代码，这个指令只能使用一次
3.在JS代码中通过`angular.module('模块名',[])`创建一个模块，然后在HTML中的ng-app指令指定一下模块名'ng-app="模块名"'
4. 在JS代码中创建控制器`xxx.controller('控制器的名字',function(){})`,在HTML代码中通过ng-controller指令由我们当前的控制器来管理数据模型`ng-controller="控制器的名字"`
5. 建模（根据页面原型抽象出数据模型）, 最终得到视图模型(ViewModel)
6. 通过`$scope`来暴露页面上所需要使用的一些数据
7. 在HTML代码中通过`ng-model/ng-click/{{}}` 将刚刚暴露的数据绑定到页面上去
8. 在JS中写一些具体业务相关的代码

### 复习MVC
- MVC是一种设计思想,它是约定了程序的结构应该是怎么。
- 每一个组成原件都会有一个明确的职责。
- 提高代码的结构和可维护性(代码的执行效率肯定是不会提高的，10行代码，会分到10个不同的方法。);

### $scope

- 视图和控制器之间的数据桥梁
- 用于在视图和控制器之间传递数据
- 用来暴露数据模型（数据，行为）

![$scope](./scope.png)

### ViewModel

- $scope 实际上就是MVVM中所谓的VM（视图模型）
- 正是因为$scope在Angular中大量使用甚至盖过了C（控制器）的概念，所以很多人（包括我）把Angular称之为MVVM框架
- 这一点倒是无所谓，具体看怎么用罢了


## 模块

### 模块的创建
> 通过`anuglar.mdoule()`方法来创建模块.

    *注意,如果传入两个参数就是去创建模块，如果只传入第一个参数，就会变成获取模块。*

### 模块的划分式

#### 1.根据项目中具体的功能去划分模块

#### 2.根据具体的文件功能的类型去划分模块

## 控制器的创建方式

### 传统的方式创建控制器(不推荐使用这种方式)

```javascript
    // 通过全局函数来创建控制器
        // angular会把我们创建的全局函数作为控制器使用
        function demoController($scope){
            $scope.name='小明';
        }
```

### 面向对象的方式创建控制器

```html
    <div ng-controller="demoController as obj ">
        {{obj.name}}
        {{age}}
    </div>
    <!-- 1.引入angular.js文件 -->
    <script src="node_modules/angular/angular.js"></script>
    <script>
        // 3.创建模块
        var app =angular.module('myApp',[]);

        // 4.创建控制器
        app.controller('demoController',function($scope){
            // 可以当作构造函数来使用
            this.name="小明";
            $scope.age=12;
        })
    </script>
```

### 安全的创建控制器的方式
- 原因：angular在控制器的回调函数中是通过参数名来传递参数的。
- 通过将第二个参数改为数据组：数据的最后一个参数还是原来的fucntion,数据前的参数是我们想要anuglar传递的参数的字符串形式，fucntion里的参数需要与数组前面的元素一对应。
`app.controller('demoController',['$scope','$log',function($scope,$log){}])`



### 依赖注入的原理
- 核心是toString()
- 获取函数形参的方式




### 指令

- 在 AngularJS 中将前缀为 ng- 这种属性称之为指令，其作用就是为 DOM 元素调用方法、定义行为绑定数据等
- 简单说：当一个 Angular 应用启动，Angular 就会遍历 DOM 树来解析 HTML，根据指令不同，完成不同操作

- ng-bind
    + 用来解决表达式闪烁问题
    + `<p ng-bind="数据模型"></p>`
    *注意：只能够在双标签中使用ng-bind指令*

- ng-cloak
    + 用来解决表达式闪烁问题
    + `<p class="ng-cloak">{{name}}</p>`
    + 利用angular在加载会移除页面上所以名为ng-cloak的样式名的特性。

- ngSanitize模块
`npm install angular-sanitize`
    + 使用的是ng-bind-html指令来渲染数据模型。

- ng-repeat
    + 可以用来循环输出数组
    + 写在哪个元素上就是循环哪个元素。
    + 语法：类似于forin 循环
        > `<div ng-repeat="item in data ">{{item}}</div>`
    + track by $index 解决数组中数据有重得的问题
        + `<li ng-repeat="item in tesData track by $index"></li>`

    + 还可以用来渲染key,value对
    + ng-repeat 在遍历里会暴露一些数据模型,
        - $even:提供了一个布尔值，当为true时表示当前数据是第偶数条数据,从索引0开始计算
        - $odd:提供了一个布尔值，当为true时表示当前数据是第奇数条数据,从索引0开始计算
        - $first,$last ,$middle
ng-class:
    + 从多种样式中选择一个样式
        - 语法：类似于从一个key,value对象中获取其中一个属性的值
        - ng-class="{'A':'red','B':'blue','C':'green'}"
    + 从多种样式中选择多个
        - 语法：也是写一个key,value对象，这里的key是我们提供的类样式名，value是一个布尔值，为true时对应的key会被作为样式名加入到class中

ng-hide/ng-show
- ng-hide：需要一个布尔值：当为true时为隐藏当前元素
- ng-show: 需要一个布尔值：当为true时为显示当前元素

ng-if:需要一个布尔值：当为true时为显示当前元素
                        为false时是删除当前元素

ng-switch:与ng-switch-when同用，类似与js中的switch case

```html
    <div ng-switch="name">
            <div ng-switch-when="小明">我是小明</div>
            <div ng-switch-when="小红">我是小红</div>
            <div ng-switch-when="小月">我是小月</div>
    </div>
```

### 其他常用指令

- ng-checked：
  + 单选/复选是否选中,是单向数据绑定
- ng-selected：
  + 是否选中
- ng-disabled：
  + 是否禁用
- ng-readonly：
  + 是否只读

### 常用事件指令

不同于以上的功能性指令，Angular还定义了一些用于和事件绑定的指令：

- ng-blur：失去焦点
- ng-focus：获得焦点
- ng-change：改变事件
- ng-copy：复制事件
- ng-click： ng-click="add()"
- ng-dblclick：双击事件
- ng-submit： 表单提交事件

### 指令的标准使用方式
data-xxx,在使用angular指令时，只需要在原先的指令前加上data-前缀。
x-



## 流行框架第三天

### 复习指令
1. ng-app:相当于一个入口，告诉angular来管理我们页面的Html代码
2. ng-click:用于注册点击事件
3. ng-model:用于进行双向数据绑定，
4. ng-init:用于初始化数据模型
5. ng-controller:指向了创建的控制器。
6. ng-bind:也是能够绑定数据模型的值,只能作用于双标签元素
7. ng-cloak:利用了angular会移除所以样式名为ng-cloak的样式的特性。
8. ng-bind-html:用于安全的渲染html代码
9. ng-repeat:渲染数据列表, ng-repeat="item in data  track by $index"
10. ng-class:操作样式{key001:样式名001,key002:样式名002}['key001']
                {'样式名001':布尔值,'样式名002':布尔值}
11.ng-hide/ng-show:显示或隐藏页面元素
12.ng-if/ng-switch ng-switch-when




### 自定义指令简单介绍及使用
- 自定义指令无外乎增强了HTML,提供了额外的功能。
- 内部指令基本能满足我们的需求。
- 少数情况下我们有一些特殊的需要，可以通过自定义指令的方式实现：

- 通过 模块对象的directive方法创建
    + 有两个参数，第一个参数，是指令的名字：必须是驼峰命名法命名
                  第二个参数和控制器的第二个参数一样,在第二个参数的function里直接返回的一个obj对象
    + 使用时：需要将指令的名字转成小写，并以-分割原先在大小写字母
### 自定义指令中回函数里返回的对象的属性
- template:需要一个字符串，最终这个字符串值被被添加到自定义指令所在标签的innerHTML位置
- templateUrl:需要一个字符串，这个字符串是一个文本文件的路径,anuglar最终会异步请求这个文件，把拿到的内容插入到自定义指令所在的标签的innerHTML位置,
该字符串也可以是script标签的id值，把script标签中的内容当作模板字符串来使用
注意：script的type属性需要为"text/ng-template"

- restrict:也是需要一个字符，可以是A,E,C,M 这4个字符中任何一个，也可以任意的组合，A:以属性的形式使用，E:以自定义标签的形式使用，C:表示以类样式名的形式使用，M:以注释的形式使用
- replace: 需要一个布尔值，为true,会将自定义指令所在的标签替换为模板字符串。

- transclude:转置，是需要一个布尔值，为true时会把自定义指令所在标签的innerHTML值添加到模板字符串中，需要与ng-transclude指令配合使用，ng-transclude指令需要将值插入到哪个元素的innerHTML位置.不能与replace指令同用。

- scope:需要一个对象，可以获取到自定义指令所在标签的属性值：
    {
        属性名:'@test', 属性值需要以@开头,@后面是自定义指令所在标签的属性名，最终在模板字符串中通过表达式可以使用scope的属性名可以直接输出

        test:'@'// 是简写方式
    }
- link:指向一个function，这个function有三个参数：
    + scope: 类似于控制器中的$scope,也可以暴露一些值。
    + element:这是一个jqLite对象，是自定义指令所在标签的jqLite对象
    + attributes:是自定义指令所在标签的所以属性的集合.



## todomvc案例


### todomvc 简单介绍


### todomvc 功能分析

1.显示数据列表
2.添加任务

3.删除任务
    - 使用了数组的splice

4.修改任务
- 只是改变页面是否可以编辑的一个状态


5.切换是任务是否完成的状态

6.批量的切换任务是否完成的状态
    - 使用了ng-change事件

7.清除已完成任务
- 尽量不要在循环中添加或删除数组元素。

7.1 控制清除已完成任务按钮的显示与否 

8.显示未完成的任务数
- 是给ng-bind指定一个方法,方法最终会返回一个具体的值,
- ng-bind 会把这个值渲染到页面。

9.切换不同状态任务的显示与否



## 过滤器(filter)

### 格式化数据的过滤器
- currency 将数字转成货币的形式显示
><!-- 语法在数据模型后面加上 |currency  
        参数，通过冒号:的方式传递-->
    <p>{{money | currency :'￥' }}</p>

- date 将整数形式的日期转换为用户能够识别的形式;
><!-- 语法在数据模型后面加上 |currency  
        参数，通过冒号:的方式传递-->
    <p>{{money | currency :'￥' }}</p>

- limitTo 是控制字符串显示的长度
    + 有两个参数，第一个表示需要显示长度
                第二个表示从哪个索引开始显示

- orderBy,需要一个字符串作为参数：这个字符就是数组中元素的一个属性名
    ,默认是按升序排列的，如果给这个字符前加上一个-号表示降序排列.

- json

- 在js中使用过滤器的方式

```javascript
    // $filter其实是个方法
           // 第一个参数:就是过滤器的名字
           // 会返回一个方法
           //               + 至少有一个参数(就是使用到的数据)
           //               + 其他的参数依次是过滤器所使用到的参数
           var tmp = $filter('date')($scope.myDate,'yyyy年MM月-dd日 HH:mm:ss')
           $scope.tmp=tmp;
```

- 1234588910120
- 1234567891011

### 过滤数据的过滤器
- filter
- 一般是与ng-repeat指令共同使用
- 参数：可以是一个普通类型-angular会对这样的参数进行全局匹配;
        也可以是一个object对象-angular就会根据对象中的属性及属性值去数据中的每一个元素中寻找相应的属性，当前属性值相等的时候数据就会被显示。




## 流行框架第4天

### todomvc 切换不同状态任务的显示与否

### $location监视页面锚点的变化
- $location.url()方法可以获取到页面的锚点值，但是不包含#号
- 是通过$watch动态的监视$location.url()方法的返回值,再做相应的处理.
- 要把$location赋值给$scope的一个属性($scope.loaction=$location)

### 自定义服务
- 通过模块对象的service方法创建，参数类似与controller的参数
- service中的function是当作一个构造函数来使用的,
- 直接在控制器的注入service的名字，它就是这个构造函数的实例对象

### 抽象服务


### 回顾todomvc案例


## 路由

### 路由介绍


### 路由初步使用（ngRoute）
` npm instal angular-route`
- 通过模块的config方法来创建路由规则
- 有一个参数：类似于controller的第二个参数
- 有一个需要注入的参数:$routeProvider
    + 这个参数是用来设置具体的规则的
    + $routeProvier.when()
        - when第一个参数是当前url中锚点的值
        - when第二个参数是object对象：template属性
            - 最终angular会把template对应的模板字符串插入到页面拥有ng-view指令的标签的innerHTML位置.
            - controller属性，指向一个控制器,最终控制器的暴露的数据能够在template指定的字符串的使用。
        

### 路由参数
- 类似于过滤器中使用参数的形式
- when('/students/:name'),最终在控制器中可以通过$routeParams拿到这个参数，
    + $routeParams就是一个拥有name属性的对象.
    + 可以在参数后加个问号表示当前参数是可选。
        ——- when('/students/:name?')



- otherwise
- 用于匹配前面所有when方法没有匹配到规则。
    +指定了一个对象作为参数，这个对象有个属性:redirectTo:'/students/'

### 路由更新 $route
- 用于更新路由参数，$route.updateParams({})
    + 这个参数里的object对象是要求拥有  一个路由参数名作为属性
- 如果要改变整个锚点值，需要使用$location.url('/haha/')


### webApi介绍--
- url 
I/O

聚合数据

### API 
- application programming interface

console.log(name)
I/O 有输入有输出的方法

document.getElementById('idname')

### 豆瓣api介绍
http://api.douban.com/v2/movie/in_theaters

### 项目模板文件结构介绍

### 项目功能模块划分

### 完成首页模块

### 其他模块基本结构搭建

### 假数据绑定

- ng-src：为了解决浏览器一开始就会解析img的src属性的问题：
- ng-href

### $http
    - 这里的回调函数是通过调用一个then方法来传递回调函数的.
    <!-- (function(){
        function(){
            function(){
              af  
            }
        }
    }) -->



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

