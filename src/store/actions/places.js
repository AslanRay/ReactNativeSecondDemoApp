import {ADD_PLACE,DELETE_PLACE} from './actionTypes';
import {authGetToken} from './index';

export const addPlace = (placeName,region, image) => {
    return {
        type: ADD_PLACE,
        //payload que envia el nombre del lugar al reducer
        placeName: placeName,
        region: region,
        image:image
    };

    // -- SUBIR DATOS A LA DB -- //
    // return dispatch => {
    //     const placeData = {
    //         name: placeName,
    //         location: region
    //     }
    //     fetch('https://basicdemoapp-f38fb.firebaseio.com/places.json',{
    //         method:'POST',
    //         body: JSON.stringify(placeData)
    //     }).catch(error => console.log(error))
    //     .then(response => response.json())
    //     .then(parsedResponse => {
    //         console.log(parsedResponse);
    //     });
    // }
};
// -- DESCARGAR DATOS DE LA DB -- //
// export const getPlaces = () => {
//     return dispatch => {
            // dispatch(authGetToken())
            // .then(token => {
            //     return fetch("https://basicdemoapp-f38fb.firebaseio.com/places.json?auth="+token);
            // })
            // .catch(() => {
            //     alert("Token valido no encontrado");
            // })
//         fetch("https://basicdemoapp-f38fb.firebaseio.com/places.json")
//         .catch(err => {
//             alert("Algo salio mal");
//             console.log(err);
//         })
//         .then(res => res.json())
//         .then(parsedRes => {
//             const places = [];
//             for (let key in parsedRes) {
//                 places.push({
//                     ...parsedRes[key],
//                     image: {
//                         uri: parsedRes[key].image
//                     },
//                     key: key
//                 });
//             }
//             dispatch(setPlaces(places));
//         });
//     };
// };

// export const setPlaces = places => {
//     return {
//         type: SET_PLACES,
//         places: places
//     };
// };


export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey:key
    };
};