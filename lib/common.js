function mathRandom(length, chars) {
    var result = "";
    var index;
    for (var i = length; i > 0; --i) {
        index = Math.round(Math.random() * (chars.length - 1));
        result += chars[index];
    }
    return result;
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

var _digits = "0123456789";
var _letters = "abcdefghijklmnopqrstuvwxyz";

function initOptions(options) {

    //defaults
    options = options || {};
    options.length = options.length || 16;
    options.chars = options.chars || "";
    options.prefix = options.prefix || "";
    options.suffix = options.suffix || "";
    options.digits = options.digits || true;
    options.letters = options.letters || true;
    options.lettersCaseSensitive = options.lettersCaseSensitive || true;

    if (!options.chars) {
        if (options.digits) {
            options.chars += _digits;
        }
        if (options.letters) {
            options.chars += _letters;
        }
        if (options.lettersCaseSensitive) {
            options.chars += _letters.toUpperCase();
        }
    }

    if (typeof options.secure === "undefined") {
        options.secure = false;
    }
    return options;
}
module.exports = {
    initOptions: initOptions,
    mathRandom: mathRandom,
    bytesToChars: bytesToChars
};