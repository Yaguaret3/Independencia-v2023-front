import React, {useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableInput from "../../../common/TableInput.jsx";
import service from "../../Service.js";

const PreciosModal = ({precios, playerRol, show}) => {

    const [newPrecios, setNewPrecios] = useState(precios);

    const handleInputChange = ({event, id}) => {
        const attribute = event.target.name;
        const newValue = event.target.value;

        const updatedPrecios = [...newPrecios].map(np => {

            if (id === np.id) {
                return {
                    ...rowData,
                    [attribute.data]: newValue,
                    modificado: newValue !== np[attribute],
                    [attribute.modif]: newValue !== np[attribute]
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
                if (np[a][modif])
                    return {[a]: np[a][data]};
            });

            service.updatePrices({id: np.id, body: body});
        })

    }

    return (
        <>
            {show && <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding='none' align="center">Precio de</TableCell>
                            <TableCell padding='none' align="center">Textil</TableCell>
                            <TableCell padding='none' align="center">Agropecuaria</TableCell>
                            <TableCell padding='none' align="center">Metalmecánica</TableCell>
                            <TableCell padding='none' align="center">Construcción</TableCell>
                            <TableCell padding='none' align="center">Comercial</TableCell>
                            {(playerRol === 'GOBERNADOR' || playerRol === 'REVOLUCIONARIO') && <TableCell
                                padding='none' align="right">
                                Plata
                            </TableCell>}
                            {(playerRol === 'MERCADER') && <TableCell
                                padding='none' align="right">
                                Puntaje Comercial
                            </TableCell>}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {newPrecios.map(np => (
                            <TableRow key={np.id}>
                                <TableCell padding='none' align="center">
                                    {np.name}
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <TableInput name='agropecuaria' value={np.agropecuaria}
                                                onChange={(e) => handleInputChange({
                                                    id: np.id,
                                                    event: e
                                                })}/>
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <TableInput name='textil' value={np.textil} onChange={(e) => handleInputChange({
                                        id: np.id,
                                        event: e
                                    })}/>
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <TableInput name='metalmecanica' value={np.metalmecanica}
                                                onChange={(e) => handleInputChange({
                                                    id: np.id,
                                                    event: e
                                                })}/>
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <TableInput name='construccion' value={np.construccion}
                                                onChange={(e) => handleInputChange({
                                                    id: np.id,
                                                    event: e
                                                })}/>
                                </TableCell>
                                <TableCell padding='none' align="center">
                                    <TableInput name='comercial' value={np.comercial}
                                                onChange={(e) => handleInputChange({
                                                    id: np.id,
                                                    event: e
                                                })}/>
                                </TableCell>
                                {(playerRol === 'GOBERNADOR' || playerRol === 'REVOLUCIONARIO') &&
                                    <TableCell padding='none' align="center">
                                        <TableInput name='plata' value={np.plata} onChange={(e) => handleInputChange({
                                            event: e, id: np.id
                                        })}/>
                                    </TableCell>}
                                {(playerRol === 'MERCADER') &&
                                    <TableCell padding='none' align="center">
                                        <TableInput name='puntajeComercial' value={np.puntajeComercial}
                                                    onChange={(e) => handleInputChange({
                                                        event: e, id: np.id
                                                    })}/>
                                    </TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            {show && <Button onClick={handleGrabar}
                             size="small" variant='contained' color='warning' fullWidth>Grabar</Button>
            }
        </>
    );
};

export default PreciosModal;