const Logger = require('./logger');
const logger = new Logger();

// register listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called: ', arg)
})

logger.log('message');