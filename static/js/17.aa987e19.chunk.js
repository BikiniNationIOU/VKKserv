(this["webpackJsonpbunny-interface"]=this["webpackJsonpbunny-interface"]||[]).push([[17],{798:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(15),l=a(22),i=a(0),s=a.n(i),o=a(81),u=a.n(o),m=a(60),f=a(23),p=a(78),d=Object(i.lazy)((function(){return Promise.all([a.e(1),a.e(12)]).then(a.bind(null,778))})),E=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,271))}));t.default=function(e){var t=e.pools,a=Object(m.a)().chainId,n=Object(i.useState)(a),o=Object(l.a)(n,2),v=o[0],h=o[1],b=Object(i.useCallback)(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[h]);if(u()(t))return null;var y=function(){switch(v){case f.a.ETH:return null;default:return t.filter((function(e){return e.portfolio.gt(p.d)})).map((function(e,t){return s.a.createElement("div",{key:"farms-row-engaged-".concat(t),className:"row"},s.a.createElement(d,{pool:e}))}))}}(),w=function(){switch(v){case f.a.ETH:return s.a.createElement("div",{className:"farms-under-construction"},s.a.createElement("iframe",{src:"https://giphy.com/embed/l41lHl8up3vAq0y4w",width:"100%",height:"100%",title:"ETH Farm - Under Construction",style:{position:"absolute"},frameBorder:"0",className:"giphy-embed",allowFullScreen:!0}),s.a.createElement("p",null,s.a.createElement("a",{href:"https://giphy.com/gifs/easter-bunny-carving-l41lHl8up3vAq0y4w"},"via GIPHY")));default:return t.filter((function(e){return e.portfolio.lte(p.d)})).map((function(e,t){return s.a.createElement("div",{key:"farms-row-remain-".concat(t),className:"row"},s.a.createElement(d,{pool:e}))}))}}();return s.a.createElement(E,null,s.a.createElement("div",{className:"farms-list-wrapper"},s.a.createElement("div",{className:"farms-list"},s.a.createElement("div",{className:"selector"},s.a.createElement("div",{className:"item no-select clickable ".concat(v!==f.a.ETH&&"active left"),onClick:function(){return b(f.a.BSC)}},"BSC Pool"),s.a.createElement("div",{className:"item no-select clickable ".concat(v===f.a.ETH&&"active right"),onClick:function(){return b(f.a.ETH)}},"ETH Pool")),!u()(y)&&s.a.createElement("div",{className:"section staked"},s.a.createElement("span",{className:"title"},"Deposited Pools (".concat(y.length,")")),y),w&&s.a.createElement("div",{className:"section"},s.a.createElement("span",{className:"title"},Array.isArray(w)?"Active Pools (".concat(w.length,")"):""),w))))}}}]);