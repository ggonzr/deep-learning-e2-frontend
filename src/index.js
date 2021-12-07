import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import { StateProvider } from "./Store/store";
import ImageDetail from "./Views/ImageDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";


// Selector
const root = document.getElementById("root");

// Renderizar
const app = (
    <StateProvider>
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/detail/:imageId" element={<ImageDetail />} />
            </Routes>
        </BrowserRouter>
    </StateProvider>
);
ReactDOM.render(app, root);
