import React, {Component} from "react";


export default class Sum extends Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    handleChange1(num) {
        this.setState({num1: num})
    }
    handleChange2(num) {
        this.setState({num2: num})
    }

    sum(num1,num2) {
        let sum = 0
        sum = parseInt(num1) + parseInt(num2)
        this.setState({sum : sum})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"  onChange ={(event) => this.handleChange1(event.target.value)}/>
                <input className="inputLine"  onChange ={(event) => this.handleChange2(event.target.value)}/>
                <button className="confirmationButton" onClick={()=> this.sum(this.state.num1,this.state.num2)}>Get Sum</button>
                <span className="resultsBox">{JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}