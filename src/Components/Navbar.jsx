import React from 'react';
import { Navbar } from "react-bootstrap";

// Definicion del Navbar
const CustomNavbar = () => {
    const banner = "Semantic Africa - Land Use - Grupo 2"
    return (
        <Navbar className="justify-content-center" bg="dark" variant="dark">
            <Navbar.Brand href="/">{banner}</Navbar.Brand>
        </Navbar>
    );
};

// Exportar
export default CustomNavbar;