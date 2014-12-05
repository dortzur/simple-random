module.exports = function (options) {
    function randomChar(chars) {
        return chars[Math.round(Math.random() * (chars.length - 1))];
    }

    //defaults
    options = options || {};
    options.length = options.length || 16;
    options.chars = options.chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    options.prefix = options.prefix || "";
    options.suffix = options.suffix || "";
    var result = '';
    for (var i = options.length; i > 0; --i) {
        result += randomChar(options.chars);
    }
    return options.prefix + result + options.suffix;
};




