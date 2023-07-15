const Joi = require("joi");
const httpStatus = require("http-status");
const { pickWhichCorrect } = require("../utils/pick");

const validate = (schema) => (req, res, next) => {
  const validSchema = ["params", "query", "body"];
  const object = pickWhichCorrect(req, Object.keys(validSchema));

  const { value, error } = Joi.compile(validSchema).validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }

  Object.assign(req, value);
  return next();
};

module.exports = {
  validate,
};
