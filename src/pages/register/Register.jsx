import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Box, TextField, Grid, InputAdornment, IconButton} from '@mui/material';
import {amber} from '@mui/material/colors';
import {Link} from 'wouter';
import register from './Service';
import {Bounce, toast} from "react-toastify";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import useWebSocket from "../../hooks/useWebSocket.jsx";
import SockJS from "sockjs-client";
import {over} from "stompjs";
import {RegisterContext} from "./Context.jsx";

export default function Register() {

    const {stompClient,setStompClient} = useContext(RegisterContext);
    const {disparoSettings} = useWebSocket({});

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    useEffect(() => {

        const baseURL = import.meta.env.VITE_BACKEND_URL_WS;
        const socket = new SockJS(baseURL);
        const stompClient = over(socket);
        setStompClient(stompClient);

    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPass(e.target.value);
    }

    const handleButton = async () => {

        if (username === "") {
            alert("Por favor, completar el nombre de usuario");
            return;
        }
        if (email === "") {
            alert("Por favor, completar el email");
            return;
        }
        if (password === "") {
            alert("Por favor, completar la contraseña");
            return;
        }
        if (password !== confirmPass) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const data = {
            'username': username,
            'email': email,
            'password': password
        }
        const response = await register(data);

        if (response?.status >= 200 && response?.status < 300) {
            toast.success(
                'Registrado con éxito. Vas a tener que contactarte con Megajuegos para que te asignen rol para el día de juego',
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            disparoSettings({stompClient: stompClient});
        }

    }

    return (

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
                <Grid item xs={3}>
                    <Card sx={{maxWidth: '40vw'}}>
                        <CardMedia
                            component="img"
                            sx={{maxWidth: '95%', margin: '0 auto'}}
                            image={'/img/isologotipo_tag.png'}
                            title="moneda peso"
                        />
                        <CardContent>
                            <TextField onChange={handleUsername} label={"Username"} fullWidth placeholder={"Username"}
                                       variant={"standard"}/>
                            <TextField onChange={handleEmail} label={"E-mail"} fullWidth placeholder={"E-mail"}
                                       variant={"standard"} type='email'/>
                            <TextField onChange={handlePassword} label={"Contraseña"} fullWidth placeholder={"Contraseña"}
                                       variant={"standard"} type={showPassword ? "text" : "password"}
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
                                       }}/>
                            <TextField onChange={handleConfirmPassword} label={"Contraseña"} fullWidth
                                       placeholder={"Confirmar Contraseña"}
                                       variant={"standard"} type={showConfirmPassword ? "text" : "password"}
                                       InputProps={{ // <-- This is where the toggle button is added.
                                           endAdornment: (
                                               <InputAdornment position="end">
                                                   <IconButton
                                                       aria-label="toggle password visibility"
                                                       onClick={handleClickShowConfirmPassword}
                                                       onMouseDown={handleMouseDownConfirmPassword}
                                                   >
                                                       {showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                                                   </IconButton>
                                               </InputAdornment>
                                           )
                                       }}/>
                        </CardContent>
                        <CardActions>
                            <Link href='/'>
                                <Button size="medium" variant='outlined' color='warning' fullWidth>Iniciá
                                    Sesión</Button>
                            </Link>
                            <Button onClick={handleButton} size="medium" variant='contained' color='warning'
                                    fullWidth>Registrate</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}