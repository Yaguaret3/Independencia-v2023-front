import React, {useEffect, useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableInput from "../../../common/TableInput.jsx";
import service from "../../Service.js";

const PreciosModal = ({precios, playerRol}) => {

    const [newPrecios, setNewPrecios] = useState(precios);

    const handleInputChange = ({event, id}) => {
        const attribute = event.target.name;
        const newValue = event.target.value;

        const updatedPrecios = [...newPrecios].map(np => {

            if (id === np.id) {
                return {
                    ...rowData,
                    [attribute.data]: newValue,
                    modificado:newValue !== np[attribute],
                    [attribute.modif] : newValue !== np[attribute]
                };
            }
            return rowData;
        });

        setNewPrecios(updatedPrecios);
    }

    const handleGrabar = () => {

        newPrecios.filter(np => np.modificado).forEach((np) => {

            const attributes = ['plata', 'textil', 'agropecuaria',
                'metalmecanica', 'construccion', 'comercial', 'puntajeComercial'];

            const body = attributes.map(a => {
                if(np[a][modif])
                    return {[a]:np[a][data]};
            });

            service.updatePrices({id:np.id, body:body});
        })

    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Precio de</TableCell>
                            <TableCell align="right">Textil</TableCell>
                            <TableCell align="right">Agropecuaria</TableCell>
                            <TableCell align="right">Metalmecánica</TableCell>
                            <TableCell align="right">Construcción</TableCell>
                            <TableCell align="right">Comercial</TableCell>
                            <TableCell show={playerRol === 'GOBERNADOR' || playerRol === 'REVOLUCIONARIO'}
                                       align="right">
                                Plata
                            </TableCell>
                            <TableCell show={playerRol === 'MERCADER'}
                                       align="right">
                                Puntaje Comercial
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {newPrecios.map(np => (
                            <TableRow key={np.id}>
                                <TableCell align="left" component="th" scope="row">
                                    {np.id}
                                </TableCell>
                                <TableCell align="right">
                                    {np.name}
                                </TableCell>
                                <TableCell align="right">
                                    <TableInput name='agropecuaria' value={np.agropecuaria} onChange={(e) => handleInputChange({
                                        id:np.id,
                                        event:e
                                    })} />
                                </TableCell>
                                <TableCell align="right">
                                    <TableInput name='textil' value={np.textil} onChange={(e) => handleInputChange({
                                        id:np.id,
                                        event:e
                                    })} />
                                </TableCell>
                                <TableCell align="right">
                                    <TableInput name='metalmecanica' value={np.metalmecanica} onChange={(e) => handleInputChange({
                                        id:np.id,
                                        event:e
                                    })} />
                                </TableCell>
                                <TableCell align="right">
                                    <TableInput name='construccion' value={np.construccion} onChange={(e) => handleInputChange({
                                        id:np.id,
                                        event:e
                                    })} />
                                </TableCell>
                                <TableCell align="right">
                                    <TableInput name='comercial' value={np.comercial} onChange={(e) => handleInputChange({
                                        id:np.id,
                                        event:e
                                    })} />
                                </TableCell>
                                <TableCell show={playerRol === 'GOBERNADOR' || playerRol === 'REVOLUCIONARIO'}
                                           align="right">
                                    <TableInput name='plata' value={np.plata} onChange={(e) => handleInputChange({
                                        event:e, id:np.id
                                    })} />
                                </TableCell>
                                <TableCell show={playerRol === 'MERCADER'}
                                           align="right">
                                    <TableInput name='puntajeComercial' value={np.puntajeComercial} onChange={(e) => handleInputChange({
                                        event:e, id:np.id
                                    })} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button onClick={handleGrabar}
                    size="small" variant='contained' color='warning' fullWidth>Grabar</Button>
        </>
    );
};

export default PreciosModal;