/*
 * @fileoverview
 * @author 子竹<zizhu.hzb@taobao.com>
 * @module rainlib
*/

KISSY.add(function(S, Node, IO, Template) {
  var $, Rainlib, loader, render, views;
  $ = Node.all;
  views = {};
  views.draw = "<div class=\"rain-recom u3\">\n  <ul class=\"rain-left\">\n    <li><a href=\"\" target=\"_blank\"><img src=\"http://gtms01.alicdn.com/tps/i1/T1C1TmFkXaXXaC1Jrl-250-250.png\" alt=\"\">\n        <div class=\"rain-product-info\">\n          <div class=\"title\">测试</div>\n          <div class=\"price u-1-2\">$12.4</div>\n          <div class=\"special u-1-2\">$3.9</div>\n        </div></a></li>\n    {{#each items}}<li class=\"{{cls}}\"><a href=\"\" target=\"_blank\"><img src=\"http://gtms01.alicdn.com/tps/i1/T1C1TmFkXaXXaC1Jrl-250-250.png\" alt=\"\">\n        <div class=\"rain-product-info\">\n          <div class=\"title\">{{title}}</div>\n          <div class=\"price u-1-2\">{{price}}</div>\n          <div class=\"special u-1-2\">{{special}}</div>\n        </div></a></li>{{/each}}\n  </ul>\n</div>";
  views.photo = "相册模板";
  views.recom = "推荐模板";
  loader = function(target) {
    var error, param;
    param = {};
    param["id"] = target.userId;
    param["object"] = target.objectId;
    error = function() {
      console.log("发生异常，打点到其它服务器");
      return target.target.hide();
    };
    return new IO({
      url: "http://tad.t.taobao.com",
      type: "get",
      dataType: "jsonp",
      data: param,
      fail: error,
      success: function(data) {
        target.result = true;
        return render(data, target.target);
      }
    });
  };
  render = function(data, target) {
    var e, tpl;
    tpl = views[data.name];
    try {
      render = new Template(tpl).render(data);
      target.html(render);
    } catch (_error) {
      e = _error;
      error();
    }
    return null;
  };
  Rainlib = (function() {
    function Rainlib(args) {
      self.target = Node.all("#" + args.targetId[0]);
      self.userId = args.userId;
      self.objectId = args.objectId;
      self.data = args.data;
      self.result = false;
      self.isInit = false;
    }

    Rainlib.prototype.setup = function() {
      var data, html, item;
      if (self.isInit) {
        return self.result;
      }
      self.isInit = true;
      item = {
        cls: "small",
        title: "测试",
        price: 12.8,
        special: 18.0
      };
      data = {
        cls: "test-cls",
        items: [item, item, item, item, item, item]
      };
      render = new Template(views.draw).render(data);
      self.target.html(render);
      return;
      if (!!self.data) {
        html = render(self.data, self.target);
      } else {
        loader(self);
      }
      return self.result;
    };

    return Rainlib;

  })();
  return Rainlib;
}, {
  requires: ['node', 'ajax', 'xtemplate', 'gallery/rainlib/1.0/index.css']
});
