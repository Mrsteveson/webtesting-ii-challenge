import React from 'react';

function Display(props) {
    return(
        <div>
            <h2><span>Strikes: </span>{props.strikes}</h2>
            <h2><span>Balls: </span>{props.balls}</h2>
            <h2><span>Fouls: </span>{props.fouls}</h2>
            <h2><span>Hits: </span>{props.hits}</h2>
        </div>
    )
}

export default Display;