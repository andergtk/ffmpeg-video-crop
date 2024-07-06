(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function $i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$i(Object(n),!0).forEach(function(r){re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$i(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Os(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Es(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cs(e,t,n){return t&&Es(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qr(e,t){return Ts(e)||Rs(e,t)||Wa(e,t)||Ms()}function rn(e){return Ps(e)||Is(e)||Wa(e)||Ns()}function Ps(e){if(Array.isArray(e))return Or(e)}function Ts(e){if(Array.isArray(e))return e}function Is(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Rs(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,o,s;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){a=!0,s=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw s}}return r}}function Wa(e,t){if(e){if(typeof e=="string")return Or(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Or(e,t)}}function Or(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ns(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ms(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Di=function(){},Jr={},Ka={},Ga=null,Xa={mark:Di,measure:Di};try{typeof window<"u"&&(Jr=window),typeof document<"u"&&(Ka=document),typeof MutationObserver<"u"&&(Ga=MutationObserver),typeof performance<"u"&&(Xa=performance)}catch{}var Ls=Jr.navigator||{},Hi=Ls.userAgent,Ui=Hi===void 0?"":Hi,Qe=Jr,X=Ka,Bi=Ga,mn=Xa;Qe.document;var Ye=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",qa=~Ui.indexOf("MSIE")||~Ui.indexOf("Trident/"),pn,hn,gn,vn,bn,Ue="___FONT_AWESOME___",Er=16,Ja="fa",Za="svg-inline--fa",gt="data-fa-i2svg",Cr="data-fa-pseudo-element",Fs="data-fa-pseudo-element-pending",Zr="data-prefix",Qr="data-icon",Vi="fontawesome-i2svg",js="async",zs=["HTML","HEAD","STYLE","SCRIPT"],Qa=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",ei=[G,te];function an(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var Yt=an((pn={},re(pn,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),re(pn,te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),pn)),Wt=an((hn={},re(hn,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),re(hn,te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),hn)),Kt=an((gn={},re(gn,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),re(gn,te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),gn)),$s=an((vn={},re(vn,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),re(vn,te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),vn)),Ds=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,eo="fa-layers-text",Hs=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Us=an((bn={},re(bn,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),re(bn,te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),bn)),to=[1,2,3,4,5,6,7,8,9,10],Bs=to.concat([11,12,13,14,15,16,17,18,19,20]),Vs=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gt=new Set;Object.keys(Wt[G]).map(Gt.add.bind(Gt));Object.keys(Wt[te]).map(Gt.add.bind(Gt));var Ys=[].concat(ei,rn(Gt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(to.map(function(e){return"".concat(e,"x")})).concat(Bs.map(function(e){return"w-".concat(e)})),zt=Qe.FontAwesomeConfig||{};function Ws(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ks(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Gs=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gs.forEach(function(e){var t=qr(e,2),n=t[0],r=t[1],i=Ks(Ws(n));i!=null&&(zt[r]=i)})}var no={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ja,replacementClass:Za,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zt.familyPrefix&&(zt.cssPrefix=zt.familyPrefix);var Ot=O(O({},no),zt);Ot.autoReplaceSvg||(Ot.observeMutations=!1);var C={};Object.keys(no).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ot[e]=n,$t.forEach(function(r){return r(C)})},get:function(){return Ot[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ot.cssPrefix=t,$t.forEach(function(n){return n(C)})},get:function(){return Ot.cssPrefix}});Qe.FontAwesomeConfig=C;var $t=[];function Xs(e){return $t.push(e),function(){$t.splice($t.indexOf(e),1)}}var Ke=Er,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qs(e){if(!(!e||!Ye)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=a)}return X.head.insertBefore(t,r),e}}var Js="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){for(var e=12,t="";e-- >0;)t+=Js[Math.random()*62|0];return t}function Tt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ti(e){return e.classList?Tt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ro(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ro(e[n]),'" ')},"").trim()}function Wn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ni(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Qs(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function el(e){var t=e.transform,n=e.width,r=n===void 0?Er:n,i=e.height,a=i===void 0?Er:i,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&qa?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var tl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function io(){var e=Ja,t=Za,n=C.cssPrefix,r=C.replacementClass,i=tl;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return i}var Yi=!1;function ur(){C.autoAddCss&&!Yi&&(qs(io()),Yi=!0)}var nl={mixout:function(){return{dom:{css:io,insertCss:ur}}},hooks:function(){return{beforeDOMElementCreation:function(){ur()},beforeI2svg:function(){ur()}}}},Be=Qe||{};Be[Ue]||(Be[Ue]={});Be[Ue].styles||(Be[Ue].styles={});Be[Ue].hooks||(Be[Ue].hooks={});Be[Ue].shims||(Be[Ue].shims=[]);var ke=Be[Ue],ao=[],rl=function e(){X.removeEventListener("DOMContentLoaded",e),$n=1,ao.map(function(t){return t()})},$n=!1;Ye&&($n=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),$n||X.addEventListener("DOMContentLoaded",rl));function il(e){Ye&&($n?setTimeout(e,0):ao.push(e))}function on(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?ro(e):"<".concat(t," ").concat(Zs(r),">").concat(a.map(on).join(""),"</").concat(t,">")}function Wi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var dr=function(t,n,r,i){var a=Object.keys(t),o=a.length,s=n,l,c,u;for(r===void 0?(l=1,u=t[a[0]]):(l=0,u=r);l<o;l++)c=a[l],u=s(u,t[c],c,t);return u};function al(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Pr(e){var t=al(e);return t.length===1?t[0].toString(16):null}function ol(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ki(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Tr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=Ki(t);typeof ke.hooks.addPack=="function"&&!i?ke.hooks.addPack(e,Ki(t)):ke.styles[e]=O(O({},ke.styles[e]||{}),a),e==="fas"&&Tr("fa",t)}var yn,_n,wn,_t=ke.styles,sl=ke.shims,ll=(yn={},re(yn,G,Object.values(Kt[G])),re(yn,te,Object.values(Kt[te])),yn),ri=null,oo={},so={},lo={},fo={},co={},fl=(_n={},re(_n,G,Object.keys(Yt[G])),re(_n,te,Object.keys(Yt[te])),_n);function cl(e){return~Ys.indexOf(e)}function ul(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!cl(i)?i:null}var uo=function(){var t=function(a){return dr(_t,function(o,s,l){return o[l]=dr(s,a,{}),o},{})};oo=t(function(i,a,o){if(a[3]&&(i[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){i[l.toString(16)]=o})}return i}),so=t(function(i,a,o){if(i[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){i[l]=o})}return i}),co=t(function(i,a,o){var s=a[2];return i[o]=o,s.forEach(function(l){i[l]=o}),i});var n="far"in _t||C.autoFetchSvg,r=dr(sl,function(i,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:l}),i},{names:{},unicodes:{}});lo=r.names,fo=r.unicodes,ri=Kn(C.styleDefault,{family:C.familyDefault})};Xs(function(e){ri=Kn(e.styleDefault,{family:C.familyDefault})});uo();function ii(e,t){return(oo[e]||{})[t]}function dl(e,t){return(so[e]||{})[t]}function mt(e,t){return(co[e]||{})[t]}function mo(e){return lo[e]||{prefix:null,iconName:null}}function ml(e){var t=fo[e],n=ii("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return ri}var ai=function(){return{prefix:null,iconName:null,rest:[]}};function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,i=Yt[r][e],a=Wt[r][e]||Wt[r][i],o=e in ke.styles?e:null;return a||o||null}var Gi=(wn={},re(wn,G,Object.keys(Kt[G])),re(wn,te,Object.keys(Kt[te])),wn);function Gn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},re(t,G,"".concat(C.cssPrefix,"-").concat(G)),re(t,te,"".concat(C.cssPrefix,"-").concat(te)),t),o=null,s=G;(e.includes(a[G])||e.some(function(c){return Gi[G].includes(c)}))&&(s=G),(e.includes(a[te])||e.some(function(c){return Gi[te].includes(c)}))&&(s=te);var l=e.reduce(function(c,u){var m=ul(C.cssPrefix,u);if(_t[u]?(u=ll[s].includes(u)?$s[s][u]:u,o=u,c.prefix=u):fl[s].indexOf(u)>-1?(o=u,c.prefix=Kn(u,{family:s})):m?c.iconName=m:u!==C.replacementClass&&u!==a[G]&&u!==a[te]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var v=o==="fa"?mo(c.iconName):{},k=mt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!_t.far&&_t.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},ai());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===te&&(_t.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=mt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var pl=function(){function e(){Os(this,e),this.definitions={}}return Cs(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Tr(s,o[s]);var l=Kt[G][s];l&&Tr(l,o[s]),uo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var o=i[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Xi=[],wt={},xt={},hl=Object.keys(xt);function gl(e,t){var n=t.mixoutsTo;return Xi=e,wt={},Object.keys(xt).forEach(function(r){hl.indexOf(r)===-1&&delete xt[r]}),Xi.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),zn(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(o){wt[o]||(wt[o]=[]),wt[o].push(a[o])})}r.provides&&r.provides(xt)}),n}function Ir(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=wt[e]||[];return a.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=wt[e]||[];i.forEach(function(a){a.apply(null,n)})}function Ve(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xt[e]?xt[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(t)return t=mt(n,t)||t,Wi(po.definitions,n,t)||Wi(ke.styles,n,t)}var po=new pl,vl=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,vt("noAuto")},bl={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(vt("beforeI2svg",t),Ve("pseudoElements2svg",t),Ve("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,il(function(){_l({autoReplaceSvgRoot:n}),vt("watch",t)})}},yl={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Kn(t[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(Ds))){var i=Gn(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||et(),iconName:mt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=et();return{prefix:a,iconName:mt(a,t)||t}}}},be={noAuto:vl,config:C,dom:bl,parse:yl,library:po,findIconDefinition:Rr,toHtml:on},_l=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||C.autoFetchSvg)&&Ye&&C.autoReplaceSvg&&be.dom.i2svg({node:r})};function Xn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return on(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function wl(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ni(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};i.style=Wn(O(O({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function xl(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function oi(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,L=r.found?r:n,P=L.width,D=L.height,y=i==="fak",S=[C.replacementClass,a?"".concat(C.cssPrefix,"-").concat(a):""].filter(function(ye){return m.classes.indexOf(ye)===-1}).filter(function(ye){return ye!==""||!!ye}).concat(m.classes).join(" "),T={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(D)})},$=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/D*16*.0625,"em")}:{};k&&(T.attributes[gt]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(u||Xt())},children:[l]}),delete T.attributes.title);var B=O(O({},T),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},$),m.styles)}),F=r.found&&n.found?Ve("generateAbstractMask",B)||{children:[],attributes:{}}:Ve("generateAbstractIcon",B)||{children:[],attributes:{}},ne=F.children,de=F.attributes;return B.children=ne,B.attributes=de,s?xl(B):wl(B)}function qi(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[gt]="");var u=O({},o.styles);ni(i)&&(u.transform=el({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Wn(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),a&&v.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),v}function Sl(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Wn(r.styles);a.length>0&&(i.style=a);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mr=ke.styles;function Nr(e){var t=e[0],n=e[1],r=e.slice(4),i=qr(r,1),a=i[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}var kl={found:!1,width:512,height:512};function Al(e,t){!Qa&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=et()),new Promise(function(r,i){if(Ve("missingIconAbstract"),n==="fa"){var a=mo(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&mr[t]&&mr[t][e]){var o=mr[t][e];return r(Nr(o))}Al(e,t),r(O(O({},kl),{},{icon:C.showMissingIcons&&e?Ve("missingIconAbstract")||{}:{}}))})}var Ji=function(){},Lr=C.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:Ji,measure:Ji},Ft='FA "6.5.2"',Ol=function(t){return Lr.mark("".concat(Ft," ").concat(t," begins")),function(){return ho(t)}},ho=function(t){Lr.mark("".concat(Ft," ").concat(t," ends")),Lr.measure("".concat(Ft," ").concat(t),"".concat(Ft," ").concat(t," begins"),"".concat(Ft," ").concat(t," ends"))},si={begin:Ol,end:ho},Cn=function(){};function Zi(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function El(e){var t=e.getAttribute?e.getAttribute(Zr):null,n=e.getAttribute?e.getAttribute(Qr):null;return t&&n}function Cl(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function Pl(){if(C.autoReplaceSvg===!0)return Pn.replace;var e=Pn[C.autoReplaceSvg];return e||Pn.replace}function Tl(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Il(e){return X.createElement(e)}function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Tl:Il:n;if(typeof e=="string")return X.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var a=e.children||[];return a.forEach(function(o){i.appendChild(go(o,{ceFn:r}))}),i}function Rl(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(go(i),n)}),n.getAttribute(gt)===null&&C.keepOriginalSource){var r=X.createComment(Rl(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ti(n).indexOf(C.replacementClass))return Pn.replace(t);var i=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(i)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=r.map(function(s){return on(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function Qi(e){e()}function vo(e,t){var n=typeof t=="function"?t:Cn;if(e.length===0)n();else{var r=Qi;C.mutateApproach===js&&(r=Qe.requestAnimationFrame||Qi),r(function(){var i=Pl(),a=si.begin("mutate");e.map(i),a(),n()})}}var li=!1;function bo(){li=!0}function Fr(){li=!1}var Dn=null;function ea(e){if(Bi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Cn:t,r=e.nodeCallback,i=r===void 0?Cn:r,a=e.pseudoElementsCallback,o=a===void 0?Cn:a,s=e.observeMutationsRoot,l=s===void 0?X:s;Dn=new Bi(function(c){if(!li){var u=et();Tt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Zi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Zi(m.target)&&~Vs.indexOf(m.attributeName))if(m.attributeName==="class"&&El(m.target)){var v=Gn(ti(m.target)),k=v.prefix,L=v.iconName;m.target.setAttribute(Zr,k||u),L&&m.target.setAttribute(Qr,L)}else Cl(m.target)&&i(m.target)})}}),Ye&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Nl(){Dn&&Dn.disconnect()}function Ml(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Ll(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Gn(ti(e));return i.prefix||(i.prefix=et()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=dl(i.prefix,e.innerText)||ii(i.prefix,Pr(e.innerText))),!i.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Fl(e){var t=Tt(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Xt()):(t["aria-hidden"]="true",t.focusable="false")),t}function jl(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ll(e),r=n.iconName,i=n.prefix,a=n.rest,o=Fl(e),s=Ir("parseNodeAttributes",{},e),l=t.styleParser?Ml(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var zl=ke.styles;function yo(e){var t=C.autoReplaceSvg==="nest"?ta(e,{styleParser:!1}):ta(e);return~t.extra.classes.indexOf(eo)?Ve("generateLayersText",e,t):Ve("generateSvgReplacementMutation",e,t)}var tt=new Set;ei.map(function(e){tt.add("fa-".concat(e))});Object.keys(Yt[G]).map(tt.add.bind(tt));Object.keys(Yt[te]).map(tt.add.bind(tt));tt=rn(tt);function na(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Vi,"-").concat(m))},i=function(m){return n.remove("".concat(Vi,"-").concat(m))},a=C.autoFetchSvg?tt:ei.map(function(u){return"fa-".concat(u)}).concat(Object.keys(zl));a.includes("fa")||a.push("fa");var o=[".".concat(eo,":not([").concat(gt,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Tt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),i("complete");else return Promise.resolve();var l=si.begin("onTree"),c=s.reduce(function(u,m){try{var v=yo(m);v&&u.push(v)}catch(k){Qa||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){vo(v,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(v){l(),m(v)})})}function $l(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yo(e).then(function(n){n&&vo([n],t)})}function Dl(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Rr(i||{})),e(r,O(O({},n),{},{mask:i}))}}var Hl=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Ne:r,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,L=k===void 0?null:k,P=n.classes,D=P===void 0?[]:P,y=n.attributes,S=y===void 0?{}:y,T=n.styles,$=T===void 0?{}:T;if(t){var B=t.prefix,F=t.iconName,ne=t.icon;return Xn(O({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?S["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(L||Xt()):(S["aria-hidden"]="true",S.focusable="false")),oi({icons:{main:Nr(ne),mask:l?Nr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:F,transform:O(O({},Ne),i),symbol:o,title:v,maskId:u,titleId:L,extra:{attributes:S,styles:$,classes:D}})})}},Ul={mixout:function(){return{icon:Dl(Hl)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=na,n.nodeCallback=$l,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?X:r,a=n.callback,o=a===void 0?function(){}:a;return na(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,L){Promise.all([Mr(i,s),u.iconName?Mr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var D=qr(P,2),y=D[0],S=D[1];k([n,oi({icons:{main:y,mask:S},prefix:s,iconName:i,transform:l,symbol:c,maskId:m,title:a,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Wn(s);l.length>0&&(i.style=l);var c;return ni(o)&&(c=Ve("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),r.push(c||a.icon),{children:r,attributes:i}}}},Bl={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Xn({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(rn(a)).join(" ")},children:o}]})}}}},Vl={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return Xn({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Sl({content:n.toString(),title:a,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(rn(s))}})})}}}},Yl={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?Ne:i,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,k=v===void 0?{}:v;return Xn({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),qi({content:n,transform:O(O({},Ne),a),title:s,extra:{attributes:m,styles:k,classes:["".concat(C.cssPrefix,"-layers-text")].concat(rn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,o=r.extra,s=null,l=null;if(qa){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return C.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,qi({content:n.innerHTML,width:s,height:l,transform:a,title:i,extra:o,watchable:!0})])}}},Wl=new RegExp('"',"ug"),ra=[1105920,1112319];function Kl(e){var t=e.replace(Wl,""),n=ol(t,0),r=n>=ra[0]&&n<=ra[1],i=t.length===2?t[0]===t[1]:!1;return{value:Pr(i?t[0]:t),isSecondary:r||i}}function ia(e,t){var n="".concat(Fs).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Tt(e.children),o=a.filter(function(ne){return ne.getAttribute(Cr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Hs),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?te:G,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Wt[v][l[2].toLowerCase()]:Us[v][c],L=Kl(m),P=L.value,D=L.isSecondary,y=l[0].startsWith("FontAwesome"),S=ii(k,P),T=S;if(y){var $=ml(P);$.iconName&&$.prefix&&(S=$.iconName,k=$.prefix)}if(S&&!D&&(!o||o.getAttribute(Zr)!==k||o.getAttribute(Qr)!==T)){e.setAttribute(n,T),o&&e.removeChild(o);var B=jl(),F=B.extra;F.attributes[Cr]=t,Mr(S,k).then(function(ne){var de=oi(O(O({},B),{},{icons:{main:ne,mask:ai()},prefix:k,iconName:T,extra:F,watchable:!0})),ye=X.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ye,e.firstChild):e.appendChild(ye),ye.outerHTML=de.map(function(Fe){return on(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Gl(e){return Promise.all([ia(e,"::before"),ia(e,"::after")])}function Xl(e){return e.parentNode!==document.head&&!~zs.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function aa(e){if(Ye)return new Promise(function(t,n){var r=Tt(e.querySelectorAll("*")).filter(Xl).map(Gl),i=si.begin("searchPseudoElements");bo(),Promise.all(r).then(function(){i(),Fr(),t()}).catch(function(){i(),Fr(),n()})})}var ql={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=aa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?X:r;C.searchPseudoElements&&aa(i)}}},oa=!1,Jl={mixout:function(){return{dom:{unwatch:function(){bo(),oa=!0}}}},hooks:function(){return{bootstrap:function(){ea(Ir("mutationObserverCallbacks",{}))},noAuto:function(){Nl()},watch:function(n){var r=n.observeMutationsRoot;oa?Fr():ea(Ir("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},sa=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Zl={mixout:function(){return{parse:{transform:function(n){return sa(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=sa(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function la(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ql(e){return e.tag==="g"?e.children:[e]}var ef={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?Gn(i.split(" ").map(function(o){return o.trim()})):ai();return a.prefix||(a.prefix=et()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,m=o.width,v=o.icon,k=Qs({transform:l,containerWidth:m,iconWidth:c}),L={tag:"rect",attributes:O(O({},pr),{},{fill:"white"})},P=u.children?{children:u.children.map(la)}:{},D={tag:"g",attributes:O({},k.inner),children:[la(O({tag:u.tag,attributes:O(O({},u.attributes),k.path)},P))]},y={tag:"g",attributes:O({},k.outer),children:[D]},S="mask-".concat(s||Xt()),T="clip-".concat(s||Xt()),$={tag:"mask",attributes:O(O({},pr),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Ql(v)},$]};return r.push(B,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(S,")")},pr)}),{children:r,attributes:i}}}},tf={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},nf={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},rf=[nl,Ul,Bl,Vl,Yl,ql,Jl,Zl,ef,tf,nf];gl(rf,{mixoutsTo:be});be.noAuto;be.config;var af=be.library;be.dom;var jr=be.parse;be.findIconDefinition;be.toHtml;var of=be.icon;be.layer;be.text;be.counter;var sf={prefix:"fas",iconName:"scissors",icon:[512,512,[9984,9986,9988,"cut"],"f0c4","M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},lf={prefix:"fas",iconName:"film",icon:[512,512,[127902],"f008","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z"]},ff={prefix:"fas",iconName:"cloud-arrow-up",icon:[640,512,[62338,"cloud-upload","cloud-upload-alt"],"f0ee","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"]},cf={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},uf=cf,df={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},mf=df,pf={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},hf={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},gf=hf,vf={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fi(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const q={},St=[],we=()=>{},bf=()=>!1,qn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ci=e=>e.startsWith("onUpdate:"),se=Object.assign,ui=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yf=Object.prototype.hasOwnProperty,U=(e,t)=>yf.call(e,t),N=Array.isArray,kt=e=>Jn(e)==="[object Map]",_o=e=>Jn(e)==="[object Set]",j=e=>typeof e=="function",ie=e=>typeof e=="string",rt=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",wo=e=>(Z(e)||j(e))&&j(e.then)&&j(e.catch),xo=Object.prototype.toString,Jn=e=>xo.call(e),_f=e=>Jn(e).slice(8,-1),So=e=>Jn(e)==="[object Object]",di=e=>ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Dt=fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},wf=/-(\w)/g,Le=Zn(e=>e.replace(wf,(t,n)=>n?n.toUpperCase():"")),xf=/\B([A-Z])/g,It=Zn(e=>e.replace(xf,"-$1").toLowerCase()),Qn=Zn(e=>e.charAt(0).toUpperCase()+e.slice(1)),hr=Zn(e=>e?`on${Qn(e)}`:""),nt=(e,t)=>!Object.is(e,t),gr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ko=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Sf=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let fa;const Ao=()=>fa||(fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qt(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ie(r)?Ef(r):qt(r);if(i)for(const a in i)t[a]=i[a]}return t}else if(ie(e)||Z(e))return e}const kf=/;(?![^(]*\))/g,Af=/:([^]+)/,Of=/\/\*[^]*?\*\//g;function Ef(e){const t={};return e.replace(Of,"").split(kf).forEach(n=>{if(n){const r=n.split(Af);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Et(e){let t="";if(ie(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=Et(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Cf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pf=fi(Cf);function Oo(e){return!!e||e===""}const Eo=e=>!!(e&&e.__v_isRef===!0),mi=e=>ie(e)?e:e==null?"":N(e)||Z(e)&&(e.toString===xo||!j(e.toString))?Eo(e)?mi(e.value):JSON.stringify(e,Co,2):String(e),Co=(e,t)=>Eo(t)?Co(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],a)=>(n[vr(r,a)+" =>"]=i,n),{})}:_o(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>vr(n))}:rt(t)?vr(t):Z(t)&&!N(t)&&!So(t)?String(t):t,vr=(e,t="")=>{var n;return rt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Tf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function If(e,t=Se){t&&t.active&&t.effects.push(e)}function Rf(){return Se}let pt;class pi{constructor(t,n,r,i){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,If(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,it();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Nf(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),at()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Je,n=pt;try{return Je=!0,pt=this,this._runnings++,ca(this),this.fn()}finally{ua(this),this._runnings--,pt=n,Je=t}}stop(){this.active&&(ca(this),ua(this),this.onStop&&this.onStop(),this.active=!1)}}function Nf(e){return e.value}function ca(e){e._trackId++,e._depsLength=0}function ua(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Po(e.deps[t],e);e.deps.length=e._depsLength}}function Po(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Je=!0,zr=0;const To=[];function it(){To.push(Je),Je=!1}function at(){const e=To.pop();Je=e===void 0?!0:e}function hi(){zr++}function gi(){for(zr--;!zr&&$r.length;)$r.shift()()}function Io(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Po(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const $r=[];function Ro(e,t,n){hi();for(const r of e.keys()){let i;r._dirtyLevel<t&&(i??(i=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(i??(i=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&$r.push(r.scheduler)))}gi()}const No=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Dr=new WeakMap,ht=Symbol(""),Hr=Symbol("");function he(e,t,n){if(Je&&pt){let r=Dr.get(e);r||Dr.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=No(()=>r.delete(n))),Io(pt,i)}}function De(e,t,n,r,i,a){const o=Dr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&N(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!rt(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":N(e)?di(n)&&s.push(o.get("length")):(s.push(o.get(ht)),kt(e)&&s.push(o.get(Hr)));break;case"delete":N(e)||(s.push(o.get(ht)),kt(e)&&s.push(o.get(Hr)));break;case"set":kt(e)&&s.push(o.get(ht));break}hi();for(const l of s)l&&Ro(l,4);gi()}const Mf=fi("__proto__,__v_isRef,__isVue"),Mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rt)),da=Lf();function Lf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let a=0,o=this.length;a<o;a++)he(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Y)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){it(),hi();const r=Y(this)[t].apply(this,n);return gi(),at(),r}}),e}function Ff(e){rt(e)||(e=String(e));const t=Y(this);return he(t,"has",e),t.hasOwnProperty(e)}class Lo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const i=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return a;if(n==="__v_raw")return r===(i?a?Xf:$o:a?zo:jo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=N(t);if(!i){if(o&&U(da,n))return Reflect.get(da,n,r);if(n==="hasOwnProperty")return Ff}const s=Reflect.get(t,n,r);return(rt(n)?Mo.has(n):Mf(n))||(i||he(t,"get",n),a)?s:ge(s)?o&&di(n)?s:s.value:Z(s)?i?Do(s):tr(s):s}}class Fo extends Lo{constructor(t=!1){super(!1,t)}set(t,n,r,i){let a=t[n];if(!this._isShallow){const l=Jt(a);if(!Hn(r)&&!Jt(r)&&(a=Y(a),r=Y(r)),!N(t)&&ge(a)&&!ge(r))return l?!1:(a.value=r,!0)}const o=N(t)&&di(n)?Number(n)<t.length:U(t,n),s=Reflect.set(t,n,r,i);return t===Y(i)&&(o?nt(r,a)&&De(t,"set",n,r):De(t,"add",n,r)),s}deleteProperty(t,n){const r=U(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&De(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!rt(n)||!Mo.has(n))&&he(t,"has",n),r}ownKeys(t){return he(t,"iterate",N(t)?"length":ht),Reflect.ownKeys(t)}}class jf extends Lo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zf=new Fo,$f=new jf,Df=new Fo(!0);const vi=e=>e,er=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const i=Y(e),a=Y(t);n||(nt(t,a)&&he(i,"get",t),he(i,"get",a));const{has:o}=er(i),s=r?vi:n?_i:Zt;if(o.call(i,t))return s(e.get(t));if(o.call(i,a))return s(e.get(a));e!==i&&e.get(t)}function Sn(e,t=!1){const n=this.__v_raw,r=Y(n),i=Y(e);return t||(nt(e,i)&&he(r,"has",e),he(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function kn(e,t=!1){return e=e.__v_raw,!t&&he(Y(e),"iterate",ht),Reflect.get(e,"size",e)}function ma(e){e=Y(e);const t=Y(this);return er(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function pa(e,t){t=Y(t);const n=Y(this),{has:r,get:i}=er(n);let a=r.call(n,e);a||(e=Y(e),a=r.call(n,e));const o=i.call(n,e);return n.set(e,t),a?nt(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function ha(e){const t=Y(this),{has:n,get:r}=er(t);let i=n.call(t,e);i||(e=Y(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&De(t,"delete",e,void 0),a}function ga(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function An(e,t){return function(r,i){const a=this,o=a.__v_raw,s=Y(o),l=t?vi:e?_i:Zt;return!e&&he(s,"iterate",ht),o.forEach((c,u)=>r.call(i,l(c),l(u),a))}}function On(e,t,n){return function(...r){const i=this.__v_raw,a=Y(i),o=kt(a),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=i[e](...r),u=n?vi:t?_i:Zt;return!t&&he(a,"iterate",l?Hr:ht),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function Ge(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Hf(){const e={get(a){return xn(this,a)},get size(){return kn(this)},has:Sn,add:ma,set:pa,delete:ha,clear:ga,forEach:An(!1,!1)},t={get(a){return xn(this,a,!1,!0)},get size(){return kn(this)},has:Sn,add:ma,set:pa,delete:ha,clear:ga,forEach:An(!1,!0)},n={get(a){return xn(this,a,!0)},get size(){return kn(this,!0)},has(a){return Sn.call(this,a,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:An(!0,!1)},r={get(a){return xn(this,a,!0,!0)},get size(){return kn(this,!0)},has(a){return Sn.call(this,a,!0)},add:Ge("add"),set:Ge("set"),delete:Ge("delete"),clear:Ge("clear"),forEach:An(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=On(a,!1,!1),n[a]=On(a,!0,!1),t[a]=On(a,!1,!0),r[a]=On(a,!0,!0)}),[e,n,t,r]}const[Uf,Bf,Vf,Yf]=Hf();function bi(e,t){const n=t?e?Yf:Vf:e?Bf:Uf;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(U(n,i)&&i in r?n:r,i,a)}const Wf={get:bi(!1,!1)},Kf={get:bi(!1,!0)},Gf={get:bi(!0,!1)};const jo=new WeakMap,zo=new WeakMap,$o=new WeakMap,Xf=new WeakMap;function qf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jf(e){return e.__v_skip||!Object.isExtensible(e)?0:qf(_f(e))}function tr(e){return Jt(e)?e:yi(e,!1,zf,Wf,jo)}function Zf(e){return yi(e,!1,Df,Kf,zo)}function Do(e){return yi(e,!0,$f,Gf,$o)}function yi(e,t,n,r,i){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=Jf(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Ht(e){return Jt(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function Hn(e){return!!(e&&e.__v_isShallow)}function Ho(e){return e?!!e.__v_raw:!1}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function Qf(e){return Object.isExtensible(e)&&ko(e,"__v_skip",!0),e}const Zt=e=>Z(e)?tr(e):e,_i=e=>Z(e)?Do(e):e;class Uo{constructor(t,n,r,i){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new pi(()=>t(this._value),()=>Tn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Y(this);return(!t._cacheable||t.effect.dirty)&&nt(t._value,t._value=t.effect.run())&&Tn(t,4),Bo(t),t.effect._dirtyLevel>=2&&Tn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ec(e,t,n=!1){let r,i;const a=j(e);return a?(r=e,i=we):(r=e.get,i=e.set),new Uo(r,i,a||!i,n)}function Bo(e){var t;Je&&pt&&(e=Y(e),Io(pt,(t=e.dep)!=null?t:e.dep=No(()=>e.dep=void 0,e instanceof Uo?e:void 0)))}function Tn(e,t=4,n,r){e=Y(e);const i=e.dep;i&&Ro(i,t)}function ge(e){return!!(e&&e.__v_isRef===!0)}function In(e){return tc(e,!1)}function tc(e,t){return ge(e)?e:new nc(e,t)}class nc{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Y(t),this._value=n?t:Zt(t)}get value(){return Bo(this),this._value}set value(t){const n=this.__v_isShallow||Hn(t)||Jt(t);t=n?t:Y(t),nt(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Zt(t),Tn(this,4))}}function Rn(e){return ge(e)?e.value:e}const rc={get:(e,t,n)=>Rn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ge(i)&&!ge(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Vo(e){return Ht(e)?e:new Proxy(e,rc)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ze(e,t,n,r){try{return r?e(...r):e()}catch(i){nr(i,t,n)}}function Ee(e,t,n,r){if(j(e)){const i=Ze(e,t,n,r);return i&&wo(i)&&i.catch(a=>{nr(a,t,n)}),i}if(N(e)){const i=[];for(let a=0;a<e.length;a++)i.push(Ee(e[a],t,n,r));return i}}function nr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}a=a.parent}const l=t.appContext.config.errorHandler;if(l){it(),Ze(l,null,10,[e,o,s]),at();return}}ic(e,n,i,r)}function ic(e,t,n,r=!0){console.error(e)}let Qt=!1,Ur=!1;const le=[];let Re=0;const At=[];let Xe=null,ct=0;const Yo=Promise.resolve();let wi=null;function ac(e){const t=wi||Yo;return e?t.then(this?e.bind(this):e):t}function oc(e){let t=Re+1,n=le.length;for(;t<n;){const r=t+n>>>1,i=le[r],a=en(i);a<e||a===e&&i.pre?t=r+1:n=r}return t}function xi(e){(!le.length||!le.includes(e,Qt&&e.allowRecurse?Re+1:Re))&&(e.id==null?le.push(e):le.splice(oc(e.id),0,e),Wo())}function Wo(){!Qt&&!Ur&&(Ur=!0,wi=Yo.then(Go))}function sc(e){const t=le.indexOf(e);t>Re&&le.splice(t,1)}function lc(e){N(e)?At.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?ct+1:ct))&&At.push(e),Wo()}function va(e,t,n=Qt?Re+1:0){for(;n<le.length;n++){const r=le[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;le.splice(n,1),n--,r()}}}function Ko(e){if(At.length){const t=[...new Set(At)].sort((n,r)=>en(n)-en(r));if(At.length=0,Xe){Xe.push(...t);return}for(Xe=t,ct=0;ct<Xe.length;ct++){const n=Xe[ct];n.active!==!1&&n()}Xe=null,ct=0}}const en=e=>e.id==null?1/0:e.id,fc=(e,t)=>{const n=en(e)-en(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Go(e){Ur=!1,Qt=!0,le.sort(fc);try{for(Re=0;Re<le.length;Re++){const t=le[Re];t&&t.active!==!1&&Ze(t,null,14)}}finally{Re=0,le.length=0,Ko(),Qt=!1,wi=null,(le.length||At.length)&&Go()}}function cc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let i=n;const a=t.startsWith("update:"),o=a&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||q;v&&(i=n.map(k=>ie(k)?k.trim():k)),m&&(i=n.map(Sf))}let s,l=r[s=hr(t)]||r[s=hr(Le(t))];!l&&a&&(l=r[s=hr(It(t))]),l&&Ee(l,e,6,i);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,i)}}function Xo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const u=Xo(c,t,!0);u&&(s=!0,se(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!a&&!s?(Z(e)&&r.set(e,null),null):(N(a)?a.forEach(l=>o[l]=null):se(o,a),Z(e)&&r.set(e,o),o)}function rr(e,t){return!e||!qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,It(t))||U(e,t))}let Ae=null,ir=null;function Un(e){const t=Ae;return Ae=e,ir=e&&e.type.__scopeId||null,t}function qo(e){ir=e}function Jo(){ir=null}function uc(e,t=Ae,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Pa(-1);const a=Un(t);let o;try{o=e(...i)}finally{Un(a),r._d&&Pa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:l,render:c,renderCache:u,props:m,data:v,setupState:k,ctx:L,inheritAttrs:P}=e,D=Un(e);let y,S;try{if(n.shapeFlag&4){const $=i||r,B=$;y=Ie(c.call(B,$,u,m,k,v,L)),S=s}else{const $=t;y=Ie($.length>1?$(m,{attrs:s,slots:o,emit:l}):$(m,null)),S=t.props?s:dc(s)}}catch($){Vt.length=0,nr($,e,1),y=J(bt)}let T=y;if(S&&P!==!1){const $=Object.keys(S),{shapeFlag:B}=T;$.length&&B&7&&(a&&$.some(ci)&&(S=mc(S,a)),T=Ct(T,S,!1,!0))}return n.dirs&&(T=Ct(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),y=T,Un(D),y}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||qn(n))&&((t||(t={}))[n]=e[n]);return t},mc=(e,t)=>{const n={};for(const r in e)(!ci(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pc(e,t,n){const{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:l}=t,c=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ba(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!rr(c,v))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ba(r,o,c):!0:!!o;return!1}function ba(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!rr(n,a))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const gc="components";function Si(e,t){return bc(gc,e,!0,t)||e}const vc=Symbol.for("v-ndc");function bc(e,t,n=!0,r=!1){const i=Ae||fe;if(i){const a=i.type;{const s=hu(a,!1);if(s&&(s===t||s===Le(t)||s===Qn(Le(t))))return a}const o=ya(i[e]||a[e],t)||ya(i.appContext[e],t);return!o&&r?a:o}}function ya(e,t){return e&&(e[t]||e[Le(t)]||e[Qn(Le(t))])}const yc=e=>e.__isSuspense;function _c(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):lc(e)}function ar(e,t,n=fe,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...o)=>{it();const s=sn(n),l=Ee(t,n,e,o);return s(),at(),l});return r?i.unshift(a):i.push(a),a}}const We=e=>(t,n=fe)=>{(!sr||e==="sp")&&ar(e,(...r)=>t(...r),n)},wc=We("bm"),ki=We("m"),xc=We("bu"),Sc=We("u"),kc=We("bum"),Zo=We("um"),Ac=We("sp"),Oc=We("rtg"),Ec=We("rtc");function Cc(e,t=fe){ar("ec",e,t)}function lt(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];a&&(s.oldValue=a[o].value);let l=s.dir[r];l&&(it(),Ee(l,n,8,[e.el,s,e,t]),at())}}function Pc(e,t,n,r){let i;const a=n;if(N(e)||ie(e)){i=new Array(e.length);for(let o=0,s=e.length;o<s;o++)i[o]=t(e[o],o,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,a)}else if(Z(e))if(e[Symbol.iterator])i=Array.from(e,(o,s)=>t(o,s,void 0,a));else{const o=Object.keys(e);i=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];i[s]=t(e[c],c,s,a)}}else i=[];return i}/*! #__NO_SIDE_EFFECTS__ */function Tc(e,t){return j(e)?se({name:e.name},t,{setup:e}):e}const Nn=e=>!!e.type.__asyncLoader,Br=e=>e?bs(e)?Ci(e):Br(e.parent):null,Ut=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$emit:e=>e.emit,$options:e=>Ai(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,xi(e.update)}),$nextTick:e=>e.n||(e.n=ac.bind(e.proxy)),$watch:e=>Jc.bind(e)}),yr=(e,t)=>e!==q&&!e.__isScriptSetup&&U(e,t),Ic={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(yr(r,t))return o[t]=1,r[t];if(i!==q&&U(i,t))return o[t]=2,i[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,a[t];if(n!==q&&U(n,t))return o[t]=4,n[t];Vr&&(o[t]=0)}}const u=Ut[t];let m,v;if(u)return t==="$attrs"&&he(e.attrs,"get",""),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&U(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,U(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return yr(i,t)?(i[t]=n,!0):r!==q&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},o){let s;return!!n[o]||e!==q&&U(e,o)||yr(t,o)||(s=a[0])&&U(s,o)||U(r,o)||U(Ut,o)||U(i.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function _a(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Vr=!0;function Rc(e){const t=Ai(e),n=e.proxy,r=e.ctx;Vr=!1,t.beforeCreate&&wa(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:k,updated:L,activated:P,deactivated:D,beforeDestroy:y,beforeUnmount:S,destroyed:T,unmounted:$,render:B,renderTracked:F,renderTriggered:ne,errorCaptured:de,serverPrefetch:ye,expose:Fe,inheritAttrs:Rt,components:fn,directives:cn,filters:fr}=t;if(c&&Nc(c,r,null),o)for(const Q in o){const W=o[Q];j(W)&&(r[Q]=W.bind(n))}if(i){const Q=i.call(n,n);Z(Q)&&(e.data=tr(Q))}if(Vr=!0,a)for(const Q in a){const W=a[Q],ot=j(W)?W.bind(n,n):j(W.get)?W.get.bind(n,n):we,un=!j(W)&&j(W.set)?W.set.bind(n):we,st=oe({get:ot,set:un});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ce=>st.value=Ce})}if(s)for(const Q in s)Qo(s[Q],r,n,Q);if(l){const Q=j(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(W=>{$c(W,Q[W])})}u&&wa(u,e,"c");function ce(Q,W){N(W)?W.forEach(ot=>Q(ot.bind(n))):W&&Q(W.bind(n))}if(ce(wc,m),ce(ki,v),ce(xc,k),ce(Sc,L),ce(Zc,P),ce(Qc,D),ce(Cc,de),ce(Ec,F),ce(Oc,ne),ce(kc,S),ce(Zo,$),ce(Ac,ye),N(Fe))if(Fe.length){const Q=e.exposed||(e.exposed={});Fe.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:ot=>n[W]=ot})})}else e.exposed||(e.exposed={});B&&e.render===we&&(e.render=B),Rt!=null&&(e.inheritAttrs=Rt),fn&&(e.components=fn),cn&&(e.directives=cn)}function Nc(e,t,n=we){N(e)&&(e=Yr(e));for(const r in e){const i=e[r];let a;Z(i)?"default"in i?a=Mn(i.from||r,i.default,!0):a=Mn(i.from||r):a=Mn(i),ge(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[r]=a}}function wa(e,t,n){Ee(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qo(e,t,n,r){const i=r.includes(".")?ds(n,r):()=>n[r];if(ie(e)){const a=t[e];j(a)&&Ln(i,a)}else if(j(e))Ln(i,e.bind(n));else if(Z(e))if(N(e))e.forEach(a=>Qo(a,t,n,r));else{const a=j(e.handler)?e.handler.bind(n):t[e.handler];j(a)&&Ln(i,a,e)}}function Ai(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Bn(l,c,o,!0)),Bn(l,t,o)),Z(t)&&a.set(t,l),l}function Bn(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Bn(e,a,n,!0),i&&i.forEach(o=>Bn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Mc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Mc={data:xa,props:Sa,emits:Sa,methods:jt,computed:jt,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:jt,directives:jt,watch:Fc,provide:xa,inject:Lc};function xa(e,t){return t?e?function(){return se(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Lc(e,t){return jt(Yr(e),Yr(t))}function Yr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ue(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?se(Object.create(null),e,t):t}function Sa(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:se(Object.create(null),_a(e),_a(t??{})):t}function Fc(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=ue(e[r],t[r]);return n}function es(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jc=0;function zc(e,t){return function(r,i=null){j(r)||(r=se({},r)),i!=null&&!Z(i)&&(i=null);const a=es(),o=new WeakSet;let s=!1;const l=a.app={_uid:jc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:bu,get config(){return a.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...u)):j(c)&&(o.add(c),c(l,...u))),l},mixin(c){return a.mixins.includes(c)||a.mixins.push(c),l},component(c,u){return u?(a.components[c]=u,l):a.components[c]},directive(c,u){return u?(a.directives[c]=u,l):a.directives[c]},mount(c,u,m){if(!s){const v=J(r,i);return v.appContext=a,m===!0?m="svg":m===!1&&(m=void 0),u&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,Ci(v.component)}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return a.provides[c]=u,l},runWithContext(c){const u=Bt;Bt=l;try{return c()}finally{Bt=u}}};return l}}let Bt=null;function $c(e,t){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[e]=t}}function Mn(e,t,n=!1){const r=fe||Ae;if(r||Bt){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Bt._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&j(t)?t.call(r&&r.proxy):t}}const ts={},ns=()=>Object.create(ts),rs=e=>Object.getPrototypeOf(e)===ts;function Dc(e,t,n,r=!1){const i={},a=ns();e.propsDefaults=Object.create(null),is(e,t,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:Zf(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Hc(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=Y(i),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(rr(e.emitsOptions,v))continue;const k=t[v];if(l)if(U(a,v))k!==a[v]&&(a[v]=k,c=!0);else{const L=Le(v);i[L]=Wr(l,s,L,k,e,!1)}else k!==a[v]&&(a[v]=k,c=!0)}}}else{is(e,t,i,a)&&(c=!0);let u;for(const m in s)(!t||!U(t,m)&&((u=It(m))===m||!U(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(i[m]=Wr(l,s,m,void 0,e,!0)):delete i[m]);if(a!==s)for(const m in a)(!t||!U(t,m))&&(delete a[m],c=!0)}c&&De(e.attrs,"set","")}function is(e,t,n,r){const[i,a]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Dt(l))continue;const c=t[l];let u;i&&U(i,u=Le(l))?!a||!a.includes(u)?n[u]=c:(s||(s={}))[u]=c:rr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(a){const l=Y(n),c=s||q;for(let u=0;u<a.length;u++){const m=a[u];n[m]=Wr(i,l,m,c[m],e,!U(c,m))}}return o}function Wr(e,t,n,r,i,a){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=sn(i);r=c[n]=l.call(null,t),u()}}else r=l}o[0]&&(a&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function as(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,o={},s=[];let l=!1;if(!j(e)){const u=m=>{l=!0;const[v,k]=as(m,t,!0);se(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!l)return Z(e)&&r.set(e,St),St;if(N(a))for(let u=0;u<a.length;u++){const m=Le(a[u]);ka(m)&&(o[m]=q)}else if(a)for(const u in a){const m=Le(u);if(ka(m)){const v=a[u],k=o[m]=N(v)||j(v)?{type:v}:se({},v);if(k){const L=Ea(Boolean,k.type),P=Ea(String,k.type);k[0]=L>-1,k[1]=P<0||L<P,(L>-1||U(k,"default"))&&s.push(m)}}}const c=[o,s];return Z(e)&&r.set(e,c),c}function ka(e){return e[0]!=="$"&&!Dt(e)}function Aa(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Oa(e,t){return Aa(e)===Aa(t)}function Ea(e,t){return N(t)?t.findIndex(n=>Oa(n,e)):j(t)&&Oa(t,e)?0:-1}const os=e=>e[0]==="_"||e==="$stable",Oi=e=>N(e)?e.map(Ie):[Ie(e)],Uc=(e,t,n)=>{if(t._n)return t;const r=uc((...i)=>Oi(t(...i)),n);return r._c=!1,r},ss=(e,t,n)=>{const r=e._ctx;for(const i in e){if(os(i))continue;const a=e[i];if(j(a))t[i]=Uc(i,a,r);else if(a!=null){const o=Oi(a);t[i]=()=>o}}},ls=(e,t)=>{const n=Oi(t);e.slots.default=()=>n},Bc=(e,t)=>{const n=e.slots=ns();if(e.vnode.shapeFlag&32){const r=t._;r?(se(n,t),ko(n,"_",r,!0)):ss(t,n)}else t&&ls(e,t)},Vc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?a=!1:(se(i,t),!n&&s===1&&delete i._):(a=!t.$stable,ss(t,i)),o=t}else t&&(ls(e,t),o={default:1});if(a)for(const s in i)!os(s)&&o[s]==null&&delete i[s]};function Kr(e,t,n,r,i=!1){if(N(e)){e.forEach((v,k)=>Kr(v,t&&(N(t)?t[k]:t),n,r,i));return}if(Nn(r)&&!i)return;const a=r.shapeFlag&4?Ci(r.component):r.el,o=i?null:a,{i:s,r:l}=e,c=t&&t.r,u=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ie(c)?(u[c]=null,U(m,c)&&(m[c]=null)):ge(c)&&(c.value=null)),j(l))Ze(l,s,12,[o,u]);else{const v=ie(l),k=ge(l);if(v||k){const L=()=>{if(e.f){const P=v?U(m,l)?m[l]:u[l]:l.value;i?N(P)&&ui(P,a):N(P)?P.includes(a)||P.push(a):v?(u[l]=[a],U(m,l)&&(m[l]=u[l])):(l.value=[a],e.k&&(u[e.k]=l.value))}else v?(u[l]=o,U(m,l)&&(m[l]=o)):k&&(l.value=o,e.k&&(u[e.k]=o))};o?(L.id=-1,pe(L,n)):L()}}}const pe=_c;function Yc(e){return Wc(e)}function Wc(e,t){const n=Ao();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:k=we,insertStaticContent:L}=e,P=(f,d,p,h=null,g=null,w=null,A=void 0,_=null,x=!!d.dynamicChildren)=>{if(f===d)return;f&&!Lt(f,d)&&(h=dn(f),Ce(f,g,w,!0),f=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:b,ref:E,shapeFlag:R}=d;switch(b){case or:D(f,d,p,h);break;case bt:y(f,d,p,h);break;case wr:f==null&&S(d,p,h,A);break;case _e:fn(f,d,p,h,g,w,A,_,x);break;default:R&1?B(f,d,p,h,g,w,A,_,x):R&6?cn(f,d,p,h,g,w,A,_,x):(R&64||R&128)&&b.process(f,d,p,h,g,w,A,_,x,Nt)}E!=null&&g&&Kr(E,f&&f.ref,w,d||f,!d)},D=(f,d,p,h)=>{if(f==null)r(d.el=s(d.children),p,h);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},y=(f,d,p,h)=>{f==null?r(d.el=l(d.children||""),p,h):d.el=f.el},S=(f,d,p,h)=>{[f.el,f.anchor]=L(f.children,d,p,h,f.el,f.anchor)},T=({el:f,anchor:d},p,h)=>{let g;for(;f&&f!==d;)g=v(f),r(f,p,h),f=g;r(d,p,h)},$=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),i(f),f=p;i(d)},B=(f,d,p,h,g,w,A,_,x)=>{d.type==="svg"?A="svg":d.type==="math"&&(A="mathml"),f==null?F(d,p,h,g,w,A,_,x):ye(f,d,g,w,A,_,x)},F=(f,d,p,h,g,w,A,_)=>{let x,b;const{props:E,shapeFlag:R,transition:I,dirs:M}=f;if(x=f.el=o(f.type,w,E&&E.is,E),R&8?u(x,f.children):R&16&&de(f.children,x,null,h,g,_r(f,w),A,_),M&&lt(f,null,h,"created"),ne(x,f,f.scopeId,A,h),E){for(const K in E)K!=="value"&&!Dt(K)&&a(x,K,null,E[K],w,f.children,h,g,je);"value"in E&&a(x,"value",null,E.value,w),(b=E.onVnodeBeforeMount)&&Te(b,h,f)}M&&lt(f,null,h,"beforeMount");const H=Kc(g,I);H&&I.beforeEnter(x),r(x,d,p),((b=E&&E.onVnodeMounted)||H||M)&&pe(()=>{b&&Te(b,h,f),H&&I.enter(x),M&&lt(f,null,h,"mounted")},g)},ne=(f,d,p,h,g)=>{if(p&&k(f,p),h)for(let w=0;w<h.length;w++)k(f,h[w]);if(g){let w=g.subTree;if(d===w){const A=g.vnode;ne(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},de=(f,d,p,h,g,w,A,_,x=0)=>{for(let b=x;b<f.length;b++){const E=f[b]=_?qe(f[b]):Ie(f[b]);P(null,E,d,p,h,g,w,A,_)}},ye=(f,d,p,h,g,w,A)=>{const _=d.el=f.el;let{patchFlag:x,dynamicChildren:b,dirs:E}=d;x|=f.patchFlag&16;const R=f.props||q,I=d.props||q;let M;if(p&&ft(p,!1),(M=I.onVnodeBeforeUpdate)&&Te(M,p,d,f),E&&lt(d,f,p,"beforeUpdate"),p&&ft(p,!0),b?Fe(f.dynamicChildren,b,_,p,h,_r(d,g),w):A||W(f,d,_,null,p,h,_r(d,g),w,!1),x>0){if(x&16)Rt(_,d,R,I,p,h,g);else if(x&2&&R.class!==I.class&&a(_,"class",null,I.class,g),x&4&&a(_,"style",R.style,I.style,g),x&8){const H=d.dynamicProps;for(let K=0;K<H.length;K++){const V=H[K],ae=R[V],xe=I[V];(xe!==ae||V==="value")&&a(_,V,ae,xe,g,f.children,p,h,je)}}x&1&&f.children!==d.children&&u(_,d.children)}else!A&&b==null&&Rt(_,d,R,I,p,h,g);((M=I.onVnodeUpdated)||E)&&pe(()=>{M&&Te(M,p,d,f),E&&lt(d,f,p,"updated")},h)},Fe=(f,d,p,h,g,w,A)=>{for(let _=0;_<d.length;_++){const x=f[_],b=d[_],E=x.el&&(x.type===_e||!Lt(x,b)||x.shapeFlag&70)?m(x.el):p;P(x,b,E,null,h,g,w,A,!0)}},Rt=(f,d,p,h,g,w,A)=>{if(p!==h){if(p!==q)for(const _ in p)!Dt(_)&&!(_ in h)&&a(f,_,p[_],null,A,d.children,g,w,je);for(const _ in h){if(Dt(_))continue;const x=h[_],b=p[_];x!==b&&_!=="value"&&a(f,_,b,x,A,d.children,g,w,je)}"value"in h&&a(f,"value",p.value,h.value,A)}},fn=(f,d,p,h,g,w,A,_,x)=>{const b=d.el=f?f.el:s(""),E=d.anchor=f?f.anchor:s("");let{patchFlag:R,dynamicChildren:I,slotScopeIds:M}=d;M&&(_=_?_.concat(M):M),f==null?(r(b,p,h),r(E,p,h),de(d.children||[],p,E,g,w,A,_,x)):R>0&&R&64&&I&&f.dynamicChildren?(Fe(f.dynamicChildren,I,p,g,w,A,_),(d.key!=null||g&&d===g.subTree)&&fs(f,d,!0)):W(f,d,p,E,g,w,A,_,x)},cn=(f,d,p,h,g,w,A,_,x)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?g.ctx.activate(d,p,h,A,x):fr(d,p,h,g,w,A,x):Ii(f,d,x)},fr=(f,d,p,h,g,w,A)=>{const _=f.component=cu(f,h,g);if(ms(f)&&(_.ctx.renderer=Nt),uu(_),_.asyncDep){if(g&&g.registerDep(_,ce,A),!f.el){const x=_.subTree=J(bt);y(null,x,d,p)}}else ce(_,f,d,p,g,w,A)},Ii=(f,d,p)=>{const h=d.component=f.component;if(pc(f,d,p))if(h.asyncDep&&!h.asyncResolved){Q(h,d,p);return}else h.next=d,sc(h.update),h.effect.dirty=!0,h.update();else d.el=f.el,h.vnode=d},ce=(f,d,p,h,g,w,A)=>{const _=()=>{if(f.isMounted){let{next:E,bu:R,u:I,parent:M,vnode:H}=f;{const yt=cs(f);if(yt){E&&(E.el=H.el,Q(f,E,A)),yt.asyncDep.then(()=>{f.isUnmounted||_()});return}}let K=E,V;ft(f,!1),E?(E.el=H.el,Q(f,E,A)):E=H,R&&gr(R),(V=E.props&&E.props.onVnodeBeforeUpdate)&&Te(V,M,E,H),ft(f,!0);const ae=br(f),xe=f.subTree;f.subTree=ae,P(xe,ae,m(xe.el),dn(xe),f,g,w),E.el=ae.el,K===null&&hc(f,ae.el),I&&pe(I,g),(V=E.props&&E.props.onVnodeUpdated)&&pe(()=>Te(V,M,E,H),g)}else{let E;const{el:R,props:I}=d,{bm:M,m:H,parent:K}=f,V=Nn(d);if(ft(f,!1),M&&gr(M),!V&&(E=I&&I.onVnodeBeforeMount)&&Te(E,K,d),ft(f,!0),R&&Li){const ae=()=>{f.subTree=br(f),Li(R,f.subTree,f,g,null)};V?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=br(f);P(null,ae,p,h,f,g,w),d.el=ae.el}if(H&&pe(H,g),!V&&(E=I&&I.onVnodeMounted)){const ae=d;pe(()=>Te(E,K,ae),g)}(d.shapeFlag&256||K&&Nn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&pe(f.a,g),f.isMounted=!0,d=p=h=null}},x=f.effect=new pi(_,we,()=>xi(b),f.scope),b=f.update=()=>{x.dirty&&x.run()};b.id=f.uid,ft(f,!0),b()},Q=(f,d,p)=>{d.component=f;const h=f.vnode.props;f.vnode=d,f.next=null,Hc(f,d.props,h,p),Vc(f,d.children,p),it(),va(f),at()},W=(f,d,p,h,g,w,A,_,x=!1)=>{const b=f&&f.children,E=f?f.shapeFlag:0,R=d.children,{patchFlag:I,shapeFlag:M}=d;if(I>0){if(I&128){un(b,R,p,h,g,w,A,_,x);return}else if(I&256){ot(b,R,p,h,g,w,A,_,x);return}}M&8?(E&16&&je(b,g,w),R!==b&&u(p,R)):E&16?M&16?un(b,R,p,h,g,w,A,_,x):je(b,g,w,!0):(E&8&&u(p,""),M&16&&de(R,p,h,g,w,A,_,x))},ot=(f,d,p,h,g,w,A,_,x)=>{f=f||St,d=d||St;const b=f.length,E=d.length,R=Math.min(b,E);let I;for(I=0;I<R;I++){const M=d[I]=x?qe(d[I]):Ie(d[I]);P(f[I],M,p,null,g,w,A,_,x)}b>E?je(f,g,w,!0,!1,R):de(d,p,h,g,w,A,_,x,R)},un=(f,d,p,h,g,w,A,_,x)=>{let b=0;const E=d.length;let R=f.length-1,I=E-1;for(;b<=R&&b<=I;){const M=f[b],H=d[b]=x?qe(d[b]):Ie(d[b]);if(Lt(M,H))P(M,H,p,null,g,w,A,_,x);else break;b++}for(;b<=R&&b<=I;){const M=f[R],H=d[I]=x?qe(d[I]):Ie(d[I]);if(Lt(M,H))P(M,H,p,null,g,w,A,_,x);else break;R--,I--}if(b>R){if(b<=I){const M=I+1,H=M<E?d[M].el:h;for(;b<=I;)P(null,d[b]=x?qe(d[b]):Ie(d[b]),p,H,g,w,A,_,x),b++}}else if(b>I)for(;b<=R;)Ce(f[b],g,w,!0),b++;else{const M=b,H=b,K=new Map;for(b=H;b<=I;b++){const ve=d[b]=x?qe(d[b]):Ie(d[b]);ve.key!=null&&K.set(ve.key,b)}let V,ae=0;const xe=I-H+1;let yt=!1,Fi=0;const Mt=new Array(xe);for(b=0;b<xe;b++)Mt[b]=0;for(b=M;b<=R;b++){const ve=f[b];if(ae>=xe){Ce(ve,g,w,!0);continue}let Pe;if(ve.key!=null)Pe=K.get(ve.key);else for(V=H;V<=I;V++)if(Mt[V-H]===0&&Lt(ve,d[V])){Pe=V;break}Pe===void 0?Ce(ve,g,w,!0):(Mt[Pe-H]=b+1,Pe>=Fi?Fi=Pe:yt=!0,P(ve,d[Pe],p,null,g,w,A,_,x),ae++)}const ji=yt?Gc(Mt):St;for(V=ji.length-1,b=xe-1;b>=0;b--){const ve=H+b,Pe=d[ve],zi=ve+1<E?d[ve+1].el:h;Mt[b]===0?P(null,Pe,p,zi,g,w,A,_,x):yt&&(V<0||b!==ji[V]?st(Pe,p,zi,2):V--)}}},st=(f,d,p,h,g=null)=>{const{el:w,type:A,transition:_,children:x,shapeFlag:b}=f;if(b&6){st(f.component.subTree,d,p,h);return}if(b&128){f.suspense.move(d,p,h);return}if(b&64){A.move(f,d,p,Nt);return}if(A===_e){r(w,d,p);for(let R=0;R<x.length;R++)st(x[R],d,p,h);r(f.anchor,d,p);return}if(A===wr){T(f,d,p);return}if(h!==2&&b&1&&_)if(h===0)_.beforeEnter(w),r(w,d,p),pe(()=>_.enter(w),g);else{const{leave:R,delayLeave:I,afterLeave:M}=_,H=()=>r(w,d,p),K=()=>{R(w,()=>{H(),M&&M()})};I?I(w,H,K):K()}else r(w,d,p)},Ce=(f,d,p,h=!1,g=!1)=>{const{type:w,props:A,ref:_,children:x,dynamicChildren:b,shapeFlag:E,patchFlag:R,dirs:I,memoIndex:M}=f;if(R===-2&&(g=!1),_!=null&&Kr(_,null,p,f,!0),M!=null&&(d.renderCache[M]=void 0),E&256){d.ctx.deactivate(f);return}const H=E&1&&I,K=!Nn(f);let V;if(K&&(V=A&&A.onVnodeBeforeUnmount)&&Te(V,d,f),E&6)As(f.component,p,h);else{if(E&128){f.suspense.unmount(p,h);return}H&&lt(f,null,d,"beforeUnmount"),E&64?f.type.remove(f,d,p,Nt,h):b&&(w!==_e||R>0&&R&64)?je(b,d,p,!1,!0):(w===_e&&R&384||!g&&E&16)&&je(x,d,p),h&&Ri(f)}(K&&(V=A&&A.onVnodeUnmounted)||H)&&pe(()=>{V&&Te(V,d,f),H&&lt(f,null,d,"unmounted")},p)},Ri=f=>{const{type:d,el:p,anchor:h,transition:g}=f;if(d===_e){ks(p,h);return}if(d===wr){$(f);return}const w=()=>{i(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:_}=g,x=()=>A(p,w);_?_(f.el,w,x):x()}else w()},ks=(f,d)=>{let p;for(;f!==d;)p=v(f),i(f),f=p;i(d)},As=(f,d,p)=>{const{bum:h,scope:g,update:w,subTree:A,um:_,m:x,a:b}=f;Ca(x),Ca(b),h&&gr(h),g.stop(),w&&(w.active=!1,Ce(A,f,d,p)),_&&pe(_,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},je=(f,d,p,h=!1,g=!1,w=0)=>{for(let A=w;A<f.length;A++)Ce(f[A],d,p,h,g)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el);let cr=!1;const Ni=(f,d,p)=>{f==null?d._vnode&&Ce(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),cr||(cr=!0,va(),Ko(),cr=!1),d._vnode=f},Nt={p:P,um:Ce,m:st,r:Ri,mt:fr,mc:de,pc:W,pbc:Fe,n:dn,o:e};let Mi,Li;return{render:Ni,hydrate:Mi,createApp:zc(Ni,Mi)}}function _r({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ft({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Kc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function fs(e,t,n=!1){const r=e.children,i=t.children;if(N(r)&&N(i))for(let a=0;a<r.length;a++){const o=r[a];let s=i[a];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[a]=qe(i[a]),s.el=o.el),!n&&s.patchFlag!==-2&&fs(o,s)),s.type===or&&(s.el=o.el)}}function Gc(e){const t=e.slice(),n=[0];let r,i,a,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function cs(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:cs(t)}function Ca(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const Xc=Symbol.for("v-scx"),qc=()=>Mn(Xc),En={};function Ln(e,t,n){return us(e,t,n)}function us(e,t,{immediate:n,deep:r,flush:i,once:a,onTrack:o,onTrigger:s}=q){if(t&&a){const F=t;t=(...ne)=>{F(...ne),B()}}const l=fe,c=F=>r===!0?F:ut(F,r===!1?1:void 0);let u,m=!1,v=!1;if(ge(e)?(u=()=>e.value,m=Hn(e)):Ht(e)?(u=()=>c(e),m=!0):N(e)?(v=!0,m=e.some(F=>Ht(F)||Hn(F)),u=()=>e.map(F=>{if(ge(F))return F.value;if(Ht(F))return c(F);if(j(F))return Ze(F,l,2)})):j(e)?t?u=()=>Ze(e,l,2):u=()=>(k&&k(),Ee(e,l,3,[L])):u=we,t&&r){const F=u;u=()=>ut(F())}let k,L=F=>{k=T.onStop=()=>{Ze(F,l,4),k=T.onStop=void 0}},P;if(sr)if(L=we,t?n&&Ee(t,l,3,[u(),v?[]:void 0,L]):u(),i==="sync"){const F=qc();P=F.__watcherHandles||(F.__watcherHandles=[])}else return we;let D=v?new Array(e.length).fill(En):En;const y=()=>{if(!(!T.active||!T.dirty))if(t){const F=T.run();(r||m||(v?F.some((ne,de)=>nt(ne,D[de])):nt(F,D)))&&(k&&k(),Ee(t,l,3,[F,D===En?void 0:v&&D[0]===En?[]:D,L]),D=F)}else T.run()};y.allowRecurse=!!t;let S;i==="sync"?S=y:i==="post"?S=()=>pe(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),S=()=>xi(y));const T=new pi(u,we,S),$=Rf(),B=()=>{T.stop(),$&&ui($.effects,T)};return t?n?y():D=T.run():i==="post"?pe(T.run.bind(T),l&&l.suspense):T.run(),P&&P.push(B),B}function Jc(e,t,n){const r=this.proxy,i=ie(e)?e.includes(".")?ds(r,e):()=>r[e]:e.bind(r,r);let a;j(t)?a=t:(a=t.handler,n=t);const o=sn(this),s=us(i,a.bind(r),n);return o(),s}function ds(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ut(e,t=1/0,n){if(t<=0||!Z(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,ge(e))ut(e.value,t,n);else if(N(e))for(let r=0;r<e.length;r++)ut(e[r],t,n);else if(_o(e)||kt(e))e.forEach(r=>{ut(r,t,n)});else if(So(e)){for(const r in e)ut(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&ut(e[r],t,n)}return e}const ms=e=>e.type.__isKeepAlive;function Zc(e,t){ps(e,"a",t)}function Qc(e,t){ps(e,"da",t)}function ps(e,t,n=fe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ar(t,r,n),n){let i=n.parent;for(;i&&i.parent;)ms(i.parent.vnode)&&eu(r,t,n,i),i=i.parent}}function eu(e,t,n,r){const i=ar(t,e,r,!0);Zo(()=>{ui(r[t],i)},n)}function hs(e,t){e.shapeFlag&6&&e.component?hs(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const tu=e=>e.__isTeleport,_e=Symbol.for("v-fgt"),or=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),Vt=[];let Oe=null;function Me(e=!1){Vt.push(Oe=e?null:[])}function nu(){Vt.pop(),Oe=Vt[Vt.length-1]||null}let tn=1;function Pa(e){tn+=e}function gs(e){return e.dynamicChildren=tn>0?Oe||St:null,nu(),tn>0&&Oe&&Oe.push(e),e}function He(e,t,n,r,i,a){return gs(ee(e,t,n,r,i,a,!0))}function ru(e,t,n,r,i){return gs(J(e,t,n,r,i,!0))}function Gr(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const vs=({key:e})=>e??null,Fn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ie(e)||ge(e)||j(e)?{i:Ae,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,i=null,a=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&vs(t),ref:t&&Fn(t),scopeId:ir,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ae};return s?(Ei(l,n),a&128&&e.normalize(l)):n&&(l.shapeFlag|=ie(n)?8:16),tn>0&&!o&&Oe&&(l.patchFlag>0||a&6)&&l.patchFlag!==32&&Oe.push(l),l}const J=iu;function iu(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===vc)&&(e=bt),Gr(e)){const s=Ct(e,t,!0);return n&&Ei(s,n),tn>0&&!a&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag=-2,s}if(gu(e)&&(e=e.__vccOpts),t){t=au(t);let{class:s,style:l}=t;s&&!ie(s)&&(t.class=Et(s)),Z(l)&&(Ho(l)&&!N(l)&&(l=se({},l)),t.style=qt(l))}const o=ie(e)?1:yc(e)?128:tu(e)?64:Z(e)?4:j(e)?2:0;return ee(e,t,n,r,i,o,a,!0)}function au(e){return e?Ho(e)||rs(e)?se({},e):e:null}function Ct(e,t,n=!1,r=!1){const{props:i,ref:a,patchFlag:o,children:s,transition:l}=e,c=t?su(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&vs(c),ref:t&&t.ref?n&&a?N(a)?a.concat(Fn(t)):[a,Fn(t)]:Fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&hs(u,l.clone(u)),u}function nn(e=" ",t=0){return J(or,null,e,t)}function ou(e="",t=!1){return t?(Me(),ru(bt,null,e)):J(bt,null,e)}function Ie(e){return e==null||typeof e=="boolean"?J(bt):N(e)?J(_e,null,e.slice()):typeof e=="object"?qe(e):J(or,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function Ei(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ei(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!rs(t)?t._ctx=Ae:i===3&&Ae&&(Ae.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ae},n=32):(t=String(t),r&64?(n=16,t=[nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function su(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Et([t.class,r.class]));else if(i==="style")t.style=qt([t.style,r.style]);else if(qn(i)){const a=t[i],o=r[i];o&&a!==o&&!(N(a)&&a.includes(o))&&(t[i]=a?[].concat(a,o):o)}else i!==""&&(t[i]=r[i])}return t}function Te(e,t,n,r=null){Ee(e,t,7,[n,r])}const lu=es();let fu=0;function cu(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||lu,a={uid:fu++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:as(r,i),emitsOptions:Xo(r,i),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=cc.bind(null,a),e.ce&&e.ce(a),a}let fe=null,Vn,Xr;{const e=Ao(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};Vn=t("__VUE_INSTANCE_SETTERS__",n=>fe=n),Xr=t("__VUE_SSR_SETTERS__",n=>sr=n)}const sn=e=>{const t=fe;return Vn(e),e.scope.on(),()=>{e.scope.off(),Vn(t)}},Ta=()=>{fe&&fe.scope.off(),Vn(null)};function bs(e){return e.vnode.shapeFlag&4}let sr=!1;function uu(e,t=!1){t&&Xr(t);const{props:n,children:r}=e.vnode,i=bs(e);Dc(e,n,i,t),Bc(e,r);const a=i?du(e,t):void 0;return t&&Xr(!1),a}function du(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ic);const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?pu(e):null,a=sn(e);it();const o=Ze(r,e,0,[e.props,i]);if(at(),a(),wo(o)){if(o.then(Ta,Ta),t)return o.then(s=>{Ia(e,s,t)}).catch(s=>{nr(s,e,0)});e.asyncDep=o}else Ia(e,o,t)}else ys(e,t)}function Ia(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=Vo(t)),ys(e,n)}let Ra;function ys(e,t,n){const r=e.type;if(!e.render){if(!t&&Ra&&!r.render){const i=r.template||Ai(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=se(se({isCustomElement:a,delimiters:s},o),l);r.render=Ra(i,c)}}e.render=r.render||we}{const i=sn(e);it();try{Rc(e)}finally{at(),i()}}}const mu={get(e,t){return he(e,"get",""),e[t]}};function pu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,mu),slots:e.slots,emit:e.emit,expose:t}}function Ci(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Vo(Qf(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}})):e.proxy}function hu(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function gu(e){return j(e)&&"__vccOpts"in e}const oe=(e,t)=>ec(e,t,sr);function vu(e,t,n){const r=arguments.length;return r===2?Z(t)&&!N(t)?Gr(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gr(n)&&(n=[n]),J(e,t,n))}const bu="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yu="http://www.w3.org/2000/svg",_u="http://www.w3.org/1998/Math/MathML",ze=typeof document<"u"?document:null,Na=ze&&ze.createElement("template"),wu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?ze.createElementNS(yu,e):t==="mathml"?ze.createElementNS(_u,e):n?ze.createElement(e,{is:n}):ze.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>ze.createTextNode(e),createComment:e=>ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Na.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Na.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xu=Symbol("_vtc");function Su(e,t,n){const r=e[xu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ma=Symbol("_vod"),ku=Symbol("_vsh"),Au=Symbol(""),Ou=/(^|;)\s*display\s*:/;function Eu(e,t,n){const r=e.style,i=ie(n);let a=!1;if(n&&!i){if(t)if(ie(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&jn(r,s,"")}else for(const o in t)n[o]==null&&jn(r,o,"");for(const o in n)o==="display"&&(a=!0),jn(r,o,n[o])}else if(i){if(t!==n){const o=r[Au];o&&(n+=";"+o),r.cssText=n,a=Ou.test(n)}}else t&&e.removeAttribute("style");Ma in e&&(e[Ma]=a?r.display:"",e[ku]&&(r.display="none"))}const La=/\s*!important$/;function jn(e,t,n){if(N(n))n.forEach(r=>jn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cu(e,t);La.test(n)?e.setProperty(It(r),n.replace(La,""),"important"):e[r]=n}}const Fa=["Webkit","Moz","ms"],xr={};function Cu(e,t){const n=xr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return xr[t]=r;r=Qn(r);for(let i=0;i<Fa.length;i++){const a=Fa[i]+r;if(a in e)return xr[t]=a}return t}const ja="http://www.w3.org/1999/xlink";function za(e,t,n,r,i,a=Pf(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ja,t.slice(6,t.length)):e.setAttributeNS(ja,t,n):n==null||a&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,a?"":rt(n)?String(n):n)}function Pu(e,t,n,r,i,a,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,i,a),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?"":String(n);(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Oo(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Tu(e,t,n,r){e.addEventListener(t,n,r)}function Iu(e,t,n,r){e.removeEventListener(t,n,r)}const $a=Symbol("_vei");function Ru(e,t,n,r,i=null){const a=e[$a]||(e[$a]={}),o=a[t];if(r&&o)o.value=r;else{const[s,l]=Nu(t);if(r){const c=a[t]=Fu(r,i);Tu(e,s,c,l)}else o&&(Iu(e,s,o,l),a[t]=void 0)}}const Da=/(?:Once|Passive|Capture)$/;function Nu(e){let t;if(Da.test(e)){t={};let r;for(;r=e.match(Da);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let Sr=0;const Mu=Promise.resolve(),Lu=()=>Sr||(Mu.then(()=>Sr=0),Sr=Date.now());function Fu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(ju(r,n.value),t,5,[r])};return n.value=e,n.attached=Lu(),n}function ju(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Ha=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zu=(e,t,n,r,i,a,o,s,l)=>{const c=i==="svg";t==="class"?Su(e,r,c):t==="style"?Eu(e,n,r):qn(t)?ci(t)||Ru(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$u(e,t,r,c))?(Pu(e,t,r,a,o,s,l),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&za(e,t,r,c,o,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),za(e,t,r,c))};function $u(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ha(t)&&j(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ha(t)&&ie(n)?!1:t in e}const Du=se({patchProp:zu},wu);let Ua;function Hu(){return Ua||(Ua=Yc(Du))}const Uu=(...e)=>{const t=Hu().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Vu(r);if(!i)return;const a=t._component;!j(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,Bu(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function Bu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vu(e){return ie(e)?document.querySelector(e):e}function Ba(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ba(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ba(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yu(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wu(e){var t=Yu(e,"string");return typeof t=="symbol"?t:t+""}function Yn(e){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function me(e,t,n){return t=Wu(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ku(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Gu(e,t){if(e==null)return{};var n=Ku(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_s={exports:{}};(function(e){(function(t){var n=function(y,S,T){if(!c(S)||m(S)||v(S)||k(S)||l(S))return S;var $,B=0,F=0;if(u(S))for($=[],F=S.length;B<F;B++)$.push(n(y,S[B],T));else{$={};for(var ne in S)Object.prototype.hasOwnProperty.call(S,ne)&&($[y(ne,T)]=n(y,S[ne],T))}return $},r=function(y,S){S=S||{};var T=S.separator||"_",$=S.split||/(?=[A-Z])/;return y.split($).join(T)},i=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(S,T){return T?T.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},a=function(y){var S=i(y);return S.substr(0,1).toUpperCase()+S.substr(1)},o=function(y,S){return r(y,S).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},P=function(y,S){var T=S&&"process"in S?S.process:S;return typeof T!="function"?y:function($,B){return T($,y,B)}},D={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(y,S){return n(P(i,S),y)},decamelizeKeys:function(y,S){return n(P(o,S),y,S)},pascalizeKeys:function(y,S){return n(P(a,S),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Xu)})(_s);var qu=_s.exports,Ju=["class","style"];function Zu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=qu.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function Qu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ws(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Qu(u);break;case"style":l.style=Zu(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var a=n.style,o=a===void 0?{}:a,s=Gu(n,Ju);return vu(e.tag,$e($e($e({},t),{},{class:i.class,style:$e($e({},i.style),o)},i.attrs),s),r)}var xs=!1;try{xs=!0}catch{}function ed(){if(!xs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function kr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?me({},e,t):{}}function td(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},me(me(me(me(me(me(me(me(me(me(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),me(me(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Va(e){if(e&&Yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jr.icon)return jr.icon(e);if(e===null)return null;if(Yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var nd=Tc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=oe(function(){return Va(t.icon)}),a=oe(function(){return kr("classes",td(t))}),o=oe(function(){return kr("transform",typeof t.transform=="string"?jr.transform(t.transform):t.transform)}),s=oe(function(){return kr("mask",Va(t.mask))}),l=oe(function(){return of(i.value,$e($e($e($e({},a.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Ln(l,function(u){if(!u)return ed("Could not find one or more icon(s)",i.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?ws(l.value.abstract[0],{},r):null});return function(){return c.value}}});function rd(e){const t=window.URL||window.webkitURL;return e&&t.createObjectURL(e)}function id(e){const t=Pt(e||0);return new Date(t*1e3).toISOString().slice(14,23)}function Pt(e){return Number(e.toFixed(3))}function Ar(e,t){return t?e*100/t:0}function ad(e,t){return t?e*t/100:0}function ln(e){return JSON.parse(JSON.stringify(e))}const z=tr({file:null,video:null,videoData:null,needleSeconds:0,timeRanges:[],undoStack:[],redoStack:[]}),od=oe(()=>z.undoStack.length>0),sd=oe(()=>z.redoStack.length>0),ld=oe(()=>{const{currentTime:e,duration:t}=z.videoData||{};return!(e<0||e>t||md()===-1)});function fd(e){z.file=e}function cd(e){z.video=e,e.addEventListener("timeupdate",()=>Ya(e)),e.addEventListener("durationchange",()=>{Ya(e),ud()})}function Ya(e){const t=Pt(e.duration),n=Pt(e.currentTime);z.videoData={duration:t,currentTime:n},z.needleSeconds!==n&&(z.needleSeconds=n)}function ud(){yd(),Pi([{start:0,end:z.videoData.duration}])}function Pi(e=[]){_d(),z.timeRanges=e.map(dd)}function dd({start:e,end:t,deleted:n}){return{start:Pt(e),end:Pt(t),deleted:!!n}}function md(){return Ti(z.needleSeconds)}function Ti(e){return z.timeRanges.findIndex(({start:t,end:n})=>t<e&&n>e)}function pd(){hd(z.needleSeconds)}function hd(e){const t=Ti(e);if(t===-1)return;const n=ln(z.timeRanges),r=n[t],{start:i,end:a,...o}=r,s={...o,start:i,end:e-.001},l={...o,start:e,end:a};n.splice(t,1,s,l),Pi(n)}function gd(){vd(z.needleSeconds)}function vd(e){const t=Ti(e);if(t===-1)return;const n=ln(z.timeRanges),r=n[t];r.deleted=!r.deleted,Pi(n)}function bd(e){z.needleSeconds=Pt(e),z.video.currentTime!==z.needleSeconds&&(z.video.currentTime=z.needleSeconds)}function yd(){z.undoStack=[],z.redoStack=[]}function _d(){z.timeRanges.length!==0&&(z.undoStack.push(ln(z.timeRanges)),z.redoStack=[])}function wd(){const e=ln(z.timeRanges);z.redoStack.push(e);const t=z.undoStack.pop();z.timeRanges=t}function xd(){const e=ln(z.timeRanges);z.undoStack.push(e);const t=z.redoStack.pop();z.timeRanges=t}const lr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Sd={class:"player-container"},kd=["src"],Ad={__name:"Player",setup(e){const t=oe(()=>rd(z.file)),n=In(null);return ki(()=>cd(n.value)),(r,i)=>(Me(),He("div",Sd,[ee("video",{ref_key:"video",ref:n,controls:""},[t.value?(Me(),He("source",{key:0,src:t.value},null,8,kd)):ou("",!0)],512)]))}},Od=lr(Ad,[["__scopeId","data-v-10560ab2"]]),Ed={class:"uploader-label"},Cd={__name:"Uploader",setup(e){const t=oe(()=>z.file);function n(r){fd(r.target.files[0])}return(r,i)=>{var o;const a=Si("font-awesome-icon");return Me(),He("label",{class:Et(["uploader-container",{success:!!t.value}])},[ee("input",{type:"file",class:"uploader-input",onChange:n},null,32),ee("span",Ed,[(o=t.value)!=null&&o.name?(Me(),He(_e,{key:0},[J(a,{icon:"fas fa-film",size:"xl","fixed-width":""}),nn(" "+mi(t.value.name),1)],64)):(Me(),He(_e,{key:1},[J(a,{icon:"fas fa-cloud-arrow-up",size:"xl","fixed-width":""}),nn(" Select your media file (.mp4, .avi, .webm, etc) ")],64))])],2)}}},Pd=lr(Cd,[["__scopeId","data-v-c4942d4c"]]),Td=e=>(qo("data-v-eca74a87"),e=e(),Jo(),e),Id={class:"timeline-controls-container"},Rd={class:"timeline-controls-left"},Nd=["disabled"],Md=["disabled"],Ld=["disabled"],Fd=Td(()=>ee("div",{class:"timeline-control-divider"},null,-1)),jd={class:"timeline-controls-right"},zd={class:"timeline-control timeline-save",disabled:!0},$d={class:"timeline-slices-container"},Dd={class:"timeline-slices"},Hd={class:"timeline-needle-label"},Ud={__name:"Timeline",setup(e){const t=In(null),n=In(null),r=In(!1),i=oe(()=>z.file),a=oe(()=>{var P;return((P=z.videoData)==null?void 0:P.duration)||0}),o=oe(()=>z.needleSeconds||0),s=oe(()=>id(o.value)),l=oe(()=>Ar(o.value,a.value)),c=oe(()=>z.timeRanges.map(({start:P,end:D,...y})=>{const S=Ar(P,a.value),T=Ar(D,a.value)-S;return{...y,start:P,end:D,left:S,width:T}}));function u(){wd()}function m(){xd()}function v(){pd()}function k(){gd()}function L(P){const D=n.value.getBoundingClientRect();let y=P.clientX-D.left;y<0&&(y=0),y>D.width&&(y=D.width);const S=y*100/D.width,T=ad(S,a.value);bd(T)}return ki(()=>{n.value.addEventListener("click",P=>{L(P)}),n.value.addEventListener("mousedown",()=>{r.value=!0}),document.addEventListener("mouseup",()=>{r.value=!1}),document.addEventListener("mousemove",P=>{r.value&&L(P)})}),(P,D)=>{const y=Si("font-awesome-icon");return Me(),He("div",{class:Et(["timeline-container",{deactive:!i.value}])},[ee("div",Id,[ee("div",Rd,[ee("button",{class:"timeline-control timeline-undo",disabled:!Rn(od),onClick:u},[J(y,{icon:"fas fa-undo"})],8,Nd),ee("button",{class:"timeline-control timeline-redo",disabled:!Rn(sd),onClick:m},[J(y,{icon:"fas fa-redo"})],8,Md),ee("button",{class:"timeline-control timeline-crop",disabled:!Rn(ld),onClick:v},[J(y,{icon:"fas fa-scissors"}),nn(" Crop ")],8,Ld),Fd,ee("button",{class:"timeline-control timeline-delete",onClick:k},[J(y,{icon:"fas fa-trash"})])]),ee("div",jd,[ee("button",zd,[J(y,{icon:"fas fa-save",size:"lg"}),nn(" Save ")])])]),ee("div",$d,[ee("div",{class:"timeline-inner",ref_key:"timeline",ref:n},[ee("div",Dd,[(Me(!0),He(_e,null,Pc(c.value,S=>(Me(),He("div",{class:Et(["timeline-slice",{deleted:S.deleted}]),style:qt(`left: ${S.left}%; width: ${S.width}%;`)},null,6))),256))]),ee("div",{class:"timeline-needle",ref_key:"needle",ref:t,style:qt(`left: ${l.value}%;`)},[ee("div",Hd,mi(s.value),1)],4)],512)])],2)}}},Bd=lr(Ud,[["__scopeId","data-v-eca74a87"]]),Vd=e=>(qo("data-v-06698f59"),e=e(),Jo(),e),Yd={class:"page-container"},Wd={class:"page-header"},Kd=Vd(()=>ee("a",{href:"https://andersoncamargo.com.br/ffmpeg-video-crop/",title:"FFmpeg Video Crop"},[ee("h1",{class:"page-title"},"FFmpeg Video Crop")],-1)),Gd={href:"https://github.com/andergtk/ffmpeg-video-crop",title:"GitHub Project Repository"},Xd={__name:"App",setup(e){return(t,n)=>{const r=Si("font-awesome-icon");return Me(),He("div",Yd,[ee("header",Wd,[Kd,ee("a",Gd,[J(r,{icon:"fab fa-github",size:"2x"})])]),J(Pd),J(Od),J(Bd)])}}},qd=lr(Xd,[["__scopeId","data-v-06698f59"]]);af.add(mf,sf,pf,gf,lf,ff,uf,vf);const Ss=Uu(qd);Ss.component("font-awesome-icon",nd);Ss.mount("#app");
