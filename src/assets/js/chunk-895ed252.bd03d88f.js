(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-895ed252"],{"264c":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l}));var o=n("9ab4"),i=function(e,t){return null!==t.closest(e)},r=function(e){var t;return"string"===typeof e&&e.length>0?(t={"ion-color":!0},t["ion-color-"+e]=!0,t):void 0},a=function(e){if(void 0!==e){var t=Array.isArray(e)?e:e.split(" ");return t.filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e}))}return[]},s=function(e){var t={};return a(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,l=function(e,t,n){return Object(o["b"])(void 0,void 0,void 0,(function(){var i;return Object(o["e"])(this,(function(o){return null!=e&&"#"!==e[0]&&!c.test(e)&&(i=document.querySelector("ion-router"),i)?(null!=t&&t.preventDefault(),[2,i.push(e,n)]):[2,!1]}))}))}},"60d5":function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return c}));var o=n("9ab4"),i=n("4f09"),r=n("a1ca"),a=function(){return n.e("chunk-2d217649").then(n.bind(null,"c710"))},s=function(){return n.e("chunk-2d21b2db").then(n.bind(null,"bf56"))},c=function(e){return new Promise((function(t,n){Object(i["m"])((function(){l(e),u(e).then((function(n){n.animation&&n.animation.destroy(),d(e),t(n)}),(function(t){d(e),n(t)}))}))}))},l=function(e){var t=e.enteringEl,n=e.leavingEl;E(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),x(t,!1),n&&x(n,!1)},u=function(e){return Object(o["b"])(void 0,void 0,void 0,(function(){var t,n;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return[4,p(e)];case 1:return t=o.sent(),n=t?f(t,e):v(e),[2,n]}}))}))},d=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},p=function(e){return Object(o["b"])(void 0,void 0,void 0,(function(){var t,n;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,a()]:[2,void 0];case 1:return n=o.sent().iosTransitionAnimation,[3,4];case 2:return[4,s()];case 3:n=o.sent().mdTransitionAnimation,o.label=4;case 4:return t=n,[2,t]}}))}))},f=function(e,t){return Object(o["b"])(void 0,void 0,void 0,(function(){var i,r,a;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return[4,b(t,!0)];case 1:o.sent(),o.label=2;case 2:return o.trys.push([2,5,,6]),[4,n.e("chunk-2d225766").then(n.bind(null,"e500"))];case 3:return r=o.sent(),[4,r.create(e,t.baseEl,t)];case 4:return i=o.sent(),[3,6];case 5:return o.sent(),i=e(t.baseEl,t),[3,6];case 6:return g(t.enteringEl,t.leavingEl),[4,m(i,t)];case 7:return a=o.sent(),t.progressCallback&&t.progressCallback(void 0),a&&w(t.enteringEl,t.leavingEl),[2,{hasCompleted:a,animation:i}]}}))}))},v=function(e){return Object(o["b"])(void 0,void 0,void 0,(function(){var t,n;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,b(e,!1)];case 1:return o.sent(),g(t,n),w(t,n),[2,{hasCompleted:!0}]}}))}))},b=function(e,t){return Object(o["b"])(void 0,void 0,void 0,(function(){var n,i;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,i=n?[j(e.enteringEl),j(e.leavingEl)]:[O(e.enteringEl),O(e.leavingEl)],[4,Promise.all(i)];case 1:return o.sent(),[4,h(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}}))}))},h=function(e,t){return Object(o["b"])(void 0,void 0,void 0,(function(){return Object(o["e"])(this,(function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}}))}))},m=function(e,t){var n=t.progressCallback,o=new Promise((function(t){e.onFinish((function(n){"number"===typeof n?t(1===n):void 0!==e.hasCompleted&&t(e.hasCompleted)}))}));return n?(e.progressStart(!0),n(e)):e.play(),o},g=function(e,t){y(t,r["c"]),y(e,r["a"])},w=function(e,t){y(e,r["b"]),y(t,r["d"])},y=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},O=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},j=function(e){return Object(o["b"])(void 0,void 0,void 0,(function(){var t,n;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return t=e,t?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(n=o.sent(),null!=n)return[2];o.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(j))];case 3:o.sent(),o.label=4;case 4:return[2]}}))}))},x=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},E=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")},k=function(e){if(e.classList.contains("ion-page"))return e;var t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e}},bfbf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var o=n("9ab4"),i=function(e,t,n,i,r){return Object(o["b"])(void 0,void 0,void 0,(function(){var a;return Object(o["e"])(this,(function(o){switch(o.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,i)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,i&&i.forEach((function(e){return a.classList.add(e)})),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,a]}}))}))},r=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},cf49:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_popover",(function(){return b}));var o=n("9ab4"),i=n("4f09"),r=(n("b6d2"),n("c123"),n("157e")),a=(n("a1ca"),n("093a")),s=n("264c"),c=n("bfbf"),l=n("60d5"),u=function(e,t){var n="top",o="left",i=e.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,l=e.ownerDocument.defaultView.innerWidth,u=e.ownerDocument.defaultView.innerHeight,p=t&&t.target&&t.target.getBoundingClientRect(),f=null!=p&&"top"in p?p.top:u/2-c/2,v=null!=p&&"left"in p?p.left:l/2,b=p&&p.width||0,h=p&&p.height||0,m=e.querySelector(".popover-arrow"),g=m.getBoundingClientRect(),w=g.width,y=g.height;null==p&&(m.style.display="none");var O={top:f+h,left:v+b/2-w/2},j={top:f+h+(y-1),left:v+b/2-s/2},x=!1,E=!1;j.left<d+25?(x=!0,j.left=d):s+d+j.left+25>l&&(E=!0,j.left=l-s-d,o="right"),f+h+c>u&&f-c>0?(O.top=f-(y+1),j.top=f-c-(y-1),e.className=e.className+" popover-bottom",n="bottom"):f+h+c>u&&(i.style.bottom=d+"%"),m.style.top=O.top+"px",m.style.left=O.left+"px",i.style.top=j.top+"px",i.style.left=j.left+"px",x&&(i.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),E&&(i.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+o;var k=Object(r["a"])(),D=Object(r["a"])(),P=Object(r["a"])();return D.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),P.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),k.addElement(e).easing("ease").duration(100).addAnimation([D,P])},d=5,p=function(e){var t=Object(r["a"])(),n=Object(r["a"])(),o=Object(r["a"])();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,o])},f=function(e,t){var n=12,o=e.ownerDocument,i="rtl"===o.dir,a="top",s=i?"right":"left",c=e.querySelector(".popover-content"),l=c.getBoundingClientRect(),u=l.width,d=l.height,p=o.defaultView.innerWidth,f=o.defaultView.innerHeight,v=t&&t.target&&t.target.getBoundingClientRect(),b=null!=v&&"bottom"in v?v.bottom:f/2-d/2,h=null!=v&&"left"in v?i?v.left-u+v.width:v.left:p/2-u/2,m=v&&v.height||0,g={top:b,left:h};g.left<n?(g.left=n,s="left"):u+n+g.left>p&&(g.left=p-u-n,s="right"),b+m+d>f&&b-d>0?(g.top=b-d-m,e.className=e.className+" popover-bottom",a="bottom"):b+m+d>f&&(c.style.bottom=n+"px");var w=Object(r["a"])(),y=Object(r["a"])(),O=Object(r["a"])(),j=Object(r["a"])(),x=Object(r["a"])();return y.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),O.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),j.addElement(c).beforeStyles({top:g.top+"px",left:g.left+"px","transform-origin":a+" "+s}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),w.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([y,O,j,x])},v=function(e){var t=Object(r["a"])(),n=Object(r["a"])(),o=Object(r["a"])();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),o.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([n,o])},b=function(){function e(e){var t=this;Object(i["l"])(this,e),this.presented=!1,this.mode=Object(i["e"])(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,a["a"])},this.onLifecycle=function(e){var n=t.usersElement,o=h[e.type];if(n&&o){var i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(i)}},Object(a["e"])(this.el),this.didPresent=Object(i["d"])(this,"ionPopoverDidPresent",7),this.willPresent=Object(i["d"])(this,"ionPopoverWillPresent",7),this.willDismiss=Object(i["d"])(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(i["d"])(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(o["b"])(this,void 0,void 0,(function(){var e,t,n;return Object(o["e"])(this,(function(o){switch(o.label){case 0:if(this.presented)return[2];if(e=this.el.querySelector(".popover-content"),!e)throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),n=this,[4,Object(c["a"])(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return n.usersElement=o.sent(),[4,Object(l["a"])(this.usersElement)];case 2:return o.sent(),[2,Object(a["f"])(this,"popoverEnter",u,f,this.event)]}}))}))},e.prototype.dismiss=function(e,t){return Object(o["b"])(this,void 0,void 0,(function(){var n;return Object(o["e"])(this,(function(o){switch(o.label){case 0:return[4,Object(a["g"])(this,e,t,"popoverLeave",p,v,this.event)];case 1:return n=o.sent(),n?[4,Object(c["b"])(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,n]}}))}))},e.prototype.onDidDismiss=function(){return Object(a["h"])(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(a["h"])(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(i["e"])(this),n=this.onLifecycle;return Object(i["i"])(i["a"],{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(s["b"])(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(i["i"])("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(i["i"])("div",{class:"popover-wrapper"},Object(i["i"])("div",{class:"popover-arrow"}),Object(i["i"])("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);
//# sourceMappingURL=chunk-895ed252.bd03d88f.js.map