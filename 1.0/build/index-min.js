/*!build time : 2014-03-19 4:35:49 PM*/
KISSY.add("gallery/rainlib/1.0/index",function(a,b,c,d){var e,f,g,h,i;return e=b.all,i={},i.draw='<div class="rain-recom u3">\n  <ul class="rain-left">\n    <li><a href="" target="_blank"><img src="http://gtms01.alicdn.com/tps/i1/T1C1TmFkXaXXaC1Jrl-250-250.png" alt="">\n        <div class="rain-product-info">\n          <div class="title">\u6d4b\u8bd5</div>\n          <div class="price u-1-2">$12.4</div>\n          <div class="special u-1-2">$3.9</div>\n        </div></a></li>\n    {{#each items}}<li class="{{cls}}"><a href="" target="_blank"><img src="http://gtms01.alicdn.com/tps/i1/T1C1TmFkXaXXaC1Jrl-250-250.png" alt="">\n        <div class="rain-product-info">\n          <div class="title">{{title}}</div>\n          <div class="price u-1-2">{{price}}</div>\n          <div class="special u-1-2">{{special}}</div>\n        </div></a></li>{{/each}}\n  </ul>\n</div>',i.photo="\u76f8\u518c\u6a21\u677f",i.recom="\u63a8\u8350\u6a21\u677f",g=function(a){var b,d;return d={},d.id=a.userId,d.object=a.objectId,b=function(){return console.log("\u53d1\u751f\u5f02\u5e38\uff0c\u6253\u70b9\u5230\u5176\u5b83\u670d\u52a1\u5668"),a.target.hide()},new c({url:"http://tad.t.taobao.com",type:"get",dataType:"jsonp",data:d,fail:b,success:function(b){return a.result=!0,h(b,a.target)}})},h=function(a,b){var c,e;e=i[a.name];try{h=new d(e).render(a),b.html(h)}catch(f){c=f,error()}return null},f=function(){function a(a){self.target=b.all("#"+a.targetId),self.userId=a.userId,self.objectId=a.objectId,self.data=a.data,self.result=!1,self.isInit=!1}return a.prototype.setup=function(){var a,b;return self.isInit?self.result:(self.isInit=!0,b={cls:"small",title:"\u6d4b\u8bd5",price:12.8,special:18},a={cls:"test-cls",items:[b,b,b,b,b,b]},h=new d(i.draw).render(a),void self.target.html(h))},a}()},{requires:["node","io","xtemplate","gallery/gallery/rainlib/1.0/index.css"]});