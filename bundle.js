// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).copy=t()}(this,(function(){"use strict";var e=function(e,t){return e[t]},t=function(e,t){return e.get(t)},n=function(e,t,n){e[t]=n},r=function(e,t,n){e.set(n,t)};var o=function(o){var u=Boolean(o.get&&o.set);return{data:o,accessors:u,getter:u?t:e,setter:u?r:n}};return function(e){var t;return(t=o(e)).accessors?function(e){var t,n,r,o,u;for(t=e.data,o=e.getter,r=t.length,n=[],u=0;u<r;u++)n.push(o(t,u));return n}(t):function(e){var t,n,r;for(n=e.length,t=[],r=0;r<n;r++)t.push(e[r]);return t}(e)}}));
//# sourceMappingURL=bundle.js.map
