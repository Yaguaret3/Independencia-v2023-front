import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, TextField} from '@mui/material';
import {Grid} from '@mui/material';
import {amber} from '@mui/material/colors';
import {Link} from 'wouter';
import register from './Service';
import {Bounce, toast} from "react-toastify";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleButton = () => {

        console.log('Registering');

        const data = {
            'username': username,
            'email': email,
            'password': password
        }
        const response = register(data)

        toast.success('Registrado con éxito. Vas a tener que contactarte con Megajuegos para que te asignen rol para el día de juego', {
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
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia
                            component="img"
                            sx={{height: 100,}}
                            image="https://i.ebayimg.com/images/g/QpoAAOSwaB9fyTC~/s-l500.jpg"
                            title="moneda peso"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                ¡Registrate!
                            </Typography>
                            <TextField onBlur={handleUsername} label={"Username"} fullWidth placeholder={"Username"}
                                       variant={"standard"}/>
                            <TextField onBlur={handleEmail} label={"E-mail"} fullWidth placeholder={"E-mail"}
                                       variant={"standard"} type='email'/>
                            <TextField onBlur={handlePassword} label={"Contraseña"} fullWidth placeholder={"Contraseña"}
                                       variant={"standard"} type={'password'}/>
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