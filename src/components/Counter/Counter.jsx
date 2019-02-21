import React, {Component} from 'react'

export class Counter extends Component {
    state = {
        id: this.props.id,
        value: this.props.value
    };

    // use arrow function when creating event handler, to avoid the need to bind
    handleClickUp = () => {
        const val = this.state.value + 1;
        this.setState({value: val});
        // use setState to inform the system that there is a change. Also, avoid
        // changing original value
    }

    handleClickDown = () => {
        const val = this.state.value - 1;
        if (this.state.value !== 0) {
            this.setState({value: val});
        } else {
            console.log("Counter is 0");
        }
    }

    evaluateClass = () => {
        return this.state.value > 0
            ? "primary"
            : "warning"

    }

    handleReset = () => {
        this.setState({value: 0});
    }

    render() {
        return (
            <React.Fragment>
                <h2>
                    <span className={`badge badge-${this.evaluateClass()} m-2`}>{this.state.value}</span>
                </h2>
                <button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={this.handleClickUp}>+</button>
                <button
                    type="button"
                    className="btn btn-warning m-2"
                    onClick={this.handleClickDown}>-</button>
                <button type="button" className="btn btn-info m-2" onClick={this.handleReset}>Reset
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => this.props.handleDelete(this.state.id)}>Delete</button>
            </React.Fragment>
        )
    };
}

export default Counter
