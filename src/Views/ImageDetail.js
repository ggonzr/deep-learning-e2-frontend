import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { store } from "../Store/store";
import { Col, Container, Row } from "react-bootstrap";
import { predict } from "../Services/Predict";

// Vista de detalle de una imagen
const ImageDetail = () => {
    // Parametros del Router
    let params = useParams();

    // Contexto global:
    const globalState = useContext(store);
    const imageData = globalState.state.images;

    // Datos de este detalle
    const imageDetail = imageData[params.imageId]

    // Cargar la imagen en el estado tan pronto se tenga
    const [predicted, setPredicted] = useState("");

    // Efecto para realizar el llamado asincrono
    useEffect(() => {
        const execute = async () => {
            try {
                const response = await predict(imageDetail.id);
                const base64Response = response.data.data;
                setPredicted(base64Response);
            }
            catch (e) {
                console.error("Error en el llamado al API: ", e);
            }
        };
        execute();
    }, [imageDetail.id]);

    // Renderizar en una columna la imagen predicha
    const handlePredict = () => {
        // Si no hemos obtenido la respuesta, no renderizar
        if (!predicted) return null;

        // Renderizar la imagen
        const imgSource = `data:image/png;base64, ${predicted}`;
        return (
            <Col>
                <h3>Predicción</h3>
                <img className="justify-content-center" src={imgSource} alt="Predicción por el modelo"/>
            </Col>
        );
    }

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
                {handlePredict()}
            </Row>
        </Container>
    );
};

// Exportar
export default ImageDetail;