import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import { store } from "../Store/store";
import {Col, Container, Row} from "react-bootstrap";

// Vista de detalle de una imagen
const ImageDetail = () => {
    // Parametros del Router
    let params = useParams();

    // Contexto global:
    const globalState = useContext(store);
    const imageData = globalState.state.images;

    // Datos de este detalle
    const imageDetail = imageData[params.imageId]

    return (
        <Container>
            <h2 className="mt-3">Imagen: {imageDetail.id}</h2>
            <Row className="mt-3">
                <Col>
                  <h3>Imagen TCI</h3>
                  <img src={imageDetail.rgbUrl} alt="Imagen TCI"/>
                </Col>
                <Col>
                    <h3>Máscara</h3>
                    <img src={imageDetail.maskUrl} alt="Máscara de la imagen"/>
                </Col>
            </Row>
        </Container>
    );
};

// Exportar
export default ImageDetail;