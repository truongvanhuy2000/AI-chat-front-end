import React from 'react';
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import DefaultTheme from "./theme/DefaultTheme";
import AxiosConfig from "./services/AxiosConfig";
import {SnackbarProvider} from "notistack";
import { v4 as uuidv4 } from 'uuid';

function App() {
    let userID = localStorage.getItem('auth.userID')
    if (!userID) {
        userID = uuidv4()
        localStorage.setItem('auth.userID', userID)
    }
    AxiosConfig(userID)
    return (
        <div className="App">
            <ThemeProvider theme={DefaultTheme}>
                <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                    <BrowserRouter>
                        <AppRoutes/>
                    </BrowserRouter>
                </SnackbarProvider>
            </ThemeProvider>

        </div>
    );
}

export default App;
