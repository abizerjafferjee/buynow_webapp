(this.webpackJsonpbuynow_app=this.webpackJsonpbuynow_app||[]).push([[0],{102:function(A,e,t){A.exports=t(116)},114:function(A,e,t){A.exports=t.p+"static/media/genie24-app-logo-nobg.921be0da.png"},115:function(A,e,t){},116:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),r=t(9),i=t.n(r),c=t(12),o=t(22),l=t(90),s=t(178),m=t(67),u=t(35),d=t.n(u),p=t(54),g=t(10),f=t(36),h=Object(a.createContext)(null);function v(){return Object(a.useContext)(h)}var b=t(20);function E(A){var e=A.children,t=Object(b.a)(A,["children"]),a=v().isAuthenticated;return n.a.createElement(c.b,t,a?e:n.a.createElement(c.a,{to:"/signin"}))}function k(A){var e=A.children,t=Object(b.a)(A,["children"]),a=v().isAuthenticated,r=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;A=A.replace(/[[]]/g,"\\$&");var t=new RegExp("[?&]"+A+"(=([^&#]*)|&|#|$)","i"),a=t.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}("redirect");return n.a.createElement(c.b,t,a?n.a.createElement(c.a,{to:""===r||null===r?"/":r}):e)}var w=t(15),x=t.n(w),O=t(156);function j(A){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e&&!A.includes("youtube.com"))return!1;var t=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-zA-Z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");if(t.test(A))return!0;if(A.startsWith("http")||A.startsWith("https")){var a=A.split("/")[2];return!!t.test(a)}return!1}function y(A,e){return A.length<=e?A:A.slice(0,e)+"..."}var B=function(A){console.log(A)},D=new window.firebaseui.auth.AuthUI(window.firebase.auth()),P={signInFlow:"redirect",signInSuccessUrl:"/",tosUrl:"/terms",privacyPolicyUrl:"/privacy",signInOptions:[window.firebase.auth.EmailAuthProvider.PROVIDER_ID,window.firebase.auth.GoogleAuthProvider.PROVIDER_ID]},q=window.firebase.database(),V=window.firebase.storage(),T=t(37),U=t(166),M=t(117),N=t(165),H=t(159),z=t(161),S=t(163),L=t(164),C=t(162),R=t(63),I=t.n(R),F=t(86),Q=t.n(F),Z=Object(O.a)((function(A){return{root:{width:"240px",height:"390px",borderRadius:"5%"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:A.transitions.create("transform",{duration:A.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:m.a[500]},title:{float:"left",display:"inline"},price:{float:"right",display:"inline"},cardSection:{display:"block",marginBottom:A.spacing(3),fontWeight:"bold"},image:{width:"100%",height:"240px"},action:{position:"absolute",top:"0%",left:"0%",transform:"translate(250%, 0%)"},imageContainer:{position:"relative"},stageButton:{marginTop:"0px"},content:{marginBottom:"0px",height:"110px"}}}));function W(A){var e=A.link,a=A.linkId,r=A.editLink,i=A.stageLink,c=A.showStageButton,o=(Object(b.a)(A,["link","linkId","editLink","stageLink","showStageButton"]),Z());return n.a.createElement(H.a,{className:o.root},n.a.createElement("div",{className:o.imageContainer},e.image?n.a.createElement("img",{className:o.image,src:e.image}):n.a.createElement("img",{className:o.image,src:t(81)}),n.a.createElement(z.a,{className:o.action,action:n.a.createElement(C.a,{onClick:function(){return r(a,e)},"aria-label":"settings"},n.a.createElement(Q.a,null))})),n.a.createElement(S.a,{className:o.content},void 0!==e&&n.a.createElement("div",{className:o.cardSection},n.a.createElement(T.a,{variant:"inherit",className:o.title},y(e.name,15)),void 0!==e.price&&n.a.createElement(T.a,{variant:"inherit",className:o.price},e.price)),void 0!==e.description&&n.a.createElement(T.a,{variant:"body1",color:"textSecondary",component:"p"},y(e.description,56)),void 0!==e.url&&n.a.createElement(T.a,{variant:"body2",component:"p",noWrap:!0},n.a.createElement(I.a,null)," ",n.a.createElement("a",{href:e.url},e.url))),n.a.createElement(L.a,{disableSpacing:!0,className:o.stageButton},c&&n.a.createElement(N.a,{size:"small",color:"primary",onClick:function(){return i(a,e)}},"Stage")))}var X=Object(O.a)((function(A){return{addPaper:{width:"240px",height:"390px",borderRadius:"5%",display:"flex",opacity:"0.6",justifyContent:"center",paddingTop:A.spacing(18),paddingBottom:A.spacing(18)},avatar:{width:60,height:60},addIcon:{marginTop:A.spacing(18)},container:{justifyContent:"center",marginTop:A.spacing(2),padding:A.spacing(1)},addButton:{"&:hover":{cursor:"pointer"}}}}));var Y=function(A){var e=A.links,t=A.openLinkForm,a=A.editLink,r=A.stageLink,i=A.showStage,c=(Object(b.a)(A,["links","openLinkForm","editLink","stageLink","showStage"]),X());return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:c.container},n.a.createElement(T.a,{gutterBottom:!0,variant:"h4"},"All Product Links"),n.a.createElement(U.a,{container:!0,spacing:2},n.a.createElement(U.a,{item:!0,xs:12,sm:"auto",justify:"center"},n.a.createElement(M.a,{elevation:0,className:c.addPaper},n.a.createElement(N.a,{variant:"text",onClick:function(){return t(!0)},className:c.addButton},"Add a Link"))),x.a.map(e,(function(A,e){return n.a.createElement(U.a,{item:!0,xs:12,sm:"auto",key:e},n.a.createElement(W,{link:A,linkId:e,editLink:a,stageLink:r,showStageButton:i}))})))))},K=Object(O.a)((function(A){return{root:{display:"flex",width:"300px",height:"125px",borderRadius:"5%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:A.transitions.create("transform",{duration:A.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},details:{display:"flex",width:"175px",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"125px",height:"125px"},controls:{display:"flex",alignItems:"center",paddingLeft:A.spacing(1),paddingBottom:A.spacing(1)}}}));function G(A){var e=A.link,a=A.linkId,r=A.unstageLink,i=A.makeLinkLive,c=(Object(b.a)(A,["link","linkId","unstageLink","makeLinkLive"]),K());return n.a.createElement(H.a,{className:c.root},n.a.createElement("div",{className:c.details},n.a.createElement(S.a,{className:c.content},!x.a.isUndefined(e)&&n.a.createElement(T.a,{variant:"inherit"},y(e.name,30)),!x.a.isUndefined(e.url)&&n.a.createElement(T.a,{variant:"body2",component:"p",noWrap:!0},n.a.createElement(I.a,null)," ",n.a.createElement("a",{href:e.url},y(e.url,20)))),n.a.createElement("div",{className:c.controls},n.a.createElement(N.a,{size:"small",color:"primary",onClick:function(){return r(a)}},"Remove"),n.a.createElement(N.a,{size:"small",color:"primary",variant:"contained",disabled:e.active,onClick:function(){return i(a)}},"Show"))),n.a.createElement("img",{className:c.cover,src:x.a.isUndefined(e.image)?t(81):e.image}))}var J=Object(O.a)((function(A){return{stagePlaceholder:{padding:A.spacing(5),display:"flex",flexDirection:"column",alignItems:"center"},stageMessageContainer:{display:"flex",flexDirection:"row",marginBottom:A.spacing(1)},stageMessage:{marginRight:A.spacing(1)}}}));var _=function(A){var e=A.showStage,t=A.links,a=A.makeLinkLive,r=A.unstageLink,i=A.streamUrl,c=A.endLive,o=J();return n.a.createElement(n.a.Fragment,null,e&&n.a.createElement("div",null,n.a.createElement(T.a,{gutterBottom:!0,variant:"h4"},"Staged Product Links"),n.a.createElement("div",{className:o.stageMessageContainer},n.a.createElement(T.a,{variant:"body1",className:o.stageMessage},"Your products will be displayed on your livestream at \xa0",n.a.createElement("a",{href:i},i)),n.a.createElement(N.a,{variant:"text",color:"secondary",size:"small",onClick:function(){return c()}},n.a.createElement("u",null,"End Live")))),e&&x.a.isEmpty(t)&&n.a.createElement(M.a,{elevation:0},n.a.createElement("div",{className:o.stagePlaceholder},n.a.createElement(T.a,{variant:"body1"},"Select the product links that you want to show on your livestream and stage them here."))),e&&!x.a.isEmpty(t)&&n.a.createElement(U.a,{container:!0,spacing:2,cols:5},x.a.map(t,(function(A,e){return n.a.createElement(U.a,{item:!0,xs:12,sm:"auto",key:e},n.a.createElement(G,{link:A,linkId:e,unstageLink:r,makeLinkLive:a}))}))))},$=t(167),AA=t(168),eA=t(179),tA=t(171),aA=Object(O.a)((function(A){return{formInput:Object(f.a)({labelPlacement:"start",marginRight:A.spacing(1),minWidth:"80%"},A.breakpoints.up("md"),{minWidth:"60%"}),formGroup:{display:"flex",flexDirection:"row",justifyContent:"left",width:"100%"},formControl:{width:"100%"},formButton:{margin:A.spacing(1)},helperText:{color:"red",fontSize:"12px"},container:{marginTop:A.spacing(2)},text:{fontWeight:"lighter"}}}));var nA=function(A){var e=A.goLive,t=A.streamUrl,r=A.setStreamUrl,i=A.showStage,c=(Object(b.a)(A,["goLive","streamUrl","setStreamUrl","showStage"]),aA()),o=Object(a.useState)(!1),l=Object(g.a)(o,2),s=l[0],m=l[1];return n.a.createElement(n.a.Fragment,null,!i&&n.a.createElement("div",{className:c.container},n.a.createElement(T.a,{variant:"h6",gutterBottom:!0,className:c.text},"Which Youtube livestream URL would you like the links to be displayed on?"),n.a.createElement($.a,{className:c.formControl},n.a.createElement(AA.a,{className:c.formGroup},n.a.createElement(eA.a,{variant:"filled",type:"text",label:"Youtube Livestream URL",placeholder:"www.youtube.com/jdnadkjnfj",margin:"dense",required:!0,autoFocus:!0,color:"primary",className:c.formInput,onChange:function(A){return r(A.target.value)}}),n.a.createElement(N.a,{variant:"contained",onClick:function(){j(t,!0)?(m(!1),e()):m(!0)},color:"primary",className:c.formButton},"Go Live")),n.a.createElement(tA.a,{error:s,className:c.helperText},s?"Not a valid stream URL. Must be a Youtube livestream URL.":""))))},rA=t(180),iA=t(181),cA=t(172),oA=t(173),lA=t(185),sA=t(174),mA=t(184),uA=t(68),dA=t(87),pA=t.n(dA),gA=function(A){var e=Object(a.useRef)(null);return n.a.createElement(n.a.Fragment,null,n.a.createElement(N.a,{variant:"contained",color:"primary",onClick:function(A){e.current.click()}},"Upload a file"),"\xa0",A.imageName,n.a.createElement("input",{type:"file",accept:"image/png, image/jpeg",ref:e,onChange:function(e){var t=e.target.files[0];A.setImage(t)},style:{display:"none"}}))};function fA(A){return n.a.createElement(iA.a,Object.assign({elevation:6,variant:"filled"},A))}var hA=Object(O.a)((function(A){return{root:{"& > *":{margin:A.spacing(1),width:"25ch"}},wrapper:{margin:A.spacing(3),position:"relative"},paper:{marginTop:A.spacing(2),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:A.spacing(1),backgroundColor:A.palette.secondary.main},form:{width:"100%",marginTop:A.spacing(1)},formControl:{marginTop:A.spacing(1),width:"100%",minWidth:120},submit:{marginBottom:A.spacing(1)},buttonProgress:{color:uA.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function vA(A){var e=A.linkObj,t=A.closeModal,r=(Object(b.a)(A,["linkObj","closeModal"]),hA()),i=v().userId,c=V.ref(),o=Object(a.useState)(!1),l=Object(g.a)(o,2),s=l[0],m=l[1],u=Object(a.useState)(""),d=Object(g.a)(u,2),p=d[0],f=(d[1],Object(a.useState)(!1)),h=Object(g.a)(f,2),E=h[0],k=(h[1],Object(a.useState)("")),w=Object(g.a)(k,2),O=w[0],y=w[1],B=Object(a.useState)(""),D=Object(g.a)(B,2),P=D[0],U=D[1],M=Object(a.useState)(""),H=Object(g.a)(M,2),z=H[0],S=H[1],L=Object(a.useState)(""),C=Object(g.a)(L,2),R=C[0],I=C[1],F=Object(a.useState)(null),Q=Object(g.a)(F,2),Z=Q[0],W=Q[1],X=Object(a.useState)(!1),Y=Object(g.a)(X,2),K=Y[0],G=Y[1];function J(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=q.ref("links/".concat(i)),t=e.push(),a={name:P,url:O,price:R,description:z};return A&&(a.image=A),t.set(a)}function _(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e.linkId,a=(e.link,q.ref("links/".concat(i,"/").concat(t))),n={name:P,url:O,price:R,description:z};return A&&(n.image=A),a.update(n)}function $(){var A="link_images/".concat(Z.name);return c.child(A).put(Z)}function AA(){var A="link_images/".concat(Z.name);return c.child(A).getDownloadURL()}Object(a.useEffect)((function(){!function(){if(e){e.linkId;var A=e.link;A&&(x.a.isUndefined(A.name)||U(A.name),x.a.isUndefined(A.url)||y(A.url),x.a.isUndefined(A.description)||S(A.description),x.a.isUndefined(A.price)||I(A.price)),G(!0)}}()}),[]);var tA=function(A,e){"clickaway"!==e&&m(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(cA.a,null),n.a.createElement(oA.a,{maxWidth:"xs"},n.a.createElement("div",{className:r.paper},n.a.createElement(lA.a,{className:r.avatar},n.a.createElement(pA.a,null)),n.a.createElement(T.a,{component:"h1",variant:"h5"},K?"Update":"Add"," Product Link"),n.a.createElement("form",{onSubmit:function(A){A.preventDefault(),Z?K?$().then((function(A){return AA()})).then((function(A){return _(A)})).then(t()).catch((function(A){return console.log("error")})):$().then((function(A){return AA()})).then((function(A){return J(A)})).then(t()).catch((function(A){return console.log("error")})):K?_().then(t()).catch((function(A){return console.log("error")})):J().then(t()).catch((function(A){return console.log("error")}))},className:r.form},n.a.createElement(eA.a,{variant:"outlined",type:"text",label:"Product Url",margin:"normal",value:O,fullWidth:!0,required:!0,onChange:function(A){return y(A.target.value)}}),n.a.createElement(eA.a,{variant:"outlined",type:"text",label:"Product Name",margin:"normal",value:P,fullWidth:!0,required:!0,onChange:function(A){return U(A.target.value)}}),n.a.createElement(eA.a,{variant:"outlined",type:"text",label:"Description",margin:"normal",value:z,multiline:!0,rows:3,fullWidth:!0,onChange:function(A){return S(A.target.value)}}),n.a.createElement(eA.a,{variant:"outlined",type:"text",label:"Price",margin:"normal",value:R,fullWidth:!0,onChange:function(A){return I(A.target.value)}}),n.a.createElement(gA,{imageName:null!==Z?Z.name:"",setImage:W}),n.a.createElement("div",{className:r.wrapper},n.a.createElement(N.a,{variant:"contained",type:"submit",color:"primary",fullWidth:!0,disabled:!(j(O)&&""!==P),className:r.submit},null===e?"Add":"Update"),K&&n.a.createElement(N.a,{variant:"contained",type:"button",color:"secondary",fullWidth:!0,className:r.submit,onClick:function(A){A.preventDefault();var a=e.linkId;e.link,q.ref("links/".concat(i,"/").concat(a)).remove().then(t()).catch((function(A){return console.log(A)}))}},"Delete"),E&&n.a.createElement(sA.a,{size:24,className:r.buttonProgress})))),n.a.createElement(mA.a,{open:s,autoHideDuration:6e3,onClose:tA},n.a.createElement(fA,{onClose:tA,severity:"error"},p))))}function bA(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var EA=Object(O.a)((function(A){return{paper:{position:"absolute",width:400,backgroundColor:A.palette.background.paper,boxShadow:A.shadows[5],padding:A.spacing(1,1,1)}}}));var kA=function(A){var e=A.openModal,t=A.closeModal,a=A.editLink,r=EA(),i=n.a.useState(bA),c=Object(g.a)(i,1)[0];return n.a.createElement(rA.a,{open:e,onClose:function(){return t()},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},n.a.createElement("div",{style:c,className:r.paper},n.a.createElement(vA,{linkObj:a,closeModal:t})))},wA=Object(O.a)((function(A){return{paper:{position:"absolute",width:400,backgroundColor:A.palette.background.paper,borderRadius:"5%",boxShadow:A.shadows[5],padding:A.spacing(1,1,1)},container:{marginTop:A.spacing(2)}}}));var xA=function(A){var e=wA(),t=v().userId,r=Object(a.useState)(!1),i=Object(g.a)(r,2),c=i[0],o=i[1],l=Object(a.useState)(""),s=Object(g.a)(l,2),m=s[0],u=s[1],f=Object(a.useState)(!1),h=Object(g.a)(f,2),b=h[0],E=h[1],k=Object(a.useState)({}),w=Object(g.a)(k,2),O=w[0],j=w[1],y=Object(a.useState)({}),D=Object(g.a)(y,2),P=D[0],V=D[1],T=Object(a.useState)(null),U=Object(g.a)(T,2),M=U[0],N=U[1],H=Object(a.useState)(""),z=Object(g.a)(H,2),S=z[0],L=z[1],C=q.ref("links/".concat(t)),R=q.ref("streams/".concat(t,"/active")),I=q.ref("streams/".concat(t,"/active")),F=q.ref("stream_meta");function Q(){return(Q=Object(p.a)(d.a.mark((function A(e){var t;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:t=Object.keys(e),C.once("value").then((function(A){var a=x.a.pickBy(A.val(),(function(A,a){if(t.includes(a))return A.active=e[a].active,e[a].active&&L(a),A}));j(a)}));case 2:case"end":return A.stop()}}),A)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return C.on("value",(function(A){var e=A.val();V(e)}),(function(A){B(A)})),R.on("value",(function(A){!function(A){null===A?(u(""),L(""),E(!1),j({})):x.a.isUndefined(A.stream)||(u(A.stream),E(!0),x.a.isUndefined(A.stage)?j({}):function(A){Q.apply(this,arguments)}(A.stage))}(A.val())}),(function(A){B(A)})),function(){C.off(),R.off()}}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(nA,{goLive:function(){F.push().set({uid:t,stream:m}).then(I.update({stream:m})).then(E(!0)).catch((function(A){return B(A)}))},streamUrl:m,setStreamUrl:u,showStage:b}),n.a.createElement("div",{className:e.container},n.a.createElement(_,{showStage:b,links:O,makeLinkLive:function(A){var e={};""!==S&&(e["stage/".concat(S,"/active")]=!1),e["stage/".concat(A,"/active")]=!0,I.update(e)},unstageLink:function(A){q.ref("streams/".concat(t,"/active/stage/").concat(A)).remove().catch((function(A){return B(A)}))},streamUrl:m,endLive:function(){I.remove()}})),n.a.createElement(Y,{links:P,openLinkForm:o,editLink:function(A,e){N({linkId:A,link:e}),o(!0)},stageLink:function(A){var e={};e["stage/".concat(A,"/active")]=!1,I.update(e)},showStage:b}),n.a.createElement(kA,{openModal:c,closeModal:function(){N(null),o(!1)},editLink:M}))},OA=Object(O.a)((function(A){return{paper:{marginTop:A.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:A.spacing(1),backgroundColor:A.palette.secondary.main},firebaseForm:{margin:A.spacing(2)},form:{width:"100%",marginTop:A.spacing(1)},submit:{margin:A.spacing(3,0,2)}}}));var jA=function(){var A=OA();return Object(a.useEffect)((function(){var A;A="#firebaseui-auth-container",D.start(A,P)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(oA.a,{component:"main",maxWidth:"xs"},n.a.createElement(cA.a,null),n.a.createElement("div",{className:A.paper},n.a.createElement(lA.a,{className:A.avatar}),n.a.createElement(T.a,{component:"h1",variant:"h5"},"Register or Sign In"),n.a.createElement("div",{id:"firebaseui-auth-container",className:A.firebaseForm}))))};var yA=function(A){return n.a.createElement(c.d,null,n.a.createElement(E,{exact:!0,path:"/"},n.a.createElement(xA,null)),n.a.createElement(k,{exact:!0,path:"/signin"},n.a.createElement(jA,null)))},BA=t(39),DA=t(183),PA=t(182),qA=t(170),VA=t(175),TA=t(176),UA=t(177),MA=t(88),NA=t.n(MA),HA=t(89),zA=t.n(HA),SA=t(17),LA=t(16),CA=Object(O.a)((function(A){return{root:{display:"flex"},drawer:Object(f.a)({},A.breakpoints.up("sm"),{width:180,flexShrink:0,backgroundColor:"#6699cc",color:"white"}),appBar:Object(f.a)({},A.breakpoints.up("sm"),{width:"calc(100% - ".concat(180,"px)"),marginLeft:180,boxShadow:"none"}),menuButton:Object(f.a)({marginRight:A.spacing(2)},A.breakpoints.up("sm"),{display:"none"}),toolbar:A.mixins.toolbar,drawerPaper:{width:180,backgroundColor:"#6699cc",color:"white"},content:{flexGrow:1,padding:A.spacing(3)},search:Object(f.a)({position:"relative",borderRadius:A.shape.borderRadius,backgroundColor:Object(SA.c)(A.palette.common.white,.75),"&:hover":{backgroundColor:Object(SA.c)(A.palette.common.white,.9)},marginRight:A.spacing(2),marginLeft:0,width:"100%"},A.breakpoints.up("sm"),{marginLeft:A.spacing(3),width:"auto"}),searchIcon:{padding:A.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:A.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(A.spacing(4),"px)"),transition:A.transitions.create("width"),width:"100%"},A.breakpoints.up("md"),{width:"30ch"}),linkStyle:{color:"white","&:hover":{color:"white"}},logo:{width:"107px",height:"60px",margin:"auto"}}}));var RA=function(A){var e=CA(),r=Object(LA.a)(),i=n.a.useState(!1),c=Object(g.a)(i,2),o=c[0],l=c[1],s=Object(a.useState)(null),m=Object(g.a)(s,2),u=m[0],f=m[1],v=Object(a.useState)(!0),b=Object(g.a)(v,2),E=b[0],k=b[1],w=Object(a.useState)(!1),x=Object(g.a)(w,2),O=x[0],j=x[1];function y(){return(y=Object(p.a)(d.a.mark((function A(){return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:window.firebase.auth().onAuthStateChanged((function(A){A&&(f(A.uid),j(!0)),k(!1)}));case 1:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function B(){return(B=Object(p.a)(d.a.mark((function A(){return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:window.firebase.auth().signOut(),j(!1);case 2:case"end":return A.stop()}}),A)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]);var D=Object(a.useMemo)((function(){return{isAuthenticated:O,userId:u}}),[O,u]),P=n.a.createElement("div",null,n.a.createElement(qA.a,null,n.a.createElement(VA.a,null,n.a.createElement("img",{className:e.logo,src:t(114)})),n.a.createElement(VA.a,{button:!0},n.a.createElement(TA.a,null,n.a.createElement(NA.a,null)),n.a.createElement(BA.a,{to:"/",className:e.linkStyle},n.a.createElement(UA.a,{primary:"Live Links"})))),n.a.createElement(qA.a,null,n.a.createElement(VA.a,{button:!0,onClick:function(){return B.apply(this,arguments)}},n.a.createElement(TA.a,null,n.a.createElement(zA.a,null)),n.a.createElement(UA.a,{primary:"Signout"}))));return!E&&n.a.createElement("div",{className:e.root},O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:e.drawer,"aria-label":"mailbox folders"},n.a.createElement(PA.a,{smUp:!0,implementation:"css"},n.a.createElement(DA.a,{container:void 0,variant:"temporary",anchor:"rtl"===r.direction?"right":"left",open:o,onClose:function(){l(!o)},classes:{paper:e.drawerPaper},ModalProps:{keepMounted:!0}},P)),n.a.createElement(PA.a,{xsDown:!0,implementation:"css"},n.a.createElement(DA.a,{classes:{paper:e.drawerPaper},variant:"permanent",open:!0},P)))),n.a.createElement("main",{className:e.content},n.a.createElement(h.Provider,{value:D},n.a.createElement(yA,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(115);var IA=Object(l.a)({palette:{error:{main:m.a.A400},background:{default:"#fff"},typography:{fontFamily:"'Source Sans Pro', sans-serif",fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:700,fontFamilySecondary:"'Roboto Condensed', sans-serif"}}}),FA=Object(o.a)();i.a.render(n.a.createElement(s.a,{theme:IA},n.a.createElement(c.c,{history:FA},n.a.createElement(RA,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()})).catch((function(A){console.error(A.message)}))},81:function(A,e){A.exports="data:image/jpeg;base64,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"}},[[102,1,2]]]);
//# sourceMappingURL=main.5f1e8275.chunk.js.map