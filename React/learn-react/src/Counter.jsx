import React from "react"
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initialValue
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidUpdate() {
        console.log("Update! Re rendering")
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>Click Me!</button>
                <button onClick={this.decrement}>Decrement</button>
                <h1>The Score is: {this.state.count}</h1>
            </div>
        )
    }
}

export default Counter;