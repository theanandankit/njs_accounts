import pino from 'pino';

// Create a logger instance
const logger = pino({ name: 'myapp' });

// Log some messages
logger.info('Hello, Pino!');
logger.warn('Watch out for that banana peel!');
logger.error('Oops, something went wrong!');
