import React from 'react';

function DataCard(props) {

    return (
        <React.Fragment>
            <h2>{props.name}</h2>
            <h4>{props.type}</h4>
            <hr/>
        </React.Fragment>
    );
}

export default DataCard;
