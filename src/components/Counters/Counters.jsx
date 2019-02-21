import React, {Component} from 'react'
import Counter from '../Counter/Counter'

export class Counters extends Component {

    render() {
        const {data} = this.props;

        return (
            <div>
                <button className="btn btn-danger" onClick={this.props.handleResetAll}>Reset All</button>
                {data.length === 0 && <h2>No more counters</h2>}
                {data.map(counter => (<Counter
                    key={counter.id}
                    id={counter.id}
                    value={counter.value}
                    handleDelete={this.props.handleDelete}
                    handleClickUp={this.props.handleClickUp}
                    handleClickDown={this.props.handleClickDown}
                    handleReset={this.props.handleReset}/>))
}
            </div>
        )
    }
}
