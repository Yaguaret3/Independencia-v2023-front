import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import ResourceCard from "../../common/ResourceCard.jsx";
import MarketCard from "../../common/MarketCard.jsx";
import RepresentationCard from "../../common/RepresentationCard.jsx";
import EditarCardModal from "./modals/EditarCardModal.jsx";
import ExtraCard from "../../common/ExtraCard.jsx";
import CrearNewCardModal from "./modals/CrearNewCardModal.jsx";
import BattleCard from "../../common/BattleCard.jsx";
import ActionCard from "../../common/ActionCard.jsx";

const CardsComponentForPlayerEdit = ({player}) => {

    const [cardSelected, setCardSelected] = useState({});
    const handleCardSelected = ({card, cardType}) => {
        setCardSelected({...card,
                                [cardType]:true});
        handleOpenEditarCardModal();
    }

    const [openEditarCardModal, setOpenEditarCardModal] = useState(false);
    const handleOpenEditarCardModal = () => {
        setOpenEditarCardModal(true);
    }
    const handleCloseEditarCardModal = () => {
        setOpenEditarCardModal(false);
    }
    const [openCrearNewCardModal, setOpenCrearNewCardModal] = useState(false);
    const handleOpenCrearNewCardModal = () => {
        setOpenCrearNewCardModal(true);
    }
    const handleCloseCrearNewCardModal = () => {
        setOpenCrearNewCardModal(false);
    }

    return (
        <>
            <Grid container spacing={2}>
                {player?.recursos?.map((card) => (
                    <Button key={card.id}  onClick={() => handleCardSelected({card:card, cardType:'recursos'})}>
                        <ResourceCard resourceName={card.resourceTypeEnum}/>
                    </Button>
                ))}
                {player?.mercados?.map((card) => (
                    <Button key={card.id}  onClick={() => handleCardSelected({card, cardType:'mercado'})}>
                        <MarketCard cityName={card?.cityName} level={card?.level}/>
                    </Button>

                ))}
                {player?.representacion?.map((card) => (
                    <Button key={card.id}  onClick={() => handleCardSelected({card:card, cardType:'representacion'})}>
                        <RepresentationCard ciudad={card?.ciudad} poblacion={card?.poblacion}/>
                    </Button>
                ))}
                {player?.extras?.map((card) => (
                        <Button key={card.id}  onClick={() => handleCardSelected({card:card, cardType:'extra'})}>
                            <ExtraCard nombre={card.nombre} descripcion={card.descripcion} bonificacion={card.bonificacion}/>
                        </Button>
                ))}
                {player?.battleCards?.map((card) => (
                    <Button key={card.id}  onClick={() => handleCardSelected({card:card, cardType:'batalla'})}>
                        <BattleCard battleCardName={card.nombre} descripcion={card.descripcion} bonificacion={card.bonificacion}/>
                    </Button>
                ))}
                {player?.actionCards?.map((card) => (
                    <Button key={card.id}  onClick={() => handleCardSelected({card:card, cardType:'accion'})}>
                        <ActionCard actionName={card.actionType} descripcion={card.descripcion} bonificacion={card.bonificacion}/>
                    </Button>
                ))}
            </Grid>
            <Button onClick={handleOpenCrearNewCardModal}
                    size="small" variant='contained' color='warning' >
                Crear nueva carta
            </Button>
            <EditarCardModal
                open={openEditarCardModal}
                handleClose={handleCloseEditarCardModal}
                card={cardSelected}
                playerId={player.id}/>
            <CrearNewCardModal
                open={openCrearNewCardModal}
                handleClose={handleCloseCrearNewCardModal}
                playerId={player.id}
            />
        </>
    );
};

export default CardsComponentForPlayerEdit;