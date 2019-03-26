import React, {Component} from "react";


export default class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [{name:"Tom Smith" ,age:45 ,faveFood:"Chili"},
                {name:"Shaun Branford" ,age:28 ,pet:"Kangoroo" ,nickName:"Kale"},
                {name:"Samuel Chavez" ,pet:"Hippo",faveFood:"Bananas"},
                {name:"kel" ,age:19 ,pet:"Baboon" ,faveDrink:"Orange Soda"}],
            userInput: "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
        console.log(this.state);
    }

    filter(input) {
        let filter = []
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].hasOwnProperty(input)){
                filter.push(this.state.unFilteredArray[i])
            } 
         }
            this.setState({filteredArray: filter})
            console.log(this.state.filteredArray);
        }
    

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={ (event) => this.filter(this.state.userInput)}>Filter</button>
                <span className="resultBox filterObjectPB">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }

}