(this.webpackJsonpcrayfish=this.webpackJsonpcrayfish||[]).push([[0],{100:function(e,t,a){var n={"./crayfish.png":361,"./daniel.jpg":362,"./elliot.jpg":363,"./matthew.png":364};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=100},260:function(e,t,a){e.exports=a(463)},361:function(e,t,a){e.exports=a.p+"static/media/crayfish.1f9c6466.png"},362:function(e,t,a){e.exports=a.p+"static/media/daniel.fcfe2bd1.jpg"},363:function(e,t,a){e.exports=a.p+"static/media/elliot.432d61fd.jpg"},364:function(e,t,a){e.exports=a.p+"static/media/matthew.046e91f7.png"},462:function(e,t,a){},463:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),i=a(14),l=a(24),s=a(17),u=a(44),m=a(226),d=a(108),h=a.n(d),E=a(8),p=a(473),f=a(115),g=a(227),w=a.n(g),v=(a(280),a(281),a(11)),y=a.n(v),O=a(480),S=a(250);a(67);function b(e){var t=new Date(e);return t.setSeconds(0,0),t.toUTCString()}var C=Object(s.b)((function(e){return{panel:e.panel}}),{setShowDisplay:function(e){return function(t){t(function(e){return{type:"SET_SHOW",payload:e}}(e))}}})((function(e){var t=Object(n.useState)(1),c=Object(E.a)(t,2);return c[0],c[1],r.a.createElement(O.a,{className:"card_background my-5 card_text",onClick:function(){return t=e.show.id,void e.setShowDisplay(t);var t}},r.a.createElement(O.a.Header,{className:"p-2"},e.show.title),r.a.createElement(S.a,{className:"card_image",style:{borderRadius:"5%"},src:a(100)("./".concat(e.show.image_path)),ui:!1}),r.a.createElement(O.a.Content,null,r.a.createElement(O.a.Description,{style:{fontFamily:"Russo One, sans-serif",color:"white",fontSize:"20px"}},e.show.genre,e.show.artists.length>0&&r.a.createElement(r.a.Fragment,null," | \xa0",e.show.artists.map((function(t,a){return a===e.show.artists.length-1?r.a.createElement("span",{key:a},t.name):r.a.createElement("span",{key:a},t.name,", ")}))),r.a.createElement("br",null),r.a.createElement("small",null,b(e.show.show_datetime)))))}));var T=function(e){var t=6,a=window.outerWidth;t=a>=1500?5:a>=750&&a<=1500?3:1;var n=y.a.map(e.shows,(function(t,a){return r.a.createElement(C,{key:a,show:t,addToCart:e.addToCart})}));return r.a.createElement(O.a.Group,{className:"py-5",itemsPerRow:t,style:{border:"none"}},n)},_="http://35.183.44.167",j=function(){return function(e){e({type:"FETCH_SHOWS_REQUEST"}),fetch("".concat(_,"/shows/show/")).then((function(e){return e.json()})).then((function(t){e({type:"FETCH_SHOWS_SUCCESS",payload:t})})).catch((function(t){e(function(e){return{type:"FETCH_SHOWS_FAILURE",payload:e}}(t))}))}},k=a(21),I=a.n(k),R=function(e){return{type:"SET_PAYMENT_STATUS",payload:e}},A=function(){return localStorage.removeItem("orderId"),{type:"CLEAR_STRIPE"}},N=function(e,t){return{type:"ADD_TO_CART",payload:{show:e,quantity:t}}},P=Object(s.b)((function(e){return{shows:e.shows.data}}),{fetchShows:j,addToCart:N})((function(e){return Object(n.useEffect)((function(){e.fetchShows()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{shows:e.shows,addToCart:e.addToCart}))})),F=a(471),U=a(481),H=a(474),L=a(482);var D=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(E.a)(i,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(E.a)(m,2),h=d[0],p=d[1],f=Object(n.useState)(""),g=Object(E.a)(f,2),w=g[0],v=g[1],y=Object(n.useState)(""),S=Object(E.a)(y,2),b=S[0],C=S[1],T=Object(n.useState)(""),_=Object(E.a)(T,2),j=_[0],k=_[1],I=Object(n.useState)(!0),R=Object(E.a)(I,2),A=R[0],N=R[1];function P(){N(!A)}function D(e){var t=e.target,a=t.name,n=t.value;"usernameOrEmail"===a?o(n):"password"===a&&u(n)}function x(e){var t=e.target,a=t.name,n=t.value;"username"===a?p(n):"email"===a?v(n):"signupPassword"===a?C(n):"confirmPassword"===a&&k(n)}return r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center-child"},e.auth.loading&&r.a.createElement(F.a,{active:!0}),e.auth.error&&r.a.createElement(U.a,{color:"red"},"Log in failed, please check your credentials again."),r.a.createElement(O.a,null,r.a.createElement(O.a.Content,null,A?r.a.createElement(H.a,null,r.a.createElement(H.a.Input,{icon:"user",iconPosition:"left",name:"usernameOrEmail",value:c,label:"Username or E-mail",placeholder:"Username or E-mail",onChange:D,error:"undefined"!==typeof e.auth.error}),r.a.createElement(H.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",name:"password",value:s,placeholder:"Password",onChange:D,error:"undefined"!==typeof e.auth.error}),r.a.createElement(L.a,{primary:!0,onClick:function(t){t.preventDefault(),e.login(c,s)},content:"Sign in",icon:"sign-in",labelPosition:"right"})):r.a.createElement(H.a,null,r.a.createElement(H.a.Input,{icon:"user",iconPosition:"left",name:"username",value:h,label:"Username",placeholder:"Username",onChange:x}),r.a.createElement(H.a.Input,{icon:"mail",iconPosition:"left",name:"email",value:w,label:"E-mail",placeholder:"E-mail",onChange:x}),r.a.createElement(H.a.Input,{icon:"lock",iconPosition:"left",type:"password",name:"signupPassword",value:b,label:"Password",placeholder:"Password",onChange:x}),r.a.createElement(H.a.Input,{icon:"lock",iconPosition:"left",type:"password",name:"confirmPassword",value:j,label:"Confirm password",placeholder:"Confirm password",onChange:x}),r.a.createElement(L.a,{primary:!0,content:"Sign up",icon:"signup",labelPosition:"right",onClick:function(t){t.preventDefault();var a={username:h,email:w,password:b,confirmPassword:j};e.userSignupRequest(a)}})))),A?r.a.createElement("a",{href:"#",onClick:function(){return P()}},"Don't have an account?"):r.a.createElement("a",{href:"#",onClick:function(){return P()}},"Sign In")))},x=a(485),z=a(472),W=a(479),q=a(477);a(478),a(475);var G=a(28);var M=function(e){var t=Object(n.useState)([]),c=Object(E.a)(t,2),o=c[0],i=c[1];Object(n.useEffect)((function(){void 0!==e.tickets&&e.tickets.length>0&&i(function(e){for(var t=[],a=[],n=0;n<e.length;n++){var r=e[n].show;t.includes(r.id)||(t.push(r.id),a.push(r))}return a}(e.tickets))}),[e.tickets]);var l=y.a.map(o,(function(t,n){return r.a.createElement(q.a,{key:n},r.a.createElement(q.a.Image,{size:"tiny",src:a(100)("./".concat(t.image_path))}),r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,{as:"a"},r.a.createElement("span",{className:"cart_font"},t.title)),r.a.createElement(q.a.Meta,null,r.a.createElement("span",{className:"cart_font cinema"},b(t.show_datetime))),r.a.createElement(q.a.Description,null,r.a.createElement(x.a,{size:"tiny"},r.a.createElement("span",{className:"cart_font"},"You have ",(c=t.id,y.a.filter(e.tickets,(function(e,t){if(e.show.id===c)return e})).length)," tickets for this show."))),r.a.createElement(W.a,{divided:!0,relaxed:!0},function(t){return y.a.map(e.tickets,(function(e,a){if(e.show.id===t)return r.a.createElement(W.a.Item,{key:a},r.a.createElement(W.a.Content,null,r.a.createElement(W.a.Header,{as:G.a,to:"/live/".concat(e.uuid)},e.uuid),r.a.createElement(W.a.Description,{as:"a"},e.active?r.a.createElement("span",null,"Active"):r.a.createElement("span",null,"Inactive"))))}))}(t.id))));var c})),s=r.a.createElement(q.a.Group,{divided:!0},l);return r.a.createElement("div",null,o.length>0?s:r.a.createElement("p",null,"No shows for you :("))};var Q=function(e){return r.a.createElement("div",null,r.a.createElement(U.a,{info:!0},"Logged in as ",r.a.createElement("b",null,e.auth.user.username),r.a.createElement(x.a,{size:"tiny",float:"right",onClick:function(){e.logout()}},"Logout")),r.a.createElement(x.a,{as:"h2",inverted:!0,dividing:!0},"TICKETS"),r.a.createElement(M,{tickets:e.tickets}),r.a.createElement(z.a,null))},K=function(e){return{type:"LOGIN_SUCCESS",payload:e}},Y=function(e){e?I.a.defaults.headers.common.Authorization="JWT ".concat(e):delete I.a.defaults.headers.common.Authorization},B=function(){return function(e){localStorage.removeItem("jwtToken"),Y(!1),e(K({}))}},V=function(){return function(e){e({type:"FETCH_TICKETS_REQUEST"}),I.a.get("".concat(_,"/shows/ticket/")).then((function(t){e({type:"FETCH_TICKETS_SUCCESS",payload:t.data})})).catch((function(t){e({type:"FETCH_TICKETS_FAILURE",payload:t})}))}};var X=Object(s.b)((function(e,t){return{auth:e.auth,orders:e.account.data,tickets:e.tickets.data}}),{login:function(e,t){return function(a){a(function(e){return{type:"LOGIN_REQUEST",payload:e}}(e)),I.a.post("".concat(_,"/accounts/accounts-token-auth/"),{username:e,password:t}).then((function(e){var t=e.data.token;localStorage.setItem("jwtToken",t),Y(t),a(K(h()(t))),console.log("login successful")})).catch((function(e){a(function(e){return{type:"LOGIN_FAILURE",payload:e}}(e.response))}))}},logout:B,userSignupRequest:function(e){return function(t){I.a.post("".concat(_,"/accounts/users/"),e).then((function(e){console.log("Welcome! Your account is available now.")})).catch((function(e){400===e.response.status&&"A user with that username already exists."===e.response.data.username[0]&&console.log("A user with that username already exists.")}))}},fetchOrders:function(){return function(e){e({type:"FETCH_ORDERS_REQUEST"}),I.a.get("".concat(_,"/shows/order/")).then((function(t){e({type:"FETCH_ORDERS_SUCCESS",payload:t.data})})).catch((function(t){e({type:"FETCH_ORDERS_FAILURE",payload:t})}))}},fetchTickets:V})((function(e){return Object(n.useEffect)((function(){e.auth.isAuthenticated&&(e.fetchOrders(),e.fetchTickets())}),[e.auth]),r.a.createElement(r.a.Fragment,null,e.auth.isAuthenticated?r.a.createElement(Q,{auth:e.auth,logout:e.logout,history:e.history,orders:e.orders,tickets:e.tickets}):r.a.createElement(D,{login:e.login,logout:e.logout,userSignupRequest:e.userSignupRequest,auth:e.auth}))})),J=a(152),Z=a.n(J),$=a(246),ee=a(484),te=a(247);var ae=function(e){var t=0,n=y.a.map(e.cart,(function(n,c){return t+=n.show.show_price*n.quantity,r.a.createElement(q.a,{key:c},r.a.createElement(q.a.Image,{size:"tiny",src:a(100)("./".concat(n.show.image_path))}),r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,{as:"a"},r.a.createElement("span",{className:"cart_font"},n.show.title)),r.a.createElement(q.a.Meta,null,r.a.createElement("span",{className:"cart_font cinema"},b(n.show.show_datetime))),r.a.createElement(q.a.Description,null,r.a.createElement("span",{className:"cart_font"},n.quantity," tickets X USD ",n.show.show_price)),r.a.createElement(q.a.Extra,null,r.a.createElement(L.a,{circular:!0,icon:"trash",onClick:function(t){return e.handleRemoveItem(t,n)}}),r.a.createElement(L.a,{circular:!0,icon:"plus",onClick:function(t){return e.handleAddQuantity(t,n)}}),r.a.createElement(L.a,{circular:!0,icon:"minus",onClick:function(t){return e.handleRemoveQuantity(t,n)}}))))})),c=r.a.createElement(q.a.Group,{divided:!0},n),o=r.a.createElement(U.a,{info:!0},r.a.createElement(U.a.Header,null,"You haven't selected any events."),r.a.createElement("p",null,"There are no tickets in your cart, go pick some live shows."));return r.a.createElement("div",null,n.length>0?c:o,r.a.createElement(z.a,null),r.a.createElement(L.a,{content:"Total",icon:"dollar",label:{basic:!0,pointing:"left",content:t.toFixed(2)}}),r.a.createElement(L.a,{primary:!0,floated:"right",disabled:n.length<=0,onClick:function(){return e.submit()}},"Buy tickets"))},ne=Object(te.a)("pk_test_51HI1opH9PLlFARsrME2IYTZG7xTcYBrTRJri7xqbVsmiaNU3UdQcpyCPapkW7Tqz2kxFUtO2XgDxpMAGXBbcjDn600OstLfq3B");var re=Object(s.b)((function(e){return{cart:e.cart,auth:e.auth,stripe:e.stripe}}),{removeFromCart:function(e){return{type:"REMOVE_FROM_CART",payload:{id:e}}},clearCart:function(){return{type:"CLEAR_CART"}},placeOrder:function(e){return function(t){var a=0,n=[],r=[],c=[];y.a.forEach(e,(function(e){a+=e.show.show_price*e.quantity,n.push(e.show.title),r.push(e.show.show_price),c.push(e.quantity)})),I.a.post("".concat(_,"/shows/order/"),{shows:n,quantities:c,prices:r,total_price:a.toFixed(2)}).then((function(e){var a=e.data.id,n=e.data.stripe_session.id;localStorage.setItem("orderId",a),t(function(e){return{type:"SET_STRIPE_CHECKOUT",payload:{checkoutId:e}}}(n))}))}},addToCart:N})((function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],o=a[1];function i(){return(i=Object($.a)(Z.a.mark((function e(t){var a,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne;case 2:return a=e.sent,e.next=5,a.redirectToCheckout({sessionId:t});case 5:n=e.sent,o(!1),n.error&&console.log(n.error);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){"checkoutId"in e.stripe&&(o(!1),function(e){i.apply(this,arguments)}(e.stripe.checkoutId))}),[e.stripe]);var l=r.a.createElement("div",{className:"center"},r.a.createElement("a",{className:"center-child",href:"#",onClick:function(){return e.handleTogglePane("account")}},"Login to view cart"));return r.a.createElement(r.a.Fragment,null,e.auth.isAuthenticated?r.a.createElement("div",null,c&&r.a.createElement(ee.a,{active:!0},r.a.createElement(F.a,null)),r.a.createElement(x.a,{as:"h2",inverted:!0,dividing:!0},"CART"),r.a.createElement(ae,{cart:e.cart,handleRemoveItem:function(t,a){t.stopPropagation(),e.removeFromCart(a.id)},clearCart:e.clearCart,handleAddQuantity:function(t,a){t.stopPropagation(),e.addToCart(a.show,1)},handleRemoveQuantity:function(t,a){t.stopPropagation(),e.addToCart(a.show,-1)},submit:function(){o(!0),e.placeOrder(e.cart)}})):l)}));var ce=a(486),oe=a(487),ie=a(47);var le=Object(s.b)((function(e){return{panel:e.panel}}),{addToCart:N})((function(e){var t=Object(n.useState)(1),c=Object(E.a)(t,2),o=c[0];return c[1],r.a.createElement(ce.a,{className:"p-0 m-0",style:{width:"100%"}},r.a.createElement(ce.a.Row,null,r.a.createElement(ce.a.Column,{className:"p-0 m-0"},r.a.createElement(S.a,{className:"m-0 p-0",fluid:!0,src:a(100)("./".concat(e.show.image_path)),ui:!0}))),r.a.createElement(ce.a.Row,null,r.a.createElement(ce.a.Column,{className:"p-0 m-0"},r.a.createElement(oe.a.Group,null,r.a.createElement(oe.a,null,r.a.createElement(x.a,{as:"h2"},e.show.title)),"No description"!==e.show.description&&r.a.createElement(oe.a,null,r.a.createElement(x.a,{as:"h4"},e.show.description)),r.a.createElement(oe.a,null,r.a.createElement(x.a,null,e.show.artists.length>0&&r.a.createElement(r.a.Fragment,null," ",e.show.artists.map((function(t,a){return a===e.show.artists.length-1?r.a.createElement("span",{key:a},t.name):r.a.createElement("span",{key:a},t.name,", ")}))))),r.a.createElement(oe.a,null,r.a.createElement(x.a,null,e.show.genre)),r.a.createElement(oe.a,null,r.a.createElement(x.a,null,b(e.show.show_datetime)))),r.a.createElement(z.a,null),r.a.createElement(x.a,{inverted:!0,floated:"left",as:"h4"},"USD ",e.show.show_price),r.a.createElement(L.a,{floated:"right",onClick:function(){e.addToCart(e.show,o),console.log("Added <b>".concat(e.show.title,"</b> into shopping-cart."))}},r.a.createElement(L.a.Content,{visible:!0},r.a.createElement(ie.a,{name:"shop"}))))))}));var se=Object(s.b)((function(e,t){return{auth:e.auth,tickets:e.tickets.data}}),{fetchTickets:V})((function(e){return r.a.createElement("div",{className:"p-5"},r.a.createElement(ce.a,{centered:!0,columns:2,className:"p-5"},r.a.createElement(ce.a.Column,null,r.a.createElement(O.a,{className:"card_background",style:{width:"100%"}},e.auth.isAuthenticated?r.a.createElement(O.a.Content,null,r.a.createElement(x.a,{size:"large",color:"red"},"Upcoming Shows"),r.a.createElement(M,{tickets:e.tickets})):r.a.createElement(O.a.Content,null,r.a.createElement(x.a,{size:"large",color:"red"},"Enter your Ticket"),r.a.createElement(H.a,null,r.a.createElement(H.a.Field,null,r.a.createElement("input",{placeholder:"Enter your Ticket Id"})),r.a.createElement(L.a,{primary:!0,type:"submit"},"Enter")))))))}));var ue=function(){return r.a.createElement("div",null,"Watch the show")},me=a(483),de=a(114);var he=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){e.shows&&e.shows.length>c.length&&o(e.shows)}),[e.shows]),r.a.createElement(me.a,{id:"navbar",className:"menu_background p-4 m-0",size:"massive",secondary:!0},r.a.createElement(me.a.Item,{as:G.a,to:"/",header:!0},r.a.createElement(x.a,{inverted:!0,as:"h1"},"Odiance")),r.a.createElement(me.a.Menu,{position:"right"},r.a.createElement(me.a.Item,{name:"LIVE",color:"blue",style:{color:"white"},as:G.a,to:"/live"},"LIVE"),r.a.createElement(me.a.Item,null,r.a.createElement(L.a,{onClick:function(){return e.handleTogglePane("cart")},icon:!0,inverted:!0},r.a.createElement(ie.a,{size:"large",name:"cart"}),r.a.createElement(de.a,{style:{zIndex:0},color:"red",floating:!0},e.itemsInCartCount))),r.a.createElement(me.a.Item,null,r.a.createElement(L.a,{inverted:!0,onClick:function(){return e.handleTogglePane("account")},icon:!0},r.a.createElement(ie.a,{size:"large",name:"user circle"})))))};var Ee=function(e){return e.className,r.a.createElement(me.a,{className:"menu_background p-4 m-0",size:"massive",secondary:!0},r.a.createElement(me.a.Item,null,r.a.createElement(x.a,{as:"h4",inverted:!0},"Odiance \xa9 2020 Copyright")))};var pe=Object(s.b)((function(e){return{stripe:e.stripe}}),{updatePaymentStatus:function(e,t){return function(a){I.a.patch("".concat(_,"/shows/order/").concat(e,"/"),{payment_status:t}).then((function(e){2===t?a(R(!0)):3===t&&a(A())})).catch((function(e){2===t?a(R(!1)):console.log("something went wrong...update the status of order to cancelled")}))}},clearStripe:A})((function(e){var t=Object(n.useState)(!0),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),s=Object(E.a)(l,2),u=s[0],m=s[1],d=Object(i.g)(),h=d.status,f=(d.id,localStorage.getItem("orderId"));return Object(n.useEffect)((function(){null!==f&&("confirm"===h?e.updatePaymentStatus(f,2):"cancel"===h&&(e.updatePaymentStatus(f,3),setTimeout((function(){e.history.push("/")}),3e3)))}),[]),Object(n.useEffect)((function(){"status"in e.stripe&&(!0===e.stripe.status?(o(!1),e.clearStripe(),setTimeout((function(){e.history.push("/")}),5e3)):!1===e.stripe.status&&(e.clearStripe(),o(!1),m("Something went wrong on our side. Please contact support to get it resolved. Sorry for the inconvenience.")))}),[e.stripe]),r.a.createElement(p.a,{className:"p-5",textAlign:"center"},r.a.createElement(ce.a,{centered:!0},r.a.createElement(ce.a.Row,null,c&&r.a.createElement(F.a,{active:!0})),r.a.createElement(ce.a.Row,null,"confirm"===h?c?r.a.createElement(x.a,{size:"medium",inverted:!0},"Processing your tickets now"):""===u?r.a.createElement(x.a,{size:"medium",inverted:!0},"Your purchase is complete. We'll email you your live show links. You can also find them in your profile."):r.a.createElement(x.a,{size:"medium",color:"yellow"},u):r.a.createElement(x.a,{size:"medium",inverted:!0},"We're cancelling your order..."))))}));f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var fe=Object(s.b)((function(e){return{itemsInCartCount:e.cart.length,shows:e.shows.data,panel:e.panel}}),{filterShows:function(e){return{type:"FILTER_SHOWS",payload:e}},checkAuthorizationToken:function(e){return function(t){I.a.post("".concat(_,"/accounts/accounts-token-verify/"),{token:e}).then((function(e){t(function(e){return function(t){I.a.post("".concat(_,"/accounts/accounts-token-refresh/"),{token:e})}}(e.data.token))})).catch((function(e){400===e.response.status&&"Signature has expired."===e.response.data.non_field_errors[0]&&(t(B()),t(j()))}))}}})((function(e){var t=Object(n.useState)(!0),a=Object(E.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(E.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(""),h=Object(E.a)(d,2),g=h[0],v=h[1],y=Object(n.useState)({}),O=Object(E.a)(y,2),S=O[0],b=O[1],C=Object(i.f)();function T(e){v(e),m(!0)}return Object(n.useEffect)((function(){var e=C.pathname;!function(e){f.a.set({page:e}),f.a.pageview(e)}(e),o("/"===e)}),[C]),Object(n.useEffect)((function(){localStorage.jwtToken&&e.checkAuthorizationToken(localStorage.jwtToken)}),[]),Object(n.useEffect)((function(){if("id"in e.panel){T("show");var t=e.shows.filter((function(t){return t.id===e.panel.id}));0!==t.length&&b(t[0])}}),[e.panel]),r.a.createElement("div",null,r.a.createElement(he,{showSearch:c,itemsInCartCount:e.itemsInCartCount,shows:e.shows,filterShows:e.filterShows,handleTogglePane:T}),r.a.createElement(p.a,{id:"content-wrapper",className:"home-background home",fluid:!0},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{exact:!0,path:"/tickets/:status/:id",component:pe}),r.a.createElement(i.a,{exact:!0,path:"/live",component:se}),r.a.createElement(i.a,{exact:!0,path:"/live/:ticket",component:ue}))),r.a.createElement(w.a,{className:"pane-background",overlayClassName:"some-custom-overlay-class",isOpen:u,title:"Hey, it is optional pane title.  I can be React component too.",subtitle:"Optional subtitle.",onRequestClose:function(){m(!1)},width:"500px",hideHeader:!0,children:"account"===g?r.a.createElement(X,null):"cart"===g?r.a.createElement(re,{handleTogglePane:T}):"show"===g?r.a.createElement(le,{show:S}):void 0}),r.a.createElement(Ee,null))})),ge=a(9),we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_SHOWS_REQUEST":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!0});case"FETCH_SHOWS_SUCCESS":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,data:t.payload});case"FETCH_SHOWS_FAILURE":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,error:t.payload});case"FILTER_SHOWS":return Object(ge.a)(Object(ge.a)({},e),{},{data:t.payload});default:return e}},ve={isAuthenticated:!1,user:{}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"LOGIN_REQUEST":return Object(ge.a)(Object(ge.a)({},ve),{},{loading:!0});case"LOGIN_SUCCESS":return{isAuthenticated:!y.a.isEmpty(t.payload),user:t.payload};case"LOGIN_FAILURE":return Object(ge.a)(Object(ge.a)({},ve),{},{error:t.payload});default:return e}},Oe=a(116),Se=a(249),be=a.n(Se),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_TO_CART":if(y.a.filter(e,(function(e){return e.show.title===t.payload.show.title})).length>0){for(var a=e.slice(),n=0;n<a.length;n++)if(a[n].show.title===t.payload.show.title){if(t.payload.quantity<0&&1===a[n].quantity)continue;a[n].quantity+=t.payload.quantity}return a}return[].concat(Object(Oe.a)(e),[{id:be.a.generate(),show:t.payload.show,quantity:t.payload.quantity}]);case"REMOVE_FROM_CART":var r=y.a.findIndex(e,{id:t.payload.id});return r>=0?[].concat(Object(Oe.a)(e.slice(0,r)),Object(Oe.a)(e.slice(r+1))):e;case"CLEAR_CART":return[];default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ORDERS_REQUEST":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!0});case"FETCH_ORDERS_SUCCESS":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,data:t.payload});case"FETCH_ORDERS_FAILURE":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_STRIPE_CHECKOUT":return{checkoutId:t.payload.checkoutId};case"SET_PAYMENT_STATUS":return{status:t.payload};case"CLEAR_STRIPE":return{};default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_SHOW":return{id:t.payload};default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_TICKETS_REQUEST":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!0});case"FETCH_TICKETS_SUCCESS":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,data:t.payload});case"FETCH_TICKETS_FAILURE":return Object(ge.a)(Object(ge.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},Ie=Object(u.c)({shows:we,auth:ye,cart:Ce,account:Te,stripe:_e,panel:je,tickets:ke});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(462);var Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,Ae=Object(u.e)(Ie,Re(Object(u.a)(m.a)));localStorage.jwtToken&&(Y(localStorage.jwtToken),Ae.dispatch(K(h()(localStorage.jwtToken))));var Ne=Object(l.a)();o.a.render(r.a.createElement(s.a,{store:Ae},r.a.createElement(i.b,{history:Ne},r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[260,1,2]]]);
//# sourceMappingURL=main.b4569021.chunk.js.map