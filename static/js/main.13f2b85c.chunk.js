(this.webpackJsonpcheckers=this.webpackJsonpcheckers||[]).push([[0],{16:function(t,e,n){t.exports=n(33)},21:function(t,e,n){},22:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(3),r=n.n(a),c=n(14),i=n.n(c),o=(n(21),n(6)),u=n(1),s=n(2),l=n(4),p=n(0),h=n(5),m=(n(22),new(n(15).a)({initialState:{p:[[0,0],[0,2],[0,4],[0,6],[1,1],[1,3],[1,5],[1,7],[2,0],[2,2],[2,4],[2,6]],q:[[5,1],[5,3],[5,5],[5,7],[6,0],[6,2],[6,4],[6,6],[7,1],[7,3],[7,5],[7,7]],player:"p",opponent:"q"},player:function(t){return t.player},actions:function(t){return[[0,0]]},result:function(t,e){return"todo"},terminalTest:function(t){return 0===t.p.length||0===t.q.length||0===m.actions(t).length},utility:function(t){return t.p.length-t.q.length},heuristic:function(t){return t.p.length-t.q.length}})),f=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"colour",value:function(t,e){return(t+e)%2===0?"light-tile":"dark-tile"}},{key:"render",value:function(){return r.a.createElement("div",{className:this.colour(this.props.y,this.props.x)})}}]),e}(r.a.Component),y=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"row"},[0,1,2,3,4,5,6,7].map((function(e){return r.a.createElement(f,{x:e,y:t.props.y,state:t.props.state,key:e.toString()})})))}}]),e}(r.a.Component),b=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"board"},[0,1,2,3,4,5,6,7].map((function(e){return r.a.createElement(y,{y:e,state:t.props.state,key:e.toString()})})))}}]),e}(r.a.Component),v=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"checker",style:(t=this.props.y,e=this.props.x,{top:"calc(50vh - 50vmin + 1.25vmin + "+12.5*(7-t)+"vmin)",left:"calc(50vw - 50vmin + 1.25vmin + "+12.5*e+"vmin)"})});var t,e}}]),e}(r.a.Component),j=function(t){function e(){return Object(u.a)(this,e),Object(l.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return m.initialState[this.props.player].map((function(t){var e=Object(o.a)(t,2),n=e[0],a=e[1];return r.a.createElement(v,{y:n,x:a,key:n+","+a})}))}}]),e}(r.a.Component);var O=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,{state:""}),r.a.createElement(j,{player:"p"}),r.a.createElement(j,{player:"q"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.13f2b85c.chunk.js.map