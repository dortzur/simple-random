var common = require("./lib/common");
var secure = require('./lib/node_secure');
module.exports = function (options) {
    options = common.initOptions(options);
    var result;
    if (options.secure) {
        var randomBytes = secure.getRandomBytes(options.length);
        result = common.bytesToChars(randomBytes, options.chars);
    } else {
        result = common.mathRandom(options.length, options.chars);
    }
    return options.prefix + result + options.suffix;
};




