import React, {Component} from "react";


export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ["Basketball","Soccer","Football","Tennis","Rugbee","Golf","Ultimate Frisbee", "Criket"],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
        console.log(this.state)
    }

    filter(input) {
        let filtered = []
        for(let i = 0; i < this.state.unFilteredArray.length;i++) {
            if (this.state.unFilteredArray[i].includes(input)) {
                filtered.push(this.state.unFilteredArray[i])
            }
        }
        this.setState({filteredArray: filtered})
    }


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={(event) => this.filter(this.state.userInput)}>Filter</button>
                <span className ="resultsBox filterStringPB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}