!function(){"use strict";var e,t,r,a,s,n;function i(e){return document.createElement(e)}if(e=HTMLElement.prototype,t={addClass:function(e){this.classList.add(e)},removeClass:function(e){this.classList.remove(e)},hasClass:function(e){return this.classList.contains(e)},setStyles:function(e){var t=this.style;Object.keys(e).forEach((r=>{t.setProperty(r,e[r])}))},setAttrs:function(e){Object.keys(e).forEach((t=>{this.setAttribute(t,e[t])}))},removeAttrs:function(e){e.forEach((e=>{this.removeAttribute(e)}))}},Object.keys(t).forEach((r=>{Object.defineProperty(e,r,{value:t[r],enumerable:!0})})),r=0,a=[],window.addEventListener("scroll",(function(){r||(r=setTimeout((function(){a.forEach((function(e){e.callback.apply(e.thisArg,e.params)})),r=0}),50))})),document.body.hasClass("single-post")){var o=(s="blockquote",document.getElementsByTagName(s));if(o&&o.length){var l=i("i"),c=i("i"),d=o.length;l.setAttribute("class","fa fa-quote-left"),c.setAttribute("class","fa fa-quote-right");for(var f=0;f<d;f++){var u=o.item(f),h=u.firstElementChild;h?u.insertBefore(f?l.cloneNode():l,h):u.appendChild(f?l.cloneNode():l),u.appendChild(f?c.cloneNode():c)}}}if(document.body.hasClass("single-post")){var m=(n=".post-navigation",document.querySelector(n)),v=m.querySelector(".nav-previous"),p=m.querySelector(".nav-next");if(v){var y=i("div"),b=i("i");b.setAttribute("class","fa fa-arrow-left"),y.appendChild(b),y.addEventListener("click",(()=>{window.location.href=v.querySelector("a").href})),v.insertBefore(y,v.firstElementChild)}if(p){var E=i("div"),g=i("i");g.setAttribute("class","fa fa-arrow-right"),E.appendChild(g),E.addEventListener("click",(()=>{window.location.href=p.querySelector("a").href})),p.appendChild(E)}}for(var C,q=(C="wp-calendar",document.getElementById(C)).querySelector("tbody").getElementsByTagName("td"),w=q.length,A=0;A<w;A++){var k=q.item(A);k.childElementCount&&k.addClass("has-post")}}();
