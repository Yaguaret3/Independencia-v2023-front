import React, {useContext, useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SettingsContext} from "../Context.jsx";
import useWebSocket from "../../../hooks/useWebSocket.jsx";
import AddRoleModal from "./modals/AddRoleModal.jsx";

const Users = () => {

    const {users} = useContext(SettingsContext);

    const [openAddRole, setOpenAddRol] = useState(false);
    const handleOpenAddRole = ({u}) => {
        setOpenAddRol(true);
        setPlayerSelected(u);
    }
    const handleCloseAddRole = () => {
        setOpenAddRol(false);
    }
    const [playerSelected, setPlayerSelected] = useState({});

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
                        {users?.map(u =>
                            <TableRow>
                                <TableCell padding='none' align="center">
                                    {u.username}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    {u.email}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <Button onClick={() => handleOpenAddRole({u: u})}
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
                player={playerSelected}
                />
        </>
    );
};

export default Users;