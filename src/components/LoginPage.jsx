import React from "react";
import backgroundImage from "../assets/Screen 1 BG.png"

const onLoginFormSubmit = () => {
    return 0;
}

export const LoginPage = () => {
    return (
        <div>
            <h1 className="loginTitle">SLOUGH PC 1</h1>
            <img className="loginBackground" src={backgroundImage} alt="backgroundImage" />
            <form className="loginForm" onSubmit={onLoginFormSubmit}>
                <label for="uname">Username:</label><br />
                <input className="loginInput" type="text" id="uname" name="uname" /><br />
                <label for="passwd">Password:</label><br />
                <input className="loginInput" type="password" id="passwd" name="passwd" />
                <button type="submit" style={{ display: "none" }} />
            </form>
        </div>
    )
}