/**
 * @fileoverview 
 * @author 子竹<zizhu.hzb@taobao.com>
 * @module rainlib
 **/
KISSY.add(function (S, Node,Base, IO) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Rainlib
     * @constructor
     * @extends Base
     */
    function Rainlib(comConfig) {
        var self = this;
        var load = function(){
          console.log(IO);
        }
        var error = function(){

        }
        self.setup  = function(id, userId){
          return;
          var bodyData = {};
          bodyData["id"] = id;
          bodyData["userId"] = userId;
          new IO({
            url:"",
            type: "get",
            dataType: "jsonp",
            data:bodyData,
            success: load,
            error:error
          });
        }
        //调用父类构造函数
        Rainlib.superclass.constructor.call(self, comConfig);
    }

    S.extend(Rainlib, Base, /** @lends Rainlib.prototype*/{

    }, {ATTRS : /** @lends Rainlib*/{

    }});
    return Rainlib;
}, {requires:['node', 'base', 'io', 'gallery/rainlib/1.0/index.css']});



