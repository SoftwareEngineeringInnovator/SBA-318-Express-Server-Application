// This middleware will check if something is missing from the  required fields
function validateIncident(req, res, next) {
  const { userId, title, category, severity, status, description } = req.body;

  if (!userId || !title || !category || !severity || !status || !description) {
    const error = new Error(
      "Please check and provide any of the following missing information: userId, title, category, severity, status, and description."
    );

    error.status = 400;
    return next(error);
  }

  // If everything looks good, we move to the next function.
  next();
}

export default validateIncident;