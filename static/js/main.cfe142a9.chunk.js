(this["webpackJsonpfira-demo"]=this["webpackJsonpfira-demo"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),i=n(4),c=n.n(i),o=(n(10),n(11),n(12),n(13),n(2)),s=n.n(o),u=(n(14),n(5)),p=n.n(u),f=n(0),d=function(){return Object(r.useEffect)((function(){var t=s.a.map("map").setView([27.2098,-109.9328],12);s.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t),function(t,e){fetch("./ran_yaqui2.json").then((function(t){return t.text()})).then((function(n){var r=JSON.parse(n).map((function(t){try{var n=JSON.parse(t.centroid).coordinates,r=JSON.parse(t.stats).C0,a=r.map((function(t){return new Date(t.date)})),i=new Date(e),c=p()(a,i);return[n[1],n[0],r[c].basicStats.mean]}catch(o){return[]}})),a=r?r.map((function(t){return t[0]?[t[0],t[1],t[2]]:null})):[];a=a.filter((function(t){return t})),s.a.heatLayer(a).addTo(t)}))}(t,"2021-03-26")}),[]),Object(f.jsx)("div",{id:"map",style:{height:"100vh"}})};var h=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(d,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),i(t),c(t)}))};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.cfe142a9.chunk.js.map