const Joi = require('joi');

const employeeSchema = Joi.object({
  empNo: Joi.string().required(),
  empName: Joi.string().required(),
  empAddressLine1: Joi.string().required(),
  empAddressLine2: Joi.string(),
  empAddressLine3: Joi.string(),
  empDateOfJoin: Joi.date().required(),
  empStatus: Joi.boolean().required(),
  empImage: Joi.string().required(),
});

const partialEmployeeSchema = Joi.object({
  empName: Joi.string(),
  empAddressLine1: Joi.string(),
  empAddressLine2: Joi.string(),
  empAddressLine3: Joi.string(),
  empDateOfJoin: Joi.date(),
  empStatus: Joi.boolean(),
  empImage: Joi.string(),
});

module.exports = { employeeSchema, partialEmployeeSchema };
