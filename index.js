module.exports = function (options) {

    function nodeSecureRandom(length, chars) {
        var crypto = require('crypto');
        var randomBytes = crypto.randomBytes(length);

        return bytesToChars(randomBytes, chars);
    }

    function browserSecureRandom(length, chars) {
        var isSupported = 'crypto' in window && !!window.crypto && 'getRandomValues' in window.crypto;
        if (!isSupported) {
            throw new Error("secure random is unsupported in this browser. " +
            "You can change the \"secure\" option to false for pseudo-random values.");
        }
        var randomBytes = window.crypto.getRandomValues(new Uint8Array(length));
        return bytesToChars(randomBytes, chars);
    }

    function bytesToChars(byteArray, chars) {
        var index;
        var result = "";
        for (var i = 0; i < byteArray.length; i++) {
            index = byteArray[i] % chars.length;
            result += chars[index];
        }
        return result;
    }

    function mathRandom(length, chars) {
        var result = "";
        var index;
        for (var i = length; i > 0; --i) {
            index = Math.round(Math.random() * (chars.length - 1));
            result += chars[index];
        }
        return result;
    }


    var isNode = typeof module !== 'undefined' && module.exports;


    //defaults
    options = options || {};
    options.length = options.length || 16;
    options.chars = options.chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    options.prefix = options.prefix || "";
    options.suffix = options.suffix || "";
    options.secure = options.secure || true;

    var result;


    if (options.secure) {
        if (isNode) {
            result = nodeSecureRandom(options.length, options.chars);
        } else {
            result = browserSecureRandom(options.length, options.chars);
        }
    } else {
        result = mathRandom(options.length, options.chars);
    }
    return options.prefix + result + options.suffix;
};




