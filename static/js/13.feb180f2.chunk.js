(this["webpackJsonpbunny-interface"]=this["webpackJsonpbunny-interface"]||[]).push([[13],{243:function(e,n,t){"use strict";t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return r}));var c="#FFFFFF",a="#EC6998",r="#4ED8DE"},253:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c=t(0),a=t.n(c),r=t(24),u=(t(258),function(e){var n=e.children,t=e.href,c=e.to,u=Object(r.g)();return a.a.createElement("span",{className:"text-link clickable",onClick:function(){c?u.push(c):t&&window.open(t,"_blank")}},n)})},258:function(e,n,t){},500:function(e,n,t){},805:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var c=t(0),a=t.n(c),r=t(499),u=t(305),o=t(51),i=t(55),s=function(){var e=Object(o.b)();return Object(c.useCallback)((function(n){e(Object(i.c)({key:n}))}),[e])},l=t(474),f=t(475),p=t(253),m=t(78),b=t(243),v=t(60),d=function(e){var n=e.hash,t=e.success,c=e.summary,r=Object(v.a)().chainId;return a.a.createElement("div",{className:"tx-popup"},a.a.createElement("div",{className:"tx-popup-icon"},t?a.a.createElement(l.a,{color:b.b,size:24}):a.a.createElement(f.a,{color:b.a,size:24})),a.a.createElement("div",{className:"tx-popup-info"},a.a.createElement("span",{className:"hash"},null!==c&&void 0!==c?c:Object(m.z)(n)),r&&a.a.createElement(p.a,{href:Object(m.h)(n)},"View on bscscan")))},h=function(e){var n=e.removeAfterMs,t=e.content,o=e.popKey,i=s(),l=Object(c.useCallback)((function(){return i(o)}),[o,i]);Object(c.useEffect)((function(){if(null!==n){var e=setTimeout((function(){return l()}),n);return function(){return clearTimeout(e)}}}),[n,l]);var f=Object(r.b)({from:{width:"100%"},to:{width:"0%"},config:{duration:null!==n&&void 0!==n?n:void 0}});return a.a.createElement("div",{className:"popup"},a.a.createElement(u.a,{className:"popup-close clickable",size:18,onClick:l}),a.a.createElement(d,{hash:t.txn.hash,success:t.txn.success,summary:t.txn.summary}),null!==n?a.a.createElement(r.a.div,{className:"popup-fader",style:f}):null)},E=function(){var e=Object(o.c)((function(e){return e.application.popupList}));return Object(c.useMemo)((function(){return e.filter((function(e){return e.show}))}),[e])},k=(t(500),function(){var e=E();return a.a.createElement("div",{className:"popups-wrapper no-select"},e.map((function(e){return a.a.createElement(h,{key:e.key,content:e.content,popKey:e.key,removeAfterMs:e.removeAfterMs})})))})}}]);