(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"W+IF":function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),s=a("q1tI"),c=a.n(s),o=a("vcXL"),u=a.n(o),i=a("nOHt"),l=a("H3qJ"),p=a("T00j"),d=c.a.createElement,f=function(e){var t=e.data,a=Object(s.useContext)(p.a).isAuth,n=Object(s.useState)(!1);n[0],n[1];console.log(a);var r=Object(i.useRouter)();return console.log(r),console.log(a),d(l.default,null,d("div",null,console.log("isAuth:",a),d("h2",{className:"card-header text-center py-2"},"Account Page"),d("h4",{className:"ml-3 py-2"},"Rem-rest JSON stars:"),t.map((function(e){return d("div",{className:"list-group-item",key:e.id},d("div",{className:"card card-header"},e.firstName," ",e.lastName),d("p",{className:"card-text px-2"},"id: ",e.id))}))))};f.getInitialProps=function(e){var t,a,n;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e.req,s.next=3,r.a.awrap(u()("http://rem-rest-api.herokuapp.com/api/users"));case 3:return t=s.sent,s.next=6,r.a.awrap(t.json());case 6:return a=s.sent,n=a.data,s.abrupt("return",{data:n});case 9:case"end":return s.stop()}}))},t.default=f},u1GD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return a("W+IF")}])},vcXL:function(e,t,a){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["u1GD",0,1]]]);