(function(e){function t(t){for(var a,c,o=t[0],f=t[1],d=t[2],l=0,j=[];l<o.length;l++)c=o[l],r[c]&&j.push(r[c][0]),r[c]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);i&&i(t);while(j.length)j.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var f=s[o];0!==r[f]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},r={app:0},n=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],f=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var i=f;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("64a9"),r=s.n(a);r.a},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("ba4c"),r=s.n(a),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"form-control",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?s:s[0]},function(t){return e.onChange(t)}]}},[s("option",{attrs:{disabled:"",value:"0"}},[e._v("--")]),e._l(e.users,function(t){return s("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.firstName)+" "+e._s(t.lastName))])})],2)])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm"},[s("table",{staticClass:"table",attrs:{id:"projects-table"}},[e._m(1),s("tbody",e._l(e.projects,function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.project.id))]),s("td",[e._v(e._s(e._f("formatDate")(t.project.startDate)))]),s("td",[e._v(e._s(e._f("date-diff")(t.project.startDate,t.assignedDate)))]),s("td",[e._v(e._s(e._f("formatDate")(t.project.endDate)))]),s("td",[e._v(e._s(t.project.credits))]),s("td",[e._v(e._s(e._f("activeFilter")(t.isActive)))])])}),0)])])])])])},c=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"jumbotron jumbotron-fluid"},[s("div",{staticClass:"container"},[s("h2",{staticClass:"display-4"},[e._v("User Projects")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Project Id")]),s("th",[e._v("Start Date")]),s("th",[e._v("Time to Start")]),s("th",[e._v("End Date")]),s("th",[e._v("Credits")]),s("th",[e._v("Status")])])])}],o=s("bc3a"),f=s.n(o),d="http://localhost:9000/api/users",i=f.a.create({baseURL:d,timeout:1e3}),l={getAllUsers:function(){return i.get("/",{transformResponse:[function(e){return e?JSON.parse(e):e}]})},getAllProjectsForUser:function(e){return i.get("/"+e+"/projects/",{transformResponse:[function(e){return e?JSON.parse(e):e}]})}},j=s("c1df"),u=s.n(j),b={name:"app",components:{},data:function(){return{users:null,selected:"0",projects:null}},mounted:function(){var e=this;l.getAllUsers().then(function(t){e.$log.debug("Data loaded: ",t.data),e.users=t.data})},methods:{onChange:function(e){var t=this;l.getAllProjectsForUser(e.target.value).then(function(e){t.$log.debug("Data loaded: ",e.data),t.projects=e.data})}},filters:{formatDate:function(e){if(!e)return"";var t=u()(e);return t.format("MMMM Do YYYY")},dateDiff:function(e,t){if(!e)return"";var s=864e5,a=new Date(e),r=new Date(t),n=a.getTime(),c=r.getTime(),o=n-c,f=Math.round(o/s);return f>0?f:"Started"},activeFilter:function(e){return e?"Active":"Inactive"}}},p=b,v=p,m=(s("034f"),s("2877")),h=Object(m["a"])(v,n,c,!1,null,null,null),g=h.exports,_=(s("ab8b"),s("85ff")),y=s.n(_);r.a.config.productionTip=!1;var k={isEnabled:!0,logLevel:"debug",stringifyArguments:!1,showLogLevel:!0,showMethodName:!1,separator:"|",showConsoleColors:!0};r.a.use(y.a,k),new r.a({el:"#app",template:"<App/>",components:{App:g}})},"64a9":function(e,t,s){}});
//# sourceMappingURL=app.b2f357f3.js.map