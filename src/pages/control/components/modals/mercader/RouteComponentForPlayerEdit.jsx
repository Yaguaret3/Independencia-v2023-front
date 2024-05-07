import React from 'react';
import {Grid} from "@mui/material";
import MarketCard from "../../../../common/MarketCard.jsx";
import SingleAttributeEdit from "../../SingleAttributeEdit.jsx";

const RouteComponentForPlayerEdit = ({route}) => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SingleAttributeEdit nombre={'Valor de Ruta Comercial'} valorActual={route?.tradeScore} />
            </Grid>
            {route?.subregions?.map((subregion) => (
                <Grid item xs={3} key={subregion.id}>
                    <MarketCard cityName={subregion.nombre}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default RouteComponentForPlayerEdit;