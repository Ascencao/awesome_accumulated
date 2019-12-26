import React from "react";

import GridHeader from "../GridHeader/GridHeader";
import headerData from "./header.json";

import "./SidebarMain.css";

function SidebarMain() {
  return (
    <React.Fragment>
      <div className="sidebar__main">
        <GridHeader title={headerData.title} labels={headerData.labels} />
      </div>
    </React.Fragment>
  );
}

export default SidebarMain;
