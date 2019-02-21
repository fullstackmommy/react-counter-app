import React, {Component} from 'react'

export class Counter extends Component {

    evaluateClass = () => {
        return this.props.value > 0
            ? "primary"
            : "warning"

    }

    render() {
        return (
            <React.Fragment>
                <h2>
                    <span className={`badge badge-${this.evaluateClass()} m-2`}>{this.props.value}</span>
                </h2>
                <button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={() => this.props.handleClickUp(this.props.id)}>+</button>
                <button
                    type="button"
                    className="btn btn-warning m-2"
                    onClick={() => this.props.handleClickDown(this.props.id)}>-</button>
                <button
                    type="button"
                    className="btn btn-secondary m-2"
                    onClick={() => this.props.handleReset(this.props.id)}>Reset</button>
                <button
                    className="btn btn-secondary"
                    onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
            </React.Fragment>
        )
    };
}

export default Counter
