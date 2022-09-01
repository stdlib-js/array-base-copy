// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t,n){return t[n]}function n(t,n){return t.get(n)}function r(t,n,r){t[n]=r}function e(t,n,r){t.set(r,n)}function u(u){var o;return o=function(u){var o=Boolean(u.get&&u.set);return{data:u,accessors:o,getter:o?n:t,setter:o?e:r}}(u),o.accessors?function(t){var n,r,e,u,o;for(n=t.data,u=t.getter,e=n.length,r=[],o=0;o<e;o++)r.push(u(n,o));return r}(o):function(t){var n,r,e;for(r=t.length,n=[],e=0;e<r;e++)n.push(t[e]);return n}(u)}export{u as default};
//# sourceMappingURL=mod.js.map
