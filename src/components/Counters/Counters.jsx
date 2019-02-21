import React, {Component} from 'react'
import {counters} from '../../sampleData.js'
import Counter from '../Counter/Counter'

export class Counters extends Component {
    state = {
        data: counters
    };

    /* created in the parent, instead of child: if the button is in the child component but the states need to be maintained in the parent*/
    handleDelete = (counterId) => {
        const filteredData = this
            .state
            .data
            .filter(counter => counter.id !== counterId);
        this.setState({data: filteredData});
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                {data.length === 0 && <h2>No more counters</h2>}
                {data.map(counter => (<Counter
                    key={counter.id}
                    id={counter.id}
                    value={counter.value}
                    handleDelete={this.handleDelete}/>))
}
            </div>
        )
    }
}
