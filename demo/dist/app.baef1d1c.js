webpackJsonp([1],{0:function(e,t,n){n("qzZF"),e.exports=n("lVK7")},"04RL":function(e,t){},"3XmJ":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("GiK3"),c=n.n(a),i=n("KSGD"),l=(n.n(i),n("PJh5")),u=(n.n(l),n("M4fF")),p=n.n(u),f=c.a.createElement("div",{className:"lottery-openrecord-title"},c.a.createElement("span",null,"期次"),c.a.createElement("span",null,"開獎號碼")),j=function(e){function t(){return r(this,t),o(this,e.call(this))}return s(t,e),t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"lotter-openrecord"},f,p.a.map(this.props.lotteryList,function(e,t){if(!(t>2))return c.a.createElement("div",{className:"lottery-openrecord-item"},c.a.createElement("span",null,e.expect.slice(4)),c.a.createElement("span",null,e.opencode.split(",").join(" ")))})))},t}(a.Component);j.defaultProps={lotteryList:[{expect:"000000",opencode:"00 00 00 00 00 00"},{expect:"000000",opencode:"00 00 00 00 00 00"},{expect:"000000",opencode:"00 00 00 00 00 00"}]},t.a=j},"7zhx":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("GiK3"),c=n.n(a),i=n("KSGD"),l=(n.n(i),n("PJh5")),u=(n.n(l),function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:"lottery-opentime"},c.a.createElement("div",{className:"expect"},"第",c.a.createElement("span",null,this.props.expect),"期 離截止時間"),c.a.createElement("div",{className:"timer"},this.props.opentime))},t}(a.Component));u.defaultProps={opentime:"00:00:00",expect:"2017000000"},t.a=u},"DP/h":function(e,t,n){"use strict";var r=n("fTIY"),o=[{path:"/",component:r.a,exact:!0},{path:"/lottery",component:r.b,exact:!0}];t.a=o},EZqn:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("GiK3"),c=n.n(a),i=n("PKY1"),l=n.n(i),u=n("PJh5"),p=n.n(u),f=n("04RL"),j=(n.n(f),n("7zhx")),m=n("EcQJ"),h=n("3XmJ"),y=function(e){function t(){r(this,t);var n=o(this,e.call(this));return n.fetchDataXhr=function(){return l.a("http://f.apiplus.cn/bj11x5.json",{method:"GET",headers:{},mode:"cors"})},n.state={openNumber:"",lastLottery:{},lotteryList:[]},n}return s(t,e),t.prototype.componentDidMount=function(){var e=this;this.fetchDataXhr().then(function(e){return e.json()}).then(function(t){console.log(t.data);var n=t.data,r=n[0].expect,o=n[0].opencode.split(","),s=n[0].opentime,a=n[0].opentimestamp;e.setState({lastLottery:{expect:r,opencode:o,opentime:s,opentimestamp:a},lotteryList:n})})},t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"lottery-container"},c.a.createElement("div",{className:"lottery-opentime-container"},c.a.createElement(j.a,{opentime:p.a(this.state.lastLottery.opentime).format("HH:mm:ss"),expect:this.state.lastLottery.expect})),c.a.createElement("div",{className:"lottery-opennumber-container"},c.a.createElement(m.a,{opencode:this.state.lastLottery.opencode})),c.a.createElement("div",{className:"lottery-openrecord-container"},c.a.createElement(h.a,{lotteryList:this.state.lotteryList}))))},t}(a.Component);t.a=y},EcQJ:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("GiK3"),c=n.n(a),i=n("KSGD"),l=(n.n(i),n("PJh5")),u=(n.n(l),n("M4fF")),p=n.n(u),f=function(e){function t(){return r(this,t),o(this,e.call(this))}return s(t,e),t.prototype.render=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"lotter-opennumber"},"11選5 第",c.a.createElement("span",null,this.props.expect),"期 離截止時間"),c.a.createElement("div",{className:"opennumber-row"},p.a.map(this.props.opencode,function(e,t){return c.a.createElement("div",{className:"opennumber",key:t},e)})))},t}(a.Component);f.defaultProps={opencode:["00","00","00","00","00"],expect:"2017000000"},t.a=f},I2I8:function(e,t){},MhvM:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("GiK3"),c=n.n(a),i=c.a.createElement("div",null,"我是首頁"),l=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i},t}(a.Component);t.a=l},fTIY:function(e,t,n){"use strict";var r=n("MhvM");n.d(t,"a",function(){return r.a});var o=n("EZqn");n.d(t,"b",function(){return o.a})},iCOP:function(e,t){},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("iCOP"),o=(n.n(r),n("F8kA")),s=n("GiK3"),a=n.n(s),c=n("O27J"),i=(n.n(c),n("pnOm")),l=a.a.createElement(o.a,null,a.a.createElement(i.a,null)),u=function(){return l};c.render(a.a.createElement(u,null),document.querySelector("#app"))},pnOm:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n("GiK3"),c=n.n(a),i=n("F8kA"),l=n("I2I8"),u=(n.n(l),n("GK12")),p=(n.n(u),n("DP/h")),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j=c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header-title"},"XXX娛樂"),c.a.createElement("div",{className:"tab-container"},c.a.createElement(i.b,{className:"button is-primary tab",to:"/"},"首頁"),c.a.createElement(i.b,{className:"button is-primary tab",to:"/lottery"},"投注頁")))),m=c.a.createElement("footer",{className:"footer"},"2015 XX娛樂, Topone 執行運營, Curacuo 政府牌照"),h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.a.createElement("div",null,j,c.a.createElement("div",{className:"content-container container"},c.a.createElement(i.d,null,p.a.map(function(e){return c.a.createElement(i.c,f({key:e.path},e))}))),m)},t}(a.Component);t.a=h},uslO:function(e,t,n){function r(e){return n(o(e))}function o(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};r.keys=function(){return Object.keys(s)},r.resolve=o,e.exports=r,r.id="uslO"}},[0]);
//# sourceMappingURL=app.baef1d1c.js.map