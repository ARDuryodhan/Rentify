const errorMiddleware = (err, req, res, next) => {
  console.error("Error caught in middleware:", err);
  const status = err.status || 500;
  const message = err.message || "Backend Error";
  const extraDetails = err.extraDetails || "Error from backend side";
  console.log(extraDetails);

  return res.status(status).json({ message, extraDetails });
};

module.exports = errorMiddleware;
