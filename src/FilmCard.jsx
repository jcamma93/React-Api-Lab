import React from 'react'


const FilmCard = (props) => {
    return (
        <div className="row">
            <div className="card card-control my-4 w-75">
                <div className="card-header">
                    <h2>{(props.title)}</h2>
                </div>
                <div className="card-body">
                    <h5>Synopsis:</h5>{(props.description)}
                    <hr />
                   <h6>Release Date:</h6> {(props.release_date)}
                   <hr />
                   <h6>Directed by:</h6> {(props.director)}
                   <hr />
                  <h6>Run Time:</h6> {(props.running_time)} minutes
                </div>
            </div>
        </div>

    );
};

export default FilmCard;