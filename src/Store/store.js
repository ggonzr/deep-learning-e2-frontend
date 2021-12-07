// Store sencilla empleando React Hooks and React Context
import React, {createContext, useReducer} from 'react';
import {MOSTRAR, OCULTAR, CAMBIAR_IMAGENES} from "./actions";

// Estado inicial
const initialState = {
    // Mostrar la máscara real
    realMasks: false,

    // Arreglo con los datos
    images: []
};

const store = createContext(initialState);
const { Provider } = store;

// State and dispacher
const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case MOSTRAR:
                return {
                    ...state,
                    realMasks: true
                }
            case OCULTAR:
                return {
                    ...state,
                    realMasks: true
                }
            case CAMBIAR_IMAGENES:
                const images = action.payload;
                return {
                    ...state,
                    images: images
                }
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }