import React, { useState } from "react";
import backgroundImage from "../assets/Screen 1 BG.png";

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginFormSubmit = (e) => {
        if (username.toLowerCase() == 'sonia.nygaard' && password == 'HeISeNBeRg') {
            // Route to email page
        } else {
            e.preventDefault();
            document.querySelector('.loginError').style.display = 'block';
        }
    }

    return (
        <div>
            <h1 className="loginTitle">SLOUGH PC 1</h1>
            <img className="loginBackground" src={backgroundImage} alt="backgroundImage" />
            <form className="loginForm" onSubmit={onLoginFormSubmit}>
                <label for="uname">Username:</label><br />
                <input className="loginInput" type="text" onChange={event => setUsername(event.target.value)} /><br />
                <label for="passwd">Password:</label><br />
                <input className="loginInput" type="password" onChange={event => setPassword(event.target.value)} />
                <button type="submit" style={{ display: "none" }} />
            </form>
            <h2 className="loginError">Incorrect Username or Password</h2>
        </div>
    )
}