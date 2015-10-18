/*jslint bitwise: true, browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

(function () {
    "use strict";

    // Vars
    var XP = require('expandjs');

    /**************************************************************************/

    /**
     * Creates a hash to be used in inibin/troybin files.
     *
     * @param {string} category
     * @param {string} variable
     * @param {*} hex
     * @return {Object}
     */
    module.exports = function inibinHash(category, variable, hex) {
        //Vars
        var hash  = 0,
            mask = 65599,
            i;

        //Checking
        XP.assertArgument(XP.isString(category), 1, 'String');
        XP.assertArgument(XP.isString(variable), 2, 'String');

        //Preparing
        category = XP.lowerCase(category);
        variable = XP.lowerCase(variable);
        if (XP.isDefined(hex)) { hex = true; }

        //Working
        for (i = 0; i < category.length; i += 1) {
            hash =  XP.toInt(category.charCodeAt(i) + mask * (hash >>> 0)) >>> 0;
        }
        hash = XP.toInt(65599 * (hash >>> 0) + 42) >>> 0;
        for (i = 0; i < variable.length; i += 1) {
            hash = XP.toInt(variable.charCodeAt(i) + mask * (hash >>> 0)) >>> 0;
        }

        //Returning
        return hex ? '0x' + XP.toHex(hash) : hash;
    };

}());
