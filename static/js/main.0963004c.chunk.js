(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),s=(n(13),n(3)),o=n(4),u=n(6),l=n(5),p=n(7),m=(n(14),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={timeArray:n.getTimeArrays()},setInterval((function(){n.setState({timeArray:n.getTimeArrays()})}),1e3),n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"getTimeArrays",value:function(){var e=(new Date).getHours(),t=parseInt(e/5),n=parseInt(e%5),a=(new Date).getMinutes(),r=parseInt(a/5),c=parseInt(a%5),i=(new Date).getSeconds();return[t,n,r,c,parseInt(i/5),parseInt(i%5)]}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.state.timeArray.map((function(e){return r.a.createElement("div",{style:{display:"flex",width:"calc(100% - 100px)",height:56,justifyContent:"center"}},new Array(e).fill(0).map((function(e){return r.a.createElement("div",{style:{width:40,height:40,backgroundColor:"#fff",margin:8}})})))}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0963004c.chunk.js.map