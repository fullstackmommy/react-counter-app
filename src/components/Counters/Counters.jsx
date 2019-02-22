import React from 'react'
import Counter from '../Counter/Counter'

export default function Counters(props) {
    const {
        data,
        handleClickDown,
        handleClickUp,
        handleDelete,
        handleReset,
        handleResetAll
    } = props;

    return (
        <div >
            <button className="btn btn-danger" onClick={handleResetAll}>Reset All</button>
            {data.length === 0 && <h2>No more counters</h2>}
            {data.map(counter => (<Counter
                key={counter.id}
                id={counter.id}
                value={counter.value}
                handleDelete={handleDelete}
                handleClickUp={handleClickUp}
                handleClickDown={handleClickDown}
                handleReset={handleReset}/>))
}
        </div>
    )
}
