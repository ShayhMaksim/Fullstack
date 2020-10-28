import React from 'react'
import CalculatorPanel from './CalculatorPanel'

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            result:"",
            numbers:["",""],
            numberIdx:0,
            operation:"",
        };
    }

    operationHandler(operation) {
        if (this.state.numberIdx===1){
            this.equalHandler();
            return;
        }

        if ((operation==="substract"|| operation==="add") && this.state.number[this.state.numberIdx]==="")
        {
            this.numberHandler(operation==="substract" ?"-":"+");
            return;
        }

    }

    setOperation(operation) {
        this.setState(
            {operation:operation}
        )
    }

    nextNumber(){
        const newIdx=this.state.numberIdx===0 ? 1 : 0
        this.setState({
            result: this.state.numbers[newIdx],
            numberIdx:newIdx,
        });
    }

    numberHandler(number) {
        const newNumber=this.state.number[this.state.numberIdx]+number;
        this.updateNumber(newNumber)
    }

    updateNumber(newNumber){
        var newNumbers=this.state.number;
        newNumbers[this.state.numberIdx]=newNumber;
        this.setState({
            result:newNumbers[this.state.numberIdx],
            numbers:newNumbers,
        });
    }

    dotHandler(){
        const newNumber=this.state.numbers[this.state.numberIdx]+".";
        if(isNaN(newNumber)){
            return;
        }

        this.updateNumber(newNumber);
    }

    clearHandler(){

    }

    equalHandler(){

    }

    render(){
        return <div className="calculator-grid-container">
            <CalculatorPanel
                result={this.state.result}
                numberClicked={this.numberHandler.bind(this)}
                operationClicked={this.operationHandler.bind(this)}
                dotClicked={this.dotHandler.bind(this)}
                equaClicked={this.equalHandler.bind(this)}
                clearClicked={this.clearHandler.bind(this)}
            />
        </div>
    }
}

export default Calculator;