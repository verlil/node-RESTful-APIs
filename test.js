var logger = require('./logger');

function testBreak() {
    logger.url = '123456';
}

module.exports.break = testBreak;