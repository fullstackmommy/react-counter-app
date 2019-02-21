import React from 'react'

export default function Counter(props) {
    const {
        value,
        id,
        handleClickUp,
        handleClickDown,
        handleDelete,
        handleReset
    } = props;

    const evaluateClass = () => {
        return value > 0
            ? "primary"
            : "warning"
    }

    return (
        <React.Fragment>
            <h2>
                <span className={`badge badge-${evaluateClass()} m-2`}>{value}</span>
            </h2>
            <button
                type="button"
                className="btn btn-primary m-2"
                onClick={() => handleClickUp(id)}>+</button>
            <button
                type="button"
                className="btn btn-warning m-2"
                onClick={() => handleClickDown(id)}>-</button>
            <button
                type="button"
                className="btn btn-secondary m-2"
                onClick={() => handleReset(props.id)}>Reset</button>
            <button className="btn btn-secondary" onClick={() => handleDelete(props.id)}>Delete</button>
        </React.Fragment>
    )
}
