(function(f,E){typeof exports=="object"&&typeof module<"u"?E(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],E):(f=typeof globalThis<"u"?globalThis:f||self,E(f.Pixicons={},f.React))})(this,function(f,E){"use strict";var N={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rr;function Pr(){if(rr)return O;rr=1;var s=E,M=Symbol.for("react.element"),U=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,W=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y={key:!0,ref:!0,__self:!0,__source:!0};function D(k,d,_){var x,w={},b=null,B=null;_!==void 0&&(b=""+_),d.key!==void 0&&(b=""+d.key),d.ref!==void 0&&(B=d.ref);for(x in d)y.call(d,x)&&!Y.hasOwnProperty(x)&&(w[x]=d[x]);if(k&&k.defaultProps)for(x in d=k.defaultProps,d)w[x]===void 0&&(w[x]=d[x]);return{$$typeof:M,type:k,key:b,ref:B,props:w,_owner:W.current}}return O.Fragment=U,O.jsx=D,O.jsxs=D,O}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er;function Tr(){return er||(er=1,process.env.NODE_ENV!=="production"&&function(){var s=E,M=Symbol.for("react.element"),U=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),k=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),nr=Symbol.iterator,Lr="@@iterator";function Vr(r){if(r===null||typeof r!="object")return null;var t=nr&&r[nr]||r[Lr];return typeof t=="function"?t:null}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function p(r){{for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];Xr("error",r,n)}}function Xr(r,t,n){{var o=P.ReactDebugCurrentFrame,i=o.getStackAddendum();i!==""&&(t+="%s",n=n.concat([i]));var u=n.map(function(a){return String(a)});u.unshift("Warning: "+t),Function.prototype.apply.call(console[r],console,u)}}var Ur=!1,Jr=!1,Gr=!1,qr=!1,Kr=!1,or;or=Symbol.for("react.module.reference");function Hr(r){return!!(typeof r=="string"||typeof r=="function"||r===y||r===Y||Kr||r===W||r===_||r===x||qr||r===B||Ur||Jr||Gr||typeof r=="object"&&r!==null&&(r.$$typeof===b||r.$$typeof===w||r.$$typeof===D||r.$$typeof===k||r.$$typeof===d||r.$$typeof===or||r.getModuleId!==void 0))}function Zr(r,t,n){var o=r.displayName;if(o)return o;var i=t.displayName||t.name||"";return i!==""?n+"("+i+")":n}function hr(r){return r.displayName||"Context"}function C(r){if(r==null)return null;if(typeof r.tag=="number"&&p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case y:return"Fragment";case U:return"Portal";case Y:return"Profiler";case W:return"StrictMode";case _:return"Suspense";case x:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case k:var t=r;return hr(t)+".Consumer";case D:var n=r;return hr(n._context)+".Provider";case d:return Zr(r,r.render,"ForwardRef");case w:var o=r.displayName||null;return o!==null?o:C(r.type)||"Memo";case b:{var i=r,u=i._payload,a=i._init;try{return C(a(u))}catch{return null}}}return null}var m=Object.assign,A=0,ar,sr,ir,ur,Mr,cr,lr;function fr(){}fr.__reactDisabledLog=!0;function Qr(){{if(A===0){ar=console.log,sr=console.info,ir=console.warn,ur=console.error,Mr=console.group,cr=console.groupCollapsed,lr=console.groupEnd;var r={configurable:!0,enumerable:!0,value:fr,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}A++}}function zr(){{if(A--,A===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:m({},r,{value:ar}),info:m({},r,{value:sr}),warn:m({},r,{value:ir}),error:m({},r,{value:ur}),group:m({},r,{value:Mr}),groupCollapsed:m({},r,{value:cr}),groupEnd:m({},r,{value:lr})})}A<0&&p("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=P.ReactCurrentDispatcher,G;function $(r,t,n){{if(G===void 0)try{throw Error()}catch(i){var o=i.stack.trim().match(/\n( *(at )?)/);G=o&&o[1]||""}return`
`+G+r}}var q=!1,L;{var re=typeof WeakMap=="function"?WeakMap:Map;L=new re}function dr(r,t){if(!r||q)return"";{var n=L.get(r);if(n!==void 0)return n}var o;q=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,Qr();try{if(t){var a=function(){throw Error()};if(Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(g){o=g}Reflect.construct(r,[],a)}else{try{a.call()}catch(g){o=g}r.call(a.prototype)}}else{try{throw Error()}catch(g){o=g}r()}}catch(g){if(g&&o&&typeof g.stack=="string"){for(var h=g.stack.split(`
`),v=o.stack.split(`
`),c=h.length-1,l=v.length-1;c>=1&&l>=0&&h[c]!==v[l];)l--;for(;c>=1&&l>=0;c--,l--)if(h[c]!==v[l]){if(c!==1||l!==1)do if(c--,l--,l<0||h[c]!==v[l]){var j=`
`+h[c].replace(" at new "," at ");return r.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",r.displayName)),typeof r=="function"&&L.set(r,j),j}while(c>=1&&l>=0);break}}}finally{q=!1,J.current=u,zr(),Error.prepareStackTrace=i}var S=r?r.displayName||r.name:"",R=S?$(S):"";return typeof r=="function"&&L.set(r,R),R}function ee(r,t,n){return dr(r,!1)}function te(r){var t=r.prototype;return!!(t&&t.isReactComponent)}function V(r,t,n){if(r==null)return"";if(typeof r=="function")return dr(r,te(r));if(typeof r=="string")return $(r);switch(r){case _:return $("Suspense");case x:return $("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case d:return ee(r.render);case w:return V(r.type,t,n);case b:{var o=r,i=o._payload,u=o._init;try{return V(u(i),t,n)}catch{}}}return""}var F=Object.prototype.hasOwnProperty,pr={},vr=P.ReactDebugCurrentFrame;function X(r){if(r){var t=r._owner,n=V(r.type,r._source,t?t.type:null);vr.setExtraStackFrame(n)}else vr.setExtraStackFrame(null)}function ne(r,t,n,o,i){{var u=Function.call.bind(F);for(var a in r)if(u(r,a)){var h=void 0;try{if(typeof r[a]!="function"){var v=Error((o||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[a]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}h=r[a](t,a,o,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(c){h=c}h&&!(h instanceof Error)&&(X(i),p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",n,a,typeof h),X(null)),h instanceof Error&&!(h.message in pr)&&(pr[h.message]=!0,X(i),p("Failed %s type: %s",n,h.message),X(null))}}}var oe=Array.isArray;function K(r){return oe(r)}function he(r){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&r[Symbol.toStringTag]||r.constructor.name||"Object";return n}}function ae(r){try{return gr(r),!1}catch{return!0}}function gr(r){return""+r}function xr(r){if(ae(r))return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",he(r)),gr(r)}var jr=P.ReactCurrentOwner,se={key:!0,ref:!0,__self:!0,__source:!0},wr,Cr;function ie(r){if(F.call(r,"ref")){var t=Object.getOwnPropertyDescriptor(r,"ref").get;if(t&&t.isReactWarning)return!1}return r.ref!==void 0}function ue(r){if(F.call(r,"key")){var t=Object.getOwnPropertyDescriptor(r,"key").get;if(t&&t.isReactWarning)return!1}return r.key!==void 0}function Me(r,t){typeof r.ref=="string"&&jr.current}function ce(r,t){{var n=function(){wr||(wr=!0,p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(r,"key",{get:n,configurable:!0})}}function le(r,t){{var n=function(){Cr||(Cr=!0,p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(r,"ref",{get:n,configurable:!0})}}var fe=function(r,t,n,o,i,u,a){var h={$$typeof:M,type:r,key:t,ref:n,props:a,_owner:u};return h._store={},Object.defineProperty(h._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(h,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(h,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(h.props),Object.freeze(h)),h};function de(r,t,n,o,i){{var u,a={},h=null,v=null;n!==void 0&&(xr(n),h=""+n),ue(t)&&(xr(t.key),h=""+t.key),ie(t)&&(v=t.ref,Me(t,i));for(u in t)F.call(t,u)&&!se.hasOwnProperty(u)&&(a[u]=t[u]);if(r&&r.defaultProps){var c=r.defaultProps;for(u in c)a[u]===void 0&&(a[u]=c[u])}if(h||v){var l=typeof r=="function"?r.displayName||r.name||"Unknown":r;h&&ce(a,l),v&&le(a,l)}return fe(r,h,v,i,o,jr.current,a)}}var H=P.ReactCurrentOwner,kr=P.ReactDebugCurrentFrame;function T(r){if(r){var t=r._owner,n=V(r.type,r._source,t?t.type:null);kr.setExtraStackFrame(n)}else kr.setExtraStackFrame(null)}var Z;Z=!1;function Q(r){return typeof r=="object"&&r!==null&&r.$$typeof===M}function br(){{if(H.current){var r=C(H.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function pe(r){return""}var mr={};function ve(r){{var t=br();if(!t){var n=typeof r=="string"?r:r.displayName||r.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function Rr(r,t){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var n=ve(t);if(mr[n])return;mr[n]=!0;var o="";r&&r._owner&&r._owner!==H.current&&(o=" It was passed a child from "+C(r._owner.type)+"."),T(r),p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,o),T(null)}}function Er(r,t){{if(typeof r!="object")return;if(K(r))for(var n=0;n<r.length;n++){var o=r[n];Q(o)&&Rr(o,t)}else if(Q(r))r._store&&(r._store.validated=!0);else if(r){var i=Vr(r);if(typeof i=="function"&&i!==r.entries)for(var u=i.call(r),a;!(a=u.next()).done;)Q(a.value)&&Rr(a.value,t)}}}function ge(r){{var t=r.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===d||t.$$typeof===w))n=t.propTypes;else return;if(n){var o=C(t);ne(n,r.props,"prop",o,r)}else if(t.PropTypes!==void 0&&!Z){Z=!0;var i=C(t);p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function xe(r){{for(var t=Object.keys(r.props),n=0;n<t.length;n++){var o=t[n];if(o!=="children"&&o!=="key"){T(r),p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),T(null);break}}r.ref!==null&&(T(r),p("Invalid attribute `ref` supplied to `React.Fragment`."),T(null))}}var yr={};function _r(r,t,n,o,i,u){{var a=Hr(r);if(!a){var h="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(h+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=pe();v?h+=v:h+=br();var c;r===null?c="null":K(r)?c="array":r!==void 0&&r.$$typeof===M?(c="<"+(C(r.type)||"Unknown")+" />",h=" Did you accidentally export a JSX literal instead of a component?"):c=typeof r,p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,h)}var l=de(r,t,n,i,u);if(l==null)return l;if(a){var j=t.children;if(j!==void 0)if(o)if(K(j)){for(var S=0;S<j.length;S++)Er(j[S],r);Object.freeze&&Object.freeze(j)}else p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Er(j,r)}if(F.call(t,"key")){var R=C(r),g=Object.keys(t).filter(function(me){return me!=="key"}),z=g.length>0?"{key: someKey, "+g.join(": ..., ")+": ...}":"{key: someKey}";if(!yr[R+z]){var be=g.length>0?"{"+g.join(": ..., ")+": ...}":"{}";p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,z,R,be,R),yr[R+z]=!0}}return r===y?xe(l):ge(l),l}}function je(r,t,n){return _r(r,t,n,!0)}function we(r,t,n){return _r(r,t,n,!1)}var Ce=we,ke=je;I.Fragment=y,I.jsx=Ce,I.jsxs=ke}()),I}var tr;function Sr(){return tr||(tr=1,process.env.NODE_ENV==="production"?N.exports=Pr():N.exports=Tr()),N.exports}var e=Sr();function Or({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M7 2h1M7 3h1M9 4h1M11 5h1M3 8h1M7 12h2M12 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 2h1M6 3h1M8 3h1M5 4h2M4 5h2M10 5h1M4 6h1M3 7h1M12 7h2M3 10h1M8 10h1M12 10h1M3 11h1M8 11h1M12 11h1M3 13h3M9 13h1M11 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M9 3h1M3 6h1M12 9h1M7 10h1M7 11h1M6 13h2"}),e.jsx("path",{stroke:"currentColor",d:"M10 4h1M3 12h1M8 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 6h2M10 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M2 7h1M12 8h1M3 9h1M12 13h1"})]})}function Ir({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M7 2h2M7 3h1M7 4h2M8 5h1M11 5h1M10 6h2M5 7h1M7 7h1M10 7h1M6 8h2M7 9h2M3 10h1M2 11h1M2 12h1M9 12h1M2 13h8M11 13h1M13 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 3h1M7 5h1M7 6h1M9 7h1M9 8h1M7 12h2M11 12h1M13 12h1M10 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M4 5h1M8 8h1M3 12h1M5 12h1M12 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M4 6h2M8 6h1M13 10h1M3 11h1M13 11h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 7h1M12 11h1M12 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 7h1M12 10h1M4 12h1M6 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M2 10h1"}),e.jsx("path",{stroke:"currentColor",d:"M10 12h1"})]})}function Dr({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M3 3h1M6 7h1M8 8h1"}),e.jsx("path",{stroke:"currentColor",d:"M4 3h3M9 3h1M12 3h1M2 4h4M7 4h2M3 7h2M8 7h3M12 7h1M3 8h2M7 8h1M10 8h4M6 11h2M9 11h1M12 11h1M2 12h1M12 12h2"}),e.jsx("path",{stroke:"currentColor",d:"M7 3h1M11 4h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 3h1M10 3h1M6 4h1M7 7h1M3 11h2M8 11h1M11 11h1M4 12h5M10 12h2"}),e.jsx("path",{stroke:"currentColor",d:"M11 3h1M9 4h2M12 4h1M2 8h1M6 8h1M3 12h1M9 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M13 4h1M10 11h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 7h1M9 8h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 7h1M5 8h1M5 11h1"})]})}function Ar({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M4 2h1M4 10h1M13 11h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 2h1M8 2h2M9 3h1M7 7h2M3 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 2h1M10 4h1M10 5h1M13 7h1M7 8h2M13 8h1M5 10h1"}),e.jsx("path",{stroke:"currentColor",d:"M7 2h1M11 5h2M8 6h1M12 7h1M5 9h1M13 10h1M3 11h1M4 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M10 2h3M4 3h5M10 3h4M12 4h2M9 5h1M9 6h1M12 6h2M9 7h1M6 8h1M12 8h1M6 9h2M12 9h2M6 10h1M12 10h1M4 11h2M12 11h1M2 13h2"}),e.jsx("path",{stroke:"currentColor",d:"M13 2h1M2 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 4h1M13 5h1M10 6h1"})]})}function Fr({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M3 2h1M12 2h1M2 3h1M4 3h1M7 3h1M2 5h1M2 6h1M13 7h1M4 8h3M9 8h2M12 8h1M6 10h1M3 11h1M3 12h4M7 13h2"}),e.jsx("path",{stroke:"currentColor",d:"M4 2h1M9 3h1M3 8h1M2 11h1M9 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 2h1M13 3h1M2 4h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 3h1M10 3h1M13 4h1M11 8h1M9 9h1M9 10h1M6 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 3h1M13 6h1M9 11h1M9 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 3h1M13 5h1M2 7h1M6 11h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 3h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 9h1"})]})}function Nr({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M5 2h1M9 4h1M12 4h1M2 6h1M9 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 2h2M9 2h1M6 3h1M9 3h1M11 3h1M6 4h1M5 5h1M5 6h1M10 6h1M10 7h1M12 7h1M4 8h1M10 8h4M5 9h1M10 9h1M13 9h1M2 10h1M5 10h1M10 10h1M3 11h1M4 12h1M6 12h1M11 12h1M6 13h2"}),e.jsx("path",{stroke:"currentColor",d:"M8 2h1M13 7h1M7 8h1"}),e.jsx("path",{stroke:"currentColor",d:"M10 2h1M2 5h1M10 5h1M2 7h2M2 8h1M6 8h1M13 10h1M9 11h1M8 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M4 3h1M13 6h1M5 7h1M9 8h1M2 9h1"}),e.jsx("path",{stroke:"currentColor",d:"M3 4h1"}),e.jsx("path",{stroke:"currentColor",d:"M13 5h1M3 8h1M5 8h1M12 11h1M9 12h1M5 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 8h1M6 11h1M10 13h1"})]})}function Wr({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M2 3h1M6 3h1M8 3h1M10 3h1M6 6h1M13 8h1"}),e.jsx("path",{stroke:"currentColor",d:"M3 3h2M11 3h1M11 4h1M2 5h1M4 5h2M10 5h1M9 6h2M2 7h1M6 7h2M9 7h1M7 8h1M13 9h1M2 12h1M5 12h1M7 12h1M9 12h1M12 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 3h1M13 3h1M2 4h1M4 4h1M12 4h2M13 7h1M13 10h1M4 12h1M13 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M7 3h1M9 3h1M12 3h1M13 5h1M13 6h1M2 8h1M2 9h1M2 10h1M2 11h1M13 11h1M6 12h1M8 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M3 4h1M8 7h1M8 8h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 5h1M5 6h1M11 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M2 6h1M3 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M10 12h1"})]})}function Yr({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M4 2h1M8 2h2M11 2h1M4 3h1M4 4h1M6 5h1M5 8h1M8 8h3M10 10h1M13 11h1M2 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 2h1M4 5h1M7 10h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 2h1M5 3h1M13 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M7 2h1M10 3h2M9 5h1M11 5h1M11 7h1M6 8h1M5 10h1M12 10h1"}),e.jsx("path",{stroke:"currentColor",d:"M10 2h1M4 6h1M11 8h1M3 10h1M8 10h2M11 10h1M2 11h1M13 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M11 4h1M11 6h1M4 7h1M7 7h1M4 8h1M2 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 7h1"}),e.jsx("path",{stroke:"currentColor",d:"M7 8h1M4 10h1M6 10h1"})]})}function Br({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M2 3h1M6 3h1M2 4h1M6 4h1M8 4h1M12 4h1M13 5h1M13 6h1M2 7h1M13 7h1M2 9h1M8 9h1M11 9h1M2 10h2M6 10h1M8 10h1M10 10h1M12 10h1M11 11h2M8 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M3 3h1M12 9h1M5 10h1"}),e.jsx("path",{stroke:"currentColor",d:"M4 3h1M11 4h1M7 6h1M7 7h1M10 9h1M4 10h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 3h1M2 5h1M2 6h1M9 6h1M9 7h1"}),e.jsx("path",{stroke:"currentColor",d:"M7 4h1M9 4h2M8 6h1M8 8h1M8 11h1M10 11h1"}),e.jsx("path",{stroke:"currentColor",d:"M13 4h1"}),e.jsx("path",{stroke:"currentColor",d:"M2 8h1M9 8h1"}),e.jsx("path",{stroke:"currentColor",d:"M7 8h1M9 10h1"})]})}function $r({size:s=40,className:M=""}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -0.5 16 16",shapeRendering:"crispEdges",width:s,height:s,className:M,children:[e.jsx("metadata",{children:"Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj"}),e.jsx("path",{stroke:"currentColor",d:"M2 2h2M3 3h1M11 3h3M3 4h1M10 4h1M12 4h1M5 5h1M9 5h3M6 6h2M9 6h1M7 7h1M9 7h1M7 8h3M6 9h2M9 9h1M5 10h2M9 10h1M11 10h1M11 11h1M4 12h1M11 12h1M13 12h1M3 13h1M13 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M12 2h1"}),e.jsx("path",{stroke:"currentColor",d:"M13 2h1M4 3h1M6 5h1M5 6h1M8 6h1M6 8h1M10 9h1M10 10h1M4 11h1M12 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M2 3h1M11 4h1M3 11h1M10 11h1M2 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M4 4h1M4 5h1M10 6h1M5 11h1M3 12h1M12 12h1"}),e.jsx("path",{stroke:"currentColor",d:"M5 4h1"}),e.jsx("path",{stroke:"currentColor",d:"M6 7h1M5 9h1M8 9h1M12 11h1M2 13h1"}),e.jsx("path",{stroke:"currentColor",d:"M8 7h1M4 10h1"})]})}f.ArrowRigthTopIcon=Ar,f.BurguerIcon=Dr,f.DownloadIcon=Ir,f.GithubIcon=Fr,f.GlobalIcon=Nr,f.HomeIcon=Or,f.MailIcon=Wr,f.ProfileIcon=Yr,f.ProjectsIcon=Br,f.XIcon=$r,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
