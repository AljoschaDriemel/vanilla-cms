
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
 <LandingPage />
</BrowserRouter>
);