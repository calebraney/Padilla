(()=>{(function(){function t(){for(var n=arguments.length,i=0;i<n;i++){var s=i<0||arguments.length<=i?void 0:arguments[i];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function r(){for(var n=this.parentNode,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];var l=s.length;if(!!n)for(l||n.removeChild(this);l--;){var f=s[l];typeof f!="object"?f=this.ownerDocument.createTextNode(f):f.parentNode&&f.parentNode.removeChild(f),l?n.insertBefore(this.previousSibling,f):n.replaceChild(f,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=r,DocumentFragment.prototype.replaceWith=r))})();function $t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ft(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function dt(t,e,r){return e&&ft(t.prototype,e),r&&ft(t,r),t}function Gt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function pt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function ht(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?pt(Object(r),!0).forEach(function(n){Gt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):pt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function yt(t,e){return qt(t)||Yt(t,e)||vt(t,e)||Vt()}function C(t){return Ft(t)||Ut(t)||vt(t)||Xt()}function Ft(t){if(Array.isArray(t))return K(t)}function qt(t){if(Array.isArray(t))return t}function Ut(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function Yt(t,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(t)))){var r=[],n=!0,i=!1,s=void 0;try{for(var a=t[Symbol.iterator](),l;!(n=(l=a.next()).done)&&(r.push(l.value),!(e&&r.length===e));n=!0);}catch(f){i=!0,s=f}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return r}}function vt(t,e){if(!!t){if(typeof t=="string")return K(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(t,e)}}function K(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(r,n){var i=Object.getOwnPropertyDescriptor(Object(t),n),s=Object.getOwnPropertyDescriptor(Object(e),n);return Object.defineProperty(r,n,s||i)},{})}function X(t){return typeof t=="string"}function rt(t){return Array.isArray(t)}function V(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=H(t),r;return e.types!==void 0?r=e.types:e.split!==void 0&&(r=e.split),r!==void 0&&(e.types=(X(r)||rt(r)?String(r):"").split(",").map(function(n){return String(n).trim()}).filter(function(n){return/((line)|(word)|(char))/i.test(n)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(t.position)),e}function nt(t){var e=X(t)||rt(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Z(t){return t!==null&&typeof t=="object"}function zt(t){return Z(t)&&/^(1|3|11)$/.test(t.nodeType)}function Zt(t){return typeof t=="number"&&t>-1&&t%1===0}function Jt(t){return Z(t)&&Zt(t.length)}function G(t){return rt(t)?t:t==null?[]:Jt(t)?Array.prototype.slice.call(t):[t]}function gt(t){var e=t;return X(t)&&(/^(#[a-z]\w+)$/.test(t.trim())?e=document.getElementById(t.trim().slice(1)):e=document.querySelectorAll(t)),G(e).reduce(function(r,n){return[].concat(C(r),C(G(n).filter(zt)))},[])}var Kt=Object.entries,z="_splittype",D={},Qt=0;function M(t,e,r){if(!Z(t))return console.warn("[data.set] owner is not an object"),null;var n=t[z]||(t[z]=++Qt),i=D[n]||(D[n]={});return r===void 0?!!e&&Object.getPrototypeOf(e)===Object.prototype&&(D[n]=ht(ht({},i),e)):e!==void 0&&(i[e]=r),r}function $(t,e){var r=Z(t)?t[z]:null,n=r&&D[r]||{};return e===void 0?n:n[e]}function bt(t){var e=t&&t[z];e&&(delete t[e],delete D[e])}function te(){Object.keys(D).forEach(function(t){delete D[t]})}function ee(){Kt(D).forEach(function(t){var e=yt(t,2),r=e[0],n=e[1],i=n.isRoot,s=n.isSplit;(!i||!s)&&(D[r]=null,delete D[r])})}function re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",r=t?String(t):"";return r.trim().replace(/\s+/g," ").split(e)}var it="\\ud800-\\udfff",Tt="\\u0300-\\u036f\\ufe20-\\ufe23",At="\\u20d0-\\u20f0",St="\\ufe0e\\ufe0f",ne="[".concat(it,"]"),Q="[".concat(Tt).concat(At,"]"),tt="\\ud83c[\\udffb-\\udfff]",ie="(?:".concat(Q,"|").concat(tt,")"),wt="[^".concat(it,"]"),Et="(?:\\ud83c[\\udde6-\\uddff]){2}",xt="[\\ud800-\\udbff][\\udc00-\\udfff]",mt="\\u200d",_t="".concat(ie,"?"),Ot="[".concat(St,"]?"),oe="(?:"+mt+"(?:"+[wt,Et,xt].join("|")+")"+Ot+_t+")*",se=Ot+_t+oe,ae="(?:".concat(["".concat(wt).concat(Q,"?"),Q,Et,xt,ne].join("|"),`
)`),ce=RegExp("".concat(tt,"(?=").concat(tt,")|").concat(ae).concat(se),"g"),le=[mt,it,Tt,At,St],ue=RegExp("[".concat(le.join(""),"]"));function fe(t){return t.split("")}function Ct(t){return ue.test(t)}function de(t){return t.match(ce)||[]}function pe(t){return Ct(t)?de(t):fe(t)}function he(t){return t==null?"":String(t)}function ge(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t=he(t),t&&X(t)&&!e&&Ct(t)?pe(t):t.split(e)}function et(t,e){var r=document.createElement(t);return e&&Object.keys(e).forEach(function(n){var i=e[n],s=X(i)?i.trim():i;s===null||s===""||(n==="children"?r.append.apply(r,C(G(s))):r.setAttribute(n,s))}),r}var ot={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function ye(t,e){e=H(ot,e);var r=nt(e.types),n=e.tagName,i=t.nodeValue,s=document.createDocumentFragment(),a=[],l=[];return/^\s/.test(i)&&s.append(" "),a=re(i).reduce(function(f,p,w,g){var d,T;return r.chars&&(T=ge(p).map(function(m){var _=et(n,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:m});return M(_,"isChar",!0),l=[].concat(C(l),[_]),_})),r.words||r.lines?(d=et(n,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(r.words&&e.absolute?"position: relative;":""),children:r.chars?T:p}),M(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):T.forEach(function(m){s.appendChild(m)}),w<g.length-1&&s.append(" "),r.words?f.concat(d):f},[]),/\s$/.test(i)&&s.append(" "),t.replaceWith(s),{words:a,chars:l}}function Rt(t,e){var r=t.nodeType,n={words:[],chars:[]};if(!/(1|3|11)/.test(r))return n;if(r===3&&/\S/.test(t.nodeValue))return ye(t,e);var i=G(t.childNodes);if(i.length&&(M(t,"isSplit",!0),!$(t).isRoot)){t.style.display="inline-block",t.style.position="relative";var s=t.nextSibling,a=t.previousSibling,l=t.textContent||"",f=s?s.textContent:" ",p=a?a.textContent:" ";M(t,{isWordEnd:/\s$/.test(l)||/^\s/.test(f),isWordStart:/^\s/.test(l)||/\s$/.test(p)})}return i.reduce(function(w,g){var d=Rt(g,e),T=d.words,m=d.chars;return{words:[].concat(C(w.words),C(T)),chars:[].concat(C(w.chars),C(m))}},n)}function ve(t,e,r,n){if(!r.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,s=yt(n,2),a=s[0],l=s[1],f=0,p=0;if(i&&i!==document.body){var w=i.getBoundingClientRect();f=w.x+a,p=w.y+l}var g=t.getBoundingClientRect(),d=g.width,T=g.height,m=g.x,_=g.y,E=_+l-p,R=m+a-f;return{width:d,height:T,top:E,left:R}}function Lt(t){$(t).isWord?(bt(t),t.replaceWith.apply(t,C(t.childNodes))):G(t.children).forEach(function(e){return Lt(e)})}var be=function(){return document.createDocumentFragment()};function Te(t,e,r){var n=nt(e.types),i=e.tagName,s=t.getElementsByTagName("*"),a=[],l=[],f=null,p,w,g,d=[],T=t.parentElement,m=t.nextElementSibling,_=be(),E=window.getComputedStyle(t),R=E.textAlign,B=parseFloat(E.fontSize),F=B*.2;return e.absolute&&(g={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},w=t.offsetWidth,p=t.offsetHeight,M(t,{cssWidth:t.style.width,cssHeight:t.style.height})),G(s).forEach(function(y){var v=y.parentElement===t,A=ve(y,v,e,r),L=A.width,j=A.height,N=A.top,k=A.left;/^br$/i.test(y.nodeName)||(n.lines&&v&&((f===null||N-f>=F)&&(f=N,a.push(l=[])),l.push(y)),e.absolute&&M(y,{top:N,left:k,width:L,height:j}))}),T&&T.removeChild(t),n.lines&&(d=a.map(function(y){var v=et(i,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(R,"; width: 100%;")});M(v,"isLine",!0);var A={height:0,top:1e4};return _.appendChild(v),y.forEach(function(L,j,N){var k=$(L),o=k.isWordEnd,c=k.top,u=k.height,S=N[j+1];A.height=Math.max(A.height,u),A.top=Math.min(A.top,c),v.appendChild(L),o&&$(S).isWordStart&&v.append(" ")}),e.absolute&&M(v,{height:A.height,top:A.top}),v}),n.words||Lt(_),t.replaceChildren(_)),e.absolute&&(t.style.width="".concat(t.style.width||w,"px"),t.style.height="".concat(p,"px"),G(s).forEach(function(y){var v=$(y),A=v.isLine,L=v.top,j=v.left,N=v.width,k=v.height,o=$(y.parentElement),c=!A&&o.isLine;y.style.top="".concat(c?L-o.top:L,"px"),y.style.left=A?"".concat(g.left,"px"):"".concat(j-(c?g.left:0),"px"),y.style.height="".concat(k,"px"),y.style.width=A?"".concat(g.width,"px"):"".concat(N,"px"),y.style.position="absolute"})),T&&(m?T.insertBefore(t,m):T.appendChild(t)),d}var q=H(ot,{}),Nt=function(){dt(t,null,[{key:"clearData",value:function(){te()}},{key:"setDefaults",value:function(r){return q=H(q,V(r)),ot}},{key:"revert",value:function(r){gt(r).forEach(function(n){var i=$(n),s=i.isSplit,a=i.html,l=i.cssWidth,f=i.cssHeight;s&&(n.innerHTML=a,n.style.width=l||"",n.style.height=f||"",bt(n))})}},{key:"create",value:function(r,n){return new t(r,n)}},{key:"data",get:function(){return D}},{key:"defaults",get:function(){return q},set:function(r){q=H(q,V(r))}}]);function t(e,r){$t(this,t),this.isSplit=!1,this.settings=H(q,V(r)),this.elements=gt(e),this.split()}return dt(t,[{key:"split",value:function(r){var n=this;this.revert(),this.elements.forEach(function(a){M(a,"html",a.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var i=[window.pageXOffset,window.pageYOffset];r!==void 0&&(this.settings=H(this.settings,V(r)));var s=nt(this.settings.types);s.none||(this.elements.forEach(function(a){M(a,"isRoot",!0);var l=Rt(a,n.settings),f=l.words,p=l.chars;n.words=[].concat(C(n.words),C(f)),n.chars=[].concat(C(n.chars),C(p))}),this.elements.forEach(function(a){if(s.lines||n.settings.absolute){var l=Te(a,n.settings,i);n.lines=[].concat(C(n.lines),C(l))}}),this.isSplit=!0,window.scrollTo(i[0],i[1]),ee())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}();var h=function(t,e){let r=typeof t;return typeof e!="string"||e.trim()===""?t:e==="true"&&r==="boolean"?!0:e==="false"&&r==="boolean"?!1:isNaN(e)&&r==="string"?e:!isNaN(e)&&r==="number"?+e:t},It=function(t,e="lines, words"){if(!!t)return typeSplit=new Nt(t,{types:e}),typeSplit},U=function(t,e,r){if(!t||!e||!r){console.error(`GSAP checkBreakpoints Error in ${e}`);return}let{isMobile:n,isTablet:i,isDesktop:s,reduceMotion:a}=r.conditions;if(n===void 0||i===void 0||s===void 0){console.error("GSAP Match Media Conditions Not Defined");return}let l=`data-ix-${e}-desktop`,f=`data-ix-${e}-tablet`,p=`data-ix-${e}-mobile`;return runMobile=h(!0,t.getAttribute(p)),runTablet=h(!0,t.getAttribute(f)),runDesktop=h(!0,t.getAttribute(l)),!(runMobile===!1&&n||runTablet===!1&&i||runDesktop===!1&&s)};var Pt=function(t){let e="hoveractive",r='[data-ix-hoveractive="wrap"]',n="data-ix-hoveractive-class",i="is-active";gsap.utils.toArray(r).forEach(a=>{if(!a)return;let l=h(i,a.getAttribute(n));U(a,e,t)!==!1&&(a.addEventListener("mouseover",function(p){a.classList.add(l)}),a.addEventListener("mouseleave",function(p){a.classList.remove(l)}))})};var Dt=function(t){let e="scrollin",r="data-ix-scrollin",n="heading",i="item",s="container",a="stagger",l="rich-text",f="image-wrap",p="image",w="line",g="data-ix-scrollin-toggle-actions",d="data-ix-scrollin-scrub",T="data-ix-scrollin-start",m="data-ix-scrollin-end",_="data-ix-scrollin-direction",E=function(o){let c={scrub:!1,toggleActions:"play none none none",start:"top 90%",end:"top 75%"};return c.toggleActions=h(c.toggleActions,o.getAttribute(g)),c.scrub=h(c.scrub,o.getAttribute(d)),c.start=h(c.start,o.getAttribute(T)),c.end=h(c.end,o.getAttribute(m)),gsap.timeline({defaults:{duration:.6,ease:"power1.out"},scrollTrigger:{trigger:o,start:c.start,end:c.end,toggleActions:c.toggleActions,scrub:c.scrub}})},R=function(o,c,u={}){let S={opacity:0,y:"2rem"},W={opacity:1,x:"0rem"};return u.stagger===!0&&(W.stagger={each:.1,from:"start"}),c.fromTo(o,S,W)},B=function(o){let c=It(o);if(!c)return;let u=E(o),S=R(c.words,u,{stagger:!0,skew:"large"});u.eventCallback("onComplete",()=>{c.revert()})},F=function(o){if(!o)return;let c=E(o),u=R(o,c)},y=function(o){let c="right",u,S=h(c,o.getAttribute(_)),W={left:"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",right:"polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",top:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",bottom:"polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"};return S==="left"&&(u=W.left),S==="right"&&(u=W.right),S==="top"&&(u=W.top),S==="bottom"&&(u=W.bottom),u},v=function(o){if(!o)return;let c=y(o),u="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";E(o).fromTo(o,{clipPath:c},{clipPath:u,duration:1})},A=function(o){if(!o)return;let c=y(o),u="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";E(o).fromTo(o,{clipPath:c},{clipPath:u})},L=function(o){if(!o)return;let c=gsap.utils.toArray(o.children);c.length!==0&&c.forEach(u=>{let S=E(u),W=R(u,S)})},j=function(o){if(!o)return;let c=gsap.utils.toArray(o.children);if(c.length===0)return;let u=E(o),S=R(c,u,{stagger:!0})},N=function(o){if(!o)return;let c=gsap.utils.toArray(o.children);c.length!==0&&c.forEach(u=>{let S=u.tagName;["H1","H2","H3","H4","H5","H6"].includes(S)&&B(u),S==="FIGURE"?v(u):F(u)})};gsap.utils.toArray(`[${r}]`).forEach(o=>{if(!o||U(o,e,t)===!1)return;let u=o.getAttribute(r);u===n&&B(o),u===i&&F(o),u===p&&v(o),u===w&&A(o),u===s&&L(o),u===a&&j(o),u===l&&N(o)})};var kt=function(t){let e="scrolling",r='[data-ix-scrolling="wrap"]',n='[data-ix-scrolling="trigger"]',i='[data-ix-scrolling="layer"]',s="data-ix-scrolling-start",a="data-ix-scrolling-end",l="data-ix-scrolling-start-tablet",f="data-ix-scrolling-end-tablet",p="data-ix-scrolling-start-mobile",w="data-ix-scrolling-end-mobile",g="data-ix-scrolling-scrub",d="data-ix-scrolling-position",T="data-ix-scrolling-x-start",m="data-ix-scrolling-x-end",_="data-ix-scrolling-y-start",E="data-ix-scrolling-y-end",R="data-ix-scrolling-scale-start",B="data-ix-scrolling-scale-end",F="data-ix-scrolling-width-start",y="data-ix-scrolling-width-end",v="data-ix-scrolling-height-start",A="data-ix-scrolling-height-end",L="data-ix-scrolling-rotate-x-start",j="data-ix-scrolling-rotate-x-end",N="data-ix-scrolling-rotate-y-start",k="data-ix-scrolling-rotate-y-end",o="data-ix-scrolling-rotate-z-start",c="data-ix-scrolling-rotate-z-end",u="data-ix-scrolling-opacity-start",S="data-ix-scrolling-opacity-end",W="data-ix-scrolling-clip-start",st="data-ix-scrolling-clip-end",Ae="data-ix-scrolling-clip-type";gsap.utils.toArray(r).forEach(O=>{let at=O.querySelectorAll(i);if(!O||at.length===0)return;let J=O.querySelector(n);if(J||(J=O),U(O,e,t)===!1)return;let{isMobile:ct,isTablet:lt,isDesktop:Ee,reduceMotion:xe}=t.conditions,x={scrub:.5,start:"top bottom",end:"bottom top"};x.start=h(x.start,O.getAttribute(s)),x.end=h(x.end,O.getAttribute(a)),x.scrub=h(x.scrub,O.getAttribute(g)),lt&&O.getAttribute(l)&&(x.start=h(x.start,O.getAttribute(l))),lt&&O.getAttribute(f)&&(x.start=h(x.start,O.getAttribute(f))),ct&&O.getAttribute(p)&&(x.start=h(x.start,O.getAttribute(p))),ct&&O.getAttribute(w)&&(x.start=h(x.start,O.getAttribute(w)));let Wt=gsap.timeline({scrollTrigger:{trigger:J,start:x.start,end:x.end,scrub:x.scrub,markers:!1},defaults:{duration:1,ease:"none"}});at.forEach(Y=>{if(!Y)return;let I={},P={},b=function(ut,jt){let Bt=Y.hasAttribute(ut),Ht=h(jt,Y.getAttribute(ut));if(Bt)return Ht};I.x=b(T,"0%"),P.x=b(m,"0%"),I.y=b(_,"0%"),P.y=b(E,"0%"),I.scale=b(R,1),P.scale=b(B,1),I.width=b(F,"0%"),P.width=b(y,"0%"),I.height=b(v,"0%"),P.height=b(A,"0%"),I.rotateX=b(L,0),P.rotateX=b(j,0),I.rotateY=b(N,0),P.rotateY=b(k,0),I.rotateZ=b(o,0),P.rotateZ=b(c,0),I.opacity=b(u,0),P.opacity=b(S,0),I.clipPath=b(W,"string"),P.clipPath=b(st,"string");let Mt=h("<",Y.getAttribute(d)),me=Wt.fromTo(Y,I,P,Mt)})})};document.addEventListener("DOMContentLoaded",function(){console.log("Local Script Loaded"),gsap.ScrollTrigger!==void 0&&gsap.registerPlugin(ScrollTrigger),gsap.Flip!==void 0&&gsap.registerPlugin(Flip);let t=document.querySelectorAll("[data-ix-reset]"),e=function(){let n='[data-ix-workslider="wrap"]',i='[data-ix-workslider="swiper-bg"]',s='[data-ix-workslider="swiper-thumbs"]',a='[data-ix-workslider="swiper-text"]',l='[data-ix-workslider="thumbs-slide"]',f='[data-ix-workslider="current-slide"]',p='[data-ix-workslider="total-slides"]',w="is-active";function g(d){return d<10?"0"+d:d}document.querySelectorAll(n).forEach(function(d){if(!d)return;let T=g(d.querySelectorAll(l).length);d.querySelector(p).textContent=T;let m=new Swiper(d.querySelector(i),{slidesPerView:1,speed:400,effect:"fade",allowTouchMove:!1}),_=new Swiper(d.querySelector(s),{slidesPerView:1,speed:600,loop:!0,loopedSlides:8,slideToClickedSlide:!0}),E=new Swiper(d.querySelector(a),{slidesPerView:"auto",speed:600,loop:!0,loopedSlides:8,slideToClickedSlide:!0,mousewheel:!0,keyboard:!0,centeredSlides:!0,slideActiveClass:w,slideDuplicateActiveClass:w,thumbs:{swiper:m},navigation:{nextEl:d.querySelector(".swiper-next"),prevEl:d.querySelector(".swiper-prev")}});E.controller.control=_,_.controller.control=E,E.on("slideChange",function(R){let B=g(R.realIndex+1);d.querySelector(f).textContent=B})})};(function(){gsap.matchMedia().add({isMobile:"(max-width: 767px)",isTablet:"(min-width: 768px)  and (max-width: 991px)",isDesktop:"(min-width: 992px)",reduceMotion:"(prefers-reduced-motion: reduce)"},i=>{let{isMobile:s,isTablet:a,isDesktop:l,reduceMotion:f}=i.conditions;Pt(i),e(),f||(kt(i),Dt(i))})})(),t.forEach(function(n){n.addEventListener("click",function(i){ScrollTrigger.refresh()})})});})();
