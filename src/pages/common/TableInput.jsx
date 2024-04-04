import React, {useState} from 'react';
import {TextField} from "@mui/material";

const TableInput = ({ name, value, onChange }) => {

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