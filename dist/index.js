/** @license Apache-2.0 */

'use strict';

/**
* The minimum base 10 exponent for a subnormal double-precision floating-point number.
*
* @module @stdlib/constants-float64-min-base10-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float64-min-base10-exponent-subnormal' );
* // returns -324
*/


// MAIN //

/**
* The minimum base 10 exponent for a subnormal double-precision floating-point number.
*
* @constant
* @type {integer32}
* @default -324
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL = -324|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL;
