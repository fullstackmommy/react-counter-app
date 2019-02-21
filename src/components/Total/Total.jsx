import React from 'react'

export default function Total(props) {

    return (
        <React.Fragment>
            <h3>
                Total Number of Counters: {props.numCounter}
            </h3>
            <h3>
                Total Count: {props.totalCount}
            </h3>
        </React.Fragment>
    )
}
