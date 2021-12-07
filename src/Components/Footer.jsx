import React from 'react';
import { Navbar } from "react-bootstrap";

// Definicion del Navbar
const CustomFooter = () => {
    const ggonzrGithub = "https://github.com/ggonzr";
    return (
        <Navbar className="justify-content-center" sticky="bottom" bg="dark" variant="dark">
            <Navbar.Brand>Code with ♡ by <a href={ggonzrGithub} target="_blank" rel="noreferrer">ggonzr</a></Navbar.Brand>
        </Navbar>
    );
};

// Exportar
export default CustomFooter;