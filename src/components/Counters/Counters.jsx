import React, {Component} from 'react'
import {counters} from '../../sampleData.js'
import Counter from '../Counter/Counter'

export class Counters extends Component {
    state = {
        data: counters
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                {data.map(counter => (<Counter key={counter.id} id={counter.id} value={counter.value}/>))}
            </div>
        )
    }
}

export default Counters