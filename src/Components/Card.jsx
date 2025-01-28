import React from 'react';

const Card = ({name, title, rating}) => {
    return (
        <div>
             <h1>{name}</h1>
            <p>{title}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Card;
