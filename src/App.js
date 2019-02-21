import React, {Component} from 'react'
import {Counters} from './components/Counters/Counters.jsx'

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Counter
        </h1>
        <Counters/>
      </React.Fragment>
    )
  }
}

export default App;
