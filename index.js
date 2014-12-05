module.exports = function (length, chars) {
    function randomChar(chars) {
        return chars[Math.round(Math.random() * (chars.length - 1))];
    }

    length = length || 16;
    chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += randomChar(chars);
    }
    return result;
};




