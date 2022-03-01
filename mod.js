// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(t,r){return t[r]},r=function(t,r){return t.get(r)},n=function(t,r,n){t[r]=n},e=function(t,r,n){t.set(n,r)};var u=function(u){var a=Boolean(u.get&&u.set);return{data:u,accessors:a,getter:a?r:t,setter:a?e:n}};var a=function(t){var r;return(r=u(t)).accessors?function(t){var r,n,e,u,a;for(r=t.data,u=t.getter,e=r.length,n=[],a=0;a<e;a++)n.push(u(r,a));return n}(r):function(t){var r,n,e;for(n=t.length,r=[],e=0;e<n;e++)r.push(t[e]);return r}(t)};export{a as default};
//# sourceMappingURL=mod.js.map
