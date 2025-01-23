/**
 * Validator constants
 */
const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_FILE = "FILE";

/**
 * Validator functions
 */
export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });

/**
 * Validate function
 * @param {string} value - value to be validated
 * @param {array} validators - validator functions
 * @returns {boolean} - true if validation passes, false otherwise
 */
export const validate = (value, validators) => {
  let isValid = true;

  // Iterate over validators and check if value is valid
  for (const validator of validators) {
    switch (validator.type) {
      case VALIDATOR_TYPE_REQUIRE:
        // Check if value is not empty
        isValid = isValid && value.trim().length > 0;
        break;
      case VALIDATOR_TYPE_MINLENGTH:
        // Check if value length is greater than or equal to min length
        isValid = isValid && value.trim().length >= validator.val;
        break;
      case VALIDATOR_TYPE_MAXLENGTH:
        // Check if value length is less than or equal to max length
        isValid = isValid && value.trim().length <= validator.val;
        break;
      case VALIDATOR_TYPE_MIN:
        // Check if value is greater than or equal to min value
        isValid = isValid && +value >= validator.val;
        break;
      case VALIDATOR_TYPE_MAX:
        // Check if value is less than or equal to max value
        isValid = isValid && +value <= validator.val;
        break;
      case VALIDATOR_TYPE_EMAIL:
        // Check if value is a valid email address
        isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        break;
      default:
        // If validator type is not recognized, set isValid to false
        isValid = false;
        break;
    }
  }

  return isValid;
};
