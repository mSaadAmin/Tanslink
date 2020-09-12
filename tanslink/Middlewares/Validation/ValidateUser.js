const { check, validationResult } = require("express-validator");

const UserValidation = () => {
  return [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name Should Be Atleast Three Characters Long"),
    check("role")
      .isLength({ min: 1 })
      .withMessage("Role Should Be Atleast Three Characters Long"),
    check("contact")
      .isLength({ min: 11 })
      .withMessage("Contact Should have Atleast 11 digits"),
    check("email")
      .isEmail()
      .isLength({ min: 3 })
      .withMessage("Email Should Be Atleast Three Characters Long"),
    check("password")
      .isLength({ min: 8 })
      .isAlphanumeric()
      .withMessage(
        "Password Should have min 8 Characters and should be aplhanumeric"
      )
  ];
};

const updateUserValidation = () => {
  return [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name Should Be Atleast Three Characters Long"),
    check("role")
      .isLength({ min: 1 })
      .withMessage("Role Should Be Atleast Three Characters Long"),
    check("contact")
      .isLength({ min: 11 })
      .withMessage("Contact Should have Atleast 11 digits"),
    check("email")
      .isEmail()
      .isLength({ min: 3 })
      .withMessage("Email Should Be Atleast Three Characters Long"),
    check("password")
      .isLength({ min: 8 })
      .isAlphanumeric()
      .withMessage(
        "Password Should have min 8 Characters and should be aplhanumeric"
      )
  ];
};

const LoginUserRules = () => {
  return [
    check("email")
      .isLength({ min: 1 })
      .isEmail(),
    check("password")
      .isLength({ min: 7 })
      .isAlphanumeric()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  validate,
  UserValidation,
  LoginUserRules,
  updateUserValidation
};
