(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(36)},18:function(e,t,n){},20:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),c=(n(18),n(2)),l=n(3),s=n(5),u=n(4),m=n(6),d=n(9),p=n.n(d),h=(n(20),n(10)),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item.post;return o.a.createElement("div",null,o.a.createElement("div",null,e.organization_name),o.a.createElement("div",null,e.username),o.a.createElement(h.a,{videoId:e.youtube_id}))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={items:[],isLoaded:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("posts.json").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.items;return t?o.a.createElement("div",null,n.map(function(e){return o.a.createElement("div",null,o.a.createElement(v,{item:e}))})):o.a.createElement("div",null," Loading...  ")}}]),t}(a.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),o.a.createElement(f,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[13,2,1]]]);
//# sourceMappingURL=main.787c09f1.chunk.js.map