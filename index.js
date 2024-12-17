const express = require('express');
const dotenv = require('dotenv');
const prismaRoutes = require('./routes/prismaRoutes');

dotenv.config();
const app = express();
app.use(express.json());


// prisma test routes 
app.use('/api/prisma', prismaRoutes);

// Catch undefined routes
app.use((req, res) => {
    res.status(404).json({
      error: 'Route not found',
    });
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;