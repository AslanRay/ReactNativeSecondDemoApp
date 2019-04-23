import {ADD_PLACE,DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        //payload que envia el nombre del lugar al reducer
        placeName: placeName
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey:key
    };
};