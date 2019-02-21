import React, {Component} from 'react'
import {counters} from '../../sampleData.js'
import Counter from '../Counter/Counter'

export class Counters extends Component {
    state = {
        data: counters
    };

    settingState = (counterId, operator) => {
        const copy = [...this.state.data];
        copy
            .find(element => element.id === counterId)
            .value += operator;
        this.setState({data: copy});
    }

    handleClickUp = (counterId) => {
        this.settingState(counterId, 1)
    }

    handleClickDown = (counterId) => {
        this.settingState(counterId, -1)
    }

    /* created in the parent, instead of child: if the button is in the child component but the states need to be maintained in the parent*/
    handleDelete = (counterId) => {
        const filteredData = this
            .state
            .data
            .filter(counter => counter.id !== counterId);
        this.setState({data: filteredData});
    }

    handleResetAll = () => {
        const resetData = this.state.data;
        resetData.map(counter => counter.value = 0);
        this.setState({data: resetData});
    }

    handleReset = (counterId) => {
        const copy = [...this.state.data];
        copy
            .find(element => element.id === counterId)
            .value = 0;
        this.setState({data: copy});
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                <button className="btn btn-danger" onClick={this.handleResetAll}>Reset All</button>
                {data.length === 0 && <h2>No more counters</h2>}
                {data.map(counter => (<Counter
                    key={counter.id}
                    id={counter.id}
                    value={counter.value}
                    handleDelete={this.handleDelete}
                    handleClickUp={this.handleClickUp}
                    handleClickDown={this.handleClickDown}
                    handleReset={this.handleReset}/>))
}
            </div>
        )
    }
}
