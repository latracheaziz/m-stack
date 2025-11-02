const express =  require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.get('/', (req, res) => {const express = require('express');
const workoutRoutes = require('./routes/workouts');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to app' });
});


app.use('/api/workouts', workoutRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

    res.json({mssg: 'welcom to app' })
})
app.delete


app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_UI)
 .then(() => {
  app.listen(process.env.PORT, () => {
console.log('connecting to db & listening on port 4000', process.env.PORT)
 })

 })
 .catch((error) =>{
  console.log(error)
 })
 
