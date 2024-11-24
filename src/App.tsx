import React from 'react';
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import DefaultTheme from "./theme/DefaultTheme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={DefaultTheme}>
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            </ThemeProvider>

        </div>
    );
}

export default App;
