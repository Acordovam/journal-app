import { signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {FirebaseAuth, } from "./config";


const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async() => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const {displayName, email, photoURL, uid} = result.user
         return {
            ok: true,
             displayName, email, photoURL, uid
         }
    }
    catch (error: any) {
        const errorCode = error.code
        const errorMessage = error.message
        return {
            ok: false,
            message: errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async({email, password, displayName}: any) => {
try{
   const resp =  await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    if (FirebaseAuth.currentUser) {
        await updateProfile(FirebaseAuth.currentUser, {displayName})
    }else{
        await updateProfile(resp.user, {displayName})
    }
    return { ok: true, ...resp.user }
}catch(ex: any){
    return {ok: false, errorMessage: ex.message}
}
}
export const loginEmailPassword = async({email, password}: any) => {
   try{
       const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
       console.log(resp);
       return {ok: true, ...resp.user}
   }catch(ex: any){
       return {ok: false, errorMessage: ex.message}
   }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut()
}