/*
combined files : 

gallery/rainlib/1.0/index

*/
/*
 * @fileoverview
 * @author 子竹<zizhu.hzb@taobao.com>
 * @module rainlib
 * 1.0 for TAD
*/

KISSY.add('gallery/rainlib/1.0/index',function(S, Node, IO, Template) {
  var $, Rainlib, getStyle, glod, loader, render, views;
  $ = Node.all;
  views = {};
  views.draw = "<h3>{{caption}}</h3>\n<div style=\"{{style}}\" class=\"rain-draw\">\n  <div style=\"{{style}}\" class=\"{{cls}}\">\n      {{#each data}}<a target=\"_blank\" style=\"{{style}}\" href=\"{{link}}\" class=\"mask\"><em><s></s></em>\n          {{#if cls!=='default'}}<div class=\"product-info {{cls}}\">\n              <div class=\"draw-bg\"></div>\n              <dl class=\"rain-left\"><dt><img src=\"{{img}}\"></dt>\n                  <dd class=\"title\">{{title}}</dd>\n                  {{#if special!=='-1'}}<dd class=\"price\">￥<span class=\"special\">{{special}}</span></dd>{{/if}}\n              </dl>\n          </div>{{/if}}\n      </a>{{/each}}\n  </div>\n</div>";
  views.photo = "<h3>{{caption}}</h3>\n<div style=\"{{style}}\" class=\"{{cls}}\">\n      {{#each data}}<div class=\"wrap\">\n        <a href=\"{{link}}\" target=\"_blank\">\n          <img src=\"{{img}}\" alt=\"\">\n          <div class=\"rain-product-info\">\n            {{#if special!=='-1'}}<div class=\"special\">￥{{special}}</div>{{/if}}\n            <div class=\"title\">{{title}}</div>\n          </div>\n        </a>\n      </div>{{/each}}\n    </div>";
  views.recom = "<h3>{{caption}}</h3>\n<div style=\"{{style}}\" class=\"{{cls}}\">\n  <ul class=\"rain-left\">\n    {{#each data}}<li class=\"{{cls}}\">\n        <a href=\"{{link}}\" target=\"_blank\">\n            <img src=\"{{img}}\" alt=\"\">\n            <div class=\"rain-product-info\">\n              {{#if special!=='-1'}}<div class=\"special\">￥{{special}}</div>{{/if}}\n              <div class=\"title\">{{title}}</div>\n        </div></a></li>{{/each}}\n  </ul>\n</div>";
  loader = function(context) {
    var param, url;
    param = {};
    param["sellerid"] = context.args.sellerId;
    param["buyerid"] = context.args.userId;
    param["appid"] = 1;
    param["itemid"] = context.args.objectId;
    param["areaid"] = context.args.targetId;
    url = window.location.href;
    if (url.indexOf("daily") > -1 && url.indexOf(".net") > -1) {
      url = "http://tad.skip.daily.taobao.net";
    } else {
      url = "http://tad.t.taobao.com";
    }
    url += "/api/list";
    return new IO({
      url: url,
      type: "get",
      dataType: "jsonp",
      data: param,
      fail: context.error,
      timeout: 3000,
      jsonp: "callback",
      success: function(data) {
        if (!data) {
          return;
        }
        return render(data, context);
      }
    });
  };
  getStyle = function(attr) {
    var ch, k, matchs, result, v;
    if (!attr) {
      return "";
    }
    result = "";
    for (k in attr) {
      v = attr[k];
      matchs = k.match(/[A-Z]/);
      if (!!matchs && matchs.length > 0) {
        ch = matchs[0];
        k = k.replace(ch, "-" + ch.toLowerCase());
      }
      result += k + ":" + v + ";";
    }
    return result;
  };
  render = function(data, context) {
    var area, areaData, areaDataList, areaId, e, isRender, item, result, tpl, _i, _j, _len, _len1, _ref;
    isRender = false;
    try {
      for (areaId in data) {
        areaDataList = data[areaId];
        area = $("#" + areaId);
        if (!areaDataList[0].success) {
          continue;
        }
        isRender = true;
        result = "";
        for (_i = 0, _len = areaDataList.length; _i < _len; _i++) {
          areaData = areaDataList[_i];
          if (!areaData) {
            continue;
          }
          tpl = views[areaData.name];
          areaData.style = getStyle(areaData.style);
          _ref = areaData.data;
          for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
            item = _ref[_j];
            if (!!item.style) {
              item.style = getStyle(item.style);
            }
          }
          result += new Template(tpl).render(areaData);
        }
        if (result.length > 0) {
          area.html(result);
          area.show();
        } else {
          context.error();
        }
        glod(areaDataList[0].taskID, areaData.name);
      }
      context.result = true;
    } catch (_error) {
      e = _error;
      context.error(e);
    }
    if (isRender === false) {
      context.error(e);
    }
    return null;
  };
  glod = function(taskid, type) {
    var img, url;
    if (taskid === null) {
      return;
    }
    url = "http://log.mmstat.com/shopflow.3." + taskid + "?template=" + type + "&t=" + (new Date().getTime());
    img = new Image();
    return img.src = url;
  };
  Rainlib = (function() {
    function Rainlib(args, callback) {
      this.areas = args.targetId;
      this.args = args;
      this.data = args.data;
      this.result = false;
      this.isInit = false;
      this.callback = callback;
    }

    Rainlib.prototype.status = function() {
      return this.result;
    };

    Rainlib.prototype.error = function(arg) {
      if (!!this.callback) {
        this.callback();
      }
      return this.result = false;
    };

    Rainlib.prototype.setup = function() {
      if (this.isInit) {
        return this.result;
      }
      this.isInit = true;
      if (!!this.data) {
        render(this.data, this);
      } else {
        loader(this);
      }
      return this.result;
    };

    return Rainlib;

  })();
  return Rainlib;
}, {
  requires: ['node', 'ajax', 'xtemplate', 'gallery/rainlib/1.0/index.css']
});

