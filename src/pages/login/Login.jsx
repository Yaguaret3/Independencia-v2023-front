import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, IconButton, InputAdornment, TextField, Grid} from '@mui/material';
import {amber} from '@mui/material/colors';
import {Link, useLocation} from 'wouter';
import service from './Service';
import {Bounce, toast} from "react-toastify";
import RecuperarPassModal from "./modals/RecuperarPassModal.jsx";
import {Visibility, VisibilityOff} from "@mui/icons-material";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useLocation();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleButton = async () => {
        const data = {
            'email': email,
            'password': password
        }
        const response = await service.login(data);
        localStorage.setItem('independencia-token', response.data.token)

        if (!response.data.playerAllowed) {
            toast.error('No estás incluido en ninguna partida activa. Contactate con Megajuegos Argentina.', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            return
        }

        response.data.roles.map(r => {
            switch (r) {
                case "CONTROL":
                    setLocation('/control');
                    return;
                case "GOBERNADOR":
                    setLocation('/gobernador');
                    return;
                case "CAPITAN":
                    setLocation('/capitan');
                    return;
                case "REVOLUCIONARIO":
                    setLocation('/revolucionario');
                    return;
                case "MERCADER":
                    setLocation('/mercader');
                    return;
                default:
                    return;
            }
        });
    }
    const [openRecuperarPassModal, setOpenRecuperarPassModal] = useState(false);
    const handleOpenRecuperarPassModal = () => {
        setOpenRecuperarPassModal(true);
    }
    const handleCloseRecuperarPassModal = () => {
        setOpenRecuperarPassModal(false);
    }


    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 3,
                backgroundColor: amber.A700
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
                                    ¡INDEPENDENCIA!
                                </Typography>
                                <TextField onBlur={handleEmail} label={"E-mail"} fullWidth placeholder={"E-mail"}
                                           variant={"standard"} type='email'/>
                                <TextField onBlur={handlePassword} label={"Contraseña"} fullWidth
                                           placeholder={"Contraseña"} variant={"standard"} type={showPassword ? "text" : "password"}
                                           InputProps={{ // <-- This is where the toggle button is added.
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <IconButton
                                                           aria-label="toggle password visibility"
                                                           onClick={handleClickShowPassword}
                                                           onMouseDown={handleMouseDownPassword}
                                                       >
                                                           {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                       </IconButton>
                                                   </InputAdornment>
                                               )
                                           }}
                                />
                            </CardContent>
                            <CardActions>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <Button onClick={handleButton} size="medium" variant='contained' color='warning'
                                                fullWidth>Iniciá Sesión</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Link href='/register'>
                                            <Button size="medium" variant='outlined' color='warning'
                                                    fullWidth>Registrate</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography onClick={handleOpenRecuperarPassModal}
                                                    variant="h12" fontSize={12} component="div" align='center'
                                                    color={amber.A700}>
                                            Recuperar contraseña
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <RecuperarPassModal
                open={openRecuperarPassModal}
                handleClose={handleCloseRecuperarPassModal}
            />
        </>
    );
}