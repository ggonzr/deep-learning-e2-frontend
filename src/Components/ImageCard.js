/**
 * Card para cada una de las imagenes de ejemplo
 */
import React from "react";
import {Button, Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ imageData, imageId }) => {
    let navigate = useNavigate();

    // Acciones
    const handleDetail = (ev) => {navigate("/detail/" + imageId)};

    // Componente
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageData.rgbUrl} />
            <Card.Body>
                <Card.Title>{imageData.id}</Card.Title>
                <Card.Text>
                    Combinación TCI y máscara, imagen: {imageData.id}
                </Card.Text>
                <Button variant="primary" onClick={handleDetail}>Ver detalle</Button>
            </Card.Body>
        </Card>
    );
};

// Exportar
export default ImageCard;