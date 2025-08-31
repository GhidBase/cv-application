import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainSection from "./components/MainSection";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MainSection></MainSection>
    </StrictMode>
);
