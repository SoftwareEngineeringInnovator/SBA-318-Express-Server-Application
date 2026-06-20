// Middleware to logs the request
function requestLogger(req, res, next) {
  const currentTime = new Date().toLocaleString();

  console.log(`[${currentTime}] ${req.method} ${req.url}`);

  // next() tells Express to continue to the next middleware or route.
  next();
}

export default requestLogger;