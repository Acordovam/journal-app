
import {AuthLayout} from "../Layout/AuthLayout";
import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import useForm from "../../hooks/useForm";
import {useMemo, useState} from "react";
import {startCreatingUserWithEmailPassword} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value: string) => value.includes('@'), 'El correo debe tener una arroba'],
    password: [(value: string) => value.length>= 6, 'El password debe tener mas de 6 caracteres'],
    displayName: [(value: string) => value.length >= 1, 'El nombre es obligatorio'],
}
export const RegisterPage = () => {
    const {displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid}: any = useForm(formData, formValidations)
    const [formSubmitted, setFormSubmitted] = useState(false);
    const dispatch = useDispatch();
    // @ts-ignore
    const {status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthentication = useMemo (() => status === 'checking', [status])
    const onSubmit = (event: any) => {
        event.preventDefault()
        // @ts-ignore
        dispatch(startCreatingUserWithEmailPassword(formState))
        setFormSubmitted(true)
        if(!isFormValid) return

    }
    return (
        <AuthLayout title='Crear cuenta'>
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container >
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            label="Nombre completo"
                            type='text'
                            placeholder='Nombre completo'
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            label="Email"
                            type='email'
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                            placeholder='email@gmail.com'
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                            name="password"
                            label="Password"
                            type='password'
                            fullWidth />
                    </Grid>
                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                        <Grid
                            display={!!errorMessage ? '' : 'none'}
                            item
                              xs={12} >
                            <Alert severity={'error'}>{errorMessage}</Alert>
                        </Grid>
                        <Grid item xs={12} >
                            <Button
                                disabled = {isCheckingAuthentication}
                                type="submit"
                                variant="contained"
                                fullWidth>
                                Crear cuenta
                            </Button>
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
