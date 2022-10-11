import React, {useMemo} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {AuthLayout} from "../Layout/AuthLayout";
import useForm from "../../hooks/useForm";
import {useDispatch, useSelector} from "react-redux";
import {startGoogleSignIn, startLoginWithEmailPassword} from "../../store/auth";


export const LoginPage = () => {
    const {status} = useSelector((state: any) => state.auth)
    const dispatch = useDispatch()
    const {errorMessage} = useSelector((state: any) => state.auth)
    const {email, password, onInputChange}: any = useForm({
        email: 'cordova@ale.com.gt',
        password: '12345'
    })
    const isAuthenticating = useMemo(() => status === 'checking', [status]);
    const onSubmit = (event: any) => {
        event.preventDefault()
        // @ts-ignore
        dispatch(startLoginWithEmailPassword({email, password}));
    }
    const onGoogleSigIn = () => {
        console.log('OnGoogleSignIn')
        // @ts-ignore
        dispatch(startGoogleSignIn())
    }
    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container >
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField name="email" onChange={onInputChange} value={email} id="email" label="Email" type='email' placeholder='email@gmail.com' fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField name="password" onChange={onInputChange} value={password} id="password" label="Password" type='password' fullWidth />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid item xs={12} display={!!errorMessage? '': 'none'}>
                            <Alert severity={'error'} >
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant="contained"
                                fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSigIn}
                                variant="contained" fullWidth>
                                <Google/>
                                <Typography sx={{ml: 1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
