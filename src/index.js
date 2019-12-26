// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Stylesheets
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

// Components
import App from "./components/templates/App/App";

import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");

ReactDOM.render(<App />, container);

serviceWorker.unregister();
