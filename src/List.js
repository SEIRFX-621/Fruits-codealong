import React from 'react';

const List = (props) => {
    const fruitItems = props.displayFruits.map((fruit, idx) => {
        return <li key={idx}>{fruit}</li>
    });

    return (
        <ul>
            {fruitItems}
        </ul>
    )
}

export default List;