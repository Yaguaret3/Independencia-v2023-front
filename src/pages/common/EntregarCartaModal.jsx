import React, {useState} from 'react'
import { Modal, Grid, Autocomplete, TextField, Box, Button } from '@mui/material'
import ResourceCard from './ResourceCard.jsx'
import MarketCard from "./MarketCard.jsx";
import RepresentationCard from "./RepresentationCard.jsx";
import ActionCard from "./ActionCard.jsx";
import BattleCard from "./BattleCard.jsx";

const EntregarCartaModal = ({ open, handleClose, players, card, handleService=()=>{}, cardType}) => {

    const [playerSelected, setPlayerSelected] = useState({})
    const [labelPlayerSelected, setLabelPlayerSelected] = useState('');

    const handlePlayerSelected = (value) => {
        setPlayerSelected(value)
    }
    const handleLabelPlayerSelected = (value) => {
        setLabelPlayerSelected(value);
    }

    const renderCard = () => {
        switch(cardType){
            case "recurso":
                return <ResourceCard resourceName={card?.resourceTypeEnum}/>
            case "mercado":
                return <MarketCard cityName={card?.cityName} level={card?.level}/>;
            case "representacion":
                return <RepresentationCard poblacion={card?.poblacion} ciudad={card?.ciudad} prestigio={card?.prestigio}/>;
            case "accion":
                return <ActionCard actionName={card?.actionName}/>;
            case "batalla":
                return <BattleCard battleCardName={card?.battleCardName}/>;
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
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        {renderCard}
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            disablePortal
                            getOptionLabel={(option) => option.playerName ? option.playerName : ''}
                            options={players}
                            value={playerSelected}
                            onChange={(event, newValue) => {
                                handlePlayerSelected(newValue);
                            }}
                            inputValue={labelPlayerSelected}
                            onInputChange={(event, newInputValue) => {
                                handleLabelPlayerSelected(newInputValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Users" />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button onClick={() => handleService({playerSelected:playerSelected, card:card})}
                            size="small" variant='contained' color='warning' fullWidth>Elegir Jugador</Button>
                    </Grid>
                </Grid>

            </Box>
        </Modal>
    )
}

export default EntregarCartaModal;