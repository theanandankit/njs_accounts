const log4js = require("log4js");

// Configure the logger
log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'logs/myapp.log' }
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'info' }
  }
});

// Create a logger instance
const log4jsLogger = log4js.getLogger('myapp');

// Log some messages
log4jsLogger.info('Hello, Log4js!');
log4jsLogger.warn('Watch out for that banana peel!');
log4jsLogger.error('Oops, something went wrong!');
