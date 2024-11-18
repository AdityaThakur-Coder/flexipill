const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(taskRoutes);

sequelize.sync({ force: false }) 
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
