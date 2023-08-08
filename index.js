require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
const db = require('./models');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/employees', employeeRoutes);

// Sync Sequelize Models with Database
db.sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
