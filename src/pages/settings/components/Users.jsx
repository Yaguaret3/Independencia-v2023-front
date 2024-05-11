import React, {useContext, useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SettingsContext} from "../Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import AddRoleModal from "./modals/AddRoleModal.jsx";

const Users = () => {

    const {players} = useContext(SettingsContext);

    const [openAddRole, setOpenAddRol] = useState(false);
    const handleOpenAddRole = ({id}) => {
        setOpenAddRol(true);
        setPlayerSelected(id);
    }
    const handleCloseAddRole = () => {
        setOpenAddRol(false);
    }
    const [playerSelected, setPlayerSelected] = useState(0);

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding='none' align="center">
                                Username
                            </TableCell>
                            <TableCell padding='none' align="center">
                                Email
                            </TableCell>
                            <TableCell padding='none' align="center">
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {players.map(p =>
                            <TableRow>
                                <TableCell padding='none' align="center">
                                    {p.username}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    {p.email}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <Button onClick={() => handleOpenAddRole({id: p.id})}
                                            size="small" variant='contained'
                                            color={'warning'}>
                                        Ver
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddRoleModal
                open={openAddRole}
                handleClose={handleCloseAddRole}
                id={playerSelected}
                />
        </>
    );
};

export default Users;