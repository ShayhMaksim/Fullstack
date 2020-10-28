import React from 'react'

function CalculationDisplay(props){

    return (
            <input
                value={props.text}
                readOnly={true}
                className="calculator-display"
            />
    );

}

export default CalculationDisplay;