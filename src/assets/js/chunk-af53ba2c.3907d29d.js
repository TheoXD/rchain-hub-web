(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af53ba2c"],{"5bdc":function(i,n,e){"use strict";e.r(n),e.d(n,"ion_infinite_scroll",(function(){return l})),e.d(n,"ion_infinite_scroll_content",(function(){return c}));var t=e("9ab4"),r=e("4f09"),o=e("b6d2"),s=e("cf08"),l=function(){function i(i){var n=this;Object(r["l"])(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var i=n.scrollEl;if(!i||!n.canStart())return 1;var e=n.el.offsetHeight;if(0===e)return 2;var t=i.scrollTop,r=i.scrollHeight,o=i.offsetHeight,s=0!==n.thrPc?o*n.thrPc:n.thrPx,l="bottom"===n.position?r-e-t-s-o:t-e-s;if(l<0){if(!n.didFire)return n.isLoading=!0,n.didFire=!0,n.ionInfinite.emit(),3}else n.didFire=!1;return 4},this.ionInfinite=Object(r["d"])(this,"ionInfinite",7)}return i.prototype.thresholdChanged=function(){var i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)},i.prototype.disabledChanged=function(){var i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)},i.prototype.connectedCallback=function(){return Object(t["b"])(this,void 0,void 0,(function(){var i,n,e=this;return Object(t["e"])(this,(function(t){switch(t.label){case 0:return i=this.el.closest("ion-content"),i?(n=this,[4,i.getScrollElement()]):(console.error("<ion-infinite-scroll> must be used inside an <ion-content>"),[2]);case 1:return n.scrollEl=t.sent(),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(r["m"])((function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)})),[2]}}))}))},i.prototype.disconnectedCallback=function(){this.enableScrollEvents(!1),this.scrollEl=void 0},i.prototype.complete=function(){return Object(t["b"])(this,void 0,void 0,(function(){var i,n,e=this;return Object(t["e"])(this,(function(t){return i=this.scrollEl,this.isLoading&&i?(this.isLoading=!1,"top"===this.position&&(this.isBusy=!0,n=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(r["g"])((function(){var t=i.scrollHeight,o=t-n;requestAnimationFrame((function(){Object(r["m"])((function(){i.scrollTop=o,e.isBusy=!1}))}))}))}))),[2]):[2]}))}))},i.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},i.prototype.enableScrollEvents=function(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))},i.prototype.render=function(){var i,n=Object(r["e"])(this),e=this.disabled;return Object(r["i"])(r["a"],{class:(i={},i[n]=!0,i["infinite-scroll-loading"]=this.isLoading,i["infinite-scroll-enabled"]=!e,i)})},Object.defineProperty(i.prototype,"el",{get:function(){return Object(r["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"watchers",{get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),i}(),c=function(){function i(i){Object(r["l"])(this,i)}return i.prototype.componentDidLoad=function(){if(void 0===this.loadingSpinner){var i=Object(r["e"])(this);this.loadingSpinner=o["b"].get("infiniteLoadingSpinner",o["b"].get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.render=function(){var i,n=Object(r["e"])(this);return Object(r["i"])(r["a"],{class:(i={},i[n]=!0,i["infinite-scroll-content-"+n]=!0,i)},Object(r["i"])("div",{class:"infinite-loading"},this.loadingSpinner&&Object(r["i"])("div",{class:"infinite-loading-spinner"},Object(r["i"])("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(r["i"])("div",{class:"infinite-loading-text",innerHTML:Object(s["a"])(this.loadingText)})))},Object.defineProperty(i,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:!0,configurable:!0}),i}()},cf08:function(i,n,e){"use strict";e.d(n,"a",(function(){return t}));var t=function(i){try{if("string"!==typeof i||""===i)return i;var n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=i,l.forEach((function(i){for(var e=n.querySelectorAll(i),t=e.length-1;t>=0;t--){var s=e[t];s.parentNode?s.parentNode.removeChild(s):n.removeChild(s);for(var l=o(s),c=0;c<l.length;c++)r(l[c])}}));for(var t=o(n),s=0;s<t.length;s++)r(t[s]);var c=document.createElement("div");c.appendChild(n);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(d){return console.error(d),""}},r=function(i){if(!i.nodeType||1===i.nodeType){for(var n=i.attributes.length-1;n>=0;n--){var e=i.attributes.item(n),t=e.name;if(s.includes(t.toLowerCase())){var l=e.value;null!=l&&l.toLowerCase().includes("javascript:")&&i.removeAttribute(t)}else i.removeAttribute(t)}var c=o(i);for(n=0;n<c.length;n++)r(c[n])}},o=function(i){return null!=i.children?i.children:i.childNodes},s=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=chunk-af53ba2c.3907d29d.js.map