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
const countersSchema = new mongoose.Schema({
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
 
const Counter = mongoose.model('counter', countersSchema);

// post request for counters
app.post('/api/counters', async (req, res)=>{

    const { name, flag, founded, population, populationRanks, area, gdp, facts } = req.body;
   
    const newCounter = new Counter({ name, flag, founded, population, populationRanks, area, gdp, facts });
    await newCounter.save();
   
    res.status(201).json({ message: 'Movie created successfully', counter: newCounter });
});

// gets a specific by it ID
app.get('/api/counters/:id', async (req, res) => {
    let counter = await Counter.findById(req.params.id );
    res.send(counter);
});

// update the counters on the database
app.put('/api/counters/:id', async (req, res) => {
    let counter = await Counter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(counter);
});

// get json of all counters
app.get('/api/counters', async (req, res) => {
    const counters = await Counter.find({});
    res.status(200).json({counters:counters});
});

// get json of one counter by id
app.get('/api/counters/:id', async (req, res) => {
    const counter = await Counter.findById(req.params.id);
    res.send(counter);
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
    res.send('WellCome to Countres-Geo-Guessing server');
});

// listen request of port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// delete counters for list and DB
app.delete('/api/counters/:id', async (req, res) => {
  
    console.log('Deleting movie with ID:', req.params.id);
    const counter = await Counter.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Movie deleted successfully", counter });
    
});