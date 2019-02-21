import React from 'react'

export default function Counter(props) {
    const evaluateClass = () => {
        return props.value > 0
            ? "primary"
            : "warning"
    }

    return (
        <React.Fragment>
            <h2>
                <span className={`badge badge-${evaluateClass()} m-2`}>{props.value}</span>
            </h2>
            <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => props.handleClickUp(props.id)}>+</button>
            <button
                type="button"
                className="btn btn-warning m-2"
                onClick={() => props.handleClickDown(props.id)}>-</button>
            <button
                type="button"
                className="btn btn-secondary m-2"
                onClick={() => props.handleReset(props.id)}>Reset</button>
            <button
                className="btn btn-secondary"
                onClick={() => props.handleDelete(props.id)}>Delete</button>
        </React.Fragment>
    )
}
