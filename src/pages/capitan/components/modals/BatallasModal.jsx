import React, {useEffect, useState} from 'react'
import {
    Box,
    Button,
    Grid,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import SingleBattleModal from "./SingleBattleModal.jsx";

const BatallasModal = ({open, handleClose, batallas, player}) => {

    const [batallaSelected, setBatallaSelected] = useState({});
    const [openSingleBattleModal, setOpenSingleBattleModal] = useState(false);

    const handleOpenSingleBattleModal = ({batalla}) => {
        setBatallaSelected(batalla);
        setOpenSingleBattleModal(true);
    }
    const handleCloseSingleBattleModal = () => {
        setBatallaSelected({});
        setOpenSingleBattleModal(false);
    }

    useEffect(() => {
        if(batallaSelected !== undefined){
            const updatedBattle = batallas?.find(b => b.id === batallaSelected.id)
            setBatallaSelected(updatedBattle);
        }
    }, [batallas]);

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50vh',
                    left: '50vw',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 3
                }}
                >
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Typography >
                                Selecciona una batalla
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">Batalla en</TableCell>
                                            <TableCell align="center">Combatientes</TableCell>
                                            <TableCell align="center">Entrar</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {batallas?.map((batalla) => (
                                            <TableRow key={batalla.id}>
                                                <TableCell align="center" component="th" scope="row">
                                                    {batalla?.subregionName}
                                                </TableCell>
                                                <TableCell align="center" component="th" scope="row">
                                                    {batalla.combatientes?.map(c => c.capitanName).join(", ")}
                                                </TableCell>
                                                <TableCell align="center" component="th" scope="row">
                                                    <Button onClick={() => handleOpenSingleBattleModal({batalla: batalla})}
                                                            size="small" variant='contained' color='warning' fullWidth>
                                                        Ir
                                                    </Button>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
            <SingleBattleModal
                open={openSingleBattleModal}
                handleClose={handleCloseSingleBattleModal}
                batalla={batallaSelected}
                player={player}
            />
        </>
    )

}

export default BatallasModal;