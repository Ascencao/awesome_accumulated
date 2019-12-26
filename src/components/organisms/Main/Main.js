import React from "react";

import "./Main.css";

import SidebarAside from "../SidebarAside/SidebarAside";
import SidebarMain from "../SidebarMain/SidebarMain";

function Main() {
  return (
    <React.Fragment>
      <div className="lay-sidebar">
        <SidebarMain />
        <SidebarAside />
      </div>
    </React.Fragment>
  );
}

export default Main;
