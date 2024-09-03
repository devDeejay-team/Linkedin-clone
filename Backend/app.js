require('dotenv').config();
const express = require('express');
const cors = require('cors');
const profileRoutes = require('./routes/profileRoutes');

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${res.statusCode}`);
  next();
});

app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
