(this.webpackJsonpmbnb=this.webpackJsonpmbnb||[]).push([[0],{78:function(e,t,a){e.exports=a(88)},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),u=a(12),l=a.n(u),o=a(37),i=a(105),m=a(106),b=a(109),f=a(107),p=a(102),E=a(104),w=a(50),x=a.n(w),d=a(45),v=a(43),h=a(46),y=a(47),g=a(44),D=a(55),O=a(29),j=Object(O.a)((function(e){var t=e.stat,a=e.abbr;return r.a.createElement("div",{className:"chart-wrapper"},r.a.createElement(d.a,null,r.a.createElement(v.a,null),r.a.createElement(h.a,{valueSuffix:"BYN"}),r.a.createElement(y.a,null),r.a.createElement(g.a,null,r.a.createElement(D.a,{name:a,data:t}))))}),x.a),C=function(e){var t=e.data,a=e.stat;if(!t.Cur_OfficialRate)return r.a.createElement(p.a,{style:{marginLeft:"50%",marginTop:"2%"}});var n=t.Cur_Scale,c=new Date(t.Date).toDateString();return r.a.createElement("section",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2%"}},r.a.createElement(E.a,{variant:"h4",color:"primary"},"".concat(n," ").concat(t.Cur_Abbreviation," = ").concat(t.Cur_OfficialRate.toFixed(2)," BYN")),r.a.createElement(E.a,{variant:"subtitle1"},c),r.a.createElement(j,{stat:a,abbr:t.Cur_Abbreviation}))},R=function(e){var t,a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t="https://www.nbrb.by/api/exrates/rates/".concat(e),r.next=3,l.a.awrap(fetch(t));case 3:return a=r.sent,r.next=6,l.a.awrap(a.json());case 6:return n=r.sent,r.abrupt("return",n);case 8:case"end":return r.stop()}}))},S=function(e){var t,a,n,r,c,s;return l.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return t=new Date(Date.now()),a="".concat(t.getFullYear(),"-").concat(t.getMonth(),"-").concat(t.getDay()),n="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDay()),r="https://www.nbrb.by/API/ExRates/Rates/Dynamics/".concat(e,"?startDate=").concat(a,"&endDate=").concat(n),u.next=6,l.a.awrap(fetch(r));case 6:return c=u.sent,u.next=9,l.a.awrap(c.json());case 9:return s=u.sent,u.abrupt("return",s.map((function(e){return[e.Date.slice(0,10),+e.Cur_OfficialRate.toFixed(3)]})));case 11:case"end":return u.stop()}}))},_=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),u=Object(o.a)(s,2),p=u[0],E=u[1],w=Object(n.useState)({}),x=Object(o.a)(w,2),d=x[0],v=x[1],h=[145,292,298],y=function(e){var t,a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=h[e],r.next=3,l.a.awrap(R(t));case 3:return a=r.sent,r.next=6,l.a.awrap(S(t));case 6:n=r.sent,v(a),E(n);case 9:case"end":return r.stop()}}))};Object(n.useEffect)((function(){y(0)}),[]);return r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(m.a,null,r.a.createElement(b.a,{value:a,onChange:function(e,t){c(t),y(t)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(f.a,{label:"USD"}),r.a.createElement(f.a,{label:"EUR"}),r.a.createElement(f.a,{label:"RUB"})),r.a.createElement(C,{data:d,stat:p})))};s.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.7ee1fb22.chunk.js.map