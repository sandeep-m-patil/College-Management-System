const Students = require('../models/Student');

exports.getStudents = async (req, res) => {
    try {
        const students = await Students.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createStudent = async (req, res) => {
    try {
        const { rollno, addmission_date, full_name, email, date_of_birth, gender, address, contact_number, department_id, year_of_study, year_of_passing } = req.body;
        if (!rollno || !addmission_date || !full_name || !email || !date_of_birth || !gender || !address || !contact_number || !department_id || !year_of_study || !year_of_passing) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const student = await Students.create({ rollno, addmission_date, full_name, email, date_of_birth, gender, address, contact_number, department_id, year_of_study, year_of_passing });
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteStudent = async (req, res) => {
    try {
        const { rollno } = req.params;
        const student = await Students.findByPk(rollno);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        await student.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};