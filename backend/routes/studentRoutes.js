const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/students', studentController.getStudents);
router.post('/students', studentController.createStudent);
router.delete('/students/:rollno', studentController.deleteStudent);

module.exports = router;
