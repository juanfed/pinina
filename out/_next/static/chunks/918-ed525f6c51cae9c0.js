(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{51106:function(e,t,o){"use strict";o.d(t,{Z:function(){return h}});var n=o(87462),r=o(45987),i=o(67294),a=(o(45697),o(86010)),s=o(93871),c=o(1591),u=o(24896),l=o(17294),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=i.forwardRef((function(e,t){var o=e.align,c=void 0===o?"inherit":o,u=e.classes,l=e.className,p=e.color,f=void 0===p?"initial":p,y=e.component,h=e.display,g=void 0===h?"initial":h,b=e.gutterBottom,m=void 0!==b&&b,v=e.noWrap,k=void 0!==v&&v,w=e.paragraph,S=void 0!==w&&w,_=e.variant,O=void 0===_?"body1":_,x=e.variantMapping,j=void 0===x?d:x,L=(0,r.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),I=y||(S?"p":j[O]||d[O])||"span";return i.createElement(I,(0,n.Z)({className:(0,a.default)(u.root,l,"inherit"!==O&&u[O],"initial"!==f&&u["color".concat((0,s.Z)(f))],k&&u.noWrap,m&&u.gutterBottom,S&&u.paragraph,"inherit"!==c&&u["align".concat((0,s.Z)(c))],"initial"!==g&&u["display".concat((0,s.Z)(g))]),ref:t},L))})),f=(0,c.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(p),y=i.forwardRef((function(e,t){var o=e.classes,c=e.className,d=e.color,p=void 0===d?"primary":d,y=e.component,h=void 0===y?"a":y,g=e.onBlur,b=e.onFocus,m=e.TypographyClasses,v=e.underline,k=void 0===v?"hover":v,w=e.variant,S=void 0===w?"inherit":w,_=(0,r.Z)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=(0,u.Z)(),x=O.isFocusVisible,j=O.onBlurVisible,L=O.ref,I=i.useState(!1),P=I[0],T=I[1],E=(0,l.Z)(t,L);return i.createElement(f,(0,n.Z)({className:(0,a.default)(o.root,o["underline".concat((0,s.Z)(k))],c,P&&o.focusVisible,"button"===h&&o.button),classes:m,color:p,component:h,onBlur:function(e){P&&(j(),T(!1)),g&&g(e)},onFocus:function(e){x(e)&&T(!0),b&&b(e)},ref:E,variant:S},_))})),h=(0,c.Z)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(y)},98396:function(e,t,o){"use strict";var n;o.d(t,{Z:function(){return d}});var r=o(67294),i=o(34168),a=o(20539),s=o(58974);function c(e,t,o,n,i){const a="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,[c,u]=r.useState((()=>i&&a?o(e).matches:n?n(e).matches:t));return(0,s.Z)((()=>{let t=!0;if(!a)return;const n=o(e),r=()=>{t&&u(n.matches)};return r(),n.addListener(r),()=>{t=!1,n.removeListener(r)}}),[e,o,a]),c}const u=(n||(n=o.t(r,2))).useSyncExternalStore;function l(e,t,o,n){const i=r.useCallback((()=>t),[t]),a=r.useMemo((()=>{if(null!==n){const{matches:t}=n(e);return()=>t}return i}),[i,e,n]),[s,c]=r.useMemo((()=>{if(null===o)return[i,()=>()=>{}];const t=o(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[i,o,e]);return u(c,s,a)}function d(e,t={}){const o=(0,i.Z)(),n="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,{defaultMatches:r=!1,matchMedia:s=(n?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:p}=(0,a.Z)({name:"MuiUseMediaQuery",props:t,theme:o});let f="function"===typeof e?e(o):e;f=f.replace(/^@media( ?)/m,"");return(void 0!==u?l:c)(f,r,s,d,p)}},94184:function(e,t){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},18228:function(e,t,o){var n;e.exports=(n=o(67294),function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t,o){e.exports=o(6)()},function(e,t){e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=n(o(2)),l=n(o(1)),d=n(o(5)),p=n(o(3)),f=function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e},y=function(e){function t(){var e,o,n;r(this,t);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{locale:n.props.language,fields:n.props.fields},(function(t){s(t,e),n.props.callback(t)}))},n.checkLoginState=function(e){n.setStateIfMounted({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.onFailure?n.props.onFailure({status:e.status}):n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login((function(e){return n.checkLoginState(e)}),!0)},n.click=function(e){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var t=n.props,o=t.scope,r=t.appId,i=t.onClick,a=t.returnScopes,s=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,l=t.authType,p=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var f={client_id:r,redirect_uri:c,state:p,return_scopes:a,scope:o,response_type:s,auth_type:l};if(n.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,d.default)(f);else{if(!window.FB)return void(n.props.onFailure&&n.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(n.checkLoginState,{scope:o,return_scopes:a,auth_type:f.auth_type})}}}},i(n,o)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(a||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,p.default)(e,"code")||(0,p.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,a=r;t.getElementById(n)||((a=t.createElement(o)).id=n,a.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(u.default.Component);y.propTypes={isDisabled:l.default.bool,callback:l.default.func.isRequired,appId:l.default.string.isRequired,xfbml:l.default.bool,cookie:l.default.bool,authType:l.default.string,scope:l.default.string,state:l.default.string,responseType:l.default.string,returnScopes:l.default.bool,redirectUri:l.default.string,autoLoad:l.default.bool,disableMobileRedirect:l.default.bool,isMobile:l.default.bool,fields:l.default.string,version:l.default.string,language:l.default.string,onClick:l.default.func,onFailure:l.default.func,render:l.default.func.isRequired},y.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:f(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=y},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,o){"use strict";function n(){}var r=o(7);e.exports=function(){function e(e,t,o,n,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},function(e,t){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o}]))},65749:function(e,t,o){var n;e.exports=(n=o(67294),function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(8)},function(e,t,o){e.exports=o(6)()},function(e,t){e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=n(o(2)),l=n(o(1)),d=n(o(5)),p=n(o(3)),f=function(){var e=!1;try{e=!!(window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i))}catch(t){}return e},y=function(e){function t(){var e,o,n;r(this,t);for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={isSdkLoaded:!1,isProcessing:!1},n.responseApi=function(e){window.FB.api("/me",{locale:n.props.language,fields:n.props.fields},(function(t){s(t,e),n.props.callback(t)}))},n.checkLoginState=function(e){n.setStateIfMounted({isProcessing:!1}),e.authResponse?n.responseApi(e.authResponse):n.props.onFailure?n.props.onFailure({status:e.status}):n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"connected"===e.status?n.checkLoginState(e):window.FB.login((function(e){return n.checkLoginState(e)}),!0)},n.click=function(e){if(n.state.isSdkLoaded&&!n.state.isProcessing&&!n.props.isDisabled){n.setState({isProcessing:!0});var t=n.props,o=t.scope,r=t.appId,i=t.onClick,a=t.returnScopes,s=t.responseType,c=t.redirectUri,u=t.disableMobileRedirect,l=t.authType,p=t.state;if("function"!=typeof i||(i(e),!e.defaultPrevented)){var f={client_id:r,redirect_uri:c,state:p,return_scopes:a,scope:o,response_type:s,auth_type:l};if(n.props.isMobile&&!u)window.location.href="https://www.facebook.com/dialog/oauth"+(0,d.default)(f);else{if(!window.FB)return void(n.props.onFailure&&n.props.onFailure({status:"facebookNotLoaded"}));window.FB.login(n.checkLoginState,{scope:o,return_scopes:a,auth_type:f.auth_type})}}}},i(n,o)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){if(this._isMounted=!0,document.getElementById("facebook-jssdk"))this.sdkLoaded();else{this.setFbAsyncInit(),this.loadSdkAsynchronously();var e=document.getElementById("fb-root");e||((e=document.createElement("div")).id="fb-root",document.body.appendChild(e))}}},{key:"componentWillReceiveProps",value:function(e){this.state.isSdkLoaded&&e.autoLoad&&!this.props.autoLoad&&window.FB.getLoginStatus(this.checkLoginAfterRefresh)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"setStateIfMounted",value:function(e){this._isMounted&&this.setState(e)}},{key:"setFbAsyncInit",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad;window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),e.setStateIfMounted({isSdkLoaded:!0}),(a||e.isRedirectedFromFb())&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)}}},{key:"isRedirectedFromFb",value:function(){var e=window.location.search;return(0,p.default)(e,"code")||(0,p.default)(e,"granted_scopes")}},{key:"sdkLoaded",value:function(){this.setState({isSdkLoaded:!0})}},{key:"loadSdkAsynchronously",value:function(){var e=this.props.language;!function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,a=r;t.getElementById(n)||((a=t.createElement(o)).id=n,a.src="https://connect.facebook.net/"+e+"/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props.render;if(!e)throw new Error("ReactFacebookLogin requires a render prop to render");var t={onClick:this.click,isDisabled:!!this.props.isDisabled,isProcessing:this.state.isProcessing,isSdkLoaded:this.state.isSdkLoaded};return this.props.render(t)}}]),t}(u.default.Component);y.propTypes={isDisabled:l.default.bool,callback:l.default.func.isRequired,appId:l.default.string.isRequired,xfbml:l.default.bool,cookie:l.default.bool,authType:l.default.string,scope:l.default.string,state:l.default.string,responseType:l.default.string,returnScopes:l.default.bool,redirectUri:l.default.string,autoLoad:l.default.bool,disableMobileRedirect:l.default.bool,isMobile:l.default.bool,fields:l.default.string,version:l.default.string,language:l.default.string,onClick:l.default.func,onFailure:l.default.func,render:l.default.func.isRequired},y.defaultProps={redirectUri:"undefined"!=typeof window?window.location.href:"/",scope:"public_profile,email",returnScopes:!1,xfbml:!1,cookie:!1,authType:"",fields:"name",version:"2.3",language:"en_US",disableMobileRedirect:!1,isMobile:f(),onFailure:null,state:"facebookdirect",responseType:"code"},t.default=y},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return"?"+Object.keys(e).map((function(t){return t+"="+encodeURIComponent(e[t])})).join("&")}},function(e,t,o){"use strict";function n(){}var r=o(7);e.exports=function(){function e(e,t,o,n,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},function(e,t){"use strict";var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=o},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=n(o(2)),l=n(o(1)),d=n(o(9)),p=n(o(4)),f=function(e){return["button","input","select","textarea","optgroup","option","fieldset"].indexOf((e+"").toLowerCase())>=0},y=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"style",value:function(){var e=this.constructor.defaultProps.cssClass;return this.props.cssClass===e&&u.default.createElement("style",{dangerouslySetInnerHTML:{__html:d.default}})}},{key:"containerStyle",value:function(e){var t=e.isProcessing,o=e.isSdkLoaded,n=e.isDisabled,r={transition:"opacity 0.5s"};return(t||!o||n)&&(r.opacity=.6),s(r,this.props.containerStyle)}},{key:"renderOwnButton",value:function(e){var t=this.props,o=t.cssClass,n=t.size,r=t.icon,i=t.textButton,a=t.typeButton,c=t.buttonStyle,l=e.onClick,d="string"==typeof r,p={};return e.isDisabled&&f(this.props.tag)&&(p.disabled=!0),u.default.createElement("span",{style:this.containerStyle(e)},d&&u.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),u.default.createElement(this.props.tag,s({type:a,className:o+" "+n,style:c,onClick:l},p),r&&d&&u.default.createElement("i",{className:"fa "+r}),r&&!d&&r,i),this.style())}},{key:"render",value:function(){var e=this;return u.default.createElement(p.default,s({},this.props,{render:function(t){return e.renderOwnButton(t)}}))}}]),t}(u.default.Component);y.propTypes={textButton:l.default.string,typeButton:l.default.string,size:l.default.string,cssClass:l.default.string,icon:l.default.any,containerStyle:l.default.object,buttonStyle:l.default.object,tag:l.default.oneOfType([l.default.node,l.default.func])},y.defaultProps={textButton:"Login with Facebook",typeButton:"button",size:"metro",fields:"name",cssClass:"kep-login-facebook",tag:"button"},t.default=y},function(e,t,o){(t=e.exports=o(10)()).push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}}]))},93645:function(e,t,o){"undefined"!=typeof self&&self,e.exports=function(e){return n={},t.m=o=[function(t){t.exports=e},function(e,t,o){e.exports=o(2)()},function(e,t,o){"use strict";function n(){}function r(){}var i=o(3);r.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,r,a){if(a!==i){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}var o={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return o.PropTypes=o}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,o){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function d(e,t,o,n,r,i){var a=e.getElementsByTagName(t)[0],s=a,c=a;(c=e.createElement(t)).id=o,c.src=n,s&&s.parentNode?s.parentNode.insertBefore(c,s):e.head.appendChild(c),c.onerror=i,c.onload=r}function p(e,t){var o=e.getElementById(t);o&&o.parentNode.removeChild(o)}function f(e){return b.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function y(e){return b.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},b.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("g",{fill:"#000",fillRule:"evenodd"},b.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),b.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),b.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),b.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),b.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function h(e){var t=i(Object(g.useState)(!1),2),o=t[0],n=t[1],r=i(Object(g.useState)(!1),2),a=r[0],s=r[1],c=e.tag,u=e.type,l=e.className,d=e.disabledStyle,p=e.buttonText,h=e.children,v=e.render,k=e.theme,w=e.icon,S=e.disabled,_=m({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),O=_.signIn,x=S||!_.loaded;if(v)return v({onClick:O,disabled:x});var j={backgroundColor:"dark"===k?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===k?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},L={cursor:"pointer",backgroundColor:"dark"===k?"#3367D6":"#eee",color:"dark"===k?"#fff":"rgba(0, 0, 0, .54)",opacity:1},I=x?Object.assign({},j,d):a?Object.assign({},j,L):o?Object.assign({},j,{cursor:"pointer",opacity:.9}):j;return b.a.createElement(c,{onMouseEnter:function(){return n(!0)},onMouseLeave:function(){n(!1),s(!1)},onMouseDown:function(){return s(!0)},onMouseUp:function(){return s(!1)},onClick:O,style:I,type:u,disabled:x,className:l},[w&&b.a.createElement(y,{key:1,active:a}),b.a.createElement(f,{icon:w,key:2},h||p)])}o.r(t),o.d(t,"default",(function(){return k})),o.d(t,"GoogleLogin",(function(){return k})),o.d(t,"GoogleLogout",(function(){return S})),o.d(t,"useGoogleLogin",(function(){return m})),o.d(t,"useGoogleLogout",(function(){return w}));var g=o(0),b=o.n(g),m=(o(1),function(e){function t(e){var t=e.getBasicProfile(),o=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=o,e.tokenId=o.id_token,e.accessToken=o.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},i(e)}function o(e){if(e&&e.preventDefault(),A){var o=window.gapi.auth2.getAuthInstance(),n={prompt:E};f(),"code"===I?o.grantOfflineAccess(n).then((function(e){return i(e)}),(function(e){return u(e)})):o.signIn(n).then((function(e){return t(e)}),(function(e){return u(e)}))}}var r=e.onSuccess,i=void 0===r?function(){}:r,a=e.onAutoLoadFinished,s=void 0===a?function(){}:a,c=e.onFailure,u=void 0===c?function(){}:c,l=e.onRequest,f=void 0===l?function(){}:l,y=e.onScriptLoadFailure,h=e.clientId,b=e.cookiePolicy,m=e.loginHint,v=e.hostedDomain,k=e.autoLoad,w=e.isSignedIn,S=e.fetchBasicProfile,_=e.redirectUri,O=e.discoveryDocs,x=e.uxMode,j=e.scope,L=e.accessType,I=e.responseType,P=e.jsSrc,T=void 0===P?"https://apis.google.com/js/api.js":P,E=e.prompt,M=n(Object(g.useState)(!1),2),A=M[0],R=M[1];return Object(g.useEffect)((function(){var e=!1,o=y||u;return d(document,"script","google-login",T,(function(){var n={client_id:h,cookie_policy:b,login_hint:m,hosted_domain:v,fetch_basic_profile:S,discoveryDocs:O,ux_mode:x,redirect_uri:_,scope:j,access_type:L};"code"===I&&(n.access_type="offline"),window.gapi.load("auth2",(function(){var r=window.gapi.auth2.getAuthInstance();r?r.then((function(){e||(w&&r.isSignedIn.get()?(R(!0),s(!0),t(r.currentUser.get())):(R(!0),s(!1)))}),(function(e){u(e)})):window.gapi.auth2.init(n).then((function(o){if(!e){R(!0);var n=w&&o.isSignedIn.get();s(n),n&&t(o.currentUser.get())}}),(function(e){R(!0),s(!1),o(e)}))}))}),(function(e){o(e)})),function(){e=!0,p(document,"google-login")}}),[]),Object(g.useEffect)((function(){k&&o()}),[A]),{signIn:o,loaded:A}});function v(e){var t=u(Object(g.useState)(!1),2),o=t[0],n=t[1],r=u(Object(g.useState)(!1),2),i=r[0],a=r[1],s=e.tag,c=e.type,l=e.className,d=e.disabledStyle,p=e.buttonText,h=e.children,m=e.render,v=e.theme,k=e.icon,S=e.disabled,_=w({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),O=_.signOut,x=S||!_.loaded;if(m)return m({onClick:O,disabled:x});var j={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},L={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},I=x?Object.assign({},j,d):i?Object.assign({},j,L):o?Object.assign({},j,{cursor:"pointer",opacity:.9}):j;return b.a.createElement(s,{onMouseEnter:function(){return n(!0)},onMouseLeave:function(){n(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:O,style:I,type:c,disabled:x,className:l},[k&&b.a.createElement(y,{key:1,active:i}),b.a.createElement(f,{icon:k,key:2},h||p)])}h.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var k=h,w=function(e){var t=e.jsSrc,o=void 0===t?"https://apis.google.com/js/api.js":t,n=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,a=e.cookiePolicy,c=e.loginHint,u=e.hostedDomain,l=e.fetchBasicProfile,f=e.discoveryDocs,y=e.uxMode,h=e.redirectUri,b=e.scope,m=e.accessType,v=e.onLogoutSuccess,k=s(Object(g.useState)(!1),2),w=k[0],S=k[1],_=Object(g.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return n(e)}))}}),[v]);return Object(g.useEffect)((function(){var e=r||n;return d(document,"script","google-login",o,(function(){var t={client_id:i,cookie_policy:a,login_hint:c,hosted_domain:u,fetch_basic_profile:l,discoveryDocs:f,ux_mode:y,redirect_uri:h,scope:b,access_type:m};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?S(!0):window.gapi.auth2.init(t).then((function(){return S(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){p(document,"google-login")}}),[]),{signOut:_,loaded:w}};v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var S=v}],t.c=n,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(t){return e[t]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o,n}(o(67294))}}]);