import { useNavigate } from "react-router-dom"
import "./index.css"

const HomePage = ()=> {
    const navigate = useNavigate();
    const OnClickLogout = ()=>{
        navigate("/",{replace: true})
    }
    return <div className="homepage-container">
        <img className="welcome-image" src="https://res.cloudinary.com/df6mrzzck/image/upload/v1690269310/10808_vusrew.jpg" alt="welcome-logo"/>
        <button className="logout-btn" onClick={OnClickLogout}>Logout</button>
    </div>
}

export default HomePage