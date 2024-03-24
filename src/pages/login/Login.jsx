import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { amber } from '@mui/material/colors';
import { Link, useLocation } from 'wouter';
import login from './Service';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useLocation();

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
        const response = await login(data);
        localStorage.setItem('independencia-token', response.data.token)
        response.data.roles.map(r => {
           switch (r){
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
               default:
                   return;
           }
        });
    }


    return (
        <div style={{ backgroundColor: amber.A700 }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                justify="center"
                style={{ minHeight: '100vh' }}>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            sx={{ height: 100, }}
                            image="https://i.ebayimg.com/images/g/QpoAAOSwaB9fyTC~/s-l500.jpg"
                            title="moneda peso"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align='center'>
                                ¡INDEPENDENCIA!
                            </Typography>
                            <TextField onBlur={handleEmail} label={"E-mail"} fullWidth placeholder={"E-mail"} variant={"standard"} type='email' />
                            <TextField onBlur={handlePassword} label={"Contraseña"} fullWidth placeholder={"Contraseña"} variant={"standard"} type={'password'} />
                        </CardContent>
                        <CardActions>
                            <Button onClick={handleButton} size="medium" variant='contained' color='warning' fullWidth>Iniciá Sesión</Button>

                            <Link href='/register'>
                                <Button size="medium" variant='outlined' color='warning' fullWidth>Registrate</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}