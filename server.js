const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
require('dotenv').config();
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Route de base
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to app' });
});

// Routes de workout
app.use('/api/workouts', workoutRoutes);

// Connexion à MongoDB et lancement du serveur
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log('Connected to DB & listening on port', process.env.PORT || 4000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
