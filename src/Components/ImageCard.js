/**
 * Card para cada una de las imagenes de ejemplo
 */
import React, {useContext} from "react";
import { store } from "../Store/store";
import {Button, Card} from "react-bootstrap";

const ImageCard = ({ imageData }) => {
    // Componente
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageData.rgbUrl} />
            <Card.Body>
                <Card.Title>{imageData.id}</Card.Title>
                <Card.Text>
                    Combinación TCI y máscara, imagen: {imageData.id}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

// Exportar
export default ImageCard;