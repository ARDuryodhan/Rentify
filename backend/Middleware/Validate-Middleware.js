const { z } = require("zod");

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody =await schema.parseAsync(req.body);
    req.body=parseBody;
    next();
    
  } catch (err) {
    const status = 422;
    const messages = "Fill the input field properly";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      messages,
      extraDetails,
    };
    console.log(error);
    next(error);
  }
};

module.exports = validate;
