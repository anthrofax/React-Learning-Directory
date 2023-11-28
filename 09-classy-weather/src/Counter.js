import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.handleDecrementCounter = this.handleDecrementCounter.bind(this);
        this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
    }

    handleDecrementCounter() {
        this.setState({count: this.state.count - 1})
    }

    handleIncrementCounter() {
        this.setState({count: this.state.count + 1})
    }
    
    render() {
        const date = new Date("24 April 2004");
        date.setDate(date.getDate() + this.state.count)
        return (
            <div>
                <button onClick={this.handleDecrementCounter}>-</button>
                <span>{date.toDateString()}</span>
                <button onClick={this.handleIncrementCounter}>+</button>
            </div>
        )
    }
}

export default Counter;