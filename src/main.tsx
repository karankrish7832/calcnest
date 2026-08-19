import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './App.tsx';
import "./i18n/i18n";
import { ThemeProvider } from './context/ThemeContext.tsx';
import { CountryProvider } from "./context/CountryContext";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </ThemeProvider>
  </StrictMode>,
)
