import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch("http://api-ghibli.herokuapp.com/films")
            .then(res => res.json())
            .then(data => setFilms(data));
    }, []);

    useEffect(()=> {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(res=> res.json())
            .then(data => setPeople(data));
    })

    return (
        <div>
            <h1>Studio Ghibli Database</h1>
            {films.map((flms) => (

                <FilmCard title={flms.title}
                    description={flms.description}
                    release_date={flms.release_date}
                    director={flms.director}
                    running_time={flms.running_time} />

            ))}

            {people.map((ppl) => (

                <PeopleCard name={ppl.name} 
                            gender={ppl.gender} 
                            age={ppl.age} 
                            eye_color={ppl.eye_color} 
                            hair_color={ppl.hair_color}/>

            ))}
        </div>
    );
};

export default App;