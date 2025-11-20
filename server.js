const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Route principale modifiée
app.get('/', (req, res) => {
  res.json({ mssg: 'Bienvenue sur notre application de fitness' });
});

// Nouvelle route pour la santé de l'API
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Routes pour les workouts
app.use('/api/workouts', workoutRoutes);

// Connexion à la base de données
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Connecté à la base de données & serveur démarré sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données:', error);
  }) 