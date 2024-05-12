import React, {useState} from 'react';
import {Box, Grid, Modal, TextField} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import service from "../Service.js";

const RecuperarPassModal = ({open, handleClose}) => {

    const [all, setAll] = useState({email:'', oldPass:'', newPass:'', repeatNewPass:''});

    const handleEmail = (e) => {
        setAll({...all, email: e.target.value})
    }
    const handleOldPassword = (e) => {
        setAll({...all, oldpass: e.target.value})
    }
    const handleNewPassword = (e) => {
        setAll({...all, newPass: e.target.value})
    }
    const handleRepeatNewPassword = (e) => {
        setAll({...all, repeatNewPass: e.target.value})
    }

    const handleButton = async () => {

        if(all.newPass !== all.repeatNewPass){
            alert("Las contraseñas deben coincidir");
            return;
        }

        service.renewPass({email:all.email, oldPass:all.oldPass, newPass:all.newPass});
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
                borderRadius: 3,
                width: '40%'
            }}
            >
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    justify="center"
                    height={'100vh'}
                    width={'100vw'}>
                    <Grid item>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                sx={{height: 100,}}
                                image="https://i.ebayimg.com/images/g/QpoAAOSwaB9fyTC~/s-l500.jpg"
                                title="moneda peso"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" align='center'>
                                    Recuperar contraseña
                                </Typography>
                                <TextField onBlur={handleEmail} label={"E-mail"} fullWidth
                                           variant={"standard"} type='email'/>
                                <TextField onBlur={handleOldPassword} label={"Contraseña actual"} fullWidth
                                           variant={"standard"} type={'password'}/>
                                <TextField onBlur={handleNewPassword} label={"Nueva contraseña"} fullWidth
                                           variant={"standard"} type={'password'}/>
                                <TextField onBlur={handleRepeatNewPassword} label={"Repetir nueva contraseña"} fullWidth
                                          variant={"standard"} type={'password'}/>
                            </CardContent>
                            <CardActions>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Button onClick={handleButton} size="medium" variant='contained' color='warning'
                                                fullWidth>Cambiar Contraseña</Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RecuperarPassModal;