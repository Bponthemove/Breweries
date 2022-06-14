(()=>{"use strict";var r={426:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([r.id,":root{\r\n    --white: #ffffff;\r\n    --grey: #e5e5e5;\r\n    --orange: #fca311;\r\n    --orangeHover: #fab342;\r\n    --blue: #14213d;\r\n}\r\n\r\nbody, html{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    overflow-x: hidden;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    background-color: var(--grey);\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\nheader{\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    height: 8vh;\r\n    font-size: 32px;\r\n    padding-top: 10px;\r\n    font-weight: 600;\r\n    background-color: var(--blue);\r\n    color: var(--orange);\r\n    text-align: center;\r\n    z-index: 99999;\r\n}\r\n\r\n.card{\r\n    background-color: var(--white);\r\n    text-align: center;\r\n    margin: 1em;\r\n    padding: 0.4em;\r\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.menu{\r\n    margin: 12vh 0;\r\n    display: none;\r\n}\r\n\r\n.map-page-container{\r\n    margin-top: 8vh;\r\n    height: 84vh;\r\n    display: none;\r\n    position: relative;\r\n}\r\n\r\n.map-container{\r\n    height: 100%;\r\n}\r\n\r\n#map{\r\n    height: 100%;\r\n}\r\n\r\n.close{\r\n    position: absolute;\r\n    top: 2vh;\r\n    right: 2vh;\r\n    border-radius: 3px;\r\n    font-weight: 900;\r\n    background-color: var(--orange);\r\n    cursor: pointer;\r\n    padding: 0.8em;\r\n    z-index: 99999;\r\n}\r\n\r\n.details-container{\r\n    position: absolute;\r\n    bottom: 2vh;\r\n    right: 2vh;\r\n    border-radius: 3px;\r\n    font-weight: 900;\r\n    background-color: var(--orange);\r\n    cursor: pointer;\r\n    padding: 0.8em;\r\n    z-index: 99999;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n.visible{\r\n    display: block;\r\n}\r\n\r\n.not-visible{\r\n    display: none;\r\n}\r\n\r\nfooter{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    height: 8vh;\r\n    padding-left: 0.8em;\r\n    padding-right: 0.8em;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    background-color: var(--blue);\r\n    color: var(--orange);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    z-index: 99999;\r\n}\r\n\r\nfooter input{\r\n    width: 20vw;\r\n    border: 1px solid var(--orange);\r\n    border-radius: 3px;\r\n    background-color: var(--blue);\r\n    padding: 0.5em;\r\n    color: var(--orange);\r\n    font-weight: 600;\r\n    cursor: default;\r\n    text-align: center;\r\n}\r\n\r\nfooter button{\r\n    border: unset;\r\n    border-radius: 3px;\r\n    background-color: var(--orange);\r\n    cursor: pointer;\r\n    padding: 0.8em;\r\n    font-weight: 600;\r\n}\r\n\r\nfooter button:hover{\r\n    background-color: var(--orangeHover);\r\n    transition: all 0.2s;\r\n}\r\n",""]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],d=t.base?s[0]+t.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),g={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var h=o(g,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var s=t(r,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.nc=void 0,(()=>{const r=r=>"string"==typeof r?`?by_city=${r.trim().replace(/ /g,"_")}&per_page=20`:`?by_dist=${r.lat},${r.lng}&per_page=20`;var n=e(379),t=e.n(n),o=e(795),a=e.n(o),i=e(569),c=e.n(i),s=e(565),d=e.n(s),l=e(216),u=e.n(l),p=e(589),g=e.n(p),h=e(426),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;let v,m,y=!0;const b=new class{constructor(r){this.baseURL=r}get(r){return fetch(this.baseURL+r).then((r=>r.json()))}put(r,n){return this._send("put",r,n)}post(r,n){return this._send("post",r,n)}delete(r,n){return this._send("delete",r,n)}_send(r,n,e){return fetch(this.baseURL+n,{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((r=>r.json()))}}("https://api.openbrewerydb.org/breweries"),x=document.querySelector(".menu"),w=document.querySelector(".map-page-container"),S=document.querySelector(".map-container"),k=document.querySelector(".close"),T=document.querySelector("#form"),M=document.querySelector("#submit-btn"),E=document.querySelector("#random"),q=document.querySelector(".details-container"),P=document.querySelector("#city-input"),C=document.querySelector("#around-me-btn"),_=[E,C,M,P],$=async r=>{try{const n=await b.get(r);let e="";if(0===n.length)return void(x.innerHTML="<p>Sorry no breweries found in this area</p>");n.forEach((r=>{e+=`\n           <div class='card' id=${r.id}>\n                <h3>${r.name}</h3>\n                <div>${r.city}</div>\n           </div>`})),x.innerHTML=e,document.querySelectorAll(".card").forEach((r=>{r.addEventListener("click",(r=>j(r.currentTarget.id)))}))}catch(r){console.error(r,"fetch")}},H=async()=>{try{const n=await new Promise(((r,n)=>{navigator.geolocation.getCurrentPosition(r,n,void 0)}));m={lat:n.coords.latitude,lng:n.coords.longitude},$(r(m))}catch(r){console.error(r,"location"),alert("No location found, please make sure location is on and restart the app")}},j=async r=>{let n;!r||(n=await b.get("/"+r),n.latitude&&n.longitude)?(r||(_.map((r=>r.disabled=!1)),v&&v.remove&&(v.eachLayer((r=>v.removeLayer(r))),v.remove(),S.innerHTML='<div id="map"></div>')),w.classList.toggle("visible"),x.classList.toggle("visible"),r&&(_.map((r=>r.disabled=!0)),y?(z(m),setTimeout((()=>{v.flyTo([n.latitude,n.longitude],12,{duration:3})}),800),setTimeout((()=>{L.marker([n.latitude,n.longitude]).addTo(v).bindPopup(n.name).openPopup()}),1200)):(z({lat:n.latitude,lng:n.longitude}),L.marker([n.latitude,n.longitude]).addTo(v).bindPopup(n.name).openPopup()),q.innerHTML=`\n        <h3>${n.name}</h3>\n        <p>${n.phone||"number unknown"}</p>\n        <p>${n.street||"street unknown"}</p>\n        <p>${n.city||"city unknown"}</p>\n    `)):alert("Sorry, this entry has no coordinates.")},z=(r={lat:51.505,lng:-.09})=>{v=L.map("map").setView([r.lat,r.lng],8),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(v),L.marker([r.lat,r.lng]).addTo(v).bindPopup("You are here").openPopup()};C.addEventListener("click",(r=>{r.preventDefault(),y=!0;try{H()}catch(r){console.error(r,"around")}})),E.addEventListener("click",(r=>{r.preventDefault();try{$("/random"),y=!1}catch(r){console.error(r,"random")}})),T.addEventListener("submit",(n=>{n.preventDefault();try{$(r(P.value)),P.value="",y=!1}catch(r){console.error(r,"city")}})),k.addEventListener("click",(()=>j())),H()})()})();