import React from 'react';

function Display(props) {
    return(
        <div>
            <h1>The Count</h1>
            <h2>Strikes: {props.strikes}</h2>
            <h2>Balls: {props.balls}</h2>
            <h2>Fouls: {props.fouls}</h2>
            <h2>Hits: {props.hits}</h2>
        </div>
    )
}

export default Display;