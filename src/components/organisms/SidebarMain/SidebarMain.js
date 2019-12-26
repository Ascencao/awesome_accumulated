import React from "react";

import GridHeader from "../GridHeader/GridHeader";

import "./SidebarMain.css";

function SidebarMain() {
  const headerData = {
    title: "Acumulado Grilla",
    labels: [
      {
        title: "Platos principales",
        url: "/"
      },
      {
        title: "Cerdo",
        url: "/"
      },
      {
        title: "Papas",
        url: "/"
      },
      {
        title: "Date un gustito",
        url: "/"
      },
      {
        title: "La familia",
        url: "/"
      }
    ]
  };

  return (
    <React.Fragment>
      <div className="sidebar__main">
        <GridHeader title={headerData.title} labels={headerData.labels} />
      </div>
    </React.Fragment>
  );
}

export default SidebarMain;
