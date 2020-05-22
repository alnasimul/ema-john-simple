import React from 'react';
import './useAuth'
import Auth from './useAuth';


const Login = () => {
    const auth = Auth();
    console.log(auth.signInWithGoogle);
    return (
        <div>
           <h1>Join The Party !!!</h1> 
           {    auth.user ? <button onClick={auth.signOut}>Sign Out</button> :
               <button onClick = {auth.signInWithGoogle}>Sign in with Google</button>
           }
        </div>
    );
};

export default Login;