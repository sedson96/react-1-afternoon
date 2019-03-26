import React, {Component} from "react";


export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

    }

    handleChange(val) {
        this.setState({ userInput: val });
      }

    split(input) {
        let arr = input.split(",");
        let even = [];
        let odd = [];
        arr.map((num => {
            if (num % 2 === 0) {
                even.push(parseInt(num));
            } else {
                odd.push(parseInt(num));
            }
        }))
        this.setState({evenArray: even, oddArray: odd} )
    }
    


    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ (event) => this.split(this.state.userInput)}>Split</button>
                <span className="resultBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultBox">Odds: {JSON.stringify(this.state.oddArray)}</span>

            </div>
        )
    }
}