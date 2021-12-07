import React from 'react';
import { Container, Navbar } from "react-bootstrap";

// Definicion del Navbar
const CustomNavbar = () => {
    const banner = "Segmentación Semantica - Grupo 2"
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">{banner}</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

// Exportar
export default CustomNavbar;