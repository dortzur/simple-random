module.exports = function (options) {

    function secureRandom(length, chars) {
        var crypto = require('crypto');
        var result = "";
        var randomBytes = crypto.randomBytes(length);
        var index;
        for (var i = 0; i < length; i++) {
            index = randomBytes[i] % chars.length;
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



    //defaults
    options = options || {};
    options.length = options.length || 16;
    options.chars = options.chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    options.prefix = options.prefix || "";
    options.suffix = options.suffix || "";
    options.secure = options.secure || true;

    var result;
    if (options.secure) {
        result = secureRandom(options.length, options.chars);
    } else {
        result = mathRandom(options.length, options.chars);
    }
    return options.prefix + result + options.suffix;
};




