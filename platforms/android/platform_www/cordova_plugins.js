cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
        "id": "cordova-plugin-keyboard.keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "id": "ionic-plugin-keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-console": "1.0.2",
    "cordova-plugin-whitelist": "1.2.1",
    "cordova-plugin-splashscreen": "3.1.0",
    "cordova-plugin-keyboard": "1.1.4",
    "ionic-plugin-keyboard": "2.0.1"
};
// BOTTOM OF METADATA
});