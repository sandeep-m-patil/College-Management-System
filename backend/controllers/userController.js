const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }

        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

