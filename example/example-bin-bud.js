/**
 * Bud file for LICENSE
 */

"use strict";

var apeTmpl = require('ape-tmpl');

module.exports = apeTmpl.binBud({
    signature: {
        "name": "mock-bin",
        "commands": [
            {
                "name": "sing",
                "desc": "Sing a song",
                "args": [
                    {
                        "name": "song",
                        "optional": false
                    }
                ],
                "options": [
                    {
                        "name": "mood",
                        "short": "p",
                        "type": "string",
                        "desc": "Singing mood."
                    },
                    {
                        "name": "volume",
                        "short": "v",
                        "type": "number",
                        "desc": "Singing volume"
                    }
                ]
            }
        ]
    }
});

if (!module.parent) {
    // This will generate "LICENSE"
    require('coz').render(__filename);
}