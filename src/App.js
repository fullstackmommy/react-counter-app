import React, {Component} from 'react'
import {Counters} from './components/Counters/Counters'
import Total from './components/Total/Total'
import {counters} from './sampleData.js'

export class App extends Component {

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
    const countnumCounter = this.state.data.length;
    const totalCount = this
      .state
      .data
      .reduce((acc, element) => {
        return acc + element.value;
      }, 0)

    return (
      <div className="container">
        <h1>Counter
        </h1>
        <Counters
          data={this.state.data}
          handleClickUp={this.handleClickUp}
          handleClickDown={this.handleClickDown}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
          handleResetAll={this.handleResetAll}/>
        <Total numCounter={countnumCounter} totalCount={totalCount}/>
      </div>
    )
  }
}

export default App;
