(function(t){function e(e){for(var r,a,u=e[0],s=e[1],c=e[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"JetRuby",contain:"",src:"https://hhcdn.ru/employer-logo/2777580.png",transition:"scale-transition",width:"40"}})],1)]),n("v-content",[n("Logger")],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mb-4"},[n("v-btn",{staticClass:"mr-4",attrs:{large:"",color:"primary",outlined:""},on:{click:function(e){return t.onClick(1)}}},[t._v("Button 1")]),n("v-btn",{staticClass:"mr-4",attrs:{large:"",color:"primary",outlined:""},on:{click:function(e){return t.onClick(2)}}},[t._v("Button 2")]),n("v-btn",{staticClass:"mr-4",attrs:{large:"",color:"primary",outlined:""},on:{click:function(e){return t.onClick(3)}}},[t._v("Button 3")])],1),n("v-row",[n("v-textarea",{attrs:{solo:"",label:"Logs",readonly:"","auto-grow":"",value:t.formattedLogs,loading:t.isProcessing}})],1),n("v-row",{attrs:{justify:"end"}},[n("v-btn",{attrs:{large:"",color:"secondary"},on:{click:function(e){t.logs=[],t.queue=[],t.isProcessing=!1}}},[t._v("RESET")])],1)],1)},u=[],s=(n("99af"),n("a15b"),n("d3b7"),n("2909")),c={name:"Logger",data:function(){return{logs:[],queue:[],isProcessing:!1}},computed:{formattedLogs:function(){return this.logs.join("\n")}},methods:{formatDate:function(t){return t.toLocaleDateString("ru-RU",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})},printString:function(t,e,n,r){return"".concat(this.formatDate(e),": Нажата кнопка ").concat(n,", задержка ").concat(r," сек., время нажатия ").concat(this.formatDate(t))},getPromise:function(t,e,n){var r=this;return new Promise((function(o){setTimeout((function(){o(r.printString(t,new Date,n,e))}),1e3*e)}))},processQueue:function(){var t=this;this.queue.length&&(this.isProcessing=!0,this.getPromise.apply(this,Object(s["a"])(this.queue.shift())).then((function(e){t.logs.push(e),t.queue.length?t.processQueue():t.isProcessing=!1})))},onClick:function(t){var e=Math.floor(10*Math.random())+1,n=new Date;this.queue.push([n,e,t]),this.isProcessing||this.processQueue()}}},l=c,f=n("2877"),p=Object(f["a"])(l,a,u,!1,null,null,null),d=p.exports,g={name:"LoggerApp",components:{Logger:d},data:function(){return{}}},h=g,v=Object(f["a"])(h,o,i,!1,null,null,null),m=v.exports,b=n("ce5b"),y=n.n(b);n("bf40");r["default"].use(y.a);var w=new y.a({});r["default"].config.productionTip=!1,new r["default"]({vuetify:w,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.e71f8947.js.map