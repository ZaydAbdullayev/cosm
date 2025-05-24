import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
  // clip-path: polygon(8% 0%, 92% 0%, 100% 20%, 100% 80%, 92% 100%, 8% 100%, 0% 80%, 0% 20%);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

AOS.init({ passive: true });
