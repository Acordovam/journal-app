import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {FirebaseAuth} from "../firebase/config";
import {login, logout} from "../store/auth";

export const useCheckAuth =() => {
    const {status} =useSelector((state: any) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            onAuthStateChanged(FirebaseAuth, async(user) => {
                if(!user) dispatch(logout({}))

                const {uid, email, displayName, photoURL}: any = user
                dispatch(login({uid, email, displayName, photoURL}))
            })
        };
    }, []);
    return {
        status
    }
}