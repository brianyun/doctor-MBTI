(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"+UcI":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return f}));var r=n("rePB");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={ans:[],url:{screenshotUrl:"",thumbUrl:""},isDirect:!0},c="ADD_ANSWER",s="ADD_URL",a="MAKE_DIRECT_FALSE",f="MAKE_DIRECT_TRUE";t.e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return i(i({},e),{},{ans:t.data});case s:return i(i({},e),{},{url:t.data});case a:return i(i({},e),{},{isDirect:!1});case f:return i(i({},e),{},{isDirect:!0});default:return i({},e)}}},"/MKj":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return g}));var r=n("q1tI"),o=n.n(r),i=(n("17x9"),o.a.createContext(null));var u=function(e){e()},c=function(){return u},s={notify:function(){}};var a=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=s,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=function(){var e=c(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=s)},e}();var f=function(e){var t=e.store,n=e.context,u=e.children,c=Object(r.useMemo)((function(){var e=new a(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),s=Object(r.useMemo)((function(){return t.getState()}),[t]);Object(r.useEffect)((function(){var e=c.subscription;return e.trySubscribe(),s!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,s]);var f=n||i;return o.a.createElement(f.Provider,{value:c},u)};n("zLVn"),n("2mql"),n("TOwV");var d="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;n("ANjH");function p(){return Object(r.useContext)(i)}function l(e){void 0===e&&(e=i);var t=e===i?p:function(){return Object(r.useContext)(e)};return function(){return t().store}}var b=l();function h(e){void 0===e&&(e=i);var t=e===i?b:l(e);return function(){return t().dispatch}}var y=h(),v=function(e,t){return e===t};function w(e){void 0===e&&(e=i);var t=e===i?p:function(){return Object(r.useContext)(e)};return function(e,n){void 0===n&&(n=v);var o=t(),i=function(e,t,n,o){var i,u=Object(r.useReducer)((function(e){return e+1}),0)[1],c=Object(r.useMemo)((function(){return new a(n,o)}),[n,o]),s=Object(r.useRef)(),f=Object(r.useRef)(),p=Object(r.useRef)(),l=Object(r.useRef)(),b=n.getState();try{i=e!==f.current||b!==p.current||s.current?e(b):l.current}catch(h){throw s.current&&(h.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),h}return d((function(){f.current=e,p.current=b,l.current=i,s.current=void 0})),d((function(){function e(){try{var e=f.current(n.getState());if(t(e,l.current))return;l.current=e}catch(h){s.current=h}u()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),i}(e,n,o.store,o.subscription);return Object(r.useDebugValue)(i),i}}var O,g=w(),m=n("i8i4");O=m.unstable_batchedUpdates,u=O},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?u:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=u;var a=Object.defineProperty,f=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(b){var o=l(n);o&&o!==b&&e(t,o,r)}var u=f(n);d&&(u=u.concat(d(n)));for(var c=s(t),h=s(n),y=0;y<u.length;++y){var v=u[y];if(!i[v]&&(!r||!r[v])&&(!h||!h[v])&&(!c||!c[v])){var w=p(n,v);try{a(t,v,w)}catch(O){}}}}return t}},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},ANjH:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var s=e,a=t,f=[],d=f,p=!1;function l(){d===f&&(d=f.slice())}function b(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return a}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return l(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,l();var n=d.indexOf(e);d.splice(n,1),f=null}}}function y(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,a=s(a,e)}finally{p=!1}for(var t=f=d,n=0;n<t.length;n++){(0,t[n])()}return e}return y({type:i.INIT}),(o={dispatch:y,subscribe:h,getState:b,replaceReducer:function(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,y({type:i.REPLACE})}})[r.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function s(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var u,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(a){u=a}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<c.length;i++){var a=c[i],f=n[a],d=e[a],p=f(d,t);if("undefined"===typeof p){var l=s(a,t);throw new Error(l)}o[a]=p,r=r||p!==d}return(r=r||c.length!==Object.keys(e).length)?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n("yLpj"),n("3UD+")(e))}}]);