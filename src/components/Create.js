import { useState } from "react";
import axios from 'axios'

// Return the Create
const Create = () => {
  // array of countries of json
  // explain: it's a react hook that allows you to add state to a functional component
  const [name, setName] = useState('');
  const [flag, setFlag] = useState('');
  const [founded, setFounded] = useState('');
  const [population, setPopulation] = useState('');
  const [populationRanks, setpopulationRanks] = useState('');
  const [area, setArea] = useState('');
  const [gdp, setGdp] = useState('');
  const [fact1, setFact1] = useState('');
  const [fact2, setFact2] = useState('');
  const [fact3, setFact3] = useState('');
  const [fact4, setFact4] = useState('');
  const [fact5, setFact5] = useState('');

  // hands the sumbmits of title of the countries
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Name: ${name}, Flag: ${flag}, Founded: ${founded}`);
    
    const counter = {
      name: name,
      flag: flag,
      founded: founded,
      population: population,
      populationRanks: populationRanks,
      area: area,
      gdp: gdp,
      facts: {
        fact1: fact1,
        fact2: fact2,
        fact3: fact3,
        fact4: fact4,
        fact5: fact5
      } 
    };
  
    // get counters from localhost:4000
    axios.post('http://localhost:4000/api/countries', counter)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  // form to upload counters to the server
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Counter Name: </label>
          <input type="text"
            className="form-control"
            value={name}
            onChange={(e) => { setName(e.target.value) }} /* user add countries name*/ />
          <br/>
          <label>Add Counter Flag: </label>
          <input type="text"
            className="form-control"
            value={flag}
            onChange={(e) => { setFlag(e.target.value) }} /* user add countries flag*/ />
          <br/>
          <label>Add Counter Founded: </label>
          <input type="text"
            className="form-control"
            value={founded}
            onChange={(e) => { setFounded(e.target.value) }} /* user add countries founded*/ />
          <br/>
          <label>Add Counter Population: </label>
          <input type="text"
            className="form-control"
            value={population}
            onChange={(e) => { setPopulation(e.target.value) }} /* user add countries population*/ />
          <br/>
          <label>Add Counter Population Ranks: </label>
          <input type="text"
            className="form-control"
            value={populationRanks}
            onChange={(e) => { setpopulationRanks(e.target.value) }} /* user add countries populationRanks*/ />
          <br/>
          <label>Add Counter Area: </label>
          <input type="text"
            className="form-control"
            value={area}
            onChange={(e) => { setArea(e.target.value) }} /* user add countries area*/ />
          <br/>
          <label>Add Counter GDP: </label>
          <input type="text"
            className="form-control"
            value={gdp}
            onChange={(e) => { setGdp(e.target.value) }} /* user add countries gdp*/ />
          <br/>
          <label>Add Counter fact: </label>
          <label>Add Fact 1: </label>
          <input type="text"
            className="form-control"
            value={fact1}
            onChange={(e) => setFact1(e.target.value)} /* user add countries fact1*/ />
          <br/>
          <label>Add Fact 2: </label>
          <input type="text"
            className="form-control"
            value={fact2}
            onChange={(e) => setFact2(e.target.value)} /* user add countries fact2*/ />
          <br/>
          <label>Add Fact 3: </label>
          <input type="text"
            className="form-control"
            value={fact3}
            onChange={(e) => setFact3(e.target.value)} /* user add countries fact3*/ />
          <br/>
          <label>Add Fact 4: </label>
          <input type="text"
            className="form-control"
            value={fact4}
            onChange={(e) => setFact4(e.target.value)} /* user add countries fact4*/ />
          <br/>
          <label>Add Fact 5: </label>
          <input type="text"
            className="form-control"
            value={fact5}
            onChange={(e) => setFact5(e.target.value)} /* user add countries fact5*/ />
          <br/>
        </div>
        <input type="submit" value="Add countries" />
      </form>
    </div>
  );
}
  
export default Create;