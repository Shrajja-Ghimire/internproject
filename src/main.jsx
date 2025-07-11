import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Combineroutes from "./Routing/Combineroutes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Combineroutes />
  </StrictMode>
);
