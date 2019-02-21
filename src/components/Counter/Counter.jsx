import React, {Component} from 'react'

export class Counter extends Component {
    state = {
        id: 1,
        value: 0
    };

    render() {
        return (
            <h2>
                <span class="badge badge-secondary">{this.state.value}</span>
            </h2>
        )
    }
}
