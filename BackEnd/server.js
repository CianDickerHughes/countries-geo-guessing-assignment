const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());

// Body-parser middleware
// Explain: body-parser is an npm module used to process data sent in an HTTP request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get MongooseDB and login
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.nsxux.mongodb.net/DBCGG');

// Add strings to DB on Mongoose
const countriesSchema = new mongoose.Schema({
    name: String,
    flag: String,
    founded: Number,
    population: Number,
    populationRanks: Number,
    area: Number,
    gdp: String,
    facts: {
        fact1: String,
        fact2: String,
        fact3: String,
        fact4: String,
        fact5: String
    } 
});
 
const Countrie = mongoose.model('countrie', countriesSchema);

// Post request for Countries
app.post('/api/countries', async (req, res)=>{

    const { name, flag, founded, population, populationRanks, area, gdp, facts } = req.body;
   
    const newCountrie = new Countrie({ name, flag, founded, population, populationRanks, area, gdp, facts });
    await newCountrie.save();
   
    res.status(201).json({ message: 'Countrie created successfully', countrie: newCountrie });
});

// Gets a specific by it ID
app.get('/api/countries/:id', async (req, res) => {
    let countrie = await Countrie.findById(req.params.id );
    res.send(countrie);
});

// Update the countries on the database
app.put('/api/countries/:id', async (req, res) => {
    let countrie = await Countrie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(countrie);
});

// Get json of all countrie
app.get('/api/countries', async (req, res) => {
    const countries = await Countrie.find({});
    res.status(200).json({countries:countries});
});

// Get json of one countrie by id
app.get('/api/countries/:id', async (req, res) => {
    const countrie = await Countrie.findById(req.params.id);
    res.send(countrie);
});

// Cors middleware
// Explain: setup allows your frontend app to make API requests to the backend
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Message route 
app.get('/', (req, res) => {
    res.send('WellCome to Countries-Geo-Guessing server');
});

// Listen request of port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Delete countrie for list and DB
app.delete('/api/countries/:id', async (req, res) => {
  
    console.log('Deleting movie with ID:', req.params.id);
    const countrie = await Countrie.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Countrie deleted successfully", countrie });
});