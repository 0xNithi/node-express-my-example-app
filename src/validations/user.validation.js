const Joi = require('joi');
const { password } = require('./custom.validation');

const updateUser = {
  body: Joi.object()
    .keys({
      username: Joi.string(),
      password: Joi.string().custom(password),
    })
    .min(1),
};

module.exports = {
  updateUser,
};
