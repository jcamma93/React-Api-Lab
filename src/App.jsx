import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([])
    const [displayFilms, setDisplayFilms] = useState(false);
    const [displayPeople, setDisplayPeople] = useState(false);
    const setShowFilms = e => {
        setDisplayFilms(true);
        setDisplayPeople(false);
    }

    const setShowPeople = e => {
        setDisplayPeople(true);
        setDisplayFilms(false)
    }

    useEffect(() => {
        fetch("http://api-ghibli.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setFilms(data));
    }, []);


    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(data => setPeople(data));
    })

    if (displayFilms == false && displayPeople == false) {
        return (
            <div>
                <h1>Studio Ghibli Database</h1>
                <button className="btn btn-primary" onClick={setShowFilms}>Display Films</button>
                <button className="btn btn-primary" onClick={setShowPeople}>Display People</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Studio Ghibli Database</h1>
            {displayFilms && films.map((flms) => (

                <FilmCard title={flms.title}
                    description={flms.description}
                    release_date={flms.release_date}
                    director={flms.director}
                    running_time={flms.running_time} />

            ))}

            {displayPeople && people.map((ppl) => (

                <PeopleCard name={ppl.name}
                    gender={ppl.gender}
                    age={ppl.age}
                    eye_color={ppl.eye_color}
                    hair_color={ppl.hair_color} />

            ))}
        </div>
    );
};

export default App;