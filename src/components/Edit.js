import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// get old text of movies to edit
export default function Edit(props) {
  let { id } = useParams();
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
  const navigate = useNavigate();

// fetching and updating data from server.js
useEffect(() => {
    axios.get('http://localhost:4000/api/counters' + id)
        .then((response) => {
            setName(response.data.name);
            setFlag(response.data.flag);
            setFounded(response.data.founded);
            setPopulation(response.data.population);
            setpopulationRanks(response.data.populationRanks);
            setArea(response.data.area);
            setGdp(response.data.gdp);
            setFact1(response.data.fact1);
            setFact2(response.data.fact2);
            setFact3(response.data.fact3);
            setFact4(response.data.fact4);
            setFact5(response.data.fact5);
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

// submit updated movie send to the DB
const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { id,  name: name,
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
    axios.put('http://localhost:4000/api/counters' + id, newMovie)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

// return html of the Edit of movie Handle Submit
return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Add Counter Name: </label>
                <input type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} /* user add counter name*/ />
                <br/>
                <label>Add Counter Flag: </label>
                <input type="text"
                    className="form-control"
                    value={flag}
                    onChange={(e) => { setFlag(e.target.value) }} /* user add counter flag*/ />
                <br/>
                <label>Add Counter Founded: </label>
                <input type="text"
                    className="form-control"
                    value={founded}
                    onChange={(e) => { setFounded(e.target.value) }} /* user add counter founded*/ />
                <br/>
                <label>Add Counter Population: </label>
                <input type="text"
                    className="form-control"
                    value={population}
                    onChange={(e) => { setPopulation(e.target.value) }} /* user add counter population*/ />
                <br/>
                <label>Add Counter Population Ranks: </label>
                <input type="text"
                    className="form-control"
                    value={populationRanks}
                    onChange={(e) => { setpopulationRanks(e.target.value) }} /* user add counter populationRanks*/ />
                <br/>
                <label>Add Counter Area: </label>
                <input type="text"
                    className="form-control"
                    value={area}
                    onChange={(e) => { setArea(e.target.value) }} /* user add counter area*/ />
                <br/>
                <label>Add Counter GDP: </label>
                <input type="text"
                    className="form-control"
                    value={gdp}
                    onChange={(e) => { setGdp(e.target.value) }} /* user add counter gdp*/ />
                <br/>
                <label>Add Counter fact: </label>
                <label>Add Fact 1: </label>
                <input type="text"
                    className="form-control"
                    value={fact1}
                    onChange={(e) => setFact1(e.target.value)} /* user add counter fact1*/ />
                <br/>
                <label>Add Fact 2: </label>
                <input type="text"
                    className="form-control"
                    value={fact2}
                    onChange={(e) => setFact2(e.target.value)} /* user add counter fact2*/ />
                <br/>
                <label>Add Fact 3: </label>
                <input type="text"
                    className="form-control"
                    value={fact3}
                    onChange={(e) => setFact3(e.target.value)} /* user add counter fact3*/ />
                <br/>
                <label>Add Fact 4: </label>
                <input type="text"
                    className="form-control"
                    value={fact4}
                    onChange={(e) => setFact4(e.target.value)} /* user add counter fact4*/ />
                <br/>
                <label>Add Fact 5: </label>
                <input type="text"
                    className="form-control"
                    value={fact5}
                    onChange={(e) => setFact5(e.target.value)} /* user add counter fact5*/ />
                <br/>
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Counter" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}