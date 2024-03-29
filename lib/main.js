/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolveGetter = require( '@stdlib/array-base-resolve-getter' );


// MAIN //

/**
* Copies the elements of an array-like object to a new "generic" array.
*
* @param {Collection} x - input array
* @returns {Array} output array
*
* @example
* var out = copy( [ 1, 2, 3 ] );
* // returns [ 1, 2, 3 ]
*/
function copy( x ) {
	var out;
	var len;
	var get;
	var i;

	// Resolve an accessor for retrieving input array elements:
	get = resolveGetter( x );

	// Get the number of elements to copy:
	len = x.length;

	// Loop over the elements...
	out = [];
	for ( i = 0; i < len; i++ ) {
		out.push( get( x, i ) ); // ensure "fast" elements
	}
	return out;
}


// EXPORTS //

module.exports = copy;
