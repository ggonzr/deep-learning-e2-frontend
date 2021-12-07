/**
 * Importar algunos archivos de máscaras
 */
import TestSet from "./Assets/test_files_2.json";

// URL base
const urlBase = "https://storage.googleapis.com/frontend-dl-uniandes-entrega-2/test_thumbs";

// Mostrar la ruta de K imagenes
const getImages = (numImages) => {
    // Obtener el indice
    let indexes = Object.keys(TestSet);

    // Obtener una muestra
    const sampleList = [];
    for (let i = 0; i < numImages; i++) {
        let sample = Math.floor(Math.random() * (indexes.length));
        sampleList.push(sample)
    }

    // Calcular la URL
    const urlImages = [];
    for (let idx of sampleList) {
        // ID de la imagen
        const imgId = TestSet[idx];
        // Mascara
        const maskUrl = `${urlBase}/mask_${imgId}.png`;
        // RGB Base
        const rgbUrl = `${urlBase}/rgb_${imgId}.png`;

        // Almacenar
        const urlData = {
            id: imgId,
            maskUrl: maskUrl,
            rgbUrl: rgbUrl
        }

        // Guardar en la lista
        urlImages.push(urlData);
    }

    // Retornar
    return urlImages;
};

// Exportar
export default getImages;
