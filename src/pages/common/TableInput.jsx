import React from 'react';
import {TextField} from "@mui/material";

const TableInput = ({ name, value, onChange }) => {

    const [inputValue, setInputValue] = React.useState(value);

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