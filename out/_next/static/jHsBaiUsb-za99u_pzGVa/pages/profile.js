(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"W+IF":function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),s=n.n(a),r=n("q1tI"),c=n.n(r),o=n("vcXL"),u=n.n(o),i=n("nOHt"),l=n("H3qJ"),d=n("T00j"),p=c.a.createElement,f=function(e){var t=e.data,n=Object(r.useContext)(d.a).isAuth,a=Object(r.useState)(!1);a[0],a[1];console.log(n);var s=Object(i.useRouter)();return console.log(s),console.log(n),p(l.default,null,p("div",null,console.log("isAuth:",n),p("h2",{className:"card-header text-center py-2"},"Account Page"),p("h4",{className:"ml-3 py-2"},"Rem-rest JSON stars:"),t.map((function(e){return p("div",{className:"list-group-item",key:e.id},p("div",{className:"card card-header"},e.name," ",e.email),p("p",{className:"card-text px-2"},"id: ",e.id))}))))};f.getInitialProps=function(e){var t,n,a;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.req,r.next=3,s.a.awrap(u()("https://jsonplaceholder.typicode.com/users"));case 3:return t=r.sent,r.next=6,s.a.awrap(t.json());case 6:return n=r.sent,a=n.data,r.abrupt("return",{data:a});case 9:case"end":return r.stop()}}))},t.default=f},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])},vcXL:function(e,t,n){"use strict";var a=self.fetch.bind(self);e.exports=a,e.exports.default=e.exports}},[["u1GD",0,1]]]);