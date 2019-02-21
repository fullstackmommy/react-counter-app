import React, {Component} from 'react'
import {Counters} from './components/Counters/Counters.jsx'

export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Counter
        </h1>
        <Counters/>
      </div>
    )
  }
}

export default App;
