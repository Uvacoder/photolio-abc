(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r,i,o,a,c,l,s,u,f,b,d,p=n(0),h=n.n(p),j=n(16),m=n.n(j),O=n(3),g=n(61),x=n(4),v=n(1),y=function(e){var t=e.children,n=e.href,r=e.self;return Object(v.jsx)("a",{href:n,target:r?"_self":"_blank",rel:"noreferrer",children:t})},w=x.b.div(r||(r=Object(O.a)(["\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n\n  text-align: center;\n"]))),k=x.b.p(i||(i=Object(O.a)(["\n  font-size: 12px;\n  opacity: 0.6;\n"]))),E=x.b.div(o||(o=Object(O.a)(["\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=x.b.div(a||(a=Object(O.a)(["\n  height: 1.2em;\n  width: 1px;\n  background-color: black;\n  margin: 0 10px;\n"]))),z=Object(g.a)(new Date,"yyyy"),S=function(){return Object(v.jsxs)(w,{children:[Object(v.jsxs)(E,{children:[Object(v.jsx)(y,{href:"https://www.zekro.de/imprint",children:"Imprint"}),Object(v.jsx)(I,{}),Object(v.jsx)(y,{href:"https://www.zekro.de",children:"Homepage"}),Object(v.jsx)(I,{}),Object(v.jsx)(y,{href:"https://github.com/zekrotja/photolio",children:"GitHub"})]}),Object(v.jsxs)(k,{children:["\xa9 ",z," Ringo Hoffmann"]})]})},P=n(21),M=n(6),C=n(63),R="500px",H=x.b.div(c||(c=Object(O.a)(["\n  padding: 0 5px 25px 5px;\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: ",") {\n    flex-flow: column;\n\n    > * {\n      margin: 0 auto;\n    }\n  }\n"])),R),B=x.b.div(l||(l=Object(O.a)(["\n  cursor: pointer;\n\n  > * {\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n  }\n\n  > h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n    font-size: 52px;\n  }\n\n  > h2 {\n    font-weight: 300;\n    font-size: 14px;\n    letter-spacing: 0.25em;\n    text-transform: uppercase;\n  }\n"]))),L=x.b.div(s||(s=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 50px;\n\n  @media screen and (max-width: ",") {\n    margin: 20px auto 10px auto;\n  }\n"])),R),A=Object(x.b)(P.b)(u||(u=Object(O.a)(["\n  position: relative;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 18px;\n  text-transform: lowercase;\n  text-decoration: none;\n  color: black;\n\n  margin-right: 20px;\n  &:last-child {\n    margin-right: 0px;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: -10px;\n    left: 0;\n    width: ","%;\n    margin-left: ","%;\n    height: 5px;\n    background-color: black;\n    transition: all 0.2s ease;\n  }\n"])),(function(e){return"entering"===e.state||"entered"===e.state?100:0}),(function(e){return"exiting"===e.state?100:0})),T=function(e){var t=e.to,n=e.title,r=Object(M.f)();return Object(v.jsx)(C.a,{in:r.pathname===t,timeout:200,children:function(e){return Object(v.jsx)(A,{to:t,state:e,children:n})}})},V=function(){var e=Object(M.e)();return Object(v.jsxs)(H,{children:[Object(v.jsxs)(B,{onClick:function(){return e.push("/")},children:[Object(v.jsx)("h1",{children:"zekro"}),Object(v.jsx)("h2",{children:"Photography"})]}),Object(v.jsxs)(L,{children:[Object(v.jsx)(T,{to:"/",title:"Gallery"}),Object(v.jsx)(T,{to:"/about",title:"About"}),Object(v.jsx)(T,{to:"/contact",title:"Contact"})]})]})},D=x.b.div(f||(f=Object(O.a)(["\n  position: relative;\n  max-width: 1300px;\n  min-height: 100vh;\n  margin: 0 auto;\n  padding-top: 20px;\n  padding-bottom: 100px;\n"]))),F=x.b.div(b||(b=Object(O.a)(["\n  padding: ",";\n"])),(function(e){var t;return null!==(t=e.padding)&&void 0!==t?t:"0 5px"})),G=n(62),U=["title","titleId"];function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function J(e,t){var n=e.title,r=e.titleId,i=N(e,U);return p.createElement("svg",Y({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"DeviantArt"):n?p.createElement("title",{id:r},n):null,d||(d=p.createElement("path",{d:"M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z"})))}var _,W=p.forwardRef(J),X=(n.p,["title","titleId"]);function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Q(e,t){var n=e.title,r=e.titleId,i=K(e,X);return p.createElement("svg",q({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"GitHub"):n?p.createElement("title",{id:r},n):null,_||(_=p.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))}var Z,$=p.forwardRef(Q),ee=(n.p,["title","titleId"]);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function re(e,t){var n=e.title,r=e.titleId,i=ne(e,ee);return p.createElement("svg",te({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"Instagram"):n?p.createElement("title",{id:r},n):null,Z||(Z=p.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})))}var ie,oe=p.forwardRef(re),ae=(n.p,["title","titleId"]);function ce(){return ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ce.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function se(e,t){var n=e.title,r=e.titleId,i=le(e,ae);return p.createElement("svg",ce({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"E-Mail"):n?p.createElement("title",{id:r},n):null,ie||(ie=p.createElement("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"})))}var ue,fe=p.forwardRef(se),be=(n.p,["title","titleId"]);function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function he(e,t){var n=e.title,r=e.titleId,i=pe(e,be);return p.createElement("svg",de({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"Spotify"):n?p.createElement("title",{id:r},n):null,ue||(ue=p.createElement("path",{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"})))}var je,me=p.forwardRef(he),Oe=(n.p,["title","titleId"]);function ge(){return ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}function xe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ve(e,t){var n=e.title,r=e.titleId,i=xe(e,Oe);return p.createElement("svg",ge({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"TikTok"):n?p.createElement("title",{id:r},n):null,je||(je=p.createElement("path",{d:"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"})))}var ye,we=p.forwardRef(ve),ke=(n.p,["title","titleId"]);function Ee(){return Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ee.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function ze(e,t){var n=e.title,r=e.titleId,i=Ie(e,ke);return p.createElement("svg",Ee({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"Twitter"):n?p.createElement("title",{id:r},n):null,ye||(ye=p.createElement("path",{d:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"})))}var Se,Pe=p.forwardRef(ze),Me=(n.p,["title","titleId"]);function Ce(){return Ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ce.apply(this,arguments)}function Re(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function He(e,t){var n=e.title,r=e.titleId,i=Re(e,Me);return p.createElement("svg",Ce({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"Unsplash"):n?p.createElement("title",{id:r},n):null,Se||(Se=p.createElement("path",{d:"M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"})))}var Be,Le=p.forwardRef(He),Ae=(n.p,["title","titleId"]);function Te(){return Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function De(e,t){var n=e.title,r=e.titleId,i=Ve(e,Ae);return p.createElement("svg",Te({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),void 0===n?p.createElement("title",{id:r},"YouTube"):n?p.createElement("title",{id:r},n):null,Be||(Be=p.createElement("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})))}var Fe,Ge,Ue,Ye,Ne,Je,_e,We,Xe,qe,Ke,Qe,Ze=p.forwardRef(De),$e=(n.p,x.b.div(Fe||(Fe=Object(O.a)(["\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  width: 50%;\n  max-height: 60vh;\n  aspect-ratio: 500 / 590;\n  max-width: 500px;\n  float: left;\n  margin: 5px 40px 20px 0;\n\n  @media screen and (max-width: ",") {\n    float: unset;\n    width: 100%;\n    aspect-ratio: 500 / 400;\n    background-position-y: 25%;\n    max-height: unset;\n  }\n"])),(function(e){return e.url}),R)),et=x.b.div(Ge||(Ge=Object(O.a)(["\n  text-align: justify;\n  padding: 0 50px;\n\n  > img {\n    width: 50%;\n    max-width: 500px;\n    float: left;\n    margin: 5px 40px 20px 0;\n  }\n"]))),tt=x.b.div(Ue||(Ue=Object(O.a)(["\n  > * {\n    opacity: 0.7;\n    &:hover {\n      opacity: 1;\n    }\n\n    transition: all 0.2s ease;\n\n    margin-right: 10px;\n    &::last-child {\n      margin-right: 0;\n    }\n\n    > svg {\n      width: 30px;\n    }\n  }\n"]))),nt=Object(G.a)(new Date(1998,12,12),{roundingMethod:"floor"}),rt=function(){return Object(v.jsx)(F,{children:Object(v.jsxs)(et,{children:[Object(v.jsx)($e,{url:"assets/avatar.jpg"}),Object(v.jsx)("h2",{children:"Hey \ud83d\udc4b"}),Object(v.jsxs)("p",{children:["Thank you for being interested in my work! My name is Ringo (but I'm also known as zekro) and I'm ",nt," old. I'm actually working as a full-stack developer in germany, but in the middle of 2021, I discovered photography as another passion of mine."]}),Object(v.jsxs)("p",{children:["Years before, I was working a lot on digital design and web video production. I created personal web designs for friends of mine (feel free to discover some of them on my"," ",Object(v.jsx)(y,{href:"https://www.deviantart.com/zekrotja",children:"DeviantArt profile"}),"). Also, all graphical designs for my"," ",Object(v.jsx)(y,{href:"https://youtube.com/zekrommaster110",children:"YouTube channel"})," ","are completely self-made."]}),Object(v.jsx)("p",{children:"Now, I primarily focus on expressing myself, my feelings and my perspectives in photography and photo editing. As you can see in my Work, I'm mainly interested in street photography but I am really excited to discover and getting into more topics like portrait, car, architecture and wildlife photography in the future."}),Object(v.jsx)("h2",{children:"Get to know me \u2709\ufe0f"}),Object(v.jsxs)(tt,{children:[Object(v.jsx)(y,{href:"mailto:contact@zekro.de",children:Object(v.jsx)(fe,{})}),Object(v.jsx)(y,{href:"https://instagram.com/zekrotja",children:Object(v.jsx)(oe,{})}),Object(v.jsx)(y,{href:"https://unsplash.com/@zekro",children:Object(v.jsx)(Le,{})}),Object(v.jsx)(y,{href:"https://deviantart.com/zekrotja",children:Object(v.jsx)(W,{})}),Object(v.jsx)(y,{href:"https://twitter.com/zekrotja",children:Object(v.jsx)(Pe,{})}),Object(v.jsx)(y,{href:"https://youtube.com/zekrommaster110",children:Object(v.jsx)(Ze,{})}),Object(v.jsx)(y,{href:"https://github.com/zekrotja",children:Object(v.jsx)($,{})}),Object(v.jsx)(y,{href:"https://open.spotify.com/user/zekrotja",children:Object(v.jsx)(me,{})}),Object(v.jsx)(y,{href:"https://tiktok.com/zekrotja",children:Object(v.jsx)(we,{})})]})]})})},it=function(){return Object(v.jsx)(F,{children:Object(v.jsx)("div",{children:Object(v.jsx)("i",{children:"soon\u2122\ufe0f"})})})},ot=n(15),at=n(40),ct=Object(x.b)(at.a)(Ye||(Ye=Object(O.a)(["\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  transition: opacity 0.25s ease;\n  opacity: ",";\n  cursor: ",";\n"])),(function(e){return"exited"===e.state?0:1}),(function(e){return e.clickable?"pointer":"auto"})),lt=x.b.div(Ne||(Ne=Object(O.a)(["\n  position: relative;\n"]))),st=function(e){var t=e.image,n=e.imageURL,r=e.height,i=e.width,o=e.onClick,a=Object(p.useState)(!1),c=Object(ot.a)(a,2),l=c[0],s=c[1],u=r||"number"!==typeof i?null:Math.floor(i*(1/t.dimensions.ratio)),f=i||"number"!==typeof i?null:Math.floor(i*t.dimensions.ratio);return Object(v.jsxs)(lt,{onClick:function(){return null===o||void 0===o?void 0:o.call(undefined,t.id)},children:[Object(v.jsx)("img",{src:n,width:i,height:r,onLoad:function(){return s(!0)},alt:""}),Object(v.jsx)(C.a,{in:!l,timeout:0,children:function(e){var n,a;return Object(v.jsx)(ct,{hash:t.blurhash.hash,width:null!==(n=null!==i&&void 0!==i?i:f)&&void 0!==n?n:"100%",height:null!==(a=null!==r&&void 0!==r?r:u)&&void 0!==a?a:"100%",resolutionX:t.blurhash.components.width,resolutionY:t.blurhash.components.height,state:e,clickable:!!o})}})]})},ut=n(13),ft=n(24),bt=null!==(Je="https://gallery-api.zekro.de/")?Je:"/api",dt=function(){function e(){Object(ut.a)(this,e)}return Object(ft.a)(e,null,[{key:"list",value:function(){return window.fetch("".concat(bt,"/images")).then((function(e){return e.json()}))}},{key:"getMeta",value:function(e){return window.fetch("".concat(bt,"/images/").concat(e,"/meta")).then((function(e){return e.json()}))}},{key:"getImageSource",value:function(e){return"".concat(bt,"/images/").concat(e)}},{key:"getThumbnailSource",value:function(e,t){return"".concat(bt,"/images/").concat(e,"/thumbnail?width=").concat(t)}}]),e}(),pt=Object(x.b)(st)(_e||(_e=Object(O.a)(["\n  width: 100%;\n"]))),ht=Object(x.b)(F)(We||(We=Object(O.a)(["\n  margin-bottom: 50px;\n"]))),jt=x.b.div(Xe||(Xe=Object(O.a)(["\n  margin-top: 20px;\n  text-align: center;\n  font-family: 'Montserrat', sans-serif;\n\n  > p {\n    margin: 0 0 10px 0;\n  }\n"]))),mt=x.b.p(qe||(qe=Object(O.a)(["\n  font-size: 14px;\n  ","\n  ","\n"])),(function(e){return e.light?"opacity: 0.5;":""}),(function(e){return e.italic?"font-style: italic;":""})),Ot=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.filter((function(e){return!!e})).join(e)},gt=function(){var e,t,n,r,i=Object(M.g)(),o=Object(p.useState)(),a=Object(ot.a)(o,2),c=a[0],l=a[1];return Object(p.useEffect)((function(){dt.getMeta(i.params.id).then((function(e){return l(e)}))}),[i,l]),Object(v.jsx)(ht,{children:c&&[Object(v.jsx)(pt,{image:c,imageURL:dt.getImageSource(c.id),width:"100%"}),Object(v.jsxs)(jt,{children:[c.exif&&[Object(v.jsxs)("p",{children:[Ot(" ",c.exif.bodymake,c.exif.bodymodel),"\xa0with\xa0",Ot(" ",c.exif.lensmake,c.exif.lensmodel)]}),Object(v.jsx)("p",{children:Ot(" \u2014 ",(n="ISO ",r=c.exif.iso,r?"".concat(n).concat(r):void 0),c.exif.fstop,c.exif.exposuretime)})]||Object(v.jsx)(mt,{italic:!0,light:!0,children:"No exif data existent."}),Object(v.jsx)(mt,{children:Object(g.a)(new Date(null!==(e=null===(t=c.exif)||void 0===t?void 0:t.taken)&&void 0!==e?e:c.timestamp),"eeee, do LLLL yyyy \u2014 HH:MM:SS O")})]})]})},xt=n(39),vt=function(){for(var e={default:5},t=1;t<=5;t++)e[260*t]=t-1;return e}(),yt=Object(x.b)(xt.a)(Ke||(Ke=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n\n  > div {\n    width: fit-content !important;\n\n    > * {\n      margin: ","px;\n    }\n  }\n"])),5),wt=function(){var e=Object(p.useState)(),t=Object(ot.a)(e,2),n=t[0],r=t[1],i=Object(M.e)();Object(p.useEffect)((function(){dt.list().then(r)}),[r]);var o=null===n||void 0===n?void 0:n.map((function(e){return Object(v.jsx)(st,{image:e,width:250,imageURL:dt.getThumbnailSource(e.id,250),onClick:function(e){return i.push("/images/".concat(e))}},e.id)}));return Object(v.jsx)(yt,{className:"",breakpointCols:vt,children:o})},kt=Object(x.a)(Qe||(Qe=Object(O.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5 {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 600;\n  }\n\n  a {\n    color: black;\n  }\n"])));var Et=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(P.a,{children:Object(v.jsxs)(D,{children:[Object(v.jsx)(V,{}),Object(v.jsx)(M.a,{exact:!0,path:"/",component:wt}),Object(v.jsx)(M.a,{exact:!0,path:"/about",component:rt}),Object(v.jsx)(M.a,{exact:!0,path:"/contact",component:it}),Object(v.jsx)(M.a,{exact:!0,path:"/images/:id",component:gt}),Object(v.jsx)(S,{})]})}),Object(v.jsx)(kt,{})]})},It=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))};n(57);m.a.render(Object(v.jsx)(h.a.StrictMode,{children:Object(v.jsx)(Et,{})}),document.getElementById("root")),It(console.table)}},[[58,1,2]]]);
//# sourceMappingURL=main.7d8d3389.chunk.js.map