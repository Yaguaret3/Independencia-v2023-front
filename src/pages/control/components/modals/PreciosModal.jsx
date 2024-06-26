import React, {useContext, useEffect, useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import TableInput from "../../../common/TableInput.jsx";
import service from "../../Service.js";
import useWebSocket from "../../../../hooks/useWebSocket.jsx";
import {ControlContext} from "../../Context.jsx";

const PreciosModal = ({precios, playerRol, show}) => {

    const {stompClient} = useContext(ControlContext);
    const {disparoTodos} = useWebSocket({});

    const [newPrecios, setNewPrecios] = useState([]);

    const attributes = ['plata', 'textil', 'agropecuaria',
        'metalmecanica', 'construccion', 'comercial', 'puntajeComercial'];

    useEffect(() => {

        const pr = precios.map(p => ({...p}))
        const preciosConModif = pr.map(p => {

            attributes.forEach(a => {
                p[a] = {
                    data:p[a],
                    modif:false
                }
            })
            return p;
        });
        setNewPrecios(preciosConModif);
    }, []);

    const handleInputChange = ({event, id}) => {
        const attribute = event.target.name;
        const newValue = event.target.value;

        const updatedPrecios = [...newPrecios].map(np => {

            if (id === np.id) {
                return {
                    ...np,
                    [attribute]: {
                        data:newValue,
                        modif:newValue !== np[attribute]
                    },
                    modificado: newValue !== np[attribute]
                };
            }
            return np;
        });

        setNewPrecios(updatedPrecios);
    }

    const handleGrabar = async () => {

        await newPrecios.filter(np => np.modificado).forEach((np) => {

            let body = {};
            attributes.forEach(a => {
                if (np[a].modif)
                    body = {...body,
                    [a]: np[a].data};
            });

             service.updatePrices({priceId: np.id, body: body});
        })

        disparoTodos({stompClient:stompClient});
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
                                padding='none' align="center">
                                Plata
                            </TableCell>}
                            {(playerRol === 'MERCADER') && <TableCell
                                padding='none' align="center">
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