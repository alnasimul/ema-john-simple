import React from 'react';
import './use-auth'
import Auth from './use-auth';


const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    return (
        <div>
           <h1>Join The Party !!!</h1> 
           <button onClick = {auth.signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;