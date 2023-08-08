const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControllers');

router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.patch('/:id', employeeController.updateEmployeePartial);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
