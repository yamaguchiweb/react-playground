import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Study } from "./Study";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Study />
  </StrictMode>,
);
