/**
 * Vista con las imagenes a mostrar
 */
import React, {useContext, useEffect, useState} from "react";
import {Button, Container, Row} from "react-bootstrap";
import getImages from "../Services/Images";
import { store } from '../Store/store.js';
import {CAMBIAR_IMAGENES} from "../Store/actions";
import ImageCard from "../Components/ImageCard";

// Listar las imagenes
const ListImages = () => {
    // Contexto global:
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [currentImages, setCurrentImages] = useState([]);

    // Efecto: Cargar las nuevas imagenes en el state
    useEffect(() => {
        //console.log("List Images ejecutado");
        const event = {
            type: CAMBIAR_IMAGENES,
            payload: currentImages
        };
        dispatch(event);
    }, [currentImages]);

    // Acciones
    const handleClick = (ev) => {
        const imagesSample = getImages(6);
        // Dev
        //console.log(imagesSample);

        // Cambiar el estado del componente
        setCurrentImages(imagesSample);
        // Cargarlo forzado en el context
        /**
        const event = {
            type: CAMBIAR_IMAGENES,
            payload: currentImages
        };
        dispatch(event);
        */
    };

    // Otros renders
    const renderImageCards = () => {
        return currentImages.map((el, idx) => {
            return <ImageCard imageData={el} imageId={idx} key={idx}/>
        });
    };

    // Componente
    return (
        <Container>
            <p>
                El objetivo de esta aplicación es mostrar el resultado
                del modelo clasificando algunas imagenes del conjunto de prueba.
                A continuación encontrará una pequeña muestra:
            </p>
            <Button onClick={handleClick}>Generar muestra</Button>
            <Row className="mt-5">
                {renderImageCards()}
            </Row>
        </Container>
    );
};

// Exportar
export default ListImages;