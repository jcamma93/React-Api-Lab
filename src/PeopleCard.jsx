import React from 'react'


const PeopleCard = (props) => {
    return (
        <div className="row">
            <div className="card my-4">
                <div className="card-header">
                    <h2>{(props.name)}</h2>
                </div>
                <div className="card-body">
                    <h6>Gender:</h6>{(props.gender)}
                    <hr />
                   <h6>Age:</h6> {(props.age)}
                   <hr />
                   <h6>Eye Color:</h6> {(props.eye_color)}
                   <hr />
                  <h6>Hair Color:</h6> {(props.hair_color)} 
                </div>
            </div>
        </div>

    );
};

export default PeopleCard;