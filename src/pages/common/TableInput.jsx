import React, {useState} from 'react';
import {TextField} from "@mui/material";

const TableInput = ({ name, value, onChange }) => {

    console.log("value = ")
    console.log(value)

    const [inputValue, setInputValue] = useState(value?.data);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onChange(e);
    };

    return (
        <TextField
            name={name}
            value={inputValue}
            onChange={handleInputChange}
        />
    );
};

export default TableInput;