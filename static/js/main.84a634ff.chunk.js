(this["webpackJsonpaima-checkers-gui"]=this["webpackJsonpaima-checkers-gui"]||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),s=a.n(i),o=a(5),l=a(4),c=a(10),h=a(2),u=a(3),p=a(6),m=a(1),d=a(7),b=(a(25),a(8)),f=a(12),v=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"colour",value:function(e,t){return(this.props.y+this.props.x)%2===1?"light-tile":e&&t?"dark-tile active":"dark-tile"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:[this.props.y,this.props.x].join("-"),className:this.colour(this.props.highlighted,this.props.showHighlight),onClick:function(){return e.props.parentCallback(e.props.highlighted)}})}}]),t}(r.a.Component),g=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board"},[7,6,5,4,3,2,1,0].map((function(t){return r.a.createElement("div",{className:"row",key:t},[0,1,2,3,4,5,6,7].map((function(a){return r.a.createElement(v,{highlighted:e.props.highlightedSquares.some((function(e){var n=Object(o.a)(e,2),r=n[0],i=n[1];return r===t&&i===a})),showHighlight:e.props.highlights,y:t,x:a,state:e.props.state,parentCallback:function(n){return e.props.parentCallback(t,a,n)},key:a})})))})))}}]),t}(r.a.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"checkerStyle",value:function(e,t){return{top:"calc(50vh - 50vmin + 1.25vmin + "+12.5*(7-e)+"vmin)",left:"calc(50vw - 50vmin + 1.25vmin + "+12.5*t+"vmin)"}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{onClick:function(){return e.props.parentCallback()},className:("p"===this.props.player?"checker-dark":"checker-light")+(this.props.highlighted?" highlighted":"")+(this.props.royal?" royal":""),style:this.checkerStyle(this.props.y,this.props.x)})}}]),t}(r.a.Component),k=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.pieces.map((function(t){var a=Object(o.a)(t,2),n=a[0],i=a[1];return r.a.createElement(y,{player:e.props.player,selectedChecker:e.props.selectedChecker,highlighted:e.props.highlightedCheckers.some((function(e){return Object(b.c)(e,[n,i])})),parentCallback:function(){return e.props.parentCallback(n,i)},y:n,x:i,royal:e.props.pieces.find((function(e){return Object(b.c)(e,[n,i])}))[2],key:n+","+i})}))}}]),t}(r.a.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dialog help"},r.a.createElement("div",{className:"bottomed"},r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("hide")}},"Hide help.")),r.a.createElement("div",null,r.a.createElement("p",null,"Highlights are ",this.props.highlights?"enabled. ":"disabled. ")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("highlights",!e.props.highlights)}},this.props.highlights?"Disable them. ":"Enable them. ")),r.a.createElement("div",null,r.a.createElement("p",null,"You win the game if your opponent cannot do any moves and you have more pieces than them. In each round, you can move one of your checkers forward to a neighbouring empty black square. If this square is occupied by your opponent but the next square in this direction is free, then you can jump to the free square whilst your opponent will lose their checker. After a jump, you can perform another jump in the same round. If you reach the last row with a checker, it will be crowned and you can also move and jump backwards with it. When a checker jumps over a crowned checker, it will take over the crown. The same rules apply to both players. The player with the brown checkers starts.")),r.a.createElement("div",null,r.a.createElement("p",null,"You can choose an AI for each player. The Random Moves AI will perform random, valid moves. The other AIs presume are perfect and presume that you are perfect. The Dumb AI anticipates ",O[this.props.limits.dumb]," rounds, the Intermediate AI ",O[this.props.limits.intermediate]," rounds, and the Smart AI ",O[this.props.limits.smart]," rounds.")),r.a.createElement("div",null,r.a.createElement("p",null,"This is an open-source game. You are very welcome to report bugs and to contribute.")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return window.open("https://github.com/davidpomerenke/checkers","_blank")}},"Find it on GitHub.")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("hide")}},"Hide help."))))}}]),t}(r.a.Component),O={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six"},C=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"message",value:function(e,t,a,n,r){var i;return"invalid move"===e?i=2!==t.selectedChecker.length?"Please select the checker you want to move.":(a+n)%2===1?"You can only move diagonally \u2013 that is, to another black square.":(a-t.selectedChecker[0])*Object(b.d)(t.state)<=0?"You can only move forward (unless you are royal).":b.a.actions(t.state).some((function(e){return Object(b.c)(e[0],t.selectedChecker)&&Object(b.b)(e[0],e[1])/2===2}))&&Object(b.b)(t.selectedChecker,[a,n])/2===1?"There is a jump available, so you need to jump.":"You can only move one step at a time (unless you jump over your opponent's checker).":"invalid checker"===e&&(t.state.player!==r?i=2===t.selectedChecker.length?"You can only move to an empty square.":("p"===t.state.player?" Brown ":" Beige ")+" is next.":b.a.actions(t.state).some((function(e){return Object(b.c)(e[0],[a,n])}))||(i=b.a.actions(t.state).some((function(e){return Object(b.b)(e[0],e[1])/2===2}))&&!b.a.actions(t.state).some((function(e){return Object(b.c)(e[0],[a,n])&&Object(b.b)(e[0],e[1])/2===2}))?"There is a jump available for one or more different checkers, so you need to perform one of these jumps.":"All moves of this checker are blocked.")),i}},{key:"render",value:function(){var e=this,t=this.message.apply(this,Object(l.a)(this.props.error));return t?r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("help")}},"Read the rules."))):""}}]),t}(r.a.Component),E=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={help:!1},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=function(t,a){return"help"===a?e.setState({help:!0}):e.props.parentCallback({ai:[t,a]})};return r.a.createElement("div",{className:"subtitles"+(this.state.help?"":" marginal")},this.state.help&&r.a.createElement(j,{highlights:this.props.highlights,limits:this.props.limits,parentCallback:function(t){return function(t){return"hide"===t?e.setState({help:!1}):e.props.parentCallback({highlights:!e.props.highlights})}(t)}}),this.props.error.length>0&&!this.state.help&&r.a.createElement(C,{error:this.props.error,parentCallback:function(t){return e.setState({help:!0})}}),void 0===this.props.ai.p&&!this.state.help&&r.a.createElement(w,{p:"p",parentCallback:function(e){return t("p",e)},error:this.props.error}),void 0!==this.props.ai.p&&void 0===this.props.ai.q&&!this.state.help&&r.a.createElement(w,{p:"q",parentCallback:function(e){return t("q",e)},error:this.props.error}),b.a.terminalTest(this.props.state)&&r.a.createElement(S,{state:this.props.state}))}}]),t}(r.a.Component),w=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,0===this.props.error.length&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"p"===this.props.p?"Brown starts.":"Beige is next.")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("help")}},"Read the rules."))),r.a.createElement("div",null,r.a.createElement("p",null,"Select an AI for the brown side:")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("random")}},"Random Moves AI")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("dumb")}},"Dumb AI")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("intermediate")}},"Intermediate AI")),r.a.createElement("div",null,r.a.createElement("span",{onClick:function(){return e.props.parentCallback("smart")}},"Smart AI")))}}]),t}(r.a.Component),S=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,b.a.heuristic(this.props.state)>0?"Brown":"Beige"," wins. Congratulations! ",r.a.createElement("br",null),"Reload to play again."))}}]),t}(r.a.Component);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(c.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={pruning:!1,limits:{dumb:1,intermediate:2,smart:3},highlights:!0,pauseTime:700},A=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(p.a)(this,Object(m.a)(t).call(this))).state={state:b.a.initialState,oldState:b.a.initialState,selectedChecker:[],ai:{p:void 0,q:void 0},error:[],highlights:I.highlights,displayQueue:[]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(g,{highlightedSquares:b.a.actions(this.state.state).filter((function(t){return Object(b.c)(t[0],e.state.selectedChecker)})).map((function(e){return e[e.length-1]})),highlights:this.state.highlights,parentCallback:function(t,a,n){return e.moveResult(t,a,n)}}),["p","q"].map((function(t){return r.a.createElement(k,{key:t,player:t,pieces:e.state.state[t],selectedChecker:e.state.selectedChecker,highlightedCheckers:e.state.highlights&&e.state.state.player===t&&!e.state.ai[e.state.state.player]?b.a.actions(e.state.state).map((function(e){return e[0]})):[],parentCallback:function(a,n){return e.highlightResult(a,n,t)}})})),r.a.createElement(E,{parentCallback:function(t){"highlights"in t?e.setState({highlights:t.highlights}):"ai"in t&&(e.setState({ai:q({},e.state.ai,Object(c.a)({},t.ai[0],t.ai[1]))}),setTimeout((function(){return e.aiMoves()}),0))},error:this.state.error,ai:this.state.ai,state:this.state.state,highlights:this.state.highlights,limits:I.limits}))}},{key:"moveResult",value:function(e,t,a){var n=this;if(a){var r=this.state.ai;void 0===this.state.ai.p?r.p=!1:void 0===this.state.ai.q&&(r.q=!1),this.setState({ai:r}),this.setState({displayQueue:[b.a.actions(this.state.state).filter((function(a){return Object(b.c)(a[0],n.state.selectedChecker)&&Object(b.c)(a[a.length-1],[e,t])}))[0]]}),setTimeout((function(){return n.move()}),0)}else this.setState({error:["invalid move",this.state,e,t]})}},{key:"highlightResult",value:function(e,t,a){a===this.state.state.player&&b.a.actions(this.state.state).some((function(a){return Object(b.c)(a[0],[e,t])}))?this.setState({selectedChecker:[e,t],error:[]}):this.setState({error:["invalid checker",this.state,e,t,a]})}},{key:"move",value:function(){var e=this;if(!b.a.terminalTest(this.state.state)&&this.state.displayQueue.length>0){var t=this.state.displayQueue[0];this.state.displayQueue.length>1||t.length>2?setTimeout((function(){return e.move()}),I.pauseTime):setTimeout((function(){return e.aiMoves()}),I.pauseTime),x(this.state.state.player,t),this.setState({state:q({},b.a.result(this.state.state,t.slice(0,2)),{player:t.length<=2&&this.state.displayQueue.length<=1?this.state.state.opponent:this.state.state.player,opponent:t.length<=2&&this.state.displayQueue.length<=1?this.state.state.player:this.state.state.opponent}),displayQueue:[].concat(Object(l.a)(t.length>2?[t.slice(1)]:[]),Object(l.a)(this.state.displayQueue.slice(1))),error:[],selectedChecker:[]})}}},{key:"aiMoves",value:function(){var e=this,t={p:I.pruning?f.a:f.d,q:I.pruning?f.b:f.c},a=function(a){var n;e.setState({displayQueue:["random"===e.state.ai[a]?(n=b.a.actions(e.state.state),n[Math.floor(Math.random()*n.length)]):t[a](b.a,e.state.state,I.limits[e.state.ai[a]]).action]}),setTimeout((function(){return e.move()}),I.pauseTime+I.animationTime)};this.state.ai.p&&"p"===this.state.state.player?a("p"):this.state.ai.q&&"q"===this.state.state.player&&a("q")}}]),t}(r.a.Component),x=function(e,t){return console.log(("p"===e?"brown: ":"beige: ")+t.map((function(e){var t=Object(o.a)(e,2);return t[0]+", "+t[1]})).join(" -> "))},Q=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.84a634ff.chunk.js.map