import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); //this stop the refresh

        //Login logic...
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in redirect to home
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault(); //this stop the refresh

        //Register logic...
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // create user and redirect to home
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1024px-Amazon.com-Logo.svg.png" 
                    alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. 
                </p>
                <button onClick={register} className="login__createAccountButton">Create your Amazon account.</button>
                
            </div>
        </div>
    )
}

export default Login
