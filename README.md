## rainlib

* 版本：1.0
* 教程：[http://gallery.kissyui.com/rainlib/1.0/guide/index.html](http://gallery.kissyui.com/rainlib/1.0/guide/index.html)
* demo：[http://gallery.kissyui.com/rainlib/1.0/demo/index.html](http://gallery.kissyui.com/rainlib/1.0/demo/index.html)

## 使用说明
  * rainlib是彩虹装修系统的前端渲染包，负责从后端加载数据，在指定的区域选择指定的模板渲染数据
  * 通过gallary引入rainlib组件

## 函数调用
``` javascript
var args = {}; //参数对象
args["targetId"] = ["render"];
args["userId"] = "";
args["objectId"] = "";
args["data"] = {};
var callback = function(){
  alert("渲染异常");
}

var rain = new Rainlib(args, callback);
var result = rain.setup(); //启动装修

```
## 参数说明
``` json
{ 
  "targetId":["渲染区域的ID","支持多个ID"],
  "userId":"当前用户ID",
  "objectId":"当前的商品对象或页面对象",
  "data":"数据源对象，可以为空"
}
```
## 返回值说明
* 返回值bool类型，true渲染成功，false渲染失败


## changelog

### V1.0

    [!] 彩虹装修第一版发布，支持自定义区，图片混排，图片相册三个组件
    [!] 组件更新完成


