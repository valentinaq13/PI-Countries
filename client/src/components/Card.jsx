import React from 'react';

function Card({name, flag, continent}) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{continent}</h3>
            <img src={flag} alt="img not found" width="200px" height="250px" />
        </div>
    )
}

export default Card
