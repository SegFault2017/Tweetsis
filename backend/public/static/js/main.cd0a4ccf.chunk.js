(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{274:function(e,n,t){"use strict";t.r(n);var c,o,a,i,r,d,s,l,u=t(0),b=t.n(u),p=t(20),m=t.n(p),h=t(22),j=t(3),x=t(4),f=t.p+"static/media/twitterMaginfier.13bcc0d1.png",g=t(131),O=t.p+"static/media/BlueSearch.4553f7b7.svg",y=t(82),w=t(24),v=t(78),k=t.n(v),S=t(119),T=t(59),C=t.n(T),z="add_document",B="add_sentence",M="add_author",I="set_loading",A="switch_analysis",D="add_created_time",N="clear_sentences",L=function(e){return function(){var n=Object(S.a)(k.a.mark((function n(t){var c,o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t({type:I,payload:!0}),c=0,n.next=5,C.a.post("/analyze/twitter/".concat(e));case 5:o=n.sent,t({type:M,payload:o.data.twitter.user}),t({type:z,payload:o.data}),t({type:D,payload:o.data.twitter.tweet.createdTime}),o.data.google.sentences.map((function(e){var n={sentenceData:{score:e.sentiment.score,magnitude:e.sentiment.magnitude,content:e.text.content},sentenceIndex:c};t({type:B,payload:n}),c++})),t({type:I,payload:!1}),n.next=18;break;case 13:n.prev=13,n.t0=n.catch(0),console.log(n.t0),t({type:I,payload:!1}),window.alert("Something wrong with the twitter link");case 18:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}()},R=t(2),_=x.b.div(c||(c=Object(j.a)(["\n  background-color: #515151;\n  height: 650px;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),F=x.b.div(o||(o=Object(j.a)(["\n  background-color: #3d3838;\n  height: 400px;\n  width: 70vw;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 70% 50%;\n  background-size: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 25px;\n  padding: 35px;\n  z-index: 1;\n\n  @media (max-width: 500px) {\n    width: 85vw;\n  }\n"])),f),P=x.b.div(a||(a=Object(j.a)(["\n  color: white;\n  font-size: 50px;\n  font-family: aktiv-grotesk;\n  width: 300px;\n\n  @media (min-width: 1000px) {\n    margin-left: 20px;\n  }\n"]))),H=x.b.input(i||(i=Object(j.a)(["\n  padding: 25px;\n  padding-left: 60px;\n  font-family: aktiv-grotesk;\n  height: 65px;\n  width: 50vw;\n  z-index: 2;\n  border-radius: 25px;\n  outline: none;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 15px 17px;\n  border: none;\n  font-size: 20.0952px;\n  line-height: 26px;\n  /* identical to box height */\n\n  color: #434343;\n\n  @media (max-width: 500px) {\n    width: 85vw;\n  }\n"])),O),V=x.b.div(r||(r=Object(j.a)(["\n  padding: 15px;\n"]))),W=x.b.div(d||(d=Object(j.a)(["\n  color: red;\n  font-size: 16px;\n  font-family: aktiv-grotesk;\n  padding: 5px;\n"]))),$=x.b.div(s||(s=Object(j.a)(["\n  color: white;\n  font-size: 16px;\n  font-family: aktiv-grotesk;\n  padding: 10px;\n  width: 85%;\n  height: 48px;\n  background: rgba(196, 196, 196, 0.25);\n  border-radius: 25px;\n  text-align: center;\n\n  @media (max-width: 700px) {\n    font-size: 11px;\n    height: 48px;\n    width: 95%;\n  }\n"]))),E=x.b.div(l||(l=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));var J,U,Z,q,X,Y,G,K,Q,ee,ne=Object(w.b)((function(e){return{document:{documentContents:e.document.documentContents,documentScore:e.document.documentScore,documentMagnitude:e.document.documentMagnitude}}}),{getSentimentData:L,clearSentences:function(){return function(e){e({type:N})}}})((function(e){var n=Object(u.useState)(!1),t=Object(h.a)(n,2),c=t[0],o=t[1];return Object(R.jsxs)(_,{children:[console.log(e.document.documentScore,"props.document "),Object(R.jsx)(F,{children:Object(R.jsx)(P,{children:" Learn about your Tweets. "})}),Object(R.jsx)(V,{}),Object(R.jsx)(g.a,{initialValues:{tweet:""},validationSchema:y.a({tweet:y.b().matches(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,"Pleases enter a Tweet URL").required("Please enter a Tweet URL")}),onSubmit:function(n,t){console.log(n.tweet),function(n){null!=e.document.documentContents&&e.clearSentences(),o(!0);var t=n.tweet.split("/")[n.tweet.split("/").length-1];e.getSentimentData(t)}(n),t.resetForm()},children:function(e){return Object(R.jsx)("form",{onSubmit:e.handleSubmit,children:Object(R.jsxs)(E,{children:[Object(R.jsx)(H,{type:"text",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.tweet,name:"tweet",placeholder:"enter a tweet url"}),e.errors.tweet&&e.touched.tweet?Object(R.jsx)(W,{children:e.errors.tweet}):null,e.touched.tweet||e.errors.tweet||c?null:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(V,{}),Object(R.jsx)($,{children:"Can't come up with a URL? Try this one https://twitter.com/nodejs/status/1357731296055803904"})]})]})})}})]})})),te=function(){return Object(R.jsx)("svg",{version:"1.0",xmlns:"http://www.w3.org/2000/svg",width:"25.000000pt",height:"35.000000pt",viewBox:"0 0 25.000000 35.000000",preserveAspectRatio:"xMidYMid meet",children:Object(R.jsxs)("g",{transform:"translate(0.000000,35.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none",children:[Object(R.jsx)("path",{d:"M88 334 c-31 -17 -58 -61 -58 -97 0 -13 11 -41 25 -61 20 -29 23 -41\n15 -57 -6 -10 -14 -19 -19 -19 -4 0 -17 -18 -29 -39 -18 -32 -20 -40 -7 -44\n15 -6 35 19 68 84 16 30 22 35 46 31 56 -8 121 50 121 108 0 34 -28 78 -60 95\n-36 19 -67 19 -102 -1z m101 -8 c47 -25 63 -83 37 -135 -35 -66 -137 -66 -172\n0 -47 91 44 182 135 135z"}),Object(R.jsx)("path",{d:"M91 284 c-52 -66 7 -138 84 -104 14 6 8 7 -20 4 -52 -7 -80 19 -70\n65 14 66 115 71 115 5 0 -12 -7 -28 -17 -35 -15 -13 -16 -11 -10 21 7 34 6 36\n-23 38 -24 2 -33 -3 -42 -23 -15 -32 0 -49 45 -51 41 -3 57 11 57 47 0 61 -80\n83 -119 33z m69 -33 c0 -10 -7 -24 -16 -32 -13 -10 -17 -10 -24 1 -11 18 6 50\n25 50 8 0 15 -8 15 -19z"})]})})},ce=t(60),oe=x.b.div(J||(J=Object(j.a)(["\n  background-color: #6b6b6b;\n  height: 65px;\n  width: 100vw;\n  padding: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  /*position: fixed;*/\n  top: 0px;\n  z-index: 40;\n"]))),ae=x.b.div(U||(U=Object(j.a)(["\n  padding-left: 50px;\n"]))),ie=x.b.div(Z||(Z=Object(j.a)(["\n  padding-left: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 150px;\n"]))),re="nav-item-active",de=Object(x.b)(ce.b).attrs({activeClassName:re})(q||(q=Object(j.a)(["\n  &."," {\n    border-bottom: 2px solid #5dd7fc;\n  }\n  text-decoration: none;\n  color: white;\n"])),re),se=function(){return Object(R.jsxs)(oe,{children:[Object(R.jsx)(ae,{children:Object(R.jsx)(te,{})}),Object(R.jsx)(ie,{children:Object(R.jsx)(de,{exact:!0,to:"/",children:"Tweetsis"})})]})},le=t(124),ue=x.b.div(X||(X=Object(j.a)(["\n  height: 100%;\n  width:100%;\n  background-color: #cccccc;\n"]))),be=function(e){var n=Object(u.useRef)("chart"),t={labels:e.labels,datasets:[{label:e.title,fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(0,0,0,1)",borderWidth:2,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.data}]};return Object(R.jsx)(ue,{children:Object(R.jsx)(le.Bar,{ref:n,data:t})})},pe=t(6),me=t(132),he=t(15),je=t(295),xe=Object(he.a)((function(e){return{root:{width:50,height:28,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(22px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#434343",opacity:1,border:"1px solid ".concat(e.palette.grey[400])}},"&$focusVisible $thumb":{color:"#434343",border:"6px solid #fff"}},thumb:{width:26,height:26},track:{borderRadius:14,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:"#5DD7FC",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var n=e.classes,t=Object(me.a)(e,["classes"]);return Object(R.jsx)(je.a,Object(pe.a)({focusVisibleClassName:n.focusVisible,disableRipple:!0,classes:{root:n.root,switchBase:n.switchBase,thumb:n.thumb,track:n.track,checked:n.checked}},t))})),fe=x.b.div(Y||(Y=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),ge=x.b.div(G||(G=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 60vw;\n  background-color: #cccccc;\n  @media (max-width: 500px) {\n    width: 85vw;\n  }\n"]))),Oe=x.b.div(K||(K=Object(j.a)(["\n  display: flex;\n  width: 50vw;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n"]))),ye=x.b.div(Q||(Q=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),we=x.b.div(ee||(ee=Object(j.a)(["\n  font-family: aktiv-grotesk;\n  color: white;\n  font-size: 12px;\n"])));var ve,ke,Se,Te,Ce,ze,Be,Me,Ie=Object(w.b)((function(e){return{loading:e.loading,author:{profileName:e.author.profileName,name:e.author.name,image:e.author.profileImage},tweet:{contents:e.document.documentContents,createdTime:e.tweetMetaData.createdTime},document:{documentContents:e.document.documentContents,documentScore:e.document.documentScore,documentMagnitude:e.document.documentMagnitude},documentSentences:{sentences:e.documentSentences.sentences,sentencesByIndex:e.documentSentences.sentencesByIndex},analysisType:{documentAnalysis:e.analysisType.documentAnalysis}}}),{switchAnalysisType:function(e){return function(n){n({type:A,payload:!e})}}})((function(e){var n=Object(u.useState)(e.analysisType.documentAnalysis),t=Object(h.a)(n,2),c=t[0],o=t[1],a=[],i=[],r=[];return Object(R.jsxs)(fe,{children:[void(e.document.documentScore<0?a.push(e.document.documentScore,e.document.documentMagnitude,-1,1):a.push(e.document.documentScore,e.document.documentMagnitude,0,1)),(e.documentSentences.sentences.forEach((function(e){i.push(Math.round(100*(e.score+Number.EPSILON))/100);var n=function(e){return e.length>20?e.slice(0,21).concat("..."):e}(e.content);r.push(n)})),void i.push(0,1)),Object(R.jsx)(Oe,{children:Object(R.jsxs)(ye,{children:[Object(R.jsxs)(we,{children:["switch to"," ",e.analysisType.documentAnalysis?"sentences":"document"," "]}),Object(R.jsx)(xe,{checked:c,onChange:function(){o(!c),e.switchAnalysisType(e.analysisType.documentAnalysis)}})]})}),Object(R.jsx)(ge,{children:e.loading.applicationLoading?null:e.analysisType.documentAnalysis?Object(R.jsx)(be,{labels:["sentiment score","magnitude"],data:a,title:"Document"}):Object(R.jsx)(be,{labels:r,data:i,title:"Sentence sentiment score"})})]})})),Ae=x.b.div(ve||(ve=Object(j.a)(["\n  display: flex;\n  flex-flow: row wrap; // shorthand for flex-direction and flex-wrap\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 15px;\n"]))),De=x.b.header(ke||(ke=Object(j.a)(["\n  font-size: 40px;\n  font-family: Al Tarikh;\n  color: #ffffff;\n  background-color: #6b6b6b;\n  flex: 1 0 100%;\n  text-align: center;\n  padding-bottom: 15px;\n"]))),Ne=x.b.div(Se||(Se=Object(j.a)(["\n  background-color: #15212b;\n  height: auto;\n  border-radius: 25px;\n  padding-left: 5%;\n  padding-right: 5%;\n\n  @media (max-width: 500px) {\n    width: 345px;\n  }\n"]))),Le=x.b.div(Te||(Te=Object(j.a)(["\n  color: white;\n  font-size: 20px;\n  font-family: aktiv-grotesk;\n  padding-top: 5%;\n"]))),Re=x.b.div(Ce||(Ce=Object(j.a)(["\n  font-size: 16px;\n  color: white;\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 400px;\n  padding-top: 5%;\n\n  @media (max-width: 500px) {\n    width: 310px;\n  }\n"]))),_e=x.b.div(ze||(ze=Object(j.a)(["\n  font-size: 14px;\n  color: #798896;\n  padding-top: 5%;\n  padding-bottom: 5%;\n"]))),Fe=function(e){return Object(R.jsxs)(Ae,{children:[Object(R.jsx)(De,{children:"Sentiment Analysis"}),Object(R.jsxs)(Ne,{children:[Object(R.jsxs)(Le,{children:[Object(R.jsx)("img",{height:"65",width:"65",src:e.details.author.image,alt:"Twitter Profile",style:{borderRadius:15}}),"@",e.details.author.profileName,":"]}),Object(R.jsx)(Re,{children:e.details.tweet.contents}),Object(R.jsx)(_e,{children:e.details.tweet.createdTime})]})]})},Pe=x.b.div(Be||(Be=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  background-color: #6b6b6b;\n"]))),He=x.b.div(Me||(Me=Object(j.a)(["\n  display: flex;\n  padding-top: 35px;\n  padding-bottom: 35px;\n  flex-direction: column;\n  justify-content: center;\n"])));var Ve,We=Object(w.b)((function(e){return{loading:e.loading,author:{profileName:e.author.profileName,name:e.author.name,image:e.author.profileImage},tweet:{contents:e.document.documentContents,createdTime:e.tweetMetaData.createdTime},document:{documentContents:e.document.documentContents,documentScore:e.document.documentScore,documentMagnitude:e.document.documentMagnitude},documentSentences:{sentences:e.documentSentences.sentences,sentencesByIndex:e.documentSentences.sentencesByIndex},analysisType:{documentAnalysis:e.analysisType.documentAnalysis}}}),{getSentimentData:L})((function(e){return Object(R.jsx)(Pe,{children:Object(R.jsxs)(He,{children:[Object(R.jsx)(Fe,{details:e}),Object(R.jsx)(Ie,{})]})})})),$e=t(296),Ee=t(293),Je=t(294),Ue=Object(Ee.a)((function(e){return{root:{position:"relative"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{color:"#1a90ff",animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}})),Ze=function(e){var n=Ue();return Object(R.jsxs)("div",{className:n.root,children:[Object(R.jsx)(Je.a,Object(pe.a)(Object(pe.a)({variant:"determinate",className:n.bottom,size:40,thickness:4},e),{},{value:100})),Object(R.jsx)(Je.a,Object(pe.a)({variant:"indeterminate",disableShrink:!0,className:n.top,classes:{circle:n.circle},size:40,thickness:4},e))]})},qe=x.b.div(Ve||(Ve=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: #6b6b6b;\n"]))),Xe=Object(Ee.a)((function(e){return{backdrop:{zIndex:50,color:"#fff"}}}));var Ye,Ge=Object(w.b)((function(e){return{document:e.document,sentences:e.sentences,analysisType:e.analysisType,loading:e.loading}}))((function(e){var n=Object(u.useState)(!1),t=Object(h.a)(n,2),c=(t[0],t[1]),o=Xe();return Object(R.jsxs)(qe,{children:[Object(R.jsx)($e.a,{className:o.backdrop,open:e.loading.applicationLoading,children:Object(R.jsx)(Ze,{})}),Object(R.jsx)(se,{}),Object(R.jsx)(ne,{setTweetSearched:c}),null!=e.document.documentScore?Object(R.jsx)(We,{}):null]})})),Ke=t(9),Qe=Object(x.a)(Ye||(Ye=Object(j.a)(["\n\n  html {\n    box-sizing: border-box;\n    overflow-x:hidden;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n  }\n\n  #root {\n    position: relative;\n    min-height: 100vh;\n  }\n"]))),en=t(30),nn={documentContents:null,documentScore:null,documentMagnitude:null},tn={name:null,profileName:null,profileImage:null},cn=t(16),on={sentences:[],sentencesByIndex:[]},an={applicationLoading:!1},rn={documentAnalysis:!0},dn={createdTime:null},sn=Object(en.combineReducers)({document:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case z:return Object(pe.a)(Object(pe.a)({},e),{},{documentContents:n.payload.twitter.tweet.text,documentScore:n.payload.google.documentSentiment.score,documentMagnitude:n.payload.google.documentSentiment.magnitude});default:return e}},author:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case M:return Object(pe.a)(Object(pe.a)({},e),{},{name:n.payload.name,profileName:n.payload.profile_name,profileImage:n.payload.url});default:return e}},documentSentences:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B:return Object(pe.a)(Object(pe.a)({},e),{},{sentences:[].concat(Object(cn.a)(e.sentences),[n.payload.sentenceData]),sentencesByIndex:[].concat(Object(cn.a)(e.sentencesByIndex),[n.payload.sentenceIndex])});case N:return Object(pe.a)(Object(pe.a)({},e),{},{sentences:e.sentences.filter((function(e){return 1===e.content})),sentencesByIndex:e.sentencesByIndex.filter((function(e){return""===e.content}))});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I:return Object(pe.a)(Object(pe.a)({},e),{},{applicationLoading:n.payload});default:return e}},analysisType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A:return Object(pe.a)(Object(pe.a)({},e),{},{documentAnalysis:n.payload});default:return e}},tweetMetaData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D:return Object(pe.a)(Object(pe.a)({},e),{},{createdTime:n.payload});default:return e}}}),ln=t(128),un=t(129),bn=t.n(un),pn=t(130),mn=Object(en.createStore)(sn,Object(pn.composeWithDevTools)(Object(en.applyMiddleware)(ln.a,bn.a)));var hn=function(){return Object(R.jsx)(w.a,{store:mn,children:Object(R.jsxs)(ce.a,{children:[Object(R.jsx)(Qe,{}),Object(R.jsx)(Ke.c,{children:Object(R.jsx)(Ke.a,{exact:!0,path:"/",component:Ge})})]})})},jn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,298)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),o(e),a(e),i(e)}))};window.axios=C.a,m.a.render(Object(R.jsx)(b.a.StrictMode,{children:Object(R.jsx)(hn,{})}),document.getElementById("root")),jn()}},[[274,1,2]]]);
//# sourceMappingURL=main.cd0a4ccf.chunk.js.map