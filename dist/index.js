"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var z=require("path"),H=require("fs");function $(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var l=$(z),O=$(H);function L(r){const t=/^\\\\\?\\/.test(r),n=/[^\u0000-\u0080]+/.test(r);return t||n?r:r.replace(/\\/g,"/")}function U(r,t){for(;;){const n=l.default.join(r,t);if(O.default.existsSync(n))return L(n);const e=l.default.dirname(r);if(e===r)return;r=e}}function G(r,t){t===void 0&&(t=!1);var n=r.length,e=0,i="",f=0,a=16,d=0,s=0,v=0,p=0,u=0;function y(o,b){for(var C=0,k=0;C<o||!b;){var h=r.charCodeAt(e);if(h>=48&&h<=57)k=k*16+h-48;else if(h>=65&&h<=70)k=k*16+h-65+10;else if(h>=97&&h<=102)k=k*16+h-97+10;else break;e++,C++}return C<o&&(k=-1),k}function V(o){e=o,i="",f=0,a=16,u=0}function B(){var o=e;if(r.charCodeAt(e)===48)e++;else for(e++;e<r.length&&T(r.charCodeAt(e));)e++;if(e<r.length&&r.charCodeAt(e)===46)if(e++,e<r.length&&T(r.charCodeAt(e)))for(e++;e<r.length&&T(r.charCodeAt(e));)e++;else return u=3,r.substring(o,e);var b=e;if(e<r.length&&(r.charCodeAt(e)===69||r.charCodeAt(e)===101))if(e++,(e<r.length&&r.charCodeAt(e)===43||r.charCodeAt(e)===45)&&e++,e<r.length&&T(r.charCodeAt(e))){for(e++;e<r.length&&T(r.charCodeAt(e));)e++;b=e}else u=3;return r.substring(o,b)}function S(){for(var o="",b=e;;){if(e>=n){o+=r.substring(b,e),u=2;break}var C=r.charCodeAt(e);if(C===34){o+=r.substring(b,e),e++;break}if(C===92){if(o+=r.substring(b,e),e++,e>=n){u=2;break}var k=r.charCodeAt(e++);switch(k){case 34:o+='"';break;case 92:o+="\\";break;case 47:o+="/";break;case 98:o+="\b";break;case 102:o+="\f";break;case 110:o+=`
`;break;case 114:o+="\r";break;case 116:o+="	";break;case 117:var h=y(4,!0);h>=0?o+=String.fromCharCode(h):u=4;break;default:u=5}b=e;continue}if(C>=0&&C<=31)if(P(C)){o+=r.substring(b,e),u=2;break}else u=6;e++}return o}function A(){if(i="",u=0,f=e,s=d,p=v,e>=n)return f=n,a=17;var o=r.charCodeAt(e);if(W(o)){do e++,i+=String.fromCharCode(o),o=r.charCodeAt(e);while(W(o));return a=15}if(P(o))return e++,i+=String.fromCharCode(o),o===13&&r.charCodeAt(e)===10&&(e++,i+=`
`),d++,v=e,a=14;switch(o){case 123:return e++,a=1;case 125:return e++,a=2;case 91:return e++,a=3;case 93:return e++,a=4;case 58:return e++,a=6;case 44:return e++,a=5;case 34:return e++,i=S(),a=10;case 47:var b=e-1;if(r.charCodeAt(e+1)===47){for(e+=2;e<n&&!P(r.charCodeAt(e));)e++;return i=r.substring(b,e),a=12}if(r.charCodeAt(e+1)===42){e+=2;for(var C=n-1,k=!1;e<C;){var h=r.charCodeAt(e);if(h===42&&r.charCodeAt(e+1)===47){e+=2,k=!0;break}e++,P(h)&&(h===13&&r.charCodeAt(e)===10&&e++,d++,v=e)}return k||(e++,u=1),i=r.substring(b,e),a=13}return i+=String.fromCharCode(o),e++,a=16;case 45:if(i+=String.fromCharCode(o),e++,e===n||!T(r.charCodeAt(e)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=B(),a=11;default:for(;e<n&&m(o);)e++,o=r.charCodeAt(e);if(f!==e){switch(i=r.substring(f,e),i){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(o),e++,a=16}}function m(o){if(W(o)||P(o))return!1;switch(o){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function c(){var o;do o=A();while(o>=12&&o<=15);return o}return{setPosition:V,getPosition:function(){return e},scan:t?c:A,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return f},getTokenLength:function(){return e-f},getTokenStartLine:function(){return s},getTokenStartCharacter:function(){return f-p},getTokenError:function(){return u}}}function W(r){return r===32||r===9||r===11||r===12||r===160||r===5760||r>=8192&&r<=8203||r===8239||r===8287||r===12288||r===65279}function P(r){return r===10||r===13||r===8232||r===8233}function T(r){return r>=48&&r<=57}var N;(function(r){r.DEFAULT={allowTrailingComma:!1}})(N||(N={}));function K(r,t,n){t===void 0&&(t=[]),n===void 0&&(n=N.DEFAULT);var e=null,i=[],f=[];function a(s){Array.isArray(i)?i.push(s):e!==null&&(i[e]=s)}var d={onObjectBegin:function(){var s={};a(s),f.push(i),i=s,e=null},onObjectProperty:function(s){e=s},onObjectEnd:function(){i=f.pop()},onArrayBegin:function(){var s=[];a(s),f.push(i),i=s,e=null},onArrayEnd:function(){i=f.pop()},onLiteralValue:a,onError:function(s,v,p){t.push({error:s,offset:v,length:p})}};return Q(r,d,n),i[0]}function Q(r,t,n){n===void 0&&(n=N.DEFAULT);var e=G(r,!1);function i(g){return g?function(){return g(e.getTokenOffset(),e.getTokenLength(),e.getTokenStartLine(),e.getTokenStartCharacter())}:function(){return!0}}function f(g){return g?function(w){return g(w,e.getTokenOffset(),e.getTokenLength(),e.getTokenStartLine(),e.getTokenStartCharacter())}:function(){return!0}}var a=i(t.onObjectBegin),d=f(t.onObjectProperty),s=i(t.onObjectEnd),v=i(t.onArrayBegin),p=i(t.onArrayEnd),u=f(t.onLiteralValue),y=f(t.onSeparator),V=i(t.onComment),B=f(t.onError),S=n&&n.disallowComments,A=n&&n.allowTrailingComma;function m(){for(;;){var g=e.scan();switch(e.getTokenError()){case 4:c(14);break;case 5:c(15);break;case 3:c(13);break;case 1:S||c(11);break;case 2:c(12);break;case 6:c(16);break}switch(g){case 12:case 13:S?c(10):V();break;case 16:c(1);break;case 15:case 14:break;default:return g}}}function c(g,w,E){if(w===void 0&&(w=[]),E===void 0&&(E=[]),B(g),w.length+E.length>0)for(var _=e.getToken();_!==17;){if(w.indexOf(_)!==-1){m();break}else if(E.indexOf(_)!==-1)break;_=m()}}function o(g){var w=e.getTokenValue();return g?u(w):d(w),m(),!0}function b(){switch(e.getToken()){case 11:var g=e.getTokenValue(),w=Number(g);isNaN(w)&&(c(2),w=0),u(w);break;case 7:u(null);break;case 8:u(!0);break;case 9:u(!1);break;default:return!1}return m(),!0}function C(){return e.getToken()!==10?(c(3,[],[2,5]),!1):(o(!1),e.getToken()===6?(y(":"),m(),F()||c(4,[],[2,5])):c(5,[],[2,5]),!0)}function k(){a(),m();for(var g=!1;e.getToken()!==2&&e.getToken()!==17;){if(e.getToken()===5){if(g||c(4,[],[]),y(","),m(),e.getToken()===2&&A)break}else g&&c(6,[],[]);C()||c(4,[],[2,5]),g=!0}return s(),e.getToken()!==2?c(7,[2],[]):m(),!0}function h(){v(),m();for(var g=!1;e.getToken()!==4&&e.getToken()!==17;){if(e.getToken()===5){if(g||c(4,[],[]),y(","),m(),e.getToken()===4&&A)break}else g&&c(6,[],[]);F()||c(4,[],[4,5]),g=!0}return p(),e.getToken()!==4?c(8,[4],[]):m(),!0}function F(){switch(e.getToken()){case 3:return h();case 1:return k();case 10:return o(!0);default:return b()}}return m(),e.getToken()===17?n.allowEmptyContent?!0:(c(4,[],[]),!1):F()?(e.getToken()!==17&&c(9,[],[]),!0):(c(4,[],[]),!1)}var X=K;const M=r=>L(/^[./]/.test(r)?r:`./${r}`),D=r=>O.default.existsSync(r),Y=r=>{try{return JSON.parse(r)}catch{}};function Z(r,t){let n=r;if(n===".."&&(n+="/tsconfig.json"),n.startsWith(".")){let e=l.default.resolve(t,n);if(D(e)&&O.default.statSync(e).isFile()||!e.endsWith(".json")&&(e+=".json",D(e)))return e}else{let e=U(t,l.default.join("node_modules",n));if(e){if(O.default.statSync(e).isDirectory()){const i=l.default.join(e,"package.json");if(D(i)){const f=Y(O.default.readFileSync(i,"utf8"));f&&"tsconfig"in f?e=l.default.join(e,f.tsconfig):e=l.default.join(e,"tsconfig.json")}else e=l.default.join(e,"tsconfig.json");if(D(e))return e}else if(e.endsWith(".json"))return e}else if(!n.endsWith(".json")&&(n+=".json",e=U(t,l.default.join("node_modules",n)),e))return e}throw new Error(`File '${r}' not found.`)}var x=Object.defineProperty,ee=Object.defineProperties,re=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,q=(r,t,n)=>t in r?x(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,j=(r,t)=>{for(var n in t||(t={}))ne.call(t,n)&&q(r,n,t[n]);if(J)for(var n of J(t))te.call(t,n)&&q(r,n,t[n]);return r},ae=(r,t)=>ee(r,re(t));function I(r){var t,n;const e=O.default.realpathSync(r),i=l.default.dirname(e),f=O.default.readFileSync(r,"utf8").trim();let a={};if(f&&(a=X(f),!a||typeof a!="object"))throw new SyntaxError(`Failed to parse JSON: ${r}`);if(a.extends){const d=Z(a.extends,i),s=I(d);if(delete s.references,(t=s.compilerOptions)!=null&&t.baseUrl){const{compilerOptions:p}=s;p.baseUrl=l.default.relative(i,l.default.join(l.default.dirname(d),p.baseUrl))||"./"}s.files&&(s.files=s.files.map(p=>l.default.relative(i,l.default.join(l.default.dirname(d),p)))),s.include&&(s.include=s.include.map(p=>l.default.relative(i,l.default.join(l.default.dirname(d),p)))),delete a.extends;const v=ae(j(j({},s),a),{compilerOptions:j(j({},s.compilerOptions),a.compilerOptions)});s.watchOptions&&(v.watchOptions=j(j({},s.watchOptions),a.watchOptions)),a=v}if((n=a.compilerOptions)!=null&&n.baseUrl){const{compilerOptions:d}=a;d.baseUrl=M(d.baseUrl)}if(a.files&&(a.files=a.files.map(M)),a.include&&(a.include=a.include.map(L)),a.watchOptions){const{watchOptions:d}=a;d.excludeDirectories&&(d.excludeDirectories=d.excludeDirectories.map(s=>L(l.default.resolve(i,s))))}return a}function oe(r=process.cwd(),t="tsconfig.json"){const n=U(r,t);if(!n)return null;const e=I(n);return{path:n,config:e}}const ie=/^\.{1,2}(\/.*)?$/,se=/\*/g,R=(r,t)=>{const n=r.match(se);if(n&&n.length>1)throw new Error(t)};function fe(r){if(r.includes("*")){const[t,n]=r.split("*");return{prefix:t,suffix:n}}return r}const ue=({prefix:r,suffix:t},n)=>n.startsWith(r)&&n.endsWith(t);function ce(r,t,n){return Object.entries(r).map(([e,i])=>(R(e,`Pattern '${e}' can have at most one '*' character.`),{pattern:fe(e),substitutions:i.map(f=>{if(R(f,`Substitution '${f}' in pattern '${e}' can have at most one '*' character.`),!f.startsWith("./")&&!t)throw new Error("Non-relative paths are not allowed when 'baseUrl' is not set. Did you forget a leading './'?");return l.default.join(n,f)})}))}function le(r){if(!r.config.compilerOptions)return null;const{baseUrl:t,paths:n}=r.config.compilerOptions;if(!t&&!n)return null;const e=l.default.resolve(l.default.dirname(r.path),t||"."),i=n?ce(n,t,e):[];return function(a){if(ie.test(a))return[];const d=[];for(const u of i){if(u.pattern===a)return u.substitutions;typeof u.pattern!="string"&&d.push(u)}let s,v=-1;for(const u of d)ue(u.pattern,a)&&u.pattern.prefix.length>v&&(v=u.pattern.prefix.length,s=u);if(!s)return t?[l.default.join(e,a)]:[];const p=a.slice(s.pattern.prefix.length,a.length-s.pattern.suffix.length);return s.substitutions.map(u=>u.replace("*",p))}}exports.createPathsMatcher=le,exports.getTsconfig=oe;
