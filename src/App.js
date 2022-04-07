import { useEffect, useState } from "react";
import { useNavigate, Route, Routes, Switch, BrowserRouter as Router } from "react-router-dom";
import { AuthenticationPage } from "./Authorization/AuthenticationPage";
import { HomePage } from "./Components/Home";
import { Navigation } from "./Navigation/Navigation";
import "./Navigation/Navigation.css"




function App() {
  useEffect(() => {
  
  },[localStorage.getItem("accessToken")])


  if (localStorage.getItem("accessToken")) {
    return (
      <>
      <Navigation/>
      <Routes>
        <Route exact path="/Home" element={<HomePage />} />
      </Routes>
      </>
    )
  } else {
    return (
      <Routes>
        <Route exact path="/" element={<AuthenticationPage />} />
      </Routes>
    )
  }
}



export default App;
