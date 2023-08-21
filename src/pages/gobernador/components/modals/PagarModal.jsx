import React, { useEffect, useState } from 'react'
import {
    Modal, Grid, Box, Button, Typography, TextField,
    Card, CardActionArea, CardContent
} from '@mui/material'

const PagarModal = ({ open, handleClose, itemWanted, handleService, payLabel, recursoList }) => {

    const [plata, setPlata] = useState(0);
    const [recursos, setRecursos] = useState([]);
    const [resourcesSelectedIds, setResourcesSelectedIds] = useState([])

    useEffect(() => {
        setRecursos(recursoList)
    }, [recursoList]);

    const handleButton = () => {
        handleClose();
        handleService({
            plata: plata,
            resourcesIds: resourcesSelectedIds
        });
    }

    const handleChangePlata = (e) => {
        setPlata(e.target.value)
    }

    const handleCardClick = (recurso) => {

        debugger;

        const nextRecursos = recursos.map(r => {
            if (r === recurso) {
                r.selected = !r.selected;
            }
            return r
        });
        setRecursos(nextRecursos);

        const nextResourcesIds = resourcesSelectedIds;

        if (nextResourcesIds.includes(recurso.id)) {
            setResourcesSelectedIds(nextResourcesIds.filter(r => !r == recurso.id))
        } else {
            nextResourcesIds.push(recurso.id)
            setResourcesSelectedIds(nextResourcesIds)
        }
    }

    return (
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
                <Grid container>
                    <Grid item xs={12}>
                        <Typography fontSize={13}>
                            {itemWanted.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Precio
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Plata: {itemWanted.plata}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Industria Agropecuaria: {itemWanted.agropecuaria}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Industria Comercial: {itemWanted.comercial}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Industria de la Construcción: {itemWanted.construccion}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Industria Metalmecánica: {itemWanted.metalmecanica}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize={13}>
                                    Industria Textil: {itemWanted.textil}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                Plata:
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    size='small'
                                    value={plata}
                                    onChange={handleChangePlata}
                                    InputProps={{
                                        inputProps: {
                                            pattern: '[0-9]*',
                                            inputMode: 'numeric'
                                        },
                                    }}>
                                </TextField>
                            </Grid>
                            {recursos && recursos.map((recurso) => (
                                <Grid item xs={6}>
                                    <Card onClick={() => handleCardClick(recurso)}
                                        sx={{ border: recurso.selected ? 'solid green' : 'solid black' }}>
                                        <CardActionArea>
                                            <CardContent sx={{ backgroundColor: 'purple', paddingY: 0 }}>
                                                <Typography variant="button" color={'white'} fontSize={10}>
                                                    Recurso:
                                                </Typography>
                                            </CardContent>
                                            <CardContent sx={{
                                                backgroundColor: recurso.resourceTypeEnum === 'AGROPECUARIA' ? 'greenyellow' :
                                                    (recurso.resourceTypeEnum === 'METALMECANICA' ? 'lightgray' :
                                                        (recurso.resourceTypeEnum === 'CONSTRUCCION' ? 'peru' :
                                                            (recurso.resourceTypeEnum === 'COMERCIAL' ? 'gold' :
                                                                (recurso.resourceTypeEnum === 'TEXTIL' ? 'plum' :
                                                                    '')))),
                                                paddingY: '0.9vh'
                                            }}>
                                                <Typography variant="body1"
                                                    fontSize={10}
                                                    fontWeight={'bold'}
                                                    textAlign={'center'}>
                                                    {recurso.resourceTypeEnum}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={handleButton}
                            size="medium" variant='contained' color='warning' fullWidth>{payLabel}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal >
    )
}

export default PagarModal