import React, {useContext, useState} from 'react';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {SettingsContext} from "../Context.jsx";
import AddRoleModal from "./modals/AddRoleModal.jsx";
import service from "../Service.js";
import UpdateUsernameModal from "./modals/UpdateUsernameModal.jsx";
import { FaEdit, FaPlus } from "react-icons/fa";
import useWebSocket from "../../../hooks/useWebSocket.jsx";

const Users = () => {

    const {stompClient, users} = useContext(SettingsContext);
    const {disparoSettings} = useWebSocket({});

    const [openAddRole, setOpenAddRol] = useState(false);
    const handleOpenAddRole = ({u}) => {
        setOpenAddRol(true);
        setPlayerSelected(u);
    }
    const handleCloseAddRole = () => {
        setOpenAddRol(false);
    }
    const [playerSelected, setPlayerSelected] = useState({});

    const handleRemoveRole = async ({u}) => {
        if(confirm('¿Estás seguro de que deseás eliminar el rol ' + u.rol + ' de ' + u.username + '?')){
            await service.removeRole({id: u.id, rol: u.rol});
            disparoSettings({stompClient:stompClient});
        }
    }
    const [openUpdateUsernameModal, setOpenUpdateUsernameModal] = useState(false);
    const handleOpenUpdateUsernameModal = async ({u}) => {
        setOpenUpdateUsernameModal(true);
        setPlayerSelected(u);
    }
    const handleCloseUpdateUsername = () => {
        setOpenUpdateUsernameModal(false);
    }

    const [filterText, setFilterText] = useState('');
    const handleChangeFilterText = (e) => {
        setFilterText(e.target.value.toLowerCase());
    }
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const handleSort = ({key, direction}) => {
        setSortConfig({ key: key, direction: direction });
    }

    const filteredUsers = users
        ?.filter(u => {
            const text = filterText.toLowerCase();
            return (
                u.username?.toLowerCase().includes(text) ||
                u.email?.toLowerCase().includes(text) ||
                u.rol?.toLowerCase().includes(text) ||
                u.city?.toLowerCase().includes(text)
            );
        })
        .sort((a, b) => {
            if (!sortConfig.key) return 0;
            const aValue = a[sortConfig.key] || "";
            const bValue = b[sortConfig.key] || "";
            if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });

    return (
        <>
            <TableContainer component={Paper}>
                <TextField
                    label="Buscar por nombre, email o rol"
                    variant="outlined"
                    size="small"
                    value={filterText}
                    onChange={e => handleChangeFilterText(e)}
                    style={{ padding: 10, margin:10, width: 300 }}
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding='none' align="center" onClick={() => handleSort({key: 'username', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})} style={{cursor: 'pointer'}}>
                                Username {sortConfig.key === "username" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                            </TableCell>
                            <TableCell padding='none' align="center">
                                Editar
                        </TableCell>
                            <TableCell padding='none' align="center" onClick={() => handleSort({key: 'email', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})} style={{cursor: 'pointer'}}>
                                Email {sortConfig.key === "email" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                            </TableCell>
                            <TableCell padding='none' align="center"  onClick={() => handleSort({key: 'rol', direction: sortConfig.direction === 'asc' ? 'desc' : 'asc'})} style={{cursor: 'pointer'}}>
                                Rol {sortConfig.key === "rol" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                            </TableCell>
                            <TableCell padding='none' align="center">
                            </TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {filteredUsers?.map(u =>
                            <TableRow key={u.id} sx={{
                                "&:nth-of-type(odd)": {
                                    backgroundColor: theme => theme.palette.action.hover
                                }
                            }}>
                                <TableCell padding='none' align="center">
                                    {u.username}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <Button onClick={() => handleOpenUpdateUsernameModal({u: u})}
                                            size="small" variant='contained'
                                            color={'warning'}>
                                        <FaEdit />
                                    </Button>
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    {u.email}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    {u.rol ?
                                    <Button onClick={() => handleRemoveRole({u: u})}
                                            size="small" variant='outlined'
                                            color={'error'}>
                                        {u.city ? u.rol + ' de ' + u.city : u.rol}
                                    </Button>
                                        : <></>
                                    }
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <Button onClick={() => handleOpenAddRole({u: u})}
                                            size="small" variant='contained'
                                            color={'warning'}
                                            disabled={!!u.rol && u.rol !== ''}>
                                        <FaPlus />
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
            <UpdateUsernameModal
                open={openUpdateUsernameModal}
                handleClose={handleCloseUpdateUsername}
                player={playerSelected}
                />
        </>
    );
};

export default Users;