const EventEmitter = require('events');

var url = 'test url';

class Logger extends EventEmitter {
    log(message) {
        // send HTTP request
        console.log(message);

        // raise an event
        this.emit('messageLogged', { id: 1, url: 'another url' });
    }
}

module.exports = Logger;