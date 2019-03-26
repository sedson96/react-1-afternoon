import React, {Component} from "react";


export default class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    palindrome(input) {
        let palindrome = false
        let str = ""
        for(let i = input.length; i >= 0; i--) {
            str += input.charAt(i);
        }
        if (input === str) {
            palindrome = true
        }
        this.setState({palindrome : palindrome})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange ={(event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.palindrome(this.state.userInput)}></button>
                <span className="resultsBox">{JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}