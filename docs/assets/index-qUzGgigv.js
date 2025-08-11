(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function My(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u0={exports:{}},Ic={},f0={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),wy=Symbol.for("react.fragment"),Ty=Symbol.for("react.strict_mode"),Ay=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),by=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Ly=Symbol.for("react.memo"),Iy=Symbol.for("react.lazy"),Wd=Symbol.iterator;function Dy(t){return t===null||typeof t!="object"?null:(t=Wd&&t[Wd]||t["@@iterator"],typeof t=="function"?t:null)}var h0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d0=Object.assign,p0={};function ao(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m0(){}m0.prototype=ao.prototype;function Nh(t,e,n){this.props=t,this.context=e,this.refs=p0,this.updater=n||h0}var Uh=Nh.prototype=new m0;Uh.constructor=Nh;d0(Uh,ao.prototype);Uh.isPureReactComponent=!0;var jd=Array.isArray,g0=Object.prototype.hasOwnProperty,Oh={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function _0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g0.call(e,i)&&!v0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:Oh.current}}function Ny(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function Uy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xd=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uy(""+t.key):e.toString(36)}function bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case Ey:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+au(o,0):i,jd(r)?(n="",t!=null&&(n=t.replace(Xd,"$&/")+"/"),bl(r,e,n,"",function(c){return c})):r!=null&&(Fh(r)&&(r=Ny(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Xd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",jd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+au(s,a);o+=bl(s,e,n,l,r)}else if(l=Dy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+au(s,a++),o+=bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var i=[],r=0;return bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Oy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Pl={transition:null},Fy={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:Oh};function y0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!Fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=ao;qe.Fragment=wy;qe.Profiler=Ay;qe.PureComponent=Nh;qe.StrictMode=Ty;qe.Suspense=Py;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;qe.act=y0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=d0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g0.call(e,l)&&!v0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cy,_context:t},t.Consumer=t};qe.createElement=_0;qe.createFactory=function(t){var e=_0.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:by,render:t}};qe.isValidElement=Fh;qe.lazy=function(t){return{$$typeof:Iy,_payload:{_status:-1,_result:t},_init:Oy}};qe.memo=function(t,e){return{$$typeof:Ly,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};qe.unstable_act=y0;qe.useCallback=function(t,e){return fn.current.useCallback(t,e)};qe.useContext=function(t){return fn.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};qe.useEffect=function(t,e){return fn.current.useEffect(t,e)};qe.useId=function(){return fn.current.useId()};qe.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return fn.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};qe.useRef=function(t){return fn.current.useRef(t)};qe.useState=function(t){return fn.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return fn.current.useTransition()};qe.version="18.3.1";f0.exports=qe;var $e=f0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=$e,zy=Symbol.for("react.element"),By=Symbol.for("react.fragment"),Hy=Object.prototype.hasOwnProperty,Vy=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hy.call(e,i)&&!Gy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zy,type:t,key:s,ref:o,props:r,_owner:Vy.current}}Ic.Fragment=By;Ic.jsx=x0;Ic.jsxs=x0;u0.exports=Ic;var k=u0.exports,S0={exports:{}},Dn={},M0={exports:{}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,K){var G=N.length;N.push(K);e:for(;0<G;){var se=G-1>>>1,xe=N[se];if(0<r(xe,K))N[se]=K,N[G]=xe,G=se;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var K=N[0],G=N.pop();if(G!==K){N[0]=G;e:for(var se=0,xe=N.length,He=xe>>>1;se<He;){var Z=2*(se+1)-1,re=N[Z],he=Z+1,ae=N[he];if(0>r(re,G))he<xe&&0>r(ae,re)?(N[se]=ae,N[he]=G,se=he):(N[se]=re,N[Z]=G,se=Z);else if(he<xe&&0>r(ae,G))N[se]=ae,N[he]=G,se=he;else break e}}return K}function r(N,K){var G=N.sortIndex-K.sortIndex;return G!==0?G:N.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=N)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function x(N){if(y=!1,p(N),!_)if(n(l)!==null)_=!0,Y(P);else{var K=n(c);K!==null&&J(x,K.startTime-N)}}function P(N,K){_=!1,y&&(y=!1,u(C),C=-1),m=!0;var G=h;try{for(p(K),d=n(l);d!==null&&(!(d.expirationTime>K)||N&&!I());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var xe=se(d.expirationTime<=K);K=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),p(K)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var Z=n(c);Z!==null&&J(x,Z.startTime-K),He=!1}return He}finally{d=null,h=G,m=!1}}var M=!1,T=null,C=-1,A=5,E=-1;function I(){return!(t.unstable_now()-E<A)}function O(){if(T!==null){var N=t.unstable_now();E=N;var K=!0;try{K=T(!0,N)}finally{K?B():(M=!1,T=null)}}else M=!1}var B;if(typeof g=="function")B=function(){g(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,X=q.port2;q.port1.onmessage=O,B=function(){X.postMessage(null)}}else B=function(){v(O,0)};function Y(N){T=N,M||(M=!0,B())}function J(N,K){C=v(function(){N(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Y(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var G=h;h=K;try{return N()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,K){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var G=h;h=N;try{return K()}finally{h=G}},t.unstable_scheduleCallback=function(N,K,G){var se=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?se+G:se):G=se,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=G+xe,N={id:f++,callback:K,priorityLevel:N,startTime:G,expirationTime:xe,sortIndex:-1},G>se?(N.sortIndex=G,e(c,N),n(l)===null&&N===n(c)&&(y?(u(C),C=-1):y=!0,J(x,G-se))):(N.sortIndex=xe,e(l,N),_||m||(_=!0,Y(P))),N},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(N){var K=h;return function(){var G=h;h=K;try{return N.apply(this,arguments)}finally{h=G}}}})(E0);M0.exports=E0;var Wy=M0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy=$e,In=Wy;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var w0=new Set,Ko={};function Jr(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(Ko[t]=e,t=0;t<e.length;t++)w0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,Xy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},$d={};function Yy(t){return wf.call($d,t)?!0:wf.call(Yd,t)?!1:Xy.test(t)?$d[t]=!0:(Yd[t]=!0,!1)}function $y(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qy(t,e,n,i){if(e===null||typeof e>"u"||$y(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var kh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kh,zh);$t[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kh,zh);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kh,zh);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bh(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qy(e,n,r,i)&&(n=null),i||r===null?Yy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=jy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Es=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),A0=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Cf=Symbol.for("react.suspense_list"),Gh=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),qd=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,lu;function Do(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var cu=!1;function uu(t,e){if(!t||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Do(t):""}function Ky(t){switch(t.tag){case 5:return Do(t.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return t=uu(t.type,!1),t;case 11:return t=uu(t.type.render,!1),t;case 1:return t=uu(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Es:return"Portal";case Tf:return"Profiler";case Hh:return"StrictMode";case Af:return"Suspense";case Cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case A0:return(t.displayName||"Context")+".Consumer";case T0:return(t._context.displayName||"Context")+".Provider";case Vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gh:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function Zy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===Hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qy(t){var e=R0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=Qy(t))}function b0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bf(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&Bh(t,"checked",e,!1)}function Pf(t,e){P0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lf(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lf(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var No=Array.isArray;function Fs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(No(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function L0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jy=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){Jy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function N0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function U0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=N0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ex=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nf(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Uf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Of=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ff=null,ks=null,zs=null;function ep(t){if(t=_a(t)){if(typeof Ff!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Fc(e),Ff(t.stateNode,t.type,e))}}function O0(t){ks?zs?zs.push(t):zs=[t]:ks=t}function F0(){if(ks){var t=ks,e=zs;if(zs=ks=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function k0(t,e){return t(e)}function z0(){}var fu=!1;function B0(t,e,n){if(fu)return t(e,n);fu=!0;try{return k0(t,e,n)}finally{fu=!1,(ks!==null||zs!==null)&&(z0(),F0())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=Fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var kf=!1;if(Di)try{var go={};Object.defineProperty(go,"passive",{get:function(){kf=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{kf=!1}function tx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ho=!1,$l=null,ql=!1,zf=null,nx={onError:function(t){Ho=!0,$l=t}};function ix(t,e,n,i,r,s,o,a,l){Ho=!1,$l=null,tx.apply(nx,arguments)}function rx(t,e,n,i,r,s,o,a,l){if(ix.apply(this,arguments),Ho){if(Ho){var c=$l;Ho=!1,$l=null}else throw Error(oe(198));ql||(ql=!0,zf=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(es(t)!==t)throw Error(oe(188))}function sx(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tp(r),t;if(s===i)return tp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function V0(t){return t=sx(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var W0=In.unstable_scheduleCallback,np=In.unstable_cancelCallback,ox=In.unstable_shouldYield,ax=In.unstable_requestPaint,At=In.unstable_now,lx=In.unstable_getCurrentPriorityLevel,jh=In.unstable_ImmediatePriority,j0=In.unstable_UserBlockingPriority,Kl=In.unstable_NormalPriority,cx=In.unstable_LowPriority,X0=In.unstable_IdlePriority,Dc=null,pi=null;function ux(t){if(pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(Dc,t,void 0,(t.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:dx,fx=Math.log,hx=Math.LN2;function dx(t){return t>>>=0,t===0?32:31-(fx(t)/hx|0)|0}var ba=64,Pa=4194304;function Uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Uo(a):(s&=o,s!==0&&(i=Uo(s)))}else o=n&~r,o!==0?i=Uo(o):s!==0&&(i=Uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ti(e),r=1<<n,i|=t[n],e&=~r;return i}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y0(){var t=ba;return ba<<=1,!(ba&4194240)&&(ba=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ti(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ti(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ti(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function $0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q0,Yh,K0,Z0,Q0,Hf=!1,La=[],nr=null,ir=null,rr=null,Jo=new Map,ea=new Map,Ki=[],vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&Yh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function _x(t,e,n,i,r){switch(e){case"focusin":return nr=vo(nr,t,e,n,i,r),!0;case"dragenter":return ir=vo(ir,t,e,n,i,r),!0;case"mouseover":return rr=vo(rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,vo(Jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,vo(ea.get(s)||null,t,e,n,i,r)),!0}return!1}function J0(t){var e=kr(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,Q0(t.priority,function(){K0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Of=i,n.target.dispatchEvent(i),Of=null}else return e=_a(n),e!==null&&Yh(e),t.blockedOn=n,!1;e.shift()}return!0}function rp(t,e,n){Ll(t)&&n.delete(e)}function yx(){Hf=!1,nr!==null&&Ll(nr)&&(nr=null),ir!==null&&Ll(ir)&&(ir=null),rr!==null&&Ll(rr)&&(rr=null),Jo.forEach(rp),ea.forEach(rp)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,Hf||(Hf=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,yx)))}function ta(t){function e(r){return _o(r,t)}if(0<La.length){_o(La[0],t);for(var n=1;n<La.length;n++){var i=La[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&_o(nr,t),ir!==null&&_o(ir,t),rr!==null&&_o(rr,t),Jo.forEach(e),ea.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&Ki.shift()}var Bs=Fi.ReactCurrentBatchConfig,Ql=!0;function xx(t,e,n,i){var r=it,s=Bs.transition;Bs.transition=null;try{it=1,$h(t,e,n,i)}finally{it=r,Bs.transition=s}}function Sx(t,e,n,i){var r=it,s=Bs.transition;Bs.transition=null;try{it=4,$h(t,e,n,i)}finally{it=r,Bs.transition=s}}function $h(t,e,n,i){if(Ql){var r=Vf(t,e,n,i);if(r===null)Mu(t,e,i,Jl,n),ip(t,i);else if(_x(r,t,e,n,i))i.stopPropagation();else if(ip(t,i),e&4&&-1<vx.indexOf(t)){for(;r!==null;){var s=_a(r);if(s!==null&&q0(s),s=Vf(t,e,n,i),s===null&&Mu(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mu(t,e,i,null,n)}}var Jl=null;function Vf(t,e,n,i){if(Jl=null,t=Wh(i),t=kr(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case jh:return 1;case j0:return 4;case Kl:case cx:return 16;case X0:return 536870912;default:return 16}default:return 16}}var Ji=null,qh=null,Il=null;function tv(){if(Il)return Il;var t,e=qh,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Il=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function sp(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:sp,this.isPropagationStopped=sp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kh=Nn(lo),va=Mt({},lo,{view:0,detail:0}),Mx=Nn(va),du,pu,yo,Nc=Mt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(du=t.screenX-yo.screenX,pu=t.screenY-yo.screenY):pu=du=0,yo=t),du)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),op=Nn(Nc),Ex=Mt({},Nc,{dataTransfer:0}),wx=Nn(Ex),Tx=Mt({},va,{relatedTarget:0}),mu=Nn(Tx),Ax=Mt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=Nn(Ax),Rx=Mt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bx=Nn(Rx),Px=Mt({},lo,{data:0}),ap=Nn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ix={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dx[t])?!!e[t]:!1}function Zh(){return Nx}var Ux=Mt({},va,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ix[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zh,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=Nn(Ux),Fx=Mt({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Nn(Fx),kx=Mt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zh}),zx=Nn(kx),Bx=Mt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Nn(Bx),Vx=Mt({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=Nn(Vx),Wx=[9,13,27,32],Qh=Di&&"CompositionEvent"in window,Vo=null;Di&&"documentMode"in document&&(Vo=document.documentMode);var jx=Di&&"TextEvent"in window&&!Vo,nv=Di&&(!Qh||Vo&&8<Vo&&11>=Vo),cp=" ",up=!1;function iv(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function Xx(t,e){switch(t){case"compositionend":return rv(e);case"keypress":return e.which!==32?null:(up=!0,cp);case"textInput":return t=e.data,t===cp&&up?null:t;default:return null}}function Yx(t,e){if(Ts)return t==="compositionend"||!Qh&&iv(t,e)?(t=tv(),Il=qh=Ji=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$x[t.type]:e==="textarea"}function sv(t,e,n,i){O0(i),e=ec(e,"onChange"),0<e.length&&(n=new Kh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Go=null,na=null;function qx(t){gv(t,0)}function Uc(t){var e=Rs(t);if(b0(e))return t}function Kx(t,e){if(t==="change")return e}var ov=!1;if(Di){var gu;if(Di){var vu="oninput"in document;if(!vu){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),vu=typeof hp.oninput=="function"}gu=vu}else gu=!1;ov=gu&&(!document.documentMode||9<document.documentMode)}function dp(){Go&&(Go.detachEvent("onpropertychange",av),na=Go=null)}function av(t){if(t.propertyName==="value"&&Uc(na)){var e=[];sv(e,na,t,Wh(t)),B0(qx,e)}}function Zx(t,e,n){t==="focusin"?(dp(),Go=e,na=n,Go.attachEvent("onpropertychange",av)):t==="focusout"&&dp()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uc(na)}function Jx(t,e){if(t==="click")return Uc(e)}function eS(t,e){if(t==="input"||t==="change")return Uc(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ii=typeof Object.is=="function"?Object.is:tS;function ia(t,e){if(ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wf.call(e,r)||!ii(t[r],e[r]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=cv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(i!==null&&Jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mp(n,s);var o=mp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=Di&&"documentMode"in document&&11>=document.documentMode,As=null,Gf=null,Wo=null,Wf=!1;function gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wf||As==null||As!==Yl(i)||(i=As,"selectionStart"in i&&Jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Wo&&ia(Wo,i)||(Wo=i,i=ec(Gf,"onSelect"),0<i.length&&(e=new Kh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},_u={},uv={};Di&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Oc(t){if(_u[t])return _u[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in uv)return _u[t]=e[n];return t}var fv=Oc("animationend"),hv=Oc("animationiteration"),dv=Oc("animationstart"),pv=Oc("transitionend"),mv=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){mv.set(t,e),Jr(e,[t])}for(var yu=0;yu<vp.length;yu++){var xu=vp[yu],rS=xu.toLowerCase(),sS=xu[0].toUpperCase()+xu.slice(1);vr(rS,"on"+sS)}vr(fv,"onAnimationEnd");vr(hv,"onAnimationIteration");vr(dv,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(pv,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function _p(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rx(i,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;_p(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;_p(r,a,c),s=l}}}if(ql)throw t=zf,ql=!1,zf=null,t}function ht(t,e){var n=e[qf];n===void 0&&(n=e[qf]=new Set);var i=t+"__bubble";n.has(i)||(vv(e,t,2,!1),n.add(i))}function Su(t,e,n){var i=0;e&&(i|=4),vv(n,t,i,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[Na]){t[Na]=!0,w0.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Na]||(e[Na]=!0,Su("selectionchange",!1,e))}}function vv(t,e,n,i){switch(ev(e)){case 1:var r=xx;break;case 4:r=Sx;break;default:r=$h}n=r.bind(null,e,n,t),r=void 0,!kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}B0(function(){var c=s,f=Wh(n),d=[];e:{var h=mv.get(t);if(h!==void 0){var m=Kh,_=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":m=Ox;break;case"focusin":_="focus",m=mu;break;case"focusout":_="blur",m=mu;break;case"beforeblur":case"afterblur":m=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=zx;break;case fv:case hv:case dv:m=Cx;break;case pv:m=Hx;break;case"scroll":m=Mx;break;case"wheel":m=Gx;break;case"copy":case"cut":case"paste":m=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=lp}var y=(e&4)!==0,v=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,p;g!==null;){p=g;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,u!==null&&(x=Qo(g,u),x!=null&&y.push(sa(g,x,p)))),v)break;g=g.return}0<y.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Of&&(_=n.relatedTarget||n.fromElement)&&(kr(_)||_[Ni]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?kr(_):null,_!==null&&(v=es(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=op,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=lp,x="onPointerLeave",u="onPointerEnter",g="pointer"),v=m==null?h:Rs(m),p=_==null?h:Rs(_),h=new y(x,g+"leave",m,n,f),h.target=v,h.relatedTarget=p,x=null,kr(f)===c&&(y=new y(u,g+"enter",_,n,f),y.target=p,y.relatedTarget=v,x=y),v=x,m&&_)t:{for(y=m,u=_,g=0,p=y;p;p=is(p))g++;for(p=0,x=u;x;x=is(x))p++;for(;0<g-p;)y=is(y),g--;for(;0<p-g;)u=is(u),p--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=is(y),u=is(u)}y=null}else y=null;m!==null&&yp(d,h,m,y,!1),_!==null&&v!==null&&yp(d,v,_,y,!0)}}e:{if(h=c?Rs(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var P=Kx;else if(fp(h))if(ov)P=eS;else{P=Qx;var M=Zx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Jx);if(P&&(P=P(t,c))){sv(d,P,n,f);break e}M&&M(t,h,c),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&Lf(h,"number",h.value)}switch(M=c?Rs(c):window,t){case"focusin":(fp(M)||M.contentEditable==="true")&&(As=M,Gf=c,Wo=null);break;case"focusout":Wo=Gf=As=null;break;case"mousedown":Wf=!0;break;case"contextmenu":case"mouseup":case"dragend":Wf=!1,gp(d,n,f);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":gp(d,n,f)}var T;if(Qh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ts?iv(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(nv&&n.locale!=="ko"&&(Ts||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ts&&(T=tv()):(Ji=f,qh="value"in Ji?Ji.value:Ji.textContent,Ts=!0)),M=ec(c,C),0<M.length&&(C=new ap(C,t,null,n,f),d.push({event:C,listeners:M}),T?C.data=T:(T=rv(n),T!==null&&(C.data=T)))),(T=jx?Xx(t,n):Yx(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(f=new ap("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}gv(d,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(t,n),s!=null&&i.unshift(sa(t,s,r)),s=Qo(t,e),s!=null&&i.push(sa(t,s,r))),t=t.return}return i}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Qo(n,s),l!=null&&o.unshift(sa(n,l,a))):r||(l=Qo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function xp(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function Ua(t,e,n){if(e=xp(e),xp(t)!==e&&n)throw Error(oe(425))}function tc(){}var jf=null,Xf=null;function Yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,uS=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(fS)}:$f;function fS(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),fi="__reactFiber$"+co,oa="__reactProps$"+co,Ni="__reactContainer$"+co,qf="__reactEvents$"+co,hS="__reactListeners$"+co,dS="__reactHandles$"+co;function kr(t){var e=t[fi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[fi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mp(t);t!==null;){if(n=t[fi])return n;t=Mp(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[fi]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Fc(t){return t[oa]||null}var Kf=[],bs=-1;function _r(t){return{current:t}}function pt(t){0>bs||(t.current=Kf[bs],Kf[bs]=null,bs--)}function lt(t,e){bs++,Kf[bs]=t.current,t.current=e}var dr={},rn=_r(dr),vn=_r(!1),Xr=dr;function $s(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function nc(){pt(vn),pt(rn)}function Ep(t,e,n){if(rn.current!==dr)throw Error(oe(168));lt(rn,e),lt(vn,n)}function _v(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Zy(t)||"Unknown",r));return Mt({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Xr=rn.current,lt(rn,t),lt(vn,vn.current),!0}function wp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=_v(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,pt(vn),pt(rn),lt(rn,t)):pt(vn),lt(vn,n)}var Ci=null,kc=!1,wu=!1;function yv(t){Ci===null?Ci=[t]:Ci.push(t)}function pS(t){kc=!0,yv(t)}function yr(){if(!wu&&Ci!==null){wu=!0;var t=0,e=it;try{var n=Ci;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ci=null,kc=!1}catch(r){throw Ci!==null&&(Ci=Ci.slice(t+1)),W0(jh,yr),r}finally{it=e,wu=!1}}return null}var Ps=[],Ls=0,rc=null,sc=0,Fn=[],kn=0,Yr=null,bi=1,Pi="";function Lr(t,e){Ps[Ls++]=sc,Ps[Ls++]=rc,rc=t,sc=e}function xv(t,e,n){Fn[kn++]=bi,Fn[kn++]=Pi,Fn[kn++]=Yr,Yr=t;var i=bi;t=Pi;var r=32-ti(i)-1;i&=~(1<<r),n+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-ti(e)+r|n<<r|i,Pi=s+t}else bi=1<<s|n<<r|i,Pi=t}function ed(t){t.return!==null&&(Lr(t,1),xv(t,1,0))}function td(t){for(;t===rc;)rc=Ps[--Ls],Ps[Ls]=null,sc=Ps[--Ls],Ps[Ls]=null;for(;t===Yr;)Yr=Fn[--kn],Fn[kn]=null,Pi=Fn[--kn],Fn[kn]=null,bi=Fn[--kn],Fn[kn]=null}var Ln=null,Pn=null,vt=!1,Zn=null;function Sv(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ln=t,Pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:bi,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ln=t,Pn=null,!0):!1;default:return!1}}function Zf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qf(t){if(vt){var e=Pn;if(e){var n=e;if(!Tp(t,e)){if(Zf(t))throw Error(oe(418));e=sr(n.nextSibling);var i=Ln;e&&Tp(t,e)?Sv(i,n):(t.flags=t.flags&-4097|2,vt=!1,Ln=t)}}else{if(Zf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,vt=!1,Ln=t}}}function Ap(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function Oa(t){if(t!==Ln)return!1;if(!vt)return Ap(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yf(t.type,t.memoizedProps)),e&&(e=Pn)){if(Zf(t))throw Mv(),Error(oe(418));for(;e;)Sv(t,e),e=sr(e.nextSibling)}if(Ap(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pn=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pn=null}}else Pn=Ln?sr(t.stateNode.nextSibling):null;return!0}function Mv(){for(var t=Pn;t;)t=sr(t.nextSibling)}function qs(){Pn=Ln=null,vt=!1}function nd(t){Zn===null?Zn=[t]:Zn.push(t)}var mS=Fi.ReactCurrentBatchConfig;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function Ev(t){function e(u,g){if(t){var p=u.deletions;p===null?(u.deletions=[g],u.flags|=16):p.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=cr(u,g),u.index=0,u.sibling=null,u}function s(u,g,p){return u.index=p,t?(p=u.alternate,p!==null?(p=p.index,p<g?(u.flags|=2,g):p):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,p,x){return g===null||g.tag!==6?(g=Lu(p,u.mode,x),g.return=u,g):(g=r(g,p),g.return=u,g)}function l(u,g,p,x){var P=p.type;return P===ws?f(u,g,p.props.children,x,p.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===$i&&Cp(P)===g.type)?(x=r(g,p.props),x.ref=xo(u,g,p),x.return=u,x):(x=Bl(p.type,p.key,p.props,null,u.mode,x),x.ref=xo(u,g,p),x.return=u,x)}function c(u,g,p,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==p.containerInfo||g.stateNode.implementation!==p.implementation?(g=Iu(p,u.mode,x),g.return=u,g):(g=r(g,p.children||[]),g.return=u,g)}function f(u,g,p,x,P){return g===null||g.tag!==7?(g=jr(p,u.mode,x,P),g.return=u,g):(g=r(g,p),g.return=u,g)}function d(u,g,p){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Lu(""+g,u.mode,p),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:return p=Bl(g.type,g.key,g.props,null,u.mode,p),p.ref=xo(u,null,g),p.return=u,p;case Es:return g=Iu(g,u.mode,p),g.return=u,g;case $i:var x=g._init;return d(u,x(g._payload),p)}if(No(g)||mo(g))return g=jr(g,u.mode,p,null),g.return=u,g;Fa(u,g)}return null}function h(u,g,p,x){var P=g!==null?g.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return P!==null?null:a(u,g,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Aa:return p.key===P?l(u,g,p,x):null;case Es:return p.key===P?c(u,g,p,x):null;case $i:return P=p._init,h(u,g,P(p._payload),x)}if(No(p)||mo(p))return P!==null?null:f(u,g,p,x,null);Fa(u,p)}return null}function m(u,g,p,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(p)||null,a(g,u,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return u=u.get(x.key===null?p:x.key)||null,l(g,u,x,P);case Es:return u=u.get(x.key===null?p:x.key)||null,c(g,u,x,P);case $i:var M=x._init;return m(u,g,p,M(x._payload),P)}if(No(x)||mo(x))return u=u.get(p)||null,f(g,u,x,P,null);Fa(g,x)}return null}function _(u,g,p,x){for(var P=null,M=null,T=g,C=g=0,A=null;T!==null&&C<p.length;C++){T.index>C?(A=T,T=null):A=T.sibling;var E=h(u,T,p[C],x);if(E===null){T===null&&(T=A);break}t&&T&&E.alternate===null&&e(u,T),g=s(E,g,C),M===null?P=E:M.sibling=E,M=E,T=A}if(C===p.length)return n(u,T),vt&&Lr(u,C),P;if(T===null){for(;C<p.length;C++)T=d(u,p[C],x),T!==null&&(g=s(T,g,C),M===null?P=T:M.sibling=T,M=T);return vt&&Lr(u,C),P}for(T=i(u,T);C<p.length;C++)A=m(T,u,C,p[C],x),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?C:A.key),g=s(A,g,C),M===null?P=A:M.sibling=A,M=A);return t&&T.forEach(function(I){return e(u,I)}),vt&&Lr(u,C),P}function y(u,g,p,x){var P=mo(p);if(typeof P!="function")throw Error(oe(150));if(p=P.call(p),p==null)throw Error(oe(151));for(var M=P=null,T=g,C=g=0,A=null,E=p.next();T!==null&&!E.done;C++,E=p.next()){T.index>C?(A=T,T=null):A=T.sibling;var I=h(u,T,E.value,x);if(I===null){T===null&&(T=A);break}t&&T&&I.alternate===null&&e(u,T),g=s(I,g,C),M===null?P=I:M.sibling=I,M=I,T=A}if(E.done)return n(u,T),vt&&Lr(u,C),P;if(T===null){for(;!E.done;C++,E=p.next())E=d(u,E.value,x),E!==null&&(g=s(E,g,C),M===null?P=E:M.sibling=E,M=E);return vt&&Lr(u,C),P}for(T=i(u,T);!E.done;C++,E=p.next())E=m(T,u,C,E.value,x),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?C:E.key),g=s(E,g,C),M===null?P=E:M.sibling=E,M=E);return t&&T.forEach(function(O){return e(u,O)}),vt&&Lr(u,C),P}function v(u,g,p,x){if(typeof p=="object"&&p!==null&&p.type===ws&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Aa:e:{for(var P=p.key,M=g;M!==null;){if(M.key===P){if(P=p.type,P===ws){if(M.tag===7){n(u,M.sibling),g=r(M,p.props.children),g.return=u,u=g;break e}}else if(M.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===$i&&Cp(P)===M.type){n(u,M.sibling),g=r(M,p.props),g.ref=xo(u,M,p),g.return=u,u=g;break e}n(u,M);break}else e(u,M);M=M.sibling}p.type===ws?(g=jr(p.props.children,u.mode,x,p.key),g.return=u,u=g):(x=Bl(p.type,p.key,p.props,null,u.mode,x),x.ref=xo(u,g,p),x.return=u,u=x)}return o(u);case Es:e:{for(M=p.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===p.containerInfo&&g.stateNode.implementation===p.implementation){n(u,g.sibling),g=r(g,p.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Iu(p,u.mode,x),g.return=u,u=g}return o(u);case $i:return M=p._init,v(u,g,M(p._payload),x)}if(No(p))return _(u,g,p,x);if(mo(p))return y(u,g,p,x);Fa(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,p),g.return=u,u=g):(n(u,g),g=Lu(p,u.mode,x),g.return=u,u=g),o(u)):n(u,g)}return v}var Ks=Ev(!0),wv=Ev(!1),oc=_r(null),ac=null,Is=null,id=null;function rd(){id=Is=ac=null}function sd(t){var e=oc.current;pt(oc),t._currentValue=e}function Jf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){ac=t,id=Is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(id!==t)if(t={context:t,memoizedValue:e,next:null},Is===null){if(ac===null)throw Error(oe(308));Is=t,ac.dependencies={lanes:0,firstContext:t}}else Is=Is.next=t;return e}var zr=null;function od(t){zr===null?zr=[t]:zr.push(t)}function Tv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,od(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Av(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,od(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xh(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=Mt({},d,h);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=d}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var ya={},mi=_r(ya),aa=_r(ya),la=_r(ya);function Br(t){if(t===ya)throw Error(oe(174));return t}function ld(t,e){switch(lt(la,e),lt(aa,t),lt(mi,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Df(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Df(e,t)}pt(mi),lt(mi,e)}function Zs(){pt(mi),pt(aa),pt(la)}function Cv(t){Br(la.current);var e=Br(mi.current),n=Df(e,t.type);e!==n&&(lt(aa,t),lt(mi,n))}function cd(t){aa.current===t&&(pt(mi),pt(aa))}var xt=_r(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tu=[];function ud(){for(var t=0;t<Tu.length;t++)Tu[t]._workInProgressVersionPrimary=null;Tu.length=0}var Ul=Fi.ReactCurrentDispatcher,Au=Fi.ReactCurrentBatchConfig,$r=0,St=null,Dt=null,Bt=null,uc=!1,jo=!1,ca=0,gS=0;function Kt(){throw Error(oe(321))}function fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ii(t[n],e[n]))return!1;return!0}function hd(t,e,n,i,r,s){if($r=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?xS:SS,t=n(i,r),jo){s=0;do{if(jo=!1,ca=0,25<=s)throw Error(oe(301));s+=1,Bt=Dt=null,e.updateQueue=null,Ul.current=MS,t=n(i,r)}while(jo)}if(Ul.current=fc,e=Dt!==null&&Dt.next!==null,$r=0,Bt=Dt=St=null,uc=!1,e)throw Error(oe(300));return t}function dd(){var t=ca!==0;return ca=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Gn(){if(Dt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?St.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(oe(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?St.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function ua(t,e){return typeof e=="function"?e(t):e}function Cu(t){var e=Gn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if(($r&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=f,qr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ii(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=Gn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ii(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Rv(){}function bv(t,e){var n=St,i=Gn(),r=e(),s=!ii(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,pd(Iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,fa(9,Lv.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(oe(349));$r&30||Pv(n,e,r)}return r}function Pv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lv(t,e,n,i){e.value=n,e.getSnapshot=i,Dv(e)&&Nv(t)}function Iv(t,e,n){return n(function(){Dv(e)&&Nv(t)})}function Dv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ii(t,n)}catch{return!0}}function Nv(t){var e=Ui(t,1);e!==null&&ni(e,t,1,-1)}function Pp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,St,t),[e.memoizedState,t]}function fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uv(){return Gn().memoizedState}function Ol(t,e,n,i){var r=ai();St.flags|=t,r.memoizedState=fa(1|e,n,void 0,i===void 0?null:i)}function zc(t,e,n,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&fd(i,o.deps)){r.memoizedState=fa(e,n,s,i);return}}St.flags|=t,r.memoizedState=fa(1|e,n,s,i)}function Lp(t,e){return Ol(8390656,8,t,e)}function pd(t,e){return zc(2048,8,t,e)}function Ov(t,e){return zc(4,2,t,e)}function Fv(t,e){return zc(4,4,t,e)}function kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zv(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,kv.bind(null,e,t),n)}function md(){}function Bv(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Hv(t,e){var n=Gn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vv(t,e,n){return $r&21?(ii(n,e)||(n=Y0(),St.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function vS(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Au.transition;Au.transition={};try{t(!1),e()}finally{it=n,Au.transition=i}}function Gv(){return Gn().memoizedState}function _S(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))jv(e,n);else if(n=Tv(t,e,n,i),n!==null){var r=un();ni(n,t,i,r),Xv(n,e,i)}}function yS(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))jv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ii(a,o)){var l=e.interleaved;l===null?(r.next=r,od(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tv(t,e,r,i),n!==null&&(r=un(),ni(n,t,i,r),Xv(n,e,i))}}function Wv(t){var e=t.alternate;return t===St||e!==null&&e===St}function jv(t,e){jo=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xh(t,n)}}var fc={readContext:Vn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},xS={readContext:Vn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Lp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ol(4194308,4,kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ol(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=_S.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:Pp,useDebugValue:md,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=Pp(!1),e=t[0];return t=vS.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=ai();if(vt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Vt===null)throw Error(oe(349));$r&30||Pv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Lp(Iv.bind(null,i,s,t),[t]),i.flags|=2048,fa(9,Lv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Vt.identifierPrefix;if(vt){var n=Pi,i=bi;n=(i&~(1<<32-ti(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SS={readContext:Vn,useCallback:Bv,useContext:Vn,useEffect:pd,useImperativeHandle:zv,useInsertionEffect:Ov,useLayoutEffect:Fv,useMemo:Hv,useReducer:Cu,useRef:Uv,useState:function(){return Cu(ua)},useDebugValue:md,useDeferredValue:function(t){var e=Gn();return Vv(e,Dt.memoizedState,t)},useTransition:function(){var t=Cu(ua)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:bv,useId:Gv,unstable_isNewReconciler:!1},MS={readContext:Vn,useCallback:Bv,useContext:Vn,useEffect:pd,useImperativeHandle:zv,useInsertionEffect:Ov,useLayoutEffect:Fv,useMemo:Hv,useReducer:Ru,useRef:Uv,useState:function(){return Ru(ua)},useDebugValue:md,useDeferredValue:function(t){var e=Gn();return Dt===null?e.memoizedState=t:Vv(e,Dt.memoizedState,t)},useTransition:function(){var t=Ru(ua)[0],e=Gn().memoizedState;return[t,e]},useMutableSource:Rv,useSyncExternalStore:bv,useId:Gv,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function eh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=lr(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(ni(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=lr(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,r),e!==null&&(ni(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=lr(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(ni(e,t,i,n),Nl(e,t,i))}};function Ip(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,s):!0}function Yv(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=_n(e)?Xr:rn.current,i=e.contextTypes,s=(i=i!=null)?$s(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bc.enqueueReplaceState(e,e.state,null)}function th(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=_n(e)?Xr:rn.current,r.context=$s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",i=e;do n+=Ky(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ES=typeof WeakMap=="function"?WeakMap:Map;function $v(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,hh=i),nh(t,e)},n}function qv(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nh(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Np(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ES;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Op(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var wS=Fi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?wv(e,null,n,i):Ks(e,t.child,n,i)}function Fp(t,e,n,i,r){n=n.render;var s=e.ref;return Hs(e,r),i=hd(t,e,n,i,s,r),n=dd(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(vt&&n&&ed(e),e.flags|=1,ln(t,e,i,r),e.child)}function kp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,i,r)):(t=Bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ia(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return ih(t,e,n,i,r)}function Zv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Ns,Rn),Rn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Ns,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Ns,Rn),Rn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Ns,Rn),Rn|=i;return ln(t,e,r,n),e.child}function Qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,i,r){var s=_n(n)?Xr:rn.current;return s=$s(e,s),Hs(e,r),n=hd(t,e,n,i,s,r),i=dd(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Oi(t,e,r)):(vt&&i&&ed(e),e.flags|=1,ln(t,e,n,r),e.child)}function zp(t,e,n,i,r){if(_n(n)){var s=!0;ic(e)}else s=!1;if(Hs(e,r),e.stateNode===null)Fl(t,e),Yv(e,n,i),th(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=_n(n)?Xr:rn.current,c=$s(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Dp(e,o,i,c),qi=!1;var h=e.memoizedState;o.state=h,lc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||qi?(typeof f=="function"&&(eh(e,n,f,i),l=e.memoizedState),(a=qi||Ip(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Av(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=_n(n)?Xr:rn.current,l=$s(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Dp(e,o,i,l),qi=!1,h=e.memoizedState,o.state=h,lc(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||vn.current||qi?(typeof m=="function"&&(eh(e,n,m,i),_=e.memoizedState),(c=qi||Ip(e,n,c,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return rh(t,e,n,i,s,r)}function rh(t,e,n,i,r,s){Qv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&wp(e,n,!1),Oi(t,e,s);i=e.stateNode,wS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&wp(e,n,!0),e.child}function Jv(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),ld(t,e.containerInfo)}function Bp(t,e,n,i,r){return qs(),nd(r),e.flags|=256,ln(t,e,n,i),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function e_(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(xt,r&1),t===null)return Qf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gc(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=oh(n),e.memoizedState=sh,t):gd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sh,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function gd(t,e){return e=Gc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ka(t,e,n,i){return i!==null&&nd(i),Ks(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=bu(Error(oe(422))),ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Gc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=oh(o),e.memoizedState=sh,s);if(!(e.mode&1))return ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=bu(s,i,void 0),ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ni(i,t,r,-1))}return Md(),i=bu(Error(oe(421))),ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Pn=sr(r.nextSibling),Ln=e,vt=!0,Zn=null,t!==null&&(Fn[kn++]=bi,Fn[kn++]=Pi,Fn[kn++]=Yr,bi=t.id,Pi=t.overflow,Yr=e),e=gd(e,i.children),e.flags|=4096,e)}function Hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jf(t.return,e,n)}function Pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function t_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,n,e);else if(t.tag===19)Hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pu(e,!0,n,null,s);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AS(t,e,n){switch(e.tag){case 3:Jv(e),qs();break;case 5:Cv(e);break;case 1:_n(e.type)&&ic(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?e_(t,e,n):(lt(xt,xt.current&1),t=Oi(t,e,n),t!==null?t.sibling:null);lt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return t_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Zv(t,e,n)}return Oi(t,e,n)}var n_,ah,i_,r_;n_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ah=function(){};i_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(mi.current);var s=null;switch(n){case"input":r=bf(t,r),i=bf(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=If(t,r),i=If(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}Nf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ko.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ko.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r_=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CS(t,e,n){var i=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return _n(e.type)&&nc(),Zt(e),null;case 3:return i=e.stateNode,Zs(),pt(vn),pt(rn),ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(mh(Zn),Zn=null))),ah(t,e),Zt(e),null;case 5:cd(e);var r=Br(la.current);if(n=e.type,t!==null&&e.stateNode!=null)i_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Zt(e),null}if(t=Br(mi.current),Oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[fi]=e,i[oa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Oo.length;r++)ht(Oo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":Kd(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":Qd(i,s),ht("invalid",i)}Nf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ua(i.textContent,a,t),r=["children",""+a]):Ko.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":Ca(i),Zd(i,s,!0);break;case"textarea":Ca(i),Jd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[fi]=e,t[oa]=i,n_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uf(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Oo.length;r++)ht(Oo[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":Kd(t,i),r=bf(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":Qd(t,i),r=If(t,i),ht("invalid",t);break;default:r=i}Nf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?U0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ko.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&Bh(t,s,l,o))}switch(n){case"input":Ca(t),Zd(t,i,!1);break;case"textarea":Ca(t),Jd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Fs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Fs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)r_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Br(la.current),Br(mi.current),Oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[fi]=e,(s=i.nodeValue!==n)&&(t=Ln,t!==null))switch(t.tag){case 3:Ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[fi]=e,e.stateNode=i}return Zt(e),null;case 13:if(pt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Pn!==null&&e.mode&1&&!(e.flags&128))Mv(),qs(),e.flags|=98560,s=!1;else if(s=Oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[fi]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Zn!==null&&(mh(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Nt===0&&(Nt=3):Md())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Zs(),ah(t,e),t===null&&ra(e.stateNode.containerInfo),Zt(e),null;case 10:return sd(e.type._context),Zt(e),null;case 17:return _n(e.type)&&nc(),Zt(e),null;case 19:if(pt(xt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Js&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Zt(e),null}else 2*At()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=xt.current,lt(xt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Sd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function RS(t,e){switch(td(e),e.tag){case 1:return _n(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),pt(vn),pt(rn),ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cd(e),null;case 13:if(pt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(xt),null;case 4:return Zs(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var za=!1,tn=!1,bS=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function lh(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Vp=!1;function PS(t,e){if(jf=Ql,t=cv(),Jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xf={focusedElem:t,selectionRange:n},Ql=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:qn(e.type,y),v);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){Tt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return _=Vp,Vp=!1,_}function Xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lh(e,n,s)}r=r.next}while(r!==i)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s_(t){var e=t.alternate;e!==null&&(t.alternate=null,s_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fi],delete e[oa],delete e[qf],delete e[hS],delete e[dS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o_(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}function fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var Wt=null,Kn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)a_(t,e,n),n=n.sibling}function a_(t,e,n){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:tn||Ds(n,e);case 6:var i=Wt,r=Kn;Wt=null,Bi(t,e,n),Wt=i,Kn=r,Wt!==null&&(Kn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Kn?(t=Wt,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),ta(t)):Eu(Wt,n.stateNode));break;case 4:i=Wt,r=Kn,Wt=n.stateNode.containerInfo,Kn=!0,Bi(t,e,n),Wt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lh(n,e,o),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!tn&&(Ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Bi(t,e,n),tn=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(i){var r=zS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Wt=a.stateNode,Kn=!1;break e;case 3:Wt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Wt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Wt===null)throw Error(oe(160));a_(s,o,r),Wt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l_(e,t),e=e.sibling}function l_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ri(t),i&4){try{Xo(3,t,t.return),Hc(3,t)}catch(y){Tt(t,t.return,y)}try{Xo(5,t,t.return)}catch(y){Tt(t,t.return,y)}}break;case 1:jn(e,t),ri(t),i&512&&n!==null&&Ds(n,n.return);break;case 5:if(jn(e,t),ri(t),i&512&&n!==null&&Ds(n,n.return),t.flags&32){var r=t.stateNode;try{Zo(r,"")}catch(y){Tt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&P0(r,s),Uf(a,o);var c=Uf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?U0(r,d):f==="dangerouslySetInnerHTML"?D0(r,d):f==="children"?Zo(r,d):Bh(r,f,d,c)}switch(a){case"input":Pf(r,s);break;case"textarea":L0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Fs(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fs(r,!!s.multiple,s.defaultValue,!0):Fs(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(y){Tt(t,t.return,y)}}break;case 6:if(jn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Tt(t,t.return,y)}}break;case 3:if(jn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(y){Tt(t,t.return,y)}break;case 4:jn(e,t),ri(t);break;case 13:jn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(yd=At())),i&4&&Wp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||f,jn(e,t),tn=c):jn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ye=t,f=t.child;f!==null;){for(d=ye=f;ye!==null;){switch(h=ye,m=h.child,h.tag){case 0:case 11:case 14:case 15:Xo(4,h,h.return);break;case 1:Ds(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){Tt(i,n,y)}}break;case 5:Ds(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(d);continue}}m!==null?(m.return=h,ye=m):Xp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=N0("display",o))}catch(y){Tt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){Tt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:jn(e,t),ri(t),i&4&&Wp(t);break;case 21:break;default:jn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zo(r,""),i.flags&=-33);var s=Gp(t);fh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gp(t);uh(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LS(t,e,n){ye=t,c_(t)}function c_(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||za;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=za;var c=tn;if(za=o,(tn=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?Yp(r):l!==null?(l.return=o,ye=l):Yp(r);for(;s!==null;)ye=s,c_(s),s=s.sibling;ye=r,za=a,tn=c}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):jp(t)}}function jp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}tn||e.flags&512&&ch(e)}catch(h){Tt(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Xp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Yp(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{ch(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var IS=Math.ceil,hc=Fi.ReactCurrentDispatcher,vd=Fi.ReactCurrentOwner,Hn=Fi.ReactCurrentBatchConfig,Qe=0,Vt=null,Lt=null,Yt=0,Rn=0,Ns=_r(0),Nt=0,ha=null,qr=0,Vc=0,_d=0,Yo=null,pn=null,yd=0,Js=1/0,Ai=null,dc=!1,hh=null,ar=null,Ba=!1,er=null,pc=0,$o=0,dh=null,kl=-1,zl=0;function un(){return Qe&6?At():kl!==-1?kl:kl=At()}function lr(t){return t.mode&1?Qe&2&&Yt!==0?Yt&-Yt:mS.transition!==null?(zl===0&&(zl=Y0()),zl):(t=it,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function ni(t,e,n,i){if(50<$o)throw $o=0,dh=null,Error(oe(185));ga(t,n,i),(!(Qe&2)||t!==Vt)&&(t===Vt&&(!(Qe&2)&&(Vc|=n),Nt===4&&Zi(t,Yt)),yn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Js=At()+500,kc&&yr()))}function yn(t,e){var n=t.callbackNode;mx(t,e);var i=Zl(t,t===Vt?Yt:0);if(i===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?pS($p.bind(null,t)):yv($p.bind(null,t)),uS(function(){!(Qe&6)&&yr()}),n=null;else{switch($0(i)){case 1:n=jh;break;case 4:n=j0;break;case 16:n=Kl;break;case 536870912:n=X0;break;default:n=Kl}n=v_(n,u_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u_(t,e){if(kl=-1,zl=0,Qe&6)throw Error(oe(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var i=Zl(t,t===Vt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=Qe;Qe|=2;var s=h_();(Vt!==t||Yt!==e)&&(Ai=null,Js=At()+500,Wr(t,e));do try{US();break}catch(a){f_(t,a)}while(!0);rd(),hc.current=s,Qe=r,Lt!==null?e=0:(Vt=null,Yt=0,e=Nt)}if(e!==0){if(e===2&&(r=Bf(t),r!==0&&(i=r,e=ph(t,r))),e===1)throw n=ha,Wr(t,0),Zi(t,i),yn(t,At()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!DS(r)&&(e=mc(t,i),e===2&&(s=Bf(t),s!==0&&(i=s,e=ph(t,s))),e===1))throw n=ha,Wr(t,0),Zi(t,i),yn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Ir(t,pn,Ai);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=yd+500-At(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$f(Ir.bind(null,t,pn,Ai),e);break}Ir(t,pn,Ai);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IS(i/1960))-i,10<i){t.timeoutHandle=$f(Ir.bind(null,t,pn,Ai),i);break}Ir(t,pn,Ai);break;case 5:Ir(t,pn,Ai);break;default:throw Error(oe(329))}}}return yn(t,At()),t.callbackNode===n?u_.bind(null,t):null}function ph(t,e){var n=Yo;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=pn,pn=n,e!==null&&mh(e)),t}function mh(t){pn===null?pn=t:pn.push.apply(pn,t)}function DS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~_d,e&=~Vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ti(e),i=1<<n;t[n]=-1,e&=~i}}function $p(t){if(Qe&6)throw Error(oe(327));Vs();var e=Zl(t,0);if(!(e&1))return yn(t,At()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=Bf(t);i!==0&&(e=i,n=ph(t,i))}if(n===1)throw n=ha,Wr(t,0),Zi(t,e),yn(t,At()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,pn,Ai),yn(t,At()),null}function xd(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Js=At()+500,kc&&yr())}}function Kr(t){er!==null&&er.tag===0&&!(Qe&6)&&Vs();var e=Qe;Qe|=1;var n=Hn.transition,i=it;try{if(Hn.transition=null,it=1,t)return t()}finally{it=i,Hn.transition=n,Qe=e,!(Qe&6)&&yr()}}function Sd(){Rn=Ns.current,pt(Ns)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cS(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:Zs(),pt(vn),pt(rn),ud();break;case 5:cd(i);break;case 4:Zs();break;case 13:pt(xt);break;case 19:pt(xt);break;case 10:sd(i.type._context);break;case 22:case 23:Sd()}n=n.return}if(Vt=t,Lt=t=cr(t.current,null),Yt=Rn=e,Nt=0,ha=null,_d=Vc=qr=0,pn=Yo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function f_(t,e){do{var n=Lt;try{if(rd(),Ul.current=fc,uc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if($r=0,Bt=Dt=St=null,jo=!1,ca=0,vd.current=null,n===null||n.return===null){Nt=1,ha=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Up(o);if(m!==null){m.flags&=-257,Op(m,o,a,s,e),m.mode&1&&Np(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){Np(s,c,e),Md();break e}l=Error(oe(426))}}else if(vt&&a.mode&1){var v=Up(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Op(v,o,a,s,e),nd(Qs(l,a));break e}}s=l=Qs(l,a),Nt!==4&&(Nt=2),Yo===null?Yo=[s]:Yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=$v(s,l,e);Rp(s,u);break e;case 1:a=l;var g=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ar===null||!ar.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=qv(s,a,e);Rp(s,x);break e}}s=s.return}while(s!==null)}p_(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function h_(){var t=hc.current;return hc.current=fc,t===null?fc:t}function Md(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Vt===null||!(qr&268435455)&&!(Vc&268435455)||Zi(Vt,Yt)}function mc(t,e){var n=Qe;Qe|=2;var i=h_();(Vt!==t||Yt!==e)&&(Ai=null,Wr(t,e));do try{NS();break}catch(r){f_(t,r)}while(!0);if(rd(),Qe=n,hc.current=i,Lt!==null)throw Error(oe(261));return Vt=null,Yt=0,Nt}function NS(){for(;Lt!==null;)d_(Lt)}function US(){for(;Lt!==null&&!ox();)d_(Lt)}function d_(t){var e=g_(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?p_(t):Lt=e,vd.current=null}function p_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=RS(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Lt=null;return}}else if(n=CS(n,e,Rn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Ir(t,e,n){var i=it,r=Hn.transition;try{Hn.transition=null,it=1,OS(t,e,n,i)}finally{Hn.transition=r,it=i}return null}function OS(t,e,n,i){do Vs();while(er!==null);if(Qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gx(t,s),t===Vt&&(Lt=Vt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ba||(Ba=!0,v_(Kl,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=it;it=1;var a=Qe;Qe|=4,vd.current=null,PS(t,n),l_(n,t),nS(Xf),Ql=!!jf,Xf=jf=null,t.current=n,LS(n),ax(),Qe=a,it=o,Hn.transition=s}else t.current=n;if(Ba&&(Ba=!1,er=t,pc=r),s=t.pendingLanes,s===0&&(ar=null),ux(n.stateNode),yn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=hh,hh=null,t;return pc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===dh?$o++:($o=0,dh=t):$o=0,yr(),null}function Vs(){if(er!==null){var t=$0(pc),e=Hn.transition,n=it;try{if(Hn.transition=null,it=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,pc=0,Qe&6)throw Error(oe(331));var r=Qe;for(Qe|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var f=ye;switch(f.tag){case 0:case 11:case 15:Xo(8,f,s)}var d=f.child;if(d!==null)d.return=f,ye=d;else for(;ye!==null;){f=ye;var h=f.sibling,m=f.return;if(s_(f),f===c){ye=null;break}if(h!==null){h.return=m,ye=h;break}ye=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ye=u;break e}ye=s.return}}var g=t.current;for(ye=g;ye!==null;){o=ye;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,ye=p;else e:for(o=g;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(P){Tt(a,a.return,P)}if(a===o){ye=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ye=x;break e}ye=a.return}}if(Qe=r,yr(),pi&&typeof pi.onPostCommitFiberRoot=="function")try{pi.onPostCommitFiberRoot(Dc,t)}catch{}i=!0}return i}finally{it=n,Hn.transition=e}}return!1}function qp(t,e,n){e=Qs(n,e),e=$v(t,e,1),t=or(t,e,1),e=un(),t!==null&&(ga(t,1,e),yn(t,e))}function Tt(t,e,n){if(t.tag===3)qp(t,t,n);else for(;e!==null;){if(e.tag===3){qp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Qs(n,t),t=qv(e,t,1),e=or(e,t,1),t=un(),e!==null&&(ga(e,1,t),yn(e,t));break}}e=e.return}}function FS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Yt&n)===n&&(Nt===4||Nt===3&&(Yt&130023424)===Yt&&500>At()-yd?Wr(t,0):_d|=n),yn(t,e)}function m_(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=un();t=Ui(t,e),t!==null&&(ga(t,e,n),yn(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m_(t,n)}function zS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),m_(t,n)}var g_;g_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,AS(t,e,n);gn=!!(t.flags&131072)}else gn=!1,vt&&e.flags&1048576&&xv(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Fl(t,e),t=e.pendingProps;var r=$s(e,rn.current);Hs(e,n),r=hd(null,e,i,t,r,n);var s=dd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ad(e),r.updater=Bc,e.stateNode=r,r._reactInternals=e,th(e,i,t,n),e=rh(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&ed(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Fl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=HS(i),t=qn(i,t),r){case 0:e=ih(null,e,i,t,n);break e;case 1:e=zp(null,e,i,t,n);break e;case 11:e=Fp(null,e,i,t,n);break e;case 14:e=kp(null,e,i,qn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),ih(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),zp(t,e,i,r,n);case 3:e:{if(Jv(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Av(t,e),lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Qs(Error(oe(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Qs(Error(oe(424)),e),e=Bp(t,e,i,n,r);break e}else for(Pn=sr(e.stateNode.containerInfo.firstChild),Ln=e,vt=!0,Zn=null,n=wv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),i===r){e=Oi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Cv(e),t===null&&Qf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yf(i,r)?o=null:s!==null&&Yf(i,s)&&(e.flags|=32),Qv(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Qf(e),null;case 13:return e_(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Fp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt(oc,i._currentValue),i._currentValue=o,s!==null)if(ii(s.value,o)){if(s.children===r.children&&!vn.current){e=Oi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Hs(e,n),r=Vn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),kp(t,e,i,r,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Fl(t,e),e.tag=1,_n(i)?(t=!0,ic(e)):t=!1,Hs(e,n),Yv(e,i,r),th(e,i,r,n),rh(null,e,i,!0,t,n);case 19:return t_(t,e,n);case 22:return Zv(t,e,n)}throw Error(oe(156,e.tag))};function v_(t,e){return W0(t,e)}function BS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new BS(t,e,n,i)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function HS(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vh)return 11;if(t===Gh)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return jr(n.children,r,s,e);case Hh:o=8,r|=8;break;case Tf:return t=zn(12,n,e,r|2),t.elementType=Tf,t.lanes=s,t;case Af:return t=zn(13,n,e,r),t.elementType=Af,t.lanes=s,t;case Cf:return t=zn(19,n,e,r),t.elementType=Cf,t.lanes=s,t;case C0:return Gc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T0:o=10;break e;case A0:o=9;break e;case Vh:o=11;break e;case Gh:o=14;break e;case $i:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function Gc(t,e,n,i){return t=zn(22,t,i,e),t.elementType=C0,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function wd(t,e,n,i,r,s,o,a,l){return t=new VS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function GS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function __(t){if(!t)return dr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(_n(n))return _v(t,n,e)}return e}function y_(t,e,n,i,r,s,o,a,l){return t=wd(n,i,!0,t,r,s,o,a,l),t.context=__(null),n=t.current,i=un(),r=lr(n),s=Ii(i,r),s.callback=e??null,or(n,s,r),t.current.lanes=r,ga(t,r,i),yn(t,i),t}function Wc(t,e,n,i){var r=e.current,s=un(),o=lr(r);return n=__(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,o),t!==null&&(ni(t,r,o,s),Nl(t,r,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Td(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function WS(){return null}var x_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}jc.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Wc(t,e,null,null)};jc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Wc(null,t,null,null)}),e[Ni]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&J0(t)}};function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function jS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gc(o);s.call(c)}}var o=y_(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=o,t[Ni]=o.current,ra(t.nodeType===8?t.parentNode:t),Kr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gc(l);a.call(c)}}var l=wd(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=l,t[Ni]=l.current,ra(t.nodeType===8?t.parentNode:t),Kr(function(){Wc(e,l,n,i)}),l}function Yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gc(o);a.call(l)}}Wc(e,o,t,r)}else o=jS(n,e,t,r,i);return gc(o)}q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Uo(e.pendingLanes);n!==0&&(Xh(e,n|1),yn(e,At()),!(Qe&6)&&(Js=At()+500,yr()))}break;case 13:Kr(function(){var i=Ui(t,1);if(i!==null){var r=un();ni(i,t,1,r)}}),Td(t,1)}};Yh=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=un();ni(e,t,134217728,n)}Td(t,134217728)}};K0=function(t){if(t.tag===13){var e=lr(t),n=Ui(t,e);if(n!==null){var i=un();ni(n,t,e,i)}Td(t,e)}};Z0=function(){return it};Q0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Ff=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fc(i);if(!r)throw Error(oe(90));b0(i),Pf(i,r)}}}break;case"textarea":L0(t,n);break;case"select":e=n.value,e!=null&&Fs(t,!!n.multiple,e,!1)}};k0=xd;z0=Kr;var XS={usingClientEntryPoint:!1,Events:[_a,Rs,Fc,O0,F0,xd]},Mo={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YS={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V0(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||WS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{Dc=Ha.inject(YS),pi=Ha}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(e))throw Error(oe(200));return GS(t,e,null,n)};Dn.createRoot=function(t,e){if(!Cd(t))throw Error(oe(299));var n=!1,i="",r=x_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=wd(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,ra(t.nodeType===8?t.parentNode:t),new Ad(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=V0(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return Kr(t)};Dn.hydrate=function(t,e,n){if(!Xc(e))throw Error(oe(200));return Yc(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Cd(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=x_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,r,!1,s,o),t[Ni]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new jc(e)};Dn.render=function(t,e,n){if(!Xc(e))throw Error(oe(200));return Yc(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Xc(t))throw Error(oe(40));return t._reactRootContainer?(Kr(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Dn.unstable_batchedUpdates=xd;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Yc(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(t){console.error(t)}}S_(),S0.exports=Dn;var $S=S0.exports,M_,Qp=$S;M_=Qp.createRoot,Qp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="165",rs={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qS=0,Jp=1,KS=2,E_=1,ZS=2,Ti=3,pr=0,xn=1,Qn=2,ur=0,Gs=1,em=2,tm=3,nm=4,QS=5,Ur=100,JS=101,eM=102,tM=103,nM=104,iM=200,rM=201,sM=202,oM=203,gh=204,vh=205,aM=206,lM=207,cM=208,uM=209,fM=210,hM=211,dM=212,pM=213,mM=214,gM=0,vM=1,_M=2,vc=3,yM=4,xM=5,SM=6,MM=7,w_=0,EM=1,wM=2,fr=0,TM=1,AM=2,CM=3,RM=4,bM=5,PM=6,LM=7,T_=300,eo=301,to=302,_h=303,yh=304,$c=306,xh=1e3,Hr=1001,Sh=1002,Bn=1003,IM=1004,Va=1005,Jn=1006,Du=1007,Vr=1008,mr=1009,DM=1010,NM=1011,_c=1012,A_=1013,no=1014,tr=1015,qc=1016,C_=1017,R_=1018,io=1020,UM=35902,OM=1021,FM=1022,di=1023,kM=1024,zM=1025,Ws=1026,ro=1027,BM=1028,b_=1029,HM=1030,P_=1031,L_=1033,Nu=33776,Uu=33777,Ou=33778,Fu=33779,im=35840,rm=35841,sm=35842,om=35843,am=36196,lm=37492,cm=37496,um=37808,fm=37809,hm=37810,dm=37811,pm=37812,mm=37813,gm=37814,vm=37815,_m=37816,ym=37817,xm=37818,Sm=37819,Mm=37820,Em=37821,ku=36492,wm=36494,Tm=36495,VM=36283,Am=36284,Cm=36285,Rm=36286,GM=3200,WM=3201,I_=0,jM=1,Qi="",ci="srgb",xr="srgb-linear",bd="display-p3",Kc="display-p3-linear",yc="linear",dt="srgb",xc="rec709",Sc="p3",os=7680,bm=519,XM=512,YM=513,$M=514,D_=515,qM=516,KM=517,ZM=518,QM=519,Pm=35044,Lm="300 es",Li=2e3,Mc=2001;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=Math.PI/180,Mh=180/Math.PI;function xa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function JM(t,e){return(t%e+e)%e}function zu(t,e,n){return(1-n)*t+n*e}function Eo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const e1={DEG2RAD:Hl};class Le{constructor(e=0,n=0){Le.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],y=r[0],v=r[3],u=r[6],g=r[1],p=r[4],x=r[7],P=r[2],M=r[5],T=r[8];return s[0]=o*y+a*g+l*P,s[3]=o*v+a*p+l*M,s[6]=o*u+a*x+l*T,s[1]=c*y+f*g+d*P,s[4]=c*v+f*p+d*M,s[7]=c*u+f*x+d*T,s[2]=h*y+m*g+_*P,s[5]=h*v+m*p+_*M,s[8]=h*u+m*x+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,m=c*s-o*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bu=new Xe;function N_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function t1(){const t=Ec("canvas");return t.style.display="block",t}const Im={};function U_(t){t in Im||(Im[t]=!0,console.warn(t))}function n1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Dm=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nm=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ga={[xr]:{transfer:yc,primaries:xc,toReference:t=>t,fromReference:t=>t},[ci]:{transfer:dt,primaries:xc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Kc]:{transfer:yc,primaries:Sc,toReference:t=>t.applyMatrix3(Nm),fromReference:t=>t.applyMatrix3(Dm)},[bd]:{transfer:dt,primaries:Sc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Nm),fromReference:t=>t.applyMatrix3(Dm).convertLinearToSRGB()}},i1=new Set([xr,Kc]),nt={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!i1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ga[e].toReference,r=Ga[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ga[t].primaries},getTransfer:function(t){return t===Qi?yc:Ga[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let as;class r1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Ec("canvas")),as.width=e.width,as.height=e.height;const i=as.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=as}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let s1=0;class O_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vu(r[o].image)):s.push(Vu(r[o]))}else s=Vu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?r1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o1=0;class Sn extends ts{constructor(e=Sn.DEFAULT_IMAGE,n=Sn.DEFAULT_MAPPING,i=Hr,r=Hr,s=Jn,o=Vr,a=di,l=mr,c=Sn.DEFAULT_ANISOTROPY,f=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=xa(),this.name="",this.source=new O_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xh:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xh:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=T_;Sn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,n=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(c+1)/2,x=(m+1)/2,P=(u+1)/2,M=(f+h)/4,T=(d+y)/4,C=(_+v)/4;return p>x&&p>P?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=M/i,s=T/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=M/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=C/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-_)*(v-_)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(d-y)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a1 extends ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ht(0,0,e,n),this.scissorTest=!1,this.viewport=new Ht(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new O_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends a1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class F_ extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l1 extends Sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(d!==y||l!==h||c!==m||f!==_){let v=1-a;const u=l*h+c*m+f*_+d*y,g=u>=0?1:-1,p=1-u*u;if(p>Number.EPSILON){const P=Math.sqrt(p),M=Math.atan2(P,u*g);v=Math.sin(v*M)/P,a=Math.sin(a*M)/P}const x=a*g;if(l=l*v+h*x,c=c*v+m*x,f=f*v+_*x,d=d*v+y*x,v===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=P,c*=P,f*=P,d*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-a*m,e[n+2]=c*_+f*m+a*h-l*d,e[n+3]=f*_-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Um.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new L,Um=new jt;class Sa{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xn):Xn.fromBufferAttribute(s,o),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ja.subVectors(this.max,wo),ls.subVectors(e.a,wo),cs.subVectors(e.b,wo),us.subVectors(e.c,wo),Hi.subVectors(cs,ls),Vi.subVectors(us,cs),wr.subVectors(ls,us);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-wr.z,wr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,wr.z,0,-wr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-wr.y,wr.x,0];return!Wu(n,ls,cs,us,ja)||(n=[1,0,0,0,1,0,0,0,1],!Wu(n,ls,cs,us,ja))?!1:(Xa.crossVectors(Hi,Vi),n=[Xa.x,Xa.y,Xa.z],Wu(n,ls,cs,us,ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new L,new L,new L,new L,new L,new L,new L,new L],Xn=new L,Wa=new Sa,ls=new L,cs=new L,us=new L,Hi=new L,Vi=new L,wr=new L,wo=new L,ja=new L,Xa=new L,Tr=new L;function Wu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),f=i.dot(Tr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const c1=new Sa,To=new L,ju=new L;class Zc{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):c1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(To,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(ju)),this.expandByPoint(To.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new L,Xu=new L,Ya=new L,Gi=new L,Yu=new L,$a=new L,$u=new L;class Qc{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xu.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ya),a=Gi.dot(this.direction),l=-Gi.dot(Ya),c=Gi.lengthSq(),f=Math.abs(1-o*o);let d,h,m,_;if(f>0)if(d=o*l-a,h=o*a-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const y=1/f;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xu).addScaledVector(Ya,h),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){Yu.subVectors(n,e),$a.subVectors(i,e),$u.crossVectors(Yu,$a);let o=this.direction.dot($u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot($a.crossVectors(Gi,$a));if(l<0)return null;const c=a*this.direction.dot(Yu.cross(Gi));if(c<0||l+c>o)return null;const f=-a*Gi.dot($u);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,m,_,y,v){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,m,_,y,v)}set(e,n,i,r,s,o,a,l,c,f,d,h,m,_,y,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,m=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,y=c*d;n[0]=h+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=m*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,m=o*d,_=a*f,y=a*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=_*d+m,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u1,e,f1)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Wi.crossVectors(i,An),Wi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wi.crossVectors(i,An)),Wi.normalize(),qa.crossVectors(An,Wi),r[0]=Wi.x,r[4]=qa.x,r[8]=An.x,r[1]=Wi.y,r[5]=qa.y,r[9]=An.y,r[2]=Wi.z,r[6]=qa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],y=i[6],v=i[10],u=i[14],g=i[3],p=i[7],x=i[11],P=i[15],M=r[0],T=r[4],C=r[8],A=r[12],E=r[1],I=r[5],O=r[9],B=r[13],q=r[2],X=r[6],Y=r[10],J=r[14],N=r[3],K=r[7],G=r[11],se=r[15];return s[0]=o*M+a*E+l*q+c*N,s[4]=o*T+a*I+l*X+c*K,s[8]=o*C+a*O+l*Y+c*G,s[12]=o*A+a*B+l*J+c*se,s[1]=f*M+d*E+h*q+m*N,s[5]=f*T+d*I+h*X+m*K,s[9]=f*C+d*O+h*Y+m*G,s[13]=f*A+d*B+h*J+m*se,s[2]=_*M+y*E+v*q+u*N,s[6]=_*T+y*I+v*X+u*K,s[10]=_*C+y*O+v*Y+u*G,s[14]=_*A+y*B+v*J+u*se,s[3]=g*M+p*E+x*q+P*N,s[7]=g*T+p*I+x*X+P*K,s[11]=g*C+p*O+x*Y+P*G,s[15]=g*A+p*B+x*J+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],y=e[7],v=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*f-s*l*f)+v*(+n*c*d-n*a*m-s*o*d+i*o*m+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],y=e[13],v=e[14],u=e[15],g=d*v*c-y*h*c+y*l*m-a*v*m-d*l*u+a*h*u,p=_*h*c-f*v*c-_*l*m+o*v*m+f*l*u-o*h*u,x=f*y*c-_*d*c+_*a*m-o*y*m-f*a*u+o*d*u,P=_*d*l-f*y*l-_*a*h+o*y*h+f*a*v-o*d*v,M=n*g+i*p+r*x+s*P;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(y*h*s-d*v*s-y*r*m+i*v*m+d*r*u-i*h*u)*T,e[2]=(a*v*s-y*l*s+y*r*c-i*v*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*m-i*l*m)*T,e[4]=p*T,e[5]=(f*v*s-_*h*s+_*r*m-n*v*m-f*r*u+n*h*u)*T,e[6]=(_*l*s-o*v*s-_*r*c+n*v*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*m+n*l*m)*T,e[8]=x*T,e[9]=(_*d*s-f*y*s-_*i*m+n*y*m+f*i*u-n*d*u)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*m-n*a*m)*T,e[12]=P*T,e[13]=(f*y*r-_*d*r+_*i*h-n*y*h-f*i*v+n*d*v)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*v-n*a*v)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,m=s*f,_=s*d,y=o*f,v=o*d,u=a*d,g=l*c,p=l*f,x=l*d,P=i.x,M=i.y,T=i.z;return r[0]=(1-(y+u))*P,r[1]=(m+x)*P,r[2]=(_-p)*P,r[3]=0,r[4]=(m-x)*M,r[5]=(1-(h+u))*M,r[6]=(v+g)*M,r[7]=0,r[8]=(_+p)*T,r[9]=(v-g)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,f=1/o,d=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=f,Yn.elements[5]*=f,Yn.elements[6]*=f,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,n.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Li){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===Li)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Mc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Li){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,m=(i+r)*f;let _,y;if(a===Li)_=(o+s)*d,y=-2*d;else if(a===Mc)_=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fs=new L,Yn=new mt,u1=new L(0,0,0),f1=new L(1,1,1),Wi=new L,qa=new L,An=new L,Om=new mt,Fm=new jt;class Wn{constructor(e=0,n=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Fm.setFromEuler(this),this.setFromQuaternion(Fm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h1=0;const km=new L,hs=new jt,xi=new mt,Ka=new L,Ao=new L,d1=new L,p1=new jt,zm=new L(1,0,0),Bm=new L(0,1,0),Hm=new L(0,0,1),Vm={type:"added"},m1={type:"removed"},ds={type:"childadded",child:null},qu={type:"childremoved",child:null};class ct extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new L,n=new Wn,i=new jt,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Xe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,n){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ao,Ka,this.up):xi.lookAt(Ka,Ao,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(xi),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m1),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,d1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,p1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DEFAULT_UP=new L(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new L,Si=new L,Ku=new L,Mi=new L,ps=new L,ms=new L,Gm=new L,Zu=new L,Qu=new L,Ju=new L;class hi{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Si.subVectors(i,n),Ku.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Si),l=$n.dot(Ku),c=Si.dot(Si),f=Si.dot(Ku),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Si.subVectors(e,n),$n.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),$n.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ps.subVectors(r,i),ms.subVectors(s,i),Zu.subVectors(e,i);const l=ps.dot(Zu),c=ms.dot(Zu);if(l<=0&&c<=0)return n.copy(i);Qu.subVectors(e,r);const f=ps.dot(Qu),d=ms.dot(Qu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(ps,o);Ju.subVectors(e,s);const m=ps.dot(Ju),_=ms.dot(Ju);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(ms,a);const v=f*_-m*d;if(v<=0&&d-f>=0&&m-_>=0)return Gm.subVectors(s,r),a=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(Gm,a);const u=1/(v+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ef(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=JM(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ef(o,s,e+1/3),this.g=ef(o,s,e),this.b=ef(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=ci){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const i=k_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Hu(e.r),this.g=Hu(e.g),this.b=Hu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return nt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(cn(Jt.r*255,0,255))*65536+Math.round(cn(Jt.g*255,0,255))*256+Math.round(cn(Jt.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=ci){nt.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Za);const i=zu(ji.h,Za.h,n),r=zu(ji.s,Za.s,n),s=zu(ji.l,Za.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ke;Ke.NAMES=k_;let g1=0;class uo extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=Gs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=vh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gh&&(i.blendSrc=this.blendSrc),this.blendDst!==vh&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qr extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new L,Qa=new Le;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return U_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qa.fromBufferAttribute(this,n),Qa.applyMatrix3(e),this.setXY(n,Qa.x,Qa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Eo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Eo(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Eo(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Eo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Eo(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pm&&(e.usage=this.usage),e}}class z_ extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class B_ extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class st extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let v1=0;const On=new mt,tf=new ct,gs=new L,Cn=new Sa,Co=new Sa,kt=new L;class qt extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v1++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?B_:z_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return tf.lookAt(e),tf.updateMatrix(),this.applyMatrix4(tf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Cn.min,Co.min),Cn.expandByPoint(kt),kt.addVectors(Cn.max,Co.max),Cn.expandByPoint(kt)):(Cn.expandByPoint(Co.min),Cn.expandByPoint(Co.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)kt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),kt.add(gs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new L,l[C]=new L;const c=new L,f=new L,d=new L,h=new Le,m=new Le,_=new Le,y=new L,v=new L;function u(C,A,E){c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,E),h.fromBufferAttribute(s,C),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,E),f.sub(c),d.sub(c),m.sub(h),_.sub(h);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(I),v.copy(d).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(I),a[C].add(y),a[A].add(y),a[E].add(y),l[C].add(v),l[A].add(v),l[E].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,A=g.length;C<A;++C){const E=g[C],I=E.start,O=E.count;for(let B=I,q=I+O;B<q;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const p=new L,x=new L,P=new L,M=new L;function T(C){P.fromBufferAttribute(r,C),M.copy(P);const A=a[C];p.copy(A),p.sub(P.multiplyScalar(P.dot(A))).normalize(),x.crossVectors(M,A);const I=x.dot(l[C])<0?-1:1;o.setXYZW(C,p.x,p.y,p.z,I)}for(let C=0,A=g.length;C<A;++C){const E=g[C],I=E.start,O=E.count;for(let B=I,q=I+O;B<q;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,d=new L;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(f),l.add(f),c.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new gi(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new mt,Ar=new Qc,Ja=new Zc,jm=new L,vs=new L,_s=new L,ys=new L,nf=new L,el=new L,tl=new Le,nl=new Le,il=new Le,Xm=new L,Ym=new L,$m=new L,rl=new L,sl=new L;class me extends ct{constructor(e=new qt,n=new Qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){el.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(nf.fromBufferAttribute(d,e),o?el.addScaledVector(nf,f):el.addScaledVector(nf.sub(n),f))}n.add(el)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Ja.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ja,jm)===null||Ar.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const v=h[_],u=o[v.materialIndex],g=Math.max(v.start,m.start),p=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let x=g,P=p;x<P;x+=3){const M=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);r=ol(this,u,e,i,c,f,d,M,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const g=a.getX(v),p=a.getX(v+1),x=a.getX(v+2);r=ol(this,o,e,i,c,f,d,g,p,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const v=h[_],u=o[v.materialIndex],g=Math.max(v.start,m.start),p=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let x=g,P=p;x<P;x+=3){const M=x,T=x+1,C=x+2;r=ol(this,u,e,i,c,f,d,M,T,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const g=v,p=v+1,x=v+2;r=ol(this,o,e,i,c,f,d,g,p,x),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function _1(t,e,n,i,r,s,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pr,a),l===null)return null;sl.copy(a),sl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sl);return c<n.near||c>n.far?null:{distance:c,point:sl.clone(),object:t}}function ol(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,vs),t.getVertexPosition(l,_s),t.getVertexPosition(c,ys);const f=_1(t,e,n,i,vs,_s,ys,rl);if(f){r&&(tl.fromBufferAttribute(r,a),nl.fromBufferAttribute(r,l),il.fromBufferAttribute(r,c),f.uv=hi.getInterpolation(rl,vs,_s,ys,tl,nl,il,new Le)),s&&(tl.fromBufferAttribute(s,a),nl.fromBufferAttribute(s,l),il.fromBufferAttribute(s,c),f.uv1=hi.getInterpolation(rl,vs,_s,ys,tl,nl,il,new Le)),o&&(Xm.fromBufferAttribute(o,a),Ym.fromBufferAttribute(o,l),$m.fromBufferAttribute(o,c),f.normal=hi.getInterpolation(rl,vs,_s,ys,Xm,Ym,$m,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};hi.getNormal(vs,_s,ys,d.normal),f.face=d}return f}class yt extends qt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(d,2));function _(y,v,u,g,p,x,P,M,T,C,A){const E=x/T,I=P/C,O=x/2,B=P/2,q=M/2,X=T+1,Y=C+1;let J=0,N=0;const K=new L;for(let G=0;G<Y;G++){const se=G*I-B;for(let xe=0;xe<X;xe++){const He=xe*E-O;K[y]=He*g,K[v]=se*p,K[u]=q,c.push(K.x,K.y,K.z),K[y]=0,K[v]=0,K[u]=M>0?1:-1,f.push(K.x,K.y,K.z),d.push(xe/T),d.push(1-G/C),J+=1}}for(let G=0;G<C;G++)for(let se=0;se<T;se++){const xe=h+se+X*G,He=h+se+X*(G+1),Z=h+(se+1)+X*(G+1),re=h+(se+1)+X*G;l.push(xe,He,re),l.push(He,Z,re),N+=6}a.addGroup(m,N,A),m+=N,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function y1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function H_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const x1={clone:so,merge:an};var S1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S1,this.fragmentShader=M1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=y1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class V_ extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new L,qm=new Le,Km=new Le;class bn extends V_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(Hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,qm,Km),n.subVectors(Km,qm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xs=-90,Ss=1;class E1 extends ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(xs,Ss,e,n);r.layers=this.layers,this.add(r);const s=new bn(xs,Ss,e,n);s.layers=this.layers,this.add(s);const o=new bn(xs,Ss,e,n);o.layers=this.layers,this.add(o);const a=new bn(xs,Ss,e,n);a.layers=this.layers,this.add(a);const l=new bn(xs,Ss,e,n);l.layers=this.layers,this.add(l);const c=new bn(xs,Ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class G_ extends Sn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:eo,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class w1 extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new G_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yt(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:ur});s.uniforms.tEquirect.value=n;const o=new me(r,s),a=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Jn),new E1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const rf=new L,T1=new L,A1=new Xe;class Ri{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rf.subVectors(i,n).cross(T1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||A1.getNormalMatrix(e),r=this.coplanarPoint(rf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Zc,al=new L;class Ld{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],y=r[10],v=r[11],u=r[12],g=r[13],p=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,v-m,x-u).normalize(),i[1].setComponents(l+s,h+c,v+m,x+u).normalize(),i[2].setComponents(l+o,h+f,v+_,x+g).normalize(),i[3].setComponents(l-o,h-f,v-_,x-g).normalize(),i[4].setComponents(l-a,h-d,v-y,x-p).normalize(),n===Li)i[5].setComponents(l+a,h+d,v+y,x+p).normalize();else if(n===Mc)i[5].setComponents(a,d,y,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function C1(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,f),h.length!==0){for(let m=0,_=h.length;m<_;m++){const y=h[m];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class fo extends qt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,m=[],_=[],y=[],v=[];for(let u=0;u<f;u++){const g=u*h-o;for(let p=0;p<c;p++){const x=p*d-s;_.push(x,-g,0),y.push(0,0,1),v.push(p/a),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const p=g+c*u,x=g+c*(u+1),P=g+1+c*(u+1),M=g+1+c*u;m.push(p,x,M),m.push(x,P,M)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,F1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,V1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,J1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",sE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,AE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:R1,alphahash_pars_fragment:b1,alphamap_fragment:P1,alphamap_pars_fragment:L1,alphatest_fragment:I1,alphatest_pars_fragment:D1,aomap_fragment:N1,aomap_pars_fragment:U1,batching_pars_vertex:O1,batching_vertex:F1,begin_vertex:k1,beginnormal_vertex:z1,bsdfs:B1,iridescence_fragment:H1,bumpmap_pars_fragment:V1,clipping_planes_fragment:G1,clipping_planes_pars_fragment:W1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:X1,color_fragment:Y1,color_pars_fragment:$1,color_pars_vertex:q1,color_vertex:K1,common:Z1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:J1,displacementmap_pars_vertex:eE,displacementmap_vertex:tE,emissivemap_fragment:nE,emissivemap_pars_fragment:iE,colorspace_fragment:rE,colorspace_pars_fragment:sE,envmap_fragment:oE,envmap_common_pars_fragment:aE,envmap_pars_fragment:lE,envmap_pars_vertex:cE,envmap_physical_pars_fragment:xE,envmap_vertex:uE,fog_vertex:fE,fog_pars_vertex:hE,fog_fragment:dE,fog_pars_fragment:pE,gradientmap_pars_fragment:mE,lightmap_pars_fragment:gE,lights_lambert_fragment:vE,lights_lambert_pars_fragment:_E,lights_pars_begin:yE,lights_toon_fragment:SE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:wE,lights_physical_fragment:TE,lights_physical_pars_fragment:AE,lights_fragment_begin:CE,lights_fragment_maps:RE,lights_fragment_end:bE,logdepthbuf_fragment:PE,logdepthbuf_pars_fragment:LE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:DE,map_fragment:NE,map_pars_fragment:UE,map_particle_fragment:OE,map_particle_pars_fragment:FE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:zE,morphinstance_vertex:BE,morphcolor_vertex:HE,morphnormal_vertex:VE,morphtarget_pars_vertex:GE,morphtarget_vertex:WE,normal_fragment_begin:jE,normal_fragment_maps:XE,normal_pars_fragment:YE,normal_pars_vertex:$E,normal_vertex:qE,normalmap_pars_fragment:KE,clearcoat_normal_fragment_begin:ZE,clearcoat_normal_fragment_maps:QE,clearcoat_pars_fragment:JE,iridescence_pars_fragment:ew,opaque_fragment:tw,packing:nw,premultiplied_alpha_fragment:iw,project_vertex:rw,dithering_fragment:sw,dithering_pars_fragment:ow,roughnessmap_fragment:aw,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:uw,shadowmap_vertex:fw,shadowmask_pars_fragment:hw,skinbase_vertex:dw,skinning_pars_vertex:pw,skinning_vertex:mw,skinnormal_vertex:gw,specularmap_fragment:vw,specularmap_pars_fragment:_w,tonemapping_fragment:yw,tonemapping_pars_fragment:xw,transmission_fragment:Sw,transmission_pars_fragment:Mw,uv_pars_fragment:Ew,uv_pars_vertex:ww,uv_vertex:Tw,worldpos_vertex:Aw,background_vert:Cw,background_frag:Rw,backgroundCube_vert:bw,backgroundCube_frag:Pw,cube_vert:Lw,cube_frag:Iw,depth_vert:Dw,depth_frag:Nw,distanceRGBA_vert:Uw,distanceRGBA_frag:Ow,equirect_vert:Fw,equirect_frag:kw,linedashed_vert:zw,linedashed_frag:Bw,meshbasic_vert:Hw,meshbasic_frag:Vw,meshlambert_vert:Gw,meshlambert_frag:Ww,meshmatcap_vert:jw,meshmatcap_frag:Xw,meshnormal_vert:Yw,meshnormal_frag:$w,meshphong_vert:qw,meshphong_frag:Kw,meshphysical_vert:Zw,meshphysical_frag:Qw,meshtoon_vert:Jw,meshtoon_frag:eT,points_vert:tT,points_frag:nT,shadow_vert:iT,shadow_frag:rT,sprite_vert:sT,sprite_frag:oT},pe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ui={basic:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:an([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:an([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:an([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:an([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:an([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:an([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:an([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:an([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:an([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:an([pe.lights,pe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ui.physical={uniforms:an([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ll={r:0,b:0,g:0},Rr=new Wn,aT=new mt;function lT(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,c,f,d=null,h=0,m=null;function _(g){let p=g.isScene===!0?g.background:null;return p&&p.isTexture&&(p=(g.backgroundBlurriness>0?n:e).get(p)),p}function y(g){let p=!1;const x=_(g);x===null?u(a,l):x&&x.isColor&&(u(x,1),p=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||p)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(g,p){const x=_(p);x&&(x.isCubeTexture||x.mapping===$c)?(f===void 0&&(f=new me(new yt(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:so(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Rr.copy(p.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(Rr)),f.material.toneMapped=nt.getTransfer(x.colorSpace)!==dt,(d!==x||h!==x.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=x,h=x.version,m=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new me(new fo(2,2),new gr({name:"BackgroundMaterial",uniforms:so(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=nt.getTransfer(x.colorSpace)!==dt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,p){g.getRGB(ll,H_(t)),i.buffers.color.setClear(ll.r,ll.g,ll.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:y,addToRenderList:v}}function cT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,I,O,B,q){let X=!1;const Y=d(B,O,I);s!==Y&&(s=Y,c(s.object)),X=m(E,B,O,q),X&&_(E,B,O,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(E,I,O,B),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function f(E){return t.deleteVertexArray(E)}function d(E,I,O){const B=O.wireframe===!0;let q=i[E.id];q===void 0&&(q={},i[E.id]=q);let X=q[I.id];X===void 0&&(X={},q[I.id]=X);let Y=X[B];return Y===void 0&&(Y=h(l()),X[B]=Y),Y}function h(E){const I=[],O=[],B=[];for(let q=0;q<n;q++)I[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:B,object:E,attributes:{},index:null}}function m(E,I,O,B){const q=s.attributes,X=I.attributes;let Y=0;const J=O.getAttributes();for(const N in J)if(J[N].location>=0){const G=q[N];let se=X[N];if(se===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),G===void 0||G.attribute!==se||se&&G.data!==se.data)return!0;Y++}return s.attributesNum!==Y||s.index!==B}function _(E,I,O,B){const q={},X=I.attributes;let Y=0;const J=O.getAttributes();for(const N in J)if(J[N].location>=0){let G=X[N];G===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(G=E.instanceColor));const se={};se.attribute=G,G&&G.data&&(se.data=G.data),q[N]=se,Y++}s.attributes=q,s.attributesNum=Y,s.index=B}function y(){const E=s.newAttributes;for(let I=0,O=E.length;I<O;I++)E[I]=0}function v(E){u(E,0)}function u(E,I){const O=s.newAttributes,B=s.enabledAttributes,q=s.attributeDivisors;O[E]=1,B[E]===0&&(t.enableVertexAttribArray(E),B[E]=1),q[E]!==I&&(t.vertexAttribDivisor(E,I),q[E]=I)}function g(){const E=s.newAttributes,I=s.enabledAttributes;for(let O=0,B=I.length;O<B;O++)I[O]!==E[O]&&(t.disableVertexAttribArray(O),I[O]=0)}function p(E,I,O,B,q,X,Y){Y===!0?t.vertexAttribIPointer(E,I,O,q,X):t.vertexAttribPointer(E,I,O,B,q,X)}function x(E,I,O,B){y();const q=B.attributes,X=O.getAttributes(),Y=I.defaultAttributeValues;for(const J in X){const N=X[J];if(N.location>=0){let K=q[J];if(K===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){const G=K.normalized,se=K.itemSize,xe=e.get(K);if(xe===void 0)continue;const He=xe.buffer,Z=xe.type,re=xe.bytesPerElement,he=Z===t.INT||Z===t.UNSIGNED_INT||K.gpuType===A_;if(K.isInterleavedBufferAttribute){const ae=K.data,ee=ae.stride,le=K.offset;if(ae.isInstancedInterleavedBuffer){for(let Se=0;Se<N.locationSize;Se++)u(N.location+Se,ae.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<N.locationSize;Se++)v(N.location+Se);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Se=0;Se<N.locationSize;Se++)p(N.location+Se,se/N.locationSize,Z,G,ee*re,(le+se/N.locationSize*Se)*re,he)}else{if(K.isInstancedBufferAttribute){for(let ae=0;ae<N.locationSize;ae++)u(N.location+ae,K.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ae=0;ae<N.locationSize;ae++)v(N.location+ae);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ae=0;ae<N.locationSize;ae++)p(N.location+ae,se/N.locationSize,Z,G,se*re,se/N.locationSize*ae*re,he)}}else if(Y!==void 0){const G=Y[J];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(N.location,G);break;case 3:t.vertexAttrib3fv(N.location,G);break;case 4:t.vertexAttrib4fv(N.location,G);break;default:t.vertexAttrib1fv(N.location,G)}}}}g()}function P(){C();for(const E in i){const I=i[E];for(const O in I){const B=I[O];for(const q in B)f(B[q].object),delete B[q];delete I[O]}delete i[E]}}function M(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const O in I){const B=I[O];for(const q in B)f(B[q].object),delete B[q];delete I[O]}delete i[E.id]}function T(E){for(const I in i){const O=i[I];if(O[E.id]===void 0)continue;const B=O[E.id];for(const q in B)f(B[q].object),delete B[q];delete O[E.id]}}function C(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:v,disableUnusedAttributes:g}}function uT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<d;m++)this.render(c[m],f[m]);else{h.multiDrawArraysWEBGL(i,c,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=f[_];n.update(m,i,1)}}function l(c,f,d,h){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],f[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let y=0;y<d;y++)_+=f[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==di&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const T=M===qc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==mr&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==tr&&!T)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),p=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:p,vertexTextures:x,maxSamples:P}}function hT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ri,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!v)s?f(null):c();else{const g=s?0:i,p=g*4;let x=u.clippingState||null;l.value=x,x=f(_,h,p,m);for(let P=0;P!==p;++P)x[P]=n[P];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const u=m+y*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<u)&&(v=new Float32Array(u));for(let p=0,x=m;p!==y;++p,x+=4)o.copy(d[p]).applyMatrix4(g,a),o.normal.toArray(v,x),v[x+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function dT(t){let e=new WeakMap;function n(o,a){return a===_h?o.mapping=eo:a===yh&&(o.mapping=to),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===_h||a===yh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new w1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class j_ extends V_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,Zm=[.125,.215,.35,.446,.526,.582],Or=20,sf=new j_,Qm=new Ke;let of=null,af=0,lf=0,cf=!1;const Dr=(1+Math.sqrt(5))/2,Ms=1/Dr,Jm=[new L(-Dr,Ms,0),new L(Dr,Ms,0),new L(-Ms,0,Dr),new L(Ms,0,Dr),new L(0,Dr,-Ms),new L(0,Dr,Ms),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),this._renderer.xr.enabled=cf,e.scissorTest=!1,cl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===eo||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:qc,format:di,colorSpace:xr,depthBuffer:!1},r=tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pT(s)),this._blurMaterial=mT(s,e,n)}return r}_compileMaterial(e){const n=new me(this._lodPlanes[0],e);this._renderer.compile(n,sf)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Qm),f.toneMapping=fr,f.autoClear=!1;const m=new Qr({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),_=new me(new yt,m);let y=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,y=!0):(m.color.copy(Qm),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const p=this._cubeSize;cl(r,g*p,u>2?p:0,p,p),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===eo||e.mapping===to;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,sf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jm[(r-s-1)%Jm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new me(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Or-1),y=s/_,v=isFinite(s)?1+Math.floor(f*y):Or;v>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Or}`);const u=[];let g=0;for(let T=0;T<Or;++T){const C=T/y,A=Math.exp(-C*C/2);u.push(A),T===0?g+=A:T<v&&(g+=2*A)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:p}=this;h.dTheta.value=_,h.mipInt.value=p-i;const x=this._sizeLods[r],P=3*x*(r>p-Us?r-p+Us:0),M=4*(this._cubeSize-x);cl(n,P,M,3*x,2*x),l.setRenderTarget(n),l.render(d,sf)}}function pT(t){const e=[],n=[],i=[];let r=t;const s=t-Us+1+Zm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Us?l=Zm[o-t+Us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,y=3,v=2,u=1,g=new Float32Array(y*_*m),p=new Float32Array(v*_*m),x=new Float32Array(u*_*m);for(let M=0;M<m;M++){const T=M%3*2/3-1,C=M>2?0:-1,A=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(A,y*_*M),p.set(h,v*_*M);const E=[M,M,M,M,M,M];x.set(E,u*_*M)}const P=new qt;P.setAttribute("position",new gi(g,y)),P.setAttribute("uv",new gi(p,v)),P.setAttribute("faceIndex",new gi(x,u)),e.push(P),r>Us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tg(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mT(t,e,n){const i=new Float32Array(Or),r=new L(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function ng(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function ig(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===_h||l===yh,f=l===eo||l===to;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new eg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new eg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&U_("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _T(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let v=0,u=y.length;v<u;v++)e.remove(y[v])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const y=m[_];for(let v=0,u=y.length;v<u;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let p=0,x=g.length;p<x;p+=3){const P=g[p+0],M=g[p+1],T=g[p+2];h.push(P,M,M,T,T,P)}}else if(_!==void 0){const g=_.array;y=_.version;for(let p=0,x=g.length/3-1;p<x;p+=3){const P=p+0,M=p+1,T=p+2;h.push(P,M,M,T,T,P)}}else return;const v=new(N_(h)?B_:z_)(h,1);v.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,v)}function f(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function yT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*o),n.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,h*o,_),n.update(m,i,_))}function f(h,m,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_;v++)this.render(h[v]/o,m[v]);else{y.multiDrawElementsWEBGL(i,m,0,s,h,0,_);let v=0;for(let u=0;u<_;u++)v+=m[u];n.update(v,i,1)}}function d(h,m,_,y){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],y[u]);else{v.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,y,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g];for(let g=0;g<y.length;g++)n.update(u,i,y[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function xT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ST(t,e,n){const i=new WeakMap,r=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),v===!0&&(x=3);let P=a.attributes.position.count*x,M=1;P>e.maxTextureSize&&(M=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*M*4*d),C=new F_(T,P,M,d);C.type=tr,C.needsUpdate=!0;const A=x*4;for(let I=0;I<d;I++){const O=u[I],B=g[I],q=p[I],X=P*M*4*I;for(let Y=0;Y<O.count;Y++){const J=Y*A;_===!0&&(r.fromBufferAttribute(O,Y),T[X+J+0]=r.x,T[X+J+1]=r.y,T[X+J+2]=r.z,T[X+J+3]=0),y===!0&&(r.fromBufferAttribute(B,Y),T[X+J+4]=r.x,T[X+J+5]=r.y,T[X+J+6]=r.z,T[X+J+7]=0),v===!0&&(r.fromBufferAttribute(q,Y),T[X+J+8]=r.x,T[X+J+9]=r.y,T[X+J+10]=r.z,T[X+J+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Le(P,M)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let v=0;v<c.length;v++)_+=c[v];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function MT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class X_ extends Sn{constructor(e,n,i,r,s,o,a,l,c,f=Ws){if(f!==Ws&&f!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ws&&(i=no),i===void 0&&f===ro&&(i=io),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Y_=new Sn,$_=new X_(1,1);$_.compareFunction=D_;const q_=new F_,K_=new l1,Z_=new G_,rg=[],sg=[],og=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=rg[r];if(s===void 0&&(s=new Float32Array(r),rg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jc(t,e){let n=sg[e];n===void 0&&(n=new Int32Array(e),sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ET(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function TT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;lg.set(i),t.uniformMatrix2fv(this.addr,!1,lg),Ot(n,i)}}function RT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;ag.set(i),t.uniformMatrix3fv(this.addr,!1,ag),Ot(n,i)}}function bT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ut(n,i))return;og.set(i),t.uniformMatrix4fv(this.addr,!1,og),Ot(n,i)}}function PT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?$_:Y_;n.setTexture2D(e||s,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||K_,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z_,r)}function HT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||q_,r)}function VT(t){switch(t){case 5126:return ET;case 35664:return wT;case 35665:return TT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return bT;case 5124:case 35670:return PT;case 35667:case 35671:return LT;case 35668:case 35672:return IT;case 35669:case 35673:return DT;case 5125:return NT;case 36294:return UT;case 36295:return OT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}function GT(t,e){t.uniform1fv(this.addr,e)}function WT(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function jT(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function XT(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function YT(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function $T(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qT(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KT(t,e){t.uniform1iv(this.addr,e)}function ZT(t,e){t.uniform2iv(this.addr,e)}function QT(t,e){t.uniform3iv(this.addr,e)}function JT(t,e){t.uniform4iv(this.addr,e)}function eA(t,e){t.uniform1uiv(this.addr,e)}function tA(t,e){t.uniform2uiv(this.addr,e)}function nA(t,e){t.uniform3uiv(this.addr,e)}function iA(t,e){t.uniform4uiv(this.addr,e)}function rA(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Y_,s[o])}function sA(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||K_,s[o])}function oA(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Z_,s[o])}function aA(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||q_,s[o])}function lA(t){switch(t){case 5126:return GT;case 35664:return WT;case 35665:return jT;case 35666:return XT;case 35674:return YT;case 35675:return $T;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return aA}}class cA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VT(n.type)}}class uA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lA(n.type)}}class fA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function hA(t,e,n){const i=t.name,r=i.length;for(uf.lastIndex=0;;){const s=uf.exec(i),o=uf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cg(n,c===void 0?new cA(a,t,e):new uA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new fA(a),cg(n,d)),n=d}}}class Vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);hA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ug(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dA=37297;let pA=0;function mA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gA(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Sc&&n===xc?i="LinearDisplayP3ToLinearSRGB":e===xc&&n===Sc&&(i="LinearSRGBToLinearDisplayP3"),t){case xr:case Kc:return[i,"LinearTransferOETF"];case ci:case bd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function fg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mA(t.getShaderSource(e),o)}else return r}function vA(t,e){const n=gA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _A(t,e){let n;switch(e){case TM:n="Linear";break;case AM:n="Reinhard";break;case CM:n="OptimizedCineon";break;case RM:n="ACESFilmic";break;case PM:n="AgX";break;case LM:n="Neutral";break;case bM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function xA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function SA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fo(t){return t!==""}function hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(t){return t.replace(MA,wA)}const EA=new Map;function wA(t,e){let n=je[e];if(n===void 0){const i=EA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(n)}const TA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(t){return t.replace(TA,AA)}function AA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ZS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function RA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case eo:case to:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case to:e="ENVMAP_MODE_REFRACTION";break}return e}function PA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case w_:e="ENVMAP_BLENDING_MULTIPLY";break;case EM:e="ENVMAP_BLENDING_MIX";break;case wM:e="ENVMAP_BLENDING_ADD";break}return e}function LA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function IA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=CA(n),c=RA(n),f=bA(n),d=PA(n),h=LA(n),m=yA(n),_=xA(s),y=r.createProgram();let v,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fo).join(`
`),v.length>0&&(v+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fo).join(`
`),u.length>0&&(u+=`
`)):(v=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),u=[mg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?je.tonemapping_pars_fragment:"",n.toneMapping!==fr?_A("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,vA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Eh(o),o=hg(o,n),o=dg(o,n),a=Eh(a),a=hg(a,n),a=dg(a,n),o=pg(o),a=pg(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,u=["#define varying in",n.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const p=g+v+o,x=g+u+a,P=ug(r,r.VERTEX_SHADER,p),M=ug(r,r.FRAGMENT_SHADER,x);r.attachShader(y,P),r.attachShader(y,M),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(I){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(M).trim();let X=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,M);else{const J=fg(r,P,"vertex"),N=fg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+J+`
`+N)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||q==="")&&(Y=!1);Y&&(I.diagnostics={runnable:X,programLog:O,vertexShader:{log:B,prefix:v},fragmentShader:{log:q,prefix:u}})}r.deleteShader(P),r.deleteShader(M),C=new Vl(r,y),A=SA(r,y)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,dA)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=M,this}let DA=0;class NA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new UA(e),n.set(e,i)),i}}class UA{constructor(e){this.id=DA++,this.code=e,this.usedTimes=0}}function OA(t,e,n,i,r,s,o){const a=new Pd,l=new NA,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(A){return c.add(A),A===0?"uv":`uv${A}`}function v(A,E,I,O,B){const q=O.fog,X=B.geometry,Y=A.isMeshStandardMaterial?O.environment:null,J=(A.isMeshStandardMaterial?n:e).get(A.envMap||Y),N=J&&J.mapping===$c?J.image.height:null,K=_[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=G!==void 0?G.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let He,Z,re,he;if(K){const Je=ui[K];He=Je.vertexShader,Z=Je.fragmentShader}else He=A.vertexShader,Z=A.fragmentShader,l.update(A),re=l.getVertexShaderID(A),he=l.getFragmentShaderID(A);const ae=t.getRenderTarget(),ee=B.isInstancedMesh===!0,le=B.isBatchedMesh===!0,Se=!!A.map,D=!!A.matcap,Fe=!!J,Re=!!A.aoMap,Ze=!!A.lightMap,we=!!A.bumpMap,Ge=!!A.normalMap,Ve=!!A.displacementMap,ke=!!A.emissiveMap,at=!!A.metalnessMap,b=!!A.roughnessMap,w=A.anisotropy>0,F=A.clearcoat>0,Q=A.dispersion>0,te=A.iridescence>0,ne=A.sheen>0,_e=A.transmission>0,ue=w&&!!A.anisotropyMap,de=F&&!!A.clearcoatMap,ze=F&&!!A.clearcoatNormalMap,ce=F&&!!A.clearcoatRoughnessMap,Me=te&&!!A.iridescenceMap,We=te&&!!A.iridescenceThicknessMap,be=ne&&!!A.sheenColorMap,ge=ne&&!!A.sheenRoughnessMap,Be=!!A.specularMap,Oe=!!A.specularColorMap,ut=!!A.specularIntensityMap,S=_e&&!!A.transmissionMap,j=_e&&!!A.thicknessMap,H=!!A.gradientMap,$=!!A.alphaMap,ie=A.alphaTest>0,Ae=!!A.alphaHash,De=!!A.extensions;let ft=fr;A.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ft=t.toneMapping);const Ct={shaderID:K,shaderType:A.type,shaderName:A.name,vertexShader:He,fragmentShader:Z,defines:A.defines,customVertexShaderID:re,customFragmentShaderID:he,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:le,batchingColor:le&&B._colorsTexture!==null,instancing:ee,instancingColor:ee&&B.instanceColor!==null,instancingMorph:ee&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:xr,alphaToCoverage:!!A.alphaToCoverage,map:Se,matcap:D,envMap:Fe,envMapMode:Fe&&J.mapping,envMapCubeUVHeight:N,aoMap:Re,lightMap:Ze,bumpMap:we,normalMap:Ge,displacementMap:h&&Ve,emissiveMap:ke,normalMapObjectSpace:Ge&&A.normalMapType===jM,normalMapTangentSpace:Ge&&A.normalMapType===I_,metalnessMap:at,roughnessMap:b,anisotropy:w,anisotropyMap:ue,clearcoat:F,clearcoatMap:de,clearcoatNormalMap:ze,clearcoatRoughnessMap:ce,dispersion:Q,iridescence:te,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:ne,sheenColorMap:be,sheenRoughnessMap:ge,specularMap:Be,specularColorMap:Oe,specularIntensityMap:ut,transmission:_e,transmissionMap:S,thicknessMap:j,gradientMap:H,opaque:A.transparent===!1&&A.blending===Gs&&A.alphaToCoverage===!1,alphaMap:$,alphaTest:ie,alphaHash:Ae,combine:A.combine,mapUv:Se&&y(A.map.channel),aoMapUv:Re&&y(A.aoMap.channel),lightMapUv:Ze&&y(A.lightMap.channel),bumpMapUv:we&&y(A.bumpMap.channel),normalMapUv:Ge&&y(A.normalMap.channel),displacementMapUv:Ve&&y(A.displacementMap.channel),emissiveMapUv:ke&&y(A.emissiveMap.channel),metalnessMapUv:at&&y(A.metalnessMap.channel),roughnessMapUv:b&&y(A.roughnessMap.channel),anisotropyMapUv:ue&&y(A.anisotropyMap.channel),clearcoatMapUv:de&&y(A.clearcoatMap.channel),clearcoatNormalMapUv:ze&&y(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&y(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(A.iridescenceMap.channel),iridescenceThicknessMapUv:We&&y(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(A.sheenColorMap.channel),sheenRoughnessMapUv:ge&&y(A.sheenRoughnessMap.channel),specularMapUv:Be&&y(A.specularMap.channel),specularColorMapUv:Oe&&y(A.specularColorMap.channel),specularIntensityMapUv:ut&&y(A.specularIntensityMap.channel),transmissionMapUv:S&&y(A.transmissionMap.channel),thicknessMapUv:j&&y(A.thicknessMap.channel),alphaMapUv:$&&y(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ge||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(Se||$),fog:!!q,useFog:A.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,decodeVideoTexture:Se&&A.map.isVideoTexture===!0&&nt.getTransfer(A.map.colorSpace)===dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Qn,flipSided:A.side===xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:De&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:De&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function u(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)E.push(I),E.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(g(E,A),p(E,A),E.push(t.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function g(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function p(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),A.push(a.mask)}function x(A){const E=_[A.type];let I;if(E){const O=ui[E];I=x1.clone(O.uniforms)}else I=A.uniforms;return I}function P(A,E){let I;for(let O=0,B=f.length;O<B;O++){const q=f[O];if(q.cacheKey===E){I=q,++I.usedTimes;break}}return I===void 0&&(I=new IA(t,E,A,s),f.push(I)),I}function M(A){if(--A.usedTimes===0){const E=f.indexOf(A);f[E]=f[f.length-1],f.pop(),A.destroy()}}function T(A){l.remove(A)}function C(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:x,acquireProgram:P,releaseProgram:M,releaseShaderCache:T,programs:f,dispose:C}}function FA(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function gg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,m,_,y,v){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:y,group:v},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=y,u.group=v),e++,u}function a(d,h,m,_,y,v){const u=o(d,h,m,_,y,v);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,y,v){const u=o(d,h,m,_,y,v);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||kA),i.length>1&&i.sort(h||gg),r.length>1&&r.sort(h||gg)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function zA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new vg,t.set(i,[o])):r>=s.length?(o=new vg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function BA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ke};break;case"SpotLight":n={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function HA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let VA=0;function GA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WA(t){const e=new BA,n=HA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new mt,o=new mt;function a(c){let f=0,d=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,y=0,v=0,u=0,g=0,p=0,x=0,P=0,M=0,T=0;c.sort(GA);for(let A=0,E=c.length;A<E;A++){const I=c[A],O=I.color,B=I.intensity,q=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=O.r*B,d+=O.g*B,h+=O.b*B;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(I.sh.coefficients[Y],B);T++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,N=n.get(I);N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=I.shadow.matrix,g++}i.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(O).multiplyScalar(B),Y.distance=q,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,i.spot[y]=Y;const J=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,J.updateMatrices(I),I.castShadow&&M++),i.spotLightMatrix[y]=J.matrix,I.castShadow){const N=n.get(I);N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=X,x++}y++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(O).multiplyScalar(B),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=Y,v++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const J=I.shadow,N=n.get(I);N.shadowBias=J.bias,N.shadowNormalBias=J.normalBias,N.shadowRadius=J.radius,N.shadowMapSize=J.mapSize,N.shadowCameraNear=J.camera.near,N.shadowCameraFar=J.camera.far,i.pointShadow[_]=N,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=I.shadow.matrix,p++}i.point[_]=Y,_++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(B),Y.groundColor.copy(I.groundColor).multiplyScalar(B),i.hemi[u]=Y,u++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==y||C.rectAreaLength!==v||C.hemiLength!==u||C.numDirectionalShadows!==g||C.numPointShadows!==p||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=p,i.pointShadowMap.length=p,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=p,i.spotLightMatrix.length=x+P-M,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=T,C.directionalLength=m,C.pointLength=_,C.spotLength=y,C.rectAreaLength=v,C.hemiLength=u,C.numDirectionalShadows=g,C.numPointShadows=p,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=T,i.version=VA++)}function l(c,f){let d=0,h=0,m=0,_=0,y=0;const v=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const p=c[u];if(p.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),d++}else if(p.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(v),m++}else if(p.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(v),o.identity(),s.copy(p.matrixWorld),s.premultiply(v),o.extractRotation(s),x.halfWidth.set(p.width*.5,0,0),x.halfHeight.set(0,p.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(p.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(p.matrixWorld),x.position.applyMatrix4(v),h++}else if(p.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(p.matrixWorld),x.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function _g(t){const e=new WA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _g(t),e.set(r,[a])):s>=o.length?(a=new _g(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class XA extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YA extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KA(t,e,n){let i=new Ld;const r=new Le,s=new Le,o=new Ht,a=new XA({depthPacking:WM}),l=new YA,c={},f=n.maxTextureSize,d={[pr]:xn,[xn]:pr,[Qn]:Qn},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:$A,fragmentShader:qA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new me(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E_;let u=this.type;this.render=function(M,T,C){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||M.length===0)return;const A=t.getRenderTarget(),E=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),O=t.state;O.setBlending(ur),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==Ti&&this.type===Ti,q=u===Ti&&this.type!==Ti;for(let X=0,Y=M.length;X<Y;X++){const J=M[X],N=J.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||B===!0||q===!0){const se=this.type!==Ti?{minFilter:Bn,magFilter:Bn}:{};N.map!==null&&N.map.dispose(),N.map=new Zr(r.x,r.y,se),N.map.texture.name=J.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const G=N.getViewportCount();for(let se=0;se<G;se++){const xe=N.getViewport(se);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),O.viewport(o),N.updateMatrices(J,se),i=N.getFrustum(),x(T,C,N.camera,J,this.type)}N.isPointLightShadow!==!0&&this.type===Ti&&g(N,C),N.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(A,E,I)};function g(M,T){const C=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(T,null,C,h,y,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(T,null,C,m,y,null)}function p(M,T,C,A){let E=null;const I=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)E=I;else if(E=C.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=E.uuid,B=T.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let X=q[B];X===void 0&&(X=E.clone(),q[B]=X,T.addEventListener("dispose",P)),E=X}if(E.visible=T.visible,E.wireframe=T.wireframe,A===Ti?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=t.properties.get(E);O.light=C}return E}function x(M,T,C,A,E){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Ti)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const B=e.update(M),q=M.material;if(Array.isArray(q)){const X=B.groups;for(let Y=0,J=X.length;Y<J;Y++){const N=X[Y],K=q[N.materialIndex];if(K&&K.visible){const G=p(M,K,A,E);M.onBeforeShadow(t,M,T,C,B,G,N),t.renderBufferDirect(C,null,B,G,M,N),M.onAfterShadow(t,M,T,C,B,G,N)}}}else if(q.visible){const X=p(M,q,A,E);M.onBeforeShadow(t,M,T,C,B,X,null),t.renderBufferDirect(C,null,B,X,M,null),M.onAfterShadow(t,M,T,C,B,X,null)}}const O=M.children;for(let B=0,q=O.length;B<q;B++)x(O[B],T,C,A,E)}function P(M){M.target.removeEventListener("dispose",P);for(const C in c){const A=c[C],E=M.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}function ZA(t){function e(){let S=!1;const j=new Ht;let H=null;const $=new Ht(0,0,0,0);return{setMask:function(ie){H!==ie&&!S&&(t.colorMask(ie,ie,ie,ie),H=ie)},setLocked:function(ie){S=ie},setClear:function(ie,Ae,De,ft,Ct){Ct===!0&&(ie*=ft,Ae*=ft,De*=ft),j.set(ie,Ae,De,ft),$.equals(j)===!1&&(t.clearColor(ie,Ae,De,ft),$.copy(j))},reset:function(){S=!1,H=null,$.set(-1,0,0,0)}}}function n(){let S=!1,j=null,H=null,$=null;return{setTest:function(ie){ie?he(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(ie){j!==ie&&!S&&(t.depthMask(ie),j=ie)},setFunc:function(ie){if(H!==ie){switch(ie){case gM:t.depthFunc(t.NEVER);break;case vM:t.depthFunc(t.ALWAYS);break;case _M:t.depthFunc(t.LESS);break;case vc:t.depthFunc(t.LEQUAL);break;case yM:t.depthFunc(t.EQUAL);break;case xM:t.depthFunc(t.GEQUAL);break;case SM:t.depthFunc(t.GREATER);break;case MM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ie}},setLocked:function(ie){S=ie},setClear:function(ie){$!==ie&&(t.clearDepth(ie),$=ie)},reset:function(){S=!1,j=null,H=null,$=null}}}function i(){let S=!1,j=null,H=null,$=null,ie=null,Ae=null,De=null,ft=null,Ct=null;return{setTest:function(Je){S||(Je?he(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Je){j!==Je&&!S&&(t.stencilMask(Je),j=Je)},setFunc:function(Je,Rt,bt){(H!==Je||$!==Rt||ie!==bt)&&(t.stencilFunc(Je,Rt,bt),H=Je,$=Rt,ie=bt)},setOp:function(Je,Rt,bt){(Ae!==Je||De!==Rt||ft!==bt)&&(t.stencilOp(Je,Rt,bt),Ae=Je,De=Rt,ft=bt)},setLocked:function(Je){S=Je},setClear:function(Je){Ct!==Je&&(t.clearStencil(Je),Ct=Je)},reset:function(){S=!1,j=null,H=null,$=null,ie=null,Ae=null,De=null,ft=null,Ct=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],m=null,_=!1,y=null,v=null,u=null,g=null,p=null,x=null,P=null,M=new Ke(0,0,0),T=0,C=!1,A=null,E=null,I=null,O=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=Y>=2);let N=null,K={};const G=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),xe=new Ht().fromArray(G),He=new Ht().fromArray(se);function Z(S,j,H,$){const ie=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(S,Ae),t.texParameteri(S,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(S,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<H;De++)S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,$,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(j+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Ae}const re={};re[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(vc),we(!1),Ge(Jp),he(t.CULL_FACE),Re(ur);function he(S){c[S]!==!0&&(t.enable(S),c[S]=!0)}function ae(S){c[S]!==!1&&(t.disable(S),c[S]=!1)}function ee(S,j){return f[S]!==j?(t.bindFramebuffer(S,j),f[S]=j,S===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=j),S===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=j),!0):!1}function le(S,j){let H=h,$=!1;if(S){H=d.get(j),H===void 0&&(H=[],d.set(j,H));const ie=S.textures;if(H.length!==ie.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,De=ie.length;Ae<De;Ae++)H[Ae]=t.COLOR_ATTACHMENT0+Ae;H.length=ie.length,$=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,$=!0);$&&t.drawBuffers(H)}function Se(S){return m!==S?(t.useProgram(S),m=S,!0):!1}const D={[Ur]:t.FUNC_ADD,[JS]:t.FUNC_SUBTRACT,[eM]:t.FUNC_REVERSE_SUBTRACT};D[tM]=t.MIN,D[nM]=t.MAX;const Fe={[iM]:t.ZERO,[rM]:t.ONE,[sM]:t.SRC_COLOR,[gh]:t.SRC_ALPHA,[fM]:t.SRC_ALPHA_SATURATE,[cM]:t.DST_COLOR,[aM]:t.DST_ALPHA,[oM]:t.ONE_MINUS_SRC_COLOR,[vh]:t.ONE_MINUS_SRC_ALPHA,[uM]:t.ONE_MINUS_DST_COLOR,[lM]:t.ONE_MINUS_DST_ALPHA,[hM]:t.CONSTANT_COLOR,[dM]:t.ONE_MINUS_CONSTANT_COLOR,[pM]:t.CONSTANT_ALPHA,[mM]:t.ONE_MINUS_CONSTANT_ALPHA};function Re(S,j,H,$,ie,Ae,De,ft,Ct,Je){if(S===ur){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(he(t.BLEND),_=!0),S!==QS){if(S!==y||Je!==C){if((v!==Ur||p!==Ur)&&(t.blendEquation(t.FUNC_ADD),v=Ur,p=Ur),Je)switch(S){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.ONE,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case em:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case tm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}u=null,g=null,x=null,P=null,M.set(0,0,0),T=0,y=S,C=Je}return}ie=ie||j,Ae=Ae||H,De=De||$,(j!==v||ie!==p)&&(t.blendEquationSeparate(D[j],D[ie]),v=j,p=ie),(H!==u||$!==g||Ae!==x||De!==P)&&(t.blendFuncSeparate(Fe[H],Fe[$],Fe[Ae],Fe[De]),u=H,g=$,x=Ae,P=De),(ft.equals(M)===!1||Ct!==T)&&(t.blendColor(ft.r,ft.g,ft.b,Ct),M.copy(ft),T=Ct),y=S,C=!1}function Ze(S,j){S.side===Qn?ae(t.CULL_FACE):he(t.CULL_FACE);let H=S.side===xn;j&&(H=!H),we(H),S.blending===Gs&&S.transparent===!1?Re(ur):Re(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),s.setFunc(S.depthFunc),s.setTest(S.depthTest),s.setMask(S.depthWrite),r.setMask(S.colorWrite);const $=S.stencilWrite;o.setTest($),$&&(o.setMask(S.stencilWriteMask),o.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),o.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ke(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function we(S){A!==S&&(S?t.frontFace(t.CW):t.frontFace(t.CCW),A=S)}function Ge(S){S!==qS?(he(t.CULL_FACE),S!==E&&(S===Jp?t.cullFace(t.BACK):S===KS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),E=S}function Ve(S){S!==I&&(X&&t.lineWidth(S),I=S)}function ke(S,j,H){S?(he(t.POLYGON_OFFSET_FILL),(O!==j||B!==H)&&(t.polygonOffset(j,H),O=j,B=H)):ae(t.POLYGON_OFFSET_FILL)}function at(S){S?he(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function b(S){S===void 0&&(S=t.TEXTURE0+q-1),N!==S&&(t.activeTexture(S),N=S)}function w(S,j,H){H===void 0&&(N===null?H=t.TEXTURE0+q-1:H=N);let $=K[H];$===void 0&&($={type:void 0,texture:void 0},K[H]=$),($.type!==S||$.texture!==j)&&(N!==H&&(t.activeTexture(H),N=H),t.bindTexture(S,j||re[S]),$.type=S,$.texture=j)}function F(){const S=K[N];S!==void 0&&S.type!==void 0&&(t.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function be(S){xe.equals(S)===!1&&(t.scissor(S.x,S.y,S.z,S.w),xe.copy(S))}function ge(S){He.equals(S)===!1&&(t.viewport(S.x,S.y,S.z,S.w),He.copy(S))}function Be(S,j){let H=l.get(j);H===void 0&&(H=new WeakMap,l.set(j,H));let $=H.get(S);$===void 0&&($=t.getUniformBlockIndex(j,S.name),H.set(S,$))}function Oe(S,j){const $=l.get(j).get(S);a.get(j)!==$&&(t.uniformBlockBinding(j,$,S.__bindingPointIndex),a.set(j,$))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,K={},f={},d=new WeakMap,h=[],m=null,_=!1,y=null,v=null,u=null,g=null,p=null,x=null,P=null,M=new Ke(0,0,0),T=0,C=!1,A=null,E=null,I=null,O=null,B=null,xe.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:ae,bindFramebuffer:ee,drawBuffers:le,useProgram:Se,setBlending:Re,setMaterial:Ze,setFlipSided:we,setCullFace:Ge,setLineWidth:Ve,setPolygonOffset:ke,setScissorTest:at,activeTexture:b,bindTexture:w,unbindTexture:F,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:Me,texImage3D:We,updateUBOMapping:Be,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:ce,texSubImage2D:ne,texSubImage3D:_e,compressedTexSubImage2D:ue,compressedTexSubImage3D:de,scissor:be,viewport:ge,reset:ut}}function QA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return m?new OffscreenCanvas(b,w):Ec("canvas")}function y(b,w,F){let Q=1;const te=at(b);if((te.width>F||te.height>F)&&(Q=F/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(Q*te.width),_e=Math.floor(Q*te.height);d===void 0&&(d=_(ne,_e));const ue=w?_(ne,_e):d;return ue.width=ne,ue.height=_e,ue.getContext("2d").drawImage(b,0,0,ne,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+_e+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),b;return b}function v(b){return b.generateMipmaps&&b.minFilter!==Bn&&b.minFilter!==Jn}function u(b){t.generateMipmap(b)}function g(b,w,F,Q,te=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=w;if(w===t.RED&&(F===t.FLOAT&&(ne=t.R32F),F===t.HALF_FLOAT&&(ne=t.R16F),F===t.UNSIGNED_BYTE&&(ne=t.R8)),w===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(ne=t.R8UI),F===t.UNSIGNED_SHORT&&(ne=t.R16UI),F===t.UNSIGNED_INT&&(ne=t.R32UI),F===t.BYTE&&(ne=t.R8I),F===t.SHORT&&(ne=t.R16I),F===t.INT&&(ne=t.R32I)),w===t.RG&&(F===t.FLOAT&&(ne=t.RG32F),F===t.HALF_FLOAT&&(ne=t.RG16F),F===t.UNSIGNED_BYTE&&(ne=t.RG8)),w===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(ne=t.RG8UI),F===t.UNSIGNED_SHORT&&(ne=t.RG16UI),F===t.UNSIGNED_INT&&(ne=t.RG32UI),F===t.BYTE&&(ne=t.RG8I),F===t.SHORT&&(ne=t.RG16I),F===t.INT&&(ne=t.RG32I)),w===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),w===t.RGBA){const _e=te?yc:nt.getTransfer(Q);F===t.FLOAT&&(ne=t.RGBA32F),F===t.HALF_FLOAT&&(ne=t.RGBA16F),F===t.UNSIGNED_BYTE&&(ne=_e===dt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function p(b,w){let F;return b?w===null||w===no||w===io?F=t.DEPTH24_STENCIL8:w===tr?F=t.DEPTH32F_STENCIL8:w===_c&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===no||w===io?F=t.DEPTH_COMPONENT24:w===tr?F=t.DEPTH_COMPONENT32F:w===_c&&(F=t.DEPTH_COMPONENT16),F}function x(b,w){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==Bn&&b.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function P(b){const w=b.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&f.delete(w)}function M(b){const w=b.target;w.removeEventListener("dispose",M),A(w)}function T(b){const w=i.get(b);if(w.__webglInit===void 0)return;const F=b.source,Q=h.get(F);if(Q){const te=Q[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(b),Object.keys(Q).length===0&&h.delete(F)}i.remove(b)}function C(b){const w=i.get(b);t.deleteTexture(w.__webglTexture);const F=b.source,Q=h.get(F);delete Q[w.__cacheKey],o.memory.textures--}function A(b){const w=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let te=0;te<w.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(w.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[Q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const F=b.textures;for(let Q=0,te=F.length;Q<te;Q++){const ne=i.get(F[Q]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(F[Q])}i.remove(b)}let E=0;function I(){E=0}function O(){const b=E;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),E+=1,b}function B(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function q(b,w){const F=i.get(b);if(b.isVideoTexture&&Ve(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(F,b,w);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+w)}function X(b,w){const F=i.get(b);if(b.version>0&&F.__version!==b.version){He(F,b,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+w)}function Y(b,w){const F=i.get(b);if(b.version>0&&F.__version!==b.version){He(F,b,w);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+w)}function J(b,w){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Z(F,b,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+w)}const N={[xh]:t.REPEAT,[Hr]:t.CLAMP_TO_EDGE,[Sh]:t.MIRRORED_REPEAT},K={[Bn]:t.NEAREST,[IM]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[Jn]:t.LINEAR,[Du]:t.LINEAR_MIPMAP_NEAREST,[Vr]:t.LINEAR_MIPMAP_LINEAR},G={[XM]:t.NEVER,[QM]:t.ALWAYS,[YM]:t.LESS,[D_]:t.LEQUAL,[$M]:t.EQUAL,[ZM]:t.GEQUAL,[qM]:t.GREATER,[KM]:t.NOTEQUAL};function se(b,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===Du||w.magFilter===Va||w.magFilter===Vr||w.minFilter===Jn||w.minFilter===Du||w.minFilter===Va||w.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,N[w.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,N[w.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,N[w.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[w.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,G[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Bn||w.minFilter!==Va&&w.minFilter!==Vr||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function xe(b,w){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",P));const Q=w.source;let te=h.get(Q);te===void 0&&(te={},h.set(Q,te));const ne=B(w);if(ne!==b.__cacheKey){te[ne]===void 0&&(te[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),te[ne].usedTimes++;const _e=te[b.__cacheKey];_e!==void 0&&(te[b.__cacheKey].usedTimes--,_e.usedTimes===0&&C(w)),b.__cacheKey=ne,b.__webglTexture=te[ne].texture}return F}function He(b,w,F){let Q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=t.TEXTURE_3D);const te=xe(b,w),ne=w.source;n.bindTexture(Q,b.__webglTexture,t.TEXTURE0+F);const _e=i.get(ne);if(ne.version!==_e.__version||te===!0){n.activeTexture(t.TEXTURE0+F);const ue=nt.getPrimaries(nt.workingColorSpace),de=w.colorSpace===Qi?null:nt.getPrimaries(w.colorSpace),ze=w.colorSpace===Qi||ue===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ce=y(w.image,!1,r.maxTextureSize);ce=ke(w,ce);const Me=s.convert(w.format,w.colorSpace),We=s.convert(w.type);let be=g(w.internalFormat,Me,We,w.colorSpace,w.isVideoTexture);se(Q,w);let ge;const Be=w.mipmaps,Oe=w.isVideoTexture!==!0,ut=_e.__version===void 0||te===!0,S=ne.dataReady,j=x(w,ce);if(w.isDepthTexture)be=p(w.format===ro,w.type),ut&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,be,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,Me,We,null));else if(w.isDataTexture)if(Be.length>0){Oe&&ut&&n.texStorage2D(t.TEXTURE_2D,j,be,Be[0].width,Be[0].height);for(let H=0,$=Be.length;H<$;H++)ge=Be[H],Oe?S&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ge.width,ge.height,Me,We,ge.data):n.texImage2D(t.TEXTURE_2D,H,be,ge.width,ge.height,0,Me,We,ge.data);w.generateMipmaps=!1}else Oe?(ut&&n.texStorage2D(t.TEXTURE_2D,j,be,ce.width,ce.height),S&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Me,We,ce.data)):n.texImage2D(t.TEXTURE_2D,0,be,ce.width,ce.height,0,Me,We,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Oe&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,j,be,Be[0].width,Be[0].height,ce.depth);for(let H=0,$=Be.length;H<$;H++)if(ge=Be[H],w.format!==di)if(Me!==null)if(Oe){if(S)if(w.layerUpdates.size>0){for(const ie of w.layerUpdates){const Ae=ge.width*ge.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,ie,ge.width,ge.height,1,Me,ge.data.slice(Ae*ie,Ae*(ie+1)),0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,ce.depth,Me,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,be,ge.width,ge.height,ce.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?S&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,ce.depth,Me,We,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,be,ge.width,ge.height,ce.depth,0,Me,We,ge.data)}else{Oe&&ut&&n.texStorage2D(t.TEXTURE_2D,j,be,Be[0].width,Be[0].height);for(let H=0,$=Be.length;H<$;H++)ge=Be[H],w.format!==di?Me!==null?Oe?S&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,ge.width,ge.height,Me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,H,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?S&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ge.width,ge.height,Me,We,ge.data):n.texImage2D(t.TEXTURE_2D,H,be,ge.width,ge.height,0,Me,We,ge.data)}else if(w.isDataArrayTexture)if(Oe){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,j,be,ce.width,ce.height,ce.depth),S)if(w.layerUpdates.size>0){let H;switch(We){case t.UNSIGNED_BYTE:switch(Me){case t.ALPHA:H=1;break;case t.LUMINANCE:H=1;break;case t.LUMINANCE_ALPHA:H=2;break;case t.RGB:H=3;break;case t.RGBA:H=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:H=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const $=ce.width*ce.height*H;for(const ie of w.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,ce.width,ce.height,1,Me,We,ce.data.slice($*ie,$*(ie+1)));w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Me,We,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,Me,We,ce.data);else if(w.isData3DTexture)Oe?(ut&&n.texStorage3D(t.TEXTURE_3D,j,be,ce.width,ce.height,ce.depth),S&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Me,We,ce.data)):n.texImage3D(t.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,Me,We,ce.data);else if(w.isFramebufferTexture){if(ut)if(Oe)n.texStorage2D(t.TEXTURE_2D,j,be,ce.width,ce.height);else{let H=ce.width,$=ce.height;for(let ie=0;ie<j;ie++)n.texImage2D(t.TEXTURE_2D,ie,be,H,$,0,Me,We,null),H>>=1,$>>=1}}else if(Be.length>0){if(Oe&&ut){const H=at(Be[0]);n.texStorage2D(t.TEXTURE_2D,j,be,H.width,H.height)}for(let H=0,$=Be.length;H<$;H++)ge=Be[H],Oe?S&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Me,We,ge):n.texImage2D(t.TEXTURE_2D,H,be,Me,We,ge);w.generateMipmaps=!1}else if(Oe){if(ut){const H=at(ce);n.texStorage2D(t.TEXTURE_2D,j,be,H.width,H.height)}S&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,We,ce)}else n.texImage2D(t.TEXTURE_2D,0,be,Me,We,ce);v(w)&&u(Q),_e.__version=ne.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Z(b,w,F){if(w.image.length!==6)return;const Q=xe(b,w),te=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+F);const ne=i.get(te);if(te.version!==ne.__version||Q===!0){n.activeTexture(t.TEXTURE0+F);const _e=nt.getPrimaries(nt.workingColorSpace),ue=w.colorSpace===Qi?null:nt.getPrimaries(w.colorSpace),de=w.colorSpace===Qi||_e===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const ze=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,Me=[];for(let $=0;$<6;$++)!ze&&!ce?Me[$]=y(w.image[$],!0,r.maxCubemapSize):Me[$]=ce?w.image[$].image:w.image[$],Me[$]=ke(w,Me[$]);const We=Me[0],be=s.convert(w.format,w.colorSpace),ge=s.convert(w.type),Be=g(w.internalFormat,be,ge,w.colorSpace),Oe=w.isVideoTexture!==!0,ut=ne.__version===void 0||Q===!0,S=te.dataReady;let j=x(w,We);se(t.TEXTURE_CUBE_MAP,w);let H;if(ze){Oe&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,j,Be,We.width,We.height);for(let $=0;$<6;$++){H=Me[$].mipmaps;for(let ie=0;ie<H.length;ie++){const Ae=H[ie];w.format!==di?be!==null?Oe?S&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,Ae.width,Ae.height,be,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,Ae.width,Ae.height,be,ge,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,Be,Ae.width,Ae.height,0,be,ge,Ae.data)}}}else{if(H=w.mipmaps,Oe&&ut){H.length>0&&j++;const $=at(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,j,Be,$.width,$.height)}for(let $=0;$<6;$++)if(ce){Oe?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me[$].width,Me[$].height,be,ge,Me[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,Me[$].width,Me[$].height,0,be,ge,Me[$].data);for(let ie=0;ie<H.length;ie++){const De=H[ie].image[$].image;Oe?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,De.width,De.height,be,ge,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,Be,De.width,De.height,0,be,ge,De.data)}}else{Oe?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be,ge,Me[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Be,be,ge,Me[$]);for(let ie=0;ie<H.length;ie++){const Ae=H[ie];Oe?S&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,be,ge,Ae.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,Be,be,ge,Ae.image[$])}}}v(w)&&u(t.TEXTURE_CUBE_MAP),ne.__version=te.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function re(b,w,F,Q,te,ne){const _e=s.convert(F.format,F.colorSpace),ue=s.convert(F.type),de=g(F.internalFormat,_e,ue,F.colorSpace);if(!i.get(w).__hasExternalTextures){const ce=Math.max(1,w.width>>ne),Me=Math.max(1,w.height>>ne);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ne,de,ce,Me,w.depth,0,_e,ue,null):n.texImage2D(te,ne,de,ce,Me,0,_e,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ge(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,i.get(F).__webglTexture,0,we(w)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,i.get(F).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(b,w,F){if(t.bindRenderbuffer(t.RENDERBUFFER,b),w.depthBuffer){const Q=w.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,ne=p(w.stencilBuffer,te),_e=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=we(w);Ge(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ne,w.width,w.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ne,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ne,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,b)}else{const Q=w.textures;for(let te=0;te<Q.length;te++){const ne=Q[te],_e=s.convert(ne.format,ne.colorSpace),ue=s.convert(ne.type),de=g(ne.internalFormat,_e,ue,ne.colorSpace),ze=we(w);F&&Ge(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,de,w.width,w.height):Ge(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,de,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,de,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,te=we(w);if(w.depthTexture.format===Ws)Ge(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(w.depthTexture.format===ro)Ge(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ee(b){const w=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ae(w.__webglFramebuffer,b)}else if(F){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=t.createRenderbuffer(),he(w.__webglDepthbuffer[Q],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),he(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,w,F){const Q=i.get(b);w!==void 0&&re(Q.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&ee(b)}function Se(b){const w=b.texture,F=i.get(b),Q=i.get(w);b.addEventListener("dispose",M);const te=b.textures,ne=b.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=w.version,o.memory.textures++),ne){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let de=0;de<w.mipmaps.length;de++)F.__webglFramebuffer[ue][de]=t.createFramebuffer()}else F.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)F.__webglFramebuffer[ue]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(_e)for(let ue=0,de=te.length;ue<de;ue++){const ze=i.get(te[ue]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Ge(b)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const de=te[ue];F.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const ze=s.convert(de.format,de.colorSpace),ce=s.convert(de.type),Me=g(de.internalFormat,ze,ce,de.colorSpace,b.isXRRenderTarget===!0),We=we(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Me,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),he(F.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),se(t.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)re(F.__webglFramebuffer[ue][de],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,de);else re(F.__webglFramebuffer[ue],b,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(w)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let ue=0,de=te.length;ue<de;ue++){const ze=te[ue],ce=i.get(ze);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),se(t.TEXTURE_2D,ze),re(F.__webglFramebuffer,b,ze,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),v(ze)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Q.__webglTexture),se(ue,w),w.mipmaps&&w.mipmaps.length>0)for(let de=0;de<w.mipmaps.length;de++)re(F.__webglFramebuffer[de],b,w,t.COLOR_ATTACHMENT0,ue,de);else re(F.__webglFramebuffer,b,w,t.COLOR_ATTACHMENT0,ue,0);v(w)&&u(ue),n.unbindTexture()}b.depthBuffer&&ee(b)}function D(b){const w=b.textures;for(let F=0,Q=w.length;F<Q;F++){const te=w[F];if(v(te)){const ne=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,_e=i.get(te).__webglTexture;n.bindTexture(ne,_e),u(ne),n.unbindTexture()}}}const Fe=[],Re=[];function Ze(b){if(b.samples>0){if(Ge(b)===!1){const w=b.textures,F=b.width,Q=b.height;let te=t.COLOR_BUFFER_BIT;const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(b),ue=w.length>1;if(ue)for(let de=0;de<w.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<w.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ze=i.get(w[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,F,Q,0,0,F,Q,te,t.NEAREST),l===!0&&(Fe.length=0,Re.length=0,Fe.push(t.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Fe.push(ne),Re.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Re)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let de=0;de<w.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const ze=i.get(w[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const w=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function we(b){return Math.min(r.maxSamples,b.samples)}function Ge(b){const w=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ve(b){const w=o.render.frame;f.get(b)!==w&&(f.set(b,w),b.update())}function ke(b,w){const F=b.colorSpace,Q=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==xr&&F!==Qi&&(nt.getTransfer(F)===dt?(Q!==di||te!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),w}function at(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Y,this.setTextureCube=J,this.rebindTextures=le,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ge}function JA(t,e){function n(i,r=Qi){let s;const o=nt.getTransfer(r);if(i===mr)return t.UNSIGNED_BYTE;if(i===C_)return t.UNSIGNED_SHORT_4_4_4_4;if(i===R_)return t.UNSIGNED_SHORT_5_5_5_1;if(i===UM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===DM)return t.BYTE;if(i===NM)return t.SHORT;if(i===_c)return t.UNSIGNED_SHORT;if(i===A_)return t.INT;if(i===no)return t.UNSIGNED_INT;if(i===tr)return t.FLOAT;if(i===qc)return t.HALF_FLOAT;if(i===OM)return t.ALPHA;if(i===FM)return t.RGB;if(i===di)return t.RGBA;if(i===kM)return t.LUMINANCE;if(i===zM)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===ro)return t.DEPTH_STENCIL;if(i===BM)return t.RED;if(i===b_)return t.RED_INTEGER;if(i===HM)return t.RG;if(i===P_)return t.RG_INTEGER;if(i===L_)return t.RGBA_INTEGER;if(i===Nu||i===Uu||i===Ou||i===Fu)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ou)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===im||i===rm||i===sm||i===om)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===im)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===om)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===am||i===lm||i===cm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===am||i===lm)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===um||i===fm||i===hm||i===dm||i===pm||i===mm||i===gm||i===vm||i===_m||i===ym||i===xm||i===Sm||i===Mm||i===Em)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===um)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_m)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ym)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mm)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Em)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ku||i===wm||i===Tm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ku)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===VM||i===Am||i===Cm||i===Rm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ku)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Am)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class eC extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ul extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gr({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new me(new fo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class sC extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const y=new rC,v=n.getContextAttributes();let u=null,g=null;const p=[],x=[],P=new Le;let M=null;const T=new bn;T.layers.enable(1),T.viewport=new Ht;const C=new bn;C.layers.enable(2),C.viewport=new Ht;const A=[T,C],E=new eC;E.layers.enable(1),E.layers.enable(2);let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=p[Z];return re===void 0&&(re=new ff,p[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=p[Z];return re===void 0&&(re=new ff,p[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=p[Z];return re===void 0&&(re=new ff,p[Z]=re),re.getHandSpace()};function B(Z){const re=x.indexOf(Z.inputSource);if(re===-1)return;const he=p[re];he!==void 0&&(he.update(Z.inputSource,Z.frame,c||o),he.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let Z=0;Z<p.length;Z++){const re=x[Z];re!==null&&(x[Z]=null,p[Z].disconnect(re))}I=null,O=null,y.reset(),e.setRenderTarget(u),m=null,h=null,d=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Zr(m.framebufferWidth,m.framebufferHeight,{format:di,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let re=null,he=null,ae=null;v.depth&&(ae=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=v.stencil?ro:Ws,he=v.stencil?io:no);const ee={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new Zr(h.textureWidth,h.textureHeight,{format:di,type:mr,depthTexture:new X_(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(Z){for(let re=0;re<Z.removed.length;re++){const he=Z.removed[re],ae=x.indexOf(he);ae>=0&&(x[ae]=null,p[ae].disconnect(he))}for(let re=0;re<Z.added.length;re++){const he=Z.added[re];let ae=x.indexOf(he);if(ae===-1){for(let le=0;le<p.length;le++)if(le>=x.length){x.push(he),ae=le;break}else if(x[le]===null){x[le]=he,ae=le;break}if(ae===-1)break}const ee=p[ae];ee&&ee.connect(he)}}const Y=new L,J=new L;function N(Z,re,he){Y.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(he.matrixWorld);const ae=Y.distanceTo(J),ee=re.projectionMatrix.elements,le=he.projectionMatrix.elements,Se=ee[14]/(ee[10]-1),D=ee[14]/(ee[10]+1),Fe=(ee[9]+1)/ee[5],Re=(ee[9]-1)/ee[5],Ze=(ee[8]-1)/ee[0],we=(le[8]+1)/le[0],Ge=Se*Ze,Ve=Se*we,ke=ae/(-Ze+we),at=ke*-Ze;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(at),Z.translateZ(ke),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const b=Se+ke,w=D+ke,F=Ge-at,Q=Ve+(ae-at),te=Fe*D/w*b,ne=Re*D/w*b;Z.projectionMatrix.makePerspective(F,Q,te,ne,b,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function K(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;y.texture!==null&&(Z.near=y.depthNear,Z.far=y.depthFar),E.near=C.near=T.near=Z.near,E.far=C.far=T.far=Z.far,(I!==E.near||O!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,O=E.far,T.near=I,T.far=O,C.near=I,C.far=O,T.updateProjectionMatrix(),C.updateProjectionMatrix(),Z.updateProjectionMatrix());const re=Z.parent,he=E.cameras;K(E,re);for(let ae=0;ae<he.length;ae++)K(he[ae],re);he.length===2?N(E,T,C):E.projectionMatrix.copy(T.projectionMatrix),G(Z,E,re)};function G(Z,re,he){he===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(he.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Mh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let se=null;function xe(Z,re){if(f=re.getViewerPose(c||o),_=re,f!==null){const he=f.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ae=!1;he.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let le=0;le<he.length;le++){const Se=he[le];let D=null;if(m!==null)D=m.getViewport(Se);else{const Re=d.getViewSubImage(h,Se);D=Re.viewport,le===0&&(e.setRenderTargetTextures(g,Re.colorTexture,h.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(g))}let Fe=A[le];Fe===void 0&&(Fe=new bn,Fe.layers.enable(le),Fe.viewport=new Ht,A[le]=Fe),Fe.matrix.fromArray(Se.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Se.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(D.x,D.y,D.width,D.height),le===0&&(E.matrix.copy(Fe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(Fe)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const le=d.getDepthInformation(he[0]);le&&le.isValid&&le.texture&&y.init(e,le,r.renderState)}}for(let he=0;he<p.length;he++){const ae=x[he],ee=p[he];ae!==null&&ee!==void 0&&ee.update(ae,re,c||o)}se&&se(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const He=new W_;He.setAnimationLoop(xe),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}}const br=new Wn,oC=new mt;function aC(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,H_(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,g,p,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),d(v,u)):u.isMeshPhongMaterial?(s(v,u),f(v,u)):u.isMeshStandardMaterial?(s(v,u),h(v,u),u.isMeshPhysicalMaterial&&m(v,u,x)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),y(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(o(v,u),u.isLineDashedMaterial&&a(v,u)):u.isPointsMaterial?l(v,u,g,p):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===xn&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===xn&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const g=e.get(u),p=g.envMap,x=g.envMapRotation;p&&(v.envMap.value=p,br.copy(x),br.x*=-1,br.y*=-1,br.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),v.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(br)),v.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap&&(v.lightMap.value=u.lightMap,v.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,v.lightMapTransform)),u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function o(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function a(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,g,p){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*g,v.scale.value=p*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function f(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function d(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function h(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),u.envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function m(v,u,g){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===xn&&v.clearcoatNormalScale.value.negate())),u.dispersion>0&&(v.dispersion.value=u.dispersion),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){const g=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,p){const x=p.program;i.uniformBlockBinding(g,x)}function c(g,p){let x=r[g.id];x===void 0&&(_(g),x=f(g),r[g.id]=x,g.addEventListener("dispose",v));const P=p.program;i.updateUBOMapping(g,P);const M=e.render.frame;s[g.id]!==M&&(h(g),s[g.id]=M)}function f(g){const p=d();g.__bindingPointIndex=p;const x=t.createBuffer(),P=g.__size,M=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,x),x}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const p=r[g.id],x=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let M=0,T=x.length;M<T;M++){const C=Array.isArray(x[M])?x[M]:[x[M]];for(let A=0,E=C.length;A<E;A++){const I=C[A];if(m(I,M,A,P)===!0){const O=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let X=0;X<B.length;X++){const Y=B[X],J=y(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,O+q,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,p,x,P){const M=g.value,T=p+"_"+x;if(P[T]===void 0)return typeof M=="number"||typeof M=="boolean"?P[T]=M:P[T]=M.clone(),!0;{const C=P[T];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return P[T]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function _(g){const p=g.uniforms;let x=0;const P=16;for(let T=0,C=p.length;T<C;T++){const A=Array.isArray(p[T])?p[T]:[p[T]];for(let E=0,I=A.length;E<I;E++){const O=A[E],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,X=B.length;q<X;q++){const Y=B[q],J=y(Y),N=x%P;N!==0&&P-N<J.boundary&&(x+=P-N),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=J.storage}}}const M=x%P;return M>0&&(x+=P-M),g.__size=x,g.__cache={},this}function y(g){const p={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(p.boundary=4,p.storage=4):g.isVector2?(p.boundary=8,p.storage=8):g.isVector3||g.isColor?(p.boundary=16,p.storage=12):g.isVector4?(p.boundary=16,p.storage=16):g.isMatrix3?(p.boundary=48,p.storage=48):g.isMatrix4?(p.boundary=64,p.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),p}function v(g){const p=g.target;p.removeEventListener("dispose",v);const x=o.indexOf(p.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class yg{constructor(e={}){const{canvas:n=t1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,v=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=fr,this.toneMappingExposure=1;const p=this;let x=!1,P=0,M=0,T=null,C=-1,A=null;const E=new Ht,I=new Ht;let O=null;const B=new Ke(0);let q=0,X=n.width,Y=n.height,J=1,N=null,K=null;const G=new Ht(0,0,X,Y),se=new Ht(0,0,X,Y);let xe=!1;const He=new Ld;let Z=!1,re=!1;const he=new mt,ae=new L,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Se(){return T===null?J:1}let D=i;function Fe(R,U){return n.getContext(R,U)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rd}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",$,!1),D===null){const U="webgl2";if(D=Fe(U,R),D===null)throw Fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Re,Ze,we,Ge,Ve,ke,at,b,w,F,Q,te,ne,_e,ue,de,ze,ce,Me,We,be,ge,Be,Oe;function ut(){Re=new vT(D),Re.init(),ge=new JA(D,Re),Ze=new fT(D,Re,e,ge),we=new ZA(D),Ge=new xT(D),Ve=new FA,ke=new QA(D,Re,we,Ve,Ze,ge,Ge),at=new dT(p),b=new gT(p),w=new C1(D),Be=new cT(D,w),F=new _T(D,w,Ge,Be),Q=new MT(D,F,w,Ge),Me=new ST(D,Ze,ke),de=new hT(Ve),te=new OA(p,at,b,Re,Ze,Be,de),ne=new aC(p,Ve),_e=new zA,ue=new jA(Re),ce=new lT(p,at,b,we,Q,h,l),ze=new KA(p,Q,Ze),Oe=new lC(D,Ge,Ze,we),We=new uT(D,Re,Ge),be=new yT(D,Re,Ge),Ge.programs=te.programs,p.capabilities=Ze,p.extensions=Re,p.properties=Ve,p.renderLists=_e,p.shadowMap=ze,p.state=we,p.info=Ge}ut();const S=new sC(p,D);this.xr=S,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(X,Y,!1))},this.getSize=function(R){return R.set(X,Y)},this.setSize=function(R,U,V=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,Y=U,n.width=Math.floor(R*J),n.height=Math.floor(U*J),V===!0&&(n.style.width=R+"px",n.style.height=U+"px"),this.setViewport(0,0,R,U)},this.getDrawingBufferSize=function(R){return R.set(X*J,Y*J).floor()},this.setDrawingBufferSize=function(R,U,V){X=R,Y=U,J=V,n.width=Math.floor(R*V),n.height=Math.floor(U*V),this.setViewport(0,0,R,U)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,U,V,W){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,U,V,W),we.viewport(E.copy(G).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,U,V,W){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,U,V,W),we.scissor(I.copy(se).multiplyScalar(J).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(R){we.setScissorTest(xe=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(R=!0,U=!0,V=!0){let W=0;if(R){let z=!1;if(T!==null){const fe=T.texture.format;z=fe===L_||fe===P_||fe===b_}if(z){const fe=T.texture.type,ve=fe===mr||fe===no||fe===_c||fe===io||fe===C_||fe===R_,Ee=ce.getClearColor(),Te=ce.getClearAlpha(),Ne=Ee.r,Ue=Ee.g,Pe=Ee.b;ve?(m[0]=Ne,m[1]=Ue,m[2]=Pe,m[3]=Te,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ne,_[1]=Ue,_[2]=Pe,_[3]=Te,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",$,!1),_e.dispose(),ue.dispose(),Ve.dispose(),at.dispose(),b.dispose(),Q.dispose(),Be.dispose(),Oe.dispose(),te.dispose(),S.dispose(),S.removeEventListener("sessionstart",Rt),S.removeEventListener("sessionend",bt),En.stop()};function j(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=Ge.autoReset,U=ze.enabled,V=ze.autoUpdate,W=ze.needsUpdate,z=ze.type;ut(),Ge.autoReset=R,ze.enabled=U,ze.autoUpdate=V,ze.needsUpdate=W,ze.type=z}function $(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const U=R.target;U.removeEventListener("dispose",ie),Ae(U)}function Ae(R){De(R),Ve.remove(R)}function De(R){const U=Ve.get(R).programs;U!==void 0&&(U.forEach(function(V){te.releaseProgram(V)}),R.isShaderMaterial&&te.releaseShaderCache(R))}this.renderBufferDirect=function(R,U,V,W,z,fe){U===null&&(U=ee);const ve=z.isMesh&&z.matrixWorld.determinant()<0,Ee=_y(R,U,V,W,z);we.setMaterial(W,ve);let Te=V.index,Ne=1;if(W.wireframe===!0){if(Te=F.getWireframeAttribute(V),Te===void 0)return;Ne=2}const Ue=V.drawRange,Pe=V.attributes.position;let et=Ue.start*Ne,Et=(Ue.start+Ue.count)*Ne;fe!==null&&(et=Math.max(et,fe.start*Ne),Et=Math.min(Et,(fe.start+fe.count)*Ne)),Te!==null?(et=Math.max(et,0),Et=Math.min(Et,Te.count)):Pe!=null&&(et=Math.max(et,0),Et=Math.min(Et,Pe.count));const wt=Et-et;if(wt<0||wt===1/0)return;Be.setup(z,W,Ee,V,Te);let Tn,tt=We;if(Te!==null&&(Tn=w.get(Te),tt=be,tt.setIndex(Tn)),z.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*Se()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(z.isLine){let Ce=W.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*Se()),z.isLineSegments?tt.setMode(D.LINES):z.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else z.isPoints?tt.setMode(D.POINTS):z.isSprite&&tt.setMode(D.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)tt.renderInstances(et,wt,z.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,sn=Math.min(V.instanceCount,Ce);tt.renderInstances(et,wt,sn)}else tt.render(et,wt)};function ft(R,U,V){R.transparent===!0&&R.side===Qn&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,Ea(R,U,V),R.side=pr,R.needsUpdate=!0,Ea(R,U,V),R.side=Qn):Ea(R,U,V)}this.compile=function(R,U,V=null){V===null&&(V=R),v=ue.get(V),v.init(U),g.push(v),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(v.pushLight(z),z.castShadow&&v.pushShadow(z))}),R!==V&&R.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(v.pushLight(z),z.castShadow&&v.pushShadow(z))}),v.setupLights();const W=new Set;return R.traverse(function(z){const fe=z.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const Ee=fe[ve];ft(Ee,V,z),W.add(Ee)}else ft(fe,V,z),W.add(fe)}),g.pop(),v=null,W},this.compileAsync=function(R,U,V=null){const W=this.compile(R,U,V);return new Promise(z=>{function fe(){if(W.forEach(function(ve){Ve.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){z(R);return}setTimeout(fe,10)}Re.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ct=null;function Je(R){Ct&&Ct(R)}function Rt(){En.stop()}function bt(){En.start()}const En=new W_;En.setAnimationLoop(Je),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){Ct=R,S.setAnimationLoop(R),R===null?En.stop():En.start()},S.addEventListener("sessionstart",Rt),S.addEventListener("sessionend",bt),this.render=function(R,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(U),U=S.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,U,T),v=ue.get(R,g.length),v.init(U),g.push(v),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(he),re=this.localClippingEnabled,Z=de.init(this.clippingPlanes,re),y=_e.get(R,u.length),y.init(),u.push(y),S.enabled===!0&&S.isPresenting===!0){const fe=p.xr.getDepthSensingMesh();fe!==null&&wn(fe,U,-1/0,p.sortObjects)}wn(R,U,0,p.sortObjects),y.finish(),p.sortObjects===!0&&y.sort(N,K),le=S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1,le&&ce.addToRenderList(y,R),this.info.render.frame++,Z===!0&&de.beginShadows();const V=v.state.shadowsArray;ze.render(V,R,U),Z===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=y.opaque,z=y.transmissive;if(v.setupLights(),U.isArrayCamera){const fe=U.cameras;if(z.length>0)for(let ve=0,Ee=fe.length;ve<Ee;ve++){const Te=fe[ve];Sr(W,z,R,Te)}le&&ce.render(R);for(let ve=0,Ee=fe.length;ve<Ee;ve++){const Te=fe[ve];ki(y,R,Te,Te.viewport)}}else z.length>0&&Sr(W,z,R,U),le&&ce.render(R),ki(y,R,U);T!==null&&(ke.updateMultisampleRenderTarget(T),ke.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(p,R,U),Be.resetDefaultState(),C=-1,A=null,g.pop(),g.length>0?(v=g[g.length-1],Z===!0&&de.setGlobalState(p.clippingPlanes,v.state.camera)):v=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function wn(R,U,V,W){if(R.visible===!1)return;if(R.layers.test(U.layers)){if(R.isGroup)V=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(U);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){W&&ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const ve=Q.update(R),Ee=R.material;Ee.visible&&y.push(R,ve,Ee,V,ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){const ve=Q.update(R),Ee=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ae.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ae.copy(ve.boundingSphere.center)),ae.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(Ee)){const Te=ve.groups;for(let Ne=0,Ue=Te.length;Ne<Ue;Ne++){const Pe=Te[Ne],et=Ee[Pe.materialIndex];et&&et.visible&&y.push(R,ve,et,V,ae.z,Pe)}}else Ee.visible&&y.push(R,ve,Ee,V,ae.z,null)}}const fe=R.children;for(let ve=0,Ee=fe.length;ve<Ee;ve++)wn(fe[ve],U,V,W)}function ki(R,U,V,W){const z=R.opaque,fe=R.transmissive,ve=R.transparent;v.setupLightsView(V),Z===!0&&de.setGlobalState(p.clippingPlanes,V),W&&we.viewport(E.copy(W)),z.length>0&&Mr(z,U,V),fe.length>0&&Mr(fe,U,V),ve.length>0&&Mr(ve,U,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Sr(R,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[W.id]===void 0&&(v.state.transmissionRenderTarget[W.id]=new Zr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float")?qc:mr,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const fe=v.state.transmissionRenderTarget[W.id],ve=W.viewport||E;fe.setSize(ve.z,ve.w);const Ee=p.getRenderTarget();p.setRenderTarget(fe),p.getClearColor(B),q=p.getClearAlpha(),q<1&&p.setClearColor(16777215,.5),le?ce.render(V):p.clear();const Te=p.toneMapping;p.toneMapping=fr;const Ne=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),Z===!0&&de.setGlobalState(p.clippingPlanes,W),Mr(R,V,W),ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Pe=0,et=U.length;Pe<et;Pe++){const Et=U[Pe],wt=Et.object,Tn=Et.geometry,tt=Et.material,Ce=Et.group;if(tt.side===Qn&&wt.layers.test(W.layers)){const sn=tt.side;tt.side=xn,tt.needsUpdate=!0,Bd(wt,V,W,Tn,tt,Ce),tt.side=sn,tt.needsUpdate=!0,Ue=!0}}Ue===!0&&(ke.updateMultisampleRenderTarget(fe),ke.updateRenderTargetMipmap(fe))}p.setRenderTarget(Ee),p.setClearColor(B,q),Ne!==void 0&&(W.viewport=Ne),p.toneMapping=Te}function Mr(R,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let z=0,fe=R.length;z<fe;z++){const ve=R[z],Ee=ve.object,Te=ve.geometry,Ne=W===null?ve.material:W,Ue=ve.group;Ee.layers.test(V.layers)&&Bd(Ee,U,V,Te,Ne,Ue)}}function Bd(R,U,V,W,z,fe){R.onBeforeRender(p,U,V,W,z,fe),R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(p,U,V,W,R,fe),z.transparent===!0&&z.side===Qn&&z.forceSinglePass===!1?(z.side=xn,z.needsUpdate=!0,p.renderBufferDirect(V,U,W,z,R,fe),z.side=pr,z.needsUpdate=!0,p.renderBufferDirect(V,U,W,z,R,fe),z.side=Qn):p.renderBufferDirect(V,U,W,z,R,fe),R.onAfterRender(p,U,V,W,z,fe)}function Ea(R,U,V){U.isScene!==!0&&(U=ee);const W=Ve.get(R),z=v.state.lights,fe=v.state.shadowsArray,ve=z.state.version,Ee=te.getParameters(R,z.state,fe,U,V),Te=te.getProgramCacheKey(Ee);let Ne=W.programs;W.environment=R.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(R.isMeshStandardMaterial?b:at).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?U.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",ie),Ne=new Map,W.programs=Ne);let Ue=Ne.get(Te);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===ve)return Vd(R,Ee),Ue}else Ee.uniforms=te.getUniforms(R),R.onBuild(V,Ee,p),R.onBeforeCompile(Ee,p),Ue=te.acquireProgram(Ee,Te),Ne.set(Te,Ue),W.uniforms=Ee.uniforms;const Pe=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Pe.clippingPlanes=de.uniform),Vd(R,Ee),W.needsLights=xy(R),W.lightsStateVersion=ve,W.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function Hd(R){if(R.uniformsList===null){const U=R.currentProgram.getUniforms();R.uniformsList=Vl.seqWithValue(U.seq,R.uniforms)}return R.uniformsList}function Vd(R,U){const V=Ve.get(R);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function _y(R,U,V,W,z){U.isScene!==!0&&(U=ee),ke.resetTextureUnits();const fe=U.fog,ve=W.isMeshStandardMaterial?U.environment:null,Ee=T===null?p.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xr,Te=(W.isMeshStandardMaterial?b:at).get(W.envMap||ve),Ne=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,Et=!!V.morphAttributes.color;let wt=fr;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=p.toneMapping);const Tn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=Tn!==void 0?Tn.length:0,Ce=Ve.get(W),sn=v.state.lights;if(Z===!0&&(re===!0||R!==A)){const Un=R===A&&W.id===C;de.setState(W,R,Un)}let rt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==sn.state.version||Ce.outputColorSpace!==Ee||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==Te||W.fog===!0&&Ce.fog!==fe||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==de.numPlanes||Ce.numIntersection!==de.numIntersection)||Ce.vertexAlphas!==Ne||Ce.vertexTangents!==Ue||Ce.morphTargets!==Pe||Ce.morphNormals!==et||Ce.morphColors!==Et||Ce.toneMapping!==wt||Ce.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,Ce.__version=W.version);let vi=Ce.currentProgram;rt===!0&&(vi=Ea(W,U,z));let wa=!1,Er=!1,ru=!1;const Ft=vi.getUniforms(),zi=Ce.uniforms;if(we.useProgram(vi.program)&&(wa=!0,Er=!0,ru=!0),W.id!==C&&(C=W.id,Er=!0),wa||A!==R){Ft.setValue(D,"projectionMatrix",R.projectionMatrix),Ft.setValue(D,"viewMatrix",R.matrixWorldInverse);const Un=Ft.map.cameraPosition;Un!==void 0&&Un.setValue(D,ae.setFromMatrixPosition(R.matrixWorld)),Ze.logarithmicDepthBuffer&&Ft.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ft.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Er=!0,ru=!0)}if(z.isSkinnedMesh){Ft.setOptional(D,z,"bindMatrix"),Ft.setOptional(D,z,"bindMatrixInverse");const Un=z.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ft.setValue(D,"boneTexture",Un.boneTexture,ke))}z.isBatchedMesh&&(Ft.setOptional(D,z,"batchingTexture"),Ft.setValue(D,"batchingTexture",z._matricesTexture,ke),Ft.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Ft.setValue(D,"batchingColorTexture",z._colorsTexture,ke));const su=V.morphAttributes;if((su.position!==void 0||su.normal!==void 0||su.color!==void 0)&&Me.update(z,V,vi),(Er||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,Ft.setValue(D,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(zi.envMap.value=Te,zi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(zi.envMapIntensity.value=U.environmentIntensity),Er&&(Ft.setValue(D,"toneMappingExposure",p.toneMappingExposure),Ce.needsLights&&yy(zi,ru),fe&&W.fog===!0&&ne.refreshFogUniforms(zi,fe),ne.refreshMaterialUniforms(zi,W,J,Y,v.state.transmissionRenderTarget[R.id]),Vl.upload(D,Hd(Ce),zi,ke)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vl.upload(D,Hd(Ce),zi,ke),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ft.setValue(D,"center",z.center),Ft.setValue(D,"modelViewMatrix",z.modelViewMatrix),Ft.setValue(D,"normalMatrix",z.normalMatrix),Ft.setValue(D,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Un=W.uniformsGroups;for(let ou=0,Sy=Un.length;ou<Sy;ou++){const Gd=Un[ou];Oe.update(Gd,vi),Oe.bind(Gd,vi)}}return vi}function yy(R,U){R.ambientLightColor.needsUpdate=U,R.lightProbe.needsUpdate=U,R.directionalLights.needsUpdate=U,R.directionalLightShadows.needsUpdate=U,R.pointLights.needsUpdate=U,R.pointLightShadows.needsUpdate=U,R.spotLights.needsUpdate=U,R.spotLightShadows.needsUpdate=U,R.rectAreaLights.needsUpdate=U,R.hemisphereLights.needsUpdate=U}function xy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,U,V){Ve.get(R.texture).__webglTexture=U,Ve.get(R.depthTexture).__webglTexture=V;const W=Ve.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,U){const V=Ve.get(R);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(R,U=0,V=0){T=R,P=U,M=V;let W=!0,z=null,fe=!1,ve=!1;if(R){const Te=Ve.get(R);Te.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(D.FRAMEBUFFER,null),W=!1):Te.__webglFramebuffer===void 0?ke.setupRenderTarget(R):Te.__hasExternalTextures&&ke.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const Ue=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?z=Ue[U][V]:z=Ue[U],fe=!0):R.samples>0&&ke.useMultisampledRTT(R)===!1?z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?z=Ue[V]:z=Ue,E.copy(R.viewport),I.copy(R.scissor),O=R.scissorTest}else E.copy(G).multiplyScalar(J).floor(),I.copy(se).multiplyScalar(J).floor(),O=xe;if(we.bindFramebuffer(D.FRAMEBUFFER,z)&&W&&we.drawBuffers(R,z),we.viewport(E),we.scissor(I),we.setScissorTest(O),fe){const Te=Ve.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,V)}else if(ve){const Te=Ve.get(R.texture),Ne=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Ne)}C=-1},this.readRenderTargetPixels=function(R,U,V,W,z,fe,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){we.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Te=R.texture,Ne=Te.format,Ue=Te.type;if(!Ze.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=R.width-W&&V>=0&&V<=R.height-z&&D.readPixels(U,V,W,z,ge.convert(Ne),ge.convert(Ue),fe)}finally{const Te=T!==null?Ve.get(T).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(R,U,V,W,z,fe,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){we.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Te=R.texture,Ne=Te.format,Ue=Te.type;if(!Ze.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=R.width-W&&V>=0&&V<=R.height-z){const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(U,V,W,z,ge.convert(Ne),ge.convert(Ue),0),D.flush();const et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await n1(D,et,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe)}finally{D.deleteBuffer(Pe),D.deleteSync(et)}return fe}}finally{const Te=T!==null?Ve.get(T).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(R,U=null,V=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-V),z=Math.floor(R.image.width*W),fe=Math.floor(R.image.height*W),ve=U!==null?U.x:0,Ee=U!==null?U.y:0;ke.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ve,Ee,z,fe),we.unbindTexture()},this.copyTextureToTexture=function(R,U,V=null,W=null,z=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],U=arguments[2],z=arguments[3]||0,V=null);let fe,ve,Ee,Te,Ne,Ue;V!==null?(fe=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ee=V.min.x,Te=V.min.y):(fe=R.image.width,ve=R.image.height,Ee=0,Te=0),W!==null?(Ne=W.x,Ue=W.y):(Ne=0,Ue=0);const Pe=ge.convert(U.format),et=ge.convert(U.type);ke.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Et=D.getParameter(D.UNPACK_ROW_LENGTH),wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),Ce=D.getParameter(D.UNPACK_SKIP_IMAGES),sn=R.isCompressedTexture?R.mipmaps[z]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,sn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,sn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ne,Ue,fe,ve,Pe,et,sn.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ne,Ue,sn.width,sn.height,Pe,sn.data):D.texSubImage2D(D.TEXTURE_2D,z,Ne,Ue,Pe,et,sn),D.pixelStorei(D.UNPACK_ROW_LENGTH,Et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),z===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(R,U,V=null,W=null,z=0){R.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,R=arguments[2],U=arguments[3],z=arguments[4]||0);let fe,ve,Ee,Te,Ne,Ue,Pe,et,Et;const wt=R.isCompressedTexture?R.mipmaps[z]:R.image;V!==null?(fe=V.max.x-V.min.x,ve=V.max.y-V.min.y,Ee=V.max.z-V.min.z,Te=V.min.x,Ne=V.min.y,Ue=V.min.z):(fe=wt.width,ve=wt.height,Ee=wt.depth,Te=0,Ne=0,Ue=0),W!==null?(Pe=W.x,et=W.y,Et=W.z):(Pe=0,et=0,Et=0);const Tn=ge.convert(U.format),tt=ge.convert(U.type);let Ce;if(U.isData3DTexture)ke.setTexture3D(U,0),Ce=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ke.setTexture2DArray(U,0),Ce=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const sn=D.getParameter(D.UNPACK_ROW_LENGTH),rt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vi=D.getParameter(D.UNPACK_SKIP_PIXELS),wa=D.getParameter(D.UNPACK_SKIP_ROWS),Er=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Ce,z,Pe,et,Et,fe,ve,Ee,Tn,tt,wt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,z,Pe,et,Et,fe,ve,Ee,Tn,wt.data):D.texSubImage3D(Ce,z,Pe,et,Et,fe,ve,Ee,Tn,tt,wt),D.pixelStorei(D.UNPACK_ROW_LENGTH,sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vi),D.pixelStorei(D.UNPACK_SKIP_ROWS,wa),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Er),z===0&&U.generateMipmaps&&D.generateMipmap(Ce),we.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ke.setTextureCube(R,0):R.isData3DTexture?ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ke.setTexture2DArray(R,0):ke.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){P=0,M=0,T=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===bd?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Kc?"display-p3":"srgb"}}class cC extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ma extends uo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new L,Tc=new L,xg=new mt,Ro=new Qc,fl=new Zc,hf=new L,Sg=new L;class li extends ct{constructor(e=new qt,n=new Ma){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wc.fromBufferAttribute(n,r-1),Tc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wc.distanceTo(Tc);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;xg.copy(r).invert(),Ro.copy(e.ray).applyMatrix4(xg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=m,v=_-1;y<v;y+=c){const u=f.getX(y),g=f.getX(y+1),p=hl(this,e,Ro,l,u,g);p&&n.push(p)}if(this.isLineLoop){const y=f.getX(_-1),v=f.getX(m),u=hl(this,e,Ro,l,y,v);u&&n.push(u)}}else{const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let y=m,v=_-1;y<v;y+=c){const u=hl(this,e,Ro,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=hl(this,e,Ro,l,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function hl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(wc.fromBufferAttribute(o,r),Tc.fromBufferAttribute(o,s),n.distanceSqToSegment(wc,Tc,hf,Sg)>i)return;hf.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(hf);if(!(l<e.near||l>e.far))return{distance:l,point:Sg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Mg=new L,Eg=new L;class Q_ extends li{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Mg.fromBufferAttribute(n,r),Eg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(Eg);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gt extends qt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],m=[];let _=0;const y=[],v=i/2;let u=0;g(),o===!1&&(e>0&&p(!0),n>0&&p(!1)),this.setIndex(f),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(m,2));function g(){const x=new L,P=new L;let M=0;const T=(n-e)/i;for(let C=0;C<=s;C++){const A=[],E=C/s,I=E*(n-e)+e;for(let O=0;O<=r;O++){const B=O/r,q=B*l+a,X=Math.sin(q),Y=Math.cos(q);P.x=I*X,P.y=-E*i+v,P.z=I*Y,d.push(P.x,P.y,P.z),x.set(X,T,Y).normalize(),h.push(x.x,x.y,x.z),m.push(B,1-E),A.push(_++)}y.push(A)}for(let C=0;C<r;C++)for(let A=0;A<s;A++){const E=y[A][C],I=y[A+1][C],O=y[A+1][C+1],B=y[A][C+1];f.push(E,I,B),f.push(I,O,B),M+=6}c.addGroup(u,M,0),u+=M}function p(x){const P=_,M=new Le,T=new L;let C=0;const A=x===!0?e:n,E=x===!0?1:-1;for(let O=1;O<=r;O++)d.push(0,v*E,0),h.push(0,E,0),m.push(.5,.5),_++;const I=_;for(let O=0;O<=r;O++){const q=O/r*l+a,X=Math.cos(q),Y=Math.sin(q);T.x=A*Y,T.y=v*E,T.z=A*X,d.push(T.x,T.y,T.z),h.push(0,E,0),M.x=X*.5+.5,M.y=Y*.5*E+.5,m.push(M.x,M.y),_++}for(let O=0;O<r;O++){const B=P+O,q=I+O;x===!0?f.push(q,q+1,B):f.push(q+1,q,B),C+=3}c.addGroup(u,C,x===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dd extends qt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const p=new L,x=new L,P=new L;for(let M=0;M<n.length;M+=3)m(n[M+0],p),m(n[M+1],x),m(n[M+2],P),l(p,x,P,g)}function l(g,p,x,P){const M=P+1,T=[];for(let C=0;C<=M;C++){T[C]=[];const A=g.clone().lerp(x,C/M),E=p.clone().lerp(x,C/M),I=M-C;for(let O=0;O<=I;O++)O===0&&C===M?T[C][O]=A:T[C][O]=A.clone().lerp(E,O/I)}for(let C=0;C<M;C++)for(let A=0;A<2*(M-C)-1;A++){const E=Math.floor(A/2);A%2===0?(h(T[C][E+1]),h(T[C+1][E]),h(T[C][E])):(h(T[C][E+1]),h(T[C+1][E+1]),h(T[C+1][E]))}}function c(g){const p=new L;for(let x=0;x<s.length;x+=3)p.x=s[x+0],p.y=s[x+1],p.z=s[x+2],p.normalize().multiplyScalar(g),s[x+0]=p.x,s[x+1]=p.y,s[x+2]=p.z}function f(){const g=new L;for(let p=0;p<s.length;p+=3){g.x=s[p+0],g.y=s[p+1],g.z=s[p+2];const x=v(g)/2/Math.PI+.5,P=u(g)/Math.PI+.5;o.push(x,1-P)}_(),d()}function d(){for(let g=0;g<o.length;g+=6){const p=o[g+0],x=o[g+2],P=o[g+4],M=Math.max(p,x,P),T=Math.min(p,x,P);M>.9&&T<.1&&(p<.2&&(o[g+0]+=1),x<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function m(g,p){const x=g*3;p.x=e[x+0],p.y=e[x+1],p.z=e[x+2]}function _(){const g=new L,p=new L,x=new L,P=new L,M=new Le,T=new Le,C=new Le;for(let A=0,E=0;A<s.length;A+=9,E+=6){g.set(s[A+0],s[A+1],s[A+2]),p.set(s[A+3],s[A+4],s[A+5]),x.set(s[A+6],s[A+7],s[A+8]),M.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),P.copy(g).add(p).add(x).divideScalar(3);const I=v(P);y(M,E+0,g,I),y(T,E+2,p,I),y(C,E+4,x,I)}}function y(g,p,x,P){P<0&&g.x===1&&(o[p]=g.x-1),x.x===0&&x.z===0&&(o[p]=P/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dd(e.vertices,e.indices,e.radius,e.details)}}class Os extends Dd{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Os(e.radius,e.detail)}}class da extends qt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new L,h=new L,m=[],_=[],y=[],v=[];for(let u=0;u<=i;u++){const g=[],p=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let P=0;P<=n;P++){const M=P/n;d.x=-e*Math.cos(r+M*s)*Math.sin(o+p*a),d.y=e*Math.cos(o+p*a),d.z=e*Math.sin(r+M*s)*Math.sin(o+p*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),v.push(M+x,1-p),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const p=f[u][g+1],x=f[u][g],P=f[u+1][g],M=f[u+1][g+1];(u!==0||o>0)&&m.push(p,x,M),(u!==i-1||l<Math.PI)&&m.push(x,P,M)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fr extends qt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new L,d=new L,h=new L;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,v=m/i*Math.PI*2;d.x=(e+n*Math.cos(v))*Math.cos(y),d.y=(e+n*Math.cos(v))*Math.sin(y),d.z=n*Math.sin(v),a.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,g=(r+1)*m+_;o.push(y,v,g),o.push(v,u,g)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class dl extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I_,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J_ extends ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const df=new mt,wg=new L,Tg=new L;class uC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ld,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;wg.setFromMatrixPosition(e.matrixWorld),n.position.copy(wg),Tg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tg),n.updateMatrixWorld(),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fC extends uC{constructor(){super(new j_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hC extends J_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new fC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dC extends J_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class pC{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ag(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ag();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ag(){return(typeof performance>"u"?Date:performance).now()}const Cg=new mt;class ey{constructor(e,n,i=0,r=1/0){this.ray=new Qc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Pd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cg),this}intersectObject(e,n=!0,i=[]){return wh(e,this,i,n),i.sort(Rg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)wh(e[r],this,i,n);return i.sort(Rg),i}}function Rg(t,e){return t.distance-e.distance}function wh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)wh(s[o],e,n,!0)}}class bg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(cn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mC extends Q_{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ke(i),r=new Ke(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,m=0,_=-a;h<=n;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const y=h===s?i:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const f=new qt;f.setAttribute("position",new st(l,3)),f.setAttribute("color",new st(c,3));const d=new Ma({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Pg=new L;let pl,pf;class Lg extends ct{constructor(e=new L(0,0,1),n=new L(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",pl===void 0&&(pl=new qt,pl.setAttribute("position",new st([0,0,0,0,1,0],3)),pf=new Gt(0,.5,1,5,1),pf.translate(0,-.5,0)),this.position.copy(n),this.line=new li(pl,new Ma({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new me(pf,new Qr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Pg.set(e.z,0,-e.x).normalize();const n=Math.acos(e.y);this.quaternion.setFromAxisAngle(Pg,n)}}setLength(e,n=e*.2,i=n*.2){this.line.scale.set(1,Math.max(1e-4,e-n),1),this.line.updateMatrix(),this.cone.scale.set(i,n,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gC extends Q_{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new qt;r.setAttribute("position",new st(n,3)),r.setAttribute("color",new st(i,3));const s=new Ma({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new Ke,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);const Ig={type:"change"},mf={type:"start"},Dg={type:"end"},ml=new Qc,Ng=new Ri,vC=Math.cos(70*e1.DEG2RAD);class _C extends ts{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rs.ROTATE,MIDDLE:rs.DOLLY,RIGHT:rs.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",de),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ig),i.update(),s=r.NONE},this.update=function(){const S=new L,j=new jt().setFromUnitVectors(e.up,new L(0,1,0)),H=j.clone().invert(),$=new L,ie=new jt,Ae=new L,De=2*Math.PI;return function(Ct=null){const Je=i.object.position;S.copy(Je).sub(i.target),S.applyQuaternion(j),a.setFromVector3(S),i.autoRotate&&s===r.NONE&&O(E(Ct)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Rt=i.minAzimuthAngle,bt=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(bt)&&(Rt<-Math.PI?Rt+=De:Rt>Math.PI&&(Rt-=De),bt<-Math.PI?bt+=De:bt>Math.PI&&(bt-=De),Rt<=bt?a.theta=Math.max(Rt,Math.min(bt,a.theta)):a.theta=a.theta>(Rt+bt)/2?Math.max(Rt,a.theta):Math.min(bt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let En=!1;if(i.zoomToCursor&&M||i.object.isOrthographicCamera)a.radius=G(a.radius);else{const wn=a.radius;a.radius=G(a.radius*c),En=wn!=a.radius}if(S.setFromSpherical(a),S.applyQuaternion(H),Je.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),i.zoomToCursor&&M){let wn=null;if(i.object.isPerspectiveCamera){const ki=S.length();wn=G(ki*c);const Sr=ki-wn;i.object.position.addScaledVector(x,Sr),i.object.updateMatrixWorld(),En=!!Sr}else if(i.object.isOrthographicCamera){const ki=new L(P.x,P.y,0);ki.unproject(i.object);const Sr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),En=Sr!==i.object.zoom;const Mr=new L(P.x,P.y,0);Mr.unproject(i.object),i.object.position.sub(Mr).add(ki),i.object.updateMatrixWorld(),wn=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;wn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(wn).add(i.object.position):(ml.origin.copy(i.object.position),ml.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ml.direction))<vC?e.lookAt(i.target):(Ng.setFromNormalAndCoplanarPoint(i.object.up,i.target),ml.intersectPlane(Ng,i.target))))}else if(i.object.isOrthographicCamera){const wn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),wn!==i.object.zoom&&(i.object.updateProjectionMatrix(),En=!0)}return c=1,M=!1,En||$.distanceToSquared(i.object.position)>o||8*(1-ie.dot(i.object.quaternion))>o||Ae.distanceToSquared(i.target)>o?(i.dispatchEvent(Ig),$.copy(i.object.position),ie.copy(i.object.quaternion),Ae.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Me),i.domElement.removeEventListener("pointerdown",at),i.domElement.removeEventListener("pointercancel",w),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",w),i.domElement.getRootNode().removeEventListener("keydown",_e,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",de),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new bg,l=new bg;let c=1;const f=new L,d=new Le,h=new Le,m=new Le,_=new Le,y=new Le,v=new Le,u=new Le,g=new Le,p=new Le,x=new L,P=new Le;let M=!1;const T=[],C={};let A=!1;function E(S){return S!==null?2*Math.PI/60*i.autoRotateSpeed*S:2*Math.PI/60/60*i.autoRotateSpeed}function I(S){const j=Math.abs(S*.01);return Math.pow(.95,i.zoomSpeed*j)}function O(S){l.theta-=S}function B(S){l.phi-=S}const q=function(){const S=new L;return function(H,$){S.setFromMatrixColumn($,0),S.multiplyScalar(-H),f.add(S)}}(),X=function(){const S=new L;return function(H,$){i.screenSpacePanning===!0?S.setFromMatrixColumn($,1):(S.setFromMatrixColumn($,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(H),f.add(S)}}(),Y=function(){const S=new L;return function(H,$){const ie=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;S.copy(Ae).sub(i.target);let De=S.length();De*=Math.tan(i.object.fov/2*Math.PI/180),q(2*H*De/ie.clientHeight,i.object.matrix),X(2*$*De/ie.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(H*(i.object.right-i.object.left)/i.object.zoom/ie.clientWidth,i.object.matrix),X($*(i.object.top-i.object.bottom)/i.object.zoom/ie.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(S){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(S,j){if(!i.zoomToCursor)return;M=!0;const H=i.domElement.getBoundingClientRect(),$=S-H.left,ie=j-H.top,Ae=H.width,De=H.height;P.x=$/Ae*2-1,P.y=-(ie/De)*2+1,x.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function G(S){return Math.max(i.minDistance,Math.min(i.maxDistance,S))}function se(S){d.set(S.clientX,S.clientY)}function xe(S){K(S.clientX,S.clientX),u.set(S.clientX,S.clientY)}function He(S){_.set(S.clientX,S.clientY)}function Z(S){h.set(S.clientX,S.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const j=i.domElement;O(2*Math.PI*m.x/j.clientHeight),B(2*Math.PI*m.y/j.clientHeight),d.copy(h),i.update()}function re(S){g.set(S.clientX,S.clientY),p.subVectors(g,u),p.y>0?J(I(p.y)):p.y<0&&N(I(p.y)),u.copy(g),i.update()}function he(S){y.set(S.clientX,S.clientY),v.subVectors(y,_).multiplyScalar(i.panSpeed),Y(v.x,v.y),_.copy(y),i.update()}function ae(S){K(S.clientX,S.clientY),S.deltaY<0?N(I(S.deltaY)):S.deltaY>0&&J(I(S.deltaY)),i.update()}function ee(S){let j=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),j=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),j=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),j=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),j=!0;break}j&&(S.preventDefault(),i.update())}function le(S){if(T.length===1)d.set(S.pageX,S.pageY);else{const j=Oe(S),H=.5*(S.pageX+j.x),$=.5*(S.pageY+j.y);d.set(H,$)}}function Se(S){if(T.length===1)_.set(S.pageX,S.pageY);else{const j=Oe(S),H=.5*(S.pageX+j.x),$=.5*(S.pageY+j.y);_.set(H,$)}}function D(S){const j=Oe(S),H=S.pageX-j.x,$=S.pageY-j.y,ie=Math.sqrt(H*H+$*$);u.set(0,ie)}function Fe(S){i.enableZoom&&D(S),i.enablePan&&Se(S)}function Re(S){i.enableZoom&&D(S),i.enableRotate&&le(S)}function Ze(S){if(T.length==1)h.set(S.pageX,S.pageY);else{const H=Oe(S),$=.5*(S.pageX+H.x),ie=.5*(S.pageY+H.y);h.set($,ie)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const j=i.domElement;O(2*Math.PI*m.x/j.clientHeight),B(2*Math.PI*m.y/j.clientHeight),d.copy(h)}function we(S){if(T.length===1)y.set(S.pageX,S.pageY);else{const j=Oe(S),H=.5*(S.pageX+j.x),$=.5*(S.pageY+j.y);y.set(H,$)}v.subVectors(y,_).multiplyScalar(i.panSpeed),Y(v.x,v.y),_.copy(y)}function Ge(S){const j=Oe(S),H=S.pageX-j.x,$=S.pageY-j.y,ie=Math.sqrt(H*H+$*$);g.set(0,ie),p.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),J(p.y),u.copy(g);const Ae=(S.pageX+j.x)*.5,De=(S.pageY+j.y)*.5;K(Ae,De)}function Ve(S){i.enableZoom&&Ge(S),i.enablePan&&we(S)}function ke(S){i.enableZoom&&Ge(S),i.enableRotate&&Ze(S)}function at(S){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",w)),!ge(S)&&(We(S),S.pointerType==="touch"?ze(S):F(S)))}function b(S){i.enabled!==!1&&(S.pointerType==="touch"?ce(S):Q(S))}function w(S){switch(be(S),T.length){case 0:i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",w),i.dispatchEvent(Dg),s=r.NONE;break;case 1:const j=T[0],H=C[j];ze({pointerId:j,pageX:H.x,pageY:H.y});break}}function F(S){let j;switch(S.button){case 0:j=i.mouseButtons.LEFT;break;case 1:j=i.mouseButtons.MIDDLE;break;case 2:j=i.mouseButtons.RIGHT;break;default:j=-1}switch(j){case rs.DOLLY:if(i.enableZoom===!1)return;xe(S),s=r.DOLLY;break;case rs.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;He(S),s=r.PAN}else{if(i.enableRotate===!1)return;se(S),s=r.ROTATE}break;case rs.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;se(S),s=r.ROTATE}else{if(i.enablePan===!1)return;He(S),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(mf)}function Q(S){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;Z(S);break;case r.DOLLY:if(i.enableZoom===!1)return;re(S);break;case r.PAN:if(i.enablePan===!1)return;he(S);break}}function te(S){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(S.preventDefault(),i.dispatchEvent(mf),ae(ne(S)),i.dispatchEvent(Dg))}function ne(S){const j=S.deltaMode,H={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(j){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return S.ctrlKey&&!A&&(H.deltaY*=10),H}function _e(S){S.key==="Control"&&(A=!0,i.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(S){S.key==="Control"&&(A=!1,i.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function de(S){i.enabled===!1||i.enablePan===!1||ee(S)}function ze(S){switch(Be(S),T.length){case 1:switch(i.touches.ONE){case ss.ROTATE:if(i.enableRotate===!1)return;le(S),s=r.TOUCH_ROTATE;break;case ss.PAN:if(i.enablePan===!1)return;Se(S),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ss.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(S),s=r.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Re(S),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(mf)}function ce(S){switch(Be(S),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ze(S),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;we(S),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ve(S),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ke(S),i.update();break;default:s=r.NONE}}function Me(S){i.enabled!==!1&&S.preventDefault()}function We(S){T.push(S.pointerId)}function be(S){delete C[S.pointerId];for(let j=0;j<T.length;j++)if(T[j]==S.pointerId){T.splice(j,1);return}}function ge(S){for(let j=0;j<T.length;j++)if(T[j]==S.pointerId)return!0;return!1}function Be(S){let j=C[S.pointerId];j===void 0&&(j=new Le,C[S.pointerId]=j),j.set(S.pageX,S.pageY)}function Oe(S){const j=S.pointerId===T[0]?T[1]:T[0];return C[j]}i.domElement.addEventListener("contextmenu",Me),i.domElement.addEventListener("pointerdown",at),i.domElement.addEventListener("pointercancel",w),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",_e,{passive:!0,capture:!0}),this.update()}}const Pr=new ey,en=new L,Yi=new L,gt=new jt,Ug={X:new L(1,0,0),Y:new L(0,1,0),Z:new L(0,0,1)},gf={type:"change"},Og={type:"mouseDown",mode:null},Fg={type:"mouseUp",mode:null},kg={type:"objectChange"};class yC extends ct{constructor(e,n){super(),n===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),n=document),this.isTransformControls=!0,this.visible=!1,this.domElement=n,this.domElement.style.touchAction="none";const i=new TC;this._gizmo=i,this.add(i);const r=new AC;this._plane=r,this.add(r);const s=this;function o(g,p){let x=p;Object.defineProperty(s,g,{get:function(){return x!==void 0?x:p},set:function(P){x!==P&&(x=P,r[g]=P,i[g]=P,s.dispatchEvent({type:g+"-changed",value:P}),s.dispatchEvent(gf))}}),s[g]=p,r[g]=p,i[g]=p}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new L,l=new L,c=new jt,f=new jt,d=new L,h=new jt,m=new L,_=new L,y=new L,v=0,u=new L;o("worldPosition",a),o("worldPositionStart",l),o("worldQuaternion",c),o("worldQuaternionStart",f),o("cameraPosition",d),o("cameraQuaternion",h),o("pointStart",m),o("pointEnd",_),o("rotationAxis",y),o("rotationAngle",v),o("eye",u),this._offset=new L,this._startNorm=new L,this._endNorm=new L,this._cameraScale=new L,this._parentPosition=new L,this._parentQuaternion=new jt,this._parentQuaternionInv=new jt,this._parentScale=new L,this._worldScaleStart=new L,this._worldQuaternionInv=new jt,this._worldScale=new L,this._positionStart=new L,this._quaternionStart=new jt,this._scaleStart=new L,this._getPointer=xC.bind(this),this._onPointerDown=MC.bind(this),this._onPointerHover=SC.bind(this),this._onPointerMove=EC.bind(this),this._onPointerUp=wC.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Pr.setFromCamera(e,this.camera);const n=vf(this._gizmo.picker[this.mode],Pr);n?this.axis=n.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Pr.setFromCamera(e,this.camera);const n=vf(this._plane,Pr,!0);n&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(n.point).sub(this.worldPositionStart)),this.dragging=!0,Og.mode=this.mode,this.dispatchEvent(Og)}}pointerMove(e){const n=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(n==="E"||n==="XYZE"||n==="XYZ")&&(s="world"),r===void 0||n===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Pr.setFromCamera(e,this.camera);const o=vf(this._plane,Pr,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&n!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),n.indexOf("X")===-1&&(this._offset.x=0),n.indexOf("Y")===-1&&(this._offset.y=0),n.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&n!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(gt.copy(this._quaternionStart).invert()),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(en.setFromMatrixPosition(r.parent.matrixWorld)),n.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),n.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),n.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(en.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(n.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Yi.set(a,a,a)}else en.copy(this.pointStart),Yi.copy(this.pointEnd),en.applyQuaternion(this._worldQuaternionInv),Yi.applyQuaternion(this._worldQuaternionInv),Yi.divide(en),n.search("X")===-1&&(Yi.x=1),n.search("Y")===-1&&(Yi.y=1),n.search("Z")===-1&&(Yi.z=1);r.scale.copy(this._scaleStart).multiply(Yi),this.scaleSnap&&(n.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),n.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(en.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;n==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(en.copy(this.rotationAxis).cross(this.eye))*a):(n==="X"||n==="Y"||n==="Z")&&(this.rotationAxis.copy(Ug[n]),en.copy(Ug[n]),s==="local"&&en.applyQuaternion(this.worldQuaternion),en.cross(this.eye),en.length()===0?l=!0:this.rotationAngle=this._offset.dot(en.normalize())*a),(n==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&n!=="E"&&n!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(gt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(gt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gf),this.dispatchEvent(kg)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Fg.mode=this.mode,this.dispatchEvent(Fg)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gf),this.dispatchEvent(kg),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Pr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function xC(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function SC(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t));break}}function MC(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function EC(t){this.enabled&&this.pointerMove(this._getPointer(t))}function wC(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function vf(t,e,n){const i=e.intersectObject(t,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||n)return i[r];return!1}const gl=new Wn,ot=new L(0,1,0),zg=new L(0,0,0),Bg=new mt,vl=new jt,Gl=new jt,si=new L,Hg=new mt,ko=new L(1,0,0),Nr=new L(0,1,0),zo=new L(0,0,1),_l=new L,bo=new L,Po=new L;class TC extends ct{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Qr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=new Ma({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=n.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const f=e.clone();f.color.setHex(255),f.opacity=.5;const d=e.clone();d.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const _=e.clone();_.color.setHex(7895160);const y=new Gt(0,.04,.1,12);y.translate(0,.05,0);const v=new yt(.08,.08,.08);v.translate(0,.04,0);const u=new qt;u.setAttribute("position",new st([0,0,0,1,0,0],3));const g=new Gt(.0075,.0075,.5,3);g.translate(0,.25,0);function p(X,Y){const J=new Fr(X,.0075,3,64,Y*Math.PI*2);return J.rotateY(Math.PI/2),J.rotateX(Math.PI/2),J}function x(){const X=new qt;return X.setAttribute("position",new st([0,0,0,1,1,1],3)),X}const P={X:[[new me(y,s),[.5,0,0],[0,0,-Math.PI/2]],[new me(y,s),[-.5,0,0],[0,0,Math.PI/2]],[new me(g,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new me(y,o),[0,.5,0]],[new me(y,o),[0,-.5,0],[Math.PI,0,0]],[new me(g,o)]],Z:[[new me(y,a),[0,0,.5],[Math.PI/2,0,0]],[new me(y,a),[0,0,-.5],[-Math.PI/2,0,0]],[new me(g,a),null,[Math.PI/2,0,0]]],XYZ:[[new me(new Os(.1,0),d.clone()),[0,0,0]]],XY:[[new me(new yt(.15,.15,.01),f.clone()),[.15,.15,0]]],YZ:[[new me(new yt(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new yt(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},M={X:[[new me(new Gt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new me(new Gt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new me(new Gt(.2,0,.6,4),i),[0,.3,0]],[new me(new Gt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new me(new Gt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new me(new Gt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new me(new Os(.2,0),i)]],XY:[[new me(new yt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new me(new yt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new yt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},T={START:[[new me(new Os(.01,2),r),null,null,null,"helper"]],END:[[new me(new Os(.01,2),r),null,null,null,"helper"]],DELTA:[[new li(x(),r),null,null,null,"helper"]],X:[[new li(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new li(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new li(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new me(p(.5,1),_),null,[0,Math.PI/2,0]]],X:[[new me(p(.5,.5),s)]],Y:[[new me(p(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new me(p(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new me(p(.75,1),h),null,[0,Math.PI/2,0]]]},A={AXIS:[[new li(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},E={XYZE:[[new me(new da(.25,10,8),i)]],X:[[new me(new Fr(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new me(new Fr(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new me(new Fr(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new me(new Fr(.75,.1,2,24),i)]]},I={X:[[new me(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new me(g,s),[0,0,0],[0,0,-Math.PI/2]],[new me(v,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new me(v,o),[0,.5,0]],[new me(g,o)],[new me(v,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new me(v,a),[0,0,.5],[Math.PI/2,0,0]],[new me(g,a),[0,0,0],[Math.PI/2,0,0]],[new me(v,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new me(new yt(.15,.15,.01),f),[.15,.15,0]]],YZ:[[new me(new yt(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new yt(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new me(new yt(.1,.1,.1),d.clone())]]},O={X:[[new me(new Gt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new me(new Gt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new me(new Gt(.2,0,.6,4),i),[0,.3,0]],[new me(new Gt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new me(new Gt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new me(new Gt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new me(new yt(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new me(new yt(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new me(new yt(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new me(new yt(.2,.2,.2),i),[0,0,0]]]},B={X:[[new li(u,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new li(u,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new li(u,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function q(X){const Y=new ct;for(const J in X)for(let N=X[J].length;N--;){const K=X[J][N][0].clone(),G=X[J][N][1],se=X[J][N][2],xe=X[J][N][3],He=X[J][N][4];K.name=J,K.tag=He,G&&K.position.set(G[0],G[1],G[2]),se&&K.rotation.set(se[0],se[1],se[2]),xe&&K.scale.set(xe[0],xe[1],xe[2]),K.updateMatrix();const Z=K.geometry.clone();Z.applyMatrix4(K.matrix),K.geometry=Z,K.renderOrder=1/0,K.position.set(0,0,0),K.rotation.set(0,0,0),K.scale.set(1,1,1),Y.add(K)}return Y}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=q(P)),this.add(this.gizmo.rotate=q(C)),this.add(this.gizmo.scale=q(I)),this.add(this.picker.translate=q(M)),this.add(this.picker.rotate=q(E)),this.add(this.picker.scale=q(O)),this.add(this.helper.translate=q(T)),this.add(this.helper.rotate=q(A)),this.add(this.helper.scale=q(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Gl;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(gt.setFromEuler(gl.set(0,0,0)),o.quaternion.copy(i).multiply(gt),Math.abs(ot.copy(ko).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(gt.setFromEuler(gl.set(0,0,Math.PI/2)),o.quaternion.copy(i).multiply(gt),Math.abs(ot.copy(Nr).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(gt.setFromEuler(gl.set(0,Math.PI/2,0)),o.quaternion.copy(i).multiply(gt),Math.abs(ot.copy(zo).applyQuaternion(i).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(gt.setFromEuler(gl.set(0,Math.PI/2,0)),ot.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Bg.lookAt(zg,ot,Nr)),o.quaternion.multiply(gt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),en.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),en.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(en),o.visible=this.dragging):(o.quaternion.copy(i),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ot.copy(ko).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ot.copy(Nr).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ot.copy(zo).applyQuaternion(i).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ot.copy(zo).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ot.copy(ko).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ot.copy(Nr).applyQuaternion(i).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(vl.copy(i),ot.copy(this.eye).applyQuaternion(gt.copy(i).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Bg.lookAt(this.eye,zg,Nr)),o.name==="X"&&(gt.setFromAxisAngle(ko,Math.atan2(-ot.y,ot.z)),gt.multiplyQuaternions(vl,gt),o.quaternion.copy(gt)),o.name==="Y"&&(gt.setFromAxisAngle(Nr,Math.atan2(ot.x,ot.z)),gt.multiplyQuaternions(vl,gt),o.quaternion.copy(gt)),o.name==="Z"&&(gt.setFromAxisAngle(zo,Math.atan2(ot.y,ot.x)),gt.multiplyQuaternions(vl,gt),o.quaternion.copy(gt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class AC extends me{constructor(){super(new fo(1e5,1e5,2,2),new Qr({visible:!1,wireframe:!0,side:Qn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let n=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(n="local"),_l.copy(ko).applyQuaternion(n==="local"?this.worldQuaternion:Gl),bo.copy(Nr).applyQuaternion(n==="local"?this.worldQuaternion:Gl),Po.copy(zo).applyQuaternion(n==="local"?this.worldQuaternion:Gl),ot.copy(bo),this.mode){case"translate":case"scale":switch(this.axis){case"X":ot.copy(this.eye).cross(_l),si.copy(_l).cross(ot);break;case"Y":ot.copy(this.eye).cross(bo),si.copy(bo).cross(ot);break;case"Z":ot.copy(this.eye).cross(Po),si.copy(Po).cross(ot);break;case"XY":si.copy(Po);break;case"YZ":si.copy(_l);break;case"XZ":ot.copy(Po),si.copy(bo);break;case"XYZ":case"E":si.set(0,0,0);break}break;case"rotate":default:si.set(0,0,0)}si.length()===0?this.quaternion.copy(this.cameraQuaternion):(Hg.lookAt(en.set(0,0,0),si,ot),this.quaternion.setFromRotationMatrix(Hg)),super.updateMatrixWorld(e)}}const CC=t=>t/1e3;function Wl(t){return 2*Math.atan(t.sensor.h/(2*t.focal))*180/Math.PI}function RC(t){return 2*Math.atan(t.sensor.w/(2*t.focal))*180/Math.PI}function bC(t,e,n,i=1){const r=CC(t.focal),s=t.aperture,o=Math.abs(n-e)/Math.max(n,1e-6),a=.6*(r/s)*o*i;return Math.max(0,Math.min(5,a*5))}function PC(t,e){const n=t/100/Math.max(e,1e-6);return Math.max(0,Math.min(1,n))}function ty(t,e){return 2*Math.atan(t/(2*e))}function ny(t,e,n){return t/(n*2*Math.tan(e/2))}function LC(t){const e=t.cameraRig.position,n=t.subject.position,i=e[0]-n[0],r=e[1]-n[1],s=e[2]-n[2];return`距离: ${Math.sqrt(i*i+r*r+s*s).toFixed(2)}m`}function iy(t,e,n,i,r){const s=h=>h*Math.PI/180,o=s(i),a=s(r),l=new L(0,0,-n),c=new Wn(-a,o,0,"XYZ");l.applyEuler(c);const f=new L(t[0]+l.x,t[1]+l.y,t[2]+l.z),d=new L(t[0],e,t[2]);return{position:[f.x,f.y,f.z],lookAt:[d.x,d.y,d.z]}}function Vg(t){const e=t.cameraRig.aim,n=new L(...t.subject.position);if(!e||e.mode==="subjectCenter")return n.y=t.subject.height/200,n;if(e.mode==="subjectEye"){const i=e.eyeRatio??.93;return n.y=t.subject.height*i/100,n}else return e.mode==="custom"&&e.customPoint?new L(...e.customPoint):(n.y=t.subject.height/200,n)}const Ei=1;function IC({recipe:t,onRecipeChange:e,target:n,onTargetChange:i,showHelpers:r=!0,controlMode:s=!1,aimClickMode:o="holdShift",autoSwitchAimOnClick:a=!1}){const l=$e.useRef(null),c=$e.useRef(null),f=$e.useRef(null);return $e.useEffect(()=>{if(!l.current)return;const d=l.current,h=new cC;h.background=new Ke(16185078);const m=new bn(60,1,.1,100);m.position.set(6,4,8);const _=new yg({antialias:!0});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.appendChild(_.domElement);const y=new mC(20,20,10066329,14540253);h.add(y);const v=new gC(1.5);h.add(v);const u=new ct;u.name="subjectGroup",h.add(u);const g=new dl({color:8962256,side:Qn,roughness:.7}),p=new fo(1,1),x=new me(p,g);x.name="subjectRect",u.add(x);const P=new ct;P.name="subjectFigure",u.add(P);const M=new ct;M.position.set(...t.cameraRig.position),h.add(M);const T=new me(new yt(.1,.1,.1),new Qr({color:2236962}));M.add(T);const C=new bn(50,16/9,.1,100);M.add(C);const A=new L(...t.light.position),E=new L(0,1,0),I=new Lg(E,A,1.5,16755200,.2,.12);I.name="lightArrow",I.layers.set(Ei),h.add(I);const O=new ct;O.name="aimTarget",O.layers.set(Ei),h.add(O);const B=new me(new da(.05,16,12),new Qr({color:4886754,transparent:!0,opacity:.8}));O.add(B);const q=new L(0,0,-1),X=new Lg(q,new L,1,4886754,.15,.08);X.name="aimArrow",X.layers.set(Ei),h.add(X),(()=>{const b=Vg(t);O.position.copy(b)})();const J=()=>{const b=M.position.clone(),w=O.position.clone(),F=new L().subVectors(w,b).normalize(),Q=b.distanceTo(w);X.position.copy(b),X.setDirection(F),X.setLength(Math.max(.3,Math.min(Q*.8,3)))};J(),h.add(new dC(16777215,.6));const N=new hC(16777215,.6);N.position.set(3,5,2),h.add(N),C.layers.enable(0),C.layers.disable(Ei),m.layers.enable(0),m.layers.enable(Ei);const K=new _C(m,_.domElement);K.enableDamping=!0;const G=new yC(m,_.domElement);G.traverse(b=>{b.layers&&b.layers.set(Ei)}),h.add(G),G.addEventListener("dragging-changed",b=>{K.enabled=!b.value});const se=()=>{const b=d.clientWidth,w=d.clientHeight;m.aspect=b/w,m.updateProjectionMatrix(),_.setSize(b,w)};se(),window.addEventListener("resize",se);const xe=b=>{var ut,S,j,H,$,ie,Ae,De,ft;P.clear();const w=b.height/100,F=((ut=b.figureStyle)==null?void 0:ut.headRatio)??.12,Q=((S=b.figureStyle)==null?void 0:S.upperRatio)??.38,te=((j=b.figureStyle)==null?void 0:j.lowerRatio)??.5,ne=w*F,_e=w*Q,ue=w*te,de=(($=(H=b.figureStyle)==null?void 0:H.colors)==null?void 0:$.head)??15910594,ze=((Ae=(ie=b.figureStyle)==null?void 0:ie.colors)==null?void 0:Ae.upper)??6990335,ce=((ft=(De=b.figureStyle)==null?void 0:De.colors)==null?void 0:ft.lower)??8962256,Me=new me(new da(ne*.5,16,12),new dl({color:de,roughness:.6}));Me.position.y=ue+_e+ne*.5,P.add(Me);const We=b.width/100*1.05,be=new me(new yt(We,_e,We*.45),new dl({color:ze,roughness:.7}));be.position.y=ue+_e*.5,P.add(be);const ge=b.width/100*1.05,Be=b.width/100*.75,Oe=new me(new yt(ge,ue,Be),new dl({color:ce,roughness:.8}));Oe.position.y=ue*.5,P.add(Oe)},He=b=>{const w=b.height/100,F=b.width/100;u.position.set(b.position[0],0,b.position[2]);const Q=M.position.clone(),te=new L().subVectors(Q,u.position),ne=Math.atan2(te.x,te.z);u.rotation.set(0,ne,0),x.visible=(b.visual??"figure")==="rect",P.visible=(b.visual??"figure")==="figure",x.visible?(x.scale.set(F,w,1),x.position.set(0,w/2,0)):xe(b)},Z=()=>{const b=t.cameraRig.spec,w=Wl(b);C.fov=w,C.aspect=16/9,C.updateProjectionMatrix(),M.position.set(...t.cameraRig.position);const F=new L(...t.cameraRig.lookAt);C.lookAt(F)},re=()=>{I.position.copy(A);const b=new L().copy(u.position);b.y=t.subject.height/200;const w=new L().subVectors(b,A).normalize();I.setDirection(w);const F=A.distanceTo(b);I.setLength(Math.max(.5,Math.min(2.5,F)))};He(t.subject),Z(),re();let he=n,ae=null,ee=null;const le=b=>{console.log("Setting transform target to:",b),he=b,G.detach(),ee&&(G.removeEventListener("objectChange",ee),ee=null),b==="camera"?(console.log("Attaching to camera rig"),G.attach(M),G.setMode("translate"),G.showX=!0,G.showY=!0,G.showZ=!0,ee=()=>{console.log("Camera moved to:",M.position);const w=[M.position.x,M.position.y,M.position.z];e(F=>{const Q={...F,cameraRig:{...F.cameraRig,position:w}},te=Q.cameraRig.spec,ne=Wl(te);C.fov=ne,C.aspect=16/9,C.updateProjectionMatrix();const _e=new L(...Q.cameraRig.lookAt);return C.lookAt(_e),Q})},G.addEventListener("objectChange",ee)):b==="subject"?(console.log("Attaching to subject"),G.attach(u),G.setMode("translate"),G.showX=!0,G.showY=!0,G.showZ=!0,ee=()=>{console.log("Subject moved to:",u.position),e(w=>{const F=[u.position.x,u.position.y,u.position.z];return{...w,subject:{...w.subject,position:F}}}),re()},G.addEventListener("objectChange",ee)):b==="light"?(console.log("Attaching to light"),ae&&h.remove(ae),ae=new ct,ae.position.copy(A),h.add(ae),G.attach(ae),G.setMode("translate"),G.showX=!0,G.showY=!0,G.showZ=!0,ee=()=>{console.log("Light moved to:",ae.position),A.copy(ae.position);const w=[A.x,A.y,A.z];e(F=>({...F,light:{position:w}})),re()},G.addEventListener("objectChange",ee)):b==="aim"&&(console.log("Attaching to aim target"),G.attach(O),G.setMode("translate"),G.showX=!0,G.showY=!0,G.showZ=!0,ee=()=>{console.log("Aim target moved to:",O.position);const w=[O.position.x,O.position.y,O.position.z];C.lookAt(O.position),J(),e(F=>{var Q;return{...F,cameraRig:{...F.cameraRig,aim:{...F.cameraRig.aim||{},mode:"custom",customPoint:w,eyeRatio:((Q=F.cameraRig.aim)==null?void 0:Q.eyeRatio)??.93},lookAt:w}}})},G.addEventListener("objectChange",ee))};le(n);const Se=b=>{b?(m.layers.enable(Ei),le(he)):(m.layers.disable(Ei),G.detach())},D=b=>{console.log("Updating scene from external recipe change:",b),M.position.set(...b.cameraRig.position);const w=b.cameraRig.spec,F=Wl(w);C.fov=F,C.aspect=16/9,C.updateProjectionMatrix();const Q=new L(...b.cameraRig.lookAt);C.lookAt(Q),He(b.subject),A.set(...b.light.position),I.position.copy(A);const te=new L().copy(u.position);te.y=b.subject.height/200;const ne=new L().subVectors(te,A).normalize();I.setDirection(ne);const _e=A.distanceTo(te);I.setLength(Math.max(.5,Math.min(2.5,_e))),ae&&ae.position.copy(A);const ue=Vg(b);O.position.copy(ue),J()},Fe=b=>{console.log("Setting control mode to:",b,"current target:",he),b?(G.traverse(w=>{w.layers&&w.layers.set(0)}),le(he),console.log("Control mode enabled, TransformControls moved to layer 0 and attached to:",he)):(G.detach(),G.traverse(w=>{w.layers&&w.layers.set(Ei)}),console.log("Control mode disabled, TransformControls detached and moved back to HELPER_LAYER"))};f.current={setTransformTarget:le,setHelpersVisible:Se,updateFromRecipe:D,setControlMode:Fe};let Re=null;if(c.current){Re=new yg({canvas:c.current,antialias:!0,alpha:!0}),Re.setPixelRatio(Math.min(window.devicePixelRatio,2));const b=c.current.clientWidth,w=c.current.clientHeight;C.aspect=b/w,C.updateProjectionMatrix(),Re.setSize(b,w)}const Ze=new ey,we=new Le;let Ge=!1;G.addEventListener("dragging-changed",b=>{Ge=b.value});function Ve(b){var ne;if(o==="off"||o==="holdShift"&&!b.shiftKey||s&&he!=="aim"||Ge||G.axis||b.button!==0)return;const w=_.domElement.getBoundingClientRect();we.x=(b.clientX-w.left)/w.width*2-1,we.y=-((b.clientY-w.top)/w.height)*2+1,Ze.setFromCamera(we,m);const F=[];P.visible&&F.push(P),x.visible&&F.push(x);let Q=null;if(F.length){const _e=Ze.intersectObjects(F,!0);_e.length&&(Q=_e[0].point.clone())}if(!Q){const _e=new Ri(new L(0,1,0),0),ue=new L;Ze.ray.intersectPlane(_e,ue)&&(Q=ue.clone())}if(!Q)return;O.position.copy(Q),C.lookAt(Q),J();const te=[Q.x,Q.y,Q.z];e({...t,cameraRig:{...t.cameraRig,aim:{...t.cameraRig.aim||{},mode:"custom",customPoint:te,eyeRatio:((ne=t.cameraRig.aim)==null?void 0:ne.eyeRatio)??.93},lookAt:te}}),a&&he!=="aim"&&i("aim")}_.domElement.addEventListener("pointerdown",Ve);const ke=new pC,at=()=>{ke.getDelta(),K.update(),_.render(h,m),Re&&Re.render(h,C),requestAnimationFrame(at)};return at(),()=>{window.removeEventListener("resize",se),_.domElement.removeEventListener("pointerdown",Ve),G.dispose(),K.dispose(),_.dispose(),Re&&Re.dispose(),d.removeChild(_.domElement)}},[]),$e.useEffect(()=>{f.current&&f.current.setTransformTarget(n)},[n]),$e.useEffect(()=>{f.current&&f.current.setHelpersVisible(r)},[r]),$e.useEffect(()=>{f.current&&f.current.setControlMode(s)},[s]),$e.useEffect(()=>{f.current&&f.current.updateFromRecipe(t)},[t]),k.jsx("div",{ref:l,className:"canvas-wrap",children:k.jsx("canvas",{ref:c,className:"preview-canvas"})})}const Gg=t=>({subject:t.subject,cameraRig:t.cameraRig,light:t.light,lens:t.lens,styleMeta:t.styleMeta}),_t=t=>Number((t*.93/100).toFixed(2)),oi={FF:{w:36,h:24},APS:{w:22.3,h:14.9},M43:{w:17.3,h:13}},Ac=[{title:"经典85等效半身（APS-C 50/2）",tags:["人像","半身","室内","柔光"],styleMeta:{framing:"half",defaultAim:"subjectEye",focalRange:{min:45,max:60},notes:"面部为主的中景半身"},subject:{height:170,width:45,position:[0,0,0]},cameraRig:{position:[0,_t(170),-2],lookAt:[0,_t(170),0],spec:{sensor:oi.APS,focal:50,aperture:2,iso:200,shutter:"1/250"},aim:{mode:"subjectEye",eyeRatio:.93}},light:{position:[-1.2,1.9,-.6]},lens:{isZoom:!1,focalMin:50,focalMax:50,minAperture:2}},{title:"环境人像35（APS-C 22/2.8）",tags:["环境","半身/全身","自然光"],styleMeta:{framing:"half",defaultAim:"subjectCenter",focalRange:{min:20,max:28},notes:"带环境的半身"},subject:{height:170,width:45,position:[0,0,0]},cameraRig:{position:[.2,_t(170)-.05,-1.4],lookAt:[0,_t(170),0],spec:{sensor:oi.APS,focal:22,aperture:2.8,iso:200,shutter:"1/250"},aim:{mode:"subjectCenter"}},light:{position:[1,2,-1]},lens:{isZoom:!1,focalMin:22,focalMax:22,minAperture:2.8}},{title:"窗光清透半身（APS-C 22/1.8）",tags:["窗光","半身","清透"],styleMeta:{framing:"half",defaultAim:"subjectEye",focalRange:{min:18,max:28}},subject:{height:165,width:42,position:[0,0,0]},cameraRig:{position:[0,_t(165),-1.6],lookAt:[0,_t(165),0],spec:{sensor:oi.APS,focal:22,aperture:1.8,iso:400,shutter:"1/250"},aim:{mode:"subjectEye",eyeRatio:.93}},light:{position:[-1.5,1.6,.8]},lens:{isZoom:!1,focalMin:22,focalMax:22,minAperture:1.8}},{title:"逆光轮廓+反光板（APS-C 30/2）",tags:["逆光","轮廓","户外"],styleMeta:{framing:"half",defaultAim:"subjectCenter",focalRange:{min:24,max:35}},subject:{height:170,width:45,position:[0,0,0]},cameraRig:{position:[-.2,_t(170)-.05,-1.8],lookAt:[0,_t(170),0],spec:{sensor:oi.APS,focal:30,aperture:2,iso:200,shutter:"1/500"},aim:{mode:"subjectCenter"}},light:{position:[0,2.8,2]},lens:{isZoom:!1,focalMin:30,focalMax:30,minAperture:2}},{title:"蝴蝶光清透妆面（FF 85/5.6）",tags:["妆面","棚拍","蝴蝶光","胸像"],styleMeta:{framing:"close",defaultAim:"subjectEye",focalRange:{min:75,max:105}},subject:{height:170,width:45,position:[0,0,0]},cameraRig:{position:[0,_t(170)+.05,-1.1],lookAt:[0,_t(170),0],spec:{sensor:oi.FF,focal:85,aperture:5.6,iso:100,shutter:"1/160"},aim:{mode:"subjectEye",eyeRatio:.93}},light:{position:[0,_t(170)+.35,-.6]},lens:{isZoom:!1,focalMin:85,focalMax:85,minAperture:1.8}},{title:"伦勃朗三角（FF 50/4）",tags:["伦勃朗","棚拍","对比","半身"],styleMeta:{framing:"half",defaultAim:"subjectEye",focalRange:{min:45,max:60}},subject:{height:175,width:46,position:[0,0,0]},cameraRig:{position:[.3,_t(175),-1.6],lookAt:[0,_t(175),0],spec:{sensor:oi.FF,focal:50,aperture:4,iso:100,shutter:"1/160"},aim:{mode:"subjectEye",eyeRatio:.93}},light:{position:[1,_t(175)+.2,-.8]},lens:{isZoom:!1,focalMin:50,focalMax:50,minAperture:1.8}},{title:"夜景霓虹环境人像（FF 35/1.8）",tags:["夜景","环境","城市","半身"],styleMeta:{framing:"half",defaultAim:"subjectCenter",focalRange:{min:28,max:40}},subject:{height:165,width:42,position:[0,0,0]},cameraRig:{position:[-.1,_t(165)-.03,-1.2],lookAt:[0,_t(165),0],spec:{sensor:oi.FF,focal:35,aperture:1.8,iso:1600,shutter:"1/125"},aim:{mode:"subjectCenter"}},light:{position:[.6,1.5,-.5]},lens:{isZoom:!1,focalMin:35,focalMax:35,minAperture:1.8}},{title:"全身街拍长焦压缩（APS-C 56/2.8）",tags:["全身","街拍","长焦","压缩"],styleMeta:{framing:"full",defaultAim:"subjectCenter",focalRange:{min:50,max:85}},subject:{height:170,width:45,position:[0,0,0]},cameraRig:{position:[0,_t(170)+.02,-5],lookAt:[0,_t(170),0],spec:{sensor:oi.APS,focal:56,aperture:2.8,iso:200,shutter:"1/500"},aim:{mode:"subjectCenter"}},light:{position:[-1,2,-2]},lens:{isZoom:!1,focalMin:56,focalMax:56,minAperture:2.8}},{title:"极简高调白背景（M4/3 25/8）",tags:["高调","棚拍","白背景","干净"],styleMeta:{framing:"full",defaultAim:"subjectCenter",focalRange:{min:20,max:35}},subject:{height:168,width:44,position:[0,0,0]},cameraRig:{position:[0,_t(168)+.03,-1.7],lookAt:[0,_t(168),0],spec:{sensor:oi.M43,focal:25,aperture:8,iso:200,shutter:"1/125"},aim:{mode:"subjectCenter"}},light:{position:[.5,2.2,-.6]},lens:{isZoom:!1,focalMin:25,focalMax:25,minAperture:1.7}},{title:"低调分割光（APS-C 35/2.2）",tags:["低调","分割光","戏剧感","半身"],styleMeta:{framing:"half",defaultAim:"subjectEye",focalRange:{min:28,max:40}},subject:{height:175,width:46,position:[0,0,0]},cameraRig:{position:[.2,_t(175),-1.5],lookAt:[0,_t(175),0],spec:{sensor:oi.APS,focal:35,aperture:2.2,iso:200,shutter:"1/250"},aim:{mode:"subjectEye",eyeRatio:.93}},light:{position:[1.6,_t(175)+.15,0]},lens:{isZoom:!1,focalMin:35,focalMax:35,minAperture:2}}];function Wg(t,e){if(!t.styleMeta||!t.styleMeta.focalRange||!e)return{ok:!0};const n=t.styleMeta.focalRange,i={min:e.focalMin,max:e.focalMax};return Math.max(n.min,i.min)<=Math.min(n.max,i.max)?{ok:!0}:{ok:!1,reason:`需要焦段 ${n.min}-${n.max}mm`}}const ry={zh:{templates:"模板",myTemplates:"我的模板",builtinTemplates:"内置模板",saveAsTemplate:"保存为我的模板",templateName:"模板名称",importExif:"从样片生成",copyShare:"复制复刻码",exportJson:"导出 Recipe JSON",importJson:"导入 JSON",wizard:"三步向导",step1:"第一步：选择风格",step2:"第二步：选择机身镜头",step3:"第三步：选择构图",selectTemplate:"选择模板",selectSensor:"选择画幅",selectFocal:"选择焦距",selectFraming:"选择构图",applyWizard:"应用设置",cameraSettings:"相机参数",subjectHeight:"模特身高",subjectWidth:"体宽",focal:"焦距",aperture:"光圈",iso:"ISO",shutter:"快门",fov:"FOV（预估）",bokeh:"虚化指数",softness:"软硬度",transformTarget:"变换控制目标",camera:"相机",subject:"模特",light:"灯光",shareCodeCopied:"复刻码已复制到剪贴板",templateSaved:"模板已保存",exifImported:"已根据 EXIF 生成初始方案",jsonParseError:"JSON 解析失败",exifParseError:"EXIF 解析失败",cm:"cm",mm:"mm",meter:"m",degree:"°",language:"语言",hint:"提示：拖拽右侧场景中的小黑盒改变相机位置；拖拽蓝色矩形改变模特位置；右下角为相机预览。"},ja:{templates:"テンプレート",myTemplates:"マイ・テンプレート",builtinTemplates:"内蔵テンプレート",saveAsTemplate:"マイ・テンプレに保存",templateName:"テンプレート名",importExif:"作例から生成",copyShare:"レシピコードをコピー",exportJson:"Recipe JSON をエクスポート",importJson:"JSON をインポート",wizard:"3ステップウィザード",step1:"ステップ1：スタイル選択",step2:"ステップ2：カメラ・レンズ選択",step3:"ステップ3：構図選択",selectTemplate:"テンプレート選択",selectSensor:"センサーサイズ選択",selectFocal:"焦点距離選択",selectFraming:"構図選択",applyWizard:"設定を適用",cameraSettings:"カメラ設定",subjectHeight:"モデル身長",subjectWidth:"体幅",focal:"焦点距離",aperture:"絞り",iso:"ISO",shutter:"シャッター",fov:"FOV（推定）",bokeh:"ボケ指数",softness:"ソフトネス",transformTarget:"変換制御対象",camera:"カメラ",subject:"モデル",light:"ライト",shareCodeCopied:"レシピコードをクリップボードにコピーしました",templateSaved:"テンプレートを保存しました",exifImported:"EXIF から初期設定を生成しました",jsonParseError:"JSON の解析に失敗しました",exifParseError:"EXIF の解析に失敗しました",cm:"cm",mm:"mm",meter:"m",degree:"°",language:"言語",hint:"ヒント：右側のシーンで黒いボックスをドラッグしてカメラ位置を変更；青い矩形をドラッグしてモデル位置を変更；右下角はカメラプレビューです。"},en:{templates:"Templates",myTemplates:"My Templates",builtinTemplates:"Built-in Templates",saveAsTemplate:"Save as My Template",templateName:"Template Name",importExif:"Generate from Sample",copyShare:"Copy Share Code",exportJson:"Export Recipe JSON",importJson:"Import JSON",wizard:"3-Step Wizard",step1:"Step 1: Select Style",step2:"Step 2: Select Camera & Lens",step3:"Step 3: Select Framing",selectTemplate:"Select Template",selectSensor:"Select Sensor",selectFocal:"Select Focal Length",selectFraming:"Select Framing",applyWizard:"Apply Settings",cameraSettings:"Camera Settings",subjectHeight:"Subject Height",subjectWidth:"Subject Width",focal:"Focal Length",aperture:"Aperture",iso:"ISO",shutter:"Shutter",fov:"FOV (Estimated)",bokeh:"Bokeh Index",softness:"Softness",transformTarget:"Transform Target",camera:"Camera",subject:"Subject",light:"Light",shareCodeCopied:"Share code copied to clipboard",templateSaved:"Template saved",exifImported:"Initial setup generated from EXIF",jsonParseError:"JSON parsing failed",exifParseError:"EXIF parsing failed",cm:"cm",mm:"mm",meter:"m",degree:"°",language:"Language",hint:"Hint: Drag the black box in the right scene to change camera position; drag the blue rectangle to change subject position; bottom-right corner shows camera preview."}};let eu="zh";function DC(){const t=localStorage.getItem("photo-recipe-lang");t&&ry[t]&&(eu=t)}function NC(t){eu=t,localStorage.setItem("photo-recipe-lang",t)}function UC(){return eu}function Ye(t){return ry[eu][t]||t}DC();const yl={FF:{w:36,h:24},APS:{w:22.3,h:14.9},M43:{w:17.3,h:13}},xl=[{name:"50mm f/1.8 (定焦)",isZoom:!1,focalMin:50,focalMax:50,minAperture:1.8},{name:"85mm f/1.4 (定焦)",isZoom:!1,focalMin:85,focalMax:85,minAperture:1.4},{name:"35mm f/2.0 (定焦)",isZoom:!1,focalMin:35,focalMax:35,minAperture:2},{name:"24-70mm f/2.8 (变焦)",isZoom:!0,focalMin:24,focalMax:70,minAperture:2.8},{name:"18-55mm f/3.5-5.6 (变焦)",isZoom:!0,focalMin:18,focalMax:55,minAperture:3.5},{name:"70-200mm f/2.8 (变焦)",isZoom:!0,focalMin:70,focalMax:200,minAperture:2.8}];function OC({recipe:t,onRecipeChange:e,onClose:n}){const[i,r]=$e.useState(1),[s,o]=$e.useState(yl.APS),[a,l]=$e.useState(xl[0]),[c,f]=$e.useState(null),[d,h]=$e.useState(!1),[m,_]=$e.useState(20),[y,v]=$e.useState(-4),u=()=>{if(!c)return;let p={...t};p.cameraRig.spec.sensor=s,p.lens=a;const x=p.cameraRig.spec.focal;if(p.cameraRig.spec.focal=Math.min(Math.max(x,a.focalMin),a.focalMax),p.styleMeta=c.styleMeta,c.styleMeta&&(p.cameraRig.aim={mode:c.styleMeta.defaultAim,eyeRatio:.93}),c.styleMeta){const P=c.styleMeta.framing==="full"?.9:c.styleMeta.framing==="half"?.6:.4,M=ty(s.h,p.cameraRig.spec.focal),T=ny(p.subject.height/100,M,P),C=p.subject.height*.93/100,{position:A,lookAt:E}=iy(p.subject.position,C,T,m,y);p.cameraRig.position=A,p.cameraRig.lookAt=E}p.light=c.light,c.tags&&(p.tags=c.tags),e(p),n()},g=()=>d?Ac.map(p=>({style:p,compatibility:Wg(p,a)})):Ac.map(p=>({style:p,compatibility:Wg(p,a)})).filter(p=>p.compatibility.ok);return k.jsx("div",{className:"wizard-overlay",children:k.jsxs("div",{className:"wizard-modal",children:[k.jsxs("div",{className:"wizard-header",children:[k.jsx("h3",{children:Ye("wizard")}),k.jsx("button",{className:"close-btn",onClick:n,children:"×"})]}),k.jsxs("div",{className:"wizard-steps",children:[k.jsx("div",{className:`step ${i===1?"active":""}`,children:"1"}),k.jsx("div",{className:`step ${i===2?"active":""}`,children:"2"})]}),k.jsxs("div",{className:"wizard-content",children:[i===1&&k.jsxs("div",{className:"wizard-step",children:[k.jsx("h4",{children:"第一步：相机与镜头"}),k.jsx("p",{children:"选择传感器画幅和镜头"}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"传感器画幅"}),k.jsxs("select",{value:s===yl.FF?"FF":s===yl.APS?"APS":"M43",onChange:p=>{const x=p.target.value;o(yl[x])},children:[k.jsx("option",{value:"FF",children:"全画幅 (36×24mm)"}),k.jsx("option",{value:"APS",children:"APS-C (22.3×14.9mm)"}),k.jsx("option",{value:"M43",children:"M4/3 (17.3×13.0mm)"})]})]}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"镜头"}),k.jsx("select",{value:xl.findIndex(p=>p.name===a.name),onChange:p=>l(xl[Number(p.target.value)]),children:xl.map((p,x)=>k.jsx("option",{value:x,children:p.name},x))})]}),k.jsxs("div",{className:"lens-info",children:[k.jsxs("div",{children:[k.jsx("strong",{children:"焦距范围:"})," ",a.focalMin,a.isZoom?`-${a.focalMax}`:"","mm"]}),k.jsxs("div",{children:[k.jsx("strong",{children:"最大光圈:"})," f/",a.minAperture]})]}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"机位角度"}),k.jsxs("div",{className:"hstack",children:[k.jsxs("div",{children:[k.jsx("label",{children:"水平角度 (°)"}),k.jsx("input",{type:"number",value:m,onChange:p=>_(Number(p.target.value))})]}),k.jsxs("div",{children:[k.jsx("label",{children:"俯仰角度 (°)"}),k.jsx("input",{type:"number",value:y,onChange:p=>v(Number(p.target.value))})]})]})]})]}),i===2&&k.jsxs("div",{className:"wizard-step",children:[k.jsx("h4",{children:"第二步：风格选择"}),k.jsx("p",{children:"选择拍摄风格，系统会根据镜头兼容性筛选"}),k.jsx("div",{className:"row",children:k.jsxs("label",{children:[k.jsx("input",{type:"checkbox",checked:d,onChange:p=>h(p.target.checked)}),"显示全部风格（包括不兼容的）"]})}),k.jsx("div",{className:"style-list",children:g().map(({style:p,compatibility:x},P)=>{var M;return k.jsxs("div",{className:`style-card ${(c==null?void 0:c.title)===p.title?"selected":""} ${x.ok?"":"incompatible"}`,onClick:()=>x.ok&&f(p),children:[k.jsx("div",{className:"style-title",children:p.title}),k.jsx("div",{className:"style-meta",children:p.styleMeta&&k.jsxs(k.Fragment,{children:[k.jsxs("span",{children:["构图: ",p.styleMeta.framing==="full"?"全身":p.styleMeta.framing==="half"?"半身":"特写"]}),k.jsxs("span",{children:["对准: ",p.styleMeta.defaultAim==="subjectEye"?"眼平":p.styleMeta.defaultAim==="subjectCenter"?"身体中心":"自定义"]}),p.styleMeta.focalRange&&k.jsxs("span",{children:["焦段: ",p.styleMeta.focalRange.min,"-",p.styleMeta.focalRange.max,"mm"]})]})}),!x.ok&&k.jsx("div",{className:"incompatible-reason",children:x.reason}),((M=p.styleMeta)==null?void 0:M.notes)&&k.jsx("div",{className:"style-notes",children:p.styleMeta.notes})]},P)})})]})]}),k.jsxs("div",{className:"wizard-footer",children:[i>1&&k.jsx("button",{className:"btn",onClick:()=>r(i-1),children:"上一步"}),i<2?k.jsx("button",{className:"btn btn-primary",onClick:()=>r(i+1),children:"下一步"}):k.jsx("button",{className:"btn btn-primary",onClick:u,disabled:!c,children:Ye("applyWizard")})]})]})})}var sy={exports:{}};(function(t){var e=function(){var n=String.fromCharCode,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",s={};function o(l,c){if(!s[l]){s[l]={};for(var f=0;f<l.length;f++)s[l][l.charAt(f)]=f}return s[l][c]}var a={compressToBase64:function(l){if(l==null)return"";var c=a._compress(l,6,function(f){return i.charAt(f)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(l){return l==null?"":l==""?null:a._decompress(l.length,32,function(c){return o(i,l.charAt(c))})},compressToUTF16:function(l){return l==null?"":a._compress(l,15,function(c){return n(c+32)})+" "},decompressFromUTF16:function(l){return l==null?"":l==""?null:a._decompress(l.length,16384,function(c){return l.charCodeAt(c)-32})},compressToUint8Array:function(l){for(var c=a.compress(l),f=new Uint8Array(c.length*2),d=0,h=c.length;d<h;d++){var m=c.charCodeAt(d);f[d*2]=m>>>8,f[d*2+1]=m%256}return f},decompressFromUint8Array:function(l){if(l==null)return a.decompress(l);for(var c=new Array(l.length/2),f=0,d=c.length;f<d;f++)c[f]=l[f*2]*256+l[f*2+1];var h=[];return c.forEach(function(m){h.push(n(m))}),a.decompress(h.join(""))},compressToEncodedURIComponent:function(l){return l==null?"":a._compress(l,6,function(c){return r.charAt(c)})},decompressFromEncodedURIComponent:function(l){return l==null?"":l==""?null:(l=l.replace(/ /g,"+"),a._decompress(l.length,32,function(c){return o(r,l.charAt(c))}))},compress:function(l){return a._compress(l,16,function(c){return n(c)})},_compress:function(l,c,f){if(l==null)return"";var d,h,m={},_={},y="",v="",u="",g=2,p=3,x=2,P=[],M=0,T=0,C;for(C=0;C<l.length;C+=1)if(y=l.charAt(C),Object.prototype.hasOwnProperty.call(m,y)||(m[y]=p++,_[y]=!0),v=u+y,Object.prototype.hasOwnProperty.call(m,v))u=v;else{if(Object.prototype.hasOwnProperty.call(_,u)){if(u.charCodeAt(0)<256){for(d=0;d<x;d++)M=M<<1,T==c-1?(T=0,P.push(f(M)),M=0):T++;for(h=u.charCodeAt(0),d=0;d<8;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1}else{for(h=1,d=0;d<x;d++)M=M<<1|h,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=0;for(h=u.charCodeAt(0),d=0;d<16;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1}g--,g==0&&(g=Math.pow(2,x),x++),delete _[u]}else for(h=m[u],d=0;d<x;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1;g--,g==0&&(g=Math.pow(2,x),x++),m[v]=p++,u=String(y)}if(u!==""){if(Object.prototype.hasOwnProperty.call(_,u)){if(u.charCodeAt(0)<256){for(d=0;d<x;d++)M=M<<1,T==c-1?(T=0,P.push(f(M)),M=0):T++;for(h=u.charCodeAt(0),d=0;d<8;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1}else{for(h=1,d=0;d<x;d++)M=M<<1|h,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=0;for(h=u.charCodeAt(0),d=0;d<16;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1}g--,g==0&&(g=Math.pow(2,x),x++),delete _[u]}else for(h=m[u],d=0;d<x;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1;g--,g==0&&(g=Math.pow(2,x),x++)}for(h=2,d=0;d<x;d++)M=M<<1|h&1,T==c-1?(T=0,P.push(f(M)),M=0):T++,h=h>>1;for(;;)if(M=M<<1,T==c-1){P.push(f(M));break}else T++;return P.join("")},decompress:function(l){return l==null?"":l==""?null:a._decompress(l.length,32768,function(c){return l.charCodeAt(c)})},_decompress:function(l,c,f){var d=[],h=4,m=4,_=3,y="",v=[],u,g,p,x,P,M,T,C={val:f(0),position:c,index:1};for(u=0;u<3;u+=1)d[u]=u;for(p=0,P=Math.pow(2,2),M=1;M!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=f(C.index++)),p|=(x>0?1:0)*M,M<<=1;switch(p){case 0:for(p=0,P=Math.pow(2,8),M=1;M!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=f(C.index++)),p|=(x>0?1:0)*M,M<<=1;T=n(p);break;case 1:for(p=0,P=Math.pow(2,16),M=1;M!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=f(C.index++)),p|=(x>0?1:0)*M,M<<=1;T=n(p);break;case 2:return""}for(d[3]=T,g=T,v.push(T);;){if(C.index>l)return"";for(p=0,P=Math.pow(2,_),M=1;M!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=f(C.index++)),p|=(x>0?1:0)*M,M<<=1;switch(T=p){case 0:for(p=0,P=Math.pow(2,8),M=1;M!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=f(C.index++)),p|=(x>0?1:0)*M,M<<=1;d[m++]=n(p),T=m-1,h--;break;case 1:for(p=0,P=Math.pow(2,16),M=1;M!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=f(C.index++)),p|=(x>0?1:0)*M,M<<=1;d[m++]=n(p),T=m-1,h--;break;case 2:return v.join("")}if(h==0&&(h=Math.pow(2,_),_++),d[T])y=d[T];else if(T===m)y=g+g.charAt(0);else return null;v.push(y),d[m++]=g+y.charAt(0),h--,g=y,h==0&&(h=Math.pow(2,_),_++)}}};return a}();t!=null?t.exports=e:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return e})})(sy);var FC=sy.exports;const oy=My(FC),kC=t=>{try{return"#r="+oy.compressToEncodedURIComponent(JSON.stringify(t))}catch(e){return console.error("Failed to encode recipe:",e),""}},zC=()=>{const e=window.location.hash.match(/^#r=(.+)$/);if(!e)return null;try{const n=e[1],i=oy.decompressFromEncodedURIComponent(n);return i?JSON.parse(i):null}catch(n){return console.error("Failed to decode recipe from hash:",n),null}},BC=async t=>{try{return await navigator.clipboard.writeText(t),!0}catch{try{const n=document.createElement("textarea");return n.value=t,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),!0}catch(n){return console.error("Failed to copy to clipboard:",n),!1}}};var tu=typeof self<"u"?self:global;const pa=typeof navigator<"u",HC=pa&&typeof HTMLImageElement>"u",Cc=!(typeof global>"u"||typeof process>"u"||!process.versions||!process.versions.node),Nd=tu.Buffer,Sl=tu.BigInt,Ud=!!Nd,VC=t=>t;function Rc(t,e=VC){if(Cc)try{return typeof require=="function"?Promise.resolve(e(require(t))):import(t).then(e)}catch{console.warn(`Couldn't load ${t}`)}}let Od=tu.fetch;const GC=t=>Od=t;if(!tu.fetch){const t=Rc("http",i=>i),e=Rc("https",i=>i),n=(i,{headers:r}={})=>new Promise(async(s,o)=>{let{port:a,hostname:l,pathname:c,protocol:f,search:d}=new URL(i);const h={method:"GET",hostname:l,path:encodeURI(c)+d,headers:r};a!==""&&(h.port=Number(a));const m=(f==="https:"?await e:await t).request(h,_=>{if(_.statusCode===301||_.statusCode===302){let y=new URL(_.headers.location,i).toString();return n(y,{headers:r}).then(s).catch(o)}s({status:_.statusCode,arrayBuffer:()=>new Promise(y=>{let v=[];_.on("data",u=>v.push(u)),_.on("end",()=>y(Buffer.concat(v)))})})});m.on("error",o),m.end()});GC(n)}function Ie(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const bc=t=>ay(t)?void 0:t,WC=t=>t!==void 0;function ay(t){return t===void 0||(t instanceof Map?t.size===0:Object.values(t).filter(WC).length===0)}function It(t){let e=new Error(t);throw delete e.stack,e}function Gr(t){return(t=function(e){for(;e.endsWith("\0");)e=e.slice(0,-1);return e}(t).trim())===""?void 0:t}function Th(t){let e=function(n){let i=0;return n.ifd0.enabled&&(i+=1024),n.exif.enabled&&(i+=2048),n.makerNote&&(i+=2048),n.userComment&&(i+=1024),n.gps.enabled&&(i+=512),n.interop.enabled&&(i+=100),n.ifd1.enabled&&(i+=1024),i+2048}(t);return t.jfif.enabled&&(e+=50),t.xmp.enabled&&(e+=2e4),t.iptc.enabled&&(e+=14e3),t.icc.enabled&&(e+=6e3),e}const Ah=t=>String.fromCharCode.apply(null,t),jg=typeof TextDecoder<"u"?new TextDecoder("utf-8"):void 0;function ly(t){return jg?jg.decode(t):Ud?Buffer.from(t).toString("utf8"):decodeURIComponent(escape(Ah(t)))}class mn{static from(e,n){return e instanceof this&&e.le===n?e:new mn(e,void 0,void 0,n)}constructor(e,n=0,i,r){if(typeof r=="boolean"&&(this.le=r),Array.isArray(e)&&(e=new Uint8Array(e)),e===0)this.byteOffset=0,this.byteLength=0;else if(e instanceof ArrayBuffer){i===void 0&&(i=e.byteLength-n);let s=new DataView(e,n,i);this._swapDataView(s)}else if(e instanceof Uint8Array||e instanceof DataView||e instanceof mn){i===void 0&&(i=e.byteLength-n),(n+=e.byteOffset)+i>e.byteOffset+e.byteLength&&It("Creating view outside of available memory in ArrayBuffer");let s=new DataView(e.buffer,n,i);this._swapDataView(s)}else if(typeof e=="number"){let s=new DataView(new ArrayBuffer(e));this._swapDataView(s)}else It("Invalid input argument for BufferView: "+e)}_swapArrayBuffer(e){this._swapDataView(new DataView(e))}_swapBuffer(e){this._swapDataView(new DataView(e.buffer,e.byteOffset,e.byteLength))}_swapDataView(e){this.dataView=e,this.buffer=e.buffer,this.byteOffset=e.byteOffset,this.byteLength=e.byteLength}_lengthToEnd(e){return this.byteLength-e}set(e,n,i=mn){return e instanceof DataView||e instanceof mn?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e instanceof ArrayBuffer&&(e=new Uint8Array(e)),e instanceof Uint8Array||It("BufferView.set(): Invalid data argument."),this.toUint8().set(e,n),new i(this,n,e.byteLength)}subarray(e,n){return n=n||this._lengthToEnd(e),new mn(this,e,n)}toUint8(){return new Uint8Array(this.buffer,this.byteOffset,this.byteLength)}getUint8Array(e,n){return new Uint8Array(this.buffer,this.byteOffset+e,n)}getString(e=0,n=this.byteLength){return ly(this.getUint8Array(e,n))}getLatin1String(e=0,n=this.byteLength){let i=this.getUint8Array(e,n);return Ah(i)}getUnicodeString(e=0,n=this.byteLength){const i=[];for(let r=0;r<n&&e+r<this.byteLength;r+=2)i.push(this.getUint16(e+r));return Ah(i)}getInt8(e){return this.dataView.getInt8(e)}getUint8(e){return this.dataView.getUint8(e)}getInt16(e,n=this.le){return this.dataView.getInt16(e,n)}getInt32(e,n=this.le){return this.dataView.getInt32(e,n)}getUint16(e,n=this.le){return this.dataView.getUint16(e,n)}getUint32(e,n=this.le){return this.dataView.getUint32(e,n)}getFloat32(e,n=this.le){return this.dataView.getFloat32(e,n)}getFloat64(e,n=this.le){return this.dataView.getFloat64(e,n)}getFloat(e,n=this.le){return this.dataView.getFloat32(e,n)}getDouble(e,n=this.le){return this.dataView.getFloat64(e,n)}getUintBytes(e,n,i){switch(n){case 1:return this.getUint8(e,i);case 2:return this.getUint16(e,i);case 4:return this.getUint32(e,i);case 8:return this.getUint64&&this.getUint64(e,i)}}getUint(e,n,i){switch(n){case 8:return this.getUint8(e,i);case 16:return this.getUint16(e,i);case 32:return this.getUint32(e,i);case 64:return this.getUint64&&this.getUint64(e,i)}}toString(e){return this.dataView.toString(e,this.constructor.name)}ensureChunk(){}}function Ch(t,e){It(`${t} '${e}' was not loaded, try using full build of exifr.`)}class Fd extends Map{constructor(e){super(),this.kind=e}get(e,n){return this.has(e)||Ch(this.kind,e),n&&(e in n||function(i,r){It(`Unknown ${i} '${r}'.`)}(this.kind,e),n[e].enabled||Ch(this.kind,e)),super.get(e)}keyList(){return Array.from(this.keys())}}var oo=new Fd("file parser"),nn=new Fd("segment parser"),po=new Fd("file reader");function jC(t,e){return typeof t=="string"?Xg(t,e):pa&&!HC&&t instanceof HTMLImageElement?Xg(t.src,e):t instanceof Uint8Array||t instanceof ArrayBuffer||t instanceof DataView?new mn(t):pa&&t instanceof Blob?Rh(t,e,"blob",Lh):void It("Invalid input argument")}function Xg(t,e){return(n=t).startsWith("data:")||n.length>1e4?bh(t,e,"base64"):Cc&&t.includes("://")?Rh(t,e,"url",Ph):Cc?bh(t,e,"fs"):pa?Rh(t,e,"url",Ph):void It("Invalid input argument");var n}async function Rh(t,e,n,i){return po.has(n)?bh(t,e,n):i?async function(r,s){let o=await s(r);return new mn(o)}(t,i):void It(`Parser ${n} is not loaded`)}async function bh(t,e,n){let i=new(po.get(n))(t,e);return await i.read(),i}const Ph=t=>Od(t).then(e=>e.arrayBuffer()),Lh=t=>new Promise((e,n)=>{let i=new FileReader;i.onloadend=()=>e(i.result||new ArrayBuffer),i.onerror=n,i.readAsArrayBuffer(t)});class XC extends Map{get tagKeys(){return this.allKeys||(this.allKeys=Array.from(this.keys())),this.allKeys}get tagValues(){return this.allValues||(this.allValues=Array.from(this.values())),this.allValues}}function Xt(t,e,n){let i=new XC;for(let[r,s]of n)i.set(r,s);if(Array.isArray(e))for(let r of e)t.set(r,i);else t.set(e,i);return i}function Ih(t,e,n){let i,r=t.get(e);for(i of n)r.set(i[0],i[1])}const Mn=new Map,ns=new Map,jl=new Map,Ml=["chunked","firstChunkSize","firstChunkSizeNode","firstChunkSizeBrowser","chunkSize","chunkLimit"],cy=["jfif","xmp","icc","iptc","ihdr"],Dh=["tiff",...cy],zt=["ifd0","ifd1","exif","gps","interop"],El=[...Dh,...zt],wl=["makerNote","userComment"],uy=["translateKeys","translateValues","reviveValues","multiSegment"],Tl=[...uy,"sanitize","mergeOutput","silentErrors"];class fy{get translate(){return this.translateKeys||this.translateValues||this.reviveValues}}class Lo extends fy{get needed(){return this.enabled||this.deps.size>0}constructor(e,n,i,r){if(super(),Ie(this,"enabled",!1),Ie(this,"skip",new Set),Ie(this,"pick",new Set),Ie(this,"deps",new Set),Ie(this,"translateKeys",!1),Ie(this,"translateValues",!1),Ie(this,"reviveValues",!1),this.key=e,this.enabled=n,this.parse=this.enabled,this.applyInheritables(r),this.canBeFiltered=zt.includes(e),this.canBeFiltered&&(this.dict=Mn.get(e)),i!==void 0)if(Array.isArray(i))this.parse=this.enabled=!0,this.canBeFiltered&&i.length>0&&this.translateTagSet(i,this.pick);else if(typeof i=="object"){if(this.enabled=!0,this.parse=i.parse!==!1,this.canBeFiltered){let{pick:s,skip:o}=i;s&&s.length>0&&this.translateTagSet(s,this.pick),o&&o.length>0&&this.translateTagSet(o,this.skip)}this.applyInheritables(i)}else i===!0||i===!1?this.parse=this.enabled=i:It(`Invalid options argument: ${i}`)}applyInheritables(e){let n,i;for(n of uy)i=e[n],i!==void 0&&(this[n]=i)}translateTagSet(e,n){if(this.dict){let i,r,{tagKeys:s,tagValues:o}=this.dict;for(i of e)typeof i=="string"?(r=o.indexOf(i),r===-1&&(r=s.indexOf(Number(i))),r!==-1&&n.add(Number(s[r]))):n.add(i)}else for(let i of e)n.add(i)}finalizeFilters(){!this.enabled&&this.deps.size>0?(this.enabled=!0,Pc(this.pick,this.deps)):this.enabled&&this.pick.size>0&&Pc(this.pick,this.deps)}}var on={jfif:!1,tiff:!0,xmp:!1,icc:!1,iptc:!1,ifd0:!0,ifd1:!1,exif:!0,gps:!0,interop:!1,ihdr:void 0,makerNote:!1,userComment:!1,multiSegment:!1,skip:[],pick:[],translateKeys:!0,translateValues:!0,reviveValues:!0,sanitize:!0,mergeOutput:!0,silentErrors:!0,chunked:!0,firstChunkSize:void 0,firstChunkSizeNode:512,firstChunkSizeBrowser:65536,chunkSize:65536,chunkLimit:5},Yg=new Map;class kd extends fy{static useCached(e){let n=Yg.get(e);return n!==void 0||(n=new this(e),Yg.set(e,n)),n}constructor(e){super(),e===!0?this.setupFromTrue():e===void 0?this.setupFromUndefined():Array.isArray(e)?this.setupFromArray(e):typeof e=="object"?this.setupFromObject(e):It(`Invalid options argument ${e}`),this.firstChunkSize===void 0&&(this.firstChunkSize=pa?this.firstChunkSizeBrowser:this.firstChunkSizeNode),this.mergeOutput&&(this.ifd1.enabled=!1),this.filterNestedSegmentTags(),this.traverseTiffDependencyTree(),this.checkLoadedPlugins()}setupFromUndefined(){let e;for(e of Ml)this[e]=on[e];for(e of Tl)this[e]=on[e];for(e of wl)this[e]=on[e];for(e of El)this[e]=new Lo(e,on[e],void 0,this)}setupFromTrue(){let e;for(e of Ml)this[e]=on[e];for(e of Tl)this[e]=on[e];for(e of wl)this[e]=!0;for(e of El)this[e]=new Lo(e,!0,void 0,this)}setupFromArray(e){let n;for(n of Ml)this[n]=on[n];for(n of Tl)this[n]=on[n];for(n of wl)this[n]=on[n];for(n of El)this[n]=new Lo(n,!1,void 0,this);this.setupGlobalFilters(e,void 0,zt)}setupFromObject(e){let n;for(n of(zt.ifd0=zt.ifd0||zt.image,zt.ifd1=zt.ifd1||zt.thumbnail,Object.assign(this,e),Ml))this[n]=_f(e[n],on[n]);for(n of Tl)this[n]=_f(e[n],on[n]);for(n of wl)this[n]=_f(e[n],on[n]);for(n of Dh)this[n]=new Lo(n,on[n],e[n],this);for(n of zt)this[n]=new Lo(n,on[n],e[n],this.tiff);this.setupGlobalFilters(e.pick,e.skip,zt,El),e.tiff===!0?this.batchEnableWithBool(zt,!0):e.tiff===!1?this.batchEnableWithUserValue(zt,e):Array.isArray(e.tiff)?this.setupGlobalFilters(e.tiff,void 0,zt):typeof e.tiff=="object"&&this.setupGlobalFilters(e.tiff.pick,e.tiff.skip,zt)}batchEnableWithBool(e,n){for(let i of e)this[i].enabled=n}batchEnableWithUserValue(e,n){for(let i of e){let r=n[i];this[i].enabled=r!==!1&&r!==void 0}}setupGlobalFilters(e,n,i,r=i){if(e&&e.length){for(let o of r)this[o].enabled=!1;let s=$g(e,i);for(let[o,a]of s)Pc(this[o].pick,a),this[o].enabled=!0}else if(n&&n.length){let s=$g(n,i);for(let[o,a]of s)Pc(this[o].skip,a)}}filterNestedSegmentTags(){let{ifd0:e,exif:n,xmp:i,iptc:r,icc:s}=this;this.makerNote?n.deps.add(37500):n.skip.add(37500),this.userComment?n.deps.add(37510):n.skip.add(37510),i.enabled||e.skip.add(700),r.enabled||e.skip.add(33723),s.enabled||e.skip.add(34675)}traverseTiffDependencyTree(){let{ifd0:e,exif:n,gps:i,interop:r}=this;r.needed&&(n.deps.add(40965),e.deps.add(40965)),n.needed&&e.deps.add(34665),i.needed&&e.deps.add(34853),this.tiff.enabled=zt.some(s=>this[s].enabled===!0)||this.makerNote||this.userComment;for(let s of zt)this[s].finalizeFilters()}get onlyTiff(){return!cy.map(e=>this[e].enabled).some(e=>e===!0)&&this.tiff.enabled}checkLoadedPlugins(){for(let e of Dh)this[e].enabled&&!nn.has(e)&&Ch("segment parser",e)}}function $g(t,e){let n,i,r,s,o=[];for(r of e){for(s of(n=Mn.get(r),i=[],n))(t.includes(s[0])||t.includes(s[1]))&&i.push(s[0]);i.length&&o.push([r,i])}return o}function _f(t,e){return t!==void 0?t:e!==void 0?e:void 0}function Pc(t,e){for(let n of e)t.add(n)}Ie(kd,"default",on);class YC{constructor(e){Ie(this,"parsers",{}),Ie(this,"output",{}),Ie(this,"errors",[]),Ie(this,"pushToErrors",n=>this.errors.push(n)),this.options=kd.useCached(e)}async read(e){this.file=await jC(e,this.options)}setup(){if(this.fileParser)return;let{file:e}=this,n=e.getUint16(0);for(let[i,r]of oo)if(r.canHandle(e,n))return this.fileParser=new r(this.options,this.file,this.parsers),e[i]=!0;this.file.close&&this.file.close(),It("Unknown file format")}async parse(){let{output:e,errors:n}=this;return this.setup(),this.options.silentErrors?(await this.executeParsers().catch(this.pushToErrors),n.push(...this.fileParser.errors)):await this.executeParsers(),this.file.close&&this.file.close(),this.options.silentErrors&&n.length>0&&(e.errors=n),bc(e)}async executeParsers(){let{output:e}=this;await this.fileParser.parse();let n=Object.values(this.parsers).map(async i=>{let r=await i.parse();i.assignToOutput(e,r)});this.options.silentErrors&&(n=n.map(i=>i.catch(this.pushToErrors))),await Promise.all(n)}async extractThumbnail(){this.setup();let{options:e,file:n}=this,i=nn.get("tiff",e);var r;if(n.tiff?r={start:0,type:"tiff"}:n.jpeg&&(r=await this.fileParser.getOrFindSegment("tiff")),r===void 0)return;let s=await this.fileParser.ensureSegmentChunk(r),o=this.parsers.tiff=new i(s,e,n),a=await o.extractThumbnail();return n.close&&n.close(),a}}async function $C(t,e){let n=new YC(e);return await n.read(t),n.parse()}class nu{constructor(e,n,i){Ie(this,"errors",[]),Ie(this,"ensureSegmentChunk",async r=>{let s=r.start,o=r.size||65536;if(this.file.chunked)if(this.file.available(s,o))r.chunk=this.file.subarray(s,o);else try{r.chunk=await this.file.readChunk(s,o)}catch(a){It(`Couldn't read segment: ${JSON.stringify(r)}. ${a.message}`)}else this.file.byteLength>s+o?r.chunk=this.file.subarray(s,o):r.size===void 0?r.chunk=this.file.subarray(s):It("Segment unreachable: "+JSON.stringify(r));return r.chunk}),this.extendOptions&&this.extendOptions(e),this.options=e,this.file=n,this.parsers=i}injectSegment(e,n){this.options[e].enabled&&this.createParser(e,n)}createParser(e,n){let i=new(nn.get(e))(n,this.options,this.file);return this.parsers[e]=i}createParsers(e){for(let n of e){let{type:i,chunk:r}=n,s=this.options[i];if(s&&s.enabled){let o=this.parsers[i];o&&o.append||o||this.createParser(i,r)}}}async readSegments(e){let n=e.map(this.ensureSegmentChunk);await Promise.all(n)}}class ei{static findPosition(e,n){let i=e.getUint16(n+2)+2,r=typeof this.headerLength=="function"?this.headerLength(e,n,i):this.headerLength,s=n+r,o=i-r;return{offset:n,length:i,headerLength:r,start:s,size:o,end:s+o}}static parse(e,n={}){return new this(e,new kd({[this.type]:n}),e).parse()}normalizeInput(e){return e instanceof mn?e:new mn(e)}constructor(e,n={},i){Ie(this,"errors",[]),Ie(this,"raw",new Map),Ie(this,"handleError",r=>{if(!this.options.silentErrors)throw r;this.errors.push(r.message)}),this.chunk=this.normalizeInput(e),this.file=i,this.type=this.constructor.type,this.globalOptions=this.options=n,this.localOptions=n[this.type],this.canTranslate=this.localOptions&&this.localOptions.translate}translate(){this.canTranslate&&(this.translated=this.translateBlock(this.raw,this.type))}get output(){return this.translated?this.translated:this.raw?Object.fromEntries(this.raw):void 0}translateBlock(e,n){let i=jl.get(n),r=ns.get(n),s=Mn.get(n),o=this.options[n],a=o.reviveValues&&!!i,l=o.translateValues&&!!r,c=o.translateKeys&&!!s,f={};for(let[d,h]of e)a&&i.has(d)?h=i.get(d)(h):l&&r.has(d)&&(h=this.translateValue(h,r.get(d))),c&&s.has(d)&&(d=s.get(d)||d),f[d]=h;return f}translateValue(e,n){return n[e]||n.DEFAULT||e}assignToOutput(e,n){this.assignObjectToOutput(e,this.constructor.type,n)}assignObjectToOutput(e,n,i){if(this.globalOptions.mergeOutput)return Object.assign(e,i);e[n]?Object.assign(e[n],i):e[n]=i}}Ie(ei,"headerLength",4),Ie(ei,"type",void 0),Ie(ei,"multiSegment",!1),Ie(ei,"canHandle",()=>!1);function qC(t){return t===192||t===194||t===196||t===219||t===221||t===218||t===254}function KC(t){return t>=224&&t<=239}function ZC(t,e,n){for(let[i,r]of nn)if(r.canHandle(t,e,n))return i}class qg extends nu{constructor(...e){super(...e),Ie(this,"appSegments",[]),Ie(this,"jpegSegments",[]),Ie(this,"unknownSegments",[])}static canHandle(e,n){return n===65496}async parse(){await this.findAppSegments(),await this.readSegments(this.appSegments),this.mergeMultiSegments(),this.createParsers(this.mergedAppSegments||this.appSegments)}setupSegmentFinderArgs(e){e===!0?(this.findAll=!0,this.wanted=new Set(nn.keyList())):(e=e===void 0?nn.keyList().filter(n=>this.options[n].enabled):e.filter(n=>this.options[n].enabled&&nn.has(n)),this.findAll=!1,this.remaining=new Set(e),this.wanted=new Set(e)),this.unfinishedMultiSegment=!1}async findAppSegments(e=0,n){this.setupSegmentFinderArgs(n);let{file:i,findAll:r,wanted:s,remaining:o}=this;if(!r&&this.file.chunked&&(r=Array.from(s).some(a=>{let l=nn.get(a),c=this.options[a];return l.multiSegment&&c.multiSegment}),r&&await this.file.readWhole()),e=this.findAppSegmentsInRange(e,i.byteLength),!this.options.onlyTiff&&i.chunked){let a=!1;for(;o.size>0&&!a&&(i.canReadNextChunk||this.unfinishedMultiSegment);){let{nextChunkOffset:l}=i,c=this.appSegments.some(f=>!this.file.available(f.offset||f.start,f.length||f.size));if(a=e>l&&!c?!await i.readNextChunk(e):!await i.readNextChunk(l),(e=this.findAppSegmentsInRange(e,i.byteLength))===void 0)return}}}findAppSegmentsInRange(e,n){n-=2;let i,r,s,o,a,l,{file:c,findAll:f,wanted:d,remaining:h,options:m}=this;for(;e<n;e++)if(c.getUint8(e)===255){if(i=c.getUint8(e+1),KC(i)){if(r=c.getUint16(e+2),s=ZC(c,e,r),s&&d.has(s)&&(o=nn.get(s),a=o.findPosition(c,e),l=m[s],a.type=s,this.appSegments.push(a),!f&&(o.multiSegment&&l.multiSegment?(this.unfinishedMultiSegment=a.chunkNumber<a.chunkCount,this.unfinishedMultiSegment||h.delete(s)):h.delete(s),h.size===0)))break;m.recordUnknownSegments&&(a=ei.findPosition(c,e),a.marker=i,this.unknownSegments.push(a)),e+=r+1}else if(qC(i)){if(r=c.getUint16(e+2),i===218&&m.stopAfterSos!==!1)return;m.recordJpegSegments&&this.jpegSegments.push({offset:e,length:r,marker:i}),e+=r+1}}return e}mergeMultiSegments(){if(!this.appSegments.some(n=>n.multiSegment))return;let e=function(n,i){let r,s,o,a=new Map;for(let l=0;l<n.length;l++)r=n[l],s=r[i],a.has(s)?o=a.get(s):a.set(s,o=[]),o.push(r);return Array.from(a)}(this.appSegments,"type");this.mergedAppSegments=e.map(([n,i])=>{let r=nn.get(n,this.options);return r.handleMultiSegments?{type:n,chunk:r.handleMultiSegments(i)}:i[0]})}getSegment(e){return this.appSegments.find(n=>n.type===e)}async getOrFindSegment(e){let n=this.getSegment(e);return n===void 0&&(await this.findAppSegments(0,[e]),n=this.getSegment(e)),n}}Ie(qg,"type","jpeg"),oo.set("jpeg",qg);const QC=[void 0,1,1,2,4,8,1,1,2,4,8,4,8,4];class JC extends ei{parseHeader(){var e=this.chunk.getUint16();e===18761?this.le=!0:e===19789&&(this.le=!1),this.chunk.le=this.le,this.headerParsed=!0}parseTags(e,n,i=new Map){let{pick:r,skip:s}=this.options[n];r=new Set(r);let o=r.size>0,a=s.size===0,l=this.chunk.getUint16(e);e+=2;for(let c=0;c<l;c++){let f=this.chunk.getUint16(e);if(o){if(r.has(f)&&(i.set(f,this.parseTag(e,f,n)),r.delete(f),r.size===0))break}else!a&&s.has(f)||i.set(f,this.parseTag(e,f,n));e+=12}return i}parseTag(e,n,i){let{chunk:r}=this,s=r.getUint16(e+2),o=r.getUint32(e+4),a=QC[s];if(a*o<=4?e+=8:e=r.getUint32(e+8),(s<1||s>13)&&It(`Invalid TIFF value type. block: ${i.toUpperCase()}, tag: ${n.toString(16)}, type: ${s}, offset ${e}`),e>r.byteLength&&It(`Invalid TIFF value offset. block: ${i.toUpperCase()}, tag: ${n.toString(16)}, type: ${s}, offset ${e} is outside of chunk size ${r.byteLength}`),s===1)return r.getUint8Array(e,o);if(s===2)return Gr(r.getString(e,o));if(s===7)return r.getUint8Array(e,o);if(o===1)return this.parseTagValue(s,e);{let l=new(function(f){switch(f){case 1:return Uint8Array;case 3:return Uint16Array;case 4:return Uint32Array;case 5:return Array;case 6:return Int8Array;case 8:return Int16Array;case 9:return Int32Array;case 10:return Array;case 11:return Float32Array;case 12:return Float64Array;default:return Array}}(s))(o),c=a;for(let f=0;f<o;f++)l[f]=this.parseTagValue(s,e),e+=c;return l}}parseTagValue(e,n){let{chunk:i}=this;switch(e){case 1:return i.getUint8(n);case 3:return i.getUint16(n);case 4:return i.getUint32(n);case 5:return i.getUint32(n)/i.getUint32(n+4);case 6:return i.getInt8(n);case 8:return i.getInt16(n);case 9:return i.getInt32(n);case 10:return i.getInt32(n)/i.getInt32(n+4);case 11:return i.getFloat(n);case 12:return i.getDouble(n);case 13:return i.getUint32(n);default:It(`Invalid tiff type ${e}`)}}}class yf extends JC{static canHandle(e,n){return e.getUint8(n+1)===225&&e.getUint32(n+4)===1165519206&&e.getUint16(n+8)===0}async parse(){this.parseHeader();let{options:e}=this;return e.ifd0.enabled&&await this.parseIfd0Block(),e.exif.enabled&&await this.safeParse("parseExifBlock"),e.gps.enabled&&await this.safeParse("parseGpsBlock"),e.interop.enabled&&await this.safeParse("parseInteropBlock"),e.ifd1.enabled&&await this.safeParse("parseThumbnailBlock"),this.createOutput()}safeParse(e){let n=this[e]();return n.catch!==void 0&&(n=n.catch(this.handleError)),n}findIfd0Offset(){this.ifd0Offset===void 0&&(this.ifd0Offset=this.chunk.getUint32(4))}findIfd1Offset(){if(this.ifd1Offset===void 0){this.findIfd0Offset();let e=this.chunk.getUint16(this.ifd0Offset),n=this.ifd0Offset+2+12*e;this.ifd1Offset=this.chunk.getUint32(n)}}parseBlock(e,n){let i=new Map;return this[n]=i,this.parseTags(e,n,i),i}async parseIfd0Block(){if(this.ifd0)return;let{file:e}=this;this.findIfd0Offset(),this.ifd0Offset<8&&It("Malformed EXIF data"),!e.chunked&&this.ifd0Offset>e.byteLength&&It(`IFD0 offset points to outside of file.
this.ifd0Offset: ${this.ifd0Offset}, file.byteLength: ${e.byteLength}`),e.tiff&&await e.ensureChunk(this.ifd0Offset,Th(this.options));let n=this.parseBlock(this.ifd0Offset,"ifd0");return n.size!==0?(this.exifOffset=n.get(34665),this.interopOffset=n.get(40965),this.gpsOffset=n.get(34853),this.xmp=n.get(700),this.iptc=n.get(33723),this.icc=n.get(34675),this.options.sanitize&&(n.delete(34665),n.delete(40965),n.delete(34853),n.delete(700),n.delete(33723),n.delete(34675)),n):void 0}async parseExifBlock(){if(this.exif||(this.ifd0||await this.parseIfd0Block(),this.exifOffset===void 0))return;this.file.tiff&&await this.file.ensureChunk(this.exifOffset,Th(this.options));let e=this.parseBlock(this.exifOffset,"exif");return this.interopOffset||(this.interopOffset=e.get(40965)),this.makerNote=e.get(37500),this.userComment=e.get(37510),this.options.sanitize&&(e.delete(40965),e.delete(37500),e.delete(37510)),this.unpack(e,41728),this.unpack(e,41729),e}unpack(e,n){let i=e.get(n);i&&i.length===1&&e.set(n,i[0])}async parseGpsBlock(){if(this.gps||(this.ifd0||await this.parseIfd0Block(),this.gpsOffset===void 0))return;let e=this.parseBlock(this.gpsOffset,"gps");return e&&e.has(2)&&e.has(4)&&(e.set("latitude",Kg(...e.get(2),e.get(1))),e.set("longitude",Kg(...e.get(4),e.get(3)))),e}async parseInteropBlock(){if(!this.interop&&(this.ifd0||await this.parseIfd0Block(),this.interopOffset!==void 0||this.exif||await this.parseExifBlock(),this.interopOffset!==void 0))return this.parseBlock(this.interopOffset,"interop")}async parseThumbnailBlock(e=!1){if(!this.ifd1&&!this.ifd1Parsed&&(!this.options.mergeOutput||e))return this.findIfd1Offset(),this.ifd1Offset>0&&(this.parseBlock(this.ifd1Offset,"ifd1"),this.ifd1Parsed=!0),this.ifd1}async extractThumbnail(){if(this.headerParsed||this.parseHeader(),this.ifd1Parsed||await this.parseThumbnailBlock(!0),this.ifd1===void 0)return;let e=this.ifd1.get(513),n=this.ifd1.get(514);return this.chunk.getUint8Array(e,n)}get image(){return this.ifd0}get thumbnail(){return this.ifd1}createOutput(){let e,n,i,r={};for(n of zt)if(e=this[n],!ay(e))if(i=this.canTranslate?this.translateBlock(e,n):Object.fromEntries(e),this.options.mergeOutput){if(n==="ifd1")continue;Object.assign(r,i)}else r[n]=i;return this.makerNote&&(r.makerNote=this.makerNote),this.userComment&&(r.userComment=this.userComment),r}assignToOutput(e,n){if(this.globalOptions.mergeOutput)Object.assign(e,n);else for(let[i,r]of Object.entries(n))this.assignObjectToOutput(e,i,r)}}function Kg(t,e,n,i){var r=t+e/60+n/3600;return i!=="S"&&i!=="W"||(r*=-1),r}Ie(yf,"type","tiff"),Ie(yf,"headerLength",10),nn.set("tiff",yf);const zd={ifd0:!1,ifd1:!1,exif:!1,gps:!1,interop:!1,sanitize:!1,reviveValues:!0,translateKeys:!1,translateValues:!1,mergeOutput:!1};Object.assign({},zd,{firstChunkSize:4e4,gps:[1,2,3,4]});Object.assign({},zd,{tiff:!1,ifd1:!0,mergeOutput:!1});Object.assign({},zd,{firstChunkSize:4e4,ifd0:[274]});if(typeof navigator=="object"){let t=navigator.userAgent;if(t.includes("iPad")||t.includes("iPhone")){let e=t.match(/OS (\d+)_(\d+)/);if(e){let[,n,i]=e}}else if(t.includes("OS X 10")){let[,e]=t.match(/OS X 10[_.](\d+)/)}if(t.includes("Chrome/")){let[,e]=t.match(/Chrome\/(\d+)/)}else if(t.includes("Firefox/")){let[,e]=t.match(/Firefox\/(\d+)/)}}class e2 extends mn{constructor(...e){super(...e),Ie(this,"ranges",new t2),this.byteLength!==0&&this.ranges.add(0,this.byteLength)}_tryExtend(e,n,i){if(e===0&&this.byteLength===0&&i){let r=new DataView(i.buffer||i,i.byteOffset,i.byteLength);this._swapDataView(r)}else{let r=e+n;if(r>this.byteLength){let{dataView:s}=this._extend(r);this._swapDataView(s)}}}_extend(e){let n;n=Ud?Nd.allocUnsafe(e):new Uint8Array(e);let i=new DataView(n.buffer,n.byteOffset,n.byteLength);return n.set(new Uint8Array(this.buffer,this.byteOffset,this.byteLength),0),{uintView:n,dataView:i}}subarray(e,n,i=!1){return n=n||this._lengthToEnd(e),i&&this._tryExtend(e,n),this.ranges.add(e,n),super.subarray(e,n)}set(e,n,i=!1){i&&this._tryExtend(n,e.byteLength,e);let r=super.set(e,n);return this.ranges.add(n,r.byteLength),r}async ensureChunk(e,n){this.chunked&&(this.ranges.available(e,n)||await this.readChunk(e,n))}available(e,n){return this.ranges.available(e,n)}}class t2{constructor(){Ie(this,"list",[])}get length(){return this.list.length}add(e,n,i=0){let r=e+n,s=this.list.filter(o=>Zg(e,o.offset,r)||Zg(e,o.end,r));if(s.length>0){e=Math.min(e,...s.map(a=>a.offset)),r=Math.max(r,...s.map(a=>a.end)),n=r-e;let o=s.shift();o.offset=e,o.length=n,o.end=r,this.list=this.list.filter(a=>!s.includes(a))}else this.list.push({offset:e,length:n,end:r})}available(e,n){let i=e+n;return this.list.some(r=>r.offset<=e&&i<=r.end)}}function Zg(t,e,n){return t<=e&&e<=n}class iu extends e2{constructor(e,n){super(0),Ie(this,"chunksRead",0),this.input=e,this.options=n}async readWhole(){this.chunked=!1,await this.readChunk(this.nextChunkOffset)}async readChunked(){this.chunked=!0,await this.readChunk(0,this.options.firstChunkSize)}async readNextChunk(e=this.nextChunkOffset){if(this.fullyRead)return this.chunksRead++,!1;let n=this.options.chunkSize,i=await this.readChunk(e,n);return!!i&&i.byteLength===n}async readChunk(e,n){if(this.chunksRead++,(n=this.safeWrapAddress(e,n))!==0)return this._readChunk(e,n)}safeWrapAddress(e,n){return this.size!==void 0&&e+n>this.size?Math.max(0,this.size-e):n}get nextChunkOffset(){if(this.ranges.list.length!==0)return this.ranges.list[0].length}get canReadNextChunk(){return this.chunksRead<this.options.chunkLimit}get fullyRead(){return this.size!==void 0&&this.nextChunkOffset===this.size}read(){return this.options.chunked?this.readChunked():this.readWhole()}close(){}}po.set("blob",class extends iu{async readWhole(){this.chunked=!1;let t=await Lh(this.input);this._swapArrayBuffer(t)}readChunked(){return this.chunked=!0,this.size=this.input.size,super.readChunked()}async _readChunk(t,e){let n=e?t+e:void 0,i=this.input.slice(t,n),r=await Lh(i);return this.set(r,t,!0)}});po.set("url",class extends iu{async readWhole(){this.chunked=!1;let t=await Ph(this.input);t instanceof ArrayBuffer?this._swapArrayBuffer(t):t instanceof Uint8Array&&this._swapBuffer(t)}async _readChunk(t,e){let n=e?t+e-1:void 0,i=this.options.httpHeaders||{};(t||n)&&(i.range=`bytes=${[t,n].join("-")}`);let r=await Od(this.input,{headers:i}),s=await r.arrayBuffer(),o=s.byteLength;if(r.status!==416)return o!==e&&(this.size=t+o),this.set(s,t,!0)}});mn.prototype.getUint64=function(t){let e=this.getUint32(t),n=this.getUint32(t+4);return e<1048575?e<<32|n:typeof Sl!==void 0?(console.warn("Using BigInt because of type 64uint but JS can only handle 53b numbers."),Sl(e)<<Sl(32)|Sl(n)):void It("Trying to read 64b value but JS can only handle 53b numbers.")};class n2 extends nu{parseBoxes(e=0){let n=[];for(;e<this.file.byteLength-4;){let i=this.parseBoxHead(e);if(n.push(i),i.length===0)break;e+=i.length}return n}parseSubBoxes(e){e.boxes=this.parseBoxes(e.start)}findBox(e,n){return e.boxes===void 0&&this.parseSubBoxes(e),e.boxes.find(i=>i.kind===n)}parseBoxHead(e){let n=this.file.getUint32(e),i=this.file.getString(e+4,4),r=e+8;return n===1&&(n=this.file.getUint64(e+8),r+=8),{offset:e,length:n,kind:i,start:r}}parseBoxFullHead(e){if(e.version!==void 0)return;let n=this.file.getUint32(e.start);e.version=n>>24,e.start+=4}}class hy extends n2{static canHandle(e,n){if(n!==0)return!1;let i=e.getUint16(2);if(i>50)return!1;let r=16,s=[];for(;r<i;)s.push(e.getString(r,4)),r+=4;return s.includes(this.type)}async parse(){let e=this.file.getUint32(0),n=this.parseBoxHead(e);for(;n.kind!=="meta";)e+=n.length,await this.file.ensureChunk(e,16),n=this.parseBoxHead(e);await this.file.ensureChunk(n.offset,n.length),this.parseBoxFullHead(n),this.parseSubBoxes(n),this.options.icc.enabled&&await this.findIcc(n),this.options.tiff.enabled&&await this.findExif(n)}async registerSegment(e,n,i){await this.file.ensureChunk(n,i);let r=this.file.subarray(n,i);this.createParser(e,r)}async findIcc(e){let n=this.findBox(e,"iprp");if(n===void 0)return;let i=this.findBox(n,"ipco");if(i===void 0)return;let r=this.findBox(i,"colr");r!==void 0&&await this.registerSegment("icc",r.offset+12,r.length)}async findExif(e){let n=this.findBox(e,"iinf");if(n===void 0)return;let i=this.findBox(e,"iloc");if(i===void 0)return;let r=this.findExifLocIdInIinf(n),s=this.findExtentInIloc(i,r);if(s===void 0)return;let[o,a]=s;await this.file.ensureChunk(o,a);let l=4+this.file.getUint32(o);o+=l,a-=l,await this.registerSegment("tiff",o,a)}findExifLocIdInIinf(e){this.parseBoxFullHead(e);let n,i,r,s,o=e.start,a=this.file.getUint16(o);for(o+=2;a--;){if(n=this.parseBoxHead(o),this.parseBoxFullHead(n),i=n.start,n.version>=2&&(r=n.version===3?4:2,s=this.file.getString(i+r+2,4),s==="Exif"))return this.file.getUintBytes(i,r);o+=n.length}}get8bits(e){let n=this.file.getUint8(e);return[n>>4,15&n]}findExtentInIloc(e,n){this.parseBoxFullHead(e);let i=e.start,[r,s]=this.get8bits(i++),[o,a]=this.get8bits(i++),l=e.version===2?4:2,c=e.version===1||e.version===2?2:0,f=a+r+s,d=e.version===2?4:2,h=this.file.getUintBytes(i,d);for(i+=d;h--;){let m=this.file.getUintBytes(i,l);i+=l+c+2+o;let _=this.file.getUint16(i);if(i+=2,m===n)return _>1&&console.warn(`ILOC box has more than one extent but we're only processing one
Please create an issue at https://github.com/MikeKovarik/exifr with this file`),[this.file.getUintBytes(i+a,r),this.file.getUintBytes(i+a+r,s)];i+=_*f}}}class dy extends hy{}Ie(dy,"type","heic");class Qg extends hy{}Ie(Qg,"type","avif"),oo.set("heic",dy),oo.set("avif",Qg),Xt(Mn,["ifd0","ifd1"],[[256,"ImageWidth"],[257,"ImageHeight"],[258,"BitsPerSample"],[259,"Compression"],[262,"PhotometricInterpretation"],[270,"ImageDescription"],[271,"Make"],[272,"Model"],[273,"StripOffsets"],[274,"Orientation"],[277,"SamplesPerPixel"],[278,"RowsPerStrip"],[279,"StripByteCounts"],[282,"XResolution"],[283,"YResolution"],[284,"PlanarConfiguration"],[296,"ResolutionUnit"],[301,"TransferFunction"],[305,"Software"],[306,"ModifyDate"],[315,"Artist"],[316,"HostComputer"],[317,"Predictor"],[318,"WhitePoint"],[319,"PrimaryChromaticities"],[513,"ThumbnailOffset"],[514,"ThumbnailLength"],[529,"YCbCrCoefficients"],[530,"YCbCrSubSampling"],[531,"YCbCrPositioning"],[532,"ReferenceBlackWhite"],[700,"ApplicationNotes"],[33432,"Copyright"],[33723,"IPTC"],[34665,"ExifIFD"],[34675,"ICC"],[34853,"GpsIFD"],[330,"SubIFD"],[40965,"InteropIFD"],[40091,"XPTitle"],[40092,"XPComment"],[40093,"XPAuthor"],[40094,"XPKeywords"],[40095,"XPSubject"]]),Xt(Mn,"exif",[[33434,"ExposureTime"],[33437,"FNumber"],[34850,"ExposureProgram"],[34852,"SpectralSensitivity"],[34855,"ISO"],[34858,"TimeZoneOffset"],[34859,"SelfTimerMode"],[34864,"SensitivityType"],[34865,"StandardOutputSensitivity"],[34866,"RecommendedExposureIndex"],[34867,"ISOSpeed"],[34868,"ISOSpeedLatitudeyyy"],[34869,"ISOSpeedLatitudezzz"],[36864,"ExifVersion"],[36867,"DateTimeOriginal"],[36868,"CreateDate"],[36873,"GooglePlusUploadCode"],[36880,"OffsetTime"],[36881,"OffsetTimeOriginal"],[36882,"OffsetTimeDigitized"],[37121,"ComponentsConfiguration"],[37122,"CompressedBitsPerPixel"],[37377,"ShutterSpeedValue"],[37378,"ApertureValue"],[37379,"BrightnessValue"],[37380,"ExposureCompensation"],[37381,"MaxApertureValue"],[37382,"SubjectDistance"],[37383,"MeteringMode"],[37384,"LightSource"],[37385,"Flash"],[37386,"FocalLength"],[37393,"ImageNumber"],[37394,"SecurityClassification"],[37395,"ImageHistory"],[37396,"SubjectArea"],[37500,"MakerNote"],[37510,"UserComment"],[37520,"SubSecTime"],[37521,"SubSecTimeOriginal"],[37522,"SubSecTimeDigitized"],[37888,"AmbientTemperature"],[37889,"Humidity"],[37890,"Pressure"],[37891,"WaterDepth"],[37892,"Acceleration"],[37893,"CameraElevationAngle"],[40960,"FlashpixVersion"],[40961,"ColorSpace"],[40962,"ExifImageWidth"],[40963,"ExifImageHeight"],[40964,"RelatedSoundFile"],[41483,"FlashEnergy"],[41486,"FocalPlaneXResolution"],[41487,"FocalPlaneYResolution"],[41488,"FocalPlaneResolutionUnit"],[41492,"SubjectLocation"],[41493,"ExposureIndex"],[41495,"SensingMethod"],[41728,"FileSource"],[41729,"SceneType"],[41730,"CFAPattern"],[41985,"CustomRendered"],[41986,"ExposureMode"],[41987,"WhiteBalance"],[41988,"DigitalZoomRatio"],[41989,"FocalLengthIn35mmFormat"],[41990,"SceneCaptureType"],[41991,"GainControl"],[41992,"Contrast"],[41993,"Saturation"],[41994,"Sharpness"],[41996,"SubjectDistanceRange"],[42016,"ImageUniqueID"],[42032,"OwnerName"],[42033,"SerialNumber"],[42034,"LensInfo"],[42035,"LensMake"],[42036,"LensModel"],[42037,"LensSerialNumber"],[42080,"CompositeImage"],[42081,"CompositeImageCount"],[42082,"CompositeImageExposureTimes"],[42240,"Gamma"],[59932,"Padding"],[59933,"OffsetSchema"],[65e3,"OwnerName"],[65001,"SerialNumber"],[65002,"Lens"],[65100,"RawFile"],[65101,"Converter"],[65102,"WhiteBalance"],[65105,"Exposure"],[65106,"Shadows"],[65107,"Brightness"],[65108,"Contrast"],[65109,"Saturation"],[65110,"Sharpness"],[65111,"Smoothness"],[65112,"MoireFilter"],[40965,"InteropIFD"]]),Xt(Mn,"gps",[[0,"GPSVersionID"],[1,"GPSLatitudeRef"],[2,"GPSLatitude"],[3,"GPSLongitudeRef"],[4,"GPSLongitude"],[5,"GPSAltitudeRef"],[6,"GPSAltitude"],[7,"GPSTimeStamp"],[8,"GPSSatellites"],[9,"GPSStatus"],[10,"GPSMeasureMode"],[11,"GPSDOP"],[12,"GPSSpeedRef"],[13,"GPSSpeed"],[14,"GPSTrackRef"],[15,"GPSTrack"],[16,"GPSImgDirectionRef"],[17,"GPSImgDirection"],[18,"GPSMapDatum"],[19,"GPSDestLatitudeRef"],[20,"GPSDestLatitude"],[21,"GPSDestLongitudeRef"],[22,"GPSDestLongitude"],[23,"GPSDestBearingRef"],[24,"GPSDestBearing"],[25,"GPSDestDistanceRef"],[26,"GPSDestDistance"],[27,"GPSProcessingMethod"],[28,"GPSAreaInformation"],[29,"GPSDateStamp"],[30,"GPSDifferential"],[31,"GPSHPositioningError"]]),Xt(ns,["ifd0","ifd1"],[[274,{1:"Horizontal (normal)",2:"Mirror horizontal",3:"Rotate 180",4:"Mirror vertical",5:"Mirror horizontal and rotate 270 CW",6:"Rotate 90 CW",7:"Mirror horizontal and rotate 90 CW",8:"Rotate 270 CW"}],[296,{1:"None",2:"inches",3:"cm"}]]);let qo=Xt(ns,"exif",[[34850,{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"}],[37121,{0:"-",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}],[37383,{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"}],[37384,{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"}],[37385,{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"}],[41495,{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"}],[41728,{1:"Film Scanner",2:"Reflection Print Scanner",3:"Digital Camera"}],[41729,{1:"Directly photographed"}],[41985,{0:"Normal",1:"Custom",2:"HDR (no original saved)",3:"HDR (original saved)",4:"Original (for HDR)",6:"Panorama",7:"Portrait HDR",8:"Portrait"}],[41986,{0:"Auto",1:"Manual",2:"Auto bracket"}],[41987,{0:"Auto",1:"Manual"}],[41990,{0:"Standard",1:"Landscape",2:"Portrait",3:"Night",4:"Other"}],[41991,{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"}],[41996,{0:"Unknown",1:"Macro",2:"Close",3:"Distant"}],[42080,{0:"Unknown",1:"Not a Composite Image",2:"General Composite Image",3:"Composite Image Captured While Shooting"}]]);const Jg={1:"No absolute unit of measurement",2:"Inch",3:"Centimeter"};qo.set(37392,Jg),qo.set(41488,Jg);const xf={0:"Normal",1:"Low",2:"High"};function e0(t){return typeof t=="object"&&t.length!==void 0?t[0]:t}function t0(t){let e=Array.from(t).slice(1);return e[1]>15&&(e=e.map(n=>String.fromCharCode(n))),e[2]!=="0"&&e[2]!==0||e.pop(),e.join(".")}function Sf(t){if(typeof t=="string"){var[e,n,i,r,s,o]=t.trim().split(/[-: ]/g).map(Number),a=new Date(e,n-1,i);return Number.isNaN(r)||Number.isNaN(s)||Number.isNaN(o)||(a.setHours(r),a.setMinutes(s),a.setSeconds(o)),Number.isNaN(+a)?t:a}}function Io(t){if(typeof t=="string")return t;let e=[];if(t[1]===0&&t[t.length-1]===0)for(let n=0;n<t.length;n+=2)e.push(n0(t[n+1],t[n]));else for(let n=0;n<t.length;n+=2)e.push(n0(t[n],t[n+1]));return Gr(String.fromCodePoint(...e))}function n0(t,e){return t<<8|e}qo.set(41992,xf),qo.set(41993,xf),qo.set(41994,xf),Xt(jl,["ifd0","ifd1"],[[50827,function(t){return typeof t!="string"?ly(t):t}],[306,Sf],[40091,Io],[40092,Io],[40093,Io],[40094,Io],[40095,Io]]),Xt(jl,"exif",[[40960,t0],[36864,t0],[36867,Sf],[36868,Sf],[40962,e0],[40963,e0]]),Xt(jl,"gps",[[0,t=>Array.from(t).join(".")],[7,t=>Array.from(t).join(":")]]);class Mf extends ei{static canHandle(e,n){return e.getUint8(n+1)===225&&e.getUint32(n+4)===1752462448&&e.getString(n+4,20)==="http://ns.adobe.com/"}static headerLength(e,n){return e.getString(n+4,34)==="http://ns.adobe.com/xmp/extension/"?79:33}static findPosition(e,n){let i=super.findPosition(e,n);return i.multiSegment=i.extended=i.headerLength===79,i.multiSegment?(i.chunkCount=e.getUint8(n+72),i.chunkNumber=e.getUint8(n+76),e.getUint8(n+77)!==0&&i.chunkNumber++):(i.chunkCount=1/0,i.chunkNumber=-1),i}static handleMultiSegments(e){return e.map(n=>n.chunk.getString()).join("")}normalizeInput(e){return typeof e=="string"?e:mn.from(e).getString()}parse(e=this.chunk){if(!this.localOptions.parse)return e;e=function(s){let o={},a={};for(let l of vy)o[l]=[],a[l]=0;return s.replace(o2,(l,c,f)=>{if(c==="<"){let d=++a[f];return o[f].push(d),`${l}#${d}`}return`${l}#${o[f].pop()}`})}(e);let n=Xs.findAll(e,"rdf","Description");n.length===0&&n.push(new Xs("rdf","Description",void 0,e));let i,r={};for(let s of n)for(let o of s.properties)i=s2(o.ns,r),py(o,i);return function(s){let o;for(let a in s)o=s[a]=bc(s[a]),o===void 0&&delete s[a];return bc(s)}(r)}assignToOutput(e,n){if(this.localOptions.parse)for(let[i,r]of Object.entries(n))switch(i){case"tiff":this.assignObjectToOutput(e,"ifd0",r);break;case"exif":this.assignObjectToOutput(e,"exif",r);break;case"xmlns":break;default:this.assignObjectToOutput(e,i,r)}else e.xmp=n}}Ie(Mf,"type","xmp"),Ie(Mf,"multiSegment",!0),nn.set("xmp",Mf);class Lc{static findAll(e){return my(e,/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)=("[^"]*"|'[^']*')/gm).map(Lc.unpackMatch)}static unpackMatch(e){let n=e[1],i=e[2],r=e[3].slice(1,-1);return r=gy(r),new Lc(n,i,r)}constructor(e,n,i){this.ns=e,this.name=n,this.value=i}serialize(){return this.value}}class Xs{static findAll(e,n,i){if(n!==void 0||i!==void 0){n=n||"[\\w\\d-]+",i=i||"[\\w\\d-]+";var r=new RegExp(`<(${n}):(${i})(#\\d+)?((\\s+?[\\w\\d-:]+=("[^"]*"|'[^']*'))*\\s*)(\\/>|>([\\s\\S]*?)<\\/\\1:\\2\\3>)`,"gm")}else r=/<([\w\d-]+):([\w\d-]+)(#\d+)?((\s+?[\w\d-:]+=("[^"]*"|'[^']*'))*\s*)(\/>|>([\s\S]*?)<\/\1:\2\3>)/gm;return my(e,r).map(Xs.unpackMatch)}static unpackMatch(e){let n=e[1],i=e[2],r=e[4],s=e[8];return new Xs(n,i,r,s)}constructor(e,n,i,r){this.ns=e,this.name=n,this.attrString=i,this.innerXml=r,this.attrs=Lc.findAll(i),this.children=Xs.findAll(r),this.value=this.children.length===0?gy(r):void 0,this.properties=[...this.attrs,...this.children]}get isPrimitive(){return this.value!==void 0&&this.attrs.length===0&&this.children.length===0}get isListContainer(){return this.children.length===1&&this.children[0].isList}get isList(){let{ns:e,name:n}=this;return e==="rdf"&&(n==="Seq"||n==="Bag"||n==="Alt")}get isListItem(){return this.ns==="rdf"&&this.name==="li"}serialize(){if(this.properties.length===0&&this.value===void 0)return;if(this.isPrimitive)return this.value;if(this.isListContainer)return this.children[0].serialize();if(this.isList)return r2(this.children.map(i2));if(this.isListItem&&this.children.length===1&&this.attrs.length===0)return this.children[0].serialize();let e={};for(let n of this.properties)py(n,e);return this.value!==void 0&&(e.value=this.value),bc(e)}}function py(t,e){let n=t.serialize();n!==void 0&&(e[t.name]=n)}var i2=t=>t.serialize(),r2=t=>t.length===1?t[0]:t,s2=(t,e)=>e[t]?e[t]:e[t]={};function my(t,e){let n,i=[];if(!t)return i;for(;(n=e.exec(t))!==null;)i.push(n);return i}function gy(t){if(function(i){return i==null||i==="null"||i==="undefined"||i===""||i.trim()===""}(t))return;let e=Number(t);if(!Number.isNaN(e))return e;let n=t.toLowerCase();return n==="true"||n!=="false"&&t.trim()}const vy=["rdf:li","rdf:Seq","rdf:Bag","rdf:Alt","rdf:Description"],o2=new RegExp(`(<|\\/)(${vy.join("|")})`,"g");let i0=Rc("fs",t=>t.promises);po.set("fs",class extends iu{async readWhole(){this.chunked=!1,this.fs=await i0;let t=await this.fs.readFile(this.input);this._swapBuffer(t)}async readChunked(){this.chunked=!0,this.fs=await i0,await this.open(),await this.readChunk(0,this.options.firstChunkSize)}async open(){this.fh===void 0&&(this.fh=await this.fs.open(this.input,"r"),this.size=(await this.fh.stat(this.input)).size)}async _readChunk(t,e){this.fh===void 0&&await this.open(),t+e>this.size&&(e=this.size-t);var n=this.subarray(t,e,!0);return await this.fh.read(n.dataView,0,e,t),n}async close(){if(this.fh){let t=this.fh;this.fh=void 0,await t.close()}}});po.set("base64",class extends iu{constructor(...t){super(...t),this.input=this.input.replace(/^data:([^;]+);base64,/gim,""),this.size=this.input.length/4*3,this.input.endsWith("==")?this.size-=2:this.input.endsWith("=")&&(this.size-=1)}async _readChunk(t,e){let n,i,r=this.input;t===void 0?(t=0,n=0,i=0):(n=4*Math.floor(t/3),i=t-n/4*3),e===void 0&&(e=this.size);let s=t+e,o=n+4*Math.ceil(s/3);r=r.slice(n,o);let a=Math.min(e,this.size-t);if(Ud){let l=Nd.from(r,"base64").slice(i,i+a);return this.set(l,t,!0)}{let l=this.subarray(t,a,!0),c=atob(r),f=l.toUint8();for(let d=0;d<a;d++)f[d]=c.charCodeAt(i+d);return l}}});class r0 extends nu{static canHandle(e,n){return n===18761||n===19789}extendOptions(e){let{ifd0:n,xmp:i,iptc:r,icc:s}=e;i.enabled&&n.deps.add(700),r.enabled&&n.deps.add(33723),s.enabled&&n.deps.add(34675),n.finalizeFilters()}async parse(){let{tiff:e,xmp:n,iptc:i,icc:r}=this.options;if(e.enabled||n.enabled||i.enabled||r.enabled){let s=Math.max(Th(this.options),this.options.chunkSize);await this.file.ensureChunk(0,s),this.createParser("tiff",this.file),this.parsers.tiff.parseHeader(),await this.parsers.tiff.parseIfd0Block(),this.adaptTiffPropAsSegment("xmp"),this.adaptTiffPropAsSegment("iptc"),this.adaptTiffPropAsSegment("icc")}}adaptTiffPropAsSegment(e){if(this.parsers.tiff[e]){let n=this.parsers.tiff[e];this.injectSegment(e,n)}}}Ie(r0,"type","tiff"),oo.set("tiff",r0);let a2=Rc("zlib");const l2=["ihdr","iccp","text","itxt","exif"];class s0 extends nu{constructor(...e){super(...e),Ie(this,"catchError",n=>this.errors.push(n)),Ie(this,"metaChunks",[]),Ie(this,"unknownChunks",[])}static canHandle(e,n){return n===35152&&e.getUint32(0)===2303741511&&e.getUint32(4)===218765834}async parse(){let{file:e}=this;await this.findPngChunksInRange(8,e.byteLength),await this.readSegments(this.metaChunks),this.findIhdr(),this.parseTextChunks(),await this.findExif().catch(this.catchError),await this.findXmp().catch(this.catchError),await this.findIcc().catch(this.catchError)}async findPngChunksInRange(e,n){let{file:i}=this;for(;e<n;){let r=i.getUint32(e),s=i.getUint32(e+4),o=i.getString(e+4,4).toLowerCase(),a=r+4+4+4,l={type:o,offset:e,length:a,start:e+4+4,size:r,marker:s};l2.includes(o)?this.metaChunks.push(l):this.unknownChunks.push(l),e+=a}}parseTextChunks(){let e=this.metaChunks.filter(n=>n.type==="text");for(let n of e){let[i,r]=this.file.getString(n.start,n.size).split("\0");this.injectKeyValToIhdr(i,r)}}injectKeyValToIhdr(e,n){let i=this.parsers.ihdr;i&&i.raw.set(e,n)}findIhdr(){let e=this.metaChunks.find(n=>n.type==="ihdr");e&&this.options.ihdr.enabled!==!1&&this.createParser("ihdr",e.chunk)}async findExif(){let e=this.metaChunks.find(n=>n.type==="exif");e&&this.injectSegment("tiff",e.chunk)}async findXmp(){let e=this.metaChunks.filter(n=>n.type==="itxt");for(let n of e)n.chunk.getString(0,17)==="XML:com.adobe.xmp"&&this.injectSegment("xmp",n.chunk)}async findIcc(){let e=this.metaChunks.find(a=>a.type==="iccp");if(!e)return;let{chunk:n}=e,i=n.getUint8Array(0,81),r=0;for(;r<80&&i[r]!==0;)r++;let s=r+2,o=n.getString(0,r);if(this.injectKeyValToIhdr("ProfileName",o),Cc){let a=await a2,l=n.getUint8Array(s);l=a.inflateSync(l),this.injectSegment("icc",l)}}}Ie(s0,"type","png"),oo.set("png",s0),Xt(Mn,"interop",[[1,"InteropIndex"],[2,"InteropVersion"],[4096,"RelatedImageFileFormat"],[4097,"RelatedImageWidth"],[4098,"RelatedImageHeight"]]),Ih(Mn,"ifd0",[[11,"ProcessingSoftware"],[254,"SubfileType"],[255,"OldSubfileType"],[263,"Thresholding"],[264,"CellWidth"],[265,"CellLength"],[266,"FillOrder"],[269,"DocumentName"],[280,"MinSampleValue"],[281,"MaxSampleValue"],[285,"PageName"],[286,"XPosition"],[287,"YPosition"],[290,"GrayResponseUnit"],[297,"PageNumber"],[321,"HalftoneHints"],[322,"TileWidth"],[323,"TileLength"],[332,"InkSet"],[337,"TargetPrinter"],[18246,"Rating"],[18249,"RatingPercent"],[33550,"PixelScale"],[34264,"ModelTransform"],[34377,"PhotoshopSettings"],[50706,"DNGVersion"],[50707,"DNGBackwardVersion"],[50708,"UniqueCameraModel"],[50709,"LocalizedCameraModel"],[50736,"DNGLensInfo"],[50739,"ShadowScale"],[50740,"DNGPrivateData"],[33920,"IntergraphMatrix"],[33922,"ModelTiePoint"],[34118,"SEMInfo"],[34735,"GeoTiffDirectory"],[34736,"GeoTiffDoubleParams"],[34737,"GeoTiffAsciiParams"],[50341,"PrintIM"],[50721,"ColorMatrix1"],[50722,"ColorMatrix2"],[50723,"CameraCalibration1"],[50724,"CameraCalibration2"],[50725,"ReductionMatrix1"],[50726,"ReductionMatrix2"],[50727,"AnalogBalance"],[50728,"AsShotNeutral"],[50729,"AsShotWhiteXY"],[50730,"BaselineExposure"],[50731,"BaselineNoise"],[50732,"BaselineSharpness"],[50734,"LinearResponseLimit"],[50735,"CameraSerialNumber"],[50741,"MakerNoteSafety"],[50778,"CalibrationIlluminant1"],[50779,"CalibrationIlluminant2"],[50781,"RawDataUniqueID"],[50827,"OriginalRawFileName"],[50828,"OriginalRawFileData"],[50831,"AsShotICCProfile"],[50832,"AsShotPreProfileMatrix"],[50833,"CurrentICCProfile"],[50834,"CurrentPreProfileMatrix"],[50879,"ColorimetricReference"],[50885,"SRawType"],[50898,"PanasonicTitle"],[50899,"PanasonicTitle2"],[50931,"CameraCalibrationSig"],[50932,"ProfileCalibrationSig"],[50933,"ProfileIFD"],[50934,"AsShotProfileName"],[50936,"ProfileName"],[50937,"ProfileHueSatMapDims"],[50938,"ProfileHueSatMapData1"],[50939,"ProfileHueSatMapData2"],[50940,"ProfileToneCurve"],[50941,"ProfileEmbedPolicy"],[50942,"ProfileCopyright"],[50964,"ForwardMatrix1"],[50965,"ForwardMatrix2"],[50966,"PreviewApplicationName"],[50967,"PreviewApplicationVersion"],[50968,"PreviewSettingsName"],[50969,"PreviewSettingsDigest"],[50970,"PreviewColorSpace"],[50971,"PreviewDateTime"],[50972,"RawImageDigest"],[50973,"OriginalRawFileDigest"],[50981,"ProfileLookTableDims"],[50982,"ProfileLookTableData"],[51043,"TimeCodes"],[51044,"FrameRate"],[51058,"TStop"],[51081,"ReelName"],[51089,"OriginalDefaultFinalSize"],[51090,"OriginalBestQualitySize"],[51091,"OriginalDefaultCropSize"],[51105,"CameraLabel"],[51107,"ProfileHueSatMapEncoding"],[51108,"ProfileLookTableEncoding"],[51109,"BaselineExposureOffset"],[51110,"DefaultBlackRender"],[51111,"NewRawImageDigest"],[51112,"RawToPreviewGain"]]);let o0=[[273,"StripOffsets"],[279,"StripByteCounts"],[288,"FreeOffsets"],[289,"FreeByteCounts"],[291,"GrayResponseCurve"],[292,"T4Options"],[293,"T6Options"],[300,"ColorResponseUnit"],[320,"ColorMap"],[324,"TileOffsets"],[325,"TileByteCounts"],[326,"BadFaxLines"],[327,"CleanFaxData"],[328,"ConsecutiveBadFaxLines"],[330,"SubIFD"],[333,"InkNames"],[334,"NumberofInks"],[336,"DotRange"],[338,"ExtraSamples"],[339,"SampleFormat"],[340,"SMinSampleValue"],[341,"SMaxSampleValue"],[342,"TransferRange"],[343,"ClipPath"],[344,"XClipPathUnits"],[345,"YClipPathUnits"],[346,"Indexed"],[347,"JPEGTables"],[351,"OPIProxy"],[400,"GlobalParametersIFD"],[401,"ProfileType"],[402,"FaxProfile"],[403,"CodingMethods"],[404,"VersionYear"],[405,"ModeNumber"],[433,"Decode"],[434,"DefaultImageColor"],[435,"T82Options"],[437,"JPEGTables"],[512,"JPEGProc"],[515,"JPEGRestartInterval"],[517,"JPEGLosslessPredictors"],[518,"JPEGPointTransforms"],[519,"JPEGQTables"],[520,"JPEGDCTables"],[521,"JPEGACTables"],[559,"StripRowCounts"],[999,"USPTOMiscellaneous"],[18247,"XP_DIP_XML"],[18248,"StitchInfo"],[28672,"SonyRawFileType"],[28688,"SonyToneCurve"],[28721,"VignettingCorrection"],[28722,"VignettingCorrParams"],[28724,"ChromaticAberrationCorrection"],[28725,"ChromaticAberrationCorrParams"],[28726,"DistortionCorrection"],[28727,"DistortionCorrParams"],[29895,"SonyCropTopLeft"],[29896,"SonyCropSize"],[32781,"ImageID"],[32931,"WangTag1"],[32932,"WangAnnotation"],[32933,"WangTag3"],[32934,"WangTag4"],[32953,"ImageReferencePoints"],[32954,"RegionXformTackPoint"],[32955,"WarpQuadrilateral"],[32956,"AffineTransformMat"],[32995,"Matteing"],[32996,"DataType"],[32997,"ImageDepth"],[32998,"TileDepth"],[33300,"ImageFullWidth"],[33301,"ImageFullHeight"],[33302,"TextureFormat"],[33303,"WrapModes"],[33304,"FovCot"],[33305,"MatrixWorldToScreen"],[33306,"MatrixWorldToCamera"],[33405,"Model2"],[33421,"CFARepeatPatternDim"],[33422,"CFAPattern2"],[33423,"BatteryLevel"],[33424,"KodakIFD"],[33445,"MDFileTag"],[33446,"MDScalePixel"],[33447,"MDColorTable"],[33448,"MDLabName"],[33449,"MDSampleInfo"],[33450,"MDPrepDate"],[33451,"MDPrepTime"],[33452,"MDFileUnits"],[33589,"AdventScale"],[33590,"AdventRevision"],[33628,"UIC1Tag"],[33629,"UIC2Tag"],[33630,"UIC3Tag"],[33631,"UIC4Tag"],[33918,"IntergraphPacketData"],[33919,"IntergraphFlagRegisters"],[33921,"INGRReserved"],[34016,"Site"],[34017,"ColorSequence"],[34018,"IT8Header"],[34019,"RasterPadding"],[34020,"BitsPerRunLength"],[34021,"BitsPerExtendedRunLength"],[34022,"ColorTable"],[34023,"ImageColorIndicator"],[34024,"BackgroundColorIndicator"],[34025,"ImageColorValue"],[34026,"BackgroundColorValue"],[34027,"PixelIntensityRange"],[34028,"TransparencyIndicator"],[34029,"ColorCharacterization"],[34030,"HCUsage"],[34031,"TrapIndicator"],[34032,"CMYKEquivalent"],[34152,"AFCP_IPTC"],[34232,"PixelMagicJBIGOptions"],[34263,"JPLCartoIFD"],[34306,"WB_GRGBLevels"],[34310,"LeafData"],[34687,"TIFF_FXExtensions"],[34688,"MultiProfiles"],[34689,"SharedData"],[34690,"T88Options"],[34732,"ImageLayer"],[34750,"JBIGOptions"],[34856,"Opto-ElectricConvFactor"],[34857,"Interlace"],[34908,"FaxRecvParams"],[34909,"FaxSubAddress"],[34910,"FaxRecvTime"],[34929,"FedexEDR"],[34954,"LeafSubIFD"],[37387,"FlashEnergy"],[37388,"SpatialFrequencyResponse"],[37389,"Noise"],[37390,"FocalPlaneXResolution"],[37391,"FocalPlaneYResolution"],[37392,"FocalPlaneResolutionUnit"],[37397,"ExposureIndex"],[37398,"TIFF-EPStandardID"],[37399,"SensingMethod"],[37434,"CIP3DataFile"],[37435,"CIP3Sheet"],[37436,"CIP3Side"],[37439,"StoNits"],[37679,"MSDocumentText"],[37680,"MSPropertySetStorage"],[37681,"MSDocumentTextPosition"],[37724,"ImageSourceData"],[40965,"InteropIFD"],[40976,"SamsungRawPointersOffset"],[40977,"SamsungRawPointersLength"],[41217,"SamsungRawByteOrder"],[41218,"SamsungRawUnknown"],[41484,"SpatialFrequencyResponse"],[41485,"Noise"],[41489,"ImageNumber"],[41490,"SecurityClassification"],[41491,"ImageHistory"],[41494,"TIFF-EPStandardID"],[41995,"DeviceSettingDescription"],[42112,"GDALMetadata"],[42113,"GDALNoData"],[44992,"ExpandSoftware"],[44993,"ExpandLens"],[44994,"ExpandFilm"],[44995,"ExpandFilterLens"],[44996,"ExpandScanner"],[44997,"ExpandFlashLamp"],[46275,"HasselbladRawImage"],[48129,"PixelFormat"],[48130,"Transformation"],[48131,"Uncompressed"],[48132,"ImageType"],[48256,"ImageWidth"],[48257,"ImageHeight"],[48258,"WidthResolution"],[48259,"HeightResolution"],[48320,"ImageOffset"],[48321,"ImageByteCount"],[48322,"AlphaOffset"],[48323,"AlphaByteCount"],[48324,"ImageDataDiscard"],[48325,"AlphaDataDiscard"],[50215,"OceScanjobDesc"],[50216,"OceApplicationSelector"],[50217,"OceIDNumber"],[50218,"OceImageLogic"],[50255,"Annotations"],[50459,"HasselbladExif"],[50547,"OriginalFileName"],[50560,"USPTOOriginalContentType"],[50656,"CR2CFAPattern"],[50710,"CFAPlaneColor"],[50711,"CFALayout"],[50712,"LinearizationTable"],[50713,"BlackLevelRepeatDim"],[50714,"BlackLevel"],[50715,"BlackLevelDeltaH"],[50716,"BlackLevelDeltaV"],[50717,"WhiteLevel"],[50718,"DefaultScale"],[50719,"DefaultCropOrigin"],[50720,"DefaultCropSize"],[50733,"BayerGreenSplit"],[50737,"ChromaBlurRadius"],[50738,"AntiAliasStrength"],[50752,"RawImageSegmentation"],[50780,"BestQualityScale"],[50784,"AliasLayerMetadata"],[50829,"ActiveArea"],[50830,"MaskedAreas"],[50935,"NoiseReductionApplied"],[50974,"SubTileBlockSize"],[50975,"RowInterleaveFactor"],[51008,"OpcodeList1"],[51009,"OpcodeList2"],[51022,"OpcodeList3"],[51041,"NoiseProfile"],[51114,"CacheVersion"],[51125,"DefaultUserCrop"],[51157,"NikonNEFInfo"],[65024,"KdcIFD"]];Ih(Mn,"ifd0",o0),Ih(Mn,"exif",o0),Xt(ns,"gps",[[23,{M:"Magnetic North",T:"True North"}],[25,{K:"Kilometers",M:"Miles",N:"Nautical Miles"}]]);class Ef extends ei{static canHandle(e,n){return e.getUint8(n+1)===224&&e.getUint32(n+4)===1246120262&&e.getUint8(n+8)===0}parse(){return this.parseTags(),this.translate(),this.output}parseTags(){this.raw=new Map([[0,this.chunk.getUint16(0)],[2,this.chunk.getUint8(2)],[3,this.chunk.getUint16(3)],[5,this.chunk.getUint16(5)],[7,this.chunk.getUint8(7)],[8,this.chunk.getUint8(8)]])}}Ie(Ef,"type","jfif"),Ie(Ef,"headerLength",9),nn.set("jfif",Ef),Xt(Mn,"jfif",[[0,"JFIFVersion"],[2,"ResolutionUnit"],[3,"XResolution"],[5,"YResolution"],[7,"ThumbnailWidth"],[8,"ThumbnailHeight"]]);class a0 extends ei{parse(){return this.parseTags(),this.translate(),this.output}parseTags(){this.raw=new Map([[0,this.chunk.getUint32(0)],[4,this.chunk.getUint32(4)],[8,this.chunk.getUint8(8)],[9,this.chunk.getUint8(9)],[10,this.chunk.getUint8(10)],[11,this.chunk.getUint8(11)],[12,this.chunk.getUint8(12)],...Array.from(this.raw)])}}Ie(a0,"type","ihdr"),nn.set("ihdr",a0),Xt(Mn,"ihdr",[[0,"ImageWidth"],[4,"ImageHeight"],[8,"BitDepth"],[9,"ColorType"],[10,"Compression"],[11,"Filter"],[12,"Interlace"]]),Xt(ns,"ihdr",[[9,{0:"Grayscale",2:"RGB",3:"Palette",4:"Grayscale with Alpha",6:"RGB with Alpha",DEFAULT:"Unknown"}],[10,{0:"Deflate/Inflate",DEFAULT:"Unknown"}],[11,{0:"Adaptive",DEFAULT:"Unknown"}],[12,{0:"Noninterlaced",1:"Adam7 Interlace",DEFAULT:"Unknown"}]]);class Xl extends ei{static canHandle(e,n){return e.getUint8(n+1)===226&&e.getUint32(n+4)===1229144927}static findPosition(e,n){let i=super.findPosition(e,n);return i.chunkNumber=e.getUint8(n+16),i.chunkCount=e.getUint8(n+17),i.multiSegment=i.chunkCount>1,i}static handleMultiSegments(e){return function(n){let i=function(r){let s=r[0].constructor,o=0;for(let c of r)o+=c.length;let a=new s(o),l=0;for(let c of r)a.set(c,l),l+=c.length;return a}(n.map(r=>r.chunk.toUint8()));return new mn(i)}(e)}parse(){return this.raw=new Map,this.parseHeader(),this.parseTags(),this.translate(),this.output}parseHeader(){let{raw:e}=this;this.chunk.byteLength<84&&It("ICC header is too short");for(let[n,i]of Object.entries(c2)){n=parseInt(n,10);let r=i(this.chunk,n);r!=="\0\0\0\0"&&e.set(n,r)}}parseTags(){let e,n,i,r,s,{raw:o}=this,a=this.chunk.getUint32(128),l=132,c=this.chunk.byteLength;for(;a--;){if(e=this.chunk.getString(l,4),n=this.chunk.getUint32(l+4),i=this.chunk.getUint32(l+8),r=this.chunk.getString(n,4),n+i>c)return void console.warn("reached the end of the first ICC chunk. Enable options.tiff.multiSegment to read all ICC segments.");s=this.parseTag(r,n,i),s!==void 0&&s!=="\0\0\0\0"&&o.set(e,s),l+=12}}parseTag(e,n,i){switch(e){case"desc":return this.parseDesc(n);case"mluc":return this.parseMluc(n);case"text":return this.parseText(n,i);case"sig ":return this.parseSig(n)}if(!(n+i>this.chunk.byteLength))return this.chunk.getUint8Array(n,i)}parseDesc(e){let n=this.chunk.getUint32(e+8)-1;return Gr(this.chunk.getString(e+12,n))}parseText(e,n){return Gr(this.chunk.getString(e+8,n-8))}parseSig(e){return Gr(this.chunk.getString(e+8,4))}parseMluc(e){let{chunk:n}=this,i=n.getUint32(e+8),r=n.getUint32(e+12),s=e+16,o=[];for(let a=0;a<i;a++){let l=n.getString(s+0,2),c=n.getString(s+2,2),f=n.getUint32(s+4),d=n.getUint32(s+8)+e,h=Gr(n.getUnicodeString(d,f));o.push({lang:l,country:c,text:h}),s+=r}return i===1?o[0].text:o}translateValue(e,n){return typeof e=="string"?n[e]||n[e.toLowerCase()]||e:n[e]||e}}Ie(Xl,"type","icc"),Ie(Xl,"multiSegment",!0),Ie(Xl,"headerLength",18);const c2={4:wi,8:function(t,e){return[t.getUint8(e),t.getUint8(e+1)>>4,t.getUint8(e+1)%16].map(n=>n.toString(10)).join(".")},12:wi,16:wi,20:wi,24:function(t,e){const n=t.getUint16(e),i=t.getUint16(e+2)-1,r=t.getUint16(e+4),s=t.getUint16(e+6),o=t.getUint16(e+8),a=t.getUint16(e+10);return new Date(Date.UTC(n,i,r,s,o,a))},36:wi,40:wi,48:wi,52:wi,64:(t,e)=>t.getUint32(e),80:wi};function wi(t,e){return Gr(t.getString(e,4))}nn.set("icc",Xl),Xt(Mn,"icc",[[4,"ProfileCMMType"],[8,"ProfileVersion"],[12,"ProfileClass"],[16,"ColorSpaceData"],[20,"ProfileConnectionSpace"],[24,"ProfileDateTime"],[36,"ProfileFileSignature"],[40,"PrimaryPlatform"],[44,"CMMFlags"],[48,"DeviceManufacturer"],[52,"DeviceModel"],[56,"DeviceAttributes"],[64,"RenderingIntent"],[68,"ConnectionSpaceIlluminant"],[80,"ProfileCreator"],[84,"ProfileID"],["Header","ProfileHeader"],["MS00","WCSProfiles"],["bTRC","BlueTRC"],["bXYZ","BlueMatrixColumn"],["bfd","UCRBG"],["bkpt","MediaBlackPoint"],["calt","CalibrationDateTime"],["chad","ChromaticAdaptation"],["chrm","Chromaticity"],["ciis","ColorimetricIntentImageState"],["clot","ColorantTableOut"],["clro","ColorantOrder"],["clrt","ColorantTable"],["cprt","ProfileCopyright"],["crdi","CRDInfo"],["desc","ProfileDescription"],["devs","DeviceSettings"],["dmdd","DeviceModelDesc"],["dmnd","DeviceMfgDesc"],["dscm","ProfileDescriptionML"],["fpce","FocalPlaneColorimetryEstimates"],["gTRC","GreenTRC"],["gXYZ","GreenMatrixColumn"],["gamt","Gamut"],["kTRC","GrayTRC"],["lumi","Luminance"],["meas","Measurement"],["meta","Metadata"],["mmod","MakeAndModel"],["ncl2","NamedColor2"],["ncol","NamedColor"],["ndin","NativeDisplayInfo"],["pre0","Preview0"],["pre1","Preview1"],["pre2","Preview2"],["ps2i","PS2RenderingIntent"],["ps2s","PostScript2CSA"],["psd0","PostScript2CRD0"],["psd1","PostScript2CRD1"],["psd2","PostScript2CRD2"],["psd3","PostScript2CRD3"],["pseq","ProfileSequenceDesc"],["psid","ProfileSequenceIdentifier"],["psvm","PS2CRDVMSize"],["rTRC","RedTRC"],["rXYZ","RedMatrixColumn"],["resp","OutputResponse"],["rhoc","ReflectionHardcopyOrigColorimetry"],["rig0","PerceptualRenderingIntentGamut"],["rig2","SaturationRenderingIntentGamut"],["rpoc","ReflectionPrintOutputColorimetry"],["sape","SceneAppearanceEstimates"],["scoe","SceneColorimetryEstimates"],["scrd","ScreeningDesc"],["scrn","Screening"],["targ","CharTarget"],["tech","Technology"],["vcgt","VideoCardGamma"],["view","ViewingConditions"],["vued","ViewingCondDesc"],["wtpt","MediaWhitePoint"]]);const Al={"4d2p":"Erdt Systems",AAMA:"Aamazing Technologies",ACER:"Acer",ACLT:"Acolyte Color Research",ACTI:"Actix Sytems",ADAR:"Adara Technology",ADBE:"Adobe",ADI:"ADI Systems",AGFA:"Agfa Graphics",ALMD:"Alps Electric",ALPS:"Alps Electric",ALWN:"Alwan Color Expertise",AMTI:"Amiable Technologies",AOC:"AOC International",APAG:"Apago",APPL:"Apple Computer",AST:"AST","AT&T":"AT&T",BAEL:"BARBIERI electronic",BRCO:"Barco NV",BRKP:"Breakpoint",BROT:"Brother",BULL:"Bull",BUS:"Bus Computer Systems","C-IT":"C-Itoh",CAMR:"Intel",CANO:"Canon",CARR:"Carroll Touch",CASI:"Casio",CBUS:"Colorbus PL",CEL:"Crossfield",CELx:"Crossfield",CGS:"CGS Publishing Technologies International",CHM:"Rochester Robotics",CIGL:"Colour Imaging Group, London",CITI:"Citizen",CL00:"Candela",CLIQ:"Color IQ",CMCO:"Chromaco",CMiX:"CHROMiX",COLO:"Colorgraphic Communications",COMP:"Compaq",COMp:"Compeq/Focus Technology",CONR:"Conrac Display Products",CORD:"Cordata Technologies",CPQ:"Compaq",CPRO:"ColorPro",CRN:"Cornerstone",CTX:"CTX International",CVIS:"ColorVision",CWC:"Fujitsu Laboratories",DARI:"Darius Technology",DATA:"Dataproducts",DCP:"Dry Creek Photo",DCRC:"Digital Contents Resource Center, Chung-Ang University",DELL:"Dell Computer",DIC:"Dainippon Ink and Chemicals",DICO:"Diconix",DIGI:"Digital","DL&C":"Digital Light & Color",DPLG:"Doppelganger",DS:"Dainippon Screen",DSOL:"DOOSOL",DUPN:"DuPont",EPSO:"Epson",ESKO:"Esko-Graphics",ETRI:"Electronics and Telecommunications Research Institute",EVER:"Everex Systems",EXAC:"ExactCODE",Eizo:"Eizo",FALC:"Falco Data Products",FF:"Fuji Photo Film",FFEI:"FujiFilm Electronic Imaging",FNRD:"Fnord Software",FORA:"Fora",FORE:"Forefront Technology",FP:"Fujitsu",FPA:"WayTech Development",FUJI:"Fujitsu",FX:"Fuji Xerox",GCC:"GCC Technologies",GGSL:"Global Graphics Software",GMB:"Gretagmacbeth",GMG:"GMG",GOLD:"GoldStar Technology",GOOG:"Google",GPRT:"Giantprint",GTMB:"Gretagmacbeth",GVC:"WayTech Development",GW2K:"Sony",HCI:"HCI",HDM:"Heidelberger Druckmaschinen",HERM:"Hermes",HITA:"Hitachi America",HP:"Hewlett-Packard",HTC:"Hitachi",HiTi:"HiTi Digital",IBM:"IBM",IDNT:"Scitex",IEC:"Hewlett-Packard",IIYA:"Iiyama North America",IKEG:"Ikegami Electronics",IMAG:"Image Systems",IMI:"Ingram Micro",INTC:"Intel",INTL:"N/A (INTL)",INTR:"Intra Electronics",IOCO:"Iocomm International Technology",IPS:"InfoPrint Solutions Company",IRIS:"Scitex",ISL:"Ichikawa Soft Laboratory",ITNL:"N/A (ITNL)",IVM:"IVM",IWAT:"Iwatsu Electric",Idnt:"Scitex",Inca:"Inca Digital Printers",Iris:"Scitex",JPEG:"Joint Photographic Experts Group",JSFT:"Jetsoft Development",JVC:"JVC Information Products",KART:"Scitex",KFC:"KFC Computek Components",KLH:"KLH Computers",KMHD:"Konica Minolta",KNCA:"Konica",KODA:"Kodak",KYOC:"Kyocera",Kart:"Scitex",LCAG:"Leica",LCCD:"Leeds Colour",LDAK:"Left Dakota",LEAD:"Leading Technology",LEXM:"Lexmark International",LINK:"Link Computer",LINO:"Linotronic",LITE:"Lite-On",Leaf:"Leaf",Lino:"Linotronic",MAGC:"Mag Computronic",MAGI:"MAG Innovision",MANN:"Mannesmann",MICN:"Micron Technology",MICR:"Microtek",MICV:"Microvitec",MINO:"Minolta",MITS:"Mitsubishi Electronics America",MITs:"Mitsuba",MNLT:"Minolta",MODG:"Modgraph",MONI:"Monitronix",MONS:"Monaco Systems",MORS:"Morse Technology",MOTI:"Motive Systems",MSFT:"Microsoft",MUTO:"MUTOH INDUSTRIES",Mits:"Mitsubishi Electric",NANA:"NANAO",NEC:"NEC",NEXP:"NexPress Solutions",NISS:"Nissei Sangyo America",NKON:"Nikon",NONE:"none",OCE:"Oce Technologies",OCEC:"OceColor",OKI:"Oki",OKID:"Okidata",OKIP:"Okidata",OLIV:"Olivetti",OLYM:"Olympus",ONYX:"Onyx Graphics",OPTI:"Optiquest",PACK:"Packard Bell",PANA:"Matsushita Electric Industrial",PANT:"Pantone",PBN:"Packard Bell",PFU:"PFU",PHIL:"Philips Consumer Electronics",PNTX:"HOYA",POne:"Phase One A/S",PREM:"Premier Computer Innovations",PRIN:"Princeton Graphic Systems",PRIP:"Princeton Publishing Labs",QLUX:"Hong Kong",QMS:"QMS",QPCD:"QPcard AB",QUAD:"QuadLaser",QUME:"Qume",RADI:"Radius",RDDx:"Integrated Color Solutions",RDG:"Roland DG",REDM:"REDMS Group",RELI:"Relisys",RGMS:"Rolf Gierling Multitools",RICO:"Ricoh",RNLD:"Edmund Ronald",ROYA:"Royal",RPC:"Ricoh Printing Systems",RTL:"Royal Information Electronics",SAMP:"Sampo",SAMS:"Samsung",SANT:"Jaime Santana Pomares",SCIT:"Scitex",SCRN:"Dainippon Screen",SDP:"Scitex",SEC:"Samsung",SEIK:"Seiko Instruments",SEIk:"Seikosha",SGUY:"ScanGuy.com",SHAR:"Sharp Laboratories",SICC:"International Color Consortium",SONY:"Sony",SPCL:"SpectraCal",STAR:"Star",STC:"Sampo Technology",Scit:"Scitex",Sdp:"Scitex",Sony:"Sony",TALO:"Talon Technology",TAND:"Tandy",TATU:"Tatung",TAXA:"TAXAN America",TDS:"Tokyo Denshi Sekei",TECO:"TECO Information Systems",TEGR:"Tegra",TEKT:"Tektronix",TI:"Texas Instruments",TMKR:"TypeMaker",TOSB:"Toshiba",TOSH:"Toshiba",TOTK:"TOTOKU ELECTRIC",TRIU:"Triumph",TSBT:"Toshiba",TTX:"TTX Computer Products",TVM:"TVM Professional Monitor",TW:"TW Casper",ULSX:"Ulead Systems",UNIS:"Unisys",UTZF:"Utz Fehlau & Sohn",VARI:"Varityper",VIEW:"Viewsonic",VISL:"Visual communication",VIVO:"Vivo Mobile Communication",WANG:"Wang",WLBR:"Wilbur Imaging",WTG2:"Ware To Go",WYSE:"WYSE Technology",XERX:"Xerox",XRIT:"X-Rite",ZRAN:"Zoran",Zebr:"Zebra Technologies",appl:"Apple Computer",bICC:"basICColor",berg:"bergdesign",ceyd:"Integrated Color Solutions",clsp:"MacDermid ColorSpan",ds:"Dainippon Screen",dupn:"DuPont",ffei:"FujiFilm Electronic Imaging",flux:"FluxData",iris:"Scitex",kart:"Scitex",lcms:"Little CMS",lino:"Linotronic",none:"none",ob4d:"Erdt Systems",obic:"Medigraph",quby:"Qubyx Sarl",scit:"Scitex",scrn:"Dainippon Screen",sdp:"Scitex",siwi:"SIWI GRAFIKA",yxym:"YxyMaster"},l0={scnr:"Scanner",mntr:"Monitor",prtr:"Printer",link:"Device Link",abst:"Abstract",spac:"Color Space Conversion Profile",nmcl:"Named Color",cenc:"ColorEncodingSpace profile",mid:"MultiplexIdentification profile",mlnk:"MultiplexLink profile",mvis:"MultiplexVisualization profile",nkpf:"Nikon Input Device Profile (NON-STANDARD!)"};Xt(ns,"icc",[[4,Al],[12,l0],[40,Object.assign({},Al,l0)],[48,Al],[80,Al],[64,{0:"Perceptual",1:"Relative Colorimetric",2:"Saturation",3:"Absolute Colorimetric"}],["tech",{amd:"Active Matrix Display",crt:"Cathode Ray Tube Display",kpcd:"Photo CD",pmd:"Passive Matrix Display",dcam:"Digital Camera",dcpj:"Digital Cinema Projector",dmpc:"Digital Motion Picture Camera",dsub:"Dye Sublimation Printer",epho:"Electrophotographic Printer",esta:"Electrostatic Printer",flex:"Flexography",fprn:"Film Writer",fscn:"Film Scanner",grav:"Gravure",ijet:"Ink Jet Printer",imgs:"Photo Image Setter",mpfr:"Motion Picture Film Recorder",mpfs:"Motion Picture Film Scanner",offs:"Offset Lithography",pjtv:"Projection Television",rpho:"Photographic Paper Printer",rscn:"Reflective Scanner",silk:"Silkscreen",twax:"Thermal Wax Printer",vidc:"Video Camera",vidm:"Video Monitor"}]]);class Cl extends ei{static canHandle(e,n,i){return e.getUint8(n+1)===237&&e.getString(n+4,9)==="Photoshop"&&this.containsIptc8bim(e,n,i)!==void 0}static headerLength(e,n,i){let r,s=this.containsIptc8bim(e,n,i);if(s!==void 0)return r=e.getUint8(n+s+7),r%2!=0&&(r+=1),r===0&&(r=4),s+8+r}static containsIptc8bim(e,n,i){for(let r=0;r<i;r++)if(this.isIptcSegmentHead(e,n+r))return r}static isIptcSegmentHead(e,n){return e.getUint8(n)===56&&e.getUint32(n)===943868237&&e.getUint16(n+4)===1028}parse(){let{raw:e}=this,n=this.chunk.byteLength-1,i=!1;for(let r=0;r<n;r++)if(this.chunk.getUint8(r)===28&&this.chunk.getUint8(r+1)===2){i=!0;let s=this.chunk.getUint16(r+3),o=this.chunk.getUint8(r+2),a=this.chunk.getLatin1String(r+5,s);e.set(o,this.pluralizeValue(e.get(o),a)),r+=4+s}else if(i)break;return this.translate(),this.output}pluralizeValue(e,n){return e!==void 0?e instanceof Array?(e.push(n),e):[e,n]:n}}Ie(Cl,"type","iptc"),Ie(Cl,"translateValues",!1),Ie(Cl,"reviveValues",!1),nn.set("iptc",Cl),Xt(Mn,"iptc",[[0,"ApplicationRecordVersion"],[3,"ObjectTypeReference"],[4,"ObjectAttributeReference"],[5,"ObjectName"],[7,"EditStatus"],[8,"EditorialUpdate"],[10,"Urgency"],[12,"SubjectReference"],[15,"Category"],[20,"SupplementalCategories"],[22,"FixtureIdentifier"],[25,"Keywords"],[26,"ContentLocationCode"],[27,"ContentLocationName"],[30,"ReleaseDate"],[35,"ReleaseTime"],[37,"ExpirationDate"],[38,"ExpirationTime"],[40,"SpecialInstructions"],[42,"ActionAdvised"],[45,"ReferenceService"],[47,"ReferenceDate"],[50,"ReferenceNumber"],[55,"DateCreated"],[60,"TimeCreated"],[62,"DigitalCreationDate"],[63,"DigitalCreationTime"],[65,"OriginatingProgram"],[70,"ProgramVersion"],[75,"ObjectCycle"],[80,"Byline"],[85,"BylineTitle"],[90,"City"],[92,"Sublocation"],[95,"State"],[100,"CountryCode"],[101,"Country"],[103,"OriginalTransmissionReference"],[105,"Headline"],[110,"Credit"],[115,"Source"],[116,"CopyrightNotice"],[118,"Contact"],[120,"Caption"],[121,"LocalCaption"],[122,"Writer"],[125,"RasterizedCaption"],[130,"ImageType"],[131,"ImageOrientation"],[135,"LanguageIdentifier"],[150,"AudioType"],[151,"AudioSamplingRate"],[152,"AudioSamplingResolution"],[153,"AudioDuration"],[154,"AudioOutcue"],[184,"JobID"],[185,"MasterDocumentID"],[186,"ShortDocumentID"],[187,"UniqueDocumentID"],[188,"OwnerID"],[200,"ObjectPreviewFileFormat"],[201,"ObjectPreviewFileVersion"],[202,"ObjectPreviewData"],[221,"Prefs"],[225,"ClassifyState"],[228,"SimilarityIndex"],[230,"DocumentNotes"],[231,"DocumentHistory"],[232,"ExifCameraInfo"],[255,"CatalogSets"]]),Xt(ns,"iptc",[[10,{0:"0 (reserved)",1:"1 (most urgent)",2:"2",3:"3",4:"4",5:"5 (normal urgency)",6:"6",7:"7",8:"8 (least urgent)",9:"9 (user-defined priority)"}],[75,{a:"Morning",b:"Both Morning and Evening",p:"Evening"}],[131,{L:"Landscape",P:"Portrait",S:"Square"}]]);async function u2(t,e){try{const n=await $C(t);if(!n)return e;const i=structuredClone(e);if(n.FocalLength&&(i.cameraRig.spec.focal=Number(n.FocalLength)),n.FNumber&&(i.cameraRig.spec.aperture=Number(n.FNumber)),n.ISO&&(i.cameraRig.spec.iso=Number(n.ISO)),n.ExposureTime){const r=Number(n.ExposureTime);r>=1?i.cameraRig.spec.shutter=`${r.toFixed(0)}s`:i.cameraRig.spec.shutter=`1/${Math.round(1/r)}`}return i}catch(n){return console.error("Failed to parse EXIF:",n),e}}function Rl(t,e){const n=[];if(!Array.isArray(t))return n.push(`${e} 必须是数组`),n;if(t.length!==3)return n.push(`${e} 必须包含3个元素`),n;for(let i=0;i<3;i++)(typeof t[i]!="number"||isNaN(t[i]))&&n.push(`${e}[${i}] 必须是有效数字`);return n}function f2(t){const e=[];return!t||typeof t!="object"?(e.push("cameraRig.spec 必须是对象"),e):(!t.sensor||typeof t.sensor!="object"?e.push("cameraRig.spec.sensor 必须是对象"):((typeof t.sensor.w!="number"||t.sensor.w<=0)&&e.push("cameraRig.spec.sensor.w 必须是正数"),(typeof t.sensor.h!="number"||t.sensor.h<=0)&&e.push("cameraRig.spec.sensor.h 必须是正数")),(typeof t.focal!="number"||t.focal<=0)&&e.push("cameraRig.spec.focal 必须是正数"),(typeof t.aperture!="number"||t.aperture<=0)&&e.push("cameraRig.spec.aperture 必须是正数"),(typeof t.iso!="number"||t.iso<=0)&&e.push("cameraRig.spec.iso 必须是正数"),(typeof t.shutter!="string"||t.shutter.trim()==="")&&e.push("cameraRig.spec.shutter 必须是非空字符串"),e)}function h2(t){const e=[];return!t||typeof t!="object"?{valid:!1,errors:["数据必须是对象"]}:(!t.subject||typeof t.subject!="object"?e.push("subject 必须是对象"):((typeof t.subject.height!="number"||t.subject.height<=0)&&e.push("subject.height 必须是正数"),(typeof t.subject.width!="number"||t.subject.width<=0)&&e.push("subject.width 必须是正数"),e.push(...Rl(t.subject.position,"subject.position"))),!t.cameraRig||typeof t.cameraRig!="object"?e.push("cameraRig 必须是对象"):(e.push(...Rl(t.cameraRig.position,"cameraRig.position")),e.push(...Rl(t.cameraRig.lookAt,"cameraRig.lookAt")),e.push(...f2(t.cameraRig.spec))),!t.light||typeof t.light!="object"?e.push("light 必须是对象"):e.push(...Rl(t.light.position,"light.position")),{valid:e.length===0,errors:e})}function c0(t){const e=h2(t);return e.valid?{subject:{height:Number(t.subject.height),width:Number(t.subject.width),position:[Number(t.subject.position[0]),Number(t.subject.position[1]),Number(t.subject.position[2])],visual:t.subject.visual||"figure",...t.subject.figureStyle&&{figureStyle:{headRatio:t.subject.figureStyle.headRatio||.12,upperRatio:t.subject.figureStyle.upperRatio||.38,lowerRatio:t.subject.figureStyle.lowerRatio||.5,...t.subject.figureStyle.colors&&{colors:{head:t.subject.figureStyle.colors.head||15910594,upper:t.subject.figureStyle.colors.upper||6990335,lower:t.subject.figureStyle.colors.lower||8962256}}}}},cameraRig:{position:[Number(t.cameraRig.position[0]),Number(t.cameraRig.position[1]),Number(t.cameraRig.position[2])],lookAt:[Number(t.cameraRig.lookAt[0]),Number(t.cameraRig.lookAt[1]),Number(t.cameraRig.lookAt[2])],spec:{sensor:{w:Number(t.cameraRig.spec.sensor.w),h:Number(t.cameraRig.spec.sensor.h)},focal:Number(t.cameraRig.spec.focal),aperture:Number(t.cameraRig.spec.aperture),iso:Number(t.cameraRig.spec.iso),shutter:String(t.cameraRig.spec.shutter)},aim:t.cameraRig.aim?{mode:t.cameraRig.aim.mode||"subjectEye",...t.cameraRig.aim.customPoint&&{customPoint:[Number(t.cameraRig.aim.customPoint[0]),Number(t.cameraRig.aim.customPoint[1]),Number(t.cameraRig.aim.customPoint[2])]},eyeRatio:t.cameraRig.aim.eyeRatio||.93}:{mode:"custom",customPoint:[Number(t.cameraRig.lookAt[0]),Number(t.cameraRig.lookAt[1]),Number(t.cameraRig.lookAt[2])],eyeRatio:.93}},light:{position:[Number(t.light.position[0]),Number(t.light.position[1]),Number(t.light.position[2])]}}:(console.error("Recipe validation failed:",e.errors),null)}function d2(){console.log("📸 Photo Recipe Tool v2.0"),console.log("✅ 模板库、复刻码、EXIF导入、三步向导、i18n 已加载"),console.log("🔧 Schema validation enabled")}const p2={sensor:{w:22.3,h:14.9},focal:50,aperture:1.8,iso:400,shutter:"1/250"},m2={subject:{height:170,width:45,position:[0,0,0]},cameraRig:{position:[1.8,1.55,-2.4],lookAt:[0,1.6,0],spec:p2},light:{position:[-1.2,1.9,-.6]}};function g2(){var re,he,ae;const[t,e]=$e.useState(m2),[n,i]=$e.useState("camera"),[r,s]=$e.useState(!1),[o,a]=$e.useState(""),[l,c]=$e.useState(UC()),[f,d]=$e.useState("half"),[h,m]=$e.useState(20),[_,y]=$e.useState(-4),[v,u]=$e.useState(!0),[g,p]=$e.useState(!1),[x,P]=$e.useState("holdShift"),[M,T]=$e.useState(!1);$e.useEffect(()=>{const ee=zC();if(ee){const le=c0(ee);le&&(e(le),N(Ye("shareCodeLoaded")||"已从复刻码加载"))}d2()},[]);const[C,A]=$e.useState(()=>{try{const ee=localStorage.getItem("myTemplates.v1");return ee?JSON.parse(ee):[]}catch{return[]}}),E=()=>{const ee=prompt(Ye("templateName"));if(!ee)return;const le={...t,title:ee,tags:["自定义"]},Se=[...C,le];A(Se),localStorage.setItem("myTemplates.v1",JSON.stringify(Se)),N(Ye("templateSaved"))},I=$e.useMemo(()=>Wl(t.cameraRig.spec).toFixed(1),[t]),O=$e.useMemo(()=>RC(t.cameraRig.spec).toFixed(1),[t]),B=1.2,q=3,X=$e.useMemo(()=>bC(t.cameraRig.spec,B,q,1.6).toFixed(1),[t]),Y=$e.useMemo(()=>PC(80,1.2).toFixed(2),[]),J=$e.useMemo(()=>LC(t),[t]),N=ee=>{a(ee),setTimeout(()=>a(""),3e3)},K=async()=>{const ee=kC(t);if(ee){const le=window.location.origin+window.location.pathname+ee;await BC(le)&&(N(Ye("shareCodeCopied")),window.location.hash=ee)}},G=()=>{const ee=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),le=URL.createObjectURL(ee),Se=document.createElement("a");Se.href=le,Se.download="recipe.json",Se.click(),URL.revokeObjectURL(le)},se=ee=>{const le=new FileReader;le.onload=()=>{try{const Se=JSON.parse(String(le.result)),D=c0(Se);D?e(D):N(Ye("jsonParseError"))}catch{N(Ye("jsonParseError"))}},le.readAsText(ee,"utf-8")},xe=async ee=>{try{const le=await u2(ee,t);e(le),N(Ye("exifImported"))}catch{N(Ye("exifParseError"))}},He=ee=>{NC(ee),c(ee),window.location.reload()},Z=()=>{try{const{sensor:ee,focal:le}=t.cameraRig.spec,Se=ty(ee.h,le),D=f==="full"?.9:f==="half"?.6:.4,Fe=ny(t.subject.height/100,Se,D),Re=Number((t.subject.height*.93/100).toFixed(3));console.log("Applying camera spec:",{sensor:ee,focal:le,v:Se,fill:D,dist:Fe,eyeY:Re});const{position:Ze,lookAt:we}=iy(t.subject.position,Re,Fe,h,_);console.log("New camera position:",Ze,"lookAt:",we),e(Ge=>({...Ge,cameraRig:{...Ge.cameraRig,position:Ze,lookAt:we}})),N("已应用参数调整机位")}catch(ee){console.error("Error applying camera spec:",ee),N("应用参数时出错")}};return k.jsxs("div",{className:"app",children:[k.jsxs("aside",{className:"sidebar",children:[k.jsxs("div",{className:"sidebar-header",children:[k.jsx("h3",{children:"Photo Recipe v2.0"}),k.jsx("div",{className:"language-selector",children:k.jsxs("select",{value:l,onChange:ee=>He(ee.target.value),children:[k.jsx("option",{value:"zh",children:"中文"}),k.jsx("option",{value:"ja",children:"日本語"}),k.jsx("option",{value:"en",children:"English"})]})})]}),o&&k.jsx("div",{className:"message",children:o}),k.jsxs("div",{className:"section",children:[k.jsxs("div",{className:"row",children:[k.jsx("label",{children:Ye("transformTarget")}),k.jsxs("select",{value:n,onChange:ee=>i(ee.target.value),children:[k.jsx("option",{value:"camera",children:Ye("camera")}),k.jsx("option",{value:"subject",children:Ye("subject")}),k.jsx("option",{value:"light",children:Ye("light")}),k.jsx("option",{value:"aim",children:"对准点"})]})]}),k.jsx("div",{className:"row",children:k.jsxs("label",{className:"hstack",children:[k.jsx("input",{type:"checkbox",checked:g,onChange:ee=>p(ee.target.checked)}),"控制模式（拖动对象）"]})}),k.jsx("div",{className:"row",children:k.jsxs("label",{className:"hstack",children:[k.jsx("input",{type:"checkbox",checked:v,onChange:ee=>u(ee.target.checked)}),"显示控制箭头（拖拽手柄/光源箭头）"]})}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"设对准点"}),k.jsxs("select",{value:x,onChange:ee=>P(ee.target.value),children:[k.jsx("option",{value:"off",children:"关闭"}),k.jsx("option",{value:"holdShift",children:"按住 Shift 点击"}),k.jsx("option",{value:"always",children:"总是可点击"})]})]}),k.jsx("div",{className:"row",children:k.jsxs("label",{className:"hstack",children:[k.jsx("input",{type:"checkbox",checked:M,onChange:ee=>T(ee.target.checked)}),'点击后自动切到"对准点"目标']})})]}),k.jsxs("div",{style:{display:v?"block":"none"},children:[k.jsxs("div",{className:"section",children:[k.jsx("h4",{children:Ye("templates")}),k.jsx("div",{className:"row",children:k.jsxs("select",{onChange:ee=>{const le=Number(ee.target.value);if(le>=0)if(le<C.length)e(Gg(C[le]));else{const Se=le-C.length;e(Gg(Ac[Se]))}},defaultValue:"",children:[k.jsx("option",{value:"",disabled:!0,children:Ye("selectTemplate")}),C.length>0&&k.jsx("optgroup",{label:Ye("myTemplates"),children:C.map((ee,le)=>k.jsx("option",{value:le,children:ee.title},`my-${le}`))}),k.jsx("optgroup",{label:Ye("builtinTemplates"),children:Ac.map((ee,le)=>k.jsx("option",{value:C.length+le,children:ee.title},`builtin-${le}`))})]})}),k.jsx("div",{className:"row",children:k.jsx("button",{className:"btn btn-small",onClick:E,children:Ye("saveAsTemplate")})})]}),k.jsxs("div",{className:"section",children:[k.jsxs("div",{className:"row hstack",children:[k.jsx("button",{className:"btn",onClick:()=>s(!0),children:Ye("wizard")}),k.jsx("button",{className:"btn",onClick:K,children:Ye("copyShare")})]}),k.jsxs("div",{className:"row hstack",children:[k.jsx("label",{className:"btn",htmlFor:"exif-import",children:Ye("importExif")}),k.jsx("input",{id:"exif-import",type:"file",accept:"image/*",style:{display:"none"},onChange:ee=>{var Se;const le=(Se=ee.target.files)==null?void 0:Se[0];le&&xe(le)}})]})]}),k.jsxs("div",{className:"section",children:[k.jsx("h4",{children:Ye("cameraSettings")}),k.jsxs("div",{className:"row",children:[k.jsxs("label",{children:[Ye("subjectHeight")," / ",Ye("subjectWidth")," (",Ye("cm"),")"]}),k.jsxs("div",{className:"hstack",children:[k.jsx("input",{type:"number",value:t.subject.height,onChange:ee=>e({...t,subject:{...t.subject,height:Number(ee.target.value)}})}),k.jsx("input",{type:"number",value:t.subject.width,onChange:ee=>e({...t,subject:{...t.subject,width:Number(ee.target.value)}})})]})]}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"人像显示模式"}),k.jsxs("select",{value:t.subject.visual??"figure",onChange:ee=>e({...t,subject:{...t.subject,visual:ee.target.value}}),children:[k.jsx("option",{value:"figure",children:"三段人像"}),k.jsx("option",{value:"rect",children:"矩形模式"})]})]}),k.jsxs("div",{className:"row",children:[k.jsxs("label",{children:[Ye("focal")," (",Ye("mm"),")"]}),k.jsx("input",{type:"number",value:t.cameraRig.spec.focal,onChange:ee=>e({...t,cameraRig:{...t.cameraRig,spec:{...t.cameraRig.spec,focal:Number(ee.target.value)}}})})]}),k.jsxs("div",{className:"row",children:[k.jsxs("label",{children:[Ye("aperture")," (f/)"]}),k.jsx("input",{type:"number",step:"0.1",value:t.cameraRig.spec.aperture,onChange:ee=>e({...t,cameraRig:{...t.cameraRig,spec:{...t.cameraRig.spec,aperture:Number(ee.target.value)}}})})]}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:Ye("iso")}),k.jsx("input",{type:"number",value:t.cameraRig.spec.iso,onChange:ee=>e({...t,cameraRig:{...t.cameraRig,spec:{...t.cameraRig.spec,iso:Number(ee.target.value)}}})})]}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:Ye("shutter")}),k.jsx("input",{type:"text",value:t.cameraRig.spec.shutter,onChange:ee=>e({...t,cameraRig:{...t.cameraRig,spec:{...t.cameraRig.spec,shutter:ee.target.value}}})})]}),k.jsx("div",{className:"row",children:k.jsx("button",{className:"btn btn-primary",onClick:Z,children:"确定参数（自动调整机位）"})}),k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"对准模式"}),k.jsxs("select",{value:((re=t.cameraRig.aim)==null?void 0:re.mode)||"subjectCenter",onChange:ee=>{const le=ee.target.value;e(Se=>{var Fe,Re;const D={...Se};if(le==="custom"){if((Fe=D.cameraRig.aim)!=null&&Fe.customPoint)D.cameraRig.aim={...D.cameraRig.aim,mode:"custom"};else{const Ze=D.cameraRig.lookAt;D.cameraRig.aim={mode:"custom",customPoint:Ze,eyeRatio:.93}}M&&i("aim")}else D.cameraRig.aim={...D.cameraRig.aim||{},mode:le,eyeRatio:((Re=D.cameraRig.aim)==null?void 0:Re.eyeRatio)??.93};return D})},children:[k.jsx("option",{value:"subjectCenter",children:"主体中心"}),k.jsx("option",{value:"subjectEye",children:"眼平高度"}),k.jsx("option",{value:"custom",children:"自定义对准点"})]})]}),((he=t.cameraRig.aim)==null?void 0:he.mode)==="subjectEye"&&k.jsxs("div",{className:"row",children:[k.jsx("label",{children:"眼平比例"}),k.jsx("input",{type:"number",step:"0.01",min:"0.8",max:"1.0",value:((ae=t.cameraRig.aim)==null?void 0:ae.eyeRatio)??.93,onChange:ee=>e(le=>({...le,cameraRig:{...le.cameraRig,aim:{...le.cameraRig.aim,mode:"subjectEye",eyeRatio:Number(ee.target.value)}}}))})]})]}),k.jsxs("div",{className:"section",children:[k.jsxs("div",{className:"row",children:[k.jsx("label",{children:Ye("fov")}),k.jsxs("div",{className:"muted",children:["H ",O,Ye("degree")," · V ",I,Ye("degree")]})]}),k.jsxs("div",{className:"row",children:[k.jsxs("label",{children:[Ye("bokeh")," & ",Ye("softness")]}),k.jsxs("div",{className:"muted",children:["Bokeh ",X," · Soft ",Y]})]}),k.jsx("div",{className:"row",children:k.jsx("label",{children:J})})]}),k.jsx("div",{className:"section",children:k.jsxs("div",{className:"row hstack",children:[k.jsx("button",{className:"btn",onClick:G,children:Ye("exportJson")}),k.jsx("label",{className:"btn",htmlFor:"load",children:Ye("importJson")}),k.jsx("input",{id:"load",type:"file",accept:"application/json",style:{display:"none"},onChange:ee=>{var Se;const le=(Se=ee.target.files)==null?void 0:Se[0];le&&se(le)}})]})}),k.jsx("hr",{}),k.jsx("p",{className:"muted",children:Ye("hint")})]})]}),k.jsx(IC,{recipe:t,onRecipeChange:ee=>{e(ee)},target:n,onTargetChange:i,showHelpers:v,controlMode:g,aimClickMode:x,autoSwitchAimOnClick:M}),r&&k.jsx(OC,{recipe:t,onRecipeChange:e,onClose:()=>s(!1)})]})}M_(document.getElementById("root")).render(k.jsx($e.StrictMode,{children:k.jsx(g2,{})}));
