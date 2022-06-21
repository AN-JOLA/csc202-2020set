import logger, {appName, dummyFunction, dummyArrowFunction} from './tools.js';
logger("Welcome! We are now having fun with modularity");
logger("Welcome! The application name is " + appName + ". There is a function that returns " + dummyFunction() );
logger(`Welcome! The application name is "${appName}". There is a function that returns "${dummyFunction()}".`);

logger(`Welcome! The application name is "${appName}".There is a function that returns "${dummyArrowFunction()}".`);