(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1168:function(e,t,n){var c=n(491),r=n(495),a=n(242),o=n(95),i=n(183),s=n(305),l=n(307),u=n(306),b=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||a(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!c(e).length;for(var n in e)if(b.call(e,n))return!1;return!0}},1393:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(18),i=n(3),s=n.n(i),l=n(6),u=n(12),b=n(9),j=n(0),d=n(2),h=n(75),x=n(43),p=n(841),O=n.n(p),f=n(1168),m=n.n(f),g=n(151),v=n(64),y=n(94),k=n(22),w=n(35),B=n(808),C=n(190),T=n(13),S=n(239),D=n(443),P=n(113),A=n(919),I=n(872),E=n(811),Y=n(884),L=n(10),z=n(4),M=n(1),F=z.e.label(c||(c=Object(L.a)(["\n  color: ",";\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.text})),V=Object(z.e)(F)(r||(r=Object(L.a)(["\n  font-size: 20px;\n"]))),W=Object(z.e)(F)(a||(a=Object(L.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]))),H=function(e){var t=e.children;return Object(M.jsx)(d.hc,{color:"failure",mb:"4px",children:t})},q=function(e){var t=e.errors;return Object(M.jsx)(d.m,{mt:"8px",children:t.map((function(e){return Object(M.jsx)(H,{children:e},e)}))})},N=n(39),J=n(216),K=n.n(J),R=n(50),U=["onRemove","onTextInput"],Q=function(e){var t=e.onRemove,n=e.onTextInput,c=Object(R.a)(e,U),r=Object(j.useState)(!1),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(j.useState)(!1),u=Object(b.a)(s,2),h=u[0],x=u[1];return Object(M.jsxs)(d.m,{position:"relative",mb:"16px",children:[Object(M.jsx)(d.eb,Object(l.a)(Object(l.a)({},c),{},{onChange:function(e){var t=e.currentTarget.value;i(h&&0===t.length),x(!0),n(t)},isWarning:o})),t&&Object(M.jsx)(d.m,{position:"absolute",right:"8px",top:"0px",zIndex:30,children:Object(M.jsx)(d.bb,{variant:"text",onClick:t,children:Object(M.jsx)(d.L,{})})})]})},_=function(){return{id:K()(),value:""}},G=function(e){var t=e.choices,n=e.onChange,c=Object(T.b)().t,r=t.filter((function(e){return e.value.length>0})).length>=2;return Object(M.jsxs)(d.u,{children:[Object(M.jsx)(d.x,{children:Object(M.jsx)(d.Y,{as:"h3",scale:"md",children:c("Choices")})}),Object(M.jsxs)(d.v,{children:[t.map((function(e,r){var a=e.id,o=e.value;return Object(M.jsx)(Q,{scale:"lg",onTextInput:function(e){var c=Object(N.a)(t),r=c.findIndex((function(e){return e.id===a}));c[r].value=e,n(c)},placeholder:c("Input choice text"),value:o,onRemove:r>1?function(){n(t.filter((function(e){return e.id!==a})))}:void 0},a)})),Object(M.jsx)(d.q,{type:"button",onClick:function(){n([].concat(Object(N.a)(t),[_()]))},disabled:!r,children:c("Add Choice")})]})]})},X=n(340),Z=n(784),$=n(755),ee=function(e,t){if(!Object(X.default)(e)||!Object(X.default)(t))return null;var n=Object(Z.default)(e,"yyyy-MM-dd"),c=Object(Z.default)(t,"HH:mm:ss");return Object($.default)("".concat(n,"T").concat(c)).getTime()/1e3},te=n(813),ne=n(102),ce=n(886),re=n(885),ae=function(e){var t=e.block,n=e.onDismiss,c=Object(T.b)().t,r=Object(j.useState)(!0),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(ce.a)(t,o),l=s.isLoading,u=s.total,h=s.cakeBalance,x=s.cakeVaultBalance,p=s.cakePoolBalance,O=s.poolsBalance,f=s.cakeBnbLpBalance,m=Object(ne.a)().theme;return Object(M.jsx)(d.vb,{title:c("Voting Power"),onDismiss:function(){i(!1),n()},headerBackground:m.colors.gradients.cardHeader,children:Object(M.jsx)(d.m,{mb:"24px",width:"320px",children:l?Object(M.jsx)(d.W,{height:"450px",alignItems:"center",justifyContent:"center",children:Object(M.jsx)(d.Vb,{size:80})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(re.a,{total:u,cakeBalance:h,cakeVaultBalance:x,cakePoolBalance:p,poolsBalance:O,cakeBnbLpBalance:f}),Object(M.jsx)(d.q,{variant:"secondary",onClick:n,width:"100%",mt:"16px",children:c("Close")})]})})})},oe=Object(j.lazy)((function(){return Promise.all([n.e(5),n.e(19)]).then(n.bind(null,1379))}));t.default=function(){var e=Object(j.useState)({name:"",body:"",choices:O()(2).map(_),startDate:null,startTime:null,endDate:null,endTime:null,snapshot:0}),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)(!1),a=Object(b.a)(r,2),i=a[0],p=a[1],f=Object(j.useState)({}),L=Object(b.a)(f,2),z=L[0],F=L[1],H=Object(T.b)().t,J=Object(x.c)().account,K=Object(g.b)(),R=Object(h.g)().push,U=Object(k.a)().library,Q=Object(y.a)(),Z=Q.toastSuccess,$=Q.toastError,ne=Object(d.Fc)(Object(M.jsx)(ae,{block:n.snapshot})),ce=Object(b.a)(ne,1)[0],re=n.name,ie=n.body,se=n.choices,le=n.startDate,ue=n.startTime,be=n.endDate,je=n.endTime,de=n.snapshot,he=function(e,t){var n=e.name,c=e.body,r=e.choices,a=e.startDate,o=e.startTime,i=e.endDate,s=e.endTime,l=e.snapshot,u={};n||(u.name=[t("%field% is required",{field:"Title"})]),c||(u.body=[t("%field% is required",{field:"Body"})]),r.length<2&&(u.choices=[t("Please create a minimum of %num% choices",{num:2})]);var b=r.some((function(e){return!e.value}));2===r.length&&b&&(u.choices=Array.isArray(u.choices)?[].concat(Object(N.a)(u.choices),[t("Choices must not be empty")]):u.choices=[t("Choices must not be empty")]),Object(X.default)(a)||(u.startDate=[t("Please select a valid date")]),Object(X.default)(o)||(u.startTime=[t("Please select a valid time")]),Object(X.default)(i)||(u.endDate=[t("Please select a valid date")]),Object(X.default)(s)||(u.endTime=[t("Please select a valid time")]);var j=ee(a,o);return ee(i,s)<j&&(u.endDate=Array.isArray(u.endDate)?[].concat(Object(N.a)(u.endDate),[t("End date must be after the start date")]):u.endDate=[t("End date must be after the start date")]),0===l&&(u.snapshot=[t("Invalid snapshot")]),u}(n,H),xe=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,c,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,p(!0),n=JSON.stringify(Object(l.a)(Object(l.a)({},Object(E.e)()),{},{type:v.f.PROPOSAL,payload:{name:re,body:ie,snapshot:de,start:ee(le,ue),end:ee(be,je),choices:se.filter((function(e){return e.value})).map((function(e){return e.value})),metadata:Object(E.d)(),type:"single-choice"}})),e.next=6,Object(C.c)(U,J,n);case 6:if(!(c=e.sent)){e.next=16;break}return r={address:J,msg:n,sig:c},e.next=11,Object(E.i)(r);case 11:a=e.sent,R("/voting/proposal/".concat(a.ipfsHash)),Z(H("Proposal created!")),e.next=17;break;case 16:$(H("Error"),H("Unable to sign payload"));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),$(H("Error"),(null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.error)),console.error(e.t0),p(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(e,t){c((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e,t))})),F((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,!0))}))},Oe=function(e){return function(t){pe(e,t)}},fe=Object(j.useMemo)((function(){return{hideIcons:J===te.a?[]:["guide","fullscreen","preview","side-by-side","image"]}}),[J]);return Object(j.useEffect)((function(){K>0&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{snapshot:K})}))}),[K,c]),Object(M.jsxs)(S.a,{py:"40px",children:[Object(M.jsx)(d.m,{mb:"48px",children:Object(M.jsxs)(d.n,{children:[Object(M.jsx)(I.a,{to:"/",children:H("Home")}),Object(M.jsx)(I.a,{to:"/voting",children:H("Voting")}),Object(M.jsx)(d.hc,{children:H("Make a Proposal")})]})}),Object(M.jsx)("form",{onSubmit:xe,children:Object(M.jsxs)(Y.a,{children:[Object(M.jsxs)(d.m,{children:[Object(M.jsxs)(d.m,{mb:"24px",children:[Object(M.jsx)(V,{htmlFor:"name",children:H("Title")}),Object(M.jsx)(d.eb,{id:"name",name:"name",value:re,scale:"lg",onChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;pe(n,c)},required:!0}),he.name&&z.name&&Object(M.jsx)(q,{errors:he.name})]}),Object(M.jsxs)(d.m,{mb:"24px",children:[Object(M.jsx)(V,{htmlFor:"body",children:H("Content")}),Object(M.jsx)(d.hc,{color:"textSubtle",mb:"8px",children:H("Tip: write in Markdown!")}),Object(M.jsx)(oe,{id:"body",name:"body",onTextChange:function(e){pe("body",e)},value:ie,options:fe,required:!0}),he.body&&z.body&&Object(M.jsx)(q,{errors:he.body})]}),ie&&Object(M.jsx)(d.m,{mb:"24px",children:Object(M.jsxs)(d.u,{children:[Object(M.jsx)(d.x,{children:Object(M.jsx)(d.Y,{as:"h3",scale:"md",children:H("Preview")})}),Object(M.jsx)(d.v,{p:"0",px:"24px",children:Object(M.jsx)(A.a,{children:ie})})]})}),Object(M.jsx)(G,{choices:se,onChange:function(e){pe("choices",e)}}),he.choices&&z.choices&&Object(M.jsx)(q,{errors:he.choices})]}),Object(M.jsx)(d.m,{children:Object(M.jsxs)(d.u,{children:[Object(M.jsx)(d.x,{children:Object(M.jsx)(d.Y,{as:"h3",scale:"md",children:H("Actions")})}),Object(M.jsxs)(d.v,{children:[Object(M.jsxs)(d.m,{mb:"24px",children:[Object(M.jsx)(W,{children:H("Start Date")}),Object(M.jsx)(D.a,{name:"startDate",onChange:Oe("startDate"),selected:le,placeholderText:"YYYY/MM/DD"}),he.startDate&&z.startDate&&Object(M.jsx)(q,{errors:he.startDate})]}),Object(M.jsxs)(d.m,{mb:"24px",children:[Object(M.jsx)(W,{children:H("Start Time")}),Object(M.jsx)(D.c,{name:"startTime",onChange:Oe("startTime"),selected:ue,placeholderText:"00:00"}),he.startTime&&z.startTime&&Object(M.jsx)(q,{errors:he.startTime})]}),Object(M.jsxs)(d.m,{mb:"24px",children:[Object(M.jsx)(W,{children:H("End Date")}),Object(M.jsx)(D.a,{name:"endDate",onChange:Oe("endDate"),selected:be,placeholderText:"YYYY/MM/DD"}),he.endDate&&z.endDate&&Object(M.jsx)(q,{errors:he.endDate})]}),Object(M.jsxs)(d.m,{mb:"24px",children:[Object(M.jsx)(W,{children:H("End Time")}),Object(M.jsx)(D.c,{name:"endTime",onChange:Oe("endTime"),selected:je,placeholderText:"00:00"}),he.endTime&&z.endTime&&Object(M.jsx)(q,{errors:he.endTime})]}),J&&Object(M.jsxs)(d.W,{alignItems:"center",mb:"8px",children:[Object(M.jsx)(d.hc,{color:"textSubtle",mr:"16px",children:H("Creator")}),Object(M.jsx)(d.ib,{href:Object(w.e)(J,"address"),children:Object(B.a)(J)})]}),Object(M.jsxs)(d.W,{alignItems:"center",mb:"16px",children:[Object(M.jsx)(d.hc,{color:"textSubtle",mr:"16px",children:H("Snapshot")}),Object(M.jsx)(d.ib,{href:Object(w.e)(de,"block"),children:de})]}),J?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(d.q,{type:"submit",width:"100%",isLoading:i,endIcon:i?Object(M.jsx)(d.h,{spin:!0,color:"currentColor"}):null,disabled:!m()(he),mb:"16px",children:H("Publish")}),Object(M.jsxs)(d.hc,{color:"failure",as:"p",mb:"4px",children:[H("You need at least %count% voting power to publish a proposal.",{count:te.f})," "]}),Object(M.jsx)(d.q,{scale:"sm",type:"button",variant:"text",onClick:ce,p:0,children:H("Check voting power")})]}):Object(M.jsx)(P.a,{width:"100%",type:"button"})]})]})})]})})]})}},808:function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;return"".concat(e.substring(0,t),"...").concat(e.substring(e.length-n))}},811:function(e,t,n){"use strict";n.d(t,"h",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return B}));var c=n(18),r=n(39),a=n(6),o=n(3),i=n.n(o),s=n(12),l=n(14),u=n.n(l),b=n(21),j=n(97),d=n(29),h=n(64),x=n(92),p=n(813),O=function(e){return e.author.toLowerCase()===p.a.toLowerCase()},f=function(e,t){switch(t){case h.e.COMMUNITY:return e.filter((function(e){return!O(e)}));case h.e.CORE:return e.filter((function(e){return O(e)}));case h.e.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},g=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(b.f)(),decimals:18}}]}},v=function(){return{version:p.e,timestamp:(Date.now()/1e3).toFixed(),space:p.c}},y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.e,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,x.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(j.f,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},B=function(e){return e.reduce((function(e,t){var n,c=new u.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.d)}},813:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",a="https://gateway.ipfs.io/ipfs",o="0.1.3",i="cake.eth",s=10},862:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var c,r=n(6),a=n(10),o=(n(0),n(2)),i=n(4),s=n(1),l=i.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),u=function(e){return Object(s.jsx)(o.m,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},872:function(e,t,n){"use strict";var c,r=n(10),a=n(74),o=n(4),i=Object(o.e)(a.a)(c||(c=Object(r.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primaryBright}));t.a=i},884:function(e,t,n){"use strict";var c,r=n(10),a=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},885:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),a=n(862),o=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,s=e.cakePoolBalance,l=e.poolsBalance,u=e.cakeBnbLpBalance,b=Object(r.b)().t;return Object(o.jsxs)(a.a,{mb:"0",children:[Object(o.jsx)(c.hc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:b("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(o.jsx)(c.hc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Overview")}),Object(o.jsxs)(a.b,{children:[Object(o.jsx)(c.hc,{color:"secondary",children:b("Your Voting Power")}),Object(o.jsx)(c.hc,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(o.jsx)(c.hc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Your Cake Held Now")}),Object(o.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:b("Wallet")}),Object(o.jsx)(c.hc,{textAlign:"right",children:n.toFormat(3)})]}),Object(o.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:b("Manual VICE Pool")}),Object(o.jsx)(c.hc,{textAlign:"right",children:s.toFormat(3)})]}),Object(o.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:b("Auto CAKE Pool")}),Object(o.jsx)(c.hc,{textAlign:"right",children:i.toFormat(3)})]}),Object(o.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:b("Other Syrup Pools")}),Object(o.jsx)(c.hc,{textAlign:"right",children:l.toFormat(3)})]}),Object(o.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.hc,{color:"textSubtle",fontSize:"16px",children:b("CAKE BNB LP")}),Object(o.jsx)(c.hc,{textAlign:"right",children:u.toFormat(3)})]})]})}},886:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(6),o=n(12),i=n(9),s=n(0),l=n(43),u=n(29),b=n(184),j=n(21),d=n(92),h=n(14),x=n.n(h),p=n(811),O={verificationHash:null,cakeBalance:u.d,cakeVaultBalance:u.d,cakePoolBalance:u.d,poolsBalance:u.d,cakeBnbLpBalance:u.d,total:u.d};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,u=Object(s.useState)(O),h=Object(i.a)(u,2),f=h[0],m=h[1],g=Object(s.useState)(!!c),v=Object(i.a)(g,2),y=v[0],k=v[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,i,s,l,u,h,O,f,g,v,y;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(p.g)(c,s,o);case 14:l=n.sent,u=l.cakeBalance,h=l.cakeBnbLpBalance,O=l.cakePoolBalance,f=l.total,g=l.poolsBalance,v=l.cakeVaultBalance,y=l.verificationHash,t&&m((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:y,cakeBalance:new x.a(u),cakeBnbLpBalance:new x.a(h),cakePoolBalance:new x.a(O),poolsBalance:new x.a(g),cakeVaultBalance:new x.a(v),total:new x.a(f)})}));case 23:return n.prev=23,k(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,k]),Object(a.a)(Object(a.a)({},f),{},{isLoading:y})}},919:function(e,t,n){"use strict";var c,r,a,o=n(6),i=(n(0),n(924)),s=n.n(i),l=n(960),u=n.n(l),b=n(10),j=n(2),d=n(4),h=n(1),x=d.e.table(c||(c=Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),p=d.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=function(e){return Object(h.jsx)(j.Y,Object(o.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:O,h2:O,h3:O,h4:O,h5:O,h6:O,p:function(e){return Object(h.jsx)(j.hc,Object(o.a)({as:"p",my:"16px"},e))},table:x,ol:function(e){return Object(h.jsx)(p,Object(o.a)({as:"ol"},e))},ul:function(e){return Object(h.jsx)(p,Object(o.a)({as:"ul"},e))},pre:d.e.pre(a||(a=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(h.jsx)(s.a,Object(o.a)({remarkPlugins:[u.a],components:f},e))}}}]);
//# sourceMappingURL=9.7e606057.chunk.js.map