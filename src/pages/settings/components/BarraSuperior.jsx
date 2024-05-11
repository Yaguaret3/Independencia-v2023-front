import React from 'react';
import {AppBar, Toolbar} from "@mui/material";

const BarraSuperior = () => {
    return (
        <AppBar position="static" color='warning'>
            <Toolbar>
                <Typography variant="h6">
                    Settings
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default BarraSuperior;