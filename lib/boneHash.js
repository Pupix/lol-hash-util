(function () {
    'use strict';

    var XP = require('expandjs');

    /**************************************************************************/

    /**
     * Creates a hash used in skl files for bones.
     *
     * @param {string} name - A bone name
     * @return {number}
     */
    module.exports = function boneHash(name) {
        var i,
            hash = 0,
            temp = 0,
            mask = 4026531840; // 0xF0000000

        name = XP.lowerCase(name);

        for (i = 0; i < name.length; i += 1) {
            hash = (hash << 4) + name.charCodeAt(i);
            temp = hash & mask;

            if (temp !== 0) {
                hash = hash ^ (temp >>> 24);
                hash = hash ^ temp;
            }
        }

        return hash;
    };

}());
