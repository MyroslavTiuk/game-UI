import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import '../src/assets/fonts/BLENDERPRO-BOLD.TTF';
import '../src/assets/fonts/BLENDERPRO-MEDIUM.TTF';
import '../src/assets/fonts/BLENDERPRO-HEAVY.TTF';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
