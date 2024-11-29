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
mongoose.connect('mongodb+srv://admin:admin@cluster0.g9bhw.mongodb.net/DB14');

// add names to DB on mongoose
const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    poster: String
});
 
const Movie = mongoose.model('Movie', movieSchema);

// post request for movies
app.post('/api/movies', async (req, res)=>{

    const { title, year, poster } = req.body;
   
    const newMovie = new Movie({ title, year, poster });
    await newMovie.save();
   
    res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});

// gets a specific by it ID
app.get('/api/movies/:id', async (req, res) => {
    let movie = await Movie.findById(req.params.id );
    res.send(movie);
});

// update the movies on the database
app.put('/api/movies/:id', async (req, res) => {
    let movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(movie);
});

// get json of all movies
app.get('/api/movies', async (req, res) => {
    const movies = await Movie.find({});
    res.status(200).json({movies:movies});
});

// get json of one movie by id
app.get('/api/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
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
    res.send('Hello World');
});

// listen request of port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// delete movies for list and DB
app.delete('/api/movies/:id', async (req, res) => {
  
    console.log('Deleting movie with ID:', req.params.id);
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Movie deleted successfully", movie });
    
});