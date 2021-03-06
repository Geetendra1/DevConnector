const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 400 })) {
    errors.text = "post need to be between 10 and 400 char";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "text is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
