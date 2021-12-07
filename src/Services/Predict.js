/**
 * Realizar una prediccion al backend con el identificador de una imagen
 */
import axios from "axios";

// URL al backend
const URL = "http://34.145.78.153:8000/predict"

// Realizar peticion POST
// Retorna una promesa con la respuesta del backend
// Esto es, la codificacion de la imagen en base64.
export const predict = (imageId) => {
    const body = {
        image: imageId
    }
    return axios.post(URL, body);
};