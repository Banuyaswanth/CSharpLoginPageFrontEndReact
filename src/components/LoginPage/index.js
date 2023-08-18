import {Component, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./index.css";

const LoginPage = () => {
    let [username,setUserName] = useState("");
    let [password,setPassword] = useState("");
    const navigate = useNavigate();

    const OnSubmitForm = async() => {
        let userDetails = {
            username: username,
            password: password
        }
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch("https://localhost:7049/api/UserDetails/login",options)
        const responseData = await response.json()
        console.log(responseData)
        if(responseData.prop === 'success'){
            console.log(responseData.prop)
           navigate('/home',{replace: true})
        }
        else{
            alert("Invalid Username or Password. Please try again")
        }
    }

    const OnClickSignUp = () => {
        navigate('/signup',{replace: true})
    }

    return (
        <div className="main-container">
                <div className="login-form">
                    <h1 className="heading">Sign-In</h1>
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={(e)=> {setUserName(e.target.value)}} id="username" type="text" placeholder="username"/>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" placeholder="password"/>
                    <button className="login-btn" onClick={OnSubmitForm}>Login</button>
                    <p className="signup-prompt">If you are a new user click on Sign Up</p>
                    <button className="signup-btn" onClick={OnClickSignUp}>Sign Up</button>
                </div>
            </div>
    )
}

export default LoginPage