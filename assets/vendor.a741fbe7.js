function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function i(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function l(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n,e){t.classList[e?"add":"remove"](n)}let g;function b(t){g=t}const k=[],y=[],v=[],_=[],x=Promise.resolve();let w=!1;function E(t){v.push(t)}let j=!1;const A=new Set;function N(){if(!j){j=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];b(n),S(n.$$)}for(b(null),k.length=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];A.has(n)||(A.add(n),n())}v.length=0}while(k.length);for(;_.length;)_.pop()();w=!1,j=!1,A.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const C=new Set;let L;function O(){L={r:0,c:[],p:L}}function q(){L.r||o(L.c),L=L.p}function z(t,n){t&&t.i&&(C.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),L.c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function F(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let s=n.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const u=t&&(n.current=t)(s);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(O(),B(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),q())})):n.block.d(1),u.c(),z(u,1),u.m(n.mount(),n.anchor),a=!0),n.block=u,n.blocks&&(n.blocks[o]=u),a&&N()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=function(){if(!g)throw new Error("Function called outside component initialization");return g}();if(t.then((t=>{b(e),o(n.then,1,n.value,t),b(null)}),(t=>{if(b(e),o(n.catch,2,n.error,t),b(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function M(t,n,e){const o=n.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,e)}function P(t){t&&t.c()}function T(t,e,c,s){const{fragment:u,on_mount:a,on_destroy:i,after_update:l}=t.$$;u&&u.m(e,c),s||E((()=>{const e=a.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(E)}function D(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,n){-1===t.$$.dirty[0]&&(k.push(t),w||(w=!0,x.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,r,c,s,u,i,l,f=[-1]){const d=g;b(n);const h=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};l&&l(h.root);let p=!1;if(h.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&G(n,t)),e})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),r.target){if(r.hydrate){const t=($=r.target,Array.from($.childNodes));h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();r.intro&&z(n.$$.fragment),T(n,r.target,r.anchor,r.customElement),N()}var $;b(d)}class I{$destroy(){D(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{I as S,$ as a,u as b,s as c,a as d,l as e,h as f,f as g,i as h,H as i,F as j,z as k,B as l,m,t as n,p as o,O as p,q,P as r,c as s,d as t,M as u,T as v,D as w};