import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import { StateProvider } from "./Store/store";
import "bootstrap/dist/css/bootstrap.min.css";

// Selector
const root = document.getElementById("root");

// Renderizar
const app = (
    <StateProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </StateProvider>
);
ReactDOM.render(app, root);
