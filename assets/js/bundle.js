!function(){"use strict";var e,t;e=HTMLElement.prototype,t={addClass:function(e){this.classList.add(e)},removeClass:function(e){this.classList.remove(e)},hasClass:function(e){return this.classList.contains(e)},setStyles:function(e){var t=this.style;Object.keys(e).forEach((a=>{t.setProperty(a,e[a])}))},setAttrs:function(e){Object.keys(e).forEach((t=>{this.setAttribute(t,e[t])}))},removeAttrs:function(e){e.forEach((e=>{this.removeAttribute(e)}))}},Object.keys(t).forEach((a=>{Object.defineProperty(e,a,{value:t[a],enumerable:!0})}));var a,n,i,s,r=(a=0,n=[],window.addEventListener("scroll",(function(){a||(a=setTimeout((function(){n.forEach((function(e){e.callback.apply(e.thisArg,e.params)})),a=0}),50))})),{addHandle:function(e,t,a,i){n.every((function(t){return t.name!==e}))&&n.push({name:e,thisArg:t,callback:a,params:i})},deleteHandle:function(e){!function(e,t,a){for(var n=e.length,i=0;i<n;i++)e[i][t]===a&&e.splice(i,1)}(n,e,e)}});function o(e){return document.createElement(e)}function l(e){return document.getElementById(e)}if(document.body.hasClass("single-post")){var d=(i="blockquote",document.getElementsByTagName(i));if(d&&d.length){var c=o("i"),u=o("i"),h=d.length;c.setAttribute("class","fa fa-quote-left"),u.setAttribute("class","fa fa-quote-right");for(var f=0;f<h;f++){var v=d.item(f),m=v.firstElementChild;m?v.insertBefore(f?c.cloneNode():c,m):v.appendChild(f?c.cloneNode():c),v.appendChild(f?u.cloneNode():u)}}}if(document.body.hasClass("single-post")){var p=(s=".post-navigation",document.querySelector(s)),g=p.querySelector(".nav-previous"),C=p.querySelector(".nav-next");if(g){var b=o("div"),w=o("i");w.setAttribute("class","fa fa-arrow-left"),b.appendChild(w),b.addEventListener("click",(()=>{window.location.href=g.querySelector("a").href})),g.insertBefore(b,g.firstElementChild)}if(C){var E=o("div"),y=o("i");y.setAttribute("class","fa fa-arrow-right"),E.appendChild(y),E.addEventListener("click",(()=>{window.location.href=C.querySelector("a").href})),C.appendChild(E)}}for(var T=l("wp-calendar").querySelector("tbody").getElementsByTagName("td"),L=T.length,H=0;H<L;H++){var A=T.item(H);A.childElementCount&&A.addClass("has-post")}var k=window.innerHeight,q=["hidden","mousedown"],N=l("back-to-top"),M=document.documentElement,S=0;function x(e){return String.fromCodePoint.apply(null,e)}N.addEventListener("click",(()=>{!function(e){if(S<k)window.scrollTo({top:0,behavior:"smooth"});else var t=setInterval((function(){M.scrollTop<=0&&clearInterval(t),M.scrollTop-=e}),20)}((S=M.scrollTop)/(1e3*(S/5/k)/20))})),N.addEventListener("mousedown",(function(){N.addClass(q[1])})),N.addEventListener("mouseup",(function(){N.removeClass(q[1])})),r.addHandle("bttv",null,(function(){M.scrollTop>=window.innerHeight?N.removeClass(q[0]):N.addClass(q[0])}),null);const $=[0,1,2,3,4,5,6,7,8,9],j=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];function B(e,t){this.wrap=e,this.target=t,this.visible=!0}B.prototype={wrap:{},target:{},tagCount:[0,0,0,0,0,0],visible:!1,h1(e,t){if(this.tagCount[0]>0)console.warn("Only one <h1> tag is allowed in single document");else{this.tagCount[0]+=1;var a=o("div");a.addClass("catalog-h1"),a.innerText=e.innerText,t.appendChild(a)}},h2To6(e,t,a){var n=parseInt(e.tagName.charAt(1));this.tagCount[n-1]+=1,n-a>1&&console.warn(`<h${a}> tag should not be followed directly by <h${n}> tag`);var i=o("a"),s=function(e){for(var t="",a=1,n=0;n<e;n++)a?(t+=j[Math.floor(26*Math.random())],a=0):(t+=$[Math.floor(10*Math.random())],a=1);return t}(4);i.addClass("catalog-h"+n),i.innerHTML=`<div class="catalog-wrap"><div></div><span>${e.innerText}</span></div>`,e.id||(e.id=`h${n}-${this.tagCount[n-1]}-${s}`),i.href="#"+e.id,i.dataset.anchor=s,e.dataset.anchor=s,t.appendChild(i)},generate(){if(!(!this.wrap instanceof HTMLElement||!this.target instanceof HTMLElement)){for(var e=this.wrap,t=e.children,a=e.childElementCount,n=document.createDocumentFragment(),i=this.wrap.querySelector("h1")?0:1,s=0;s<a;s++){var r=t.item(s);switch(r.tagName){case"H1":this.h1(r,n),i=1;break;case"H2":case"H3":case"H4":case"H5":case"H6":this.h2To6(r,n,i),i=r.tagName.charAt(1)}}return!!n.childElementCount&&(this.target.appendChild(n),!0)}}};var I=/postid-(\d+)/g.exec(document.body.classList.value);if(I){var O=l("post-"+I[1]);if(O&&"ARTICLE"===O.tagName){var P=o("div"),z=new B(O.querySelector(".entry-content"),P);if(z.generate()){var D=`<div class="sidebar-item-title">${x([25991,31456,30446,24405])}</div>`,F=o("div"),R=o("div");R.innerHTML=D,P.addClass("sidebar-item-body"),F.addClass("sidebar-item"),F.addClass("fixed"),F.id="post-catalog",R.appendChild(P),F.appendChild(R),l("widget-mount-left").appendChild(F);var G=o("div"),J=[[38544,34255,30446,24405],[26174,31034,30446,24405]];G.id="post-catalog-switcher",G.innerHTML="<i class='fa fa-th-list'></i>",G.title=x(J[0]),G.addEventListener("mousedown",(()=>{G.addClass("mousedown")})),G.addEventListener("mouseup",(()=>{G.removeClass("mousedown")})),G.addEventListener("click",(()=>{z.visible?(z.visible=!1,F.addClass("hidden"),setTimeout((function(){G.addClass("catalog-status-hidden"),G.title=x(J[1])}),200)):(z.visible=!0,F.removeClass("hidden"),setTimeout((function(){G.removeClass("catalog-status-hidden"),G.title=x(J[0])}),200))}));var K=null,Q=function(){K&&K.removeClass("current")};P.addEventListener("click",(e=>{var t=e.target;if("A"===t.tagName)Q(),t.addClass("current"),K=t;else if("A"===t.parentElement.tagName){Q();var a=t.parentElement;a.addClass("current"),K=a}else if("A"===t.parentElement.parentElement.tagName){Q();var n=t.parentElement.parentElement;n.addClass("current"),K=n}})),document.body.appendChild(G)}}}}();
