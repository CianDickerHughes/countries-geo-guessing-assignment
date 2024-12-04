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
    axios.get('http://localhost:4000/api/countries/' + id)
        .then((response) => {
            setName(response.data.name || '');
            setFlag(response.data.flag || '');
            setFounded(response.data.founded || '');
            setPopulation(response.data.population || '');
            setpopulationRanks(response.data.populationRanks || '');
            setArea(response.data.area || '');
            setGdp(response.data.gdp || '');
            if (response.data.facts) {
                setFact1(response.data.facts.fact1 || '');
                setFact2(response.data.facts.fact2 || '');
                setFact3(response.data.facts.fact3 || '');
                setFact4(response.data.facts.fact4 || '');
                setFact5(response.data.facts.fact5 || '');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}, [id]);

// submit updated movie send to the DB
const handleSubmit = (event) => {
    event.preventDefault();
    const newCounter = { id,  name, flag, founded, population,
        populationRanks, area, gdp, 
        facts: { fact1, fact2, fact3, fact4, fact5 }
    };
    axios.put('http://localhost:4000/api/countries/' + id, newCounter)
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
                <label>Edit Counter Name: </label>
                <input type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value) } /* user add counter name*/ />
                <br/>
                <label>Edit Counter Flag: </label>
                <input type="text"
                    className="form-control"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value) } /* user add counter flag*/ />
                <br/>
                <label>Edit Counter Founded: </label>
                <input type="text"
                    className="form-control"
                    value={founded}
                    onChange={(e) => setFounded(e.target.value) } /* user add counter founded*/ />
                <br/>
                <label>Edit Counter Population: </label>
                <input type="text"
                    className="form-control"
                    value={population}
                    onChange={(e) => setPopulation(e.target.value) } /* user add counter population*/ />
                <br/>
                <label>Edit Counter Population Ranks: </label>
                <input type="text"
                    className="form-control"
                    value={populationRanks}
                    onChange={(e) => setpopulationRanks(e.target.value) } /* user add counter populationRanks*/ />
                <br/>
                <label>Edit Counter Area: </label>
                <input type="text"
                    className="form-control"
                    value={area}
                    onChange={(e) => setArea(e.target.value) } /* user add counter area*/ />
                <br/>
                <label>Edit Counter GDP: </label>
                <input type="text"
                    className="form-control"
                    value={gdp}
                    onChange={(e) => setGdp(e.target.value) } /* user add counter gdp*/ />
                <br/>
                <label>Edit Counter fact: </label><br></br>
                <label>Edit Fact 1: </label>
                <input type="text"
                    className="form-control"
                    value={fact1}
                    onChange={(e) => setFact1(e.target.value)} /* user add counter fact1*/ />
                <br/>
                <label>Edit Fact 2: </label>
                <input type="text"
                    className="form-control"
                    value={fact2}
                    onChange={(e) => setFact2(e.target.value)} /* user add counter fact2*/ />
                <br/>
                <label>Edit Fact 3: </label>
                <input type="text"
                    className="form-control"
                    value={fact3}
                    onChange={(e) => setFact3(e.target.value)} /* user add counter fact3*/ />
                <br/>
                <label>Edit Fact 4: </label>
                <input type="text"
                    className="form-control"
                    value={fact4}
                    onChange={(e) => setFact4(e.target.value)} /* user add counter fact4*/ />
                <br/>
                <label>Edit Fact 5: </label>
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