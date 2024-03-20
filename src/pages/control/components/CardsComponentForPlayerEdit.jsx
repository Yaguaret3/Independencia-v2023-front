import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import ResourceCard from "../../common/ResourceCard.jsx";
import MarketCard from "../../common/MarketCard.jsx";
import RepresentationCard from "../../common/RepresentationCard.jsx";
import CardsModal from "./modals/CardsModal.jsx";

const CardsComponentForPlayerEdit = ({player}) => {

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
                <Button key={card.id} onClick={() => handleCardSelected(card)}
                        size="small" variant='contained' color='warning' fullWidth>
                    <ResourceCard resourceName={card.resourceTypeEnum} />
                </Button>
            ))}
            {player?.mercados?.map((card) => (
                <Button key={card.id} onClick={() => handleCardSelected(card)}
                        size="small" variant='contained' color='warning' fullWidth>
                    <MarketCard cityName={card?.cityName} level={card?.level} />
                </Button>
            ))}
            {player?.representacion?.map((card) => (
                <Button key={card.id} onClick={() => handleCardSelected(card)}
                        size="small" variant='contained' color='warning' fullWidth>
                    <RepresentationCard cityName={card?.cityName} level={card?.level} />
                </Button>
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