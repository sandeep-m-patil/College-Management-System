const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const sequelize = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', studentRoutes);


sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });
