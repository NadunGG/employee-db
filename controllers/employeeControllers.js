const db = require('../models');
const Employee = db.employeeModel
const {
  employeeSchema: employeeValidator,
  partialEmployeeSchema: partialEmployeeValidator,
} = require('../validators/employeeValidators');

module.exports = {
  async createEmployee(req, res) {
    try {
      const { error } = employeeValidator.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const employee = await Employee.create(req.body);
      return res.status(201).json(employee);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getAllEmployees(req, res) {
    try {
      const employees = await Employee.findAll();
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getEmployeeById(req, res) {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  async updateEmployee(req, res) {
    try {
      const { error } = employeeValidator.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      const employee = await Employee.findByPk(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      await employee.update(req.body);
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  async updateEmployeePartial(req, res) {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      const { error } = partialEmployeeValidator.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      await employee.update(req.body);
      return res.status(200).json(employee);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  async deleteEmployee(req, res) {
    try {
      const employee = await Employee.findByPk(req.params.id);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }

      await employee.destroy();
      return res.status(204).json({message: 'Record Deleted Successfully!'});
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
