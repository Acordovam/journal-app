import {checkingCredentials, login, logout} from "./";
import {
    loginEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    singInWithGoogle
} from "../../firebase/providers";

export const checkingAuthentication = (email: string, password: string) => {
    return async(dispatch: any) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: any) => {
        dispatch(checkingCredentials())
        const result: any = await singInWithGoogle()
        console.log(result)
        if(!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}: any) => {
    return async(dispatch: any) => {
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage}: any = await registerUserWithEmailPassword({email, password, displayName})
        if(!ok) return dispatch(logout({errorMessage} || 'Error al registrar el usuario'))
        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassword = ({email, password}: any) => {
    return async(dispatch: any) => {
        dispatch(checkingCredentials());
        const {ok, uid, photoURL, errorMessage, displayName}: any = await loginEmailPassword({email, password})
        if(!ok) return dispatch(logout({errorMessage} || 'Error al iniciar sesión'))
        dispatch(login({uid, email, photoURL, displayName}))
    }
}

export const startLogOut = () => {
    return async (dispatch: any) => {
        await logoutFirebase()
        dispatch(logout({}))
    }
}