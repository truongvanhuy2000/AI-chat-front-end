import React from 'react';
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import DefaultTheme from "./theme/DefaultTheme";
import AxiosConfig from "./services/AxiosConfig";
import {SnackbarProvider} from "notistack";

function App() {
    AxiosConfig()
    return (
        <div className="App">
            <ThemeProvider theme={DefaultTheme}>
                <SnackbarProvider maxSnack={3}>
                    <BrowserRouter>
                        <AppRoutes/>
                    </BrowserRouter>
                </SnackbarProvider>
            </ThemeProvider>

        </div>
    );
}

export default App;
