import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Cms from "./pages/Cms/Cms";
import LandingPage from "./pages/LandingPage/LandingPage";
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Cms />
  </BrowserRouter>
);
