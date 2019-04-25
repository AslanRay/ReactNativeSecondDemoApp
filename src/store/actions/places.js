import {ADD_PLACE,DELETE_PLACE} from './actionTypes';

export const addPlace = (placeName,region, image) => {
    return {
        type: ADD_PLACE,
        //payload que envia el nombre del lugar al reducer
        placeName: placeName,
        region: region,
        image:image
    };
};

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey:key
    };
};