(()=>{"use strict";var n={144:(n,e,t)=>{t.d(e,{Z:()=>d});var i=t(645),a=t.n(i),r=t(667),o=t.n(r),l=t(785),s=t(9),c=a()((function(n){return n[1]})),p=o()(l.Z),u=o()(s.Z);c.push([n.id,"@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans Regular'), local('OpenSans-Regular'),\n        url("+p+");\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 800;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'),\n        url("+u+");\n}\n\nbody,\nhtml {\n    margin: 0;\n    padding: 0;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nbody, input, button, h1 {\n  font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-items: center;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    -ms-flex-pack: center;\n    align-items: center;\n}\n",""]);const d=c},51:(n,e,t)=>{t.d(e,{Z:()=>p});var i=t(645),a=t.n(i),r=t(667),o=t.n(r),l=t(369),s=a()((function(n){return n[1]})),c=o()(l.Z);s.push([n.id,".emails-input {\n    margin: 0px 50px 24px 50px;\n    height: 96px;\n    width: 440px;\n    border-radius: 8px 8px 0px 0px;\n    box-sizing: border-box;\n    background: #f8f8f7;\n}\n\n.emails-input__delete-button {\n    float: left;\n    background-image: url("+c+");\n    height: 8px;\n    width: 8px;\n    margin: 8px 0px 8px 8px;\n    user-select: none;\n    cursor: pointer;\n}\n\n.emails-input__textarea {\n    width: 100%;\n    height: 100%;\n    background: #ffffff;\n    border: 1px solid #c3c2cf;\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding: 8px 7px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\n.emails-input__input {\n    border: none;\n    background-image: none;\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n    float: left;\n}\n\n.emails-input__input::placeholder {\n    color: #c3c2cf;\n    opacity: 1;\n}\n\n.emails-input__input:-ms-input-placeholder {\n    color: #c3c2cf;\n}\n\n.emails-input__input::-ms-input-placeholder {\n    color: #c3c2cf;\n}\n\n.emails-input__input:focus {\n    outline: none;\n}\n\n.emails-input__email-pill {\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n    height: 24px;\n    padding: 0px 8px 0px 10px;\n    display: inline-block;\n    float: left;\n    margin: 0px 8px 4px 0px;\n    user-select: none;\n}\n\n.emails-input__email-pill--valid {\n    background: rgba(102, 153, 255, 0.2);\n}\n\n.emails-input__email-pill--invalid {\n    border-radius: 0;\n    background: rgba(255, 255, 255, 1);\n    border-bottom: 1px dashed red;\n}\n\n.emails-input__delete-button {\n    float: left;\n    background-image: url("+c+");\n    height: 8px;\n    width: 8px;\n    margin: 8px 0px 8px 8px;\n    user-select: none;\n    display: inline;\n    cursor: pointer;\n}\n\n.emails-input__pill-text {\n    float: left;\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n    text-align: right;\n    color: #050038;\n    user-select: none;\n}",""]);const p=s},719:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(645),a=t.n(i)()((function(n){return n[1]}));a.push([n.id,".form {\n    margin: 0 auto;\n    min-height: 300px;\n    min-width: 200px;\n    max-width: 540px;\n    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    background: #f8f8f7;\n    box-sizing: border-box;\n    overflow: hidden;\n}\n\n.form__header {\n    font-weight: normal;\n    margin: 32px 50px 24px 50px;\n    font-size: 20px;\n    line-height: 27px;\n    color: #050038;\n    box-sizing: border-box;\n}\n\n.form__button {\n    border: none;\n    padding: 8px 16px;\n    background: #4262ff;\n    border-radius: 6px;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n    color: #ffffff;\n    display: inline-block;\n    cursor: pointer;\n}\n\n.form__button:first-child {\n    margin-right: 10px;\n}\n\n.form__header--bold {\n    font-weight: bold;\n}\n\n.form__footer {\n    background: #ffffff;\n    height: 96px;\n    width: 100%;\n    clear: both;\n    box-sizing: border-box;\n    padding: 24px 50px 32px 50px;\n    margin: 0px 16px 0px 0px;\n    float: left;\n}",""]);const r=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);i&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},9:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"dbb97fd982ce1b96b6de90a9f1c2ecaa.ttf"},785:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"1b0809d519837cb7aad36a73433f655c.ttf"},369:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"3b31c45c4da5a965f9407688a32f8207.svg"},379:(n,e,t)=>{var i,a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function o(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},i=[],a=0;a<n.length;a++){var l=n[a],s=e.base?l[0]+e.base:l[0],c=t[s]||0,p="".concat(s," ").concat(c);t[s]=c+1;var u=o(p),d={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(r[u].references++,r[u].updater(d)):r.push({identifier:p,updater:m(d,e),references:1}),i.push(p)}return i}function s(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var c,p=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function u(n,e,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=p(e,a);else{var r=document.createTextNode(a),o=n.childNodes;o[e]&&n.removeChild(o[e]),o.length?n.insertBefore(r,o[e]):n.appendChild(r)}}function d(n,e,t){var i=t.css,a=t.media,r=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,h=0;function m(n,e){var t,i,a;if(e.singleton){var r=h++;t=f||(f=s(e)),i=u.bind(null,t,r,!1),a=u.bind(null,t,r,!0)}else t=s(e),i=d.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var a=o(t[i]);r[a].references--}for(var s=l(n,e),c=0;c<t.length;c++){var p=o(t[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}t=s}}}}},e={};function t(i){if(e[i])return e[i].exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),i=t(144);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(719);e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;var r=t(51);function o(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var l=new(function(){function n(e){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.input=void 0,this.textArea=void 0,this.createHtml(),{getAllEmails:this.getAllEmails.bind(this),replaceEmails:this.replaceEmails.bind(this),subscribeToChanges:this.subscribeToChanges.bind(this),insertEmail:this.insertEmailBlock.bind(this)}}var e,t;return e=n,(t=[{key:"subscribeToChanges",value:function(n){this.callback=n}},{key:"deleteEmailBlock",value:function(n){n.preventDefault(),n.stopPropagation();var e=n.target.parentElement,t=e.querySelector(".emails-input__pill-text").textContent;e.remove(),this.emitChange({type:"delete",values:[t],elements:[e]})}},{key:"createEmailBlock",value:function(n){var e=n.email,t=n.isValidEmail,i=document.createElement("div");i.className="emails-input__pill-text",i.textContent=e;var a=document.createElement("div");a.className="emails-input__delete-button",a.onclick=this.deleteEmailBlock.bind(this);var r=document.createElement("div"),o=t?"valid":"invalid";return r.className="emails-input__email-pill emails-input__email-pill--".concat(o),r.appendChild(i),r.appendChild(a),r}},{key:"emitChange",value:function(n){var e="function"==typeof this.callback,t=n&&""!==n.type;e&&t&&this.callback(n)}},{key:"insertEmailBlock",value:function(n){if(""!==n){var e=n.match(/^\w+@\w+\.\w+(\.\w+)?$/),t=this.createEmailBlock({email:n,isValidEmail:e});this.textArea.insertBefore(t,this.input),this.input.value="",this.emitChange({type:"insert",values:["email"],elements:[t]})}}},{key:"insertMultipleEmailBlocks",value:function(n){var e=this;n.replace(/ +/g,"").split(",").forEach((function(n){return e.insertEmailBlock(n)}))}},{key:"handleInput",value:function(n){var e=n.target.value,t=n.key;(","===t||"Enter"===t)&&(n.preventDefault(),n.stopPropagation(),this.insertEmailBlock(e))}},{key:"handlePaste",value:function(n){n.preventDefault(),n.stopPropagation();var e=(n.clipboardData||window.clipboardData).getData("text");this.insertMultipleEmailBlocks(e)}},{key:"replaceEmails",value:function(n){for(var e=this.container.querySelectorAll(".emails-input__pill-text"),t=[],i=[],a=0;a<e.length;a++){var r=e[a],o=n[r.textContent];if(!o)break;r.textContent=o,t.push(o),i.push(r.parentElement)}this.emitChange({type:"replace",values:[t],elements:[i]})}},{key:"getAllEmails",value:function(){for(var n=this.container.querySelectorAll(".emails-input__pill-text"),e=[],t=0;t<n.length;t++){var i=n[t],a=i.parentElement,r=i.textContent,o=a.classList.contains("emails-input__email-pill--valid");e.push({element:a,address:r,isValid:o})}return e}},{key:"createHtml",value:function(){var n=document.createElement("input");n.className="emails-input__input",n.placeholder="add more people…",n.onpaste=this.handlePaste.bind(this),n.onkeydown=this.handleInput.bind(this);var e=document.createElement("div");e.className="emails-input__textarea",e.appendChild(n),this.container.appendChild(e),this.input=n,this.textArea=e}}])&&o(e.prototype,t),n}())(document.querySelector(".emails-input")),s=["joan@miro.com","rene@magritte.com","pablo@picasso.com"],c=document.querySelector("#add-email"),p=document.querySelector("#count-emails");c.onclick=function(){var n=Math.floor(Math.random()*s.length),e=s[n];l.insertEmail(e)},p.onclick=function(){var n=l.getAllEmails().filter((function(n){return n.isValid}));alert("Valid emails: ".concat(n.length))}})()})();