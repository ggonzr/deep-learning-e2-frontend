/**
 * Vista con las imagenes a mostrar
 */
import React, {useContext, useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import getImages from "../Services/Images";
import { store } from '../Store/store.js';
import {CAMBIAR_IMAGENES} from "../Store/actions";

// Listar las imagenes
const ListImages = () => {
    // Contexto global:
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [currentImages, setCurrentImages] = useState([]);

    // Efecto: Cargar las nuevas imagenes en el state
    useEffect(() => {
        const event = {
            type: CAMBIAR_IMAGENES,
            payload: currentImages
        };
        dispatch(event);
    }, [currentImages, dispatch]);

    // Acciones
    const handleClick = (ev) => {
        const imagesSample = getImages(6);
        // Dev
        // console.log(imagesSample);
        // Cambiar el estado del componente
        setCurrentImages(imagesSample);
    };

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