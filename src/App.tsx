import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./pages/Landing/LandingPage";
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    </div>
  );
}

export default App;
