import React from 'react';
import './useAuth'
import Auth from './useAuth';


const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    const handelSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
             window.location.pathname = '/review';
            console.log("redirect now");
        })
    }
    return (
        <div>
           <h1>Join The Party !!!</h1> 
           {    auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
               <button onClick = {handelSignIn}>Sign in with Google</button>
           }
        </div>
    );
};

export default Login;