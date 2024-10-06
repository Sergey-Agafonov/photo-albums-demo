import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ProvideAuth from "./useAuth";

import App from "./App";

ReactDOM.render(
  <ProvideAuth>
    <Router>
      <App />
    </Router>
  </ProvideAuth>,
  document.getElementById("root")
);
