import React, { useState } from 'react';
import Input from './Input';
import List from './List';

const FruitContainer = (props) => {
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits);
    const [filterValue, setFilterValue] = useState('');
    const [fruitsNotToDisplay, setFruitsNotToDisplay] = useState([]);

    const handleFilterChange = (event) => {
        event.preventDefault();

        const newValue = event.target.value;
        setFilterValue(newValue);

        const filterFruitsList = props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(newValue.toLowerCase());
        });
        setFruitsToDisplay(filterFruitsList);
        const excludedFruitsList = props.fruits.filter((fruit) => {
            return !fruit.toLowerCase().includes(newValue.toLowerCase());
        });
        setFruitsNotToDisplay(excludedFruitsList);
    }

    return (
        <div>
            <label>Type a fruit name</label>
            <Input value={filterValue} onChangeFn={handleFilterChange}/>
            <List displayFruits={fruitsToDisplay} />
            <List displayFruits={fruitsNotToDisplay} />
        </div>
    )
}

export default FruitContainer;