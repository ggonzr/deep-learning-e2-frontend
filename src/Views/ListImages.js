/**
 * Vista con las imagenes a mostrar
 */
import React from "react";
import {Button, Container} from "react-bootstrap";

// Listar las imagenes
const ListImages = () => {
    // Acciones
    const handleClick = (ev) => console.log("Hola")

    // Componente
    return (
        <Container>
            <p>
                El objetivo de esta aplicación es mostrar el resultado
                del modelo clasificando algunas imagenes del conjunto de prueba.
                A continuación encontrará una pequeña muestra:
            </p>
            <Button onClick={handleClick}>Click me</Button>
        </Container>
    );
};

// Exportar
export default ListImages;