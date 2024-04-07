import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import ResourceCard from "../../common/ResourceCard.jsx";
import MarketCard from "../../common/MarketCard.jsx";
import RepresentationCard from "../../common/RepresentationCard.jsx";
import CardsModal from "./modals/CardsModal.jsx";

const CardsComponentForPlayerEdit = ({player}) => {

    //TODO agregar carta

    const [cardSelected, setCardSelected] = useState({});
    const handleCardSelected = ({card}) => {
        setCardSelected(card);
        handleOpenCardsModal();
    }

    const [openCardsModal, setOpenCardsModal] = useState(false);
    const handleOpenCardsModal = () => {
        setOpenCardsModal(true);
    }
    const handleCloseCardsModal = () => {
        setOpenCardsModal(false);
    }

    return (
        <>
            <Grid container spacing={2}>
                {player?.recursos?.map((card) => (
                    <ResourceCard key={card.id} resourceName={card.resourceTypeEnum}/>
                ))}
                {player?.mercados?.map((card) => (
                    <MarketCard key={card.id} cityName={card?.cityName} level={card?.level}/>
                ))}
                {player?.representacion?.map((card) => (
                    <RepresentationCard key={card.id} ciudad={card?.ciudad} poblacion={card?.poblacion}/>
                ))}
            </Grid>
            <CardsModal
                open={openCardsModal}
                handleClose={handleCloseCardsModal}
                card={cardSelected}/>
        </>
    );
};

export default CardsComponentForPlayerEdit;