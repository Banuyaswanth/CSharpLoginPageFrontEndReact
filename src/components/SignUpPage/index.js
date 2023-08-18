import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SignUpPage = ()=>{
    let [username,setUserName] = useState("")
    let [password,setPassword] = useState('')
    let [confirmpassword, setConfirmPassword] = useState('')
    
    let navigate = useNavigate();
    
    const OnSubmitSignupForm = async(event)=>{
        if(password === confirmpassword) {
            let userDetails = {
                username : username,
                password: password
            }
            console.log(userDetails)
            const options = {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(userDetails),
            }
            const response = await fetch("https://localhost:7049/api/UserDetails/signup", options)
            const responseData = await response.json()
            if(response.ok){
                console.log(responseData)
                alert("User Created Successfully!")
                navigate('/',{replace: true})
            }else{
                console.log(JSON.stringify(response))
                console.log("Error")
            }
        }
        else{
            alert("Both the passwords should be same. Please try again!!")
        }
    }

    return (
        <div className="main-container">
            <div className="login-form">
                    <h2 className="heading">Create an Account</h2>
                    <label htmlFor="username">Enter Username</label>
                    <input value={username} onChange={(event)=>{setUserName(event.target.value)}} id="username" type="text" placeholder="username"/>
                    <label htmlFor="password">Create Password</label>
                    <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password" id="password" placeholder="Enter password"/>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input value={confirmpassword} onChange={(event)=>{setConfirmPassword(event.target.value)}} type="password" id="confirmpassword" placeholder="Confirm password"/>
                    <button className="create-account-btn" onClick={OnSubmitSignupForm}>Create Account</button>
                </div>
            </div>
    )
}

export default SignUpPage