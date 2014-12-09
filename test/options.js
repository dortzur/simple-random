describe('options', function () {
    var chai = require('chai');
    var should = chai.should();

    chai.use(require('chai-string'));
    var simpleRandom = require("../index.js");

    it('should have length of 32', function () {
        var random = simpleRandom({length: 32});
        random.should.have.length(32);
    });
    it('should start with _tmp_', function () {
        var random = simpleRandom({prefix: "_tmp_"});
        random.should.startsWith("_tmp");
    })

});
