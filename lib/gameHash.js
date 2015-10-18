/*jslint bitwise: true, browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
    "use strict";

    // Vars
    var XP = require('expandjs');

    /**************************************************************************/

    /**
     * Returns the hash of a string (concat of category + variable),
     * the result hash can be used in game to identify skills in
     * the game packets.
     *
     * @param {string} value - e.g. EzrealMysticShot
     * @param {*} hex
     * @return {Object}
     */
    module.exports = function gameHash(value, hex) {
        //Vars
        var hash  = 0,
            mask = 4026531840,
            i;

        //Checking
        XP.assertArgument(XP.isString(value), 1, 'string');

        //Preparing
        value = XP.lowerCase(value);
        if (XP.isDefined(value)) { hex = true; }

        //Working
        for (i = 0; i < value.length; i += 1) {
            hash =  XP.toInt(value.charCodeAt(i) + (16 * (hash >>> 0))) >>> 0;
            if ((hash & mask) !== 0) {
                hash ^= hash & mask ^ ((hash & mask) >>> 24);
            }
        }

        //Returning
        return hex ? '0x' + XP.toHex(hash) : hash;
    };

}());
