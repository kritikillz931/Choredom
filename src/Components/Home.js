import React from "react";
import "../Components/Home.css"
import { AddChild } from "./AddChild";


export const HomePage = () => {



    return (
        <div className="homeContainer">
            <div className="homeContents">
                <div className="homeTitle">Welcome, {localStorage.getItem("email")} </div>
                <AddChild/>

            </div>
        </div>
    )
}