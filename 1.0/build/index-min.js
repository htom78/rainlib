/*!build time : 2014-04-02 2:30:05 PM*/
KISSY.add("gallery/rainlib/1.0/index",function(a,b,c,d){var e,f,g,h,i,j,k;return e=b.all,k={},k.draw='<h3>{{caption}}</h3>\n<div style="{{style}}" class="rain-draw">\n  <div style="{{style}}" class="{{cls}}">\n      {{#each data}}<a target="_blank" style="{{style}}" href="{{link}}" class="mask"><em></em>\n          {{#if cls!==\'default\'}}<div class="product-info" class="cls">\n              <div class="draw-bg"></div>\n              <dl class="rain-left"><dt><img src="{{img}}"></dt>\n                  <dd class="title">{{title}}</dd>\n                  <dd class="price">\uffe5<span class="special">{{special}}</span></dd>\n              </dl>\n          </div>{{/if}}\n      </a>{{/each}}\n  </div>\n</div>',k.photo='<h3>{{caption}}</h3>\n<div style="{{style}}" class="{{cls}}">\n      {{#each data}}<div class="wrap">\n        <a href="{{link}}" target="_blank">\n          <img src="{{img}}" alt="">\n          <div class="rain-product-info">\n            <div class="title">{{title}}</div>\n            <div class="special">\uffe5{{special}}</div>\n          </div>\n        </a>\n      </div>{{/each}}\n    </div>',k.recom='<h3>{{caption}}</h3>\n<div style="{{style}}" class="{{cls}}">\n  <ul class="rain-left">\n    {{#each data}}<li class="{{cls}}">\n        <a href="{{link}}" target="_blank">\n            <img src="{{img}}" alt="">\n            <div class="rain-product-info">\n              <div class="title">{{title}}</div>\n              <div class="special">\uffe5{{special}}</div>\n        </div></a></li>{{/each}}\n  </ul>\n</div>',i=function(a){var b,d;return b={},b.sellerid=a.args.sellerId,b.buyerid=a.args.userId,b.appid=1,b.itemid=a.args.objectId,b.areaid=a.args.targetId,d=window.location.href,d=d.indexOf("daily")>-1&&d.indexOf(".net")>-1?"http://tad.skip.daily.taobao.net":"http://tad.skip.taobao.com",d+="/api/list",new c({url:d,type:"get",dataType:"jsonp",data:b,fail:a.error,jsonp:"callback",success:function(b){return b?j(b,a):void 0}})},g=function(a){var b,c,d,e,f;if(!a)return"";e="";for(c in a)f=a[c],d=c.match(/[A-Z]/),d&&d.length>0&&(b=d[0],c=c.replace(b,"-"+b.toLowerCase())),e+=c+":"+f+";";return e},j=function(a,c){var e,f,i,j,l,m,n,o,p,q,r,s,t;try{for(j in a){for(i=a[j],e=b.all("#"+j),n="",p=0,r=i.length;r>p;p++)if(f=i[p],f&&f.success){for(o=k[f.name],f.style=g(f.style),t=f.data,q=0,s=t.length;s>q;q++)m=t[q],m.style&&(m.style=g(m.style));n+=new d(o).render(f)}n.length>0&&e.html(n),h(a.taskID,f.name)}c.result=!0}catch(u){l=u,c.error(l)}return null},h=function(a,b){var c,d;if(null!==a)return d="http://log.mmstat.com/shopflow.3."+a+"?template="+b+"&t="+(new Date).getTime(),c=new Image,c.src=d},f=function(){function a(a,b){this.areas=a.targetId,this.args=a,this.data=a.data,this.result=!1,this.isInit=!1,this.callback=b}return a.prototype.status=function(){return this.result},a.prototype.error=function(){return this.callback&&this.callback(),this.result=!1},a.prototype.setup=function(){var a;return this.isInit?this.result:(this.isInit=!0,this.data?a=j(this.data,this):i(this),this.result)},a}()},{requires:["node","ajax","xtemplate","gallery/rainlib/1.0/index.css"]});