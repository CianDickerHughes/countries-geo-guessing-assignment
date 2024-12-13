import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Get old text of Countries to edit
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

// Fetching and updating data from server.js
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

// Submit updated Countrie send to the DB
const handleSubmit = (event) => {
    event.preventDefault();
    // Validate numeric fields for Editing Countrie
    if (isNaN(founded) || isNaN(population) || isNaN(populationRanks) || isNaN(area)) {
        alert("Please ensure 'Founded', 'Population', 'Population Ranks', and 'Area' are numbers.");
        return;
    }
    const newCountrie = { id,  name, flag, founded, population,
        populationRanks, area, gdp, 
        facts: { fact1, fact2, fact3, fact4, fact5 }
    };
    axios.put('http://localhost:4000/api/countries/' + id, newCountrie)
        .then((res) => {
            console.log(res.data);
            navigate('/read');
        });
}

// Return html of the Edit of Country Handle Submit
return (
    <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', height: '100vh' }}>
        <h2>Edit {name} to the DataBase</h2>
        <form onSubmit={handleSubmit} style={{ width: '90%' }}>
            <div className="form-group">
                <label>Edit Country Name: </label>
                <input type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value) } /* User add Country name*/ />
                <br/>
                <label>Edit Country Flag: </label>
                <input type="text"
                    className="form-control"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value) } /* User add Country flag*/ />
                <br/>
                <label>Edit Country Founded: </label>
                <input type="text"
                    className="form-control"
                    value={founded}
                    onChange={(e) => setFounded(e.target.value) } /* User add Country founded*/ />
                <br/>
                <label>Edit Country Population: </label>
                <input type="text"
                    className="form-control"
                    value={population}
                    onChange={(e) => setPopulation(e.target.value) } /* User add Country population*/ />
                <br/>
                <label>Edit Country Population Ranks: </label>
                <input type="text"
                    className="form-control"
                    value={populationRanks}
                    onChange={(e) => setpopulationRanks(e.target.value) } /* user add Country populationRanks*/ />
                <br/>
                <label>Edit Country Area: </label>
                <input type="text"
                    className="form-control"
                    value={area}
                    onChange={(e) => setArea(e.target.value) } /* User add Country area*/ />
                <br/>
                <label>Edit Country GDP: </label>
                <input type="text"
                    className="form-control"
                    value={gdp}
                    onChange={(e) => setGdp(e.target.value) } /* User add Country gdp*/ />
                <br/>
                <label>Edit Country fact: </label><br></br>
                <label>Edit Fact 1: </label>
                <input type="text"
                    className="form-control"
                    value={fact1}
                    onChange={(e) => setFact1(e.target.value)} /* User add Country fact1*/ />
                <br/>
                <label>Edit Fact 2: </label>
                <input type="text"
                    className="form-control"
                    value={fact2}
                    onChange={(e) => setFact2(e.target.value)} /* User add Country fact2*/ />
                <br/>
                <label>Edit Fact 3: </label>
                <input type="text"
                    className="form-control"
                    value={fact3}
                    onChange={(e) => setFact3(e.target.value)} /* User add Country fact3*/ />
                <br/>
                <label>Edit Fact 4: </label>
                <input type="text"
                    className="form-control"
                    value={fact4}
                    onChange={(e) => setFact4(e.target.value)} /* User add Country fact4*/ />
                <br/>
                <label>Edit Fact 5: </label>
                <input type="text"
                    className="form-control"
                    value={fact5}
                    onChange={(e) => setFact5(e.target.value)} /* User add Country fact5*/ />
                <br/>
            </div>
            <div className="form-group">
                <input type="submit" value="Edit Country" className="btn btn-primary" />
            </div>
        </form>
    </div>
);
}