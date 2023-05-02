var bunyan = require("bunyan");

const creditCard = "kjgnker";
// Create a logger instance
const bunyanLogger = bunyan.createLogger({ name: creditCard });

// Log some messages
bunyanLogger.info(creditCard);
bunyanLogger.warn('Watch out for that banana peel!');
bunyanLogger.error('Oops, something went wrong!');

process.stdout.write("sgergrtger");
