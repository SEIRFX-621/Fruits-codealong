import React from 'react';

const Input = (props) => {
    return (
        <div>
            <label htmlFor="fruit-filter">Filter these fruits</label>
            <input type="text" name="fruit-filter" value={props.value} onChange={props.onChangeFn} />
        </div>
    )
}

export default Input;