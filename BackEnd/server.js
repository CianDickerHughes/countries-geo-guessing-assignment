const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors());

// body-parser middleware
// explain: body-parser is an npm module used to process data sent in an HTTP request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// get mongooseDB and login
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.nsxux.mongodb.net/DBCGG');

// add strings to DB on mongoose
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

// post request for Countries
app.post('/api/countries', async (req, res)=>{

    const { name, flag, founded, population, populationRanks, area, gdp, facts } = req.body;
   
    const newCountrie = new Countrie({ name, flag, founded, population, populationRanks, area, gdp, facts });
    await newCountrie.save();
   
    res.status(201).json({ message: 'Movie created successfully', countrie: newCountrie });
});

// gets a specific by it ID
app.get('/api/countries/:id', async (req, res) => {
    let countrie = await Counter.findById(req.params.id );
    res.send(countrie);
});

// update the countries on the database
app.put('/api/countries/:id', async (req, res) => {
    let countrie = await Countrie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(countrie);
});

// get json of all countrie
app.get('/api/countries', async (req, res) => {
    const countries = await Countrie.find({});
    res.status(200).json({countries:countries});
});

// get json of one countrie by id
app.get('/api/countries/:id', async (req, res) => {
    const countrie = await Counter.findById(req.params.id);
    res.send(countri);
});

// cors middleware
// explain: setup allows your frontend app to make API requests to the backend
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// message route 
app.get('/', (req, res) => {
    res.send('WellCome to Countries-Geo-Guessing server');
});

// listen request of port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// delete countrie for list and DB
app.delete('/api/countries/:id', async (req, res) => {
  
    console.log('Deleting movie with ID:', req.params.id);
    const countrie = await Counter.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "countrie deleted successfully", countrie });
    
});