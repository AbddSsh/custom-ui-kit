/*! For license information please see index.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["custom-ui-kit"]=t():e["custom-ui-kit"]=t()}(this,(()=>(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,u){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==u&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=u),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},738:e=>{e.exports=function(e){return e[1]}},751:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}function h(){}function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var g=_.prototype=new h;g.constructor=_,y(g,v.prototype),g.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,u={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];u.children=s}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:i,props:u,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,o,u,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===u?"."+P(c,0):u,x(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),k(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(c=0,u=""===u?".":u+":",x(e))for(var s=0;s<e.length;s++){var l=u+P(i=e[s],s);c+=k(i,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(i=e.next()).done;)c+=k(i=i.value,t,o,l=u+P(i,s++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var r=[],o=0;return k(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function M(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},$={transition:null},T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=j.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!w.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:u,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:M}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.2.0"},466:(e,t,n)=>{e.exports=n(751)},492:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(738),o=n.n(r),u=n(705),a=n.n(u)()(o());a.push([e.id,".btn {\n  color: #fff;\n  border-radius: 15px;\n  padding: 10px;\n  white-space: nowrap;\n  border: none;\n  text-align: center;\n  background: #1f93c5;\n}\n\n.btn_small {\n  font-size: 10px;\n  border-radius: 5px;\n  padding: 5px 10px;\n}\n\n.btn_large {\n  font-size: 20px;\n  padding: 20px;\n}\n\n.btn_outlined {\n  color: #1f93c5;\n  border: 1px solid #1f93c5;\n  background: #ffffff;\n}\n\n.btn_errored {\n  color: #a71e1e;\n  border: 1px solid rgb(139, 30, 30);\n  background: #ffffff;\n}\n\n.btn_successed {\n  color: rgb(29, 131, 82);\n  border: 1px solid rgb(26, 104, 66);\n  background: #ffffff;\n}\n\n.btn_disabled {\n  background: #dbdbdb;\n  color: #9c9c9c;\n}\n",""]);const i=a},629:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(738),o=n.n(r),u=n(705),a=n.n(u)()(o());a.push([e.id,".input_label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #303030;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.custom_input {\n  border: 1px solid #0094c2;\n  border-radius: 10px;\n  padding: 5px;\n  font-size: 14px;\n}\n.input_small {\n  border: 0.5px solid rgba(0, 148, 194, 0.7);\n  font-size: 10px;\n}\n.input_large {\n  border: 1.5px solid rgba(0, 148, 194, 1);\n  font-size: 18px;\n  padding: 10px;\n}\n.input_error {\n  border: 0.5px solid rgb(136, 18, 18);\n}\n.input_horizontal {\n  flex-direction: column;\n  justify-content: start;\n  align-items: start;\n}\n",""]);const i=a},377:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(738),o=n.n(r),u=n(705),a=n.n(u)()(o());a.push([e.id,".img_wrapper {\n  position: relative;\n  height: 30vw;\n  max-height: 500px;\n}\n\n.image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 25px;\n}\n",""]);const i=a},112:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(738),o=n.n(r),u=n(705),a=n.n(u)()(o());a.push([e.id,".btn-hover {\n  transition: transform 0.2s;\n}\n\n.btn-hover:hover {\n  transform: scale(1.03);\n}\n\n.btn-hover:active {\n  transform: scale(0.95);\n}\n",""]);const i=a},924:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),o=n.n(r),u=n(795),a=n.n(u),i=n(569),c=n.n(i),s=n(565),l=n.n(s),f=n(216),p=n.n(f),d=n(589),b=n.n(d),y=n(492),m={};m.styleTagTransform=b(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(y.Z,m);const v=y.Z&&y.Z.locals?y.Z.locals:void 0},114:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),o=n.n(r),u=n(795),a=n.n(u),i=n(569),c=n.n(i),s=n(565),l=n.n(s),f=n(216),p=n.n(f),d=n(589),b=n.n(d),y=n(629),m={};m.styleTagTransform=b(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(y.Z,m);const v=y.Z&&y.Z.locals?y.Z.locals:void 0},879:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),o=n.n(r),u=n(795),a=n.n(u),i=n(569),c=n.n(i),s=n(565),l=n.n(s),f=n(216),p=n.n(f),d=n(589),b=n.n(d),y=n(377),m={};m.styleTagTransform=b(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(y.Z,m);const v=y.Z&&y.Z.locals?y.Z.locals:void 0},414:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(379),o=n.n(r),u=n(795),a=n.n(u),i=n(569),c=n.n(i),s=n(565),l=n.n(s),f=n(216),p=n.n(f),d=n(589),b=n.n(d),y=n(112),m={};m.styleTagTransform=b(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(y.Z,m);const v=y.Z&&y.Z.locals?y.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var u={},a=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],l=u[s]||0,f="".concat(s," ").concat(l);u[s]=l+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var b=o(d,r);r.byIndex=i,t.splice(i,0,{identifier:f,updater:b,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var u=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<u.length;a++){var i=n(u[a]);t[i].references--}for(var c=r(e,o),s=0;s<u.length;s++){var l=n(u[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}u=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var u=n.sourceMap;u&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},564:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomButton=void 0;const o=r(n(466));n(924);const u=n(643);t.CustomButton=({children:e,color:t,backgroundColor:n,padding:r,fz:a,fontWeight:i,borderRadius:c,small:s,large:l,outlined:f,errored:p,successed:d})=>{const b=["btn"];return l?b.push("btn_large"):s?b.push("btn_small"):f?b.push("btn_outlined"):p?b.push("btn_errored"):d&&b.push("btn_successed"),o.default.createElement(u.BtnHover,null,o.default.createElement("button",{className:b.join(" "),style:{color:t,backgroundColor:n,padding:r,borderRadius:c,fontSize:`${a}px`,fontWeight:`${i}`}},e))}},937:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomInput=void 0;const o=r(n(466));n(114),t.CustomInput=({label:e,small:t,large:n,placeholder:r,error:u,horizontal:a})=>{const i=["custom_input"];return t?i.push("input_small"):n?i.push("input_large"):u&&i.push("input_error"),o.default.createElement("label",{className:a?"input_label input_horizontal":"input_label"},e,o.default.createElement("input",{className:i.join(" "),placeholder:r}))}},324:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImgWrapper=void 0;const o=r(n(466));n(879),t.ImgWrapper=({url:e,alt:t})=>o.default.createElement("div",{className:"img_wrapper"},o.default.createElement("img",{className:"image",src:e,alt:t}))},740:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(564),t),o(n(937),t),o(n(324),t)},201:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BtnHover=void 0;const o=r(n(466));n(414),t.BtnHover=({children:e})=>o.default.createElement("div",{className:"btn-hover"},e)},643:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(201),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={id:r,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r={};return(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.ImgWrapper=e.CustomInput=e.CustomButton=void 0;const t=n(740);Object.defineProperty(e,"CustomButton",{enumerable:!0,get:function(){return t.CustomButton}}),Object.defineProperty(e,"CustomInput",{enumerable:!0,get:function(){return t.CustomInput}}),Object.defineProperty(e,"ImgWrapper",{enumerable:!0,get:function(){return t.ImgWrapper}})})(),r})()));