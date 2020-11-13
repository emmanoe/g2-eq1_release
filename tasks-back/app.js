

const express =  require('express');
const taskRoutes = require('./routes/task');
const app = express();
const cors = require('cors');
var bodyParser = require("body-parser");
const config =require('./DB');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

let mongoose = require('mongoose');

  mongoose.connect(
    config.DB,
    { useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie!!!!!! !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(5000, function() {
  console.log('Task app listening on port 5000!');
});

app.use('/tasks/', taskRoutes);


module.exports  = app;