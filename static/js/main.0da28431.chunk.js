(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),s=n.n(i),c=(n(16),n(4)),m=n(5),l=n(8),o=n(6),h=n(9),d=n(1),b=n(7),k=n.n(b);n(17);var u=function(e){return r.a.createElement("div",{id:"whole-app"},r.a.createElement("header",{id:"Header"},r.a.createElement("img",{src:e.logo,className:"App-logo",alt:"logo"}),r.a.createElement("h1",null,"Steven's Pomodoro Clock")),r.a.createElement("main",{id:"Main"},r.a.createElement("div",{className:"flex-third"},r.a.createElement("h3",{id:"break-label"},"Break Length"),r.a.createElement("p",{class:"incDec",id:"break-increment",onClick:e.breakIncrement},"+"),r.a.createElement("p",{id:"break-length"},e.breakTime),r.a.createElement("p",{class:"incDec",id:"break-decrement",onClick:e.breakDecrement},"-")),r.a.createElement("div",{className:"flex-third",id:"timer"},r.a.createElement("h3",{id:"timer-label"},"Session"),r.a.createElement("div",{id:"time-left"},"25:00"),r.a.createElement("div",{className:"timer-buttons"},r.a.createElement("p",{id:"start_stop"},"Start/Stop"),r.a.createElement("p",{id:"reset"},"Reset"))),r.a.createElement("div",{className:"flex-third"},r.a.createElement("h3",{id:"session-label"},"Session Length"),r.a.createElement("p",{class:"incDec",id:"session-increment",onClick:e.seshIncrement},"+"),r.a.createElement("p",{id:"session-length"},e.seshTime),r.a.createElement("p",{class:"incDec",id:"session-decrement",onClick:e.seshDecrement},"-"))))},E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(o.a)(t).call(this))).state={breakTime:5,seshTime:25},e.handleBreakIncrement=e.handleBreakIncrement.bind(Object(d.a)(Object(d.a)(e))),e.handleBreakDecrement=e.handleBreakDecrement.bind(Object(d.a)(Object(d.a)(e))),e.handleSeshIncrement=e.handleSeshIncrement.bind(Object(d.a)(Object(d.a)(e))),e.handleSeshDecrement=e.handleSeshDecrement.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"handleBreakIncrement",value:function(){this.setState(function(e){return{breakTime:e.breakTime+1}})}},{key:"handleBreakDecrement",value:function(){0===this.state.breakTime?this.setState({breakTime:0}):this.setState(function(e){return{breakTime:e.breakTime-1}})}},{key:"handleSeshIncrement",value:function(){this.setState(function(e){return{seshTime:e.seshTime+1}})}},{key:"handleSeshDecrement",value:function(){0===this.state.seshTime?this.setState({seshTime:0}):this.setState(function(e){return{seshTime:e.seshTime-1}})}},{key:"render",value:function(){return r.a.createElement(u,{logo:k.a,breakIncrement:this.handleBreakIncrement,breakTime:this.state.breakTime,breakDecrement:this.handleBreakDecrement,seshIncrement:this.handleSeshIncrement,seshTime:this.state.seshTime,seshDecrement:this.handleSeshDecrement})}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.0da28431.chunk.js.map