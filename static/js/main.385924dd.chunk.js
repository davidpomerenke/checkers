(this.webpackJsonpcheckers=this.webpackJsonpcheckers||[]).push([[0],{18:function(t,e,n){t.exports=n(34)},23:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=n(5),s=n(8),u=n(3),l=n(4),p=n(6),h=n(1),f=n(7),m=n(2),b=(n(23),new(n(17).a)({initialState:{p:[[0,0,!1],[0,2,!1],[0,4,!1],[0,6,!1],[1,1,!1],[1,3,!1],[1,5,!1],[1,7,!1],[2,0,!1],[2,2,!1],[2,4,!1],[2,6,!1]],q:[[5,1,!1],[5,3,!1],[5,5,!1],[5,7,!1],[6,0,!1],[6,2,!1],[6,4,!1],[6,6,!1],[7,1,!1],[7,3,!1],[7,5,!1],[7,7,!1]],player:"p",opponent:"q"},player:function(t){return t.player},actions:function(t){return t[t.player].flatMap((function(e){var n=Object(m.a)(e,3),a=n[0],r=n[1],i=n[2];return q(i).flatMap((function(e){return[].concat(Object(c.a)(v(t,[a,r,i],e)),Object(c.a)(d(t,[a,r,i],e)))}))})).filter((function(t,e,n){return!n.some((function(t){return T(t[0],t[1])/2===2}))||T(t[0],t[1])/2===2}))},result:function(t,e){return S(t,e,!0)},terminalTest:function(t){return 0===t.p.length||0===t.q.length||0===b.actions(t).length},utility:function(t){return t.p.length-t.q.length},heuristic:function(t){return t.p.length-t.q.length}})),v=function(t,e,n){return O(g(t,e,n))&&!k(t,g(t,e,n))?[[e,j(t,e,n)]]:[]},d=function t(e,n,a){var r=Object(m.a)(n,3),i=r[0],o=r[1],s=r[2],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return O(g(e,[i,o],a,2))&&!k(e,g(e,[i,o],a,2))&&C(e,g(e,[i,o],a),e.opponent)?[[].concat(Object(c.a)(u),[[i,o,s],j(e,[i,o,s],a,2)])].concat(Object(c.a)(q(y(e,[i,o,s],a,2)).flatMap((function(n){return t(1===u.length?e:b._result(e,u),j(e,[i,o,s],a,2),n,[].concat(Object(c.a)(u),[[i,o,s]]))})))):[]},g=function(t,e,n){var a=Object(m.a)(e,3),r=a[0],i=a[1],o=(a[2],Object(m.a)(n,2)),c=o[0],s=o[1],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return[r+c*E(t)*u,i+s*u]},y=function(t,e,n){var a=Object(m.a)(e,3),r=a[0],i=a[1],o=a[2],c=Object(m.a)(n,2),s=c[0],u=c[1],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return o||r+s*E(t)*l===3.5+3.5*E(t)||2===l&&t[t.opponent].find((function(e){var n=Object(m.a)(e,2),a=n[0],o=n[1];return a===r+s*E(t)&&o===i+u}))[2]},j=function(t,e,n){var a=Object(m.a)(e,3),r=a[0],i=a[1],o=a[2],s=Object(m.a)(n,2),u=s[0],l=s[1],p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return[].concat(Object(c.a)(g(t,[r,i,o],[u,l],p)),[y(t,[r,i,o],[u,l],p)])},O=function(t){var e=Object(m.a)(t,2),n=e[0],a=e[1];return n>=0&&n<=7&&a>=0&&a<=7},k=function(t,e){return["p","q"].some((function(n){return C(t,e,n)}))},C=function(t,e,n){return t[n].some((function(t){return w(e,t)}))},E=function(t){return"p"===t.player?1:-1},w=function(t,e){var n=Object(m.a)(t,2),a=n[0],r=n[1],i=Object(m.a)(e,2),o=i[0],c=i[1];return a===o&&r===c},q=function(t){return[[1,-1],[1,1]].concat(Object(c.a)(t?[[-1,-1],[-1,1]]:[]))},S=function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n.length>=2?M(t(e,n.slice(0,n.length-1)),n[n.length-2],n[n.length-1],a):e},M=function(t,e,n,a){var r;return r={},Object(s.a)(r,t.player,[].concat(Object(c.a)(t[t.player].filter((function(t){return!w(t,e)}))),[n])),Object(s.a)(r,t.opponent,t[t.opponent].filter((function(t){return T(e,n)/2===1||!w(t,x(e,n))}))),Object(s.a)(r,"player",a?t.opponent:t.player),Object(s.a)(r,"opponent",a?t.player:t.opponent),r},T=function(t,e){var n=Object(m.a)(t,2),a=n[0],r=n[1],i=Object(m.a)(e,2),o=i[0],c=i[1];return Math.abs(o-a)+Math.abs(c-r)},x=function(t,e){var n=Object(m.a)(t,2),a=n[0],r=n[1],i=Object(m.a)(e,2);return[(a+i[0])/2,(r+i[1])/2]},D=function(t,e,n){return t.actions(e).map((function(a){return{action:a,outcome:A(t,t.result(e,a),n-1)}})).reduce((function(t,e){return e.outcome>t.outcome?e:t}))},P=function(t,e,n){return t.actions(e).map((function(a){return{action:a,outcome:Q(t,t.result(e,a),n-1)}})).reduce((function(t,e){return e.outcome<t.outcome?e:t}))},Q=function(t,e,n){return t.terminalTest(e)?t.utility(e):n<1?t.heuristic(e):t.actions(e).reduce((function(a,r){return Math.max(a,A(t,t.result(e,r),n-1))}),-1/0)},A=function(t,e,n){return t.terminalTest(e)?t.utility(e):n<1?t.heuristic(e):t.actions(e).reduce((function(a,r){return Math.min(a,Q(t,t.result(e,r),n-1))}),1/0)},B=function(t,e,n){return t.actions(e).map((function(a){return{action:a,outcome:R(t,t.result(e,a),n-1,-1/0,1/0)}})).reduce((function(t,e){return e.outcome>t.outcome?e:t}))},I=function(t,e,n){return t.actions(e).map((function(a){return{action:a,outcome:N(t,t.result(e,a),n-1,-1/0,1/0)}})).reduce((function(t,e){return e.outcome<t.outcome?e:t}))},N=function(t,e,n,a,r){if(t.terminalTest(e))return t.utility(e);if(n<1)return t.heuristic(e);var i=-1/0,o=!0,c=!1,s=void 0;try{for(var u,l=t.actions(e)[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var p=u.value;if((i=Math.max(i,R(t,t.result(e,p),n,a,r)))>=r)return i;a=Math.max(a,i)}}catch(h){c=!0,s=h}finally{try{o||null==l.return||l.return()}finally{if(c)throw s}}return i},R=function(t,e,n,a,r){if(t.terminalTest(e))return t.utility(e);if(n<1)return t.heuristic(e);var i=1/0,o=!0,c=!1,s=void 0;try{for(var u,l=t.actions(e)[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var p=u.value;if((i=Math.min(i,N(t,t.result(e,p),n,a,r)))<=a)return i;r=Math.min(r,i)}}catch(h){c=!0,s=h}finally{try{o||null==l.return||l.return()}finally{if(c)throw s}}return i},H=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"colour",value:function(t,e){return(this.props.y+this.props.x)%2===1?"light-tile":t&&e?"dark-tile active":"dark-tile"}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{ref:[this.props.y,this.props.x].join("-"),className:this.colour(this.props.highlighted,this.props.showHighlight),onClick:function(){return t.props.parentCallback(t.props.highlighted)}})}}]),e}(r.a.Component),Y=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"board"},[7,6,5,4,3,2,1,0].map((function(e){return r.a.createElement("div",{className:"row",key:e},[0,1,2,3,4,5,6,7].map((function(n){return r.a.createElement(H,{highlighted:t.props.highlightedSquares.some((function(t){var a=Object(m.a)(t,2),r=a[0],i=a[1];return r===e&&i===n})),showHighlight:t.props.showHighlight,y:e,x:n,state:t.props.state,parentCallback:function(a){return t.props.parentCallback(e,n,a)},key:n})})))})))}}]),e}(r.a.Component),J=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t,e,n=this;return r.a.createElement("div",{onClick:function(){n.props.parentCallback()},className:("p"===this.props.player?"checker-dark":"checker-light")+(this.props.highlighted?" highlighted":"")+(this.props.royal?" royal":""),style:(t=this.props.y,e=this.props.x,{top:"calc(50vh - 50vmin + 1.25vmin + "+12.5*(7-t)+"vmin)",left:"calc(50vw - 50vmin + 1.25vmin + "+12.5*e+"vmin)"})})}}]),e}(r.a.Component),L=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return this.props.pieces.map((function(e){var n=Object(m.a)(e,2),a=n[0],i=n[1];return r.a.createElement(J,{player:t.props.player,selectedChecker:t.props.selectedChecker,highlighted:t.props.highlightedCheckers.some((function(t){return w(t,[a,i])})),parentCallback:function(){return t.props.parentCallback(a,i)},y:a,x:i,royal:t.props.pieces.find((function(t){return w(t,[a,i])}))[2],key:a+","+i})}))}}]),e}(r.a.Component),W=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"subtitles"},""!==this.props.message&&r.a.createElement("p",null,this.props.message,r.a.createElement("br",null)),void 0===this.props.pai&&r.a.createElement(F,{p:"p",parentCallback:function(e){return t.props.parentCallback("p",e)}}),void 0!==this.props.pai&&void 0===this.props.qai&&r.a.createElement(F,{p:"q",parentCallback:function(e){return t.props.parentCallback("q",e)}}))}}]),e}(r.a.Component),F=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"ai-select"},r.a.createElement("div",null,r.a.createElement("p",null,"p"===this.props.p?"Brown starts.":"Beige is next.")),r.a.createElement("div",null,r.a.createElement("span",null,"Read the rules.")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,"Select an AI for the brown side:")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return t.props.parentCallback("random")}},"Random Moves AI")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return t.props.parentCallback("dumb")}},"Dumb AI")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return t.props.parentCallback("intermediate")}},"Intermediate AI")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return t.props.parentCallback("smart")}},"Smart AI")))}}]),e}(r.a.Component),$=function(t,e,n,a,r){var i="";return"invalid move"===t?i=2!==e.selectedChecker.length?"Please select the checker you want to move.":(n+a)%2===1?"You can only move diagonally \u2013 that is, to another black square.":(n-e.selectedChecker[0])*E(e.state)<=0?"You can only move forward (unless you are royal).":b.actions(e.state).some((function(t){return w(t[0],e.selectedChecker)&&T(t[0],t[1])/2===2}))&&T(e.selectedChecker,[n,a])/2===1?"There is a jump available, so you need to jump.":"You can only move one step at a time (unless you jump over your opponent's checker).":"invalid checker"===t&&(e.state.player!==r?i=2===e.selectedChecker.length?"You can only move to an empty square.":("p"===e.state.player?" Brown ":" Beige ")+" is next.":b.actions(e.state).some((function(t){return w(t[0],[n,a])}))||(i=b.actions(e.state).some((function(t){return T(t[0],t[1])/2===2}))&&!b.actions(e.state).some((function(t){return w(t[0],[n,a])&&T(t[0],t[1])/2===2}))?"There is a jump available for one or more different checkers, so you need to perform one of these jumps.":"For some reason, you cannot move this checker.")),i},_=function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("p",null,b.heuristic(this.props.state)>0?"Brown":"Beige"," wins. Congratulations! ",r.a.createElement("br",null),"Doubleclick to play again.")}}]),e}(r.a.Component);function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var K={pruning:!1,limitLevels:{dumb:1,intermediate:2,smart:3},pauseTime:2e3,highlightsDefault:!0},U=function(t,e){return console.log(("p"===t?"brown: ":"beige: ")+e.map((function(t){var e=Object(m.a)(t,2);return e[0]+", "+e[1]})).join(" -> "))},V=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(h.a)(e).call(this))).state={state:b.initialState,selectedChecker:[],ai:{p:void 0,q:void 0},message:"",highlights:K.highlightsDefault,displayQueue:[]},setTimeout((function(){return t.regularActions()}),K.pauseTime),t}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"app",onDoubleClick:function(){return t.handleDoubleClick()}},r.a.createElement(Y,{highlightedSquares:b.actions(this.state.state).filter((function(e){return w(e[0],t.state.selectedChecker)})).map((function(t){return t[t.length-1]})),showHighlight:this.state.highlights,parentCallback:function(e,n,a){return t.moveResult(e,n,a)}}),["p","q"].map((function(e){return r.a.createElement(L,{key:e,player:e,pieces:t.state.state[e],selectedChecker:t.state.selectedChecker,highlightedCheckers:t.state.highlights&&t.state.state.player===e?b.actions(t.state.state).map((function(t){return t[0]})):[],parentCallback:function(n,a){return t.highlightResult(n,a,e)}})})),r.a.createElement(W,{message:this.state.message,parentCallback:function(e,n){var a=t.state.ai;a[e]=n,t.setState({ai:a})},pai:this.state.ai.p,qai:this.state.ai.q}))}},{key:"handleDoubleClick",value:function(){b.terminalTest(this.state.state)&&this.setState({state:b.initialState,selectedChecker:[],ai:{p:void 0,q:void 0}})}},{key:"moveResult",value:function(t,e,n){var a=this;if(n){var r=this.state.ai;void 0===this.state.ai.p?r.p=!1:void 0===this.state.ai.q&&(r.q=!1),this.setState({ai:r}),this.setState({displayQueue:[b.actions(this.state.state).filter((function(n){return w(n[0],a.state.selectedChecker)&&w(n[n.length-1],[t,e])}))[0]]})}else this.setState({message:$("invalid move",this.state,t,e)})}},{key:"highlightResult",value:function(t,e,n){n===this.state.state.player&&b.actions(this.state.state).some((function(n){return w(n[0],[t,e])}))&&this.setState({selectedChecker:[t,e],message:""}),this.setState({message:$("invalid checker",this.state,t,e,n)})}},{key:"regularActions",value:function(){var t=this;if(this.state.displayQueue.length>0){var e=this.state.displayQueue[0];1===e.length?console.log("magovi"):e.length>=2&&(console.log(this.state.state),U(this.state.state.player,e),this.setState({state:G({},b.result(this.state.state,e.slice(0,2)),{player:e.length<=2&&this.state.displayQueue.length<=1?this.state.state.opponent:this.state.player,opponent:e.length<=2&&this.state.displayQueue.length<=1?this.state.state.player:this.state.opponent}),displayQueue:[].concat(Object(c.a)(e.length>2?[e.slice(1)]:[]),Object(c.a)(this.state.displayQueue.slice(1))),message:"",selectedChecker:[]}))}else b.terminalTest(this.state.state)?this.setState({message:r.a.createElement(_,{state:"this.state.state"})}):this.aiMoves();setTimeout((function(){return t.regularActions()}),K.pauseTime)}},{key:"aiMoves",value:function(){var t=this,e=K.pruning?B:D,n=K.pruning?I:P,a=function(a){var r,i;if("random"===t.state.ai[a]){r=(i=b.actions(t.state.state))[Math.floor(Math.random()*i.length)]}else r=function(t){return"p"===t?e:n}(a)(b,t.state.state,K.limitLevels[t.state.ai[a]]).action;U(a,r),t.setState({displayQueue:[r]})};this.state.ai.p&&"p"===this.state.state.player?a("p"):this.state.ai.q&&"q"===this.state.state.player&&a("q")}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.385924dd.chunk.js.map