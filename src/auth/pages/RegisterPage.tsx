import React from 'react';
import {AuthLayout} from "../Layout/AuthLayout";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <AuthLayout title='Crear cuenta'>
            <form>
                <Grid container >
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField id="email" label="Nombre completo" type='text' placeholder='Nombre completo' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField id="email" label="Email" type='email' placeholder='email@gmail.com' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField id="password" label="Password" type='password' fullWidth />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} >
                            <Button variant="contained" fullWidth>Crear cuenta</Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr: 1}}> ¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
