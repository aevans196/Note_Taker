// Custom middleware that logs out the type and path of each request to the server
const middlewear = (req, res, next) => {
    switch (req.method) {
      case 'GET': {
        console.info(`${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`Cannot post anything at this time`);
    }
  
    next();
  };
  
  exports.middlewear = middlewear;