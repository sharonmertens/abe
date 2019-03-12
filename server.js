// =======================================
//              DEPENDENCIES
// =======================================

const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

// =======================================
//             CONFIGURATION
// =======================================

const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/' + 'abe';

// connect to Mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...');
});

// Error / Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// =======================================
//             MIDDLEWARE
// =======================================

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

// =======================================
//               ROUTES
// =======================================

// localhost:3000
app.get('/', (req, res) => {
  res.send('ABE Set Up');
});

// =======================================
//              LISTENER
// =======================================

app.listen(port, () => {
  console.log(`ABE App listening on port: ${port}`);
});
