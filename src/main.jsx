import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import ProvideAuth from "./useAuth";

createRoot(document.getElementById("root")).render(
  <ProvideAuth>
    <Router>
      <App />
    </Router>
  </ProvideAuth>
);
