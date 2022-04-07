import React, { useState } from "react";
import "../Navigation/Navigation.css"
import { NavigationData } from "./NavigationData";


export const Navigation = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
      {NavigationData.map((val, key) => {
        return (
          <li 
          key={key} 
          className="row"
          id={window.location.pathname == val.link ? "active" : ""}
          onClick={() => {
            window.location.pathname = val.link
            }}
            >
              <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
          </li>
        )
      })}
      </ul>
    </div>
  )
}