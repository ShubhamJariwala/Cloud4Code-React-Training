import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props)

        this.state={
            count: 0,
        }
    }
    increment(){
        this.state.count++;
        this.setState({
            count:this.state.count
        })
        console.log(this.state.count)
    }
    /*
    display(){
        this.setState({
            message: "Cloud 4 Code"
        })
    }*/
    render(){
        return(
            <div>
                <h1>{this.state.count} {this.state.message}</h1>
                <button onClick={()=> this.increment()}>Click the  Button</button>
                
            </div>

        )
    }
}

export default Counter