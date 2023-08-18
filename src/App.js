import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import './App.css';

const App = () => {

  return (
    <BrowserRouter >
  <Routes>
    <Route exact path="/" element={<LoginPage/>}/>
    <Route exact path="/signup" element={<SignUpPage/>}/>
    <Route path="/home" element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>)
}

export default App;
