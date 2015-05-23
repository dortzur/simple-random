var secureContainer = require('./lib/browser_secure');

var randomFactory = require("./lib/simpleRandom");
module.exports = randomFactory.create(secureContainer);
module.exports.isSecureSupported = secureContainer.isSupported;