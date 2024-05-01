import React, {useContext} from 'react';
import {Grid} from "@mui/material";
import {RevolucionarioContext} from "../Context.jsx";
import ResourceCard from "../../common/ResourceCard.jsx";
import RepresentationCard from "../../common/RepresentationCard.jsx";

const Cartas = () => {

    const {playerData} = useContext(RevolucionarioContext);

    return (
        <Grid container spacing={2}>
            {playerData?.recursos?.map((recurso) => (

                <ResourceCard resourceName={recurso.resourceTypeEnum} key={recurso.id}/>
            ))}
            {playerData?.representacion?.map(r =>
                <RepresentationCard poblacion={r.poblacion}
                                    ciudad={r.ciudad}
                                    key={r.id}/>
            )}
        </Grid>
    );
};

export default Cartas;